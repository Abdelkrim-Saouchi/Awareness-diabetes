import { mdiFacebook, mdiGithub, mdiGmail } from "@mdi/js";
import Icon from "@mdi/react";

const Contact = () => {
  return (
    <main className="flex grow flex-col items-center px-6 py-2">
      <h2 className="mt-10 text-2xl font-semibold">
        هذا الموقع تمت برمجته من طرف{" "}
        <span className="text-green-700">عبد الكريم صوشي</span>، صيدلي ومطور
        مواقع
      </h2>
      <h3 className="mt-3 text-xl font-bold">
        إذا كنت ترغب في التواصل معي لمناقشة أو تصحيح محتوى الموقع يمكنك الاتصال
        بي عبر الوسائل التالية:
      </h3>
      <div className="mt-4 flex items-center gap-3">
        <a
          href="https://github.com/Abdelkrim-Saouchi"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <Icon path={mdiGithub} size={2} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005904095028"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <Icon path={mdiFacebook} size={2} />
        </a>
        <a
          href="mailto:krimouv1995@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <Icon path={mdiGmail} size={2} />
        </a>
      </div>
    </main>
  );
};

export default Contact;
