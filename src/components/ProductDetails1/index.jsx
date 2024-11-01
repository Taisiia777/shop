import { Heading, Img, Text } from "./..";
import React from "react";

export default function ProductDetails1({
                                            productImage = "images/img_frame_140x100.png",
                                            productName = "Плюшевое оверсайз худи на взрослого",
                                            colorDescription = "Нежно-персиковый",
                                            sizeDescription = "Универсальный RU ",
                                            quantity = "2",
                                            currentPrice = "6 600 ₽",
                                            discount = "–25%",
                                            originalPrice = "8 800 ₽",
                                            ...props
                                        }) {
    const [quantity1, setQuantity1] = React.useState(1);

    return (
        <div
            {...props}
            className={`${props.className} flex sm:flex-col justify-center items-start px-[1.88rem] py-[2.25rem] sm:p-[1.25rem] bg-white flex-1 rounded-[20px]`}
        >
            <div className="flex flex-1 gap-[1.25rem]">
                <Img src={productImage} alt="Product Image" className="h-[8.75rem] w-[30%] rounded-[10px] object-contain" />
                <div className="flex flex-1 flex-col gap-[1.00rem] sm:gap-[1.00rem]">
                    <div className="flex flex-col gap-[0.50rem] sm:gap-[0.50rem]">
                        <Text
                            size="1280_h4"
                            as="p"
                            className="w-[80%] text-[1.13rem] font-normal leading-[2.13rem] text-black sm:w-full sm:text-[0.94rem]"
                        >
                            {productName}
                        </Text>
                        <div className="flex flex-col items-start gap-[0.13rem] sm:gap-[0.13rem]">
                            <div className="flex items-center self-stretch">
                                <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                                <Heading
                                    size="b2_for_mob"
                                    as="p"
                                    className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                >
                                    {colorDescription}
                                </Heading>
                            </div>
                            <Heading
                                size="b2_for_mob"
                                as="p"
                                className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                            >
                                {sizeDescription}
                            </Heading>
                        </div>
                    </div>
                    <Img src="images/img_mage_trash_2.svg" alt="Trash Icon" className="h-[1.00rem] w-[1.00rem]" />
                </div>
            </div>
            <div className="flex w-[24%] items-center justify-center gap-[1.00rem]">
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        setQuantity1((quantity1) => (quantity1 < 1 ? 0 : quantity1 - 1));
                    }}
                    className="w-[18%] cursor-pointer rounded-[10px] bg-deep_orange-50_90 px-[0.38rem] py-[0.75rem] opacity-60"
                >
                    <div className="h-[0.06rem] w-[0.75rem] bg-black" />
                </div>
                <Heading size="1280_button" as="p" className="text-[1.13rem] font-medium text-black sm:text-[0.94rem]">
                    {quantity1}
                </Heading>
                <Img src="images/img_plus.svg" alt="Increment Icon" className="h-[1.75rem] w-[1.75rem] rounded-[10px]" />
            </div>
            <div className="flex flex-wrap items-center gap-[0.63rem]">
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
                    {originalPrice}
                </Heading>
            </div>
        </div>
    );
}

