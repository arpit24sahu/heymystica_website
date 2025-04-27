"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Apple, Cuboid as Android, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function DownloadSection() {
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

  const features = [
    "Intuitive Goal Setting",
    "Daily Affirmations",
    "Visualization Meditations",
    "Mood Tracking",
    "Manifestation Tips",
    "Daily Journal",
  ];

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-primary/10 to-background/80 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-5xl mx-auto bg-card/40 backdrop-blur-md border border-accent/20 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2 variants={item} className="gradient-text text-glow mb-6">
                Download HeyMystica Today
              </motion.h2>
              
              <motion.p variants={item} className="text-lg text-muted-foreground mb-8">
                Begin your journey to manifest your dreams and desires. Available for iOS and Android.
              </motion.p>
              
              <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="h-6 w-6 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground ml-2">4.9/5 (2.5k+ reviews)</span>
              </motion.div>
              
              <motion.ul variants={item} className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link 
                  href={siteConfig.appLinks.ios} 
                  className={cn(
                    "w-full sm:w-auto",
                    "bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-primary rounded-lg px-6 py-3 flex items-center justify-center space-x-3 font-medium shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:shadow-xl"
                  )}
                >
                  <Apple className="h-6 w-6" />
                  <span>iOS App</span>
                </Link>
                
                <Link 
                  href={siteConfig.appLinks.android}
                  className={cn(
                    "w-full sm:w-auto",
                    "bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground rounded-lg px-6 py-3 flex items-center justify-center space-x-3 font-medium shadow-lg transition-all duration-300 hover:shadow-secondary/20 hover:shadow-xl"
                  )}
                >
                  <Android className="h-6 w-6" />
                  <span>Android App</span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              variants={item}
              className="relative flex justify-center"
            >
              <div className="relative flex justify-center items-center">
                {/* Placeholder for app screenshots side-by-side */}
                <div className="relative z-20 transform -rotate-6 translate-x-4">
                  <div className="w-48 h-96 bg-card rounded-3xl border-8 border-accent/10 overflow-hidden shadow-2xl">
                    <div className="h-full w-full bg-gradient-to-bl from-accent/20 to-secondary/60 flex items-center justify-center">
                      <span className="text-lg text-accent/80 font-decorative rotate-6">
                        App Screen 1
                      </span>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-full"></div>
                  </div>
                </div>
                
                <div className="relative z-10 transform rotate-6 -translate-x-4">
                  <div className="w-48 h-96 bg-card rounded-3xl border-8 border-accent/10 overflow-hidden shadow-2xl">
                    <div className="h-full w-full bg-gradient-to-tr from-primary/60 to-secondary/40 flex items-center justify-center">
                      <span className="text-lg text-accent/80 font-decorative -rotate-6">
                        App Screen 2
                      </span>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-full"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 left-0 h-32 w-32 rounded-full bg-accent/10 blur-2xl"></div>
                <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-secondary/20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}