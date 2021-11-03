import { Translations } from "..";

export const ChineseTraditionalTranslations: Translations = {
    WelcomeName: "歡迎到skeld.net",
    WelcomeMessage: `
世界上第一個自己定制的Among Us服務器
如果要知道有什麽指令，打/help
現在游戲模式: @{gamemode[0]}

訂閱我們的 Patreon https://www.patreon.com/skeld_net 以獲得一個彩色的遊戲名稱！`.trim(),
    SetImpostorsInvalidCount: "錯的數量，請輸入一，二，或三。",
    SetImpostorsSuccess: "現在有@{number[0]}個冒牌。",
    ZombiesIncomingIn: "僵尸在@{number[0]}秒内會來。",
    GamemodeChangedTo: "模式切換到@{gamemode[0]}了。",
    SquidGameLightsInstructions: "時間到前要按會議按鈕。",
    SquidGameDalgonaInstructions: "時間到之前要做完所有的任務。",
    SquidGameTugOfWarInstructions: "往對的方向走，拉敵對的人。",
    StartingIn: "在@{number[0]}秒内開始。",
    MaxPlayersModeSwitch: "主持人改了游戲模式，這間休息室現在滿了。",
    InvalidMap: "這個地圖不存在。你可以選：",
    MapChanged: "地圖已被改成：",
    InvalidColour: "這個顔色不存在。你可以從這些選：",
    GamemodeDoesntExist: "@{text[0]}模式不存在！",
    InvalidMaxPlayers:
        "請輸入對的數目。你可以輸入4到@{number[0]}，不可以更多。",
    MaxPlayersChanged: "現在最多可以有@{text[0]}個玩家。",
};
