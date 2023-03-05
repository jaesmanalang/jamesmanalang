import '../styles/globals.css';
import localFont from '@next/font/local';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
});

const foundersGrotesk = localFont({
  src: [
    {
      path: '../fonts/test-founders-grotesk-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/test-founders-grotesk-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>James' Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta property="og:title" content="James' Portfolio" />
        <meta
          property="og:description"
          content="James Manalang Web Portfolio"
        />
        <meta property="og:url" content="https://jamesmanalang.vercel.app" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://jamesmanalang.vercel.app/preview.png"
        />
        <meta og:image />
        <meta name="twitter:card" content="James' Portfolio" />
        <meta name="twitter:site" content="@jamesmanalang_" />
        <meta name="twitter:title" content="James' Portfolio" />
        <meta
          name="twitter:description"
          content="James Manalang Web Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://jamesmanalang.vercel.app/preview.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="James Manalang Web Portfolio" />

        <meta property="og:type" content="website" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-display: ${foundersGrotesk.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
