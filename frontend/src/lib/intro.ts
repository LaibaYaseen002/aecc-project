// lib/intro.ts

export type IntroData = {
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  counselingTitle: string;
  counselingText: string;
  englishTestTitle: string;
  englishTestText: string;
  documentTitle: string;
  documentText: string;
};

// --- Rich Text Types ---

type RichTextChild = {
  type: string;
  text: string;
};

type RichTextBlock = {
  type: string;
  children: RichTextChild[];
};

function extractText(richText: RichTextBlock[]): string {
  if (!richText) return "";
  return richText
    .map((block) => block.children?.map((child) => child.text).join("") || "")
    .join("\n");
}

export async function fetchIntroData(): Promise<IntroData | null> {
  try {
    const res = await fetch("http://localhost:1337/api/intro-sections");

    if (!res.ok) throw new Error("Failed to fetch intro data");

    const json = await res.json();

    const attributes = json?.data?.[0];

    if (!attributes) throw new Error("No intro data found");

    return {
      title: attributes.title,
      description1: extractText(attributes.description1),
      description2: extractText(attributes.description2),
      buttonText: attributes.buttonText,
      counselingTitle: attributes.counselingTitle,
      counselingText: attributes.counselingText,
      englishTestTitle: attributes.englishTestTitle,
      englishTestText: attributes.englishTestText,
      documentTitle: attributes.documentTitle,
      documentText: attributes.documentText,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
