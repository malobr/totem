import pattern1 from "@/assets/backgrounds/bgPattern1.png"
import pattern2 from "@/assets/backgrounds/bgPattern2.png"
import pattern3 from "@/assets/backgrounds/bgPattern3.png"
import logoAdam from "@/assets/logos/adam_white.svg"

import logo1 from "@/assets/logos/mercadao.png"
import logo2 from "@/assets/logos/diniz.png"
import logo3 from "@/assets/logos/carol.png"
import logo4 from "@/assets/logos/logo4.svg"
import logo5 from "@/assets/logos/logo5.svg"
import logo6 from "@/assets/logos/logo6.svg"

export const options = {
  themes: [
    {
      name: "light",
      from: "from-white",
      to: "to-white",
      text: "text-black",
    },
    {
      name: "dark",
      from: "from-black",
      to: "to-black",
      text: "text-white",
    },
    {
      name: "yellow",
      from: "from-yellow-300",
      to: "to-yellow-600",
      text: "text-black",
    },
    {
      name: "light-red",
      from: "from-red-300",
      to: "to-red-600",
      text: "text-white",
    },
    {
      name: "light-violet",
      from: "from-purple-300",
      to: "to-indigo-500",
      text: "text-black",
    },
    {
      name: "dark-blue",
      from: "from-blue-900",
      to: "to-indigo-800",
      text: "text-white",
    },
    {
      name: "forest-green",
      from: "from-green-700",
      to: "to-green-500",
      text: "text-white",
    },
    {
      name: "orange-sunset",
      from: "from-orange-400",
      to: "to-orange-700",
      text: "text-black",
    },
    {
      name: "pink-sky",
      from: "from-pink-300",
      to: "to-pink-600",
      text: "text-black",
    },
    {
      name: "cyberpunk",
      from: "from-fuchsia-700",
      to: "to-violet-900",
      text: "text-white",
    },
    {
      name: "teal-wave",
      from: "from-teal-400",
      to: "to-teal-700",
      text: "text-black",
    },
    {
      name: "dark-mode",
      from: "from-gray-900",
      to: "to-gray-800",
      text: "text-white",
    },
  ],
  patterns: [
    { name: "pattern 1", src: pattern1 },
    { name: "pattern 2", src: pattern2 },
    { name: "pattern 3", src: pattern3 },
  ],
  logoUrl: [
    { name: "Adam Red", src: logoAdam },
    { name: "Logo 1", src: logo1 },
    { name: "Logo 2", src: logo2 },
    { name: "Logo 3", src: logo3 },
    { name: "Logo 4", src: logo4 },
    { name: "Logo 5", src: logo5 },
    { name: "Logo 6", src: logo6 },
  ],
  heroImageUrl: [
    { name: "Hero 1", src: "" },
    { name: "Hero 2", src: "" },
    { name: "Hero 3", src: "" },
  ],
};
