import myProject from './pages/my_project/index.vue';
import projectDetail from './pages/project_detail/index.vue';
import shopList from './pages/shop_list/index.vue';
import home from "./pages/home/home.vue";
import form from "./pages/form/form.vue";
import pay from "./pages/pay/pay.vue";
import pay_s from "./pages/pay_successful/pay_s.vue";
import order_c from "./pages/order_center/order_c.vue";
import server_l from "./pages/server_list/server_l.vue";
export default [
  {
    path: '/',
    component: shopList
  }, {
    path: '/projectdetail',
    component: projectDetail
  },
  {
    path: '/myproject',
    component: myProject
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/form",
    component: form
  },
  {
    path: "/pay",
    component: pay
  },
  {
    path: "/pay_su",
    component: pay_s
  },
  {
    path: "/order_cu",
    component: order_c
  },
  {
    path: "/server_lu",
    component: server_l
  },
]
