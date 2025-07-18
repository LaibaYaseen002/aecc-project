"use client";

import { useEffect, useState } from "react";
import { fetchTeamMembers, TeamMember } from "@/lib/team";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const members = await fetchTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error("Failed to load team members:", error);
      }
    };
    loadTeam();
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") || "";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0e2258]">
          Our Team Members
        </h2>
        <div className="w-16 h-1 bg-gray-400 rounded mx-auto mt-2 mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => {
  const imageUrl = member.image?.url
    ? `http://localhost:1337${member.image.url}`
    : "/default-image.jpg";

            return (
              <div
                key={member.id}
                className="relative overflow-hidden rounded shadow-lg group"
              >
                {/* Image container */}
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={member.name}
                    width={400}
                    height={450}
                    className="w-full h-[450px] object-cover"
                  />

                  {/* Triangle - always visible */}
                  <div className="absolute top-[60%] -left-4 transform -translate-y-1/2 z-10">
                    <div className="w-0 h-0 border-t-[50px] border-b-[50px] border-l-[50px] border-t-transparent border-b-transparent border-l-blue-700"></div>
                  </div>

                  {/* Sliding Panel */}
                  <div className="absolute top-[60%] left-0 transform -translate-y-1/2 w-full h-[100px] pointer-events-none z-20">
                    <div className="bg-[#0e2258] w-full h-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out flex items-center px-6">
                      <div className="text-white pointer-events-auto">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm">{member.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
