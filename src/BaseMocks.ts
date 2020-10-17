import Discord from "discord.js";
import GUILD_DEFAULTS from "./defaults/guild";

class BaseMocks {
	private static client: Discord.Client;
	private static guild: Discord.Guild;

	/**
	 * Returns a generic and consistent mock of a Discord Client.
	 *
	 * @returns {Discord.Client}
	 */
	static getClient(): Discord.Client {
		if (!this.client) {
			this.client = new Discord.Client();
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
}

export default BaseMocks;