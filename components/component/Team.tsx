'use client'
import { cn } from "@/lib/utils";
import { FocusCards } from "../ui/focus-cards";
import React from "react";
import coreTeam from "@/app/assests/coreMembers";
const Team = () => {
  return (
    <div className="bg-gradient-to-br from-customDarkBlue via-customBlue to-customDarkBlue">
      <section id="team" className="w-full py-12 md:py-24 lg:py-16 bg-transparent">
        <div>
          <section className="py-6 bg-transparent">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            
              <h1 className="text-4xl mb-10 text-white font-bold leading-none text-center lg:text-6xl tracking-tight">
                Our Core Team
              </h1>
              <FocusCards cards={coreTeam} />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Team;
