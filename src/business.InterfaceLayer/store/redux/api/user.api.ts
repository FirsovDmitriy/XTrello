import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { user } from "../../../supabase/supabase.services/user.service";
import { BaseQueryExtraOptions, BaseQueryApi, BaseQueryError } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export var userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),

  endpoints: build => ({
    register: build.query({
      async queryFn(
        arg
      ) {
        try {
          const data = await user.signup(arg)
          return { data }
        } catch (error) {
          return { error }
        }
      }
    })
  })

})

export const { useRegisterQuery } = userAPI