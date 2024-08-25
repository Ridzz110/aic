import React from 'react'

const Sponsored = () => {
  return (
    <div><section id="culture" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Sponsors</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Welcome RAWR, our official AIC sponsor!
          </h2>
          
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <img src="./rawr.jpg" alt="" />
        <div className="flex flex-col justify-center space-y-4">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Exciting Partnership with Rawr Cafe & Lounge</h3>
            <p className="text-muted-foreground">
            Excited to announce Rawr Cafe & Lounge as AIC's official sponsor, bringing great benefits to our members!
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Enjoy Exclusive Perks and Discounts</h3>
            <p className="text-muted-foreground">
            AIC members enjoy a 15% discount at Rawr Cafe & Lounge, with delicious food and cozy ambiance.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Stay Tuned for Upcoming Events</h3>
            <p className="text-muted-foreground">
            Stay tuned for exciting events and specials with Rawr Cafe’s support for our AI community!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Sponsored