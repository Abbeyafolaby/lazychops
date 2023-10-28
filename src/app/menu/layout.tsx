import Footer from "@/components/Footer";
import MenuNav from "../components/MenuNav";

export const metadata = {
  title: "Menu",
  description: "Home of the best homemade foods at your door",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MenuNav />
      <body>{children}</body>
    </html>
  );
}
