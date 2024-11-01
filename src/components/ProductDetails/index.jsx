import { Text, Heading, Img } from "./..";
import React from "react";

export default function ProductDetails({
                                           prop = "Хит",
                                           currentPrice = "3 300 ₽",
                                           discount = "–25%",
                                           oldPrice = "4 400 ₽",
                                           productDescription = "Комплект для детей и подростков",
                                           colorDescriptionOne = "Нежно-персиковый",
                                           colorDescriptionTwo = "Темно-синий",
                                           ru = "Универсальный RU ",
                                           onClick,
                                           ...props
                                       }) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[1.00rem]`}             onClick={onClick} // Добавляем обработчик клика
        >
            <div className="flex h-[33.75rem] flex-col items-start self-stretch rounded-[20px] bg-[url(/public/images/img_photo_2.png)] bg-cover bg-no-repeat px-[0.88rem] py-[0.63rem] sm:h-auto">
                <div className="flex gap-[0.38rem] self-stretch">
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-white" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                </div>
                <div className="mr-[0.88rem] mt-[0.88rem] flex min-h-[30px] h-[30px] w-[90px] items-center justify-center self-end bg-[url(/public/images/img_group.svg)] bg-cover bg-center bg-no-repeat sm:mr-0 sm:h-auto sm:w-full sm:px-[1.25rem]">
                    <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-white">
                        {prop}
                    </Heading>
                </div>

                <Img
                    src="images/img_sparkles.svg"
                    alt="Sparkles Image"
                    className="mb-[17.75rem] mt-[10.50rem] h-[5.63rem] w-[5.63rem] self-center"
                />
            </div>
            <div className="flex flex-col items-start gap-[0.50rem] self-stretch px-[1.25rem] sm:gap-[0.50rem]">
                <div className="flex flex-wrap items-center gap-[0.63rem] self-stretch">
                    <Heading
                        size="h3_for_price"
                        as="h5"
                        className="text-[1.25rem] font-extrabold tracking-[0.00rem] text-black sm:text-[1.06rem]"
                    >
                        {currentPrice}
                    </Heading>
                    <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">
                        {discount}
                    </Heading>
                    <Heading
                        size="crossed_out_priced"
                        as="p"
                        className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through"
                    >
                        {oldPrice}
                    </Heading>
                </div>
                <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black sm:text-[0.94rem]">
                    {productDescription}
                </Text>
                <div className="flex gap-[0.94rem] self-stretch">
                    <div className="flex w-[52%] gap-[0.63rem]">
                        <div className="flex flex-1 items-center gap-[0.25rem]">
                            <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                            <Text
                                size="1280_b2"
                                as="p"
                                className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                            >
                                {colorDescriptionOne}
                            </Text>
                        </div>
                        <div className="flex w-[40%] items-center gap-[0.13rem]">
                            <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-navy" />
                            <Text
                                size="1280_b2"
                                as="p"
                                className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                            >
                                {colorDescriptionTwo}
                            </Text>
                        </div>
                    </div>
                    <Text size="1280_b2" as="p" className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent">
                        {ru}
                    </Text>
                </div>
            </div>
        </div>
    );
}

