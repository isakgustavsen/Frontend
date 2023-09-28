<script setup>

const client = useSupabaseClient();
const router = useRouter();

const password = ref(null);
const confirmpassword = ref(null);
const errorMsg = ref(null);

async function setPassword() {
  if (password.value !== confirmpassword.value) {
    errorMsg.value = 'Passwords do not match';
    return;
  }
  try {
    const { error } = await client.auth.updateUser({
      password: password.value,
    });

    if (error) throw error;
     alert('Check your email for the password reset link');

  } catch (error) {
      errorMsg.value = error.message;
  }
}



</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-slate-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form class="space-y-6" @submit.prevent="setPassword">
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-200">New Password</label>
            <div class="mt-2">
              <input v-model="password" name="password" type="password" autocomplete="current-password" required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Confirm Password</label>
            <div class="mt-2">
              <input v-model="confirmpassword" name="password" type="password" autocomplete="current-password" required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <p v-if="errorMsg" >{{ errorMsg }}</p>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Password</button>
          </div>
        </form>
    </div>
  </div>
</div></template>