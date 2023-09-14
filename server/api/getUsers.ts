export default defineEventHandler((event) => {
  return $fetch('https://dummyjson.com/users')
})
