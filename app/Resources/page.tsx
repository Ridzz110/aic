import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";
import Img1 from '../../app/assests/shuttergames-bJx5pGymF1o-unsplash.jpg';
import Image from "next/image";

export default function Resources() {
    return (
        <div className="flex flex-col min-h-dvh">
            <Head>
                <title>Contribute to Islamabad Tourist Guide</title>
                <meta name="description" content="Share your favorite experiences, photos, and recommendations about Islamabad and get a chance to be featured on our site." />
                <meta name="keywords" content="Islamabad, tourism, restaurants, pictures, contribute" />
            </Head>
            <Navbar />
            <section className="w-full py-12 md:py-24 lg:py-32 border-b">
                <div className="container px-4 md:px-6 space-y-10">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Contribute Here!
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
                                Send us your favorite thing about Islamabad. It could be HD pictures, restaurant recommendations, or your favorite thing to do in Islamabad. Get a chance to get published here!
                            </p>
                            <div className="space-x-4 mt-6">
                                <p className="text-muted-foreground">
                                    Please send your resources to{" "}
                                    <a href="mailto:islamabadtouristguide@gmail.com" className="text-primary underline">
                                        islamabadtouristguide@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <Image src={Img1} alt="Faisal Mosque" className="h-96 rounded-lg shadow-lg object-cover" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
