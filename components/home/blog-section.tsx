"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Blog } from "contentlayer/generated";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface BlogSectionProps {
  featuredBlogs: Blog[];
}

export function BlogSection({ featuredBlogs }: BlogSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text text-glow mb-6">Manifestation Insights</h2>
          <p className="text-xl text-muted-foreground">
            Explore our latest articles on mindfulness, manifestation techniques, and personal growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredBlogs.length > 0 ? (
            featuredBlogs.map((blog, index) => (
              <motion.div key={blog.slug} variants={item}>
                <Link href={blog.url} className="group block h-full">
                  <Card className="h-full border border-accent/20 group-hover:border-accent/40 transition-all duration-300 overflow-hidden bg-card/60 backdrop-blur">
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/40 flex items-center justify-center text-lg font-decorative text-accent/80">
                        Blog Image
                      </div>
                    </div>
                    
                    <CardHeader className="pt-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                        <span className="mx-2">•</span>
                        <span>{blog.category}</span>
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
              </motion.div>
            ))
          ) : (
            // Placeholder cards when there are no blogs
            Array.from({ length: 3 }).map((_, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full border border-accent/20 overflow-hidden bg-card/60 backdrop-blur">
                  <div className="aspect-video bg-gradient-to-br from-primary/60 to-secondary/40 flex items-center justify-center">
                    <span className="text-lg font-decorative text-accent/80">Blog Image</span>
                  </div>
                  
                  <CardHeader className="pt-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <time>{formatDate(new Date().toISOString())}</time>
                      <span className="mx-2">•</span>
                      <span>Manifestation</span>
                    </div>
                    <h3 className="font-heading text-xl">
                      {index === 0 && "The Art of Manifestation"}
                      {index === 1 && "Daily Affirmations for Success"}
                      {index === 2 && "Visualizing Your Perfect Future"}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {index === 0 && "Learn how to harness the power of manifestation to achieve your goals and transform your reality."}
                      {index === 1 && "Discover powerful daily affirmations that can reprogram your subconscious mind for success and abundance."}
                      {index === 2 && "Master the art of visualization to create a clear mental image of your perfect future and attract it into reality."}
                    </p>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-accent/80 pl-0"
                    >
                      Coming soon <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
        
        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent/60 text-accent hover:border-accent hover:bg-accent/10"
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}