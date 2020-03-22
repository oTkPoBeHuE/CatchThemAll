import * as easyvk from "easyvk";

export function start(bot_token: string, user_token: string) {
    easyvk({
        token: bot_token,
    }).then(async (vk) => {
        vk.call('messages.send', {
            peer_id: user_token,
            message: 'Привет мир',
            random_id: easyvk.randomId()
        });
    }).catch((error) => {
        console.error(error);
    });
}