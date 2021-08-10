import { APIChannel } from "discord-api-types/v9";
import CHANNEL_DEFAULTS from "./channel";

const GUILD_CHANNEL_DEFAULTS: APIChannel = {
	...CHANNEL_DEFAULTS,
	name: "my-channel",
	parent_id: "123123123123123123"
};

export default GUILD_CHANNEL_DEFAULTS;