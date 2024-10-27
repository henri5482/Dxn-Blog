import localFont from "next/font/local";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog DXN Ayacucho | Salud y Bienestar",
  description: "Descubre artículos sobre salud, bienestar y nuestros productos en DXN Ayacucho.",
  openGraph: {
    title: "Blog DXN Ayacucho | Salud y Bienestar",
    description: "Bienvenido al Blog DXN Ayacucho. Explora artículos sobre salud, bienestar y nuestros productos.",
    url: "https://dxnayacucho.vercel.app/blog",
    images: [
      {
        url: "https://dxnayacucho.vercel.app/bannerdxn.jpg",
        width: 1200,
        height: 630,
        alt: "Artículos de salud y bienestar en el Blog de DXN Ayacucho",
      },
    ],
    siteName: "Blog DXN Ayacucho",
    locale: "es_ES",
  },
};

export default function BlogLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dxnayacucho.vercel.app/blog" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog DXN Ayacucho | Salud y Bienestar" />
        <meta property="og:description" content="Bienvenido al Blog DXN Ayacucho. Explora artículos sobre salud, bienestar y nuestros productos." />
        <meta property="og:url" content="https://dxnayacucho.vercel.app/blog" />
        <meta property="og:image" content="https://dxnayacucho.vercel.app/bannerdxn.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Blog DXN Ayacucho" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tuTwitterHandle" />
        <meta name="twitter:title" content="Blog DXN Ayacucho | Salud y Bienestar" />
        <meta name="twitter:description" content="Bienvenido al Blog DXN Ayacucho. Explora artículos sobre salud, bienestar y nuestros productos." />
        <meta name="twitter:image" content="https://dxnayacucho.vercel.app/bannerdxn.jpg" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="s7rwNtOiZLTsTJkm10Dj-B1CNfnpkSjX7iDkXcjEVF4" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DXN Ayacucho",
              url: "https://dxnayacucho.vercel.app/",
              logo: "https://dxnayacucho.vercel.app/favicon.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 918237837",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100077437129801",
                "https://wa.me/51918237837",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <GoogleAnalytics />

        <Navbar />
        <main className="container p-4 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
