import { _ as __nuxt_component_1 } from "./nuxt-img-4fc76b56.js";
import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { CalendarDaysIcon, ClockIcon, MapIcon, TicketIcon } from "@heroicons/vue/24/outline";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "./ssr-965338bf.js";
const _sfc_main = {
  __name: "[eventName]",
  __ssrInlineRender: true,
  setup(__props) {
    const event = [
      {
        title: "Tix",
        description: "Tix er en norsk rapper og låtskriver fra Bærum. Han er kjent for låter som «Shotgun», «Neste Sommer», «Jeg Vil Ikke Leve», «Kaller På Deg» og «Jeg Vil Ikke Danse».",
        imageUrl: "/tix.svg",
        location: "Studentsamfunnet Driv",
        time: "20:00",
        date: "08/08/2024",
        ticketprice: [
          {
            id: 1,
            type: "Ordinær",
            price: "1000,-"
          },
          {
            id: 2,
            type: "Student",
            price: "800,-"
          },
          {
            id: 3,
            type: "Fadder",
            price: "500,-"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<!--[--><div class="mt-16 mx-auto w-10/12 grid grid-cols-3 justify-items-fill"><div class="w-full col-span-full">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/tix.svg",
        alt: "Utsolgt",
        class: "rounded-lg"
      }, null, _parent));
      _push(`</div></div><div class="mx-auto mb-16 w-9/12 -translate-y-16 -translate-x-8 grid grid-cols-3 divide-dashed divide-x-2 divide-gray-300 dark:divide-slate-900 justify-items-stretch rounded-lg shadow-2xl bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white"><div class="col-span-2 col-start-1 p-8"><p class="text-6xl mb-8">${ssrInterpolate(event[0].title)}</p><p class="">${ssrInterpolate(event[0].description)}</p></div><div class="col-span-1 px-8 pt-8"><p class="text-3xl mb-4">Event Info</p><div class="space-y-3"><p class="">`);
      _push(ssrRenderComponent(unref(CalendarDaysIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].date)}</p><p class="">`);
      _push(ssrRenderComponent(unref(ClockIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].time)}</p><p class="">`);
      _push(ssrRenderComponent(unref(MapIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].location)}</p></div><div class="space-y-3 mt-10"><p class="">`);
      _push(ssrRenderComponent(unref(TicketIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].ticketprice[0].type)}: ${ssrInterpolate(event[0].ticketprice[0].price)}</p><p class="">`);
      _push(ssrRenderComponent(unref(TicketIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].ticketprice[1].type)}: ${ssrInterpolate(event[0].ticketprice[1].price)}</p><p class="">`);
      _push(ssrRenderComponent(unref(TicketIcon), {
        class: "w-6 h-6 inline-block mr-2",
        "aria-hidden": "true"
      }, null, _parent));
      _push(` ${ssrInterpolate(event[0].ticketprice[2].type)}: ${ssrInterpolate(event[0].ticketprice[2].price)}</p></div><button type="button" class="rounded-md my-4 px-3.5 py-2.5 font-bold text-white shadow-sm bg-indigo-600 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-500"> Kjøp Billett</button></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/[eventName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_eventName_-984fc640.js.map
