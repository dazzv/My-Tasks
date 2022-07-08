<template>
    <div class="navbar">
        <div>
          <h1>Deleted tasks</h1>
          <router-link to="/list"><button class="btn">Back to a list</button></router-link>
        </div>
    </div>
    <span v-if="!deletedTasks.length" class="center_text">it's empty here</span>
    <div 
        v-if="deletedTasks.length"
        class="container">
        <div class="task"
          v-for="(task, index) in deletedTasks"
          :key="index"
          >
        <div class="task_body">
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'DeletedTasks',
    computed: {
        ...mapGetters({
            deletedTasks: 'deletedTasks'
        })
    }    
}
</script>

<style lang="scss">
.center_text{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vw;
    @media screen and (max-width: 768px) {
        height: 60vw;
    }
}
</style>