const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const Image = {
  HeroImage: asset("assets/hero-img.webp"),
};

export default Image;

// ==============================
// LIST TOOLS
// ==============================

export const listTools = [
  {
    id: 1,
    gambar: asset("assets/tools/vscode.png"),
    nama: "Visual Studio Code",
    ket: "Code Editor",
  },
  {
    id: 2,
    gambar: asset("assets/tools/reactjs.png"),
    nama: "React",
    ket: "UI Library",
  },
  {
    id: 3,
    gambar: asset("assets/tools/tailwind.png"),
    nama: "Tailwind CSS",
    ket: "CSS Framework",
  },
  {
    id: 4,
    gambar: asset("assets/tools/js.png"),
    nama: "JavaScript",
    ket: "Programming Language",
  },
  {
    id: 5,
    gambar: asset("assets/tools/github.png"),
    nama: "GitHub",
    ket: "Code Repository",
  },
    {
  id: 6,
  gambar: asset("assets/tools/wordpress.png"),
  nama: "WordPress",
  ket: "Content Management System",
  }
];

// ==============================
// LIST PROYEK
// ==============================

export const listProyek = [
  {
    id: 1,
    gambar: asset("assets/proyek/admin-dashboard.webp"),
    nama: "Admin Dashboard",
    kategori: "Dashboard Application",
    desk: "An interactive admin dashboard featuring data visualizations, analytics, and a clean interface for presenting information.",
    tools: ["React", "Tailwind CSS", "Recharts", "Meta API"],
    live: "https://halifaz27.github.io/admin-dashboard/",
    source: "https://github.com/halifaz27/admin-dashboard",
  },
  {
    id: 2,
    gambar: asset("assets/proyek/nexus-lms.webp"),
    nama: "Nexus LMS",
    kategori: "Learning Management System",
    desk: "A learning management platform with a modern interface and Supabase authentication, including email and Google sign-in.",
    tools: ["React", "Tailwind CSS", "Supabase"],
    live: "https://halifaz27.github.io/Nexus-LMS/",
    source: "https://github.com/halifaz27/Nexus-LMS",
  },
 {
  id: 3,
  gambar: asset("assets/proyek/travel-website.webp"), 
  nama: "Travel Website",
  kategori: "Travel & Tourism",
  desk: "A travel website showcasing destinations through an engaging layout, clear navigation, and a responsive browsing experience.",
  tools: ["HTML", "CSS", "JavaScript"],
  live: "https://halifaz27.github.io/travel-website/",
  source: "https://github.com/halifaz27/travel-website",
}
];