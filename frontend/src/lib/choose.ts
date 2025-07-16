export type IconType =
  | "userTie"
  | "percent"
  | "award"
  | "smile"
  | "user"
  | "headset";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export interface WhyChooseUsData {
  id: number;
  title: string;
  description: string;
  features: Feature[];
}

function isValidIcon(icon: string): icon is IconType {
  return ["userTie", "percent", "award", "smile", "user", "headset"].includes(
    icon
  );
}

export async function fetchWhyChooseUs(): Promise<WhyChooseUsData | null> {
  try {
    const res = await fetch(
      "http://localhost:1337/api/why-chooses?populate[features]=*"
    ); // Replace with your actual URL
    const json = await res.json();

    if (!json.data || !json.data.length) return null;

    const rawData = json.data[0];

    // Validate features icons & map
    const features = rawData.features.map((feature: any) => {
      const icon = isValidIcon(feature.icon) ? feature.icon : "userTie"; // fallback
      return {
        id: feature.id,
        title: feature.title,
        description: feature.description,
        icon,
      };
    });

    return {
      id: rawData.id,
      title: rawData.title,
      description: rawData.description,
      features,
    };
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}
