import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#3333ee",
    secondary: "#30c",
    muted: "#f6f6f6",
    header: {
      text: "#000",
      textOpen: "#fff",
      background: "#fff",
      backgroundOpen: "#3333ee",
      icons: baseColors.black[1],
      iconsOpen: "#fff",
    },
    footer: {
      background: "#fff",
      text: baseColors.black[1],
      links: baseColors.black[1],
      icons: baseColors.black[1],
    },
    // You can delete dark mode by removing the "modes" object and setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: "#121212",
        text: "#fff",
        textGray: "#9f9f9f",
        primary: "#3333ee",
        secondary: baseColors.orange[7],
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          text: "#fff",
          textOpen: "#fff",
          background: "#121212",
          backgroundOpen: "#3333ee",
          icons: "#fff",
          iconsOpen: "#fff",
        },
        footer: {
          background: "#121212",
          text: "#fff",
          links: "#fff",
          icons: "#fff",
        },
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },

  variants: {
    siteTitle: {
      fontSize: [2, 3, null, 3, null],
    },
  },
})
