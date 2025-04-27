import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { SiteLayout } from "@/components/layout/site-layout";
import { HeroSection } from "@/components/home/hero-section";
import { AffirmationBanner } from "@/components/home/affirmation-banner";
import { FeaturesSection } from "@/components/home/features-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { DownloadSection } from "@/components/home/download-section";
import { BlogSection } from "@/components/home/blog-section";

export default function Home() {
  // Get the 3 most recent blogs
  const featuredBlogs = allBlogs
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 3);

  return (
    <SiteLayout>
      <HeroSection />
      <AffirmationBanner />
      <FeaturesSection />
      <TestimonialsSection />
      <BlogSection featuredBlogs={featuredBlogs} />
      <DownloadSection />
    </SiteLayout>
  );
}