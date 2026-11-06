"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { T, useLang } from "@/lib/i18n";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solid ? "site-header solid" : "site-header"}>
      <div className="wrap nav">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <span>LIONS</span> BLOCK CENTER
        </Link>
        <nav className={open ? "open" : ""} aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="ul" href={n.href} onClick={() => setOpen(false)}>
                  <T>{n.label}</T>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="lang-btn" onClick={() => setLang(lang === "en" ? "si" : "en")} aria-label="Change language">
          {lang === "en" ? "සිං" : "EN"}
        </button>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <T>{open ? "Close" : "Menu"}</T>
        </button>
      </div>
    </header>
  );
}
