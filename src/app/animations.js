import {motion} from 'framer-motion'

const style = {
  display: 'flex', 
  justifyContent: 'center', 
  alignContent: 'center', 
  width: 'auto', 
  height: 'auto'
}

export function FadeUp({children, className = "", delay = 0.25}) {
  return (
    <motion.div
      className={className}
      style={className === "" ? style : undefined}
      initial={{opacity: 0, translateY: 50}}
      animate={{opacity: 1, translateY: 0}}
      transition={{delay: delay, duration: 0.8, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  );
}

export function Fade({children, className = "", delay = 0.25}) {
  return (
    <motion.div
      className={className}
      style={className === "" ? style : undefined}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: delay, duration: 0.8}}
    >
      {children}
    </motion.div>
  );
}

export function FadeInOnView({children, className = ""}) {
  return (
    <motion.div 
      className={className}
      style={className === "" ? style : undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.5}}
      variants={{
        visible: {opacity: 1},
        hidden: {opacity: 0}
      }}
    >
      {children}
    </motion.div>
  );
}