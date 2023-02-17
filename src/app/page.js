'use client';

import Header from "../pages/components/Header"
import Products from '@/pages/components/Product';
import Promo from "../pages/components/Promo"
import Footer from "../pages/components/Footer"
import Feature from '@/pages/components/Feature';

export default function Home() {
  return (
    <main className="font-Inter max-w-[1920px] mx-auto text-md">
      <Header/>
      <Promo/> 
      <Feature/>
      <Products/>
      <Footer/>
    </main>
  )
}
