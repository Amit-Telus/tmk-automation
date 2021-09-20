/* eslint-disable */
const path = require("path");
const config = require("./test/config/");
console.log("CONFIG", config);
const GLOBALS_PATH = "./test/globals.js";
const REPORT_PATH = ".test/reports/";
const SPEC_PATH = ["./test/specs/"];
const PAGE_OBJECTS_PATH = "./test/page-objects";
const NIGHTWATCH_VISUAL_TESTING = process.env.visualTesting || "disabled";
const NIGHTWATCH_VISUAL_SELECTOR = "#app";
const NIGHTWATCH_VISUAL_TOLERANCE = 2.5;
const accessibilityTesting = process.env.accessibilityTesting || true;
const visualTesting = process.env.visualTesting || true;

module.exports = {
  src_folders: SPEC_PATH,
  globals_path: GLOBALS_PATH,
  output_folder: REPORT_PATH,
  page_objects_path: PAGE_OBJECTS_PATH,
  webdriver: {
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515,
  },
  test_settings: {
    default: {
      launch_url: config.baseUrl,
      selenium_port: 9515,
      selenium_host: "127.0.0.1",
      default_path_prefix: "",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--no-sandbox", "window-size=1280,3000"],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        accessibilityTesting: accessibilityTesting,
        waitForConditionTimeout: 40000,
        retryAssertionTimeout: 10000,
      },
      nightwatch_visual: {
        visualTesting: NIGHTWATCH_VISUAL_TESTING,
        defaultSelector: NIGHTWATCH_VISUAL_SELECTOR,
        defaultTolerance: NIGHTWATCH_VISUAL_TOLERANCE,
      },
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
    },
    headless: {
      desiredCapabilities: {
        chromeOptions: {
          args: ["no-sandbox", "headless", "window-size=1280,800"],
        },
      },
    },
  },
};
