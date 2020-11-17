import Typography from "typography";
import "../styles/typography.css";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "futura-pt",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["futura-pt", "Georgia", "serif"],
});

export default typography;
