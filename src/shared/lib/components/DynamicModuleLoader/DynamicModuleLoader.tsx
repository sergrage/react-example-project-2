import { Reducer } from "@reduxjs/toolkit";
import { redusersKeysType, ReduxStoreWithManager } from "app/providers/StoreProvider/config/stateSchema";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";


export type ReducersList = {
    [name in redusersKeysType]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactNode;
    removeAfterUnmount?: boolean;
    reducers: ReducersList;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager?.add(name as redusersKeysType, reducer)
            dispatch({ type: `@INIT ${name} REDUSER` })
        })
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name) => {
                    store.reducerManager?.remove(name as redusersKeysType)
                    dispatch({ type: `@DESTROY ${name} REDUSER` }) /// тут важно чтоб dospatch был после remove
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
};
