import * as dotenv from 'dotenv';
import * as express from 'express';
import * as FBBotFramework from 'fb-bot-framework';

dotenv.config();

const app = express();

// Initialize
const bot = new FBBotFramework({
    page_token: process.env.PAGE_ACCESS_TOKEN,
    verify_token:  process.env.PAGE_VERIFY_TOKEN
});

// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());

bot.on('message', function(userId, message){
    // bot.sendTextMessage(userId, "Echo Message:" + message);

    // Send quick replies
    var replies = [
        {
            "content_type": "text",
            "title": "Good",
            "payload": "thumbs_up"
        },
        {
            "content_type": "text",
            "title": "Bad",
            "payload": "thumbs_down"
        }
    ];
    bot.sendQuickReplies(userId, "Echo Message: "  + message, replies);
});
// Make Express listening
app.listen(3000);


