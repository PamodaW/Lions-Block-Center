import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { T } from "@/lib/i18n";
import { images } from "@/lib/images";

export function AboutSection() {
  return (
    <section className="block about" id="about">
      <div className="wrap">
        <div className="about-img frame">
          <Image src={images.about} alt="Our workshop" fill sizes="(max-width: 900px) 100vw, 560px" />
        </div>
        <div>
          <p className="eyebrow"><T>About us</T></p>
          <h2><T>Craftsmanship you can build on.</T></h2>
          <p className="lead">
            <T>Lions Block Center is a design-and-build team focused on cabanas and aluminium fabrication. Replace this text with your company story, team and values.</T>
          </p>
          <ButtonLink href="/#contact"><T>Talk to us →</T></ButtonLink>
        </div>
      </div>
    </section>
  );
}
