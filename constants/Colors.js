/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColor = "#ffcc00"; // Color principal

// Colores auxiliares calculados para contrastes
const textDark = "#1A1A1A"; // Texto oscuro óptimo sobre amarillo
const textLight = "#F5F5F5"; // Texto claro para fondos oscuros
const neutralGray = "#404040"; // Gris neutro para elementos secundarios

export const Colors = {
  light: {
    primary: primaryColor,
    text: textDark,
    background: "#FFFFFF",
    tint: primaryColor,
    icon: neutralGray,
    tabIconDefault: neutralGray,
    tabIconSelected: primaryColor,
    buttonBackground: primaryColor,
    buttonText: textDark,
    border: "#E0E0E0",
    notification: "#FF3B30",
  },
  dark: {
    primary: primaryColor,
    text: textLight,
    background: "#121212",
    tint: primaryColor,
    icon: "#9E9E9E",
    tabIconDefault: "#757575",
    tabIconSelected: primaryColor,
    buttonBackground: primaryColor,
    buttonText: textDark,
    border: "#373737",
    notification: "#FF453A",
  },
};
