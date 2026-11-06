"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "en" | "si";

// English text -> Sinhala. Anything missing falls back to the English text.
const si: Record<string, string> = {
  // nav
  Services: "සේවා",
  Projects: "ව්‍යාපෘති",
  Process: "ක්‍රියාවලිය",
  About: "අප ගැන",
  Contact: "සම්බන්ධ වන්න",
  Menu: "මෙනුව",
  Close: "වසන්න",
  // hero
  "Design · Build · Fabricate": "සැලසුම් · ඉදිකිරීම් · නිෂ්පාදනය",
  "Cabanas & aluminium,": "කැබානා සහ ඇලුමිනියම්,",
  "built to last.": "කල් පවතින ලෙස නිර්මිතයි.",
  "Lions Block Center designs and builds outdoor cabanas and fabricates precision aluminium work for homes and businesses.":
    "ලයන්ස් බ්ලොක් සෙන්ටර් නිවාස සහ ව්‍යාපාර සඳහා එළිමහන් කැබානා සැලසුම් කර ඉදිකරන අතර නිරවද්‍ය ඇලුමිනියම් නිෂ්පාදන ද සපයයි.",
  "Request a quote →": "මිල ගණන් ඉල්ලන්න →",
  "See our work": "අපගේ වැඩ බලන්න",
  // stats
  "Years of experience": "අත්දැකීම් වසර",
  "Projects delivered": "නිම කළ ව්‍යාපෘති",
  "Specialist services": "විශේෂිත සේවා",
  "Custom made": "ඇණවුම් පරිදි නිපදවූ",
  // services
  "What we do": "අපි කරන දේ",
  "Two crafts,": "ශිල්ප දෙකක්,",
  "one workshop.": "එකම වැඩපළක්.",
  "From the first sketch to the final fitting, we handle design, fabrication and installation under one roof.":
    "පළමු සැලසුමේ සිට අවසන් සවි කිරීම දක්වා සැලසුම, නිෂ්පාදනය සහ ස්ථාපනය අපි එකම ස්ථානයකින් සපයමු.",
  "Cabana creation & development": "කැබානා නිර්මාණය සහ සංවර්ධනය",
  "Full design-and-build service for garden, poolside and resort cabanas — planned around your space, climate and budget.":
    "ඔබේ ඉඩ, දේශගුණය සහ අයවැය අනුව සැලසුම් කළ උද්‍යාන, පොකුණු අසල සහ රිසෝට් කැබානා සඳහා සම්පූර්ණ සැලසුම් සහ ඉදිකිරීම් සේවාව.",
  "Concept & 3D design": "සංකල්ප සහ 3D සැලසුම",
  "Structure & roofing": "ව්‍යුහය සහ වහල",
  "Finishes & landscaping": "නිමාවන් සහ භූ දර්ශන",
  "Plan a cabana": "කැබානාවක් සැලසුම් කරන්න",
  "Aluminium fabrication": "ඇලුමිනියම් නිෂ්පාදනය",
  "Windows, doors, partitions, railings and custom structures, cut and finished to exact measurements.":
    "ජනෙල්, දොරවල්, බෙදුම්, අත්වැට සහ අභිරුචි ව්‍යුහ, නිවැරදි මිනුම් අනුව කපා නිම කර දෙනු ලැබේ.",
  "Windows & doors": "ජනෙල් සහ දොරවල්",
  "Partitions & railings": "බෙදුම් සහ අත්වැට",
  "Custom structures": "අභිරුචි ව්‍යුහ",
  "Get a fabrication quote": "නිෂ්පාදන මිල ගණන් ලබාගන්න",
  Service: "සේවාව",
  "All services": "සියලු සේවා",
  // projects
  "Selected work": "තෝරාගත් වැඩ",
  "Recent projects": "මෑත ව්‍යාපෘති",
  "A selection of our cabana and aluminium projects.":
    "කැබානා සහ ඇලුමිනියම් ස්ථාපන කිහිපයක් පමණි. සැබෑ ව්‍යාපෘති ඡායාරූප ඉක්මනින්.",
  Cabana: "කැබානා",
  Aluminium: "ඇලුමිනියම්",
  "Steel framing": "වානේ රාමු",
  // process
  "How we work": "අපි වැඩ කරන ආකාරය",
  "A clear path": "පැහැදිලි මාවතක්",
  "from idea to handover.": "අදහසේ සිට භාරදීම දක්වා.",
  Consult: "සාකච්ඡාව",
  "We visit, listen and measure.": "අපි පැමිණ, ඇහුම්කන් දී, මනිමු.",
  Design: "සැලසුම",
  "Drawings and a clear quotation.": "සැලසුම් සහ පැහැදිලි මිල ගණන්.",
  Build: "ඉදිකිරීම",
  "Fabrication and construction by our team.": "අපගේ කණ්ඩායමෙන් නිෂ්පාදනය සහ ඉදිකිරීම.",
  Handover: "භාරදීම",
  "Final checks and aftercare.": "අවසන් පරීක්ෂා සහ පසු සත්කාරය.",
  // about
  "About us": "අප ගැන",
  "Craftsmanship you can build on.": "ඔබට විශ්වාස කළ හැකි ශිල්පීය දක්ෂතාව.",
  "Lions Block Center is a design-and-build team focused on cabanas and aluminium fabrication. Replace this text with your company story, team and values.":
    "ලයන්ස් බ්ලොක් සෙන්ටර් යනු කැබානා සහ ඇලුමිනියම් නිෂ්පාදනය කෙරෙහි අවධානය යොමු කළ සැලසුම් සහ ඉදිකිරීම් කණ්ඩායමකි. (සමාගමේ කතාව මෙහි ඇතුළත් කරන්න.)",
  "Talk to us →": "අප සමඟ කතා කරන්න →",
  // cta
  "Start a project": "ව්‍යාපෘතියක් අරඹන්න",
  "Let’s build something that lasts.": "එකට කල් පවතින දෙයක් ගොඩනඟමු.",
  Call: "අමතන්න",
  // 404
  "Page not found.": "පිටුව හමු නොවීය.",
  "Back home →": "මුල් පිටුවට →",
  // footer
  "Address · Email — to be added": "ලිපිනය · විද්‍යුත් තැපෑල — එකතු කරනු ඇත",
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "si" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Renders its English text, or the Sinhala translation when Sinhala is selected. */
export function T({ children }: { children: string }) {
  const { lang } = useLang();
  return <>{lang === "si" ? (si[children] ?? children) : children}</>;
}
