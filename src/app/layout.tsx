import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/lib/provider/themeprovider";
import Web3ModalProvider from "@/lib/provider/web3connector";
import { Toaster } from "@/components/ui/toaster";

const paps = localFont({
  src: [
    {
      path: "../../public/fonts/papsmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/papslight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/papsbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-paps",
});
const fragment = localFont({
  src: [
    {
      path: "../../public/fonts/fragmentmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/fragmentlight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/fragmentbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-fragment",
});

export const metadata: Metadata = {
  title: "Magic Nft",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paps.variable} ${fragment.variable}`}>
        <Web3ModalProvider>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Toaster/>
            {children}
          </ThemeProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
