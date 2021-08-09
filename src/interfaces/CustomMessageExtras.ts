import Discord from "discord.js";

interface CustomMessageExtras {
	client?: Discord.Client;
	channel?: Discord.Channel;
	member?: Discord.GuildMember;
}

export default CustomMessageExtras;