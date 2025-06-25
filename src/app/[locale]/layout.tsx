import { Geist } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import { siteMetadata } from "../constants/metadata.home";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { routing } from "@/src/i18n/routing";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
    // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } 
 
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body className={`${geistSans.className} antialiased dark`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
