import { createTheme } from '@mui/material/styles';

// ICI Equity Partners Modern Theme - 2026
const theme = createTheme({
  palette: {
    primary: {
      main: '#C0392B', // ICI Red
      light: '#E74C3C',
      dark: '#A93226',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a1a2e', // Deep navy
      light: '#2d2d44',
      dark: '#0f0f1e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa', // Soft warm gray
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e', // Darker, cleaner
      secondary: '#64748b', // Softer gray
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.0625rem', // 17px - easier to read
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.9375rem', // 15px
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none', // Modern buttons don't use all caps
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontSize: '0.9375rem',
    },
  },
  shape: {
    borderRadius: 12, // Modern rounded corners
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)', // 1
    '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // 2
    '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)', // 3
    '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)', // 4
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)', // 5
    ...Array(19).fill('none'), // Fill remaining shadow levels
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 32px',
          fontSize: '0.9375rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px -4px rgba(192, 57, 43, 0.25)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 16px -4px rgba(192, 57, 43, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        elevation1: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        },
        elevation2: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
