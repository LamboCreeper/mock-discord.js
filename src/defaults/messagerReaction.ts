import MessageReactionOptions from "../interfaces/MessageReactionOptions";
import BaseMocks from "../BaseMocks";

// This has to be declared like this otherwise an error occurs stating BaseMocks is not defined.
function getMessageReactionDefaults(): MessageReactionOptions {
	return {
		message: BaseMocks.getMessage(),
		emoji: {
			name: "my-emoji"
		}
	};
}

export default getMessageReactionDefaults;