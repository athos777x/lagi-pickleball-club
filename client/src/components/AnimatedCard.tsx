import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "scale" | "slide" | "fade" | "rotate";
}

/**
 * Animated card component with GSAP hover and entrance effects
 */
export const AnimatedCard = ({
  children,
  className = "",
  animationType = "scale",
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Entrance animation
    gsap.set(card, { opacity: 0, y: 20 });
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Hover animations
    const handleMouseEnter = () => {
      switch (animationType) {
        case "scale":
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        case "slide":
          gsap.to(card, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        case "rotate":
          gsap.to(card, {
            rotationZ: 2,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        default:
          break;
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        x: 0,
        rotationZ: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animationType]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
};
