import {combineReducers, ReducersMapObject, Reducer, UnknownAction } from "@reduxjs/toolkit"
import { ReducerManager, redusersKeysType, StateSchema } from "./stateSchema"

export function createReducerManager(initialReducers:  ReducersMapObject<StateSchema>): ReducerManager {

  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: Array<redusersKeysType> = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      
      return combinedReducer(state, action);
    },

    add: (key: redusersKeysType, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: redusersKeysType) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
      console.log('remove', reducers)
    }
  }
}

