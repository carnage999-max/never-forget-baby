import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NeverForgetBaby™",
    short_name: "NeverForgetBaby™",
    description:
      "NeverForgetBaby™ is a connected child and pet vehicle safety system designed to alert caregivers and escalate notifications when someone may have been left behind.",
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
