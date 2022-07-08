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
