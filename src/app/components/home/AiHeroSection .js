"use client";

import Head from "next/head";
import Link from "next/link";
import MyImage from "../MyImage";
import RoundButton from "../common/RoundButton";
import Text from "../common/Text";

export default function AiHeroSection() {
  return (
    <>
      <Head>
        <title>Ameya IT Solutions – AI Hero Section</title>
        <meta name="description" content="Smart AI solutions, SAP, automation and digital transformation." />
      </Head>

      <section>
        <div className="w-full pt-10 pb-20 relative overflow-hidden">
          <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
            <div className="px-6 md:px-12 lg:px-24 flex flex-col gap-y-10 md:gap-y-8 lg:flex-row lg:justify-between items-center">
              <div className="w-full lg:w-[45%] order-2 md:order-1 flex flex-col gap-6 md:text-center lg:text-left">
                <h1 className="text-4xl md:text-4xl font-semibold text-primary-text">
                  Build your
                  <br />
                  <span className="text-3xl font-normal text-[#334EAC] block pt-3">
                    future with Ameya IT Solutions
                  </span>
                </h1>

                <Text variant="p">
                 We transform bold ideas into smart, tech-driven solutions using AI and modern applications. From automation to immersive digital experiences, we fuse creativity with technology to empower growth and accelerate success.
                </Text>

                <Link href="/about">
                  <RoundButton text="More About Us" />
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 flex justify-end order-1 md:order-2 items-end w-full">
                <MyImage
                  src="/images/section-hero.png"
                  alt="Hero Image"
                  width={1000}
                  height={800}
                  className="rounded-lg"
                  priority={true}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
