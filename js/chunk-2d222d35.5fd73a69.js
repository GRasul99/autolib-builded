(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222d35"],{cfea:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{attrs:{items:e.order.orders,headers:e.order.userOrdersHeaders,loading:e.loading,"no-data-text":"Нет данных","no-results-text":"Поиск не дал результатов"}})},n=[],d=r("5530"),o=r("2f62"),s={name:"ProfileUserOrders",data:function(){return{loading:!1}},computed:Object(d["a"])({},Object(o["c"])(["order"])),created:function(){var e=this;this.loading=!0,this.$store.dispatch("order/fetchOrders").then((function(){e.loading=!1}))}},c=s,i=r("2877"),l=r("6544"),u=r.n(l),f=r("8fea"),h=Object(i["a"])(c,a,n,!1,null,null,null);t["default"]=h.exports;u()(h,{VDataTable:f["a"]})}}]);
//# sourceMappingURL=chunk-2d222d35.5fd73a69.js.map