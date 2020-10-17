import ChannelConfigOptions from "./ChannelConfigOptions";

interface GuildChannelConfigOptions extends ChannelConfigOptions {
	name?: string;
	parent_id?: string;
}

export default GuildChannelConfigOptions;