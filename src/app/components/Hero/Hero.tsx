import React from "react";
import {SearchPropertyTab} from "@/app/components/SearchProperty/SearchPropertyTab";

export const Hero = () => {

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
                        <SearchPropertyTab/>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center p-8 gap-4"}>
                <p className={"max-w-6xl text-2xl text-center"}>
                    Unlock Thailand&apos;s Prime Real Estate with Life Property! Your gateway to dream properties -
                    residential
                    or commercial. Tap into our local expertise and vast network for the best deals.
                </p>
                <p className={"max-w-6xl text-2xl font-semibold text-center"}>
                    Let&apos;s turn your property dreams into reality!
                </p>
            </div>
        </>
    );
};
