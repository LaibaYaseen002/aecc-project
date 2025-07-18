export async function fetchPosts() {
  try {
    const res = await fetch("http://localhost:1337/api/blog-posts?populate=image");

    if (!res.ok) {
      console.error("🚨 Fetch failed with status:", res.status);
      throw new Error("Failed to fetch blog posts");
    }

    const json = await res.json();
    const posts = json.data;

    if (!Array.isArray(posts)) {
      console.warn("⚠️ Blog data is not an array:", posts);
      return [];
    }

    return posts.map((item: any) => {
      const imageUrl = item.image?.formats?.small?.url || item.image?.url;

      const fullImageUrl = imageUrl
        ? `http://localhost:1337${imageUrl}`
        : "/uploads/blog-placeholder.jpg"; // fallback if image missing

      const dateObj = new Date(item.Date || "");

      return {
        id: item.id,
        image: fullImageUrl,
        title: item.title || "Untitled Post",
        date: dateObj.toLocaleDateString("en-US", {
          day: "2-digit",
        }),
        year: item.year || "Unknown",
        author: item.author || "Unknown",
      };
    });
  } catch (err) {
    console.error("❌ Error in fetchPosts:", err);
    return [];
  }
}
