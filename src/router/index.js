// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DaeunLogin from "../daeun/views/Login.vue";
import JaeungLogin from "../jaeung/views/Login.vue";
import SilLogin from "../sil/views/Login.vue";
import MinjuLogin from "../minju/views/Login.vue";
import MinjuRegister from "../minju/views/Register.vue";
import JiyeongLogin from "../jiyeong/views/Login.vue";
import HyojeongLogin from "../hyojeong/views/Login.vue";

const routes = [
  { path: "/", component: Home },

  // 다은언니
  { path: "/daeun", component: DaeunLogin },

  // 재웅오빠
  { path: "/jaeung", component: JaeungLogin },

  // 실언니
  { path: "/sil", component: SilLogin },

  // 민주
  { path: "/minju", component: MinjuLogin },
  { path: "/minju/register", component: MinjuRegister },

  // 지영이
  { path: "/jiyeong", component: JiyeongLogin },

  // 효정이
  { path: "/hyoheong", component: HyojeongLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
