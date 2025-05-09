/**
 * This module loads Framer Motion features dynamically for better performance.
 * It helps reduce the initial bundle size by code-splitting the animation features.
 */

import { domAnimation, LazyMotion } from 'framer-motion';

// Export domAnimation as the default feature set for LazyMotion
export default domAnimation;