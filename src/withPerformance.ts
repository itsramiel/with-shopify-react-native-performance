import { ConfigPlugin } from "expo/config-plugins";

import { withPerformanceIos } from "./withPerformance.ios";
import { withPerformanceAndroid } from "./withPerformance.android";

/** Enable flipper on this application */
export const withPerformance: ConfigPlugin = (config) => {
  config = withPerformanceIos(config);
  config = withPerformanceAndroid(config);

  return config;
};

export default withPerformance;
