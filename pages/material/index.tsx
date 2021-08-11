import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import { Box, Container, Typography } from '@material-ui/core';
import Link from '../../components/link';
import ProTip from '../../components/proTip';
import Copyright from '../../components/copyright';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default function Material() {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Material UI</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h2" component="h1" align='center' gutterBottom>
              Material UI
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom >
              Next.js with TypeScript example
            </Typography>
            <Link href="/" color="secondary">
              Go to the Home page
            </Link>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}