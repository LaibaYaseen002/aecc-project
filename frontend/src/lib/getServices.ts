import axios from "axios";

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  button: boolean;
}

export const getServices = async (): Promise<Service[]> => {
  try {
    const res = await axios.get(
      "http://localhost:1337/api/services?populate=*"
    );

    const data = res.data.data;

    const formattedServices: Service[] = data.map((item: any) => ({
      title: item.title,
      description: item.description,
      imageUrl: item.image?.url
        ? `http://localhost:1337${item.image.url}`
        : "/default-image.jpg",
      button: item.button,
    }));
    return formattedServices;
  } catch (error) {
    console.error("Error fetching services from Strapi:", error);
    return [];
  }
};
