"use client";

import { useRef, useCallback } from "react";

interface UseSwipeProps {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    threshold?: number;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeProps) {
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchEnd = useCallback(() => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > threshold;
        const isRightSwipe = distance < -threshold;

        if (isLeftSwipe) {
            onSwipeLeft();
        } else if (isRightSwipe) {
            onSwipeRight();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    }, [onSwipeLeft, onSwipeRight, threshold]);

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    };
}
