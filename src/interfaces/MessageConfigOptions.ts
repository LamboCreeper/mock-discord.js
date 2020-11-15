import Discord from "discord.js";

interface MessageConfigOptions {
	id?: string;
	content?: string;
	author?: Discord.User;
	member?: Discord.GuildMember;
	guild?: Discord.Guild;
	pinned?: false;
	tts?: false;
}

export default MessageConfigOptions;