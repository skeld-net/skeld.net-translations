import { Translations } from "..";

export const NorwegianTranslations: Translations = {
    WelcomeName: "Velkommen til Skeld.net",
    WelcomeMessage: `
Verdens første tilpasset Among Us server
Skriv /help til å starte
Gamemode akkurat nå: @{gamemode[0]}

Abonner til vår Patreon https://www.patreon.com/skeld_net til å få ett farge i-game navn!`.trim(),
    SetImpostorsInvalidCount:
        "Ugyldig spill nummer, please enter a number between 1 and 3",
    SetImpostorsSuccess: "Impostor nummer ble settet til @{number[0]}",
    ZombiesIncomingIn: "Zombies skal komme i @{number[0]} seconds",
    GamemodeChangedTo: "Gamemode byttet til @{gamemode[0]}",
    SquidGameLightsInstructions: "Trykk på møte knappen før tiden går tom",
    SquidGameDalgonaInstructions:
        "Bli ferdig med dine oppgaver får tiden går tom",
    SquidGameTugOfWarInstructions:
        "Gå i det riktige retningen til å dra det andre laget",
    StartingIn: "Starter i ",
    MaxPlayersModeSwitch: "Verten byttet moden og nå er dette rommet fullt",
};
