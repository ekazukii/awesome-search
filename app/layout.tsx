// app/layout.tsx
import { Providers } from "./providers";

export const metadata = {
  title: "Search awesome projects",
  description:
    "Over 170.000 awesome project listed with fine tuned search system, github projects, amazing tools, everything you can think of",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
