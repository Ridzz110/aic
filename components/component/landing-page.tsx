import Image from "next/image"
import Link from "next/link"
import img1 from "../../app/assests/mahreen-sarwar-dgjHabxPSwE-unsplash.jpg"
import img2 from "../../app/assests/shairyar-khan-2l0YVm_UMTQ-unsplash.jpg"
import img3 from "../../app/assests/shuttergames-Hd8g4L9hlC4-unsplash.jpg"
import img5 from "../../app/assests/moez-mustafa-6Wpxhhh1rhQ-unsplash.jpg"
import img4 from '../../app/assests/ghulam-ahmad-shahid-VUKxA9aVMEM-unsplash.jpg'
import img6 from '../../app/assests/raman-jjoyL1hk1Vo-unsplash.jpg'
import img7 from '../../app/assests/jay-gajjar-lGIXXpeERSM-unsplash.jpg'
import img8 from '../../app/assests/zamana5.jpg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"


export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
            <Head>
        <title>Discover Islamabad - A Guide to the Capital of Pakistan</title>
        <meta name="description" content="Explore the rich history, culture, and cuisine of Islamabad, Pakistan. Discover attractions, accommodations, and more." />
        <meta name="keywords" content="Islamabad, Pakistan, Attractions, Culture, Cuisine, Travel Guide" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Vibrant City of Islamabad, Pakistan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore the rich history, captivating culture, and delectable cuisine of this enchanting
                    destination.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/attractionAndCuisine"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore the Guide
                  </Link>
                </div>
              </div>
              <Image className=" h-5/6 rounded-lg shadow-xl" src={img2} alt="isl image"/>
            </div>
          </div>
        </section>
        <section id="attractions" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Top Attractions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the Wonders of Islamabad</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From historic landmarks to vibrant markets, Islamabad offers a wealth of attractions to discover.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image src={img3} className="shadow-lg rounded-lg" alt="margala hills"/>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Faisal Mosque</h3>
                  <p className="text-muted-foreground">
                    One of the largest mosques in South Asia, this architectural marvel is a stunning example of Islamic
                    architect.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Lok Virsa Museum</h3>
                  <p className="text-muted-foreground">
                    Explore the rich cultural heritage of Pakistan at this museum, featuring exhibits on traditional
                    arts, crafts, and folklore.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Margala Hills</h3>
                  <p className="text-muted-foreground">
                  Escape to the breathtaking serenity of Margalla Hills, where lush greenery and panoramic views offer the perfect retreat from the city hustle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="culture" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Cultural Immersion</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Immerse Yourself in Islamabad&rsquo;s Rich Heritage
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the vibrant traditions, art, and music that make Pakistan a truly unique cultural
                  destination.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image src={img4} alt="truck art" className="rounded-lg shadow-xl"/>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Truck Art</h3>
                  <p className="text-muted-foreground">
                    Explore the vibrant and intricate truck art, a unique Pakistani art form.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Music</h3>
                  <p className="text-muted-foreground">
                    Immerse yourself in the soulful and spiritual Sufi music traditions of Pakistan.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Captivating architecture</h3>
                  <p className="text-muted-foreground">
                  Islamabad&rsquo;s cultural heritage includes various archaeological sites, government buildings, shrines, stupas, landmarks, and national monuments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cuisine" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Culinary Delights</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Savor the Flavors of Islamabad</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore different resturants from.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-col-2 grid-col-1 lg:gap-12">
            <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg w-72">
              <Image src={img5} alt="chelo kebab" className=" h-3/4 object-cover"/>
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-xl font-bold">Chelo Kebab from Omar Khayyam</CardTitle>
                <CardDescription className="text-gray-600">Omar Khayyam&rsquo;s Chelo Kebab has become the city&rsquo;s most famous dish. It is a lamb dish cooked in a sauce with buttered and salted rice.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg w-72">
              <Image src={img6} alt="karahi" className="h-3/4 object-cover"/>
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-xl font-bold">Chicken/Beef Karahi from Butt Karahi F8</CardTitle>
                <CardDescription className="text-gray-600">A Butt Karahi is one of life&rsquo;s certainties, and it will never go wrong. It would be prove a regret to miss out to have karahi experience in the city with their outdoor setup and Islamabad&rsquo;s typical evening weather.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg w-72">
              <Image src={img7} alt="chelo kebab" className=" h-3/4"/>
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-xl font-bold">Cheesecake from Burning Brownie</CardTitle>
                <CardDescription className="text-gray-600">Burning Brownie&rsquo;s cheesecake, on the other hand, is renowned for its excellence. The most fantastic cheesecake, without a doubt, comes from Burning Brownie.</CardDescription>
              </CardHeader>
            </Card>

            </div>
          </div>
        </section>
        <section id="accommodations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Where to Stay</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect Accommodation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From luxurious hotels to cozy guesthouses, Islamabad offers a range of accommodations to suit every
                  traveler&rsquo;s needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
             <Image src={img8} alt="serena-hotel" className="rounded-lg shadow-ls"/>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Serena Hotel</h3>
                  <p className="text-muted-foreground">
                    Luxurious 5-star hotel with stunning views, world-class amenities, and impeccable service.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Marriott Hotel Islamabad</h3>
                  <p className="text-muted-foreground">
                    Elegant and modern hotel located in the heart of the city, offering a range of dining and leisure
                    options.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Islamabad Guesthouse</h3>
                  <p className="text-muted-foreground">
                    Cozy and affordable guesthouse with a warm, homely atmosphere and friendly hosts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

