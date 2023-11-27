import { supabase } from ".."

export var project = {

  async create(payload: never) {
    var user = supabase.auth.getUser()

    try {
      var { data, error } = await supabase
        .from('projects')
        .insert([payload])
        .single()
      
      if(error) throw error
      return data

    } catch (error) {
      console.log(error)
    }
  }

  async update() {
    //
  }
}