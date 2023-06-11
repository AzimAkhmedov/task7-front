import { useEffect, useRef, useState } from "react";
export const a = ''
export function useInterval(callback: any, delay: number) {
    const savedCallback = useRef<Function>()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    useEffect(() => {
        function tick() {
            savedCallback.current?.()
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => {
                clearInterval(id)
            }
        } else {
            return () => { }
        }
    })
}