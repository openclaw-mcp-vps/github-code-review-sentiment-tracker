import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentimentPR – Track Team Sentiment in Code Reviews",
  description:
    "Analyze GitHub PR comments for sentiment and communication patterns. Identify team friction and toxic behavior before it damages your engineering culture."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="2e5b0cf2-2593-4bf6-82c7-a1dc393c12ea"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
