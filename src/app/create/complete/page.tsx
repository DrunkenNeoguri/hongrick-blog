import Link from "next/link";
import ClipBoard from "./_component/clipboard";
import Description from "./_component/description";

export default function Complete() {
  return (
    <section className="flex h-full justify-between gap-10">
      <div className="flex flex-col gap-4">
        <Description />
        <ClipBoard />
        <Link
          href="/create"
          className="text-lg text-center px-4 py-4 rounded-md bg-pink-600"
        >
          이전 화면으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
