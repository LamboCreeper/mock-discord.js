import { expect } from "chai";
import BaseMocks from "../src/BaseMocks";
import GUILD_DEFAULTS from "../src/defaults/guild";
import CHANNEL_DEFAULTS from "../src/defaults/channel";
import GUILD_CHANNEL_DEFAULTS from "../src/defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "../src/defaults/textchannel";
import USER_DEFAULTS from "../src/defaults/user";
import GUILD_MEMBER_DEFAULTS from "../src/defaults/guildmember";
import GUILD_MESSAGE_DEFAULTS from "../src/defaults/message";
import MESSAGE_REACTION_DEFAULTS from "../src/defaults/messagerReaction";

// @ts-ignore - TypeScript doesn't like that this file does not come from src/
import { ExpicitContentFilterLevel, VerificationLevel, ChannelType } from "./enums";

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
			expect(guild.memberCount).to.equal(GUILD_DEFAULTS.member_count);
			expect(guild.large).to.equal(GUILD_DEFAULTS.large);
			expect(guild.features).to.equal(GUILD_DEFAULTS.features);
			expect(guild.applicationId).to.equal(GUILD_DEFAULTS.application_id);
			expect(guild.afkTimeout).to.equal(GUILD_DEFAULTS.afk_timeout);
			expect(guild.afkChannelId).to.equal(GUILD_DEFAULTS.afk_channel_id);
			expect(guild.systemChannelId).to.equal(GUILD_DEFAULTS.system_channel_id);
			expect(guild.verificationLevel).to.equal(VerificationLevel[GUILD_DEFAULTS.verification_level!]);
			expect(guild.explicitContentFilter).to.equal(ExpicitContentFilterLevel[GUILD_DEFAULTS.explicit_content_filter!]);
			expect(guild.mfaLevel).to.equal('NONE');
			expect(guild.ownerId).to.equal(GUILD_DEFAULTS.owner_id);
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
			expect(channel.name).to.equal(GUILD_CHANNEL_DEFAULTS.name);
			expect(channel.parentId).to.equal(GUILD_CHANNEL_DEFAULTS.parent_id);
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
			expect(channel.name).to.equal(TEXT_CHANNEL_DEFAULTS.name);
			expect(channel.parentId).to.equal(TEXT_CHANNEL_DEFAULTS.parent_id);
			expect(channel.topic).to.equal(TEXT_CHANNEL_DEFAULTS.topic);
			expect(channel.nsfw).to.equal(TEXT_CHANNEL_DEFAULTS.nsfw);
			expect(channel.lastMessageId).to.equal(TEXT_CHANNEL_DEFAULTS.last_message_id);
			expect(channel.lastPinTimestamp).to.equal(TEXT_CHANNEL_DEFAULTS.last_pin_timestamp);
			expect(channel.rateLimitPerUser).to.equal(TEXT_CHANNEL_DEFAULTS.rate_limit_per_user);
		});
	});

	describe("::getUser()", () => {
		it("returns the same Discord User each time", () => {
			const expected = BaseMocks.getUser();
			const actual = BaseMocks.getUser();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord User with the USER_DEFAULTS", () => {
			const user = BaseMocks.getUser();

			expect(user.id).to.equal(USER_DEFAULTS.id);
			expect(user.username).to.equal(USER_DEFAULTS.username);
			expect(user.discriminator).to.equal(USER_DEFAULTS.discriminator);
			expect(user.bot).to.equal(USER_DEFAULTS.bot);
		});
	});

	describe("::getGuildMember()", () => {
		it("returns the same Discord Guild Member each time", () => {
			const expected = BaseMocks.getGuildMember();
			const actual = BaseMocks.getGuildMember();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord Guild Member with the GUILD_MEMBER_DEFAULTS", () => {
			const member = BaseMocks.getGuildMember();
			const defaults = GUILD_MEMBER_DEFAULTS;

			expect(member.nickname).to.equal(defaults.nick);
			expect(member.user.id).to.equal(BaseMocks.getUser().id);
		});
	});

	describe("::getMessage()", () => {
		it("returns the same Discord Message each time", () => {
			const expected = BaseMocks.getMessage();
			const actual = BaseMocks.getMessage();

			expect(actual).to.equal(expected);
		});

		it("creates a new Discord Message with the MESSAGE_DEFAULTS", () => {
			const message = BaseMocks.getMessage();
			const defaults = GUILD_MESSAGE_DEFAULTS;

			expect(message.id).to.equal(defaults.id);
			expect(message.content).to.equal(defaults.content);
			expect(message.author.id).to.equal(defaults.author?.id);
			expect(message.member?.id).to.equal(defaults.member?.id);
			expect(message.pinned).to.equal(defaults.pinned);
			expect(message.tts).to.equal(defaults.tts);
		});
	});

	describe("::getMessageReaction()", () => {
		it("returns the same Discord Message Reaction each time", () => {
			const expected = BaseMocks.getMessageReaction();
			const actual = BaseMocks.getMessageReaction();

			expect(actual).to.equal(expected);
		});

		it("creates a new Message Reaction with the MESSAGE_REACTION_DEFAULTS", () => {
			const reaction = BaseMocks.getMessageReaction();
			const defaults = MESSAGE_REACTION_DEFAULTS;

			expect(reaction.count).to.equal(defaults.count);
			expect(reaction.emoji.name).to.equal(defaults.emoji.name);
		});
	});
});