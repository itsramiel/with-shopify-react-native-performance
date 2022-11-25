"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPerformance = void 0;
const withPerformance_ios_1 = require("./withPerformance.ios");
const withPerformance_android_1 = require("./withPerformance.android");
/** Enable flipper on this application */
const withPerformance = (config) => {
    config = (0, withPerformance_ios_1.withPerformanceIos)(config);
    config = (0, withPerformance_android_1.withPerformanceAndroid)(config);
    return config;
};
exports.withPerformance = withPerformance;
exports.default = exports.withPerformance;
