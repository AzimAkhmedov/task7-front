// import { useEffect, useState, useCallback } from "react";
// // import { useWS } from "./ws";

// export function useBoard() {
//     const { ws, isWs } = useWS()
//     const [map, setMap] = useState([])
//     const [steps, setSteps] = useState<any>([])
//     const [gameStatus, setGameStatus] = useState<string>('')
//     useEffect(() => {
//         let unsubscribe;
//         function listenMessage(ev: any) {
//             try {
//                 const parsedData = JSON.parse(ev.data)
//                 console.log(parsedData);

//                 if (parsedData.payload?.map) {
//                     parsedData.payload.map.pop()
//                     console.log(parsedData.payload.map);

//                     setMap(parsedData.payload.map)
//                 }
//                 if (parsedData.payload?.steps) {
//                     setSteps(() => parsedData.payload.steps)
//                 }
//                 if (parsedData.payload?.status) {
//                     setGameStatus(parsedData.payload.status)
//                 }
//             } catch (e) {
//                 console.log(e);
//             }
//         }

//         if (ws && isWs) {
//             unsubscribe = ws.subscribeMessage(listenMessage)
//             ws.send(JSON.stringify({ type: "getBoardState" }))
//         }
//         return unsubscribe
//     }, [ws, isWs, setMap, setSteps, setGameStatus])

//     const handleClear = useCallback(() => {
//         if (ws && isWs) {
//             ws.send(JSON.stringify({ type: "clearBoard" }))
//         }
//     }, [ws, isWs,])

//     const handleStep = useCallback((field: number) => {
//         if (ws && isWs) {
//             if (steps.length === 0) {
//                 ws.send(JSON.stringify({ type: "firstStep", payload: { field } }))
//             } else {

//                 ws.send(JSON.stringify({ type: "step", payload: { field, prevStepId: steps.slice(-1)[0].id } }))
//             }
//         }
//     }, [ws, isWs, steps])

//     return { map, steps, handleClear, handleStep, gameStatus }
// }
export const a = ''
