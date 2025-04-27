"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/config/features";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text text-glow mb-6">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Discover how HeyMystica is helping people manifest their dreams and transform their lives.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card/60 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-accent/60 mb-4 group-hover:text-accent transition-colors duration-300" />
                  
                  <p className="text-lg mb-6 text-card-foreground/90 flex-grow">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 border border-accent/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-secondary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading text-base">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}