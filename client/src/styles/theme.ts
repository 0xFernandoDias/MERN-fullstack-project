import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  primaryColor: "#17a2b8",
  darkColor: "#343a40",
  lightColor: "#f4f4f4",
  dangerColor: "#dc3545",
  successColor: "#28a745"
}

const theme = extendTheme({ config, colors })

export default theme