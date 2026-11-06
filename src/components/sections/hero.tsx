import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { T } from "@/lib/i18n";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <p className="eyebrow"><T>Design · Build · Fabricate</T></p>
          <h1>
            <T>Cabanas & aluminium,</T> <em><T>built to last.</T></em>
          </h1>
          <p className="lead">
            <T>Lions Block Center designs and builds outdoor cabanas and fabricates precision aluminium work for homes and businesses.</T>
          </p>
          <div className="actions">
            <ButtonLink href="/#contact"><T>Request a quote →</T></ButtonLink>
            <ButtonLink href="/#projects" variant="ghost"><T>See our work</T></ButtonLink>
          </div>
        </div>
        <div className="hero-img frame">
          <Image src={images.hero} alt="Modern cabana by the pool" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
