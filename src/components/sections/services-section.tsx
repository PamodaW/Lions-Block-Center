import Image from "next/image";
import Link from "next/link";
import { T } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <SectionHeading eyebrow={<T>What we do</T>} title={<><T>Two crafts,</T><br /><T>one workshop.</T></>}>
          <T>From the first sketch to the final fitting, we handle design, fabrication and installation under one roof.</T>
        </SectionHeading>

        {services.map((s, i) => (
          <article className={i % 2 ? "svc flip" : "svc"} key={s.slug}>
            <div className="svc-img frame">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 900px) 100vw, 560px" />
            </div>
            <div>
              <div className="num">{s.number}</div>
              <h3><T>{s.title}</T></h3>
              <p><T>{s.description}</T></p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}><T>{it}</T><span>→</span></li>
                ))}
              </ul>
              <Link className="btn ghost" href={`/services/${s.slug}`}><T>{s.cta}</T></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
