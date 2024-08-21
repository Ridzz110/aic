import img1 from '../../app/assests/sajid-khan-mLynx8Whiqw-unsplash.jpg'
import img2 from '../../app/assests/mixed-grill-platter.jpg'
import img3 from '../../app/assests/dumplings-selection.jpg'
import img4 from '../../app/assests/smoke-town-smoky-bbq.jpg'
import img5 from '../../app/assests/tuscany-courtyard.jpg'
import img6 from '../../app/assests/the-royal-elephant.jpg'
import img7 from '../../app/assests/photo0jpg.jpg'
import img8 from '../../app/assests/mahreen-sarwar-dgjHabxPSwE-unsplash.jpg'
import img9 from '../../app/assests/Lok-Virsa-Museum-Islamabad.jpg.webp'
import img10 from '../../app/assests/mohammad-hassan-mukhtar-ahmad-v_I7kucw-ck-unsplash.jpg'
import img11 from '../../app/assests/shakarpariyan-hills.jpg'
import img12 from '../../app/assests/abdul-haseeb-Gp-BefDr4TU-unsplash.jpg'
import img13 from '../../app/assests/saidpur-village.jpg'
import Image from 'next/image'
import Navbar from '@/components/component/Navbar'
import Footer from '@/components/component/Footer'
import Head from 'next/head'
export default function attractionAndCuisine() {
    return (
      <div className="flex flex-col min-h-dvh">
        <Head>
            <title>Discover Islamabad - Attractions & Cuisine</title>
            <meta name="description" content="Explore the best attractions and cuisine in Islamabad, from iconic landmarks to diverse culinary delights." />
            <meta name="keywords" content="Islamabad, attractions, cuisine, restaurants, tourism" />
        </Head>
        <Navbar/>
        <section className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <Image src={img1} alt="islamabad's architecture" className='absolute inset-0 w-full h-full object-cover'/>
          <div className="absolute inset-0 container h-full flex flex-col justify-center items-center text-center text-primary-foreground space-y-4 px-4 md:px-6">
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover the Flavors and Wonders of Islamabad
            </h1>
            <p className="max-w-[700px] text-xl md:text-2xl">
              Explore the vibrant cuisine and iconic attractions that make Islamabad a must-visit destination.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-8">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Cuisine</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Savor the Flavors of Islamabad
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover the vibrant and diverse culinary scene of Islamabad, featuring a range of traditional and modern
                dishes that showcase the city's rich cultural heritage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img2} alt="grilled-platter" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">Dawat</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience a mesmerizing dining journey in Dawat restaurant at Islamabad Serena Hotel.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img3} alt="Wild Rice Restaurant" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">Wild Rice Restaurant</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore the exotic flavours of Thai, Indonesian, Japanese, and Chinese specialties at Wild Rice, located on the lobby level in the new wing of the Hotel.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img4} alt="Burger In Town" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">Burger In Town</h3>
                  <p className="text-sm text-muted-foreground">A slow-cooked meat stew with a rich, aromatic gravy.</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img5} alt="Tuscany Courtyard" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">Tuscany Courtyard</h3>
                  <p className="text-sm text-muted-foreground">
                  A popular seafood restaurant that serves calamari fritte, red snapper with asparagus, pastas, panini, and burger
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img6} alt="The Royal Elephant" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">The Royal Elephant</h3>
                  <p className="text-sm text-muted-foreground">Offers Thai cusine. Two Private Rooms for Fine Dining one with the capacity of 10-persons and other with the capacity of 06-persons.</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
                <Image src={img7} alt="Street 1 Cafe" className="object-cover w-full h-64"/>
                <div className="p-4 bg-background flex-grow">
                  <h3 className="text-xl font-bold">Street 1 Cafe</h3>
                  <p className="text-sm text-muted-foreground">
                  Street 1 Café: Savor diverse flavors with vegetarian, vegan, and halal options, perfect for any meal of the day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-8">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Attractions</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore the Wonders of Islamabad
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover the iconic landmarks, historical sites, and natural beauty that make Islamabad a captivating
                destination for visitors.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                <Image src={img8} alt="faisal-mosque" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Faisal Mosque</h3>
                  <p className="text-sm text-muted-foreground">
                    A stunning modern mosque with a unique architectural design.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Image src={img9} alt="lok-virsa" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Lok Virsa Museum</h3>
                  <p className="text-sm text-muted-foreground">
                    A cultural museum showcasing the rich heritage and traditions of Pakistan.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Image src={img13} alt="Saidpur Village" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Saidpur Village</h3>
                  <p className="text-sm text-muted-foreground">
                  This 500-year-old village on the slopes of the Margalla Hills in Islamabad was remodeled into a cultural tourist attraction 
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Image src={img11} alt="Shakarparian Hills" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Shakarparian Hills</h3>
                  <p className="text-sm text-muted-foreground">A scenic hilltop park with panoramic views of the city.</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Image src={img10} alt="pakistan monument" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Pakistan Monument</h3>
                  <p className="text-sm text-muted-foreground">
                    A striking architectural landmark celebrating Pakistan's history and unity.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Image src={img12} alt="Margalla Hills" className='object-cover w-full h-64'/>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Margalla Hills</h3>
                  <p className="text-sm text-muted-foreground">
                  The Margalla Hills are a picturesque hill range located within the Margalla Hills National Park, forming the northern boundary of Islamabad's Capital Territory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }