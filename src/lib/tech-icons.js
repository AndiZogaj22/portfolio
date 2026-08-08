import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoUnity, BiLogoPhp } from "react-icons/bi";
import { SiExpress, SiNextdotjs, SiDotnet } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

/**
 * @typedef {Object} TechIconEntry
 * @property {import("react").ComponentType} Icon
 * @property {string} label
 * @property {string} className
 */

/** @type {Record<string, TechIconEntry>} */
export const TECH_ICON_MAP = {
  html5: { Icon: FaHtml5, label: "HTML", className: "text-orange-500" },
  css3: { Icon: FaCss3Alt, label: "CSS", className: "text-blue-500" },
  javascript: { Icon: FaJs, label: "JavaScript", className: "text-yellow-500" },
  react: { Icon: FaReact, label: "React", className: "text-sky-500" },
  nextjs: { Icon: SiNextdotjs, label: "Next.js", className: "text-foreground" },
  tailwind: { Icon: BiLogoTailwindCss, label: "Tailwind CSS", className: "text-sky-400" },
  mongodb: { Icon: BiLogoMongodb, label: "MongoDB", className: "text-green-500" },
  express: { Icon: SiExpress, label: "Express", className: "text-foreground" },
  php: { Icon: BiLogoPhp, label: "PHP", className: "text-indigo-400" },
  mssql: { Icon: DiMsqlServer, label: "SQL Server", className: "text-red-600" },
  dotnet: { Icon: SiDotnet, label: ".NET", className: "text-purple-500" },
  unity: { Icon: BiLogoUnity, label: "Unity", className: "text-foreground" },
};
