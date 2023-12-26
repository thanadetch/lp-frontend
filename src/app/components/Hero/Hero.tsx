"use client";
import {SearchProperty} from "@/app/components/SearchProperty/SearchProperty";
import {Card, Tabs, TabsProps} from "antd";
import React, {useEffect} from "react";

export const Hero = () => {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Buy",
            children: <SearchProperty/>
        },
        {
            key: "2",
            label: "Rent",
            children: <SearchProperty/>
        },
    ];


    return (
        <>

            <div className="hero h-[800px]" style={{backgroundImage: "url(/home-hero-desktop.webp)"}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">Discover the Perfect Property in Bangkok</h1>
                        <p className="mb-5">Find your home, condo, commercial space or investment opportunity with us!
                            Life
                            Property - where Dreams find a Home.</p>
                        <Card className={"max-w-[900px] w-full "} bodyStyle={{padding: "16px", paddingTop: "0"}}>
                            <Tabs defaultActiveKey="1" items={items} size={"large"} centered/>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center p-8 gap-4"}>
                <p className={"max-w-6xl text-2xl text-center"}>
                    Unlock Thailand's Prime Real Estate with Life Property! Your gateway to dream properties -
                    residential
                    or commercial. Tap into our local expertise and vast network for the best deals.
                </p>
                <p className={"max-w-6xl text-2xl font-semibold text-center"}>
                    Let's turn your property dreams into reality!
                </p>
            </div>
        </>
    );
};
