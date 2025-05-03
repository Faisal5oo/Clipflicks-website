import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClipFlicks",
  description: "A video selling platform for video creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 30%, rgba(113, 47, 142, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(214, 1, 219, 0.05) 0%, transparent 40%)
          `,
          backgroundAttachment: "fixed",
          backgroundColor: "rgb(10, 10, 14)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
