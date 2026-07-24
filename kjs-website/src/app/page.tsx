import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import WhoWeServe from '@/components/sections/WhoWeServe'
import CommonArea from '@/components/sections/CommonArea'
import Carousel from '@/components/sections/Carousel'
import Partners from '@/components/sections/Partners'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhoWeServe />
        <CommonArea />
        <Carousel />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
