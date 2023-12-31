import QAbar from "../components/QAbar";

const ComplicationsDef = () => {
  return (
    <div>
      <div>
        <p className="text-green-700">غيبوبة الأسيتون:</p>
        <p>
          هي حالة خطيرة تحدث خاصة عند{" "}
          <span className="text-red-700">مرضى السكري النوع الأول</span> في حالة
          عدم تلقي العلاج في أسرع وقت.
        </p>
        <p>
          بسبب غياب او نقص حاد في إفراز الأنسولين لا يدخل السكر إلى الخلايا مما
          يجبرها على البحث على مصدر آخر للطاقة غير السكر وتستقر عند الأحماض
          الدهنية كمصدر بديل للطاقة، هدم هذه الأحماض يؤدي إلى إنتاج الأسيتونات
          والتي يعتبر تراكمها في الجسم ساما .
        </p>
        <p>
          الأعراض الأولى تتلخص في إرتفاع شديد في وتيرة شرب السوائل ووتيرة التبول
          والأكل .
        </p>
        <p>
          كثرة التبول مع تراكم السيتونات تؤدي إلى حدوث جفاف حاد وفقدان الدم
          لخاصيته القلوية ليصبح حامضيا كل هذا يؤدي بالمريض تدريجيا إلى الدخول في
          حالة فقدان الوعي ثم غيبوبة تصاحبها إرتفاع في وتيرة التنفس مع رائحة
          مميزة للفم تشبه رائحة الخل.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-green-700">غيبوبة فرط سكر الدم:</p>
        <p>
          حالة نادرة لكن خطيرة(غالبا مميتة) تحدث{" "}
          <span className="text-red-700">
            عند المسنين المرضى بالسكري النوع الثاني
          </span>
          ، تكون نتيجة إرتفاع كبير في السكر في الدم (أكثر من 10 غرام/ل) مسببا
          جفافا حادا جدا وإرتفاعا حادا في شوارد الدم .
        </p>
        <p>
          هذه الغيبوبة يمكن أن يكون عاملها المحفز هو عدوى حادة أو إسهال حاد أو
          مناخ شديد الحرارة أو إستعمال سيء لبعض الأدوية(التداوي الذاتي) .
        </p>
      </div>
      <div className="mt-2">
        <p className="text-green-700">غيبوبة حمض اللاكتيك:</p>
        <p>
          حالة نادرة جدا لكن خطيرة جدا ،{" "}
          <span className="text-red-700">
            تحدث عند البالغين الذين يتناولون أدوية عائلة البيغوانيد(دواء
            غلوكوفاج وأدويته الجنيسة)
          </span>{" "}
          ولديهم موانع ضد إستعمال هذه الأدوية(خطورة التداوي الذاتي).
        </p>
      </div>
      <div className="mt-2">
        <p className="text-green-700">تلف الأعضاء المزمن:</p>
        <p>
          الإرتفاع المزمن للسكر في الدم يؤدي مع مرور السنين إلى تلف في الشعيرات
          والأوعية الدموية والأعصاب:
        </p>
        <ul className="list-inside list-disc">
          <li>شعور بالألم والخدر في أنحاء مختلفة في الجسم</li>
          <li>قصور في الرؤية أو فقدانها</li>
          <li>قصور كلوي قد يصل إلى توقف الكلى والإستعانة بغسيل الكلى</li>
          <li>أمراض القلب والشرايين قد تصل إلى ذبحة صدرية أو دماغية</li>
          <li>
            ضعف حاد في المناعة يؤدي إلى إصابات متكررة بالعدوى وخطر الوفاة خلال
            الأوبئة
          </li>
          <li>
            تقرح وتعفن في القدمين وخطر الإصابة بالقدم السكرية وخطر قطع القدم
            المصابة
          </li>
        </ul>
      </div>
    </div>
  );
};

const Complications = () => {
  const contents = [
    {
      question: "ما هي مضاعفات السكري",
      body: <ComplicationsDef />,
    },
  ];
  return (
    <main className="flex grow flex-col items-center px-6 py-2">
      <h2 className="mt-4 text-3xl font-bold"> لمحة عن مضاعفات السكري</h2>
      <div className="my-6 flex w-full flex-col gap-8 md:w-4/5">
        {contents.map((content) => (
          <QAbar key={content.question} content={content} />
        ))}
      </div>
    </main>
  );
};

export default Complications;
