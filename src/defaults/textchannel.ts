import { APITextChannel, ChannelType } from "discord-api-types/v10";
import GUILD_CHANNEL_DEFAULTS from "./guildchannel";

const TEXT_CHANNEL_DEFAULTS: APITextChannel = {
	...GUILD_CHANNEL_DEFAULTS,
	type: ChannelType.GuildText,
	name: "my-channel",
	position: 1,
	parent_id: "123123123123123123",
	topic: "some-topic",
	nsfw: false,
	last_message_id: "123212321232123212",
	rate_limit_per_user: 0
};

export default TEXT_CHANNEL_DEFAULTS;