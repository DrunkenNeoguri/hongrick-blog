export default function FigureBox() {
  return (
    <figure className="flex flex-col gap-4 w-6/12">
      <img
        src="/image-main.webp"
        alt="hong lola and rick rolling thumbnail image"
      />
      <figcaption className="text-white text-right w-full ml-auto mr-0">
        <a href="https://www.freepik.com/free-vector/realistic-multimedia-player-template_4264531.htm#fromView=search&page=2&position=28&uuid=716a1723-5c11-4062-b7b8-a8a855580ecf">
          Image by freepik
        </a>
      </figcaption>
    </figure>
  );
}
