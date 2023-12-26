import {useTranslations} from "next-intl";
import {PropertyCard} from "@/app/components/PropertyCard/PropertyCard";
import {ConfigProvider} from "antd";
import theme from "@/theme/themeConfig";
import {Hero} from "@/app/components/Hero/Hero";

export default function Home() {
    return (
        <main>
            <Hero/>
        </main>
    );
}
