import Typography from "typography"
import altonTheme from "typography-theme-alton"

altonTheme.googleFonts = [
  { name: "Montserrat", styles: [300, 400, 500, 700] },
  {
    name: "Open Sans",
    styles: [300, 400, 700],
  },
  {
    name: "Roboto",
    styles: [300, 500, 700],
  },
]

altonTheme.headerFontFamily = ["Roboto", "sans-serif"]
altonTheme.headerWeight = "500"
altonTheme.bodyFontFamily = ["Open Sans", "sans-serif"]
altonTheme.bodyWeight = "300"
altonTheme.baseFontSize = "20px"
altonTheme.includeNormalize = true

const typography = new Typography(altonTheme)

export default typography
export const rhythm = typography.rhythm
