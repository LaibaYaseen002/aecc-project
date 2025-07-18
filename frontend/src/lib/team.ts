export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  image: {
    url: string;
  };
};

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(
      `http://localhost:1337/api/team-members?populate=image`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch team members: ${res.statusText}`);
    }

    const json = await res.json();

    return json.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      designation: item.designation,
      image: {
        url: item.image?.url || null, // fallback empty if missing
      },
    }));
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return [];
  }
}
