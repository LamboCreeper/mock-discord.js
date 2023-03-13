import { APIChannel, ChannelType } from "discord-api-types/v10";

const CHANNEL_DEFAULTS: APIChannel = {
	id: "121212121212121212",
	type: ChannelType.GuildText,
	position: 1,
	name: "my-channel"
};

export default CHANNEL_DEFAULTS;