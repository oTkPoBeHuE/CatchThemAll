// import * as VkBot from "node-vk-bot-api";
//
// export function startBot(token: string) {
//     const bot = new VkBot(token);
//     bot.command('/start', (ctx) => {
//         console.log('bot.command');
//         ctx.reply('Hello!')
//     });
//     bot.on((ctx) => {
//         console.log('bot.on');
//         ctx.reply('Hello!');
//     });
//     bot.startPolling();
// }