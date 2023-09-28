<template>
  <div class=" bg-slate-200 dark:bg-slate-900">
    <header class="bg-slate-800">
      <nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5 h-8 ">
            <span class="sr-only">DebutUKA i Tromsø</span>
            <NuxtImg class="object-cover rounded-lg"
                :src="$urlFor(navigation.navLogo).url()"
                fit="clip"
                width="140"
                />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in navigation.navItems" :to="item.href"
            class="text-sm font-semibold leading-6 text-gray-100">{{ item.navTitle }}</NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink v-if="user" to="/profile" class="text-sm font-semibold leading-6 text-gray-100">Profile</NuxtLink>
          <NuxtLink v-else to="/login" class="text-sm font-semibold leading-6 text-gray-100">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <!-- Mobile Menu -->
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10"></div>
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <NuxtImg class="object-cover rounded-lg"
                :src="$urlFor(navigation.navLogo).url()"
                fit="clip"
                width="140"
                />
            </NuxtLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="flow-root mt-6">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="py-6 space-y-2">
                <NuxtLink v-for="item in navigation.navItems" :to="item.href"
                  class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800">{{
                    item.navTitle }}</NuxtLink>
              </div>
              <div class="py-6">
                <NuxtLink v-if="user" to="/profile" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Profile</NuxtLink>
                <NuxtLink v-else to="/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log
                  in</NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <NuxtPage />

      

    <footer class="bottom-0 bg-slate-800">
      <div class="px-6 py-12 mx-16 overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <h1 class="mb-4 text-2xl text-center text-white">Våre samarbeidspartnere</h1>
        <div class="grid items-center max-w-xl grid-cols-2 grid-rows-2 mx-auto mt-10 gap-y-8 gap-x-10 md:mx-0 md:grid-rows-1 md:max-w-none md:grid-cols-4">
        <NuxtLink v-for="partner in partners" :to="'/partner/' + partner.slug.current">
          <NuxtImg
            :src="$urlFor(partner.logo).url()"
            :alt="partner.title"
            class="object-contain w-full col-span-2 transition duration-500 ease-in-out transform opacity-50 max-h-24 lg:col-span-1 hover:opacity-90" 
            />
          </NuxtLink>
      </div>
        <p class="mt-20 text-xs leading-5 text-center text-gray-300">&copy; 2023 DebutUKA i Tromsø All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { defineComponent, h } from 'vue'

const user = useSupabaseUser();


const queryNavigation = groq`*[_type == 'navigation'][0]{
  navItems,
  navLogo,
}`;

const { data: navigation } = useSanityQuery(queryNavigation);

const queryPartners = groq`*[_type == 'partners']{
  _id,
  title,
  slug,
  logo,
  footer,
}`;

const { data: partners } = useSanityQuery(queryPartners);

const footerNavigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}

const mobileMenuOpen = ref(false)
</script>