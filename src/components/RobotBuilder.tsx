import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RobotBuilder = () => {
  const [buildingComplete, setBuildingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuildingComplete(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Robot */}
      <motion.div
        className="absolute z-20"
        initial={{ x: 200, y: -100, opacity: 0 }}
        animate={
          buildingComplete
            ? { x: 150, y: -120, opacity: 1 }
            : { x: 0, y: -80, opacity: 1 }
        }
        transition={{
          duration: buildingComplete ? 1 : 2,
          delay: buildingComplete ? 0 : 0.5,
        }}
      >
        {/* Robot Head */}
        <motion.div
          className="relative"
          animate={
            buildingComplete
              ? { rotate: [0, 10, -10, 0] }
              : { y: [0, -3, 0] }
          }
          transition={{
            duration: buildingComplete ? 2 : 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-purple-dark rounded-xl relative shadow-glow">
            {/* Eyes */}
            <motion.div
              className="absolute top-5 left-3 w-2.5 h-2.5 bg-white rounded-full"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-5 right-3 w-2.5 h-2.5 bg-white rounded-full"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Antenna */}
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-brand-purple-light"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-purple-light rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 5px hsl(277 100% 75%)",
                    "0 0 15px hsl(277 100% 75%)",
                    "0 0 5px hsl(277 100% 75%)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Visor */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/50 rounded-full" />
          </div>

          {/* Robot Body */}
          <div className="w-20 h-24 bg-gradient-to-br from-brand-purple-dark to-brand-purple rounded-2xl mt-1 relative">
            {/* Core */}
            <motion.div
              className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-purple-light/30"
              animate={{
                boxShadow: [
                  "0 0 10px hsl(277 100% 75% / 0.5)",
                  "0 0 20px hsl(277 100% 75% / 0.8)",
                  "0 0 10px hsl(277 100% 75% / 0.5)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* Working Arm with Welding Tool */}
          {!buildingComplete && (
            <motion.div
              className="absolute top-16 -left-10 w-5 h-14 bg-brand-purple rounded-full origin-top"
              animate={{ rotate: [0, -30, -15, -30, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-purple-light rounded-full" />
              
              {/* Welding Spark Effect */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 via-orange-400 to-transparent" />
              </motion.div>
            </motion.div>
          )}

          {/* Waving Arm (after complete) */}
          {buildingComplete && (
            <motion.div
              className="absolute top-16 -right-10 w-5 h-14 bg-brand-purple rounded-full origin-top"
              animate={{ rotate: [0, 30, 0, 30, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-purple-light rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Welding Sparks */}
      {!buildingComplete &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{ opacity: 0 }}
            animate={{
              x: [0, (Math.random() - 0.5) * 80],
              y: [0, Math.random() * 60],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 0.6 + Math.random() * 0.4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Building Progress Lines */}
      {!buildingComplete && (
        <motion.div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-t from-brand-purple to-transparent"
              style={{
                left: `${30 + i * 5}%`,
                bottom: "40%",
              }}
              initial={{ height: 0 }}
              animate={{ height: [0, 100 + Math.random() * 50, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Energy Waves when complete */}
      {buildingComplete &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-brand-purple rounded-full"
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{
              width: [0, 400, 500],
              height: [0, 400, 500],
              opacity: [1, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Digital Grid Effect */}
      {!buildingComplete && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent"
              style={{
                top: `${40 + i * 3}%`,
                left: "20%",
                right: "20%",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {/* Completion Flash */}
      {buildingComplete && (
        <motion.div
          className="absolute inset-0 bg-brand-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.5, times: [0, 0.3, 1] }}
        />
      )}
    </div>
  );
};

export default RobotBuilder;
