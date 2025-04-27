"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { affirmations } from "@/lib/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-background" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239966CC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0"
        >
          <motion.div variants={item} className="mb-4">
            <h1 className="font-decorative gradient-text text-glow mb-6">
              Manifest Your Dreams Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Transform your desires into achievable goals with powerful visualization, affirmations, and mindful tracking.
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-accent/30 mb-8"
          >
            <p className="italic text-lg text-glow">
              "{affirmations[currentAffirmation]}"
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/#download">
              <Button size="lg" className="accent-bg hover:bg-accent/90 glow">
                <Download className="mr-2 h-4 w-4" /> Download Now
              </Button>
            </Link>
            <Link href="/#features">
              <Button variant="outline" size="lg" className="border-accent/60 text-accent hover:border-accent hover:bg-accent/10">
                Explore Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Placeholder for app screenshots */}
            <div className="aspect-[9/16] bg-card rounded-[2.5rem] border-8 border-accent/10 overflow-hidden shadow-2xl purple-glow relative">
              <img 
                src="https://i.imgur.com/LmZhvhD.jpeg" 
                alt="App Screenshot" 
                className="h-full w-full object-cover"
              />
              
              {/* Phone details */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-full"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.28,0,101.78,7.71,151.29,21.26s97.33,29.45,154.1,37.19Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}