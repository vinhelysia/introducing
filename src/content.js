export const me = {
  name: "VinhElysia",
  role: "CS student · builder · Genshin creator",
  tagline: "Hi there, im Vinh",
  sub: "Genshin commissions, YouTube & TikTok, and game & web projects from DHV.",
  location: "Vietnam",
};

// Home hero background — swap the file in public/img/ anytime.
export const hero = {
  src: "/img/hero-genshin.jpg",
  alt: "Inazuma at sunset, photo from Genshin Impact",
};

export const links = {
  youtube: "https://youtube.com/@vinhelysia",
  tiktok: "https://tiktok.com/@vinhelysia1",
  github: "https://github.com/vinhelysia",
  // Leave blank until you want them public — SocialLinks hides empty ones.
  discord: "",
  email: "",
};

// The four things on the home page.
export const whatIDo = [
  {
    title: "Commissions",
    blurb:
      "Genshin and Star Rail commissions. Resin farming, artifacts, gacha currency, map clears. You pay for the grind. I do it. You log back in to a finished account.",
    to: "#contact",
    cta: "Ask me about it",
  },
  {
    title: "YouTube",
    blurb:
      "Genshin videos. Spiral Abyss and Stygian Onslaught mostly. Mods on for camera and visuals.",
    to: "/content",
    cta: "Watch",
  },
  {
    title: "TikTok",
    blurb:
      "I play songs on Genshin's in-game instruments. Windsong Lyre. Vintage Lyre. Floral Zither. Short clips and teapot shares too.",
    to: "/content",
    cta: "Listen",
  },
  {
    title: "Building things",
    blurb:
      "Godot FPS. Also web and app projects. A lot of them are Genshin tools I needed because nothing else did the job.",
    to: "/projects",
    cta: "See the work",
  },
];

export const about = {
  portrait: {
    src: "/img/portrait.png",
    alt: "VinhElysia avatar",
  },
  // Write these like you talk. Each string is one paragraph.
  paragraphs: [
    "I'm a CS student at Đại học Hùng Vương TP.HCM (DHV). Most of what I ship starts as something I needed for class or for Genshin. Sometimes I just get annoyed enough to build it myself.",
    "On GitHub that's a pile of small tools. Genshin sheet and music libraries. Serenitea Pot showcases. A lyre-to-MIDI helper. Quiz apps for studying. A Rust YouTube downloader. An FPS in Godot. I pick GDScript, TypeScript, Python, Rust, or Kotlin depending on the job.",
    "Outside code I do Genshin and HSR grind commissions. I post clears and clips. I share other people's teapot builds with credit when I have their permission.",
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
    "Abyss clears. Stygian Onslaught. Lyre and piano covers. I use mods for camera and visuals, but the gameplay is real.",
  videos: [
    {
      id: "CEvt-Ms1Ino",
      title: "5.7 Spiral Abyss Floor 12 — Goku Freeze & Raiden",
    },
    {
      id: "O4-XcN9skPg",
      title: "5.7 Spiral Abyss Floor 12 — Capitano Freeze & Mavuika",
    },
    {
      id: "T_k1J-LcoRs",
      title: "5.7 Spiral Abyss Floor 12 — Mavuika Vape & Skirk",
    },
    {
      id: "VXI7gOrr_ZY",
      title: "5.7 Spiral Abyss Floor 12 — Mavuika & Neuvillette",
    },
    {
      id: "M0h8HEufdko",
      title: "KARMA — Alien Stage piano cover (Genshin)",
    },
    {
      id: "_rhwhHWT31A",
      title: "Wiege — Alien Stage Windsong Lyre cover",
    },
  ],
};

// TikTok has no free thumbnail URL. Add posts only when you drop a screenshot
// in public/img/ and paste the real video URL. Empty = profile link only.
export const tiktok = {
  profileUrl: links.tiktok,
  blurb:
    "Short clips, lyre covers, and Serenitea Pot shares (with credit). Latest stuff lives on the profile.",
  posts: [],
};

// Projects. Add or delete objects freely — the page maps over these.
// `img` is optional. Leave it out and the card still looks fine.
export const projects = {
  games: [
    {
      title: "Cogito FPS",
      year: "2026",
      blurb:
        "FPS in Godot. Immersive-sim style — inventory, interaction, physics world. Not a hallway full of enemies.",
      tags: ["Godot", "GDScript", "Cogito"],
      url: "https://github.com/vinhelysia/godot-fps-cogito",
      img: {
        src: "/img/cogito.svg",
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
        src: "/img/sheet-library.jpg",
        alt: "Genshin Sheet Library hero — mountain landscape with sheet library title",
      },
    },
    {
      title: "Serenitea Pot Showcase",
      year: "2025",
      blurb:
        "Serenitea Pot share codes and builds in one place — searchable, with credit to the builders.",
      tags: ["TypeScript", "Web"],
      url: "https://vinhelysia.github.io/sereniteapot-showcase/",
      img: {
        src: "/img/serenitea.jpg",
        alt: "Serenitea Pot Showcase hero — night cave teapot archive",
      },
    },
    {
      title: "Genshin Music Library",
      year: "2025",
      blurb:
        "Music library focused on Genshin tracks and practice material I actually use for covers.",
      tags: ["CSS", "Web"],
      url: "https://vinhelysia.github.io/genshin-music-library/",
    },
    {
      title: "Genshin Gallery",
      year: "2025",
      blurb: "Personal Genshin gallery — screenshots and media I want easy to browse.",
      tags: ["TypeScript", "Web"],
      url: "https://vinhelysia.github.io/my-genshin-gallery/",
    },
    {
      title: "Study Quiz",
      year: "2026",
      blurb: "Simple quiz site I made to study. Fast, no fluff, just questions.",
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
    {
      title: "APlayer",
      year: "2026",
      blurb: "Android music player. Local files, clean UI, Kotlin.",
      tags: ["Kotlin", "Android"],
      url: "https://github.com/vinhelysia/APlayer",
    },
    {
      title: "GenshinLyre → MIDI",
      year: "2025",
      blurb:
        "Convert Genshin lyre note data into MIDI so I can practice covers outside the game.",
      tags: ["Python"],
      url: "https://github.com/vinhelysia/GenshinLyre-To-Midi",
    },
  ],
};
