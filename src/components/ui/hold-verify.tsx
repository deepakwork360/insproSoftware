"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, ShieldCheck, Zap } from "lucide-react";

interface HoldVerifyProps {
  onVerify: () => void;
  text?: string;
  holdDuration?: number; // in ms
}

export default function HoldVerify({ 
  onVerify, 
  text = "Hold to Authorize Uplink", 
  holdDuration = 2000 
}: HoldVerifyProps) {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const startHolding = () => {
    if (isComplete) return;
    setIsHolding(true);
    startTimeRef.current = Date.now();
    
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / holdDuration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        completeVerification();
      }
    }, 16); // ~60fps
  };

  const stopHolding = () => {
    if (isComplete) return;
    setIsHolding(false);
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const completeVerification = () => {
    setIsComplete(true);
    setIsHolding(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(onVerify, 600); // Small delay to show completion state
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-4">
      <div className="relative group select-none touch-none">
        {/* Animated Rings */}
        <AnimatePresence>
          {isHolding && (
            <>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.2 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary blur-xl"
              />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.4 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                className="absolute inset-0 rounded-full border border-primary/50"
              />
            </>
          )}
        </AnimatePresence>

        {/* Circular Progress SVG */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="58"
            className="stroke-muted/10 fill-none"
            strokeWidth="2"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="58"
            className="stroke-primary fill-none"
            strokeWidth="3"
            strokeDasharray={364} // 2 * PI * r
            strokeDashoffset={364 - (364 * progress) / 100}
            strokeLinecap="round"
          />
        </svg>

        {/* The Action Button */}
        <div 
          onMouseDown={startHolding}
          onMouseUp={stopHolding}
          onMouseLeave={stopHolding}
          onTouchStart={startHolding}
          onTouchEnd={stopHolding}
          className={`absolute inset-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-inner overflow-hidden cursor-pointer ${
            isComplete ? "bg-primary text-white" : isHolding ? "bg-primary/20 text-primary scale-95" : "bg-muted/10 text-foreground/40 hover:bg-muted/20"
          }`}
        >
          {/* Scanning Line */}
          {isHolding && (
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-primary/50 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] z-10"
            />
          )}

          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="complete"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                className="z-20"
              >
                <ShieldCheck size={40} />
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="z-20"
              >
                <Fingerprint size={40} className={isHolding ? "animate-pulse" : ""} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-2 text-center">
        <p className={`text-xs font-poppins uppercase tracking-[0.3em] transition-colors duration-300 ${isHolding ? "text-primary" : "text-foreground/40"}`}>
          {isComplete ? "Access Granted" : isHolding ? "Verifying Identity..." : text}
        </p>
        
        {/* HUD Data Feed */}
        <div className="h-1 overflow-hidden w-40 mx-auto rounded-full bg-muted/10">
           <motion.div 
             animate={isHolding ? { x: ["-100%", "100%"] } : { x: "-100%" }}
             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             className="w-1/2 h-full bg-primary/40"
           />
        </div>
      </div>
    </div>
  );
}
