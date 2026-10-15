import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  head: () => ({
    meta: [
      { title: "Lumora Dental" },
      { name: "description", content: "Lumora Dental — modern, gentle dental care." },
      { property: "og:title", content: "Lumora Dental" },
      { property: "og:description", content: "Lumora Dental — modern, gentle dental care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => null,
});
