"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var BaseMocks_1 = __importDefault(require("./BaseMocks"));
var guild_1 = __importDefault(require("./defaults/guild"));
var channel_1 = __importDefault(require("./defaults/channel"));
var guildchannel_1 = __importDefault(require("./defaults/guildchannel"));
var textchannel_1 = __importDefault(require("./defaults/textchannel"));
var user_1 = __importDefault(require("./defaults/user"));
var guildmember_1 = __importDefault(require("./defaults/guildmember"));
var message_1 = __importDefault(require("./defaults/message"));
var messagerReaction_1 = __importDefault(require("./defaults/messagerReaction"));
var CustomMocks = /** @class */ (function () {
    function CustomMocks() {
    }
    /**
     * Returns a guild mock based off of given options.
     *
     * @returns {Discord.Guild}
     */
    CustomMocks.getGuild = function (options, client) {
        return new discord_js_1.default.Guild(client !== null && client !== void 0 ? client : BaseMocks_1.default.getClient(), __assign(__assign({}, guild_1.default), options));
    };
    /**
     * Returns a channel mock based off of given options.
     *
     * @returns {Discord.Channel}
     */
    CustomMocks.getChannel = function (options, client) {
        return new discord_js_1.default.Channel(client !== null && client !== void 0 ? client : BaseMocks_1.default.getClient(), __assign(__assign({}, channel_1.default), options));
    };
    /**
     * Returns a guild channel based off of given options.
     *
     * @returns {Discord.GuildChannel}
     */
    CustomMocks.getGuildChannel = function (options, guild) {
        return new discord_js_1.default.GuildChannel(guild !== null && guild !== void 0 ? guild : BaseMocks_1.default.getGuild(), __assign(__assign({}, guildchannel_1.default), options));
    };
    /**
     * Returns a text channel based off of given options.
     *
     * @returns {Discord.TextChannel}
     */
    CustomMocks.getTextChannel = function (options, guild) {
        return new discord_js_1.default.TextChannel(guild !== null && guild !== void 0 ? guild : BaseMocks_1.default.getGuild(), __assign(__assign({}, textchannel_1.default), options));
    };
    /**
     * Returns a user based off of given options.
     *
     * @returns {Discord.User}
     */
    CustomMocks.getUser = function (options, client) {
        return new discord_js_1.default.User(client !== null && client !== void 0 ? client : BaseMocks_1.default.getClient(), __assign(__assign({}, user_1.default), options));
    };
    /**
     * Returns a guild member based off of given options.
     *
     * @returns {Discord.GuildMember}
     */
    CustomMocks.getGuildMember = function (options, extras) {
        var _a, _b;
        return new discord_js_1.default.GuildMember((_a = extras === null || extras === void 0 ? void 0 : extras.client) !== null && _a !== void 0 ? _a : BaseMocks_1.default.getClient(), __assign(__assign({}, guildmember_1.default), options), (_b = extras === null || extras === void 0 ? void 0 : extras.guild) !== null && _b !== void 0 ? _b : BaseMocks_1.default.getGuild());
    };
    /**
     * Returns a message based off of given options.
     *
     * @returns {Discord.Message}
     */
    CustomMocks.getMessage = function (options, extras) {
        var _a;
        var message = new discord_js_1.default.Message((_a = extras === null || extras === void 0 ? void 0 : extras.client) !== null && _a !== void 0 ? _a : BaseMocks_1.default.getClient(), __assign(__assign({}, message_1.default), options));
        Object.defineProperty(message, 'channel', {
            get: function () { var _a; return (_a = extras === null || extras === void 0 ? void 0 : extras.channel) !== null && _a !== void 0 ? _a : BaseMocks_1.default.getTextChannel(); }
        });
        return message;
    };
    /**
     * Returns a message reaction based off of given options.
     *
     * @returns {Discord.MessageReaction}
     */
    CustomMocks.getMessageReaction = function (options, extras) {
        var _a, _b;
        return new discord_js_1.default.MessageReaction((_a = extras === null || extras === void 0 ? void 0 : extras.client) !== null && _a !== void 0 ? _a : BaseMocks_1.default.getClient(), __assign(__assign({}, messagerReaction_1.default), options), (_b = extras === null || extras === void 0 ? void 0 : extras.message) !== null && _b !== void 0 ? _b : BaseMocks_1.default.getMessage());
    };
    return CustomMocks;
}());
exports.default = CustomMocks;
