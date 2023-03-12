import "./globals.css";
import { Roboto_Mono, Space_Grotesk} from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.variable, space_grotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
