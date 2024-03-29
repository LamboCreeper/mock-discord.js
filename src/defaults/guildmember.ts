import { APIGuildMember } from "discord-api-types/v10";
import USER_DEFAULTS from "./user";

const GUILD_MEMBER_DEFAULTS: APIGuildMember = {
	user: USER_DEFAULTS,
	nick: "my name",
	roles: [],
	joined_at: new Date().toISOString(),
	deaf: false,
	mute: false,
	flags: 0 // Defaults to 0
};

export default GUILD_MEMBER_DEFAULTS;