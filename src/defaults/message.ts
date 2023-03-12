import { APIMessage, MessageType } from "discord-api-types/v10";
import USER_DEFAULTS from "./user";

const GUILD_MESSAGE_DEFAULTS: APIMessage = {
	id: "123456123456123456",
	channel_id: "121212121212121212",
	content: "This is a message.",
	author: USER_DEFAULTS,
	pinned: false,
	tts: false,
	timestamp: "",
	edited_timestamp: null,
	mention_everyone: false,
	mention_roles: [],
	mentions: [],
	attachments: [],
	embeds: [],
	type: MessageType.Default
};

export default GUILD_MESSAGE_DEFAULTS;