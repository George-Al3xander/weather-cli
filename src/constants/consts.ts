const cliMessages = [
    "No parameters: Shows the weather forecast for the default city.",
    "-s [CITY]: Set the city for the weather forecast.",
    "-h: Display help information.",
    "-t [API_KEY]: Save the API token.",
];

const PROJECT_KEYS = {
    token: "token",
    city: "city",
};

const weatherEmojis = new Map([
    ["01", ":sunny:"],
    ["02", ":sun_with_face:"],
    ["03", ":partly_sunny:"],
    ["04", ":cloud:"],
    ["09", ":cloud_with_rain:"],
    ["10", ":rain_cloud:"],
    ["11", ":thunder_cloud_and_rain:"],
    ["13", ":snowflake:"],
    ["50", ":fog:"],
    ["tp", ":thermometer:"],
    ["hd", ":sweat_drops:"],
    ["wd", ":cyclone:"],
]);

const weatherUnits = {
    temperature: "°C",
    humidity: "%",
    speed: "m/s",
};

export { cliMessages, PROJECT_KEYS, weatherEmojis, weatherUnits };
