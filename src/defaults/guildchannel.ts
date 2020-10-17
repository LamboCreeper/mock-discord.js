import GuildChannelConfigOptions from "../interfaces/GuildChannelConfigOptions";
import CHANNEL_DEFAULTS from "./channel";

const GUILD_CHANNEL_DEFAULTS: GuildChannelConfigOptions = {
	...CHANNEL_DEFAULTS,
	name: "my-channel",
	parent_id: "123123123123123123"
};

export default GUILD_CHANNEL_DEFAULTS;