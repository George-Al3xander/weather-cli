const getArgs = (args: string[]): { [key in string]: string | boolean } => {
    const res = {};
    const rest = args.slice(2);
    rest.forEach((value, index, array) => {
        if (value[0] === "-") {
            const key = value.substring(1);
            const nextVal = array[index + 1];

            if (nextVal && nextVal[0] !== "-") {
                res[key] = nextVal;
            } else {
                res[key] = true;
            }
        }
    });

    return res;
};

export { getArgs };
