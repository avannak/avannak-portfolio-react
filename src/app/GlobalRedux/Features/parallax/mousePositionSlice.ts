import { createSlice } from '@reduxjs/toolkit'

export interface MousePositionState {
  x: number
  y: number
}

const initialState: MousePositionState = {
  x: 0,
  y: 0
}

const mousePositionSlice = createSlice({
  name: 'mousePosition',
  initialState,
  reducers: {
    setMousePosition: (state, action) => {
      state.x = action.payload.x
      state.y = action.payload.y
    }
  }
})

export const { setMousePosition } = mousePositionSlice.actions

export default mousePositionSlice.reducer