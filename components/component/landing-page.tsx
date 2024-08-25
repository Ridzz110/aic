
import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"
import FullPageSlider from "./FullPageSlider"
import ContactPage from "./ContactPage"
import About from "./About"
import Team from "./Team"
import Sponsored from "./Sponsored"
import Offer from "./Offer"
import Collaborations from "./Collaborations"


export function LandingPage() {


  

  return (
    <div className="flex flex-col min-h-[100dvh]">
            <Head>
        <title>Aritificai Intelligence Club </title>
        
      </Head>
      <header>
     
          <Navbar/>
      
        
       
        <FullPageSlider/>
    
        
      </header>

    



      <main className="flex-1 my-10" id="about">
      <About/>
      <Team/>
      <Sponsored/>  
      <Offer/>
      <Collaborations/>

        



        

      </main>
      <span id="contact">
      <ContactPage/>
      </span>
      
      <Footer/>
    </div>
  )
}

