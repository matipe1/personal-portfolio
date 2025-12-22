import { useEffect, useState } from "react";

const keyName = "theme-dark";

export const useToggle = (initialToggleValue = false) => {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(keyName);
        if (stored === "false") return false;
        if (stored === "true") return true;
        return initialToggleValue;
    });

    useEffect(()=> {
        if (value) document.documentElement.classList.add("dark");
    }, [value]);

    const toggle = () => {
        if (!value) {
            setValue(true);
            localStorage.setItem(keyName, "true");
            document.documentElement.classList.add("dark");
        } else {
            setValue(false);
            localStorage.setItem(keyName, "false");
            document.documentElement.classList.remove("dark");
        }
    };

    return [value, toggle] as const;
}