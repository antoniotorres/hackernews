import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Head>
        <title>Hacker News</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="hacker, news, hn, hackernews, antoniotorres, antonio, torres, gonzalez, toniotgz, thetonio96, antonio torres, jose, jose antonio torres gonzalez, technology, websites, next, vercel"
        ></meta>
        <meta name="description" content="Hacker News Remade" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href="https://news.toniotgz.com" />

        <meta name="twitter:title" content="Hacker News" />
        <meta name="twitter:description" content="Hacker News Remade" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toniotgz" />
        <meta name="twitter:creator" content="@toniotgz" />

        <meta property="og:title" content="Hacker News" />
        <meta property="og:url" content="https://news.toniotgz.com" />
        <meta property="og:description" content="Hacker News Remade" />

        <meta property="og:site_name" content="Hacker News" />
        <meta property="og:type" content="webpage" />
        <meta property="og:locale" content="en_US" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Hacker News",
              "url": "https://news.toniotgz.com",
              "sameAs": ["https://facebook.com/toniotgz",
                        "https://instagram.com/toniotgz",
                        "https://twitter.com/toniotgz"]
            }
          `,
          }}
        />
      </Head>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
