import { expect } from "chai";
import BaseMocks from "../src/BaseMocks";
import GUILD_DEFAULTS from "../src/defaults/guild";

// @ts-ignore - TypeScript doesn't like that this file does not come from src/
import { ExpicitContentFilterLevel, VerificationLevel } from "./enums";

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
});