import { CityWeather } from "@curium.rocks/openweathermap-client";
import chalk from "chalk";
import emojiFlags from "emoji-flags";
import { emojify } from "node-emoji";

import { formatList, formatWeatherInfo } from "@/helpers/str";

import { cliMessages } from "@/constants/consts";

const { bgRed, bgGreen, bgCyan } = chalk;

const printError = (err: Error | string) =>
    console.log(`${bgRed(" ERROR ")} ${err}`);

const printSuccess = (msg: string) =>
    console.log(`${bgGreen(" SUCCESS ")} ${msg}`);

const printHelp = () =>
    console.log(formatList([bgCyan(" HELP "), ...cliMessages]));

const printWeather = (weather: CityWeather) => {
    console.log("\n");
    console.log(emojify(emojiFlags[weather.sys.country.toUpperCase()].unicode));
    printSuccess(`Weather for ${weather.name}`);
    console.log(formatWeatherInfo(weather));
    console.log("\n");
};

export { printError, printSuccess, printHelp, printWeather };
