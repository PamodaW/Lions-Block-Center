import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed, Noto_Sans_Sinhala } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sinhala = Noto_Sans_Sinhala({ variable: "--font-sinhala", subsets: ["sinhala"] });
const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["500","600","700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cabana Design & Build · Aluminium Fabrication`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#111315" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${sinhala.variable}`}>
      <body>
        <LangProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
