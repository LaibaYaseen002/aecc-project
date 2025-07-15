export interface HeroSlide {
  image: string;
  heading: string;
  subheading: string;
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  try {
    const res = await fetch(
      "http://localhost:1337/api/hero-sections?populate=Image"
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Strapi error:", err);
      throw new Error("Failed to fetch hero slides");
    }

    const json = await res.json();

    const slides: HeroSlide[] = json.data.map((item: any) => {
      const heading = item.Heading || "";
      const subheading = item.Subheading || "";
      const imageData = item.Image?.[0];
      const imageUrl = imageData?.url
        ? `http://localhost:1337${imageData.url}`
        : "";

      return {
        image: imageUrl,
        heading,
        subheading,
      };
    });

    return slides;
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return [];
  }
}
