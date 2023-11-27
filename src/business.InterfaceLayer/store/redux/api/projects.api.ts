import { createApi } from '@reduxjs/toolkit/query/react'
import { project } from '../../../supabase/supabase.services/project.service'

export var projectsApi = createApi({
  reducerPath: 'projectsApi',
  endpoints: build => ({
    mutationProject: build.mutation({
      queryFn: project.create(),
    })
  })
})