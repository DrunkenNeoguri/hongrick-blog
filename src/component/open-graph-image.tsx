import satori from "satori";

const suite = () =>
  fetch(
    new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/font/SUIT-Medium.otf`)
  ).then((res) => res.arrayBuffer());

// const fontPromise = fetch(
//   new URL("../../styles/opensans.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());
export default async function OpenImageGraph({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const suiteBuffer = await suite();

  return await satori(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 1200,
        height: 628,
        background: "#314369",
        padding: 48,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: 1104,
          height: 532,
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 64,
          boxSizing: "border-box",
          padding: 48,
          borderRadius: 24,
          wordBreak: "break-all",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.5,
            color: "#1f2937",
            whiteSpace: "normal",
            textAlign: "center",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.5,
            color: "#1f2937",
            whiteSpace: "normal",
          }}
        >
          {desc}
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
            width: "100%",
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.5,
            color: "#1f2937",
            marginLeft: "auto",
            marginRight: 0,
          }}
        >
          <img
            alt=""
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/icon-image.png`}
            style={{ width: 32, height: 32 }}
          />
          <span>HongLick Blog</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 628,
      fonts: [
        {
          name: "SUITE",
          data: suiteBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
