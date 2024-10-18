import { CityWeather } from "@curium.rocks/openweathermap-client";

import { getWeatherEmojiCode } from "@/services/api.service";

import { weatherUnits } from "@/constants/consts";

const formatList = (strings: string[]): string => strings.join("\n");

const formatWeatherInfo = (data: CityWeather) => {
    const { description, icon } = data.weather[0];
    const {
        main: { temp, humidity, feels_like },
        wind: { speed },
    } = data;
    return formatList([
        `${getWeatherEmojiCode(icon)} ${description}`,
        `Temperature(${weatherUnits["temperature"]}): ${temp} (feels like ${feels_like})`,
        `Humidity(${weatherUnits["humidity"]}): ${humidity}`,
        `Wind speed(${weatherUnits["speed"]}): ${speed}`,
    ]);
};

export { formatList, formatWeatherInfo };
