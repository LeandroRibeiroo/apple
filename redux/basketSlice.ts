import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface BasketState {
  items: ProductProps[]
}

const initialState: BasketState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<ProductProps>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: ProductProps) => item._id === action.payload.id
      )

      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.log(
          `Can't remove product (id: ${action.payload.id}) as it's not on basket!`
        )
      }

      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: RootState) => state.basket.items

export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item: ProductProps) => item._id === id)

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: ProductProps) => (total += item.price),
    0
  )

export default basketSlice.reducer
