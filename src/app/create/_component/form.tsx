"use client";

import { ToastContext } from "@/app/provider/toast-provider";
import { firestore } from "@/util/firebase.setting";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

export default function Form() {
  const router = useRouter();
  const { setToastMessage } = useContext(ToastContext);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    link: "rick",
  });

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    if (id === "title" && value.length > 30) {
      return;
    }

    if (id === "desc" && value.length > 60) {
      return;
    }

    setFormData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const onChangeVideo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (setToastMessage && (!formData.title || formData.title.trim() === "")) {
      return setToastMessage("제목이 입력되지 않았습니다.");
    }

    if (setToastMessage && (!formData.desc || formData.desc.trim() === "")) {
      return setToastMessage("내용이 입력되지 않았습니다.");
    }

    const addDocState = await addDoc(
      collection(await firestore(), "list"),
      formData
    );

    if (addDocState) {
      return router.push(`/create/complete?id=${addDocState.id}`);
    }
  };

  const titleErrorStyle =
    formData.title.length >= 30 ? "text-red-600" : "text-gray-800";

  const descErrorStyle =
    formData.desc.length >= 60 ? "text-red-600" : "text-gray-800";

  return (
    <form className="flex flex-col gap-8 relative" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="title" className="text-base font-semibold">
          제목
        </label>
        <input
          id="title"
          className="border-2 text-base px-4 py-2 rounded-md border-gray-500 text-gray-800"
          maxLength={30}
          value={formData.title}
          onChange={onChange}
        />
        <span
          className={
            "text-base right-4 top-[2.375rem] absolute " + titleErrorStyle
          }
        >{`${formData.title.length}/30`}</span>
      </div>
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="desc" className="text-base font-semibold">
          내용
        </label>
        <textarea
          id="desc"
          className="border-2 text-base px-4 py-2 rounded-md border-gray-500 text-gray-800 resize-none"
          maxLength={60}
          value={formData.desc}
          onChange={onChange}
        />
        <span
          className={
            "text-base right-4 bottom-2 text-gray-800 absolute " +
            descErrorStyle
          }
        >{`${formData.desc.length}/60`}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-base font-semibold">링크와 연결할 영상</label>
        <div className="flex gap-4 cursor-pointer">
          <div className="flex gap-1">
            <input
              type="radio"
              id="rick"
              name="link"
              value="rick"
              defaultChecked={true}
              checked={formData.link === "rick"}
              onChange={onChangeVideo}
            />
            <label htmlFor="rick">Rick Rolling</label>
          </div>

          <div className="flex gap-1 cursor-pointer">
            <input
              type="radio"
              id="hong"
              name="link"
              value="hong"
              checked={formData.link === "hong"}
              onChange={onChangeVideo}
            />
            <label htmlFor="hong">Hong Lola</label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-lg px-4 py-2 rounded-md bg-pink-600"
      >
        생성
      </button>
    </form>
  );
}
