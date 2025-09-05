import "../global.css";
import { Slot } from "expo-router";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { ThemeProvider } from "nativewind";

export default function Layout() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="system">
        <Slot />
      </ThemeProvider>
    </I18nextProvider>
  );
}
