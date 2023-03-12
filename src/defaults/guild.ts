import {
	APIGuild,
	GuildNSFWLevel,
	GuildPremiumTier,
	GuildVerificationLevel,
	GuildExplicitContentFilter,
	GuildMFALevel,
	GuildDefaultMessageNotifications,
	GuildSystemChannelFlags
} from "discord-api-types/v10";

const GUILD_DEFAULTS: APIGuild = {
	id: "123456789012345678",
	name: "My Guild",
	icon: "https://placehold.it/256x256",
	splash: "https://placehold.it/1920x1080",
	region: "eu-west",
	approximate_member_count: 15,
	features: [],
	application_id: "876543210987654321",
	afk_timeout: 900,
	afk_channel_id: "123412341234123412",
	system_channel_id: "876587658765876587",
	verification_level: GuildVerificationLevel.Low,
	explicit_content_filter: GuildExplicitContentFilter.Disabled,
	mfa_level: GuildMFALevel.None,
	owner_id: "182736451827364511",
	discovery_splash: null,
	default_message_notifications: GuildDefaultMessageNotifications.AllMessages,
	roles: [],
	emojis: [],
	system_channel_flags: GuildSystemChannelFlags.SuppressJoinNotifications,
	rules_channel_id: "",
	vanity_url_code: "",
	description: "",
	banner: null,
	premium_tier: GuildPremiumTier.None,
	preferred_locale: "",
	public_updates_channel_id: "",
	nsfw_level: GuildNSFWLevel.Default,
	stickers: [],
	premium_progress_bar_enabled: false,
	hub_type: null
};

export default GUILD_DEFAULTS;