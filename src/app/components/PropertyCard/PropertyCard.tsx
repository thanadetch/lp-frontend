"use client";

import {Property} from "@/app/types/Property";
import {Card, Carousel, Divider, Flex, Skeleton, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";
import {FaBath, FaBed, FaHouse} from "react-icons/fa6";
import {getImageUrl} from "@/app/utils/imageUtils";

const {Title, Paragraph, Text, Link} = Typography;

interface PropertyCardProps {
    item?: Property;
    skeleton?: boolean;
}

export const PropertyCard = ({item, skeleton}: PropertyCardProps) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Card
            className={"w-full overflow-hidden"}
            bodyStyle={{
                background: "rgba(17, 24, 39, 0.01)"
            }}
            cover={skeleton ?
                <Skeleton.Image active className={"!w-full !h-[240px] !md:h-[310px] !rounded-none"}/> : (
                    <Carousel className={"h-[240px] md:h-[310px]"} afterChange={onChange}>
                        {item?.images?.data?.map((image, index) => (
                            <div key={image.id} className={"relative w-full h-[240px] md:h-[310px]"}>
                                <Image src={getImageUrl(image.attributes?.url)} alt={"logo"} fill
                                       className={"object-cover"}/>
                            </div>
                        ))}
                    </Carousel>
                )}
        >
            <Typography>
                {skeleton ? <Skeleton active paragraph={{rows: 0}}/> :
                    <Title level={3}>
                        {item?.name}
                    </Title>}
                <Divider className={"!my-4"}/>
                {skeleton ? <Skeleton active paragraph={{rows: 1}}/> :
                    <div className={"flex flex-col gap-2"}>
                        <div className={"text-base"}>
                            {item?.subCode.data.attributes.name}
                        </div>
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
