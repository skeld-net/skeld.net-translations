import { Translations } from "..";

export const DutchTranslations: Translations = {
    WelcomeName: "Welkom bij skeld.net",
    WelcomeMessage: `
's Werelds eerste aangepaste Among Us-server
Typ /help om te beginnen
Huidige spelmodus: @{gamemode[0]}

Abonneer op onze Patreon https://www.patreon.com/skeld_net voor een gekleurde naam in het spel!`.trim(),
    SetImpostorsInvalidCount:
        "Ongeldig spelersaantal, vul alsjeblieft een getal in tussen 1 en 3",
    SetImpostorsSuccess: "Aantal bedriegers is ingesteld op @{number[0]}",
    ZombiesIncomingIn: "Er komen zombies aan in @{number[0]}",
    GamemodeChangedTo: "Spelmodus veranderd naar @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Druk de vergaderknop in voordat de tijd om is",
    SquidGameDalgonaInstructions:
        "Voltooi al je taken voordat de tijd om is",
    SquidGameTugOfWarInstructions:
        "Beweeg de goede kant op om het andere team naar je toe te trekken",
    StartingIn: "Start over: ",
    MaxPlayersModeSwitch:
        "De beheerder heeft de spelmodus veranderd waardoor deze kamer nu vol zit",
    InvalidMap: "Ongeldige map. Beschikbare maps: ",
    MapChanged: "De map is nu: ",
    InvalidColour: "Ongeldige kleur. Beschikbare kleuren: ",
    GamemodeDoesntExist: "Spelmodus @{text[0]} bestaat niet!",
    InvalidMaxPlayers:
        "Geef alsjeblieft een geldig spelersaantal (Een getal van 4 tot @{number[0]}).",
    MaxPlayersChanged: "Maximaal aantal spelers is nu @{text[0]}",
    QuickChatWarning: `
Je hebt op dit moment chat uitstaan.

Zet alsjeblieft vrije chat aan in je instellingen om hier commando's te typen.

Hoofdmenu > Instellingen > Gegevens > Chattype`.trim(),
};
