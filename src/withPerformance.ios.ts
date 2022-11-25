import { ExpoConfig } from "expo/config";
import { withAppDelegate } from "expo/config-plugins";

const IMPORT = "#import <ReactNativePerformance/ReactNativePerformance.h>";
const INITIALIZATION = "  [ReactNativePerformance onAppStarted];";

const HINT =
  "- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions";

export function withPerformanceIos(config: ExpoConfig): ExpoConfig {
  return withAppDelegate(config, (config) => {
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
