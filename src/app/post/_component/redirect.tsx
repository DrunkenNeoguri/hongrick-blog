"use client";

import { firebase } from "@/util/firebase.setting";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const redirectYoutubeVideo = async () => {
        const getDocState = await getDoc(
          doc(getFirestore(firebase), "list", id)
        );

        if (!getDocState.exists()) {
          return;
        }

        const videoType = getDocState.data().video;

        return videoType === "rick"
          ? router.push("https://youtu.be/dQw4w9WgXcQ")
          : router.push("https://youtu.be/Z22JuE3b2is");
      };
      redirectYoutubeVideo();
    }
  }, [id, router]);

  return <div />;
}
