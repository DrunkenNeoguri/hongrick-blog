import ToastProvider from "../provider/toast-provider";
import Description from "./_component/description";
import FigureBox from "./_component/figure-box";
import Form from "./_component/form";
import ToastMessage from "./_component/toast-message";

export default function Main() {
  return (
    <section className="flex h-full justify-between gap-10">
      <div className="flex flex-col gap-4 w-6/12">
        <Description />
        <ToastProvider>
          <Form />
          <ToastMessage />
        </ToastProvider>
      </div>
      <FigureBox />
    </section>
  );
}
