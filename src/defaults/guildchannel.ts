import { APIChannel } from "discord-api-types/v10";
import CHANNEL_DEFAULTS from "./channel";

const GUILD_CHANNEL_DEFAULTS: APIChannel = {
	...CHANNEL_DEFAULTS
};

export default GUILD_CHANNEL_DEFAULTS;