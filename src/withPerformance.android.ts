import { ExpoConfig } from "expo/config";
import { withMainApplication } from "expo/config-plugins";

const IMPORT =
  "import com.shopify.reactnativeperformance.ReactNativePerformance;";
const INITIALIZATION = "  	ReactNativePerformance.onAppStarted();";

const HINT = "public void onCreate() {";

export function withPerformanceAndroid(config: ExpoConfig): ExpoConfig {
  return withMainApplication(config, (config) => {
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
