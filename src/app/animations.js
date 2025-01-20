import {motion} from 'framer-motion'

export function FadeUp({children, delay = 0.25}) {
  return (
    <motion.div
      initial={{opacity: 0, translateY: 50}}
      animate={{opacity: 1, translateY: 0}}
      transition={{delay: delay, duration: 0.8, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  );
}

export function Fade({children, delay = 0.25}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: delay, duration: 0.8}}
    >
      {children}
    </motion.div>
  );
}