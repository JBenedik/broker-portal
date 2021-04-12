import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E81F76',
    },
    secondary: {
      light: '#0066ff',
      main: '#31384C',
    },
    background: {
      container: '#eeeeee',
      paper: '#eeeeee',
      default: '#eeeeee'
    }
  },
  typography: {
    h1: {
      fontSize: '4em',
      fontWeight: 500,
      color: 'white',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.2em',
      fontWeight: 300,
      color: 'black',
    },
    h3: {
      fontSize: '1.7em',
      fontWeight: 300,
      color: 'black',
    },
    subtitle1: {
      fontSize: '1em',
      fontWeight: 300,
      letterSpacing: '0.15px',
      lineHeight: '125%',
      color: 'white',
      textAlign: 'center',
      paddingTop: '30px'
    },
    button: {
      fontSize: '18px',
      textTransform: 'none',
      fontWeight: 700,
    }
  }
});

export default theme;