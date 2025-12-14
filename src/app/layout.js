// "use client";

import "./globals.css";
import Script from "next/script";
import ClientShell from "./components/ClientShell";


const metadata = {
  title:
    "Flawless Design | Branding, Motion, and Web Development for Web3 and AI",
  description:
    "Flawless Design helps founders ship standout brands, product UI, motion content, and high-performing websites. Strategy to execution, built for Web3 and AI teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />

        <meta
          content="Flawless Design | Branding, Motion, and Web Development for Web3 and AI"
          property="og:title"
        />
        <meta
          content={metadata.description}
          property="og:description"
        />
        {/* <meta
          content="https://cdn.prod.website-files.com/68de2cda01fe05adb2852af1/68f0b9e83ad28aa39944986e_1967987b8eb867c821f34a95c01268e4_Link.png"
          property="og:image"
        /> */}
        <meta
          content="Flawless Design | Branding, Motion, and Web Development for Web3 and AI"
          property="twitter:title"
        />
        <meta
          content={metadata.description}
          property="twitter:description"
        />
        {/* <meta
          content="https://cdn.prod.website-files.com/68de2cda01fe05adb2852af1/68f0b9e83ad28aa39944986e_1967987b8eb867c821f34a95c01268e4_Link.png"
          property="twitter:image"
        /> */}
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* <meta name="google-site-verification" content="j9rPmedqS4rKs7rL3hUyxO7-2_b9kUi401ekPh1YWfQ" /> old */}
        <meta
          name="google-site-verification"
          content="E_pID0C5FOUVYSORdix769JON1Ax8J_fXWKgQuS-c5g"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon180.png"
          sizes="180x180"
        ></link>
        {/* GA4 loader */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHBSP08MJM"
          strategy="afterInteractive"
        />
        {/* GA4 init (disable auto page_view to avoid duplicates. { send_page_view: false }) */}
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XHBSP08MJM', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className={`antialiased min-h-screen overflow-x-hidden `}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
