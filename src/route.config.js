import myProject from './pages/my_project/index.vue';
import projectDetail from './pages/project_detail/index.vue';
import shopList from './pages/shop_list/index.vue';

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
  }
]
