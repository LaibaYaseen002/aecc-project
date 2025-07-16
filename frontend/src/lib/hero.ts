export interface HeroSlide {
  heading: string;
  subheading: string;
  image: string;
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  try {
    const res = await fetch(
      "http://localhost:1337/api/hero-sections?populate=Image"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch hero slides");
    }

    const json = await res.json();

    const slides: HeroSlide[] = json.data.map((item: any) => {
      const attrs = item;

      const heading = attrs.Heading || "";
      const subheading = attrs.Subheading || "";

      // This is your image URL relative to Strapi's server
      const imageUrl = attrs.Image?.url
        ? `http://localhost:1337${attrs.Image.url}`
        : "";

      return {
        heading,
        subheading,
        image: imageUrl,
      };
    });

    return slides;
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return [];
  }
}
