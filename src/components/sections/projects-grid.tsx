import Image from "next/image";
import Link from "next/link";
import { T } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/lib/images";

export function ProjectsGrid() {
  return (
    <section className="block dark" id="projects">
      <div className="wrap">
        <SectionHeading eyebrow={<T>Selected work</T>} title={<T>Recent projects</T>}>
          <T>A selection of our cabana and aluminium projects.</T>
        </SectionHeading>
        <div className="grid">
          {images.projects.map((p, i) => (
            <Link className={`card c${i + 1} frame`} href="/#contact" key={p.src}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
              <span className="tag"><T>{p.tag}</T></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
