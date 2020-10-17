import GuildMemberConfigOptions from "../interfaces/GuildMemberConfigOptions";
import BaseMocks from "../BaseMocks";

function getGuildMemberDefaults(): GuildMemberConfigOptions {
	return {
		nick: "my name",
		joined_at: new Date("2020-10-17").getTime(),
		user: BaseMocks.getUser()
	};
}

export default getGuildMemberDefaults;