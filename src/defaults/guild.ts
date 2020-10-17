import GuildConfigOptions from "../interfaces/GuildConfigOptions";

const GUILD_DEFAULTS: GuildConfigOptions = {
	id: "123456789012345678",
	unavailable: false,
	name: "My Guild",
	icon: "https://placehold.it/256x256",
	splash: "https://placehold.it/1920x1080",
	region: "eu-west",
	member_count: 15,
	large: false,
	features: [],
	application_id: "876543210987654321",
	afk_timeout: 1000,
	afk_channel_id: "123412341234123412",
	system_channel_id: "876587658765876587",
	embed_enabled: true,
	verification_level: 1,
	explicit_content_filter: 0,
	mfa_level: 8,
	joined_at: new Date("2020-10-16").getTime(),
	owner_id: "182736451827364511",
};

export default GUILD_DEFAULTS;