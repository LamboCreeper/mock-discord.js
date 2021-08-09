import Discord from "discord.js";
import BaseMocks from "./BaseMocks";
import { APIChannel, APIGuild, APIGuildMember, APIMessage, APIReaction, APIUser } from "discord-api-types/v9";
import CustomGuildMemberExtras from "./interfaces/CustomGuildMemberExtras";
import CustomMessageExtras from "./interfaces/CustomMessageExtras";
import CustomMessageReactionExtras from "./interfaces/CustomMessageReactionExtras";
import GUILD_DEFAULTS from "./defaults/guild";
import CHANNEL_DEFAULTS from "./defaults/channel";
import GUILD_CHANNEL_DEFAULTS from "./defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "./defaults/textchannel";
import USER_DEFAULTS from "./defaults/user";
import GUILD_MEMBER_DEFAULTS from "./defaults/guildmember";
import GUILD_MESSAGE_DEFAULTS from "./defaults/message";
import MESSAGE_REACTION_DEFAULTS from "./defaults/messagerReaction";

class CustomMocks {
	/**
	 * Returns a guild mock based off of given options.
	 *
	 * @returns {Discord.Guild}
	 */
	static getGuild(options?: Partial<APIGuild>, client?: Discord.Client): Discord.Guild {
		return new Discord.Guild(client ?? BaseMocks.getClient(), {
			...GUILD_DEFAULTS,
			...options
		});
	}

	/**
	 * Returns a channel mock based off of given options.
	 *
	 * @returns {Discord.Channel}
	 */
	static getChannel(options?: Partial<APIChannel>, client?: Discord.Client): Discord.Channel {
		return new Discord.Channel(client ?? BaseMocks.getClient(), {
			...CHANNEL_DEFAULTS,
			...options
		});
	}

	/**
	 * Returns a guild channel based off of given options.
	 *
	 * @returns {Discord.GuildChannel}
	 */
	static getGuildChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.GuildChannel {
		return new Discord.GuildChannel(guild ?? BaseMocks.getGuild(), {
			...GUILD_CHANNEL_DEFAULTS,
			...options
		});
	}

	/**
	 * Returns a text channel based off of given options.
	 *
	 * @returns {Discord.TextChannel}
	 */
	static getTextChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.TextChannel {
		return new Discord.TextChannel(guild ?? BaseMocks.getGuild(), {
			...TEXT_CHANNEL_DEFAULTS,
			...options
		});
	}

	/**
	 * Returns a user based off of given options.
	 *
	 * @returns {Discord.User}
	 */
	static getUser(options?: Partial<APIUser>, client?: Discord.Client): Discord.User {
		return new Discord.User(client ?? BaseMocks.getClient(), {
			...USER_DEFAULTS,
			...options
		});
	}

	/**
	 * Returns a guild member based off of given options.
	 *
	 * @returns {Discord.GuildMember}
	 */
	static getGuildMember(options?: Partial<APIGuildMember>, extras?: CustomGuildMemberExtras): Discord.GuildMember {
		return new Discord.GuildMember(extras?.client ?? BaseMocks.getClient(), {
			...GUILD_MEMBER_DEFAULTS,
			...options
		}, extras?.guild ?? BaseMocks.getGuild());
	}

	/**
	 * Returns a message based off of given options.
	 *
	 * @returns {Discord.Message}
	 */
	static getMessage(options?: Partial<APIMessage>, extras?: CustomMessageExtras): Discord.Message {
		const message = new Discord.Message(extras?.client ?? BaseMocks.getClient(), {
			...GUILD_MESSAGE_DEFAULTS,
			...options
		});

		Object.defineProperty(message, 'channel', {
			get:() => extras?.channel ?? BaseMocks.getTextChannel()
		})

		Object.defineProperty(message, 'member', {
			get:() => extras?.member ?? BaseMocks.getGuildMember()
		})

		return message;
	}

	/**
	 * Returns a message reaction based off of given options.
	 *
	 * @returns {Discord.MessageReaction}
	 */
	static getMessageReaction(options?: Partial<APIReaction>, extras?: CustomMessageReactionExtras): Discord.MessageReaction {
		return new Discord.MessageReaction(extras?.client ?? BaseMocks.getClient(), {
			...MESSAGE_REACTION_DEFAULTS,
			...options
		}, extras?.message ?? BaseMocks.getMessage());
	}
}

export default CustomMocks;