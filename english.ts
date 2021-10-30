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
    SquidGameLightsInstructions:
        "Press the meeting button before the timer runs out",
    SquidGameDalgonaInstructions:
        "Complete all your tasks before the timer runs out",
    SquidGameTugOfWarInstructions:
        "Move in the correct direction to pull the other team",
    StartingIn: "Starting in: ",
    MaxPlayersModeSwitch:
        "The host switched the mode and now this room is full",
};
