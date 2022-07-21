import { ChangeEvent, useEffect, useState } from "react";

const Input = (name: string, initValue: string) => {
    const [value, setValue] = useState(initValue);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log(name, value);
    }, [value]);

    return { name, value, onChange };
};

export default Input;
