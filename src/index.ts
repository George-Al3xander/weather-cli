#!/usr/bin/env node
import * as process from "node:process";
import axios from "axios";

import { getWeather } from "@/services/api.service";
import {
    printError,
    printHelp,
    printSuccess,
    printWeather,
} from "@/services/log.service";
import { getKeyValue, saveKeyValue } from "@/services/storage.service";

import { getArgs } from "@/helpers/args";

import { PROJECT_KEYS } from "@/constants/consts";

const saveValueToConfig = async (key: string, value: unknown) => {
    try {
        if (typeof value !== "string") throw new Error(`Invalid ${key} type`);

        await saveKeyValue(PROJECT_KEYS[key], value);
        printSuccess(
            `${key[0].toUpperCase()}${key.substring(1)} saved successfully.`,
        );
    } catch (e) {
        printError(e instanceof Error ? e.message : `Failed to save ${key}`);
    }
};

const getForecast = async () => {
    try {
        const city = process.env.CITY || getKeyValue(PROJECT_KEYS["city"]);
        const weather = await getWeather(await city);
        printWeather(weather);
    } catch (e) {
        if (axios.isAxiosError(e)) printError(e.response.data.message);
        else if (e instanceof Error) printError(e.message);
        else printError("Something went wrong.");
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) printHelp();
    if (args.t) return saveValueToConfig("token", args.t);
    if (args.s) return saveValueToConfig("city", args.s);
    return getForecast();
};

initCLI();
