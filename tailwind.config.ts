import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        'heart': 'polygon(50% 0%, 100% 38%, 82% 100%, 50% 75%, 18% 100%, 0% 38%)',
        'wave': 'ellipse(50% 40% at 50% 50%)',
      },
      fontFamily: {
        'exm': ['Exmouth', 'system-ui'],
        'ind': ['Indulge', 'system-ui'],
        'sgeo': ['SVNGeorgia', 'system-ui'],
        'spal': ['SVNPalmaton', 'system-ui'],
        'sple': ['SVNPleasent', 'system-ui'],
        'stak': ['SVNTakenbyVultures', 'system-ui'],
        'stansa': ['SVNTanglewoodsSan', 'system-ui'],
        'stans': ['SVNTanglewoodsS', 'system-ui'],
        'swal': ['SVNWaliglona', 'system-ui'],
        'hel': ['Helvetica', 'system-ui'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'mont' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
