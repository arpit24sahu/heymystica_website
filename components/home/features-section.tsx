"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { appFeatures } from "@/lib/config/features";
import { Icon as Icons } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import Lucide icons with error handling
const DynamicIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  // Ensure the icon name exists in lucide-react
  const IconComponent = dynamic(
    async () => {
      const mod = await import("lucide-react");
      // Check if the icon exists, fallback to a default if not found
      return mod[name as keyof typeof Icons] || mod.HelpCircle;
    },
    {
      loading: () => <div className="w-6 h-6 bg-accent/20 rounded-md animate-pulse" />,
      ssr: false,
    }
  );

  return <IconComponent {...props} />;
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background relative">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text text-glow mb-6">Powerful Features</h2>
          <p className="text-xl text-muted-foreground">
            Discover the tools that will accelerate your manifestation journey and transform your dreams into reality.
          </p>
        </div>

        <div className="space-y-24 mt-16">
          {appFeatures.map((feature, index) => (
            <FeatureRow
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imagePosition={feature.imagePosition}
              imagePlaceholder={feature.imagePlaceholder}
              quote={feature.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureRowProps {
  title: string;
  description: string;
  icon: string;
  imagePosition: "left" | "right";
  imagePlaceholder: string;
  quote?: string;
}

function FeatureRow({
  title,
  description,
  icon,
  imagePosition,
  imagePlaceholder,
  quote,
}: FeatureRowProps) {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <motion.div
        ref={imagePosition === "left" ? imageRef : contentRef}
        initial={{ opacity: 0, x: imagePosition === "left" ? -40 : 40 }}
        animate={{ 
          opacity: imagePosition === "left" ? (imageInView ? 1 : 0) : (contentInView ? 1 : 0), 
          x: imagePosition === "left" 
            ? (imageInView ? 0 : -40) 
            : (contentInView ? 0 : 40) 
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "flex items-center justify-center",
          imagePosition === "right" && "md:order-2"
        )}
      >
        <div className="relative w-full max-w-sm mx-auto">
          {/* Placeholder for feature screenshot */}
          <div className="aspect-[9/16] bg-card rounded-xl overflow-hidden border border-accent/30 shadow-xl">
            <div className="h-full w-full bg-gradient-to-bl from-secondary/40 to-primary/80 flex items-center justify-center">
              <span className="text-xl text-accent/80 font-decorative text-center px-4">
                {imagePlaceholder}
              </span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent/10 blur-xl"></div>
          <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-secondary/20 blur-lg"></div>
        </div>
      </motion.div>

      <motion.div
        ref={imagePosition === "left" ? contentRef : imageRef}
        initial={{ opacity: 0, x: imagePosition === "left" ? 40 : -40 }}
        animate={{ 
          opacity: imagePosition === "left" ? (contentInView ? 1 : 0) : (imageInView ? 1 : 0), 
          x: imagePosition === "left" 
            ? (contentInView ? 0 : 40) 
            : (imageInView ? 0 : -40) 
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "flex flex-col",
          imagePosition === "right" && "md:order-1"
        )}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg accent-bg">
            <DynamicIcon name={icon} className="h-6 w-6 text-background" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading">{title}</h3>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6">
          {description}
        </p>
        
        {quote && (
          <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-accent/20 mt-4">
            <p className="italic text-base text-glow">
              "{quote}"
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}