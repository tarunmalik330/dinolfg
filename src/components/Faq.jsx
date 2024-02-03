import React, { useState } from "react";
import { UpArrowsvg } from "./IconImg";
import { LowerArrowsvg } from "./IconImg";
import FaqLayer from "../assets/images/web.p/FaqLayer.webp";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
    },
  ];
  return (
    <>
      <div
        id="Faq"
        className="xl:pt-[290px] lg:pt-[200px] md:pt-[167px] sm:pt-[150px] pt-[110px] mb-[40px] sm:mb-[61px] relative"
      >
        <img
          src={FaqLayer}
          alt="FaqLayer"
          className=" absolute top-0 left-0 right-0 w-full"
        />
        <h4
          className="ff_chewy text-[#fff] sm:text-[64px] text-[50px] font-normal leading-[131%] text-center"
          data-aos="zoom-in-left"
        >
          FAQs
        </h4>
      </div>
      <div className="container xl:max-w-[1136px] mx-auto lg:px-3 px-6">
        <div className="flex justify-center items-center">
          <div className="accordion" data-aos="zoom-in-left">
            {accordionData.map((item, index) => (
              <div
                className="accordion-item sm:mb-[26px] mb-[17px]"
                key={index}
              >
                <div
                  className="flex justify-between items-center accordion-title"
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className={`${
                      openAccordion === index
                        ? "rounded-tl-[40.5px] rounded-tr-[40.5px]"
                        : "rounded-[40.5px] "
                    } ff_Balsamiq text-[#fff] text-[16px] sm:text-[20px] font-bold leading-[116%]`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`${
                      openAccordion === index ? "rotate-[180deg]" : ""
                    } transition-all duration-500 ease-linear `}
                  >
                    <LowerArrowsvg />
                  </div>
                </div>
                <div
                  className={`accordion-content ${
                    openAccordion === index ? "open" : ""
                  } ff_Balsamiq text-[16px] text-[#fff] font-normal `}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
