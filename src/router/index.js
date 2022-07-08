import { createRouter, createWebHistory } from 'vue-router'
import taskList from '../components/taskList.vue'
import task from '../components/task.vue'
import addTask from '../components/addTask.vue'
import deletedTasks from '../components/deletedTasks'

import home from '../views/home'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: home
  },
  {
    name: "List",
    path: '/list',
    component: taskList
  },
  {
    name: "Task",
    path: '/task',
    component: task
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/t-task.vue')
  },
  {
    name: "AddTask",
    path: '/list/edit/id=:id',
    component: addTask,
    props: true
  },
  {
    name: 'DeletedTasks',
    path: '/list/deleted',
    component: deletedTasks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
