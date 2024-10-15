import { configureStore, Reducer, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { createReducerManager } from './reducerManager'

import { $api } from "shared/api/api"
import { NavigateFunction} from 'react-router-dom'
import { AxiosInstance } from 'axios'


const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
}

interface ThunkExtraArgument {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

interface ThunkOptions {
    extraArgument: ThunkExtraArgument
}

interface GetDefaultMiddlewareOptions {
    thunk?: boolean | ThunkOptions
}

// Интерфейс для расширенного хранилища
interface AppStore extends EnhancedStore<StateSchema> {
    reducerManager?: ReturnType<typeof createReducerManager>;
}

export function createReduxStore(initialState?: StateSchema, navigate?: NavigateFunction) {
    const reducerManager = createReducerManager(rootReducers);

    const extraArg = {
        api: $api,
        navigate: navigate
    }

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware<GetDefaultMiddlewareOptions>({
                thunk: {
                    extraArgument: extraArg
                },
            })
        },
    }) as AppStore

    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];