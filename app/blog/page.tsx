import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { SiteLayout } from "@/components/layout/site-layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | HeyMystica",
  description: "Read our latest articles on manifestation, personal growth, and mindfulness.",
};

export default function BlogPage() {
  // Sort blogs by date (newest first)
  const blogs = allBlogs
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  // Group blogs by category
  const blogCategories = blogs.reduce((acc, blog) => {
    const category = blog.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(blog);
    return acc;
  }, {} as Record<string, typeof blogs>);

  return (
    <SiteLayout>
      <section className="py-20 pt-32 md:pt-40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="gradient-text text-glow mb-6">Manifestation Insights</h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of articles on mindfulness, manifestation techniques, personal growth, and more.
            </p>
          </div>

          {/* Display featured blog if available */}
          {blogs.length > 0 && blogs[0].featured && (
            <div className="mb-16">
              <h2 className="text-2xl font-heading mb-6">Featured Article</h2>
              <Link href={blogs[0].url} className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card/60 backdrop-blur border border-accent/20 group-hover:border-accent/40 transition-all duration-300 rounded-xl overflow-hidden p-6">
                  <div className="aspect-video rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/40 flex items-center justify-center text-lg font-decorative text-accent/80">
                      Featured Blog Image
                    </div>

                    <Image
                      src={blogs[0].image}
                      alt={`${blogs[0].title} featured image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <time dateTime={blogs[0].date}>{formatDate(blogs[0].date)}</time>
                      <span className="mx-2">•</span>
                      <span>{blogs[0].category}</span>
                    </div>
                    
                    <h3 className="font-heading text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                      {blogs[0].title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {blogs[0].description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-accent/80 pl-0 w-fit hover:text-accent hover:bg-transparent"
                    >
                      Read article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Display blogs by category */}
          {Object.keys(blogCategories).length > 0 ? (
            Object.entries(blogCategories).map(([category, categoryBlogs]) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-heading mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryBlogs.map((blog) => (
                    <Link key={blog.slug} href={blog.url} className="group block h-full">
                      <Card className="h-full border border-accent/20 group-hover:border-accent/40 transition-all duration-300 overflow-hidden bg-card/60 backdrop-blur">
                        <div className="aspect-video overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/40 flex items-center justify-center text-lg font-decorative text-accent/80">
                            Blog Image
                          </div>

                          <Image
                            src={blog.image}
                            alt={`${blog.title} image`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        
                        <CardHeader className="pt-6">
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                          </div>
                          <h3 className="font-heading text-xl line-clamp-2 group-hover:text-accent transition-colors duration-300">
                            {blog.title}
                          </h3>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-3">
                            {blog.description}
                          </p>
                        </CardContent>
                        
                        <CardFooter>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-accent/80 pl-0 hover:text-accent hover:bg-transparent"
                          >
                            Read more <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Placeholder content when no blogs available
            <div className="text-center py-12 border border-accent/20 rounded-xl bg-card/60">
              <h3 className="text-xl font-heading mb-4">Coming Soon</h3>
              <p className="text-muted-foreground">
                We're working on amazing content to help you on your manifestation journey. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}