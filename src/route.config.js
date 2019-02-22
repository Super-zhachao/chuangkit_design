import myProject from './pages/my_project/index.vue';
import projectDetail from './pages/project_detail/index.vue';

export default [
  {
    path: '/',
    component: projectDetail
  },
  {
    path: '/myproject',
    component: myProject
  }
]
