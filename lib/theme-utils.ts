import { themeColors, gradients } from './theme-colors';

/**
 * Converts hex to rgba string with specified opacity
 * @param hex - Hex color code
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA color string
 */
export function hexToRgba(hex: string, opacity: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Gets a theme color with applied opacity
 * @param colorKey - Key of the color from themeColors
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA color string
 */
export function getColorWithOpacity(
  colorKey: keyof typeof themeColors, 
  opacity: number
): string {
  const color = themeColors[colorKey];
  if (!color) {
    throw new Error(`Color key "${colorKey}" not found in theme colors`);
  }
  
  return hexToRgba(color.hex, opacity);
}

/**
 * Creates CSS variables object with RGB values from theme colors
 * @returns CSS variables object for the theme
 */
export function createThemeCssVars() {
  return {
    '--background': themeColors.midnightPurple.rgb,
    '--foreground': themeColors.starlight.rgb,
    '--card': themeColors.deepPurple.rgb,
    '--card-foreground': themeColors.starlight.rgb,
    '--popover': themeColors.deepPurple.rgb,
    '--popover-foreground': themeColors.starlight.rgb,
    '--primary': themeColors.royalPurple.rgb,
    '--primary-foreground': themeColors.starlight.rgb,
    '--secondary': themeColors.brightPurple.rgb,
    '--secondary-foreground': themeColors.starlight.rgb,
    '--muted': themeColors.deepPurple.rgb,
    '--muted-foreground': themeColors.lavender.rgb,
    '--accent': themeColors.amethyst.rgb,
    '--accent-foreground': themeColors.mysticalBlack.rgb,
    '--destructive': themeColors.orchid.rgb,
    '--destructive-foreground': themeColors.starlight.rgb,
    '--border': themeColors.royalPurple.rgb,
    '--input': themeColors.deepPurple.rgb,
    '--ring': themeColors.amethyst.rgb,
    '--chart-1': themeColors.gold.rgb,
    '--chart-2': themeColors.amethyst.rgb,
    '--chart-3': themeColors.brightPurple.rgb,
    '--chart-4': themeColors.royalPurple.rgb,
    '--chart-5': themeColors.lavender.rgb,
  };
}

/**
 * Get a gradient style object for React components
 * @param gradientKey - Key of the gradient from gradients
 * @returns Style object with the gradient
 */
export function getGradientStyle(gradientKey: keyof typeof gradients): React.CSSProperties {
  const gradientValue = gradients[gradientKey];
  if (!gradientValue) {
    throw new Error(`Gradient key "${gradientKey}" not found in gradients`);
  }
  
  return { background: gradientValue };
}

/**
 * Create themed box shadow with specified color and opacity
 * @param colorKey - Key of the color from themeColors
 * @param opacity - Opacity value between 0 and 1
 * @param blur - Blur radius in pixels
 * @param spread - Spread radius in pixels
 * @returns CSS box-shadow property value
 */
export function createBoxShadow(
  colorKey: keyof typeof themeColors,
  opacity: number = 0.7,
  blur: number = 20,
  spread: number = 0
): string {
  const rgba = getColorWithOpacity(colorKey, opacity);
  return `0 0 ${blur}px ${spread > 0 ? spread + 'px ' : ''}${rgba}`;
}

/**
 * Create text shadow with specified color and opacity
 * @param colorKey - Key of the color from themeColors
 * @param opacity - Opacity value between 0 and 1
 * @param blur - Blur radius in pixels
 * @returns CSS text-shadow property value
 */
export function createTextShadow(
  colorKey: keyof typeof themeColors,
  opacity: number = 0.7,
  blur: number = 8
): string {
  const rgba = getColorWithOpacity(colorKey, opacity);
  return `0 0 ${blur}px ${rgba}`;
}

export const themeUtils = {
  hexToRgba,
  getColorWithOpacity,
  createThemeCssVars,
  getGradientStyle,
  createBoxShadow,
  createTextShadow,
};

export default themeUtils; 