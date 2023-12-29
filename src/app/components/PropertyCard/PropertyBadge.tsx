import {FaBed} from "react-icons/fa6";
import React from "react";


interface PropertyBadgeProps {
    icon?: React.ReactNode;
    label: string;
}

export const PropertyBadge = ({icon, label}: PropertyBadgeProps) => {
    return (
        <div className={"flex flex-row gap-2 items-center"}>
            {icon}
            <div>
                {label}
            </div>
        </div>
    );
};
