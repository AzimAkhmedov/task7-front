import { io } from 'socket.io-client'
const SOCKET_SERVER = 'http://localhost:5000/'
// interface IRegistry {
//     close: any[],
//     message: any[]
// }
// export class WS {

//     static instance: any;
//     wsConnect: any | null = null;
//     isWsReady: boolean = false;

//     listenerRegistry: IRegistry = {
//         close: [],
//         message: [],

//     }
//     subscribeClose(handler: any) {
//         this.listenerRegistry.close = [...this.listenerRegistry.close, handler];

//         return () => {
//             this.listenerRegistry.close = this.listenerRegistry.close.filter(h => h !== handler)
//         }

//     }
//     subscribeMessage(handler: any) {
//         this.listenerRegistry.message = [...this.listenerRegistry.message, handler];

//         return () => {
//             this.listenerRegistry.message = this.listenerRegistry.message.filter(h => h !== handler)
//         }

//     }
//     send(message: any) {
//         if (this.wsConnect) {
//             this.wsConnect.send(message)
//         }
//     }
//     close() {
//         if (this.wsConnect) {
//             this.wsConnect.close()
//             this.wsConnect = null
//             this.isWsReady = false

//         }

//     }
//     constructor() {
//         this.connect()
//     }
//     waitSocketIsReady(tempWS: any) {
//         setTimeout(() => {
//             if (tempWS) {
//                 this.wsConnect = tempWS
//                 this.isWsReady = true
//             }
//             else {
//                 this.waitSocketIsReady(tempWS)
//             }
//         }, 5)

//     }
//     connect(roomcode?: number) {
//         const tempWS = io(SOCKET_SERVER);
//         tempWS.connect()
//         tempWS.on('connect', () => {
//             console.log(tempWS);
//             tempWS.emit('send-message', "Hi test")
//             tempWS.emit('data', "DQDQWDQWEDQWSDQSDQWEDQWDE")
//         })
//         tempWS.on('close',
//             (ev) => {
//                 console.log('Hi test');

//                 this.listenerRegistry.close.forEach((l: any) => l(ev))
//             })

//         tempWS.on('message', (ev) => {
//             this.listenerRegistry.message.forEach((l: any) => l(ev))
//         })
//         this.waitSocketIsReady(tempWS);

//         // }
//     }
//     static getInstance() {
//         if (!WS.instance) {
//             WS.instance = new WS()
//         }

//         return WS.instance
//     }

// }
export const connectSocketServer = () => {
    const socket = io(SOCKET_SERVER)

    return socket
}

export const connectRoomHandler = (socket: any, room: number) => {
    socket.emit('connectroom', room)
}
export const dateHandler = (socket: any, payload: any) => {

    socket.emit('data', { type: 'ping' })
}
export const stepHandler = (field: number) => {

}
export const handleFirstStep = (field: number) => {

}
export const handleClear = () => {

}
export const handleGetBoardState = () => {

}