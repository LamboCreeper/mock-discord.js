import {
	ChannelManager,
	GuildEmojiManager,
	PresenceManager,
	RoleManager,
	VoiceStateManager
} from "discord.js";

interface GuildConfigOptions {
	id?: string;
	unavailable?: boolean;
	name?: string;
	icon?: string;
	splash?: string;
	region?: string;
	member_count?: number;
	large?: boolean;
	features?: string[];
	application_id?: string;
	afk_timeout?: number;
	afk_channel_id?: string;
	system_channel_id?: string;
	embed_enabled?: boolean;
	verification_level?: number;
	explicit_content_filter?: number;
	mfa_level?: number;
	joined_at?: number;
	owner_id?: string;
	channels?: ChannelManager;
	roles?: RoleManager;
	presences?: PresenceManager;
	voiceStates?: VoiceStateManager;
	emojis?: GuildEmojiManager;
}

export default GuildConfigOptions;