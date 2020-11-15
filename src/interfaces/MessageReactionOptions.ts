import Discord from "discord.js";

interface MessageReactionOptions {
	message?: Discord.Message;
	emoji?: {
		name?: string;
	}
}

export default MessageReactionOptions;