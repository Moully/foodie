"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { PropsWithChildren, createContext, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";

type AuthContextType = {
  isLoggedIn: boolean;
};

const inter = Inter({ subsets: ["latin"] });

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default function RootLayout({ children }: PropsWithChildren) {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{ isLoggedIn }}>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthContext.Provider>
      </body>
    </html>
  );
}
