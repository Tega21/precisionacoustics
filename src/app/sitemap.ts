import type { MetadataRoute } from "next";

const baseUrl = "new url";

export default function sitemap(): MetadataRoute.Sitemap {
    return ["", "/portfolio", "/about", "/contact"].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));
}