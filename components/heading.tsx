import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const headingElements = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

export function Heading({ level, children, className, ...props }: HeadingProps) {
  const baseStyles = 'font-bold text-accent';
  const levelStyles = {
    1: 'text-4xl md:text-5xl mb-6',
    2: 'text-3xl md:text-4xl mb-5',
    3: 'text-2xl md:text-3xl mb-4',
    4: 'text-xl md:text-2xl mb-3',
    5: 'text-lg md:text-xl mb-2',
    6: 'text-base md:text-lg mb-2',
  };

  const Element = headingElements[level];

  return React.createElement(
    Element,
    {
      className: cn(baseStyles, levelStyles[level], className),
      ...props,
    },
    children
  );
} 