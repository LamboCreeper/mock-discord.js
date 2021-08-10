import { APIMessage } from "discord-api-types/v9";
import USER_DEFAULTS from "./user";
import GUILD_MEMBER_DEFAULTS from "./guildmember";

const GUILD_MESSAGE_DEFAULTS: APIMessage = {
	id: "123456123456123456",
	channel_id: "121212121212121212",
	content: "This is a message.",
	author: USER_DEFAULTS,
	member: GUILD_MEMBER_DEFAULTS,
	pinned: false,
	tts: false,
	timestamp: "",
	edited_timestamp: null,
	mention_everyone: false,
	mention_roles: [],
	mentions: [],
	attachments: [],
	embeds: [],
	type: 0
};

export default GUILD_MESSAGE_DEFAULTS;