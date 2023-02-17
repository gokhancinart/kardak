'use client';

import Header from "../pages/components/Header"
import Products from '@/pages/components/Product';
import Promo from "../pages/components/Promo"
import Footer from "../pages/components/Footer"
import Feature from '@/pages/components/Feature';
import Stats from "@/pages/components/Stats";

export default function Home() {
  return (
    <main className="font-Inter max-w-[1920px] mx-auto text-md">
      <Header/>
      <Promo/> 
      <Stats/>
      <Products/>
      
      <Feature/>
      <Footer/>
    </main>
  )
}
