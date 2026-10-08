import type { MetadataRoute } from "next";

const baseUrl = "https://precisionacousticsaz.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/portfolio", "/about", "/contact", "/privacy"];
    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}