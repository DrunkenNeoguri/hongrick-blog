"use client";
import { useSearchParams } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function ClipBoard() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [toast, setToast] = useState<boolean>(false);

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post?id=${id}`
    );
    return setToast(true);
  };

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 4000);
    }
  });

  return (
    <div className="flex gap-2 w-full justify-center items-center relative mt-20 mb-10">
      <div className="text-xl bg-white text-gray-800 rounded-lg p-4 w-full">{`${process.env.NEXT_PUBLIC_BASE_URL}/post?id=${id}`}</div>
      <button
        type="button"
        className="text-xl bg-white rounded-lg p-4"
        onClick={onClick}
      >
        📋
      </button>
      {toast && (
        <div className="flex justify-center items-center rounded-lg p-8 text-white bg-gray-900 bg-opacity-80 text-bold text-2xl w-96 absolute top-[-6.5rem]">
          링크가 복사되었습니다!
        </div>
      )}
    </div>
  );
}
