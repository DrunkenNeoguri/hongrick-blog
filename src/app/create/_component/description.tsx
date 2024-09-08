export default function Description() {
  return (
    <>
      <h1 className="text-4xl font-bold break-keep whitespace-pre-wrap">
        {`Rick Rolling / Hong Lola\nVending Machine`}
      </h1>
      <p className="text-lg font-medium">
        요즘 귀에 계속 홍롤라가 맴돌아서 고민하다가 Rick Rolling처럼 해보면
        재밌을 거 같아서 자판기 만들어보기로 했습니다.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-base font-medium">
          제목, 내용을 넣어주시면 아래의 내용을 토대로 오픈 그래프 이미지가 담긴
          링크가 생성됩니다.
        </p>
        <p className="text-base font-medium">
          해당 링크를 복사하여 다른 분들에게 Rick Rolling과 홍롤라를
          퍼뜨려보세요.
        </p>
      </div>
    </>
  );
}
