"use client"

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Home, FolderOpenDot, BriefcaseBusiness, NotebookPen, Mail } from 'lucide-react'
import "./Dock.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Dock = ({
  position = "bottom",
  collapsible = false,
  responsive = "bottom",
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);
  const dockItems = [Home, FolderOpenDot, BriefcaseBusiness, NotebookPen, Mail];
  const dockItemsTooltip = ["Home", "Projects", "Experience", "Blogs", "Contact"];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition(); // Initial update

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = () => {
    const flexDirection =
      currentPosition === "left" || currentPosition === "right"
        ? "column"
        : "row";
    return { flexDirection };
  };

  const scaleSpring = (index) => {
    const translateValue = (() => {
      if (hoverIndex === index) {
        switch (currentPosition) {
          case "left":
            return "translateX(1px) translateY(0px)";
          case "right":
            return "translateX(-1px) translateY(0px)";
          case "top":
            return "translateX(0px) translateY(1px)";
          case "bottom":
            return "translateX(0px) translateY(-1px)";
          default:
            return "translateX(0px) translateY(0px)";
        }
      } else {
        return "translateX(0px) translateY(0px)";
      }
    })();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform:
        hoverIndex === index
          ? `scale(1) ${translateValue}`
          : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
            ? `scale(1) translateX(0px) translateY(0px)`
            : `scale(1) translateX(0px) translateY(0px)`,
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container  ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div
        className="dock"
        style={{ ...getDockStyle(), ...visibilitySpring }}
      >
        {dockItems.map((item, index) => {
          let IconComponent = item;
          return (
            <div key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <animated.div
                      className="dock-item group"
                      style={scaleSpring(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <IconComponent className={'text-gray-500 group-hover:text-gray-100 transition-all duration-300'} />
                    </animated.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{dockItemsTooltip[index]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        })}
      </animated.div >
    </div >
  );
};

export default Dock;
