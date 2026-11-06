// Client photos live in /public/images.
const i = (n: number) => `/images/photo-${n}.webp`;

export const images = {
  hero: i(21),
  cabana: i(20),
  aluminium: i(22),
  about: i(23),
  projects: [
    { src: i(20), alt: "A-frame cabana in the forest", tag: "Cabana" },
    { src: i(22), alt: "Welding an aluminium frame", tag: "Aluminium" },
    { src: i(21), alt: "Cabana on a hillside", tag: "Cabana" },
    { src: i(24), alt: "Steel frame going up", tag: "Steel framing" },
    { src: i(23), alt: "Fitting a steel frame", tag: "Steel framing" },
  ],
};
