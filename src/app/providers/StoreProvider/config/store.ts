import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { createReducerManager } from './reducerManager'

const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
}

export function createReduxStore(initialState? : StateSchema) {
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })


    //@ts-ignore
    store.reducerManager = reducerManager;

    return store;
}



export const store = configureStore<StateSchema>({
    reducer: rootReducers
})

export type AppDispatch = typeof store.dispatch