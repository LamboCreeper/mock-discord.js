import Discord from "discord.js";
import BaseMocks from "./BaseMocks";
import GuildConfigOptions from "./interfaces/GuildConfigOptions";
import ChannelConfigOptions from "./interfaces/ChannelConfigOptions";
import GuildChannelConfigOptions from "./interfaces/GuildChannelConfigOptions";
import TextChannelConfigOptions from "./interfaces/TextChannelConfigOptions";
import UserConfigOptions from "./interfaces/UserConfigOptions";
import GuildMemberConfigOptions from "./interfaces/GuildMemberConfigOptions";
import CustomGuildMemberExtras from "./interfaces/CustomGuildMemberExtras";
import MessageConfigOptions from "./interfaces/MessageConfigOptions";
import CustomMessageExtras from "./interfaces/CustomMessageExtras";
import GUILD_DEFAULTS from "./defaults/guild";
import CHANNEL_DEFAULTS from "./defaults/channel";
import GUILD_CHANNEL_DEFAULTS from "./defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "./defaults/textchannel";
import USER_DEFAULTS from "./defaults/user";
import getGuildMemberDefaults from "./defaults/guildmember";
import getMessageDefaults from "./defaults/message";

class CustomMocks {

	/**
	 * Returns a guild mock based off of given options.
	 *
	 * @returns {Discord.Guild}
	 */
	static getGuild(options?: GuildConfigOptions, client?: Discord.Client): Discord.Guild {
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
	static getChannel(options?: ChannelConfigOptions, client?: Discord.Client): Discord.Channel {
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
	static getGuildChannel(options?: GuildChannelConfigOptions, guild?: Discord.Guild): Discord.GuildChannel {
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
	static getTextChannel(options?: TextChannelConfigOptions, guild?: Discord.Guild): Discord.TextChannel {
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
	static getUser(options?: UserConfigOptions, client?: Discord.Client): Discord.User {
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
	static getGuildMember(options?: GuildMemberConfigOptions, extras?: CustomGuildMemberExtras): Discord.GuildMember {
		return new Discord.GuildMember(extras?.client ?? BaseMocks.getClient(), {
			...getGuildMemberDefaults(),
			...options
		}, extras?.guild ?? BaseMocks.getGuild());
	}

	/**
	 * Returns a message based off of given options.
	 *
	 * @returns {Discord.Message}
	 */
	static getMessage(options?: MessageConfigOptions, extras?: CustomMessageExtras): Discord.Message {
		return new Discord.Message(extras?.client ?? BaseMocks.getClient(), {
			...getMessageDefaults(),
			...options
		}, extras?.channel ?? BaseMocks.getTextChannel());
	}
}

export default CustomMocks;