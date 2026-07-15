// public/ paths use Vite BASE_URL (root "/" on the custom domain).
export function asset(path) {
  const base = import.meta.env.BASE_URL;
  return `${base}${String(path).replace(/^\//, "")}`;
}

export const me = {
  name: "VinhElysia",
  role: "CS student · builder · Genshin creator",
  tagline: "Hi there, I'm Vinh",
  sub: "I'm a Genshin Impact content creator and a computer science student at DHV University in Vietnam.",
  location: "Vietnam",
};

// Home hero background - swap the file in public/img/ anytime.
export const hero = {
  src: asset("img/hero-genshin.jpg"),
  alt: "Inazuma at sunset, photo from Genshin Impact",
};

export const links = {
  youtube: "https://youtube.com/@vinhelysia",
  tiktok: "https://tiktok.com/@vinhelysia1",
  github: "https://github.com/vinhelysia",
  // Leave blank until you want them public - SocialLinks hides empty ones.
  discord: "",
  email: "",
};

// The four things on the home page.
export const whatIDo = [
  {
    title: "Commissions",
    blurb:
      "Genshin and Star Rail grind commissions: resin, artifacts, gacha currency, map clears. You pay for the grind. I finish it. You log back in to a done account.",
    to: "#contact",
    cta: "Ask me about it",
  },
  {
    title: "YouTube",
    blurb:
      "Genshin videos. Spiral Abyss and Stygian Onslaught mostly. Mods for camera and visuals, but the gameplay is real.",
    to: "/content",
    cta: "Watch",
  },
  {
    title: "TikTok",
    blurb:
      "Songs on Genshin's instruments (Windsong Lyre, Vintage Lyre, Floral Zither). Short clips and teapot shares too.",
    to: "/content",
    cta: "Listen",
  },
  {
    title: "Building things",
    blurb:
      "Godot FPS, web tools, apps. A lot of them are Genshin utilities I needed because nothing else did the job.",
    to: "/projects",
    cta: "See the work",
  },
];

export const about = {
  portrait: {
    src: asset("img/portrait.png"),
    alt: "VinhElysia avatar",
  },
  // Write these like you talk. Each string is one paragraph.
  paragraphs: [
    "I'm a CS student at Đại học Hùng Vương TP.HCM (DHV). Most of what I ship starts as something I needed for class or for Genshin, or I just got annoyed enough to build it myself.",
    "On GitHub that's a pile of small tools: Genshin sheet and music libraries, Serenitea Pot showcases, a lyre-to-MIDI helper, quiz apps, a Rust YouTube downloader, an FPS in Godot. I pick GDScript, TypeScript, Python, Rust, or Kotlin depending on the job.",
    "Outside code I take Genshin and HSR grind commissions, post clears and clips and share other people's teapot builds with credit when I have permission.",
  ],
  skills: [
    "Rust",
    "C++",
    "C#",
    "GDScript",
    "Python",
    "Git",
    "Kotlin",
    "TypeScript",
    "React",
  ],
};

// YouTube. Thumbnail comes free from the video ID.
// ID = the part after "v=" in youtube.com/watch?v=...
export const youtube = {
  channelUrl: links.youtube,
  blurb:
    "Abyss clears. Stygian Onslaught. Lyre and piano covers. Mods for camera and visuals, but the gameplay is real.",
  videos: [
    {
      id: "CEvt-Ms1Ino",
      title: "5.7 Spiral Abyss Floor 12: Goku Freeze & Raiden",
    },
    {
      id: "O4-XcN9skPg",
      title: "5.7 Spiral Abyss Floor 12: Capitano Freeze & Mavuika",
    },
    {
      id: "T_k1J-LcoRs",
      title: "5.7 Spiral Abyss Floor 12: Mavuika Vape & Skirk",
    },
    {
      id: "VXI7gOrr_ZY",
      title: "5.7 Spiral Abyss Floor 12: Mavuika & Neuvillette",
    },
    {
      id: "M0h8HEufdko",
      title: "KARMA (Alien Stage) piano cover",
    },
    {
      id: "_rhwhHWT31A",
      title: "Wiege (Alien Stage) Windsong Lyre cover",
    },
  ],
};

// TikTok clips - id from the URL after /video/
export const tiktok = {
  profileUrl: links.tiktok,
  blurb:
    "Short clips, lyre covers and Serenitea Pot shares (with credit). Newest stuff is always on the profile.",
  posts: [
    {
      id: "7540131007798840584",
      title: "KARMA (Alien Stage) piano cover",
    },
    {
      id: "7541831976253148434",
      title: "Ruler of My Heart (Alien Stage) piano cover",
    },
  ],
};

// Projects. Add or delete objects freely - the page maps over these.
// `img` is optional. Leave it out and the card still looks fine.
export const projects = {
  games: [
    {
      title: "Cogito FPS",
      year: "2026",
      blurb:
        "FPS in Godot with an immersive-sim bent: inventory, interaction, physics world. Not a hallway full of enemies.",
      tags: ["Godot", "GDScript", "Cogito"],
      url: "https://github.com/vinhelysia/godot-fps-cogito",
      img: {
        src: asset("img/cogito.svg"),
        alt: "Placeholder art for the Godot FPS project",
      },
    },
  ],
  web: [
    {
      title: "Genshin Sheet Library",
      year: "2026",
      blurb:
        "Browse and play Genshin sheet music in the browser. Built because I needed a cleaner place to keep and share sheets.",
      tags: ["TypeScript", "Web"],
      url: "https://vinhelysia.github.io/genshin-sheet-library/",
      img: {
        src: asset("img/sheet-library.jpg"),
        alt: "Genshin Sheet Library hero, mountain landscape with sheet library title",
      },
    },
    {
      title: "Serenitea Pot Showcase",
      year: "2025",
      blurb:
        "Serenitea Pot share codes and builds in one place. Searchable, with credit to the builders.",
      tags: ["TypeScript", "Web"],
      url: "https://vinhelysia.github.io/sereniteapot-showcase/",
      img: {
        src: asset("img/serenitea.jpg"),
        alt: "Serenitea Pot Showcase hero, night cave teapot archive",
      },
    },
    {
      title: "Study Quiz",
      year: "2026",
      blurb:
        "A simple quiz site I made to study. Fast, no fluff, just questions.",
      tags: ["TypeScript", "Web"],
      url: "https://vinhelysia.github.io/quiz/",
    },
    {
      title: "Rustube",
      year: "2026",
      blurb:
        "Lightweight desktop YouTube downloader in Rust. yt-dlp + ffmpeg under the hood, egui on top.",
      tags: ["Rust", "Desktop"],
      url: "https://github.com/vinhelysia/-Rustube",
    },
  ],
};
