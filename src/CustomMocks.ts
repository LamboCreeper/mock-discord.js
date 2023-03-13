import Discord from "discord.js";
import BaseMocks from "./BaseMocks";
import { APIChannel, APIGuild, APIGuildMember, APIMessage, APIReaction, APIUser } from "discord-api-types/v10";
import CustomGuildMemberExtras from "./interfaces/CustomGuildMemberExtras";
import CustomMessageExtras from "./interfaces/CustomMessageExtras";
import CustomMessageReactionExtras from "./interfaces/CustomMessageReactionExtras";
import GUILD_DEFAULTS from "./defaults/guild";
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
		const discordClient = client ?? BaseMocks.getClient();
		const data = { ...GUILD_DEFAULTS, ...options };

		return Reflect.construct(Discord.Guild, [discordClient, data]);
	}

	/**
	 * Returns a guild channel based off of given options.
	 *
	 * @returns {Discord.GuildChannel}
	 */
	static getGuildChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.GuildChannel {
		const discordGuild = guild ?? BaseMocks.getGuild();
		const data = { ...GUILD_CHANNEL_DEFAULTS, ...options };

		return Reflect.construct(Discord.GuildChannel, [discordGuild, data]);
	}

	/**
	 * Returns a text channel based off of given options.
	 *
	 * @returns {Discord.TextChannel}
	 */
	static getTextChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.TextChannel {
		const discordGuild = guild ?? BaseMocks.getGuild();
		const data = { ...TEXT_CHANNEL_DEFAULTS, ...options };

		return Reflect.construct(Discord.TextChannel, [discordGuild, data]);
	}

	/**
	 * Returns a user based off of given options.
	 *
	 * @returns {Discord.User}
	 */
	static getUser(options?: Partial<APIUser>, client?: Discord.Client): Discord.User {
		const discordClient = client ?? BaseMocks.getClient();
		const data = { ...USER_DEFAULTS, ...options };

		return Reflect.construct(Discord.User, [discordClient, data]);
	}

	/**
	 * Returns a guild member based off of given options.
	 *
	 * @returns {Discord.GuildMember}
	 */
	static getGuildMember(options?: Partial<APIGuildMember>, extras?: CustomGuildMemberExtras): Discord.GuildMember {
		const discordClient = extras?.client ?? BaseMocks.getClient();
		const data = { ...GUILD_MEMBER_DEFAULTS, ...options };
		const discordGuild = extras?.guild ?? BaseMocks.getGuild();

		return Reflect.construct(Discord.GuildMember, [discordClient, data, discordGuild]);
	}

	/**
	 * Returns a message based off of given options.
	 *
	 * @returns {Discord.Message}
	 */
	static getMessage(options?: Partial<APIMessage>, extras?: CustomMessageExtras): Discord.Message {
		const discordClient = extras?.client ?? BaseMocks.getClient();
		const data = { ...GUILD_MESSAGE_DEFAULTS, ...options };

		const message = Reflect.construct(Discord.Message, [discordClient, data]);

		/**
		 * Both channel and member are "getter" methods that resolve to objects
		 * based on IDs which are stored on the client - since we're mocking
		 * the client there will be no IDs, so overwrite these getters
		 */
		Object.defineProperty(message, "channel", {
			get: () => extras?.channel ?? BaseMocks.getTextChannel()
		});

		Object.defineProperty(message, "member", {
			get: () => extras?.member ?? BaseMocks.getGuildMember()
		});

		return message;
	}

	/**
	 * Returns a message reaction based off of given options.
	 *
	 * @returns {Discord.MessageReaction}
	 */
	static getMessageReaction(options?: Partial<APIReaction>, extras?: CustomMessageReactionExtras): Discord.MessageReaction {
		const discordClient = extras?.client ?? BaseMocks.getClient();
		const data = { ...MESSAGE_REACTION_DEFAULTS, ...options };
		const message = extras?.message ?? BaseMocks.getMessage();

		return Reflect.construct(Discord.MessageReaction, [discordClient, data, message]);
	}
}

export default CustomMocks;