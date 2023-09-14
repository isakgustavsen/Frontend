import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-4fc76b56.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "baseButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="rounded-md my-4 px-7 py-2.5 font-bold text-white shadow-sm bg-indigo-600 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-500">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    const events = [
      {
        id: 1,
        title: "Tix",
        date: "20.10.2021",
        description: "Tix er en norsk rapper fra B\xE6rum. Han er kjent for l\xE5ter som \xABNeste Sommer\xBB, \xABSjeiken 2020\xBB og \xABKaller p\xE5 deg\xBB.",
        ticketlink: "https://www.ticketmaster.no/artist/tix-billetter/1008843",
        href: "/event/{{ event[0].title }}",
        imageSrc: "/tix.svg",
        imageAlt: "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
      },
      {
        id: 2,
        title: "Gabrielle",
        date: "21.10.2021",
        description: "Gabriellle er en popartist fra Bergen. Hun er kjent for l\xE5ter som \xAB5 fine fr\xF8kner\xBB, \xABRing meg\xBB og \xABFem fine fr\xF8kner\xBB. Hun spilte ogs\xE5 i filmen \xABBattle\xBB.",
        ticketlink: "/event/{{ event[0].title }}",
        href: "/event/{{ event[0].title }}",
        imageSrc: "/gabrielle.jpeg",
        imageAlt: "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
      },
      {
        id: 3,
        title: "Broiler",
        date: "22.10.2021",
        description: "Dj Broiler er en norsk DJ-duo fra Drammen. De er kjent for l\xE5ter som \xABAfterski\xBB, \xABVannski\xBB og \xABEn gang til\xBB.",
        // ticketlink: '/event/{{ event[0].title }}',
        href: "/event/{{ event[0].title }}",
        imageSrc: "/broiler.jpeg",
        imageAlt: "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
      },
      {
        id: 4,
        title: "Kjartan Lauritzen",
        date: "23.10.2021",
        description: "Kjartan Lauritzen er en norsk artist fra Bergen. Han er kjent for l\xE5ter som \xABFett\xBB, \xABKj\xE6re deg\xBB og \xABHjerteslag\xBB.",
        ticketlink: "/event/{{ event[0].title }}",
        href: "/event/{{ event[0].title }}",
        imageSrc: "/kjartan.jpeg",
        imageAlt: "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
      },
      {
        id: 5,
        title: "Katastrofe",
        date: "24.10.2021",
        description: "Katastrofe er en norsk artist fra Bergen. Han er kjent for l\xE5ter som \xABSangen du hater\xBB, \xABN\xF8dlanding\xBB og \xABTypisk norsk\xBB.",
        ticketlink: "/event/{{ event[0].title }}",
        href: "/event/{{ event[0].title }}",
        imageSrc: "/katastrofe.jpeg",
        imageAlt: "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><div class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12"><!--[-->`);
      ssrRenderList(events, (event) => {
        _push(`<div class="group bg-slate-100 dark:bg-slate-800 shadow-lg">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: event.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 hover:opacity-95"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: event.imageSrc,
                alt: event.imageAlt,
                class: "h-full w-full object-cover object-center"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 hover:opacity-95" }, [
                  createVNode(_component_NuxtImg, {
                    src: event.imageSrc,
                    alt: event.imageAlt,
                    class: "h-full w-full object-cover object-center"
                  }, null, 8, ["src", "alt"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="m-4 text-gray-900 dark:text-gray-300"><h3 class="text-4xl text-center font-bold mb-4">${ssrInterpolate(event.title)}</h3><p class="italic text-center mb-4">${ssrInterpolate(event.date)}</p><p class="text-center line-clamp-3">${ssrInterpolate(event.description)}</p><div class="grid grid-flow-col justify-items-center gap-8 mx-4 mt-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: event.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButton, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Les Mer`);
                  } else {
                    return [
                      createTextVNode("Les Mer")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseButton, null, {
                  default: withCtx(() => [
                    createTextVNode("Les Mer")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        if (event.ticketlink) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: event.ticketlink
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseButton, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Kj\xF8p Billett`);
                    } else {
                      return [
                        createTextVNode("Kj\xF8p Billett")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BaseButton, null, {
                    default: withCtx(() => [
                      createTextVNode("Kj\xF8p Billett")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=events-cc9e4371.mjs.map
