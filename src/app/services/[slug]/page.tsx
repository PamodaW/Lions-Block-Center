import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { T } from "@/lib/i18n";
import { getService, services } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();

  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <p className="eyebrow"><T>Service</T> {s.number}</p>
          <h1 style={{ fontSize: "clamp(40px,5vw,72px)" }}><T>{s.title}</T></h1>
          <p className="lead"><T>{s.description}</T></p>
          <ul className="svc-list">
            {s.items.map((it) => (
              <li key={it}><T>{it}</T><span>→</span></li>
            ))}
          </ul>
          <div className="actions">
            <ButtonLink href="/#contact"><T>Request a quote →</T></ButtonLink>
            <ButtonLink href="/#services" variant="ghost"><T>All services</T></ButtonLink>
          </div>
        </div>
        <div className="hero-img frame">
          <Image src={s.image} alt={s.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
