import AosProvider from "@/utils/Aos/AosProvider";
import localFont from "next/font/local";
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
const LogoName = localFont({
  src: "./fonts/Creattion_Demo.otf",
  variable: "--font-personal-logo",
  // weight: "100 900",
});
const LogoNameShort = localFont({
  src: "./fonts/Maydona.otf",
  variable: "--font-personal-logo-short",
  weight: "100 900",
});

const Centralwell = localFont({
  src: "./fonts/Centralwell.ttf",
  variable: "--font-main-handwite",
  weight: "900",
});
const PersonalUse = localFont({
  src: "./fonts/PersonalUse.ttf",
  variable: "--font-personal-use",
  weight: "900",
});

const Cassandra_Personal_Use = localFont({
  src: "./fonts/Cassandra_Personal_Use.ttf",
  variable: "--font-main-Cassandra",
  weight: "900",
});
const Local_Main_Use = localFont({
  src: "./fonts/Bizantheum.otf",
  variable: "--font-main-global",
  weight: "100",
});
const WeddingName = localFont({
  src: "./fonts/Pumpkin.otf",
  variable: "--font-wedding-global",
  weight: "100",
});

const welcomeFont = localFont({
  src: "./fonts/welcome.otf",
  variable: "--font-welcome-global",
  weight: "100",
});

const welcomeNameFont = localFont({
  src: "./fonts/brillant.regular.otf",
  variable: "--font-name-global",
  weight: "100",
});
export const metadata = {
  title: "Vivek weds Kajal",
  description:
    "With great excitement, we invite you to share this special day with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LogoName.variable} ${WeddingName.variable} ${LogoNameShort.variable} ${Centralwell.variable} ${PersonalUse.variable} ${Cassandra_Personal_Use.variable} ${Local_Main_Use.variable} ${welcomeFont.variable} ${welcomeNameFont.variable} antialiased`}
      >
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
