"use client";

import { useEffect } from 'react';

// This component adds a script that forces the purple theme throughout the application
export default function PurpleThemeEnforcer() {
  useEffect(() => {
    // Apply styles immediately when the component mounts
    applyPurpleTheme();

    // Also observe DOM changes to catch any dynamically added elements
    const observer = new MutationObserver(() => {
      applyPurpleTheme();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to apply purple theme styles
  const applyPurpleTheme = () => {
    const styleEl = document.createElement('style');
    styleEl.id = 'purple-theme-enforcer';
    
    // Remove any existing enforcer style element
    const existingStyle = document.getElementById('purple-theme-enforcer');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    // Apply all our purple theme styles
    styleEl.innerHTML = `
      html, body {
        background-color: #2D0B4C !important;
        background-image: linear-gradient(135deg, #2D0B4C 0%, #4A148C 100%) !important;
        color: #F8F7FF !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        color: #D4AF37 !important;
        font-weight: bold !important;
      }
      
      p, span, label, li, td, th {
        color: #F8F7FF !important;
      }
      
      button, .btn, [type="button"], [type="submit"] {
        background-color: #4A148C !important;
        color: #F8F7FF !important;
        border-color: #9966CC !important;
      }
      
      button:hover, .btn:hover {
        background-color: #6A1B9A !important;
        box-shadow: 0 0 15px #9966CC !important;
      }
      
      a, a * {
        color: #D4AF37 !important;
      }
      
      a:hover, a:hover * {
        color: #FFD700 !important;
      }
      
      div[class*="card"], div[class*="bg-card"], section, article, aside, header, footer, nav {
        background-color: #4A148C !important;
        border-color: #6A1B9A !important;
      }
      
      div, main {
        background-color: transparent !important;
      }
      
      [class*="bg-card"], [class*="card"] {
        background-color: #4A148C !important;
      }
      
      [class*="bg-background"] {
        background-color: #2D0B4C !important;
      }
      
      [class*="bg-primary"] {
        background-color: #4A148C !important;
      }
      
      [class*="bg-secondary"] {
        background-color: #6A1B9A !important;
      }
      
      [class*="bg-accent"] {
        background-color: #D4AF37 !important;
      }
      
      [class*="text-primary"] {
        color: #4A148C !important;
      }
      
      [class*="text-accent"] {
        color: #D4AF37 !important;
      }
      
      input, select, textarea {
        background-color: #1A0033 !important;
        color: #F8F7FF !important;
        border-color: #4A148C !important;
      }
      
      /* Override gradients */
      .gradient-text {
        background: linear-gradient(to right, #D4AF37, #FFD700) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        color: transparent !important;
      }
      
      .mystic-bg {
        background: linear-gradient(to bottom right, #2D0B4C, #4A148C) !important;
      }
      
      .accent-bg {
        background: linear-gradient(to right, #D4AF37, #FFD700) !important;
      }
    `;
    
    document.head.appendChild(styleEl);
    
    // Apply styles directly to important elements
    const body = document.body;
    body.style.backgroundColor = '#2D0B4C';
    body.style.backgroundImage = 'linear-gradient(135deg, #2D0B4C 0%, #4A148C 100%)';
    body.style.color = '#F8F7FF';
    
    // Apply styles to headings
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
      (el as HTMLElement).style.color = '#D4AF37';
    });
    
    // Apply styles to text elements
    document.querySelectorAll('p, span, label, div').forEach(el => {
      if (el.tagName.toLowerCase() === 'div') {
        // Don't change the color of divs that have background
        return;
      }
      (el as HTMLElement).style.color = '#F8F7FF';
    });
    
    // Apply styles to buttons
    document.querySelectorAll('button, .btn').forEach(el => {
      (el as HTMLElement).style.backgroundColor = '#4A148C';
      (el as HTMLElement).style.color = '#F8F7FF';
      (el as HTMLElement).style.borderColor = '#9966CC';
    });
    
    // Apply styles to links
    document.querySelectorAll('a').forEach(el => {
      (el as HTMLElement).style.color = '#D4AF37';
    });
    
    // Apply styles to cards
    document.querySelectorAll('.card, [class*="bg-card"]').forEach(el => {
      (el as HTMLElement).style.backgroundColor = '#4A148C';
      (el as HTMLElement).style.borderColor = '#6A1B9A';
    });
  };

  // Empty div - this component only runs the effect
  return null;
} 