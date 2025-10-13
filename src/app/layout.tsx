import "@/app/globals.css";
import styles from "@/app/layout.module.css";
import Link from "next/link";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <div className={styles.container}>
          <header>
            <Link href={"/"}>👕 Shopping Mall 👔</Link>
          </header>
          <main>{children}</main>
          <footer>하단</footer>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
