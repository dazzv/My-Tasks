import { createStore } from 'vuex'

let list = window.localStorage.getItem('tasksList')
let deletedTasks = window.localStorage.getItem('deletedTasks')

export default createStore({
  state: {
    list: list ? JSON.parse(list) : [],
    deletedTasks: deletedTasks ? JSON.parse(deletedTasks) : [],
  },

  actions: {
    // async getTasksFromApi (ctx) {
    //   const Token = '17c7039d-deeb-4228-bdc7-d43f6000fb50';
    //   const res = await fetch(`https://apithing.net/tasks?token=${Token}`) // api ресурс не работает
    //   const tasksFromApi = await res.json()
    //   ctx.commit("getTasksFromApi", tasksFromApi)
    // },
    async deleteFromList ({commit}, task){
      commit("deleteFromList", task) 
      commit('saveDeletedTasks')
    },
    async addNewTaskToList ({commit}, newTask){
      commit('addNewTaskToList', newTask)
      commit('saveTasksList')
    },
  },
  mutations: {
    // getTasksFromApi(state, tasksFromApi) {
    //     state.list = tasksFromApi
    // },
    deleteFromList: (state, task) => {
      task.is_deleted = true

      state.list.filter(t => t.id !== task.id);
      state.deletedTasks.push(task);
      window.localStorage.setItem('tasksList', JSON.stringify(state.list))
    },
    addNewTaskToList: (state, newTask) => {
      state.list.splice(newTask.id, 1, newTask)  
    },
    //localstorage
    saveTasksList: (state) => {
      window.localStorage.setItem('tasksList', JSON.stringify(state.list))
    },
    saveDeletedTasks: (state) => {
      window.localStorage.setItem('deletedTasks', JSON.stringify(state.deletedTasks))
    }   
  },
  getters: {
    list(state) {
      return state.list;
    },
    deletedTasks(state) {
      return state.deletedTasks;
    },
  }
})
