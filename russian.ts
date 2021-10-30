import { Translations } from "..";

export const RussianTranslations: Translations = {
    WelcomeName: "Добро пожаловать на skeld.net",
    WelcomeMessage: `
Первый в мире персональный сервер Among Us
Напишите /help чтобы начать
Текущий режим игры: @{gamemode[0]}

Подпишитесь на наш Патреон https://www.patreon.com/skeld_net чтобы получить цветное имя в игре!`.trim(),
    SetImpostorsInvalidCount:
        "Неверное число игроков, пожалуйста, введите число от 1 до 3",
    SetImpostorsSuccess: "Число предателей было установлено @{number[0]}",
    ZombiesIncomingIn: "Зомби появятся через @{number[0]} секунд",
    GamemodeChangedTo: "Режим игры изменён на @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Нажмите кнопку экстренной встречи прежде чем закончится время",
    SquidGameDalgonaInstructions:
        "Сделайте все свои задания прежде чем закончится время",
    SquidGameTugOfWarInstructions:
        "Двигайтесь в правильном направлении, чтобы тянуть другую команду",
    StartingIn: "Начинаем через: ",
    MaxPlayersModeSwitch:
        "Владелец комнаты изменил режим игры и эта комната заполнена",
    InvalidMap: "Неверная карта. Доступные карты: ",
    MapChanged: "Была установлена карта: ",
    InvalidColour: "Неверный цвет. Доступные цвета: ",
    GamemodeDoesntExist: "Режима игры @{text[0]} не существует!",
    InvalidMaxPlayers:
        "Пожалуйста, введите действительное число игроков (Номер от 4 до @{number[0]}).",
    MaxPlayersChanged: "Максимальное число игроков     @{text[0]}",
};
