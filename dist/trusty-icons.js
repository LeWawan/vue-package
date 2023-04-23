import { defineComponent as c, ref as m } from "vue";
const h = /* @__PURE__ */ c({
  __name: "HelloWorld",
  setup(_) {
    return { __sfc: !0, msg: m("Hello World") };
  }
});
function C(_, r, t, i, s, f, a, u) {
  var e = typeof _ == "function" ? _.options : _;
  r && (e.render = r, e.staticRenderFns = t, e._compiled = !0), i && (e.functional = !0), f && (e._scopeId = "data-v-" + f);
  var o;
  if (a ? (o = function(n) {
    n = n || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), s && s.call(this, n), n && n._registeredComponents && n._registeredComponents.add(a);
  }, e._ssrRegister = o) : s && (o = u ? function() {
    s.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), o)
    if (e.functional) {
      e._injectStyles = o;
      var p = e.render;
      e.render = function(v, d) {
        return o.call(d), p(v, d);
      };
    } else {
      var l = e.beforeCreate;
      e.beforeCreate = l ? [].concat(l, o) : [o];
    }
  return {
    exports: _,
    options: e
  };
}
var R = function() {
  var r = this, t = r._self._c, i = r._self._setupProxy;
  return t("div", [r._v(r._s(i.msg))]);
}, $ = [], g = /* @__PURE__ */ C(h, R, $, !1, null, null, null, null);
const W = g.exports;
export {
  W as HelloWorld
};
