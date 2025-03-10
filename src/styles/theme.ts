export const theme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    tertiary: '#F5A623',
    accent: '#E74C3C',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#BDC3C7',
    },
    success: '#2ECC71',
    error: '#E74C3C',
    warning: '#F1C40F',
    info: '#3498DB',
    elements: {}
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
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  },
};

export type Theme = typeof theme;
export type ElementType = keyof typeof theme.colors.elements;