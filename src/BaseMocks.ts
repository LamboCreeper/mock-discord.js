import Discord from "discord.js";
import GUILD_DEFAULTS from "./defaults/guild";
import CHANNEL_DEFAULTS from "./defaults/channel";
import GUILD_CHANNEL_DEFAULTS from "./defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "./defaults/textchannel";
import USER_DEFAULTS from "./defaults/user";
import GUILD_MEMBER_DEFAULTS from "./defaults/guildmember";
import GUILD_MESSAGE_DEFAULTS from "./defaults/message";
import MESSAGE_REACTION_DEFAULTS from "./defaults/messagerReaction";

class BaseMocks {
	private static client: Discord.Client;
	private static guild: Discord.Guild;
	private static channel: Discord.Channel;
	private static guildChannel: Discord.GuildChannel;
	private static textChannel: Discord.TextChannel;
	private static user: Discord.User;
	private static guildMember: Discord.GuildMember;
	private static message: Discord.Message;
	private static messageReaction: Discord.MessageReaction;

	/**
	 * Returns a generic and consistent mock of a Discord Client.
	 *
	 * @returns {Discord.Client}
	 */
	static getClient(): Discord.Client {
		if (!this.client) {
			this.client = new Discord.Client<true>({
				intents: 10
			});
		}

		return this.client;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Guild.
	 *
	 * @returns {Discord.Guild}
	 */
	static getGuild(): Discord.Guild {
		if (!this.guild) {
			this.guild = new Discord.Guild(this.getClient(), GUILD_DEFAULTS);
		}

		return this.guild;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Channel.
	 *
	 * @returns {Discord.Channel}
	 */
	static getChannel(): Discord.Channel {
		if (!this.channel) {
			this.channel = new Discord.Channel(this.getClient(), CHANNEL_DEFAULTS);
		}

		return this.channel;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Guild Channel.
	 *
	 * @returns {Discord.GuildChannel}
	 */
	static getGuildChannel(): Discord.GuildChannel {
		if (!this.guildChannel) {
			this.guildChannel = new Discord.GuildChannel(this.getGuild(), GUILD_CHANNEL_DEFAULTS);
		}

		return this.guildChannel;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Text Channel.
	 *
	 * @returns {Discord.TextChannel}
	 */
	static getTextChannel(): Discord.TextChannel {
		if (!this.textChannel) {
			this.textChannel = new Discord.TextChannel(this.getGuild(), TEXT_CHANNEL_DEFAULTS);
		}

		return this.textChannel;
	}

	/**
	 * Returns a generic and consistent mock of a Discord User.
	 *
	 * @returns {Discord.User}
	 */
	static getUser(): Discord.User {
		if (!this.user) {
			this.user = new Discord.User(this.getClient(), USER_DEFAULTS);
		}

		return this.user;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Guild Member.
	 *
	 * @returns {Discord.GuildMember}
	 */
	static getGuildMember(): Discord.GuildMember {
		if (!this.guildMember) {
			this.guildMember = new Discord.GuildMember(this.getClient(), GUILD_MEMBER_DEFAULTS, this.getGuild());
		}

		return this.guildMember;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Message.
	 *
	 * @returns {Discord.Message}
	 */
	static getMessage(): Discord.Message {
		if (!this.message) {
			this.message = new Discord.Message(this.getClient(), GUILD_MESSAGE_DEFAULTS);

			Object.defineProperty(this.message, 'channel', {
				get:() => this.getTextChannel()
			})
		}

		return this.message;
	}

	/**
	 * Returns a generic and consistent mock of a Discord Message Reaction.
	 *
	 * @returns {Discord.MessageReaction}
	 */
	static getMessageReaction(): Discord.MessageReaction {
		if (!this.messageReaction) {
			this.messageReaction = new Discord.MessageReaction(
				this.getClient(), MESSAGE_REACTION_DEFAULTS, this.getMessage()
			);
		}

		return this.messageReaction;
	}
}

export default BaseMocks;