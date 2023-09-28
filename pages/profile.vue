<script setup>
// definePageMeta({
//   middleware: 'auth',
// })

// const supabase = useSupabaseClient()
// const router = useRouter()

// const loading = ref(true)
// const username = ref('')
// const website = ref('')
// const avatar_path = ref('')

// loading.value = true
// const user = useSupabaseUser()

// console.log(user.value)

// let { data: profile, p_error } = await supabase
//   .from('profiles')
//   .select(`*`)
//   .eq('id', user.value.id)

// console.log(profile)

// if (profile) {
//   username.value = profile.username
//   website.value = profile.website
//   avatar_path.value = profile.avatar_url
// }

// loading.value = false

// async function updateProfile() {
//   try {
//     loading.value = true
//     const user = useSupabaseUser()

//     const updates = {
//       id: user.value.id,
//       username: username.value,
//       avatar_url: avatar_path.value,
//       updated_at: new Date(),
//     }

//     let { error } = await supabase.from('profiles').upsert(updates, {
//       returning: 'minimal', // Don't return the value after inserting
//     })
//     if (error) throw error
//   } catch (error) {
//     alert(error.message)
//   } finally {
//     loading.value = false
//   }
// }

// async function signOut() {
//   try {
//     loading.value = true
//     let { error } = await supabase.auth.signOut()
//     if (error) throw error
//     user.value = null
//     router.push('/')
//   } catch (error) {
//     alert(error.message)
//   } finally {
//     loading.value = false
//   }
// }
let name = ref('')
</script>

<template>
  <div  class="m-32">
    <FormKit>
    <FormKit class=""
      type="text" 
      name="name" 
      id="name"
      label="Name"
      help="Your full name"
      placeholder="John Doe"/>
    </FormKit>

      <p>{{ name }}</p>
  </div>
</template>