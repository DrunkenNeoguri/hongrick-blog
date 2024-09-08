import OpenGraphImage from "@/component/open-graph-image";
import { firebase } from "@/util/firebase.setting";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    throw new Error("경로를 찾을 수 없거나, 지워진 링크입니다.");
  }

  const getDocState = await getDoc(doc(getFirestore(firebase), "list", id));

  if (!getDocState.exists()) {
    throw new Error("경로를 찾을 수 없거나, 지워진 링크입니다.");
  }

  const data = getDocState.data() as {
    title: string;
    desc: string;
    video: string;
  };

  const ogImage = await OpenGraphImage({
    title: data.title,
    desc: data.desc,
  });
  const pngBuffer = await sharp(Buffer.from(ogImage)).png().toBuffer();

  return new NextResponse(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
