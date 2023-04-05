import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo, NextSeo } from 'next-seo';

import { ContextProvider } from '../context/Context';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ContextProvider>
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NextSeo
        title="frUIT Marketplace, from UIT NFT Marketplace"
        description="A NFT marketplace for NFTs from UIT"
      />
      <DefaultSeo
        title="frUIT Marketplace, from UIT NFT Marketplace"
        description="A NFT marketplace for NFTs from UIT"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.fromuitnft.online/',
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="bg-white dark:bg-prim-dark">
        <Navbar />
        <div className="w-full pt-16">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  </ContextProvider>
);

export default MyApp;
