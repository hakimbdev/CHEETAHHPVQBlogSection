import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-12 lg:gap-24 py-6 lg:py-12 px-4 lg:px-0">
      <div className="flex flex-col items-start gap-16 w-full">
        <div className="flex flex-col items-start gap-8 lg:gap-14 w-full">
          <h2 className="font-['Quicksand',Helvetica] font-bold text-[#e2e4e8] text-2xl lg:text-[32px]">
            Blogs
          </h2>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 w-full">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 lg:w-[100px] lg:h-[100px]">
                  <AvatarImage src="..//avatar-1.png" alt="User avatar" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start justify-center gap-2 lg:gap-4">
                  <h3 className="text-darkmodaltext text-xl lg:text-[32px] font-['Sora',Helvetica] font-normal tracking-[0.60px] leading-6">
                    Hi, Precious
                  </h3>

                  <p className="text-[#8896a9] text-base lg:text-2xl font-['Sora',Helvetica] font-normal tracking-[0.60px] leading-6">
                    Precious30@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 w-full lg:w-auto">
              <Card className="w-full lg:w-[688px] bg-[#ffffff0a] rounded-3xl border border-solid border-[#ffffff33] backdrop-blur-[20.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20.5px)_brightness(100%)] shadow-effect-1">
                <CardContent className="px-4 lg:px-7 py-[3px]">
                  <div className="flex flex-col items-start gap-2 py-4">
                    <h4 className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-lg lg:text-2xl leading-[30px]">
                      About Blogs
                    </h4>

                    <p className="w-full font-['Sora',Helvetica] font-normal text-[#8896a9] text-base leading-[30px]">
                      Stay updated with the latest trends in e-commerce, crypto
                      payments, NFT innovations, and blockchain technology.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
