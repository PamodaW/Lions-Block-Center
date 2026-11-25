"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "en" | "si";

// English text -> Sinhala. Anything missing falls back to the English text.
const si: Record<string, string> = {
  // nav
  Services: "සේවා",
  Projects: "නිමකල ව්‍යාපෘති",
  Process: "ක්‍රියාපටිපාටිය",
  About: "අප ගැන",
  Contact: "සම්බන්ධ වන්න",
  Menu: "මෙනුව",
  Close: "වසන්න",
  
  // hero
  "Design · Build · Fabricate": "සැලසුම්කරණය · ඉදිකිරීම් · නිෂ්පාදනය",
  "Cabanas & aluminium,": "කැබනා සහ ඇලුමිනියම් නිර්මාණ,",
  "built to last.": "දිගුකල් පවතින නිමාවකින්.",
  "Lions Block Center designs and builds outdoor cabanas and fabricates precision aluminium work for homes and businesses.":
    "ලයන්ස් බ්ලොක් සෙන්ටර් වෙතින් නිවාස සහ ව්‍යාපාරික ස්ථාන සඳහා උසස් ප්‍රමිතියෙන් යුතු එළිමහන් කැබනා (Cabanas) සැලසුම් කර ඉදිකිරීම සහ සියලුම ඇලුමිනියම් නිමවුම් කටයුතු වගකීමෙන් යුතුව සිදුකර දෙනු ලැබේ.",
  "Request a quote →": "මිල ගණන් කැඳවන්න →",
  "See our work": "අපගේ නිර්මාණ බලන්න",
  
  // stats
  "Years of experience": "විශ්වාසනීය වසර ගණනාවක අත්දැකීම්",
  "Projects delivered": "නිමකල ව්‍යාපෘති සංඛ්‍යාව",
  "Specialist services": "විශේෂඥ සේවාවන්",
  "Custom made": "ඔබේ රුචිකත්වය පරිදි",
  
  // services
  "What we do": "අපගේ සේවාවන්",
  "Two crafts,": "සුවිශේෂී සේවාවන් දෙකක්,",
  "one workshop.": "එකම වහලක් යටින්.",
  "From the first sketch to the final fitting, we handle design, fabrication and installation under one roof.":
    "මූලික සැලසුමේ සිට අවසන් නිමාව සහ සවිකිරීම දක්වා සියලුම සැලසුම්කරණ, නිෂ්පාදන කටයුතු එකම වහලක් යටින් විශ්වාසනීයව ඉටුකරගත හැක.",
  "Cabana creation & development": "කැබනා නිර්මාණය සහ ඉදිකිරීම",
  "Full design-and-build service for garden, poolside and resort cabanas — planned around your space, climate and budget.":
    "ඔබේ ඉඩකඩ, පරිසරය සහ අයවැයට ගැළපෙන පරිදි ගෙවතු, පිහිනුම් තටාක අසල සහ රිසෝට් (Resort) සඳහා අවශ්‍ය කැබනා සැලසුම් කිරීමේ සිට ඉදිකිරීම දක්වා සම්පූර්ණ සේවාව.",
  "Concept & Quote Creation": "මූලික සංකල්ප සහ මිල ඇස්තමේන්තු",
  "Structure & roofing": "මූලික ව්‍යුහය සහ වහල සෙවිලි කිරීම",
  "Finishes & landscaping": "අවසන් නිමාව සහ භූ දර්ශන සැලසුම්කරණය",
  "Plan a cabana": "කැබනාවක් සැලසුම් කරගන්න",
  "Aluminium fabrication": "ඇලුමිනියම් නිමවුම් කටයුතු",
  "Windows, doors, partitions, railings and custom structures, cut and finished to exact measurements.":
    "නිවැරදිම මිනුම්වලට අනුව නිමකල ජනෙල්, දොරවල්, ඇලුමිනියම් පාටිෂන් (Partitions), අත්වැටවල් සහ අනෙකුත් සියලුම ඇලුමිනියම් ව්‍යුහයන්.",
  "Windows & doors": "ජනෙල් සහ දොරවල්",
  "Partitions & railings": "පාටිෂන් සහ අත්වැටවල්",
  "Custom structures": "අවශ්‍යතාවය පරිදි නිපදවන ව්‍යුහයන්",
  "Get a fabrication quote": "මිල ඇස්තමේන්තුවක් ලබාගන්න",
  Service: "සේවාව",
  "All services": "සියලුම සේවාවන්",
  
  // projects
  "Selected work": "අපගේ සුවිශේෂී නිර්මාණ",
  "Recent projects": "මෑතකදී නිමකල ව්‍යාපෘති",
  "A selection of our cabana and aluminium projects.":
    "අප විසින් නිම කරන ලද කැබනා සහ ඇලුමිනියම් ව්‍යාපෘති කිහිපයක්. සැබෑ ව්‍යාපෘති ඡායාරූප ළඟදීම බලාපොරොත්තු වන්න.",
  Cabana: "කැබනා",
  Aluminium: "ඇලුමිනියම්",
  "Steel framing": "වානේ රාමු කටයුතු",
  
  // process
  "How we work": "අපගේ ක්‍රියාපටිපාටිය",
  "A clear path": "විශ්වාසනීය පියවර සමූහයක්,",
  "from idea to handover.": "ඔබේ අදහසේ සිට සාර්ථක නිමාව දක්වා.",
  Consult: "මූලික සාකච්ඡාව",
  "We visit, listen and measure.": "අප ඔබගේ ස්ථානයට පැමිණ, අවශ්‍යතා හඳුනාගෙන නිවැරදි මිනුම් ලබාගන්නෙමු.",
  Design: "සැලසුම්කරණය",
  "Drawings and a clear quotation.": "සැලසුම් ඇඳීම් සහ නිවැරදි මිල ඇස්තමේන්තු ලබාදීම.",
  Build: "ඉදිකිරීම්",
  "Fabrication and construction by our team.": "අපගේ දක්ෂ ශිල්පීන් අතින් සිදුවන නිෂ්පාදන සහ ඉදිකිරීම් කටයුතු.",
  Handover: "භාරදීම",
  "Final checks and aftercare.": "අවසන් තත්ත්ව පරීක්ෂාව සහ පසුකාලීන නඩත්තු සේවා.",
  
  // about
  "About us": "අප ගැන",
  "Craftsmanship you can build on.": "ඔබට සැමදා විශ්වාසය තැබිය හැකි විශිෂ්ට ශිල්පීය ඥානය.",
  "Lions Block Center is a design-and-build team focused on cabanas and aluminium fabrication. Replace this text with your company story, team and values.":
    "ලයන්ස් බ්ලොක් සෙන්ටර් යනු කැබනා ඉදිකිරීම් සහ ඇලුමිනියම් නිෂ්පාදන ක්ෂේත්‍රයේ ප්‍රමුඛ පෙළේ සැලසුම් සහ ඉදිකිරීම් කණ්ඩායමකි. (ඔබේ සමාගමේ ඉතිහාසය සහ වටිනාකම් මෙතැනට ඇතුළත් කරන්න.)",
  "Talk to us →": "අප හා සම්බන්ධ වන්න →",
  
  // cta
  "Start a project": "අදම ඔබේ ව්‍යාපෘතිය අරඹන්න",
  "Let’s build something that lasts.": "දිගුකල් පවතින ගුණාත්මක යමක් එකතුව ගොඩනඟමු.",
  Call: "දුරකථන ඇමතුම්",
  
  // 404
  "Page not found.": "පිටුව සොයාගත නොහැක.",
  "Back home →": "මුල් පිටුවට →",
  
  // footer
  "Address · Email — to be added": "ලිපිනය · විද්‍යුත් තැපෑල — ළඟදීම ඇතුළත් කෙරේ",
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
