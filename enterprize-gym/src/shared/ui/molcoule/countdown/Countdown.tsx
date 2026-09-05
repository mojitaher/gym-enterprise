import { useEffect, useRef } from "react";
import Classes from "./Countdown.module.css";

interface CountdownProps {
  expiresIn: number;
  onExpire: () => void;
  label?: string;
}

export default function Countdown({ expiresIn, onExpire, label = "کد تا" }: CountdownProps) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const remainingRef = useRef(expiresIn);
  const elementRef = useRef<HTMLDivElement>(null);

  const updateDisplay = () => {
    if (!elementRef.current) return;
    const minutes = Math.floor(remainingRef.current / 60);
    const seconds = remainingRef.current % 60;
    const formatted = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    elementRef.current.textContent = `${label} ${formatted}`;
  };

  useEffect(() => {
    remainingRef.current = expiresIn;
    updateDisplay();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      remainingRef.current -= 1;
      if (remainingRef.current <= 0) {
        clearInterval(timerRef.current!);
        onExpire();
        return;
      }
      updateDisplay();
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [expiresIn, onExpire, label]);

  return <div className={Classes.countdown} ref={elementRef} />;
}