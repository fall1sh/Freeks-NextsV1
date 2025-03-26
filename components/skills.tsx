"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skilss } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import BurstBload2 from "./burst-bload-2";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [hoverIndex, setHoverIndex] = useState(-1);

  // Split skills into two rows
  const row1 = skilss.slice(0, Math.ceil(skilss.length / 2));
  const row2 = skilss.slice(Math.ceil(skilss.length / 2));

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] w-full px-4 scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <div className="bg-emerald-400 absolute bottom-[-rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#183D3D]"></div>

      <div className="flex justify-center">
        <SectionHeading>🎯 Specialized Skills</SectionHeading>
        <BurstBload2 />
      </div>

      {/* Container with fixed width */}
      <div className="w-full mx-auto">
        {/* First Row (scrolls left) */}
        <div className="row-container mb-4">
          <div className="scrolling-row left">
            {[...row1, ...row1].map((skill, index) => {
              const originalIndex = index % row1.length;
              return (
                <motion.div
                  key={`row1-${originalIndex}-${Math.floor(index/row1.length)}`}
                  onMouseOver={() => setHoverIndex(originalIndex)}
                  onMouseOut={() => setHoverIndex(-1)}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={originalIndex}
                  viewport={{ once: true }}
                  className="skill-box"
                >
                  <div className={`skill-content ${
                    hoverIndex === originalIndex 
                      ? 'dark:hover:shadow-[15px_15px_0_0_#334155] hover:shadow-[15px_15px_0_0_#000000] scale-105' 
                      : ''
                  }`}>
                    <Image
                      src={skill.imgUrl}
                      alt={skill.name || "Skill icon"}
                      width="192"
                      height="192"
                      quality="95"
                      priority={true}
                      className="md:w-16 w-8"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Second Row (scrolls right) */}
        <div className="row-container">
          <div className="scrolling-row right">
            {[...row2, ...row2].map((skill, index) => {
              const originalIndex = index % row2.length;
              return (
                <motion.div
                  key={`row2-${originalIndex}-${Math.floor(index/row2.length)}`}
                  onMouseOver={() => setHoverIndex(originalIndex + row1.length)}
                  onMouseOut={() => setHoverIndex(-1)}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={originalIndex + row1.length}
                  viewport={{ once: true }}
                  className="skill-box"
                >
                  <div className={`skill-content ${
                    hoverIndex === originalIndex + row1.length
                      ? 'dark:hover:shadow-[15px_15px_0_0_#334155] hover:shadow-[15px_15px_0_0_#000000] scale-105' 
                      : ''
                  }`}>
                    <Image
                      src={skill.imgUrl}
                      alt={skill.name || "Skill icon"}
                      width="192"
                      height="192"
                      quality="95"
                      priority={true}
                      className="md:w-16 w-8"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .row-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          max-width: 53rem;
          margin: 0 auto;
        }
        
        .scrolling-row {
          display: flex;
          gap: 1rem;
          width: max-content;
          will-change: transform;
          padding: 0 1rem;
        }
        
        .scrolling-row.left {
          animation: scrollLeft 40s linear infinite;
        }
        
        .scrolling-row.right {
          animation: scrollRight 40s linear infinite;
        }
        
        .skill-box {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
        }
        
        .skill-content {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.375rem;
          background: white;
          padding: 0.75rem;
          box-shadow: 8px 8px 0 0 #000000;
          transition: all 0.3s ease;
        }
        
        .dark .skill-content {
          background: #232D3F;
          box-shadow: 8px 8px 0 0 #334155;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @media (max-width: 640px) {
          .scrolling-row {
            gap: 0.75rem;
          }
          
          .skill-content {
            width: 70px;
            height: 70px;
            padding: 0.5rem;
          }
        }
        
        @media (min-width: 768px) {
          .scrolling-row {
            gap: 1.75rem;
            padding: 0;
          }
          
          .skill-content {
            width: 144px;
            height: 140px;
            padding: 1.25rem;
          }
          
          .scrolling-row.left,
          .scrolling-row.right {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
