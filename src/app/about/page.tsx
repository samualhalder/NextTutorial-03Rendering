import { useTheme } from "@/components/themeProvider";
import React from "react";

function About() {
  const theme = useTheme();
  return (
    <div
      className=""
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      About {new Date().toLocaleString()}
    </div>
  );
}

export default About;
