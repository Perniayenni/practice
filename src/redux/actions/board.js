import * as api from '../../api/board'
import { createAsyncThunk } from '@reduxjs/toolkit'

const ENTITY_NAME = 'board'

export const fetchBoards = createAsyncThunk(
  `${ENTITY_NAME}/fetchBoards`,
  async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await api.fetchBoards(params)
        return response
    } catch (error) { 
      return error
    }
  }
)

