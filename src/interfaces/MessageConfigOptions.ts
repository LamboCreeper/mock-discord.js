import Discord from "discord.js";

interface MessageConfigOptions {
	id?: string;
	content?: string;
	author?: Discord.User;
	member?: Discord.GuildMember;
	pinned?: false;
	tts?: false;
}

export default MessageConfigOptions;