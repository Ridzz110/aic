import React from 'react'

const Offer = () => {
    const cards = [
        {
          image: "https://via.placeholder.com/600x400.png?text=Events",
          title: "Exciting Events",
          description: "Join us for dynamic workshops, seminars, and hackathons designed to propel you into the future of AI.",
        },
        {
          image: "https://via.placeholder.com/600x400.png?text=Technology",
          title: "Cutting-Edge Technology",
          description: "Experience the latest in AI technology with hands-on sessions and exclusive insights from industry leaders.",
        },
        {
          image: "https://via.placeholder.com/600x400.png?text=Party",
          title: "Fun and Networking",
          description: "Connect with fellow enthusiasts and celebrate milestones with engaging social events and parties.",
        },
      ];
    
  return (
    <div><section id="cuisine" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <section className="py-16 px-6 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card, index) => (
        <div key={index} className="w-full sm:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      

    </section></div>
  )
}

export default Offer