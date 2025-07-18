// src/lib/footer.ts
import qs from "qs";

export const fetchFooterData = async () => {
  const query = qs.stringify(
    {
      populate: {
        quick_links: true,
        popular_links: true,
        phones: true,
        social_links: true,
      },
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(`http://localhost:1337/api/footer-contents?${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Optional: disables caching
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch footer content:", res.statusText);
      return null;
    }

    const json = await res.json();

    // 🔥 RETURN the actual object — no .attributes here
    return json.data?.[0] || null;
  } catch (error) {
    console.error("🔥 Error fetching footer data:", error);
    return null;
  }
};
