import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        esn: {
          cyan: {
            50: { value: "#b3eaff" },
            100: { value: "#93e2ff" },
            200: { value: "#67d6ff" },
            300: { value: "#3ccaff" },
            400: { value: "#11beff" },
            500: { value: "#00aeef" },
            600: { value: "#0099d2" },
            700: { value: "#007dac" },
            800: { value: "#006186" },
            900: { value: "#004660" },
          },
          darkBlue: {
            50: { value: "#c0c2eb" },
            100: { value: "#a3a4e2" },
            200: { value: "#7b7dd5" },
            300: { value: "#5356c9" },
            400: { value: "#373bb0" },
            500: { value: "#2e3192" },
            600: { value: "#282b80" },
            700: { value: "#212369" },
            800: { value: "#1a1b52" },
            900: { value: "#12143a" },
          },
          magenta: {
            50: { value: "#ffb2e0" },
            100: { value: "#ff91d2" },
            200: { value: "#ff66c1" },
            300: { value: "#ff3aaf" },
            400: { value: "#ff0e9d" },
            500: { value: "#ec008c" },
            600: { value: "#d0007b" },
            700: { value: "#aa0065" },
            800: { value: "#84004e" },
            900: { value: "#5e0038" },
          },
          green: {
            50: { value: "#daeeca" },
            100: { value: "#cae6b4" },
            200: { value: "#b5dc96" },
            300: { value: "#9fd278" },
            400: { value: "#8ac85a" },
            500: { value: "#7ac143" },
            600: { value: "#6bac39" },
            700: { value: "#588d2e" },
            800: { value: "#446d24" },
            900: { value: "#314e1a" },
          },
          orange: {
            50: { value: "#fcdac1" },
            100: { value: "#fbcaa6" },
            200: { value: "#f9b582" },
            300: { value: "#f7a05e" },
            400: { value: "#f58b3b" },
            500: { value: "#f47b20" },
            600: { value: "#e76a0b" },
            700: { value: "#bd5709" },
            800: { value: "#934307" },
            900: { value: "#693005" },
          },
        },
        white: { value: "#ffffff" },
        black: { value: "#000000" },
      },
      fonts: {
        body: { value: "'Kelson Sans', sans-serif" },
        heading: { value: "'Kelson Sans', sans-serif" },
        mono: { value: "JetBrains Mono, monospace" },
      },
    },
    semanticTokens: {
      colors: {
        fg: {
          DEFAULT: {
            value: {
              _light: "{colors.black}",
              _dark: "{colors.white}",
            },
          },
        },
        bg: {
          DEFAULT: {
            value: {
              _light: "{colors.white}",
              _dark: "{colors.gray.800}",
            },
          },
          alternate: {
            value: {
              _light: "#F5F7FF",
              _dark: "#1A1D2E",
            },
          },
        },
        border: {
          primary: {
            value: {
              _light: "{colors.esn.darkBlue}",
              _dark: "{colors.esn.cyan}",
            },
          },
        },
        esn: {
          cyan: {
            DEFAULT: {
              value: {
                _light: "{colors.esn.cyan.500}",
                _dark: "{colors.esn.cyan.500}",
              },
            },
            solid: {
              value: {
                _light: "{colors.esn.cyan.500}",
                _dark: "{colors.esn.cyan.500}",
              },
            },
            contrast: {
              value: {
                _light: "{colors.white}",
                _dark: "{colors.white}",
              },
            },
            fg: {
              value: {
                _light: "{colors.esn.cyan.600}",
                _dark: "{colors.esn.cyan.300}",
              },
            },
            muted: {
              value: {
                _light: "{colors.esn.cyan.200}",
                _dark: "{colors.esn.cyan.600}",
              },
            },
            subtle: {
              value: {
                _light: "{colors.esn.cyan.100}",
                _dark: "{colors.esn.cyan.700}",
              },
            },
            emphasized: {
              value: {
                _light: "{colors.esn.cyan.200}",
                _dark: "{colors.esn.cyan.600}",
              },
            },
            focusRing: {
              value: {
                _light: "{colors.esn.cyan.500}",
                _dark: "{colors.esn.cyan.500}",
              },
            },
          },
          darkBlue: {
            DEFAULT: {
              value: {
                _light: "{colors.esn.darkBlue.500}",
                _dark: "{colors.esn.darkBlue.500}",
              },
            },
            solid: {
              value: {
                _light: "{colors.esn.darkBlue.500}",
                _dark: "{colors.esn.darkBlue.500}",
              },
            },
            contrast: {
              value: {
                _light: "{colors.white}",
                _dark: "{colors.white}",
              },
            },
            fg: {
              value: {
                _light: "{colors.esn.darkBlue.600}",
                _dark: "{colors.esn.darkBlue.300}",
              },
            },
            muted: {
              value: {
                _light: "{colors.esn.darkBlue.200}",
                _dark: "{colors.esn.darkBlue.600}",
              },
            },
            subtle: {
              value: {
                _light: "{colors.esn.darkBlue.100}",
                _dark: "{colors.esn.darkBlue.700}",
              },
            },
            emphasized: {
              value: {
                _light: "{colors.esn.darkBlue.200}",
                _dark: "{colors.esn.darkBlue.600}",
              },
            },
            focusRing: {
              value: {
                _light: "{colors.esn.darkBlue.500}",
                _dark: "{colors.esn.darkBlue.500}",
              },
            },
          },
          magenta: {
            DEFAULT: {
              value: {
                _light: "{colors.esn.magenta.500}",
                _dark: "{colors.esn.magenta.500}",
              },
            },
            solid: {
              value: {
                _light: "{colors.esn.magenta.500}",
                _dark: "{colors.esn.magenta.500}",
              },
            },
            contrast: {
              value: {
                _light: "{colors.white}",
                _dark: "{colors.white}",
              },
            },
            fg: {
              value: {
                _light: "{colors.esn.magenta.600}",
                _dark: "{colors.esn.magenta.300}",
              },
            },
            muted: {
              value: {
                _light: "{colors.esn.magenta.200}",
                _dark: "{colors.esn.magenta.600}",
              },
            },
            subtle: {
              value: {
                _light: "{colors.esn.magenta.100}",
                _dark: "{colors.esn.magenta.700}",
              },
            },
            emphasized: {
              value: {
                _light: "{colors.esn.magenta.200}",
                _dark: "{colors.esn.magenta.600}",
              },
            },
            focusRing: {
              value: {
                _light: "{colors.esn.magenta.500}",
                _dark: "{colors.esn.magenta.500}",
              },
            },
          },
          green: {
            DEFAULT: {
              value: {
                _light: "{colors.esn.green.500}",
                _dark: "{colors.esn.green.500}",
              },
            },
            solid: {
              value: {
                _light: "{colors.esn.green.500}",
                _dark: "{colors.esn.green.500}",
              },
            },
            contrast: {
              value: {
                _light: "{colors.white}",
                _dark: "{colors.white}",
              },
            },
            fg: {
              value: {
                _light: "{colors.esn.green.600}",
                _dark: "{colors.esn.green.300}",
              },
            },
            muted: {
              value: {
                _light: "{colors.esn.green.200}",
                _dark: "{colors.esn.green.600}",
              },
            },
            subtle: {
              value: {
                _light: "{colors.esn.green.100}",
                _dark: "{colors.esn.green.700}",
              },
            },
            emphasized: {
              value: {
                _light: "{colors.esn.green.200}",
                _dark: "{colors.esn.green.600}",
              },
            },
            focusRing: {
              value: {
                _light: "{colors.esn.green.500}",
                _dark: "{colors.esn.green.500}",
              },
            },
          },
          orange: {
            DEFAULT: {
              value: {
                _light: "{colors.esn.orange.500}",
                _dark: "{colors.esn.orange.500}",
              },
            },
            solid: {
              value: {
                _light: "{colors.esn.orange.500}",
                _dark: "{colors.esn.orange.500}",
              },
            },
            contrast: {
              value: {
                _light: "{colors.white}",
                _dark: "{colors.white}",
              },
            },
            fg: {
              value: {
                _light: "{colors.esn.orange.600}",
                _dark: "{colors.esn.orange.300}",
              },
            },
            muted: {
              value: {
                _light: "{colors.esn.orange.200}",
                _dark: "{colors.esn.orange.600}",
              },
            },
            subtle: {
              value: {
                _light: "{colors.esn.orange.100}",
                _dark: "{colors.esn.orange.700}",
              },
            },
            emphasized: {
              value: {
                _light: "{colors.esn.orange.200}",
                _dark: "{colors.esn.orange.600}",
              },
            },
            focusRing: {
              value: {
                _light: "{colors.esn.orange.500}",
                _dark: "{colors.esn.orange.500}",
              },
            },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
