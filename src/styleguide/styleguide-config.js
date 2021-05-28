const config = {
  colors: [
    {
      "name": "blue-radix-80",
      "hex": "3361af",
      "alpha": 1
    }, {
      "name": "blue-radix",
      "hex": "6a8ee1",
      "alpha": 1
    }, {
      "name": "blue-radix-40",
      "hex": "9ebeff",
      "alpha": 1
    }, {
      "name": "green-radix-80",
      "hex": "00ad80",
      "alpha": 1
    }, {
      "name": "green-radix",
      "hex": "31e0af",
      "alpha": 1
    }, {
      "name": "green-radix-40",
      "hex": "75ffe1",
      "alpha": 1
    }, {
      "name": "red-radix-80",
      "hex": "c2152c",
      "alpha": 1
    }, {
      "name": "red-radix",
      "hex": "fc5455",
      "alpha": 1
    }, {
      "name": "red-radix-40",
      "hex": "ff8882",
      "alpha": 1
    }, {
      "name": "black-radix",
      "hex": "282828",
      "alpha": 1
    }, {
      "name": "gray-radix-80",
      "hex": "8b9598",
      "alpha": 1
    }, {
      "name": "gray-radix-60",
      "hex": "c3cbce",
      "alpha": 1
    }, {
      "name": "gray-radix-40",
      "hex": "ebeff1",
      "alpha": 1
    }, {
      "name": "gray-radix-20",
      "hex": "f5f7f8",
      "alpha": 1
    }, {
      "name": "successRadix",
      "hex": "00cd54",
      "alpha": 1
    }, {
      "name": "errorRadix",
      "hex": "ff1a1a",
      "alpha": 1
    }, {
      "name": "error-radix-80",
      "hex": "cc1515",
      "alpha": 1
    }, {
      "name": "alertRadix",
      "hex": "ffca1a",
      "alpha": 1
    }, {
      "name": "helpRadix",
      "hex": "00c1ee",
      "alpha": 1
    }, {
      "name": "white-radix",
      "hex": "ffffff",
      "alpha": 1
    }, {
      "name": "black-radix-60",
      "hex": "282828",
      "alpha": 0.6
    }, {
      "name": "gray-radix-20-80",
      "hex": "f5f7f8",
      "alpha": 0.801
    }, {
      "name": "black-radix-80",
      "hex": "282828",
      "alpha": 0.8
    }
  ],
  fonts: [
    {
      "name": "stepUp-3-bold",
      "letterSpacing": 0,
      "lineHeight": 36,
      "font": {
        "postscriptName": "TTCommons-Bold",
        "family": "sans-serif",
        "size": 24,
        "weight": "bold",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "stepUp-3",
      "letterSpacing": 0,
      "lineHeight": 36,
      "font": {
        "postscriptName": "TTCommons-Regular",
        "family": "sans-serif",
        "size": 24,
        "weight": "regular",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "stepUp-2",
      "letterSpacing": 0,
      "lineHeight": 28,
      "font": {
        "postscriptName": "TTCommons-Regular",
        "family": "sans-serif",
        "size": 20,
        "weight": "regular",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "baseline",
      "letterSpacing": 0.1,
      "lineHeight": 24,
      "font": {
        "postscriptName": "TTCommons-Regular",
        "family": "sans-serif",
        "size": 16,
        "weight": "regular",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "stepDown-1",
      "letterSpacing": 0.2,
      "lineHeight": 20,
      "alignment": "center",
      "font": {
        "postscriptName": "TTCommons-DemiBold",
        "family": "sans-serif",
        "size": 14,
        "weight": "demibold",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "stepDown-1-uppercase",
      "uppercase": true,
      "letterSpacing": 0.2,
      "lineHeight": 20,
      "alignment": "center",
      "font": {
        "postscriptName": "TTCommons-DemiBold",
        "family": "sans-serif",
        "size": 14,
        "weight": "demibold",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }, {
      "name": "stepDown-2",
      "letterSpacing": 0.4,
      "lineHeight": 16,
      "alignment": "center",
      "font": {
        "postscriptName": "TTCommons-Regular",
        "family": "sans-serif",
        "size": 12,
        "weight": "regular",
        "stretch": "normal"
      },
      "color": {
        "name": "black-radix",
        "hex": "282828",
        "alpha": 1
      }
    }
  ],
  // The icons are generated dynamically by Webpack from "src/assets/icons"
  icons: []
}

export const registerIcon = (url, content) => config.icons.push({ url, content })

export const colors = config.colors.reduce((acc, color) =>
  Object.assign(acc, { [color.name]: `#${color.hex}` })
  , {})

export default config
