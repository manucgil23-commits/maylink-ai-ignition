import { motion } from "framer-motion";

const AnimatedRobot = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Robot Body */}
      <div className="relative">
        {/* Head */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-purple-dark rounded-2xl relative"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Eyes */}
          <motion.div
            className="absolute top-6 left-4 w-3 h-3 bg-white rounded-full"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-6 right-4 w-3 h-3 bg-white rounded-full"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Antenna */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-brand-purple-light"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-purple-light rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Mouth/Display */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white/50 rounded-full"
            animate={{
              width: [40, 32, 40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Body */}
        <motion.div
          className="w-24 h-28 bg-gradient-to-br from-brand-purple-dark to-brand-purple rounded-3xl mt-2 relative"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          {/* Core Light */}
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px hsl(277 100% 75% / 0.5)",
                "0 0 25px hsl(277 100% 75% / 0.8)",
                "0 0 10px hsl(277 100% 75% / 0.5)",
              ],
              backgroundColor: [
                "hsl(277 100% 75% / 0.3)",
                "hsl(277 100% 75% / 0.6)",
                "hsl(277 100% 75% / 0.3)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Status Lines */}
          <div className="absolute top-16 left-6 space-y-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1 bg-white/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: [0, 40, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Arms */}
        <motion.div
          className="absolute top-24 -left-6 w-6 h-16 bg-brand-purple rounded-full"
          animate={{
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top center" }}
        >
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-purple-light rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-24 -right-6 w-6 h-16 bg-brand-purple rounded-full"
          animate={{
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ transformOrigin: "top center" }}
        >
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-purple-light rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple-light rounded-full"
            style={{
              top: `${50 + Math.random() * 20}%`,
              left: `${50 + Math.random() * 40 - 20}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Working Effect - Sparks */}
      <motion.div
        className="absolute top-10 right-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-purple-light rounded-full"
            style={{
              top: 0,
              left: 0,
              transformOrigin: "0 40px",
              transform: `rotate(${i * 90}deg)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedRobot;
