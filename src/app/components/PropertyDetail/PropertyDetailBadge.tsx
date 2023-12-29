import React from "react";

interface PropertyDetailBadgeProps {
    icon?: React.ReactNode;
    label: string;
}

export const PropertyDetailBadge = ({icon, label}: PropertyDetailBadgeProps) => {
    return (
        <div className={"badge badge-outline p-4 flex flex-row items-center gap-2"}>
            {icon}
            {label}
        </div>
    );
};
