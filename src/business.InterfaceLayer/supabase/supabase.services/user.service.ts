import { supabase } from '..'

export var user = {
  async sigup(payload: any) {
    try {
      
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.passwod,
        options: {
          emailRedirectTo: 'https//example.com/welcome',
        },
      })

      if(error) throw error

    } catch (error) {
      console.log(error)
    }
  },
}
