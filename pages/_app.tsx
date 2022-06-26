import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header';
import { ThemeProvider } from "next-themes";
import { darkTheme } from 'stitches.config';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          light: "light",
          dark: darkTheme.className
      }}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp
