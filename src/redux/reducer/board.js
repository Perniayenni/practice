import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/board'

  const boards = [
    {
        name: 'tablero de yenni',
        number: 1,
        cars:[
            {number: 1, description: 'esto es uno' },
            {number: 2, description: 'esto es dos' }
        ]
    },
    {
        name: 'tablero de yenni 2',
        number: 2,
        cars:[
            {number: 1, description: 'esto es uno'},
            {number: 2, description: 'esto es dos'}
        ]
    }
  ]
const INITIAL_STATE = {
  boards: [],
}

export const boardReducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(actions.fetchBoards.pending, (state, { meta: { arg: { deleteItems } } }) => {
      
    })
    .addCase(actions.fetchBoards.fulfilled, (state, action) => {
     
    })
    .addCase(actions.fetchBoards.rejected, (state, action) => {
      
    })
)

export default boardReducer
