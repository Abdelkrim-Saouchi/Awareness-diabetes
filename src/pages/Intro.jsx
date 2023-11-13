import Def from "../components/Def";
import QAbar from "../components/QAbar";
import Symptoms from "../components/Symptoms";
import Types from "../components/Types";

const Intro = () => {
  const contents = [
    {
      question: "ما هو مرض السكري؟",
      body: <Def />,
    },
    {
      question: "ما  هي أعراض السكري؟",
      body: <Symptoms />,
    },
    {
      question: "ما هي أنواع مرض السكري؟",
      body: <Types />,
    },
  ];
  return (
    <main className="flex grow flex-col items-center px-6 py-2">
      <h2 className="mt-4 text-3xl font-bold">مقدمة حول مرض السكري</h2>
      <div className="my-6 flex w-full flex-col gap-8 md:w-4/5">
        {contents.map((content) => (
          <QAbar key={content.question} content={content} />
        ))}
      </div>
    </main>
  );
};

export default Intro;
