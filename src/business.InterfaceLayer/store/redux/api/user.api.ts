import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { user } from "../../../supabase/supabase.services/user.service";
import type { IUser } from "../../../types";

type UserData = {
  login: string
  password: string
}

export var userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ url: '/' })
  // tagTypes: ['IUser'],

  endpoints: build => ({
    register: build.query({
      queryFn: async (authData) => {
        try {
          const data = await user.signup(authData)
          return { data }
        } catch (error) {
          return { error }
        }
      }
    })
  })

})