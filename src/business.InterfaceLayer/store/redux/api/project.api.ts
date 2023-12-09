import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { project } from '../../../supabase/supabase.services/project.service'

export var projectApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  
  endpoints: build => ({
    mutationProject: build.mutation({
      // @ts-ignore
      queryFn: project.create(),
    })
  })
})
