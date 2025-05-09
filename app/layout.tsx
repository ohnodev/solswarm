import "./globals.css";
import "./fonts.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "SolSwarm - Zero-Fee Trading Bot",
  description: "SolSwarm is an open-source PumpFun trading bot with zero trading fees, designed for seamless and efficient trading with advanced strategies and real-time analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}