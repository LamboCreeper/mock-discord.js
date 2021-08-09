"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var guildmember_1 = __importDefault(require("./guildmember"));
var GUILD_MESSAGE_DEFAULTS = {
    id: "123456123456123456",
    channel_id: "121212121212121212",
    content: "This is a message.",
    author: user_1.default,
    member: guildmember_1.default,
    pinned: false,
    tts: false,
    timestamp: '',
    edited_timestamp: null,
    mention_everyone: false,
    mention_roles: [],
    mentions: [],
    attachments: [],
    embeds: [],
    type: 0
};
exports.default = GUILD_MESSAGE_DEFAULTS;
