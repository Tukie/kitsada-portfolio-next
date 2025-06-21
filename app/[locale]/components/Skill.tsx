import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Skill() {
  const t = useTranslations("Skill");

  const skillList = [
    {
      group: "LANGUAGES",
      skills: [
        { name: "PHP", level: t("advanced"), iconFile: "php.png" },
        {
          name: "JavaScript",
          level: t("intermediate"),
          iconFile: "javascript.png",
        },
        {
          name: "TypeScript",
          level: t("beginner"),
          iconFile: "typescript.png",
        },
      ],
    },
    {
      group: "FRONTEND",
      skills: [
        { name: "Vue.js", level: t("advanced"), iconFile: "vue.svg" },
        { name: "Nuxt.js", level: t("beginner"), iconFile: "nuxt.svg" },
        { name: "Next.js", level: t("beginner"), iconFile: "next.svg" },
        {
          name: "Tailwind CSS",
          level: t("intermediate"),
          iconFile: "tailwind.webp",
        },
        { name: "Bootstrap", level: t("advanced"), iconFile: "bootstrap.png" },
        { name: "Axios", level: t("intermediate"), iconFile: "axios.png" },
        {
          name: "Tanstack (Vue Query)",
          level: t("beginner"),
          iconFile: "tanstack.png",
        },
        { name: "PrimeVue", level: t("advanced"), iconFile: "primevue.png" },
        { name: "Pinia", level: t("beginner"), iconFile: "pinia.svg" },
        {
          name: "Vee-Validate",
          level: t("intermediate"),
          iconFile: "vee-validate.png",
        },
      ],
    },
    {
      group: "BACKEND",
      skills: [
        { name: "Leaf PHP", level: t("advanced"), iconFile: "leaf.png" },
        { name: "Laravel", level: t("intermediate"), iconFile: "laravel.svg" },
        { name: "Express.js", level: t("beginner"), iconFile: "express.webp" },
        { name: "Hono.js", level: t("beginner"), iconFile: "hono.png" },
        { name: "Node.js", level: t("beginner"), iconFile: "nodejs.svg" },
      ],
    },
    {
      group: "DATABASE",
      skills: [{ name: "MySQL", level: t("advanced"), iconFile: "sql.png" }],
    },
    {
      group: "VERSION CONTROL",
      skills: [
        { name: "Git", level: t("intermediate"), iconFile: "github.png" },
      ],
    },
    {
      group: "OTHER",
      skills: [
        { name: "Docker", level: t("beginner"), iconFile: "docker.webp" },
        { name: "Zod", level: t("intermediate"), iconFile: "zod.png" },
        { name: "JWT/Auth", level: t("intermediate"), iconFile: "jwt.png" },
      ],
    },
  ];

  return (
    <>
      <div className="text-center mb-15">
        <h2 className="text-3xl font-semibold mb-2 text-white">{t("title")}</h2>
        <p className="text-white">{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 gap-20">
        {skillList.map((skill) => (
          <div
            key={skill.group}
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            <h3 className="text-xl font-semibold mb-2 text-white w-[15rem] shrink-0 text-center lg:text-left">
              {skill.group}
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10">
              {skill.skills.map((skillItem) => (
                <div
                  key={skillItem.name}
                  className="flex items-center gap-3 w-[10rem]"
                >
                  <Image
                    src={`/${skillItem.iconFile}`}
                    alt={skillItem.name}
                    width={32}
                    height={32}
                    className="bg-white w-12 h-12 rounded-full object-contain p-2"
                  />
                  <div>
                    <p className="text-white">{skillItem.name}</p>
                    <p className="text-white/70">{skillItem.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
