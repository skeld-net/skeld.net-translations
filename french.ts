import { Translations } from "..";

export const FrenchTranslations: Translations = {
    WelcomeName: "Bienvenue sur skeld.net",
    WelcomeMessage: `
Premier serveur Among Us personnalisé au monde
Tapez /help pour commencer
Mode de jeu actuel : @{gamemode[0]}

Abonnez-vous à notre Patreon https://www.patreon.com/skeld_net pour obtenir un nom coloré dans le jeu !`.trim(),
    SetImpostorsInvalidCount:
        "Nombre de joueurs invalide, merci d'entrer un nombre compris entre 1 et 3",
    SetImpostorsSuccess: "Le nombre d'imposteur a été mis à @{number[0]}",
    ZombiesIncomingIn: "Les zombies arrivent dans @{number[0]} secondes",
    GamemodeChangedTo: "Mode de jeu changé en @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Appuyez sur le bouton de réunion avant la fin du temps imparti",
    SquidGameDalgonaInstructions:
        "Complétez toutes les tâches avant la fin du temps imparti",
    SquidGameTugOfWarInstructions:
        "Déplacez-vous dans la bonne direction pour arrêter les autres équipes",
    StartingIn: "Commence dans: ",
    MaxPlayersModeSwitch:
        "L'hôte a changé le mode de jeu et cette salle est désormais pleine",
};
