import MessageConfigOptions from "../interfaces/MessageConfigOptions";
import BaseMocks from "../BaseMocks";

// This has to be declared like this otherwise an error occurs stating BaseMocks is not defined.
function getMessageDefaults(): MessageConfigOptions {
	return {
		id: "123456123456123456",
		content: "This is a message.",
		author: BaseMocks.getUser(),
		member: BaseMocks.getGuildMember(),
		pinned: false,
		tts: false
	};
}

export default getMessageDefaults;