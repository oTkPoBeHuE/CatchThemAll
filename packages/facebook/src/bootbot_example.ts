import * as dotenv from 'dotenv';
import * as BootBot from 'bootbot';
dotenv.config();

// Rewrite in BootBot.js
// this.webhook = this.webhook.charAt(0) !== '/' ? `/${this.webhook}` : this.webhook;
// to this.app.use(this.webhook, bodyParser.json());

const bot = new BootBot({
    accessToken: process.env.PAGE_ACCESS_TOKEN,
    verifyToken: process.env.PAGE_VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.on('message', (payload, chat) => {
    chat.say(`Вы написали: ${payload.message.text}`);
});


bot.start();