import Discord from "discord.js";
interface CustomMessageReactionExtras {
    client?: Discord.Client;
    message?: Discord.Message;
}
export default CustomMessageReactionExtras;
