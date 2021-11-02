import { Translations } from "..";

export const PortugueseBrazilTranslations: Translations = {
    WelcomeName: "Bem-vindo ao skeld.net",
    WelcomeMessage: `
O primeiro servidor customizado de Among Us no mundo.
Digite /help para começar
Modo de jogo atual: @{gamemode[0]}

Inscreva-se ao nosso Patreon https://www.patreon.com/skeld_net para ganhar um nome colorido no jogo!`.trim(),
    SetImpostorsInvalidCount:
        "Número de jogadores invalido, por favor coloque um numéro entre 1 à 3",
    SetImpostorsSuccess: "Número de impostores foi definido para @{number[0]}",
    ZombiesIncomingIn: "Os zumbis irão chegar em @{number[0]} segundos",
    GamemodeChangedTo: "O modo de jogo foi alterado para @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Pressione o botão de reunião antes do tempo acabar",
    SquidGameDalgonaInstructions:
        "Complete todas as suas tarefas antes do tempo acabar",
    SquidGameTugOfWarInstructions:
        "Mova-se na direção correta para puxar a outra equipe",
    StartingIn: "Começando em: ",
    MaxPlayersModeSwitch:
        "O dono da sala mudou o modo de jogo e agora a sala está cheia",
    InvalidMap: "Mapa invalido. Mapas disponíveis: ",
    MapChanged: "O mapa foi definido para: ",
    InvalidColour: "Cor invalida. Cores disponíveis: ",
    GamemodeDoesntExist: "Modo de jogo @{text[0]} não existe!",
    InvalidMaxPlayers:
        "Por favor passe uma quantidade valida de jogadores (Um número de 4 à @{number[0]}).",
    MaxPlayersChanged: "O número máximo de jogadores agora é @{text[0]}",
};
