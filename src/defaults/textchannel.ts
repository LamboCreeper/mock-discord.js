import TextChannelConfigOptions from "../interfaces/TextChannelConfigOptions";
import GUILD_CHANNEL_DEFAULTS from "./guildchannel";

const TEXT_CHANNEL_DEFAULTS: TextChannelConfigOptions = {
	...GUILD_CHANNEL_DEFAULTS,
	topic: "some-topic",
	nsfw: false,
	last_message_id: "123212321232123212",
	last_pin_timestamp: new Date("2020-10-17").getTime(),
	rate_limit_per_user: 0
};

export default TEXT_CHANNEL_DEFAULTS;