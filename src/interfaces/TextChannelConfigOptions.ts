import GuildChannelConfigOptions from "./GuildChannelConfigOptions";

interface TextChannelConfigOptions extends GuildChannelConfigOptions {
	topic?: string;
	nsfw?: boolean;
	last_message_id?: string;
	last_pin_timestamp?: number;
	rate_limit_per_user?: number;
}

export default TextChannelConfigOptions;