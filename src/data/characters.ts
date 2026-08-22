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

export const characters: Character[] = [
  {
    id: 1,
    name: "Malik",
    slug: "malik",
    category: "Fantasia / Personagem 3D",
    image: "/characters/malik.png",
    description:
      "Personagem desenvolvido com foco em elementos de fantasia, vestuário e presença visual.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 2,
    name: "Kaira",
    slug: "kaira",
    category: "Sci-fi / Character Design",
    image: "/characters/kaira.png",
    description:
      "Personagem de ficção científica criado explorando formas, materiais e elementos tecnológicos.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 3,
    name: "Akari",
    slug: "akari",
    category: "Personagem 3D",
    image: "/characters/akari.png",
    description:
      "Personagem desenvolvida com inspiração oriental e foco em silhueta, roupas e detalhes visuais.",
    tools: ["Blender", "ZBrush", "Substance Painter"],
  },

  {
    id: 4,
    name: "Zora",
    slug: "zora",
    category: "Cyberpunk / Character Design",
    image: "/characters/zora/zora-hero.png",
    description:
      "Personagem cyberpunk desenvolvida com foco em identidade visual, acessórios e elementos tecnológicos.",
    tools: ["Blender", "ZBrush", "Substance Painter"],

    gallery: {
      sculpt: "/characters/zora/zora-sculpt.png",
      modeling: "/characters/zora/zora-modeling.png",
      texturing: "/characters/zora/zora-texturing.png",
    },
  },
];