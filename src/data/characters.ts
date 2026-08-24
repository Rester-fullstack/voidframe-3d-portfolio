export interface Character {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  tools: string[];

  gallery?: {
    sculpt?: string;
    modeling?: string;
    texturing?: string;
    wireframe?: string;
    closeup?: string;
    front?: string;
    back?: string;
  };
}

const base = import.meta.env.BASE_URL;

export const characters: Character[] = [
  {
    id: 1,
    name: "Malik",
    slug: "malik",
    category: "Fantasia / Personagem 3D",
    image: `${base}characters/malik.png`,
    description:
      "Personagem desenvolvido com foco em elementos de fantasia, vestuário e presença visual.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 2,
    name: "Kaira",
    slug: "kaira",
    category: "Sci-fi / Character Design",
    image: `${base}characters/kaira.png`,
    description:
      "Personagem de ficção científica criado explorando formas, materiais e elementos tecnológicos.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 3,
    name: "Akari",
    slug: "akari",
    category: "Personagem 3D",
    image: `${base}characters/akari.png`,
    description:
      "Personagem desenvolvida com inspiração oriental e foco em silhueta, roupas e detalhes visuais.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 4,
    name: "Zora",
    slug: "zora",
    category: "Cyberpunk / Character Design",
    image: `${base}characters/zora/zora-hero.png`,
    description:
      "Personagem cyberpunk desenvolvida com foco em identidade visual, acessórios e elementos tecnológicos.",
    tools: ["Blender", "ZBrush", "Substance Painter"],

    gallery: {
      sculpt: `${base}characters/zora/zora-sculpt.png`,
      modeling: `${base}characters/zora/zora-modeling.png`,
      texturing: `${base}characters/zora/zora-texturing.png`,
    },
  },
];