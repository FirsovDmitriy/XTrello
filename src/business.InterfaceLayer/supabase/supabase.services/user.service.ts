import { supabase } from '..'

export var user = {
  async signup({ email, password }: any) {
    try {
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })

      if(error) throw error
      return data

    } catch (error) {
      console.log(error)
    }
  },

  async login({ email, password }: any) {
    try {
      var { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error) throw error

      return data

    } catch (error) {
      throw error
    }
  }
}
