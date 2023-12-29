"use client";

import {Property} from "@/app/types/Property";
import {Card, Carousel, Divider, Flex, Skeleton, Typography} from "antd";
import Image from "next/image";
import React from "react";
import {FaBath, FaBed, FaHouse} from "react-icons/fa6";
import {useRouter} from "@/lib/navigation";
import {IoLocationOutline} from "react-icons/io5";
import styled from "styled-components";
import {PropertyBadge} from "@/app/components/PropertyCard/PropertyBadge";
import {MdOutlinePets} from "react-icons/md";

interface PropertyCardProps {
    id?: number;
    item?: Property;
    loading?: boolean;
}

export const PropertyCard = ({id, item, loading = false}: PropertyCardProps) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(`/property/${id}`);
    };

    return (
        <Card className={"w-full overflow-hidden shadow-md"}
              bodyStyle={{
                  background: "rgba(17, 24, 39, 0.01)"
              }}
              cover={loading ?
                  <Skeleton.Image active className={"!w-full !h-[240px] !rounded-none"}/> : (
                      <Carousel className={"h-[240px]"}>
                          {item?.images?.data?.map((image, index) => (
                              <div onClick={clickHandler} key={image.id}
                                   className={"relative w-full h-[240px] hover:cursor-pointer"}>
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
                <SkeletonWrapper loading={loading} paragraph={{rows: 0}}>
                    <div className={"text-2xl font-semibold"}>
                        {item?.name}
                    </div>
                </SkeletonWrapper>
                <Divider className={"!my-4"}/>
                <SkeletonWrapper loading={loading} paragraph={{rows: 1}}>
                    <div className={"flex flex-col gap-2"}>
                        <Flex align={"center"} gap={"small"} className={"text-base"}>
                            <IoLocationOutline/>
                            {item?.subCode.data.attributes.name}
                        </Flex>
                        <div className={"text-lg font-semibold"}>
                            ฿{item?.rentalPrice?.toLocaleString("en")}/month
                        </div>
                    </div>
                </SkeletonWrapper>

                <Divider className={"!my-4 "}/>
                <SkeletonWrapper loading={loading} paragraph={{rows: 1}}>
                    <div className={"grid grid-cols-2 gap-2"}>
                        <PropertyBadge icon={<FaBed/>} label={`${item?.bed} Bedroom`}/>
                        <PropertyBadge icon={<FaBath/>} label={`${item?.bath} Bathroom`}/>
                        <PropertyBadge icon={<FaHouse/>} label={`${item?.sqm} sq.m`}/>
                        {item?.isPetFriendly && <PropertyBadge icon={<MdOutlinePets/>} label={"Pet friendly"}/>}
                    </div>
                </SkeletonWrapper>
            </Typography>
        </Card>
    );
};

const SkeletonWrapper = styled(Skeleton)`
    .ant-skeleton-paragraph {
        margin: 0 !important;
        margin-top: 20px !important;

        & li {
            margin: 0 !important;

        }
    }
`;
