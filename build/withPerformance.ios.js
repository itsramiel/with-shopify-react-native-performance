"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPerformanceIos = void 0;
const config_plugins_1 = require("expo/config-plugins");
const IMPORT = "#import <ReactNativePerformance/ReactNativePerformance.h>";
const INITIALIZATION = "  [ReactNativePerformance onAppStarted];";
const HINT = "- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions";
function withPerformanceIos(config) {
    return (0, config_plugins_1.withAppDelegate)(config, (config) => {
        let modifiedContents = config.modResults.contents;
        const lines = modifiedContents.split("\n");
        if (!modifiedContents.includes(IMPORT)) {
            lines.splice(1, 0, IMPORT);
        }
        if (!modifiedContents.includes(INITIALIZATION)) {
            const index = lines.findIndex((line) => line === HINT);
            lines.splice(index + 2, 0, INITIALIZATION);
        }
        modifiedContents = lines.join("\n");
        config.modResults.contents = modifiedContents;
        return config;
    });
}
exports.withPerformanceIos = withPerformanceIos;
