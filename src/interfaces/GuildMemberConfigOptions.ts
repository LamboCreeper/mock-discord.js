import Discord from "discord.js";

interface GuildMemberConfigOptions {
	nick?: string;
	joined_at?: number;
	user?: Discord.User;
}

export default GuildMemberConfigOptions;