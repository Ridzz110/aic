import Navbar from "@/components/component/Navbar";
import { Card } from "@/components/ui/card";
import teamMembers from "@/app/assests/team"; // Assuming teamMembers array is correctly imported here

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-customDarkBlue to-zinc-900 mt-16">
        <div className="max-w-7xl mx-auto p-8  lg:py-28 py-16">
          <h1 className="lg:text-5xl text-3xl font-bold text-white text-center mb-12">Our Core Team</h1>
          <div className="flex flex-col">
            {teamMembers.map((person, index) => (
              <Card
              key={index}
              className="flex flex-col sm:flex-row bg-white border-none shadow-2xl rounded-lg transform transition-transform duration-300 hover:scale-105 space-y-4 sm:space-y-0 sm:space-x-4 mt-10"
            >
              <img
                src={person.image.src}
                alt={person.name}
                className="h-80 lg:h-64 md:h-64 w-full sm:w-64 object-cover sm:rounded-t-lg lg:rounded-tl-lg lg:rounded-bl-lg shadow-2xl"
              />
              <div className="flex flex-col items-start justify-center px-6 py-10 lg:py-0 sm:px-10">
                <h2 className="text-xl font-semibold text-gray-800">
                  {person.name}
                </h2>
                <h3 className="text-gray-600">{person.designation}</h3>
                <p className="text-gray-500 mt-2 italic">"{person.quote}"</p>
              </div>
            </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
