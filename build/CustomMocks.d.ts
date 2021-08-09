import Discord from "discord.js";
import { APIChannel, APIGuild, APIGuildMember, APIMessage, APIReaction, APIUser } from "discord-api-types/v9";
import CustomGuildMemberExtras from "./interfaces/CustomGuildMemberExtras";
import CustomMessageExtras from "./interfaces/CustomMessageExtras";
import CustomMessageReactionExtras from "./interfaces/CustomMessageReactionExtras";
declare class CustomMocks {
    /**
     * Returns a guild mock based off of given options.
     *
     * @returns {Discord.Guild}
     */
    static getGuild(options?: Partial<APIGuild>, client?: Discord.Client): Discord.Guild;
    /**
     * Returns a channel mock based off of given options.
     *
     * @returns {Discord.Channel}
     */
    static getChannel(options?: Partial<APIChannel>, client?: Discord.Client): Discord.Channel;
    /**
     * Returns a guild channel based off of given options.
     *
     * @returns {Discord.GuildChannel}
     */
    static getGuildChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.GuildChannel;
    /**
     * Returns a text channel based off of given options.
     *
     * @returns {Discord.TextChannel}
     */
    static getTextChannel(options?: Partial<APIChannel>, guild?: Discord.Guild): Discord.TextChannel;
    /**
     * Returns a user based off of given options.
     *
     * @returns {Discord.User}
     */
    static getUser(options?: Partial<APIUser>, client?: Discord.Client): Discord.User;
    /**
     * Returns a guild member based off of given options.
     *
     * @returns {Discord.GuildMember}
     */
    static getGuildMember(options?: Partial<APIGuildMember>, extras?: CustomGuildMemberExtras): Discord.GuildMember;
    /**
     * Returns a message based off of given options.
     *
     * @returns {Discord.Message}
     */
    static getMessage(options?: Partial<APIMessage>, extras?: CustomMessageExtras): Discord.Message;
    /**
     * Returns a message reaction based off of given options.
     *
     * @returns {Discord.MessageReaction}
     */
    static getMessageReaction(options?: Partial<APIReaction>, extras?: CustomMessageReactionExtras): Discord.MessageReaction;
}
export default CustomMocks;
