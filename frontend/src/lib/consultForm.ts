const STRAPI_URL = "http://localhost:1337/api"; // Change this for production

// 🔻 GET Dropdown Options
export async function getCode() {
  const res = await fetch(`${STRAPI_URL}/offices`);
  const json = await res.json();
  return json.data;
}

export async function getOffices() {
  const res = await fetch(`${STRAPI_URL}/offices`);
  const json = await res.json();
  return json.data;
}
// src/lib/consultForm.ts
export async function fetchDropdownData() {
  const baseURL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

  const [officesRes, destinationsRes, studyYearsRes, studyIntakesRes] =
    await Promise.all([
      fetch(`${baseURL}/offices?populate=*`),
      fetch(`${baseURL}/destinations?populate=*`),
      fetch(`${baseURL}/study-years?populate=*`),
      fetch(`${baseURL}/study-intakes?populate=*`),
    ]);

  const [offices, destinations, studyYears, studyIntakes] = await Promise.all([
    officesRes.json(),
    destinationsRes.json(),
    studyYearsRes.json(),
    studyIntakesRes.json(),
  ]);

  return {
    offices: offices.data || [],
    destinations: destinations.data || [],
    studyYears: studyYears.data || [],
    studyIntakes: studyIntakes.data || [],
  };
}

export async function getDestinations() {
  const res = await fetch(`${STRAPI_URL}/destinations`);
  const json = await res.json();
  return json.data;
}

export async function getStudyYears() {
  const res = await fetch(`${STRAPI_URL}/study-years`);
  const json = await res.json();
  return json.data;
}

export async function getStudyIntakes() {
  const res = await fetch(`${STRAPI_URL}/study-intakes`);
  const json = await res.json();
  return json.data;
}

// 🔻 POST Form Submission
export async function submitConsultationForm(data: any) {
  const res = await fetch(`${STRAPI_URL}/consultation-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.error?.message || "Submission failed");
  }

  return await res.json();
}
