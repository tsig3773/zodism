export const theme = {
  colors: {
    primary: '#8A2BE2', // Violet (mystical)
    secondary: '#FF6B6B', // Coral (vibrant)
    tertiary: '#4EA8DE', // Sky blue (calming)
    accent: '#FFD700', // Gold (zodiac)
    background: '#F9F9FB', // Light gray
    surface: '#FFFFFF', // White
    text: {
      primary: '#333333', // Dark gray
      secondary: '#666666', // Medium gray
      light: '#FFFFFF', // White
    },
    success: '#4CAF50', // Green
    error: '#F44336', // Red
    warning: '#FFC107', // Amber
    info: '#2196F3', // Blue
    // Zodiac element colors
    elements: {
      fire: '#FF5722', // Fire signs (Aries, Leo, Sagittarius)
      earth: '#8BC34A', // Earth signs (Taurus, Virgo, Capricorn)
      air: '#03A9F4', // Air signs (Gemini, Libra, Aquarius)
      water: '#673AB7', // Water signs (Cancer, Scorpio, Pisces)
    }
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '2.5rem', // 40px
  },
  space: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '4rem', // 64px
  },
  radii: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '1rem', // 16px
    full: '9999px', // Circular
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export type Theme = typeof theme;
export type ElementType = keyof typeof theme.colors.elements;