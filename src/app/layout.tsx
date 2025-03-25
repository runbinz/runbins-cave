import "../styles/globals.css"; 
import { ReactNode } from "react";
import Layout from "../components/Layout";

import MouseFollower from "../components/MouseFollower";

export const metadata = {
  title: "runbin's cave",
  description: "runbin's cave",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MouseFollower/ >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

