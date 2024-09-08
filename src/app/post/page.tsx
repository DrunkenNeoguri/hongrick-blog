import { firebase } from "@/util/firebase.setting";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Redirect from "./_component/redirect";

async function fetchOpenGraphImageURL(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch OG image");
  }

  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);

  return imageUrl;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const firestore = getFirestore(firebase);

  const docRef = doc(firestore, "list", searchParams.id);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    return {
      title: "페이지를 찾을 수 없습니다.",
      description: "해당 페이지는 존재하지 않는 페이지인 듯 합니다.",
    };
  }

  const data = docSnapshot.data() as {
    title: string;
    desc: string;
  };

  const openGraphImage = fetchOpenGraphImageURL(searchParams.id);

  return {
    title: data.title || "코딩 입문자를 위한 VSCode 꿀팁 10가지",
    description:
      data.desc ||
      "코딩 할 때 많이 쓰게 되는 IDE인 VSCode와 관련하여 유용하게 쓸 수 있는 꿀팁 10가지를 준비했습니다.",
    openGraphImage: {
      title: data.title,
      description: data.desc,
      images: [openGraphImage],
    },
  };
}

export default function Post() {
  return <Redirect />;
}
