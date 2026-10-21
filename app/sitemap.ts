import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tjanster", "/om-oss", "/kontaktpersoner", "/kontakt", "/bokningsforfragan", "/integritet"];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
