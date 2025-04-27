/**
 * Theme colors for HeyMystica
 * These colors are used to define the CSS variables in globals.css
 * This makes it easier to maintain consistent colors throughout the application
 */
export const themeColors = {
  // Core colors - enhanced purple palette
  deepPurple: { hex: '#2D0B4C', rgb: '45 11 76' }, // Deep mystical purple
  midnightPurple: { hex: '#1A0033', rgb: '26 0 51' }, // Even deeper purple for backgrounds
  royalPurple: { hex: '#4A148C', rgb: '74 20 140' }, // Rich purple
  brightPurple: { hex: '#6A1B9A', rgb: '106 27 154' }, // Brighter purple
  lavender: { hex: '#9575CD', rgb: '149 117 205' }, // Light purple
  orchid: { hex: '#BA68C8', rgb: '186 104 200' }, // Pink-purple
  gold: { hex: '#D4AF37', rgb: '212 175 55' }, // Royal gold
  lightGold: { hex: '#FFD700', rgb: '255 215 0' }, // Brighter gold for accents
  starlight: { hex: '#F8F7FF', rgb: '248 247 255' }, // Slightly purple-tinted white
  cosmicGray: { hex: '#1E1E2F', rgb: '30 30 47' }, // Dark purplish gray
  mysticalBlack: { hex: '#0A0A0F', rgb: '10 10 15' }, // Almost black with a hint of purple
  amethyst: { hex: '#9966CC', rgb: '153 102 204' }, // Lighter purple accent
  celestialBlue: { hex: '#1F3A93', rgb: '31 58 147' }, // Deep celestial blue

  // Green accents
  emerald: { hex: '#2ECC71', rgb: '46 204 113' }, // Rich emerald green
  darkGreen: { hex: '#145A32', rgb: '20 90 50' }, // Deep forest green
  mintGreen: { hex: '#98FB98', rgb: '152 251 152' }, // Light mint green
  jade: { hex: '#00A86B', rgb: '0 168 107' }, // Medium jade green

  // UI semantic colors
  success: { hex: '#2ECC71', rgb: '46 204 113' }, // Emerald
  warning: { hex: '#FFD700', rgb: '255 215 0' }, // Light gold
  error: { hex: '#E74C3C', rgb: '231 76 60' }, // Bright red
  info: { hex: '#1F3A93', rgb: '31 58 147' }, // Celestial blue
};

// Gradient definitions
export const gradients = {
  mystic: `linear-gradient(to bottom right, ${themeColors.deepPurple.hex}, ${themeColors.royalPurple.hex})`,
  purpleAccent: `linear-gradient(to right, ${themeColors.royalPurple.hex}, ${themeColors.brightPurple.hex})`,
  purpleLavender: `linear-gradient(to right, ${themeColors.brightPurple.hex}, ${themeColors.lavender.hex})`,
  golden: `linear-gradient(to right, ${themeColors.gold.hex}, ${themeColors.lightGold.hex})`,
  cosmic: `linear-gradient(to bottom right, ${themeColors.mysticalBlack.hex}, ${themeColors.cosmicGray.hex})`,
  celestial: `linear-gradient(to right, ${themeColors.royalPurple.hex}, ${themeColors.celestialBlue.hex})`,
  emerald: `linear-gradient(to right, ${themeColors.darkGreen.hex}, ${themeColors.emerald.hex})`,
};

// Export individual colors for direct usage
export const {
  deepPurple,
  midnightPurple,
  royalPurple,
  brightPurple,
  lavender,
  orchid,
  gold,
  lightGold,
  starlight,
  cosmicGray,
  mysticalBlack,
  amethyst,
  celestialBlue,
  emerald,
  darkGreen,
  mintGreen,
  jade,
} = themeColors; 