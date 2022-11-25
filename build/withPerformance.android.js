"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPerformanceAndroid = void 0;
const config_plugins_1 = require("expo/config-plugins");
const IMPORT = "import com.shopify.reactnativeperformance.ReactNativePerformance;";
const INITIALIZATION = "  	ReactNativePerformance.onAppStarted();";
const HINT = "public void onCreate() {";
function withPerformanceAndroid(config) {
    return (0, config_plugins_1.withMainApplication)(config, (config) => {
        let modifiedContents = config.modResults.contents;
        const lines = modifiedContents.split("\n");
        if (!modifiedContents.includes(IMPORT)) {
            lines.splice(1, 0, IMPORT);
        }
        if (!modifiedContents.includes(INITIALIZATION)) {
            const index = lines.findIndex((line) => line.includes(HINT));
            lines.splice(index + 1, 0, INITIALIZATION);
        }
        modifiedContents = lines.join("\n");
        config.modResults.contents = modifiedContents;
        return config;
    });
}
exports.withPerformanceAndroid = withPerformanceAndroid;
