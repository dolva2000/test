import Head from "next/head";

import ServicesPart from "../components/ServicesPart";
import AboutParts from "../components/AboutParts";
import ServicesArea from "../components/ServicesArea";
import WorkArea from "../components/WorkArea";
import PricingArea from "../components/PricingArea";
import TeamAera from "../components/TeamArea";
import BlogArea from "../components/BlogArea";
import ContactArea from "../components/ContactArea";

export default function Home() {
  return (
    <>
      <ServicesPart />
      <AboutParts />
      <ServicesArea />
      <WorkArea />
      <PricingArea />
      <TeamAera />
      <BlogArea />

      <ContactArea />
    </>
  );
}
