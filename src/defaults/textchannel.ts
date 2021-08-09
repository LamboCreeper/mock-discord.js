import { APIChannel } from "discord-api-types/v9";
import GUILD_CHANNEL_DEFAULTS from "./guildchannel";

const TEXT_CHANNEL_DEFAULTS: APIChannel = {
	...GUILD_CHANNEL_DEFAULTS,
	topic: "some-topic",
	nsfw: false,
	last_message_id: "123212321232123212",
	rate_limit_per_user: 0,
};

export default TEXT_CHANNEL_DEFAULTS;