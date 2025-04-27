"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { affirmations } from "@/lib/config/site";

export function AffirmationBanner() {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-grid-white/5" />
      
      <div className="container relative z-10 flex items-center justify-center h-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAffirmation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-decorative text-glow gradient-text">
              {affirmations[currentAffirmation]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}