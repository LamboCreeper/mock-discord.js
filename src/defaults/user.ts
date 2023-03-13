import { APIUser } from "discord-api-types/v10";

const USER_DEFAULTS: APIUser = {
	id: "010101010101010101",
	username: "my-username",
	discriminator: "1234",
	avatar: "https://placehold.it/256x256",
	bot: false
};

export default USER_DEFAULTS;