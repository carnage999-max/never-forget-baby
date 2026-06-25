import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NeverForgetBaby™",
    short_name: "NeverForgetBaby™",
    description:
      "NeverForgetBaby™ is the only system that alerts you — and calls 911 — if your child or pet is left in a hot car. Pressure pad sensor, real-time GPS, automatic emergency dispatch.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
