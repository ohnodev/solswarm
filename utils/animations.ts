import { Variants } from 'framer-motion';

// Fade-in animation from different directions
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

// Container for staggered animations
export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

// Floating animation
export const float: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
};

// Subtle pulse animation
export const pulse: Variants = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
};

// Rotate animation
export const rotate: Variants = {
  hidden: {
    rotate: -10,
    scale: 0.95,
    opacity: 0
  },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }
  }
};

// Staggered text animation
export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay
      }
    }
  };
};

// Scale animation
export const scale: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Zoom in animation
export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut'
      }
    }
  };
};

// Slide in animation
export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut'
      }
    }
  };
};

// Draw SVG animation
export const draw = (delay: number = 0): Variants => {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
        delay
      }
    }
  };
};

// Bounce animation
export const bounce: Variants = {
  initial: { 
    y: 0 
  },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
};