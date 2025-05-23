'use client'
import ReactDOMServer from 'react-dom/server';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Arrow from './components/arrow';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const pathname = usePathname()
 let variableAccess =  pathname=="/dashboard/human-ressources/administration/departement"?true:false
  
  return (
    <html lang="en" className="h-full">
      <body
        className={` h-fit flex ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex flex-col p-5  min-w-fit gap-10 justify-start text-black bg-white h-auto">
          <img src="/logo-admin.svg" alt="image" width="200" height="200" />
          <div  className="flex pt-5 gap-5">
     
              <img src="/home-icon.svg" alt="home" width="20" height="20" />
              <p className="text-gray-500">Tableau de Bord</p>
            
          </div>
             <Arrow  redirectManual={variableAccess}/>
          
          <div className="flex  gap-5">
            <p>Gestion Commercial</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Suivi du Temps</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Mes Projets</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Signature Electronique</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Messagerie</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Mes Outils</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
          <div className="flex  gap-5">
            <p>Contact & Support</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </div>
        </nav>
        <div className="content-center  p-5 bg-gray-300 w-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
