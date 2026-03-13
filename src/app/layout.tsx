import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Drakind - Streaming Drama Pendek",
  description: "Nonton drama pendek gratis dan tanpa iklan di Drakin..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Adsense Original */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9991903403768468"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-sans antialiased">
        <Providers>
          <Suspense fallback={<div className="h-16" />}>
            <Header />
          </Suspense>

          {children}

          <Footer />

          <Toaster />
          <Sonner />
        </Providers>

        {/* --- INTEGRASI JQUERY & ADS BARU --- */}
        {/* Load jQuery terlebih dahulu */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" 
          strategy="beforeInteractive" 
        />
        
        {/* Jalankan script iklan setelah jQuery siap */}
        <Script id="xepo-ads-script" strategy="afterInteractive">
          {`
            $(document).ready(function() {
              $('body').addClass('xepo_ads');
            });

            $(document).on('click', '.xepo_ads', function(e) {
              $(this).removeClass('xepo_ads');
              window.open('https://s.shopee.co.id/8ARKkvbF7W', '_blank');
            });
          `}
        </Script>
      </body>
    </html>
  );
}
