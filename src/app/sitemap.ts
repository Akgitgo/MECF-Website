import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mecfpune.com";
  const routes = [
    "",
    "/about",
    "/background",
    "/services",
    "/services/test-certification",
    "/services/emi-emc",
    "/services/test-measurement",
    "/services/design-simulation",
    "/operating-partners",
    "/membership",
    "/statutory-compliance",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
