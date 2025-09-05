export const resources = {
  en: {
    translation: {
      enterPhone: "Enter phone number",
      sendCode: "Send code",
      enterOTP: "Enter code",
      verify: "Verify",
      home: "Home",
      profile: "Profile",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Toggle language"
    }
  },
  fr: {
    translation: {
      enterPhone: "Entrez le numéro de téléphone",
      sendCode: "Envoyer le code",
      enterOTP: "Entrez le code",
      verify: "Vérifier",
      home: "Accueil",
      profile: "Profil",
      toggleTheme: "Changer le thème",
      toggleLanguage: "Changer de langue"
    }
  }
} as const;

export type Language = keyof typeof resources;
