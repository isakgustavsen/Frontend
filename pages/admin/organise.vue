<script setup>

//define dependencies and vars
const supabase = useSupabaseClient();
let faculty_id = ref(null);
let users = ref(null);

//fetch all faculties from supabase for dropdown on page load
const { data: faculty, f_error } = await supabase.from('faculty_view').select(`*`);


// async function updateByFaculty() {
//   console.log(faculty_id);
//   const { data: studies, s_error } = await supabase.from('studies').select(`*`).eq('faculty_id', faculty_id);
//   const { data: groups, u_error } = await supabase.from('group').select(`*`).eq('faculty_id', faculty_id);
// }
  
if (f_error) {
  console.log('Faculty error: ' + f_error);
}
console.log(faculty);

//fetch study title for each user

async function getUsersByFaculty(facultyId) {
  let { data, s_error } = await supabase
    .from('profiles')
    .select(`
    first_name,
    last_name,
    group
    `)
    .eq('faculty_id', facultyId)
    .eq('group',groups)
    .eq('study_id', studies);

  if (s_error) {
    console.log(' Users by faculty error: ' + s_error.message);
    s_error.value = null;
  }
  users.value = data;
  console.log(users.value);
}


</script>


<template>
  <div class="px-4 mt-32 sm:px-6 lg:px-8 sm:ml-16 sm:mt-0">
    <!-- Menu -->
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-2 row-span-2 text-gray-200">
        <section class="mt-16 text-5xl">
          <h1>Organise Users</h1>
        </section>
        <div class="mt-8 "></div>
        <section class="">
          <h1 class="text-3xl divide-y-2 divide-gray-200 divide">Filters</h1>
          <div class="">
            <p>Fakultet</p>
            <select v-model="faculty_id" @change="updateByFaculty()" id="fakultet" name="fakultet"
              class="block w-full py-2 pl-3 mt-1 text-base text-gray-200 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option v-for="fakultet in faculty" :key="fakultet.id" :value="fakultet.id">{{ fakultet.title }}</option>
            </select>
          </div>
          <div class="">
            <p>study</p>
            <select v-model="study" @change="console.log(study)" id="fakultet" name="fakultet"
              class="block w-full py-2 pl-3 mt-1 text-base text-gray-200 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option v-for="study in studies" :key="study.id" :value="study.id">{{ study.title }}</option>
            </select>
          </div>
          <div class="">
            <p>Group</p>
            <select v-model="group" @change="console.log(group)" id="fakultet" name="fakultet"
              class="block w-full py-2 pl-3 mt-1 text-base text-gray-200 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.title }}</option>
            </select>
          </div>
        </section>
        <section class="mt-8">
          <button @click="getUsersByFaculty(faculty_id)"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Hent</button>
        </section>
      </div>
    </div>
    
    <!-- <div class="">
        <h1 class="text-base font-semibold leading-6 text-gray-200">Users</h1>
      </div>
      <div class="mt-2 text-sm text-gray-300">
        <p>Filter</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0">
        dropdown that takes in title and id from fakultet
        <select v-model="faculty_id" @change="console.log(faculty_id)" id="fakultet" name="fakultet"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="0">Fakultet</option>
          <option v-for="fakultet in faculty" :key="fakultet.id" :value="fakultet.id">{{ fakultet.title }}</option>
        </select>
      </div>
      <button @click="getUsersByFaculty(faculty_id)"
          class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Hent</button> -->

    <!-- Table -->
    <div class="flow-root mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-0">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Studie</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Fakultet</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Faddergruppe</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="person in users" :key="person.id">
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-200 whitespace-nowrap sm:pl-0">{{
                  person.first_name
                }} {{ person.last_name }}</td>
                <td class="px-3 py-4 text-sm text-gray-300 whitespace-nowrap">{{ person.study_id }}</td>
                <td class="px-3 py-4 text-sm text-gray-300 whitespace-nowrap">{{ person.faculty_title }}</td>
                <td class="px-3 py-4 text-sm text-gray-300 whitespace-nowrap"> Gruppe {{ person.group }}</td>
                <td class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{ person.name
                  }}</span></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


