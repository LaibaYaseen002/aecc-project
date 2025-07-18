// src/lib/testimonial.ts

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const res = await fetch(`http://localhost:1337/api/testimonials`);
    const data = await res.json();

    return data.data.map((item: any) => {
      const attributes = item.attributes || item; // fallback safety
      const textObj = attributes.text || [];

      const firstParagraph = textObj?.[0]?.children?.[0]?.text || "";

      return {
        id: item.id,
        text: firstParagraph,
        author: attributes.author || "Anonymous",
      };
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
