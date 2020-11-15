import { expect } from "chai";
import CustomMocks from "../src/CustomMocks";
import BaseMocks from "../src/BaseMocks";
import GUILD_DEFAULTS from "../src/defaults/guild";
import CHANNEL_DEFAULTS from "../src/defaults/channel";
import GUILD_CHANNEL_DEFAULTS from "../src/defaults/guildchannel";
import TEXT_CHANNEL_DEFAULTS from "../src/defaults/textchannel";
import USER_DEFAULTS from "../src/defaults/user";
import getGuildMemberDefaults from "../src/defaults/guildmember";
import getMessageDefaults from "../src/defaults/message";
import getMessageReactionDefaults from "../src/defaults/messagerReaction";

describe("CustomMocks", () => {
	describe("::getGuild()", () => {
		it("returns a Discord Guild with the default values if no options are provided", () => {
			const expected = BaseMocks.getGuild();
			const actual = CustomMocks.getGuild();

			expect(actual.id).to.equal(expected.id);
			expect(actual.name).to.equal(expected.name);
			expect(actual.client).to.equal(expected.client);
			expect(actual.available).to.equal(expected.available);
			expect(actual.icon).to.equal(expected.icon);
			expect(actual.splash).to.equal(expected.splash);
			expect(actual.region).to.equal(expected.region);
			expect(actual.memberCount).to.equal(expected.memberCount);
			expect(actual.large).to.equal(expected.large);
			expect(actual.features).to.equal(expected.features);
			expect(actual.applicationID).to.equal(expected.applicationID);
			expect(actual.afkTimeout).to.equal(expected.afkTimeout);
			expect(actual.afkChannelID).to.equal(expected.afkChannelID);
			expect(actual.embedEnabled).to.equal(expected.embedEnabled);
			expect(actual.verificationLevel).to.equal(expected.verificationLevel);
			expect(actual.explicitContentFilter).to.equal(expected.explicitContentFilter);
			expect(actual.mfaLevel).to.equal(expected.mfaLevel);
			expect(actual.joinedAt.getTime()).to.equal(expected.joinedAt.getTime());
			expect(actual.ownerID).to.equal(expected.ownerID);
		});

		it("returns a Discord Guild with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getGuild().client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Guild with your given options overriding the defaults", () => {
			const guild = CustomMocks.getGuild({
				name: "My Custom Test Guild"
			});

			expect(guild.name).to.equal("My Custom Test Guild");
			expect(guild.name).not.to.equal(GUILD_DEFAULTS.name);
		});
	});

	describe("::getChannel()", () => {
		it("returns a Discord Channel with the default values if no options are provided", () => {
			const expected = BaseMocks.getChannel();
			const actual = CustomMocks.getChannel();

			expect(actual.client).to.equal(expected.client);
			expect(actual.id).to.equal(expected.id);
			expect(actual.type).to.equal(expected.type);
			expect(actual.deleted).to.equal(expected.deleted);
		});

		it("returns a Discord Channel with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getChannel().client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Channel with your given options overriding the defaults", () => {
			const channel = CustomMocks.getChannel({
				id: "123"
			});

			expect(channel.id).to.equal("123");
			expect(channel.id).not.to.equal(CHANNEL_DEFAULTS.id);
		});
	});

	describe("::getGuildChannel()", () => {
		it("returns a Discord Guild Channel with the default values if no options are provided", () => {
			const expected = BaseMocks.getGuildChannel();
			const actual = CustomMocks.getGuildChannel();

			expect(actual.client).to.equal(expected.client);
			expect(actual.id).to.equal(expected.id);
			expect(actual.type).to.equal(expected.type);
			expect(actual.deleted).to.equal(expected.deleted);
			expect(actual.name).to.equal(expected.name);
			expect(actual.parentID).to.equal(expected.parentID);
		});

		it("returns a Discord Guild Channel with the default guild if no custom guild is provided", () => {
			const expected = BaseMocks.getGuild();
			const actual = CustomMocks.getGuildChannel().guild;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Guild Channel with your given options overriding the defaults", () => {
			const channel = CustomMocks.getGuildChannel({
				name: "My Test Guild Channel"
			});

			expect(channel.name).to.equal("My Test Guild Channel");
			expect(channel.name).not.to.equal(GUILD_CHANNEL_DEFAULTS.name);
		});
	});

	describe("::getTextChannel()", () => {
		it("returns a Discord Text Channel with the default values if no options are provided", () => {
			const expected = BaseMocks.getTextChannel();
			const actual = CustomMocks.getTextChannel();

			expect(actual.guild).to.equal(expected.guild);
			expect(actual.id).to.equal(expected.id);
			expect(actual.type).to.equal(expected.type);
			expect(actual.deleted).to.equal(expected.deleted);
			expect(actual.name).to.equal(expected.name);
			expect(actual.parentID).to.equal(expected.parentID);
			expect(actual.topic).to.equal(expected.topic);
			expect(actual.nsfw).to.equal(expected.nsfw);
			expect(actual.lastMessageID).to.equal(expected.lastMessageID);
			expect(actual.lastPinTimestamp).to.equal(expected.lastPinTimestamp);
			expect(actual.rateLimitPerUser).to.equal(expected.rateLimitPerUser);
		});

		it("returns a Discord Text Channel with the default guild if no custom guild is provided", () => {
			const expected = BaseMocks.getGuild();
			const actual = CustomMocks.getTextChannel().guild;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Text Channel with your given options overriding the defaults", () => {
			const channel = CustomMocks.getTextChannel({
				topic: "My Test Topic"
			});

			expect(channel.topic).to.equal("My Test Topic");
			expect(channel.topic).not.to.equal(TEXT_CHANNEL_DEFAULTS.topic);
		});
	});

	describe("::getUser()", () => {
		it("returns a Discord User with the default values if no options are provided", () => {
			const expected = BaseMocks.getUser();
			const actual = CustomMocks.getUser();

			expect(actual.id).to.equal(expected.id);
			expect(actual.username).to.equal(expected.username);
			expect(actual.discriminator).to.equal(expected.discriminator);
			expect(actual.bot).to.equal(expected.bot);
		});

		it("returns a Discord User with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getUser().client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord User with your given options overriding the defaults", () => {
			const user = CustomMocks.getUser({
				discriminator: "0001"
			});

			expect(user.discriminator).to.equal("0001");
			expect(user.discriminator).not.to.equal(USER_DEFAULTS.discriminator);
		});
	});

	describe("::getGuildMember()", () => {
		it("returns a Discord Guild Member with the default values if no options are provided", () => {
			const expected = BaseMocks.getGuildMember();
			const actual = CustomMocks.getGuildMember();

			expect(actual.nickname).to.equal(expected.nickname);
			expect(actual.joinedTimestamp).to.equal(expected.joinedTimestamp);
			expect(actual.user.id).to.equal(expected.user.id);
		});

		it("returns a Discord Guild Member with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getGuildMember().client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Guild Member with the default guild if no custom guild is provided", () => {
			const expected = BaseMocks.getGuild();
			const actual = CustomMocks.getGuildMember().guild;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Guild Member with given options overriding the defaults", () => {
			const member = CustomMocks.getGuildMember({
				nick: "My Test Nickname"
			});

			expect(member.nickname).to.equal("My Test Nickname");
			expect(member.nickname).not.to.equal(getGuildMemberDefaults().nick);
		});
	});

	describe("::getMessage()", () => {
		it("returns a Discord Message with the default values if no options are provided", () => {
			const expected = BaseMocks.getMessage();
			const actual = CustomMocks.getMessage();

			expect(actual.id).to.equal(expected.id);
			expect(actual.content).to.equal(expected.content);
			expect(actual.author.id).to.equal(expected.author.id);
			expect(actual.member?.id).to.equal(expected.member?.id);
			expect(actual.guild?.id).to.equal(expected.guild?.id);
			expect(actual.pinned).to.equal(expected.pinned);
			expect(actual.tts).to.equal(expected.tts);
		});

		it("returns a Discord Message with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getMessage().client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Message with the default text channel if no custom text channel is provided", () => {
			const expected = BaseMocks.getTextChannel();
			const actual = CustomMocks.getMessage().channel;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Message with the given options overriding the defaults", () => {
			const message = CustomMocks.getMessage({
				content: "This is a test message"
			});

			expect(message.content).to.equal("This is a test message");
			expect(message.content).not.to.equal(getMessageDefaults().content);
		});
	});

	describe("::getMessageReaction()", () => {
		it("returns a Discord Message Reaction with the default values if no options are provided", () => {
			const expected = BaseMocks.getMessageReaction();
			const actual = CustomMocks.getMessageReaction();

			expect(actual.message).to.equal(expected.message);
			expect(actual.emoji.name).to.equal(expected.emoji.name);
		});

		it("returns a Discord Message Reaction with the default client if no custom client is provided", () => {
			const expected = BaseMocks.getClient();
			const actual = CustomMocks.getMessageReaction().message.client;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Message Reaction with the default message if no custom message is provided", () => {
			const expected = BaseMocks.getMessage();
			const actual = CustomMocks.getMessageReaction().message;

			expect(actual).to.equal(expected);
		});

		it("returns a Discord Message Reaction with the given options overriding the defaults", () => {
			const message = CustomMocks.getMessageReaction({
				emoji: {
					name: "test"
				}
			});

			expect(message.emoji.name).to.equal("test");
			expect(message.emoji.name).not.to.equal(getMessageReactionDefaults().emoji.name);
		});
	});
});