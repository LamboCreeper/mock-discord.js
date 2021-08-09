import Discord from "discord.js";
declare class BaseMocks {
    private static client;
    private static guild;
    private static channel;
    private static guildChannel;
    private static textChannel;
    private static user;
    private static guildMember;
    private static message;
    private static messageReaction;
    /**
     * Returns a generic and consistent mock of a Discord Client.
     *
     * @returns {Discord.Client}
     */
    static getClient(): Discord.Client;
    /**
     * Returns a generic and consistent mock of a Discord Guild.
     *
     * @returns {Discord.Guild}
     */
    static getGuild(): Discord.Guild;
    /**
     * Returns a generic and consistent mock of a Discord Channel.
     *
     * @returns {Discord.Channel}
     */
    static getChannel(): Discord.Channel;
    /**
     * Returns a generic and consistent mock of a Discord Guild Channel.
     *
     * @returns {Discord.GuildChannel}
     */
    static getGuildChannel(): Discord.GuildChannel;
    /**
     * Returns a generic and consistent mock of a Discord Text Channel.
     *
     * @returns {Discord.TextChannel}
     */
    static getTextChannel(): Discord.TextChannel;
    /**
     * Returns a generic and consistent mock of a Discord User.
     *
     * @returns {Discord.User}
     */
    static getUser(): Discord.User;
    /**
     * Returns a generic and consistent mock of a Discord Guild Member.
     *
     * @returns {Discord.GuildMember}
     */
    static getGuildMember(): Discord.GuildMember;
    /**
     * Returns a generic and consistent mock of a Discord Message.
     *
     * @returns {Discord.Message}
     */
    static getMessage(): Discord.Message;
    /**
     * Returns a generic and consistent mock of a Discord Message Reaction.
     *
     * @returns {Discord.MessageReaction}
     */
    static getMessageReaction(): Discord.MessageReaction;
}
export default BaseMocks;
