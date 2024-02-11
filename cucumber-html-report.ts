const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs", // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    displayDuration: true,
    pageTitle: 'All in one report',
    metadata: {
        browser: {
            name: "chrome",
            version: "121.0.6167.140",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },

    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Custom project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "Feb 04th 2024, 02:31 PM EST" },
            { label: "Execution End Time", value: "Feb 04th 2024, 02:56 PM EST" },
        ],
    },
});