export async function getNavbarItems() {
  const res = await fetch(
    "http://localhost:1337/api/navbar-items?populate=children"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch navbar items");
  }

  const data = await res.json();

  if (!data.data || !Array.isArray(data.data)) {
    return [];
  }

  return data.data.map((item: any) => ({
    title: item.title || "No Title",
    href: item.href || "#",
    children: Array.isArray(item.children)
      ? item.children.map((child: any) => ({
          title: child.title || "No Title",
          href: child.href || "#",
        }))
      : [],
  }));
}
