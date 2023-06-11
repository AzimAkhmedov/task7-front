import { createSlice } from '@reduxjs/toolkit'
// const slice = createSlice 

const initialState: any = {
    socket: {
        type: "",
        payload: {
            map: [],
            steps: [],
            status: '',
            roomId: 0,
        }
    }
}

const slice = createSlice({
    initialState, reducers: {
        setSocket(state, action) {
            state.socket = action.payload
        },
        setRoomId(state, action) {
            state.roomId = action.payload
        }
    }, name: "Slice"
})

export const { setSocket,setRoomId } = slice.actions
export default slice.reducer