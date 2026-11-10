import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://devlynctech.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://devlynctech.com/faqs",
            changeFrequency: "weekly",
            priority: 0.7,
        },

        {
            url: "https://devlynctech.com/blog",
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];
}          