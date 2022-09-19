import * as React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/future/image";

const animation = { duration: 9000, easing: (t: number) => t };

export function SectionsCardBrands() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 7,
      spacing: 30,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <Flex  ref={sliderRef} className="keen-slider">
      <Box  className="keen-slider__slide">
        <Image src="/chevrolet.png" width={177} height={100} alt="" />
      </Box>

      <Box  className="keen-slider__slide">
        <Image src="/fiat.png" width={177} height={100} alt="" />
      </Box>

      <Box  className="keen-slider__slide">
        <Image src="/ford.png" width={177} height={100} alt="" />
      </Box>

      <Box  className="keen-slider__slide">
        <Image src="/honda.png" width={177} height={100} alt="" />
      </Box>

      <Box  className="keen-slider__slide">
        <Image src="/hyundai.png" width={177} height={100} alt="" />
      </Box>

      <Box  className="keen-slider__slide">
        <Image src="/toyota.png" width={177} height={100} alt="" />
      </Box>
      
      <Box  className="keen-slider__slide">
        <Image src="/volkswagen.png" width={177} height={100} alt="" />
      </Box>
    
     
    </Flex>
  );
}
