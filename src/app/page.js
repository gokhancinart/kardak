/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Header from "@/pages/components/Header"
import Products from '@/pages/components/Product';
import Promo from "@/pages/components/Promo"
import Footer from "@/pages/components/Footer"
import Feature from '@/pages/components/Feature';
import Contact from "@/pages/components/Contact";


export default function Home() {
  return (
    <main className="font-Inter max-w-[1920px] mx-auto text-md">
      <Header 
        dataId="header"
      />
      <Promo 
        dataId="promo"
      /> 
      <Products 
        dataId="products"
      />
      <Feature 
        dataId="feature"
      />
      <Contact 
        dataId="contactus"
      />
      <Footer 
        dataId="footer"
      />
    </main>
  )
}
