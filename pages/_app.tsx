import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css'; // Global styles

const theme = createTheme({
  palette: {
    primary: {
      main: '#db524d', // Custom primary color
    },
    secondary: {
      main: '#4c9195', // Custom secondary color
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // State to track the number of completed Pomodoros
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // State to track the daily goal for Pomodoros
  const [dailyGoal, setDailyGoal] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS to avoid conflicts with Material-UI styles
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styling across browsers */}
      <Component
        {...pageProps}
        theme={theme} // Passing the theme as a prop
        completedPomodoros={completedPomodoros} // Passing the state as props
        setCompletedPomodoros={setCompletedPomodoros} // Passing the state setter as a prop
        dailyGoal={dailyGoal} // Passing the state as a prop
        setDailyGoal={setDailyGoal} // Passing the state setter as a prop
      />
    </ThemeProvider>
  );
}

export default MyApp;
