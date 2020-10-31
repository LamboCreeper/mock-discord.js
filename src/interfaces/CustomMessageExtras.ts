import Discord from "discord.js";

interface CustomMessageExtras {
	client?: Discord.Client;
	channel?: Discord.TextChannel;
}

export default CustomMessageExtras;