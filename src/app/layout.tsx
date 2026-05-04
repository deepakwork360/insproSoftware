import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { getSiteSettings, getNavigation, getFooterSettings } from "../sanity/lib/queries";
import { SanityThemeSync } from "../components/SanityThemeSync";
import { ConditionalNavigation } from "../components/ConditionalNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Inspro Software | Precision Engineered IT Solutions",
  description: "Global leaders in custom software development, digital transformation, and professional IT services.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const navData = await getNavigation("Main Menu");
  const footerData = await getFooterSettings();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var lightTheme = "${settings?.lightTheme || ''}";
                  var darkTheme = "${settings?.darkTheme || ''}";
                  var storageKey = "theme";
                  
                  if (typeof window !== 'undefined') {
                    var theme = localStorage.getItem(storageKey);
                    var supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches === true;
                    
                    var isDark = theme === "dark" || (!theme && supportDarkMode);
                    var activePalette = isDark ? darkTheme : lightTheme;
                    
                    if (activePalette) {
                      document.documentElement.classList.add(activePalette);
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SanityThemeSync 
            lightTheme={settings?.lightTheme} 
            darkTheme={settings?.darkTheme} 
            defaultAppearance={settings?.defaultAppearance} 
          />
          <ConditionalNavigation navData={navData?.links} footerData={footerData}>
            {children}
          </ConditionalNavigation>
        </ThemeProvider>
      </body>
    </html>
  );
}
