import { StateSchema } from "app/providers/StoreProvider";

export const getProfileData = (state: StateSchema) => {
    return state?.profile?.data || {
        username: '', avatar: '', firstname : '', lastname : '', age: 0, currency: '', country: '', city: ''
    }
} 