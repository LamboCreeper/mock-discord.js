"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var GUILD_MEMBER_DEFAULTS = {
    user: user_1.default,
    nick: "my name",
    roles: [],
    joined_at: '',
    deaf: false,
    mute: false
};
exports.default = GUILD_MEMBER_DEFAULTS;
