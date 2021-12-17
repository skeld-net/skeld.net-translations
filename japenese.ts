import { Translations } from "..";

export const EnglishTranslations: Translations = {
    WelcomeName: "ようこそ skeld.net",
    WelcomeMessage: `
世界初の習慣 Among Us サーバ
タイプ /help 始めるには
現在のゲームモード: @{gamemode[0]}
私たちの購読 Patreon https://www.patreon.com/skeld_net 色付きのゲーム内名を取得するには!`.trim(),
    SetImpostorsInvalidCount:
        "プレーヤー数が無効です。1から3までの数字を入力してください",
    SetImpostorsSuccess: "詐欺師の数はに設定されました @{number[0]}",
    ZombiesIncomingIn: "ゾンビが入ってくる@{number[0]} seconds",
    GamemodeChangedTo: "ゲームモードがに変更されました @{gamemode[0]}",
    SquidGameLightsInstructions:
        "タイマーが切れる前に会議ボタンを押してください",
    SquidGameDalgonaInstructions:
        "タイマーが切れる前にすべてのタスクを完了してください",
    SquidGameTugOfWarInstructions:
        "他のチームを引っ張るために正しい方向に移動します",
    StartingIn: "で始まる: ",
    MaxPlayersModeSwitch:
        "ホストがモードを切り替え、この部屋がいっぱいになりました",
    InvalidMap: "マップが無効です。利用可能なマップ: ",
    MapChanged: "マップはに設定されました: ",
    InvalidColour: "色が無効です。利用可能な色: ",
    GamemodeDoesntExist: "ゲームモード @{text[0]} 存在しません！",
    InvalidMaxPlayers:
        "有効なプレーヤー数を渡してください (4からの数@{number[0]}).",
    MaxPlayersChanged: "Maximum player count is now @{text[0]}",
    QuickChatWarning: `
現在、チャットが無効になっています。
ここにコマンドを入力するには、設定で無料チャットを有効にしてください。
メインメニュー > 設定 > データ > チャットタイプ`.trim(),
};
