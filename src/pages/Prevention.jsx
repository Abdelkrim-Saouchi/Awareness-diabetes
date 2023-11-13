import ComplicationPrev from "../components/ComplicationPrev";
import DiabetesPrev from "../components/DiabetesPrev";
import QAbar from "../components/QAbar";

const Prevention = () => {
  const contents = [
    {
      question: "كيف يمكننا الوقاية من مضاعفات السكري؟",
      body: <ComplicationPrev />,
    },
    {
      question: "كيف نقي أنفسنا من مرض السكري؟",
      body: <DiabetesPrev />,
    },
  ];
  return (
    <main className="flex grow flex-col items-center px-6 py-2">
      <h2 className="mt-4 text-3xl font-bold">الوقاية من السكري ومضاعفاته</h2>
      <div className="my-6 flex w-full flex-col gap-8 md:w-4/5">
        {contents.map((content) => (
          <QAbar key={content.question} content={content} />
        ))}
      </div>
    </main>
  );
};

export default Prevention;
