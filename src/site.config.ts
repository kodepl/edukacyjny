const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "Edukacyjny",
  domain: "edukacyjny.info",
  tagline: "Portal lekcji: metody nauki, przedmioty szkolne i kompetencje bez podręcznikowego bełkotu",
  email: "kontakt@edukacyjny.info",
  city: "Lublin",
  address: "ul. Krakowskie Przedmieście 14/3, 20-002 Lublin",
  author: "Natalia Majewska",
  authorBio: "Nauczycielka i metodyczka. Tłumaczy trudne tematy na checklisty do nauki w domu.",
  authorRole: "Metodyczka",
  authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1503676260728-1c00da094a0b", 1600),
  aboutImage: u("photo-1523050854058-8df90110c8f1", 1200),
  covers: {
    Metody: u("photo-1434030216411-0b793f4b4173"),
    Matematyka: u("photo-1635070041078-e363dbe005cb"),
    Jezyk: u("photo-1456513080510-7bf3a84b82f8"),
    "Język": u("photo-1456513080510-7bf3a84b82f8"),
    Przyroda: u("photo-1532094349884-543bc11b234d"),
    Historia: u("photo-1461360370896-922624d12a74"),
    Kompetencje: u("photo-1522202176988-66273c2fd55f"),
    default: u("photo-1503676260728-1c00da094a0b"),
  } as Record<string, string>,
  subjects: [
    { name: "Metody", blurb: "Jak się uczyć, powtarzać i nie tracić motywacji po drugim tygodniu." },
    { name: "Matematyka", blurb: "Ułamki, procenty i zadania tekstowe bez paniki." },
    { name: "Język", blurb: "Ortografia, czytanie ze zrozumieniem i pisanie krótkich form." },
    { name: "Przyroda", blurb: "Biologia i fizyka w przykładach z kuchni i podwórka." },
    { name: "Historia", blurb: "Daty, przyczyny i skutki — bez wkuwania na pamięć wszystkiego naraz." },
    { name: "Kompetencje", blurb: "Notatki, koncentracja, praca w grupie i samodzielność." },
  ],
};

export function subjectSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
