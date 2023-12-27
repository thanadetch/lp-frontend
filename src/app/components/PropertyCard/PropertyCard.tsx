"use client";

import {Property} from "@/app/types/Property";
import {Card, Carousel, Divider, Flex, Skeleton, Typography} from "antd";
import Image from "next/image";
import React from "react";
import {FaBath, FaBed, FaHouse} from "react-icons/fa6";
import {useRouter} from "@/lib/navigation";
import {IoLocationOutline} from "react-icons/io5";

const {Title, Paragraph, Text, Link} = Typography;

interface PropertyCardProps {
    id?: number;
    item?: Property;
    skeleton?: boolean;
}

export const PropertyCard = ({id, item, skeleton}: PropertyCardProps) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(`/property/${id}`);
    };

    return (
        <Card

            className={"w-full overflow-hidden shadow-md"}
            bodyStyle={{
                background: "rgba(17, 24, 39, 0.01)"
            }}
            cover={skeleton ?
                <Skeleton.Image active className={"!w-full !h-[240px] !md:h-[310px] !rounded-none"}/> : (
                    <Carousel className={"h-[240px] md:h-[310px]"}>
                        {item?.images?.data?.map((image, index) => (
                            <div onClick={clickHandler} key={image.id}
                                 className={"relative w-full h-[240px] md:h-[310px] hover:cursor-pointer"}>
                                <Image src={image.attributes?.url} alt={"logo"} fill
                                       placeholder={"blur"}
                                       sizes={"100%"}
                                       blurDataURL={image.attributes.formats?.thumbnail?.url}
                                       className={"object-cover"}/>
                            </div>
                        ))}
                    </Carousel>
                )}
        >
            <Typography onClick={clickHandler} className={" hover:cursor-pointer"}>
                {skeleton ? <Skeleton active paragraph={{rows: 0}}/> :
                    <Title level={3}>
                        {item?.name}
                    </Title>}
                <Divider className={"!my-4"}/>
                {skeleton ? <Skeleton active paragraph={{rows: 1}}/> :
                    <div className={"flex flex-col gap-2"}>
                        <Flex align={"center"} gap={"small"} className={"text-base"}>
                            <IoLocationOutline/>
                            {item?.subCode.data.attributes.name}
                        </Flex>
                        <div className={"text-lg font-semibold"}>
                            ฿{item?.price?.toLocaleString("en")}/month
                        </div>
                    </div>
                }

                <Divider className={"!my-4 "}/>
                {skeleton ? <Skeleton active paragraph={{rows: 1}}/> :
                    <div className={"grid grid-cols-2 gap-2"}>
                        <Flex align={"center"} gap={"small"}>
                            <FaBed/>
                            {item?.bed} Bedroom
                        </Flex>
                        <Flex align={"center"} gap={"small"}>
                            <FaBath/>
                            {item?.bath} Bathroom
                        </Flex>
                        <Flex align={"center"} gap={"small"}>
                            <FaHouse/>
                            {item?.sqm} sq.m
                        </Flex>
                    </div>
                }
            </Typography>
        </Card>
    );
};
