// App default theme configuration

const theme = {
  palette: {
    common: {
      white: '#fff',
      black: '#171717',
      grey: '#849094',
      darkgrey: '#444444',
      overlay: 'rgba(0, 0, 0, 0.5)',
      overlayLight: 'rgba(0, 0, 0, 0.08)',
      overlayLighter: 'rgba(0, 0, 0, 0.04)',
    },
    white: {
      main: '#f4f4f4',
      light: '#f3f5fa',
      dark: '#e7ebf2',
      text: '#031c2f',
      transparent: 'rgba( 255, 255, 255, 0.5)',
      transparentLight: 'rgba( 255, 255, 255, 0.15)',
    },
    grey: {
      main: '#7d8689',
      light: '#9da7aa',
      gradient: 'linear-gradient(254deg, #9da7aa, #7d8689)',
    },
    primary: {
      main: '#00b7ff',
      light: '#00dcff',
      dark: '#0087cb',
      gradient: 'linear-gradient(254deg, #00dcff, #00b7ff)',
      gradientAlt: 'linear-gradient(254deg, #00dcff, #0087cb)',
      text: '#fff',
    },
    pinky: {
      main: '#ef304b',
      light: '#f86d5e',
      lighter: '#ff369a',
      dark: '#b50024',
      gradient: 'linear-gradient(255deg, #f86d5e, #ef304b)',
      text: '#fff',
    },
    seaweed: {
      main: '#14cb84',
      light: '#2de7ba',
      dark: '#009957',
      gradient: 'linear-gradient(256deg, #2de7ba, #14cb84)',
      contrastText: '#fff',
    },
    primaryForm: {
      main: '#005292',
      light: '#cdd7db',
      dark: '#009dd1',
      gradient: 'linear-gradient(254deg, #00dcff, #00b7ff)',
      gradientAlt: 'linear-gradient(55deg, #005493, #3375a8 47%, #2bb2e3)',
      text: '#fff',
    },
    lightBlueGray: {
      main: 'rgba(205, 215, 219, 0.56)',
    },
    greyForm: {
      main: '#f1f1f1',
      light: '#9da7aa',
      middle: '#979797',
    },
    alerts: {
      info: '#1976d2',
      success: '#00ad6a',
      warning: '#ffa000',
      error: '#d32f2f',
    },
    royalPurple: {
      main: '#823caa',
    },
  },
  typography: {
    rootFontSize: '16px',
    defaultFont: 'Montserrat, Helvetica Neue, Arial, sans-serif',
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    formsTitle: {
      fontSize: '2.375rem',
      fontSizeMD: '2rem',
      fontSizeSM: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    bodyForms: {
      fontSize: '0.8rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h1: {
      fontSize: '1.313rem',
      fontSizeSm: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '2.25rem',
      fontSizeSm: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '1rem',
      fontSizeSm: '1rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h4: {},
    label: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
  
  
};

export default theme;
