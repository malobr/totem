import { useConfiguration } from "@/hooks/useConfiguration";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const { project } = useConfiguration();
  const backgroundImage = "";

  const [background, setBackground] = useState("transparent");
  const [logo, setLogo] = useState(
    "https://cdn.healthtechalpha.com/static/startup_data_images/114087.png"
  );
  const [title, setTitle] = useState("Adam Robo Digital");

  const backgrounds = {
    red: "bg-gradient-to-r from-red-500 to-red-800 text-white ",
    blue: "bg-gradient-to-br from-blue-400 to-blue-950 text-white",
    green: "bg-gradient-to-r from-green-500 to-green-800 text-white",
    purple: "bg-gradient-to-r from-purple-500 to-purple-800 text-white",
    orange: "bg-gradient-to-r from-orange-500 to-orange-800 text-white",
    cyan: "bg-gradient-to-r from-cyan-500 to-cyan-800 text-white",
    pink: "bg-gradient-to-r from-pink-500 to-pink-800 text-white",
  };

  useEffect(() => {
    if (project?.ref === "1") {
      setBackground(backgrounds["red"]);
      setLogo(
        "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
      );
      setTitle(project.title || "");
    }

    if (project?.ref === "2") {
      setBackground(backgrounds["blue"]);
      setLogo(
        "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
      );
      setTitle(project.title || "");
    }

    if (project?.ref === "3") {
      setBackground(backgrounds["green"]);
      setLogo(
        "https://static.vecteezy.com/system/resources/previews/010/227/284/non_2x/fake-icon-is-red-on-a-transparent-background-logo-stamp-illustration-vector.jpg"
      );
      setTitle(project.title || "");
    }
  }, [project]);

  return { background, backgrounds, logo, title, backgroundImage };
};
