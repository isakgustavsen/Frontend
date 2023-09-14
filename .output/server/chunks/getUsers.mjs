import { defineEventHandler } from 'h3';

const getUsers = defineEventHandler((event) => {
  return $fetch("https://dummyjson.com/users");
});

export { getUsers as default };
//# sourceMappingURL=getUsers.mjs.map
