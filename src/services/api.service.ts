import * as process from "node:process";
import { CityWeather } from "@curium.rocks/openweathermap-client";
import axios from "axios";
import { emojify } from "node-emoji";

import { getKeyValue } from "@/services/storage.service";

import { PROJECT_KEYS, weatherEmojis } from "@/constants/consts";

const getWeather = async (city: string) => {
    const token =
        process.env.TOKEN || (await getKeyValue(PROJECT_KEYS["token"]));
    if (!token) throw new Error("No API token provided! Use -t [API_KEY].");

    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: token,
                lang: "en",
                units: "metric",
            },
        },
    );
    return data as CityWeather;
};

const getWeatherEmojiCode = (icon?: string) => {
    if (icon) {
        const code = icon.substring(0, 2);
        if (weatherEmojis.has(code)) return emojify(weatherEmojis.get(code));
        else return emojify(":earth_americas:");
    } else {
        return emojify(":earth_americas:");
    }
};

export { getWeather, getWeatherEmojiCode };
