import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";

export const metadata = {
  title: "T3 Gallery Postgres",
  description: "A gallery using T3 Stack and Postgres deployed on Vercel",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-2">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
