"use client";

import {Button} from "antd";
import {useRouter} from "@/lib/navigation";

export const NavBar = () => {
    const router = useRouter();
    const clickHandler = () => {
        router.push("/");
    };

    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-primary" onClick={clickHandler}>Life Property</a>
            </div>
            <div className="flex gap-2">
                <Button size={"large"} type="primary">Add Line</Button>
                <Button size={"large"} type="default">Email</Button>
            </div>
        </div>
    );
};


