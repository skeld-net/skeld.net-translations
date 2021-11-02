import { Translations } from "..";

export const GermanTranslations: Translations = {
    WelcomeName: "Willkommen bei skeld.net",
    WelcomeMessage: `
        Der weltweit erste benutzerdefinierte Among Us Server
        Tippe /help um zu starten
        Aktueller Spielmodus: @{gamemode[0]}
        
        Abonnieren Sie unseren Patreon https://www.patreon.com/skeld_net, um einen farbigen Namen im Spiel zu erhalten!`.trim(),

    SetImpostorsInvalidCount:
        "Ungültige Spieler Anzahl, bitte geben Sie eine Nummer zwischen 1 und 3 ein",
    SetImpostorsSuccess:
        "Impostor Anzahl wurde auf @{number[0]} gesetzt",
    ZombiesIncomingIn:
        "Zombies erscheinen in @{number[0]} Sekunden",
    GamemodeChangedTo:
        "Spielmodus wurde zu @{gamemode[0]} geändert",
    SquidGameLightsInstructions:
        "Drücke auf den Treffknopf, bevor die Zeit umgeht",
    SquidGameDalgonaInstructions:
        "Beende alle deiner Aufgaben, bevor die Zeit umgeht",
    SquidGameTugOfWarInstructions:
        "Bewege in die richtige Richtung um das gegnerische Team zu ziehen",
    StartingIn:
        "Startet in: ",
    MaxPlayersModeSwitch:
        "Der Gastgeber wechselte den Spielmodus und nun ist der Raum voll",
    InvalidMap:
        "Ungültige Karte. Verfügbare Karten: ",
    MapChanged:
        "Karte wurde gesetzt auf: ",
    InvalidColour:
        "Ungültige Farbe. Verfügbare Farben: ",
    GamemodeDoesntExist:
        "Spielmodus @{text[0]} existiert nicht!",
    InvalidMaxPlayers:
        "Bitte gebe eine gültige Spieleranzahl ein (eine Zahl von 4 bis @{number[0]})",
    MaxPlayersChanged:
        "Maximale Spieleranzahl ist nun @{text[0]}"
};
