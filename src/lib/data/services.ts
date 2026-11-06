import { images } from "@/lib/images";

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  cta: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "cabana-design-build",
    number: "01",
    title: "Cabana creation & development",
    short: "Full design-and-build service for garden, poolside and resort cabanas.",
    description:
      "Full design-and-build service for garden, poolside and resort cabanas — planned around your space, climate and budget.",
    items: ["Concept & 3D design", "Structure & roofing", "Finishes & landscaping"],
    cta: "Plan a cabana",
    image: images.cabana,
    imageAlt: "Cabana under construction",
  },
  {
    slug: "aluminium-fabrication",
    number: "02",
    title: "Aluminium fabrication",
    short: "Windows, doors, partitions, railings and custom structures.",
    description:
      "Windows, doors, partitions, railings and custom structures, cut and finished to exact measurements.",
    items: ["Windows & doors", "Partitions & railings", "Custom structures"],
    cta: "Get a fabrication quote",
    image: images.aluminium,
    imageAlt: "Aluminium window and door frames",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "2+", label: "Projects delivered" },
  { value: "2", label: "Specialist services" },
  { value: "100%", label: "Custom made" },
];

export const steps = [
  { n: "01", title: "Consult", text: "We visit, listen and measure." },
  { n: "02", title: "Design", text: "Drawings and a clear quotation." },
  { n: "03", title: "Build", text: "Fabrication and construction by our team." },
  { n: "04", title: "Handover", text: "Final checks and aftercare." },
];
