import { promises } from "fs";
import { homedir } from "os";
import { join } from "path";

const filePath = join(homedir(), "weather-data.json");

const isExist = async (path: string) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};

const getKeyValue = async (key: string) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        return JSON.parse(file.toString())[key];
    }
    return undefined;
};

const saveKeyValue = async <T extends unknown>(key: string, value: T) => {
    let data = {};

    data[key] = value;

    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file.toString());
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

export { saveKeyValue, getKeyValue };
