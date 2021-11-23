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
    InvalidMap: "Carte invalide. Cartes disponibles: ",
    MapChanged: "La carte a été définie sur: ",
    InvalidColour: "Couleur invalide. Couleurs disponibles: ",
    GamemodeDoesntExist: "Le mode de jeu @{text[0]} n'existe pas!",
    InvalidMaxPlayers:
        "Veuillez mettre un nombre de joueur valide (Un nombre de 4 à @{number[0]}).",
    MaxPlayersChanged: "Le nombre maximum de joueurs est maintenant de @{text[0]}",
    QuickChatWarning: `
Votre chat est actuellement désactivé.

Veuillez activer le chat libre dans vos paramètres pour taper des commandes ici.

Menu principal > Paramètres > Données > Type de chat`.trim(),
};
