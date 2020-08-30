import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
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
      <div className="flex-grow max-w-screen-lg mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <h3 className="text-center text-5xl leading-6 font-light text-gray-900 mt-20">
          404
        </h3>
        <h3 className="text-center text-lg leading-6 font-medium text-gray-800">
          Page Not Found
        </h3>
        <div className="mt-5 text-center">
          <Link href="/" passHref>
            <a
              type="button"
              className="uppercase no-underline inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Return to homepage
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
