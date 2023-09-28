<script setup>

const client = useSupabaseClient();

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const successMsg = ref('');

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = 'Check your email to confirm your account';
  } catch (error) {
    errorMsg.value = error.message;
  }
}

</script>

<template>
  <div>
    <FormKit>
      <FormKit label="Email" type="email" />

    </FormKit>
  </div>
</template>

<style scoped></style>
