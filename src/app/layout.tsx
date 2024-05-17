import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "T3 Gallery Postgres",
  description: "A gallery using T3 Stack and Postgres deployed on Vercel",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable} dark`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body>
            <div className="grid h-screen grid-rows-[auto,1fr] ">
              <TopNav />
              <main className="overflow-y-auto">{children}</main>
            </div>
            {modal}
            <Toaster />
            <div id="modal-root" />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
