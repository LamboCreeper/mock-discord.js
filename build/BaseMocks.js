"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var guild_1 = __importDefault(require("./defaults/guild"));
var channel_1 = __importDefault(require("./defaults/channel"));
var guildchannel_1 = __importDefault(require("./defaults/guildchannel"));
var textchannel_1 = __importDefault(require("./defaults/textchannel"));
var user_1 = __importDefault(require("./defaults/user"));
var guildmember_1 = __importDefault(require("./defaults/guildmember"));
var message_1 = __importDefault(require("./defaults/message"));
var messagerReaction_1 = __importDefault(require("./defaults/messagerReaction"));
var BaseMocks = /** @class */ (function () {
    function BaseMocks() {
    }
    /**
     * Returns a generic and consistent mock of a Discord Client.
     *
     * @returns {Discord.Client}
     */
    BaseMocks.getClient = function () {
        if (!this.client) {
            this.client = new discord_js_1.default.Client({
                intents: 10
            });
        }
        return this.client;
    };
    /**
     * Returns a generic and consistent mock of a Discord Guild.
     *
     * @returns {Discord.Guild}
     */
    BaseMocks.getGuild = function () {
        if (!this.guild) {
            this.guild = new discord_js_1.default.Guild(this.getClient(), guild_1.default);
        }
        return this.guild;
    };
    /**
     * Returns a generic and consistent mock of a Discord Channel.
     *
     * @returns {Discord.Channel}
     */
    BaseMocks.getChannel = function () {
        if (!this.channel) {
            this.channel = new discord_js_1.default.Channel(this.getClient(), channel_1.default);
        }
        return this.channel;
    };
    /**
     * Returns a generic and consistent mock of a Discord Guild Channel.
     *
     * @returns {Discord.GuildChannel}
     */
    BaseMocks.getGuildChannel = function () {
        if (!this.guildChannel) {
            this.guildChannel = new discord_js_1.default.GuildChannel(this.getGuild(), guildchannel_1.default);
        }
        return this.guildChannel;
    };
    /**
     * Returns a generic and consistent mock of a Discord Text Channel.
     *
     * @returns {Discord.TextChannel}
     */
    BaseMocks.getTextChannel = function () {
        if (!this.textChannel) {
            this.textChannel = new discord_js_1.default.TextChannel(this.getGuild(), textchannel_1.default);
        }
        return this.textChannel;
    };
    /**
     * Returns a generic and consistent mock of a Discord User.
     *
     * @returns {Discord.User}
     */
    BaseMocks.getUser = function () {
        if (!this.user) {
            this.user = new discord_js_1.default.User(this.getClient(), user_1.default);
        }
        return this.user;
    };
    /**
     * Returns a generic and consistent mock of a Discord Guild Member.
     *
     * @returns {Discord.GuildMember}
     */
    BaseMocks.getGuildMember = function () {
        if (!this.guildMember) {
            this.guildMember = new discord_js_1.default.GuildMember(this.getClient(), guildmember_1.default, this.getGuild());
        }
        return this.guildMember;
    };
    /**
     * Returns a generic and consistent mock of a Discord Message.
     *
     * @returns {Discord.Message}
     */
    BaseMocks.getMessage = function () {
        var _this = this;
        if (!this.message) {
            this.message = new discord_js_1.default.Message(this.getClient(), message_1.default);
            Object.defineProperty(this.message, 'channel', {
                get: function () { return _this.getTextChannel(); }
            });
            Object.defineProperty(this.message, 'member', {
                get: function () { return _this.getGuildMember(); }
            });
        }
        return this.message;
    };
    /**
     * Returns a generic and consistent mock of a Discord Message Reaction.
     *
     * @returns {Discord.MessageReaction}
     */
    BaseMocks.getMessageReaction = function () {
        if (!this.messageReaction) {
            this.messageReaction = new discord_js_1.default.MessageReaction(this.getClient(), messagerReaction_1.default, this.getMessage());
        }
        return this.messageReaction;
    };
    return BaseMocks;
}());
exports.default = BaseMocks;
