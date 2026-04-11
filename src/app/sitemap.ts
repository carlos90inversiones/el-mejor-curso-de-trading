import { COURSE_DATA } from "@/lib/courseData";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://curso-trading-pro.vercel.app";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/curso`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/herramientas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const phasePages = COURSE_DATA.map(phase => ({
    url: `${baseUrl}/fase/${phase.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const lessonPages: MetadataRoute.Sitemap = [];
  COURSE_DATA.forEach(phase => {
    phase.modules.forEach(mod => {
      mod.lessons.forEach(lesson => {
        lessonPages.push({
          url: `${baseUrl}/leccion/${lesson.id}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      });
    });
  });

  return [...staticPages, ...phasePages, ...lessonPages];
}
