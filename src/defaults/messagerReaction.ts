import { APIReaction } from "discord-api-types/v10";

const MESSAGE_REACTION_DEFAULTS: APIReaction = {
	me: false,
	count: 1,
	emoji: {
		id: null,
		name: "my-emoji"
	}
};

export default MESSAGE_REACTION_DEFAULTS;