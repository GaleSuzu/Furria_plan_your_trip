import { Inter } from "next/font/google";
import "./globals.css";
import Context from "./(context)/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furria",
  description: "Your Travel Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>{children}</body>
      </Context>
    </html>
  );
}
