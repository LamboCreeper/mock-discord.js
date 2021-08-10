import { APIGuild, GuildNSFWLevel, GuildPremiumTier } from "discord-api-types/v9";

const GUILD_DEFAULTS: APIGuild = {
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
	verification_level: 1,
	explicit_content_filter: 0,
	mfa_level: 0,
	owner_id: "182736451827364511",
	discovery_splash: null,
	default_message_notifications: 0,
	roles: [],
	emojis: [],
	system_channel_flags: 1,
	rules_channel_id: "",
	vanity_url_code: "",
	description: "",
	banner: null,
	premium_tier: GuildPremiumTier.None,
	preferred_locale: "",
	public_updates_channel_id: "",
	nsfw_level: GuildNSFWLevel.Default,
	stickers: []
};

export default GUILD_DEFAULTS;