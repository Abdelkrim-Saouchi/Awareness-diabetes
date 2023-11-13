import IMCCalculator from "./IMCCalculator";

const DiabetesPrev = () => {
  return (
    <div>
      <p>
        بالنسبة للنوع الأول، أسباب حدوثه غير معروفة حتى اليوم وبالتالي لا نعرف
        كيفية الوقاية منه.{" "}
      </p>
      <p>بالنسبة للنوع الثاني فأن تجنبه ممكن بتبني نمط عيش صحي:</p>
      <div className="mt-2">
        <p className="text-green-700">
          تناول غذاء صحي وتجنب السكريات والدهون المشبعة:
        </p>
        <p>
          الحلوى والمشروبات الغازية والمحلات والمقليات بجميع أنواعها تعد أحد
          أسباب ليس فقط مرض السكري بل كثير من الأمراض المزمنة حاليا.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-green-700">ممارسة نشاط بدني بشكل يومي:</p>
        <p>
          وجب ممارسة أي نشاط بدني لنصف ساعة على الأقل يوميا والأفضل ممارسة أي
          رياضة بدنية كهواية.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-green-700">
          المحافظة على وزن صحي وتجنب الوزن الزائد:
        </p>
        <p>
          يعد الوزن الزائد والسمنة أحد الأسباب الرئيسية للإصابة بمرض السكري
          النوع الثاني.
        </p>
        <p className="text-red-700">كيف أعرف أن وزني مثالي أو زائد؟</p>
        <p>
          نعرف حالة وزننا من خلال حساب مؤشر كتلة الجسم <span>IMC </span>
          المتفق عليه علميا، يحسب بقسمة الوزن بالكيلوغرام على مربع الطول بالمتر.
        </p>
        <p>إذا كان مؤشر الكتلة:</p>
        <ul className="list-inside list-disc">
          <li>أقل من :18.4 الشخص مصاب بالنحافة وممكن سوء التغذية.</li>
          <li>بين 18.5 و24.9: الوزن مثالي</li>
          <li>بين 25 و 29.9: الشخص يعاني من الوزن الزائد</li>
          <li>بين 30 و 34.9: الشخص يعاني من سمنة متوسطة</li>
          <li>بين 35 و 39.9: الشخص يعاني من سمنة مفرطة</li>
          <li>أكبر من 40: الشخص يعاني من سمنة خطيرة</li>
        </ul>
      </div>
      <div>
        <p className="text-green-700">أحسب مؤشر كتلة جسمك:</p>
        <IMCCalculator />
      </div>
    </div>
  );
};

export default DiabetesPrev;
