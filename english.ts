import { Translations } from "..";

export const EnglishTranslations: Translations = {
    WelcomeName: "Welcome to skeld.net",
    WelcomeMessage: `
Worlds first custom Among Us server
Type /help to get started
Current gamemode: @{gamemode[0]}

Subscribe to our Patreon https://www.patreon.com/skeld_net to get a coloured in-game name!`.trim(),
    SetImpostorsInvalidCount:
        "Invalid player count, please enter a number between 1 and 3",
    SetImpostorsSuccess: "Impostor count was set to @{number[0]}",
    ZombiesIncomingIn: "Zombies are incoming in @{number[0]} seconds",
    GamemodeChangedTo: "Gamemode changed to @{gamemode[0]}",
};
