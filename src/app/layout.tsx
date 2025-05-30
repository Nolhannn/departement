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
  let pa = window.location.pathname.split("/").findLast((element) => element)
 let variableAccess =  pa=="departement"||"collaborateurs"||"profil"?true:false

  return (
    <html lang="en" className="h-fit">
      <body
        className={` h-fit min-h-screen flex ${geistSans.variable} ${geistMono.variable} antialiased`}
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
        <div className="content-center flex flex-col justify-around  p-5 bg-white w-screen">
          <div className="flex md:space-x-8 space-x-4 py-4 px-2 justify-between items-center top-0 right-0 absolute">
            <svg stroke="--currentColor" fill="--currentColor"  strokeWidth="0" viewBox="0 0 24 24" className="fill-(--currentColor) cursor-pointer text-lg ml-2 hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor"></path><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor"></path><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor"></path></svg>
            <div className="flex items-center"></div>
            <div className="flex items-center justify-end">
              <div className="flex lg:space-x-4 space-x-2 lg:flex-initial items-center">
                <div className="hidden flex"></div>
                <div className="relative cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-primary fill-(--currentColor) " height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"></path></svg>
                  </div>
                  <div className="relative group">
                    <svg stroke="currentColor" fill="--currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-primary fill-(--currentColor) " height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
                    <div className="rounded-full p-2 bg-[#FC5A5A] text-white absolute bottom-3 flex justify-center items-center -right-2 text-xs w-5 h-5">9+</div>
                    <div className="hidden group-hover:block absolute right-0 p-4 bg-white rounded-lg shadow-lg z-[9999999] w-full h-fit max-h-[20rem] overflow-y-auto">
                      <div className="flex flex-col space-y-2">
                        <h4 className="font-semibold text-center text-xl">Notifications</h4>
                        <div className="flex flex-col space-y-3">
                          <a href="/dashboard/human-ressources/administration/">
                          <div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1">
                          <div className="flex items-center space-x-2">
                            <span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold fill-(--currentColor) " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span>
                            <span className="font-semibold">Gestion des ressources humaines</span></div>
                            <span className="text-white bg-primary rounded-full px-2">0</span></div></a>
                            <a href="/dashboard/business-managment/clients/">
                            <div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1">
                            <div className="flex items-center space-x-2">
                              <span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span>
                              <span className="font-semibold">Gestion commerciale</span></div>
                              <span className="text-white bg-primary rounded-full px-2">0</span></div></a>
                              <a href="/dashboard/projects/">
                              <div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1">*
                              <div className="flex items-center space-x-2">
                                <span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span>
                                <span className="font-semibold">Gestion de projet</span></div>
                                <span className="text-white bg-primary rounded-full px-2">8</span>
                                </div></a>
                                <a href="/dashboard/tools/virtual-board/">
                                <div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1">
                                <div className="flex items-center space-x-2">
                                  <span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span>
                                  <span className="font-semibold">Bureau Virtuel</span></div><span className="text-white bg-primary rounded-full px-2">1</span></div></a><a href="/dashboard/agenda/">
                                  <div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1"><div className="flex items-center space-x-2"><span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span><span className="font-semibold">Agenda</span></div><span className="text-white bg-primary rounded-full px-2">1</span></div></a><a href="/dashboard/"><div className="flex items-center justify-between hover:bg-primary/5 rounded-md cursor-pointer p-1"><div className="flex items-center space-x-2"><span className="w-8 h-8 rounded-md bg-primary/10 flex justify-center items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary font-bold" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"></path></svg></span><span className="font-semibold">Congés</span></div><span className="text-white bg-primary rounded-full px-2">0</span></div></a></div><div className="flex justify-end"><a className="text-primary bg-primary/10 rounded-md p-1 mt-5" href="/dashboard/notifications/">Voir tous</a></div></div></div></div><div className="relative w-fit">
          </div>
        </div></div></div>
        {children}
        </div>
      </body>
    </html>
  );
}
