import qrCode from "../assets/qrcode.png";

const Home = () => {
  return (
    <main className="flex grow flex-col items-center px-6 py-2">
      <h2 className="mb-4 mt-2  text-center text-3xl font-bold">
        الحملة التحسيسية حول مرض السكري
      </h2>
      <h3 className="text-2xl font-bold">متوسطة الشهيد شردوح العربي</h3>
      <h4 className="text-xl font-semibold">14 نوفمبر 2023</h4>
      <div>
        <h5 className="mb-2 text-xl font-bold">شكر وعرفان:</h5>
        <p className="text-xl font-semibold opacity-80">
          أود أولا أن أقدم جزيل الشكر والعرفان لكل المنظمين لهذه التظاهرة من
          طاقم إداري وتربوي وأولياء تلاميذ، كما أود أن أشكر الحاضرين من أساتذة
          وتلاميذ وكذلك المدعوين وما يقدمونه من إضافة.
        </p>
      </div>
      <div className="mt-4">
        <h5 className="mb-2 text-xl font-bold">تعريف بالموقع:</h5>
        <p className="text-xl font-semibold opacity-80">
          هذا الموقع أنشئ خصيصا لهذه التظاهرة يحتوي معلومات نحسب أن تكون نافعة
          بإذن الله للجميع حول مرض السكري، يمكن للتلاميذ بإذن من أوليائهم أو
          أساتذتهم الإطلاع على المعلومات التي فيه في أي وقت أرادوا.
        </p>
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">
          يمكن الإطلاع على الموقع عبر الرابط التالي:
        </p>
        <p className="mb-4 text-xl font-semibold">
          diabetes-awareness.netlify.app
        </p>
        <p className="text-xl font-semibold">أو عن طريق نسخ كيوأركود:</p>
        <img src={qrCode} alt="QR code" className="mb-8 w-[300px]" />
      </div>
    </main>
  );
};

export default Home;
