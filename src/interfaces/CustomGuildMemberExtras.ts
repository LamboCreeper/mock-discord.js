import Discord from "discord.js";

interface CustomGuildMemberExtras {
	client?: Discord.Client;
	guild?: Discord.Guild;
}

export default CustomGuildMemberExtras;