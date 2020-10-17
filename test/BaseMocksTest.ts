import { expect } from "chai";
import BaseMocks from "../src/BaseMocks";
import GUILD_DEFAULTS from "../src/defaults/guild";
import CHANNEL_DEFAULTS from "../src/defaults/channel";

// @ts-ignore - TypeScript doesn't like that this file does not come from src/
import { ExpicitContentFilterLevel, VerificationLevel, ChannelType } from "./enums";
import GUILD_CHANNEL_DEFAULTS from "../src/defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "../src/defaults/textchannel";

describe("BaseMocks", () => {
	describe("::getClient()", () => {
		it("returns the same Discord Client each time", () => {
			const expected = BaseMocks.getClient();
			const actual = BaseMocks.getClient();

			expect(actual).to.equal(expected);
		});
	});

	describe("::getGuild()", () => {
		it("returns the same Discord Guild each time", () => {
			const expected = BaseMocks.getGuild();
			const actual = BaseMocks.getGuild();

			expect(actual).to.equal(expected);
		});


		it("creates a new Discord Guild with the GUILD_DEFAULTS", () => {
			const guild = BaseMocks.getGuild();

			expect(guild.id).to.equal(GUILD_DEFAULTS.id);
			expect(guild.available).to.equal(GUILD_DEFAULTS.unavailable);
			expect(guild.name).to.equal(GUILD_DEFAULTS.name);
			expect(guild.icon).to.equal(GUILD_DEFAULTS.icon);
			expect(guild.splash).to.equal(GUILD_DEFAULTS.splash);
			expect(guild.region).to.equal(GUILD_DEFAULTS.region);
			expect(guild.memberCount).to.equal(GUILD_DEFAULTS.member_count);
			expect(guild.large).to.equal(GUILD_DEFAULTS.large);
			expect(guild.features).to.equal(GUILD_DEFAULTS.features);
			expect(guild.applicationID).to.equal(GUILD_DEFAULTS.application_id);
			expect(guild.afkTimeout).to.equal(GUILD_DEFAULTS.afk_timeout);
			expect(guild.afkChannelID).to.equal(GUILD_DEFAULTS.afk_channel_id);
			expect(guild.systemChannelID).to.equal(GUILD_DEFAULTS.system_channel_id);
			expect(guild.embedEnabled).to.equal(GUILD_DEFAULTS.embed_enabled);
			expect(guild.verificationLevel).to.equal(VerificationLevel[GUILD_DEFAULTS.verification_level!]);
			expect(guild.explicitContentFilter).to.equal(ExpicitContentFilterLevel[GUILD_DEFAULTS.explicit_content_filter!]);
			expect(guild.mfaLevel).to.equal(GUILD_DEFAULTS.mfa_level);
			expect(guild.joinedAt.getTime()).to.equal(GUILD_DEFAULTS.joined_at);
			expect(guild.ownerID).to.equal(GUILD_DEFAULTS.owner_id);
		});
	});

	describe("::getChannel()", () => {
		it("returns the same Discord Channel each time", () => {
			const expected = BaseMocks.getChannel();
			const actual = BaseMocks.getChannel();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord Channel with the CHANNEL_DEFAULTS", () => {
			const channel = BaseMocks.getChannel();

			expect(channel.id).to.equal(CHANNEL_DEFAULTS.id);
			expect(channel.type).to.equal(ChannelType[CHANNEL_DEFAULTS.type!].toLowerCase());
			expect(channel.deleted).to.equal(CHANNEL_DEFAULTS.deleted);
		});
	});

	describe("::getGuildChannel()", () => {
		it("returns the same Discord Guild Channel each time", () => {
			const expected = BaseMocks.getGuildChannel();
			const actual = BaseMocks.getGuildChannel();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord Guild Channel with the GUILD_CHANNEL_DEFAULTS", () => {
			const channel = BaseMocks.getGuildChannel();

			expect(channel.id).to.equal(GUILD_CHANNEL_DEFAULTS.id);
			expect(channel.type).to.equal(ChannelType[GUILD_CHANNEL_DEFAULTS.type!].toLowerCase());
			expect(channel.deleted).to.equal(GUILD_CHANNEL_DEFAULTS.deleted);
			expect(channel.name).to.equal(GUILD_CHANNEL_DEFAULTS.name);
			expect(channel.parentID).to.equal(GUILD_CHANNEL_DEFAULTS.parent_id);
		});
	});

	describe("::getTextChannel()", () => {
		it("returns the same Discord Text Channel each time", () => {
			const expected = BaseMocks.getTextChannel();
			const actual = BaseMocks.getTextChannel();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord Text Channel with the TEXT_CHANNEL_DEFAULTS", () => {
			const channel = BaseMocks.getTextChannel();

			expect(channel.id).to.equal(TEXT_CHANNEL_DEFAULTS.id);
			expect(channel.type).to.equal(ChannelType[TEXT_CHANNEL_DEFAULTS.type!].toLowerCase());
			expect(channel.deleted).to.equal(TEXT_CHANNEL_DEFAULTS.deleted);
			expect(channel.name).to.equal(TEXT_CHANNEL_DEFAULTS.name);
			expect(channel.parentID).to.equal(TEXT_CHANNEL_DEFAULTS.parent_id);
			expect(channel.parentID).to.equal(TEXT_CHANNEL_DEFAULTS.parent_id);
			expect(channel.topic).to.equal(TEXT_CHANNEL_DEFAULTS.topic);
			expect(channel.nsfw).to.equal(TEXT_CHANNEL_DEFAULTS.nsfw);
			expect(channel.lastMessageID).to.equal(TEXT_CHANNEL_DEFAULTS.last_message_id);
			expect(channel.lastPinTimestamp).to.equal(TEXT_CHANNEL_DEFAULTS.last_pin_timestamp);
			expect(channel.rateLimitPerUser).to.equal(TEXT_CHANNEL_DEFAULTS.rate_limit_per_user);
		});
	});
});