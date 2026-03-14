import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered animations using GSAP
 * Handles cleanup on unmount
 */
export const useScrollTriggerAnimation = (
  selector: string,
  animation: (element: HTMLElement) => gsap.core.Tween | gsap.core.Timeline
) => {
  const triggerRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    elements.forEach((element) => {
      triggerRef.current = animation(element as HTMLElement);
    });

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, animation]);
};

/**
 * Fade in and slide up animation
 */
export const fadeInSlideUp = (element: HTMLElement, delay = 0) => {
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  });
};

/**
 * Fade in and slide from left
 */
export const fadeInSlideLeft = (element: HTMLElement, delay = 0) => {
  gsap.set(element, { opacity: 0, x: -50 });
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  });
};

/**
 * Fade in and slide from right
 */
export const fadeInSlideRight = (element: HTMLElement, delay = 0) => {
  gsap.set(element, { opacity: 0, x: 50 });
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  });
};

/**
 * Scale and fade in animation
 */
export const scaleInFade = (element: HTMLElement, delay = 0) => {
  gsap.set(element, { opacity: 0, scale: 0.8 });
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    scale: 1,
    duration: 0.8,
    delay,
    ease: 'back.out(1.5)',
  });
};

/**
 * Staggered animation for multiple elements
 */
export const staggerAnimation = (
  selector: string,
  animationFn: (element: HTMLElement, index: number) => gsap.core.Tween,
  staggerDelay = 0.1
) => {
  const elements = document.querySelectorAll(selector);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  elements.forEach((element, index) => {
    timeline.add(animationFn(element as HTMLElement, index), index * staggerDelay);
  });

  return timeline;
};

/**
 * Parallax scroll effect
 */
export const parallaxEffect = (element: HTMLElement, speed = 0.5) => {
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      markers: false,
    },
    y: (index, target) => {
      const height = gsap.getProperty(target, 'offsetHeight');
      return (typeof height === 'number' ? height : 0) * speed;
    },
    ease: 'none',
  });
};

/**
 * Number counter animation
 */
export const countUpAnimation = (
  element: HTMLElement,
  endValue: number,
  duration = 2
) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
  });
};
