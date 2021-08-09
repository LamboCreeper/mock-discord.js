import Discord from "discord.js";
interface CustomMessageExtras {
    client?: Discord.Client;
    channel?: Discord.Channel;
}
export default CustomMessageExtras;
