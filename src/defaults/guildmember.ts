import { APIGuildMember } from "discord-api-types/v9";
import USER_DEFAULTS from "./user";

const GUILD_MEMBER_DEFAULTS: APIGuildMember = {
	user: USER_DEFAULTS,
	nick: "my name",
	roles: [],
	joined_at: (new Date()).toISOString(),
	deaf: false,
	mute: false
};

export default GUILD_MEMBER_DEFAULTS;