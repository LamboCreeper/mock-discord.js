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
var guildchannel_1 = __importDefault(require("./guildchannel"));
var TEXT_CHANNEL_DEFAULTS = __assign(__assign({}, guildchannel_1.default), { topic: "some-topic", nsfw: false, last_message_id: "123212321232123212", rate_limit_per_user: 0 });
exports.default = TEXT_CHANNEL_DEFAULTS;
