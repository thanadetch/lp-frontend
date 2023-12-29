"use client";

import {Button, Select, SelectProps} from "antd";
import {usePathname, useRouter} from "@/lib/navigation";
import {useScrollPosition} from "@/app/hooks/useScrollPosition";

interface NavBarProps {
    locale: string;
}

export const NavBar = ({locale}: NavBarProps) => {
    const scrollPosition = useScrollPosition();
    const router = useRouter();
    const pathname = usePathname();

    const clickHandler = () => {
        router.push("/");
    };

    const handleChange = async (value: string) => {
        router.push(pathname, {locale: value});
    };

    const options: SelectProps["options"] = [
        {
            label: "TH",
            value: "th",
        },
        {
            label: "EN",
            value: "en",
        }
    ];

    return (
        <div
            className={`navbar bg-base-100 sticky top-0 z-10 transition-all ease-in-out duration-300 ${scrollPosition > 0 ? "drop-shadow" : ""}`}>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-primary" onClick={clickHandler}>Life Property</a>
            </div>
            <div className="flex gap-2">
                <Button size={"large"} type="primary">Add Line</Button>
                <Button size={"large"} type="default">Email</Button>
                <Select
                    value={locale}
                    bordered={false}
                    size={"large"}
                    onChange={handleChange}
                    options={options}
                />
            </div>
        </div>
    );
};


