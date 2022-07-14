<template>
    <div class="select">
        <v-select v-model="filter" :options="['Perform', 'Performed']"></v-select>
        <div class="Deleted">
            <router-link to="/list/deleted"><button class="btn">Deleted</button></router-link>
        </div>
    </div>
    <div class="task"
          v-for="(task, index) in filteredList"
          :key="index"
          >
        <div class="task_body">
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
        </div>
        <router-link :to="{name: 'AddTask', params: {id: task.id, title: task.title, description: task.description}}">
            <button class="edit">Edit</button>
        </router-link>
        <button class="delete" @click="removeTask(task)">Delete</button>
      </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vSelect from 'vue-select'

export default {
    name: 'Task',
    data() {
        return {
            filter: 'Perform',
        }
    },
    components: {vSelect},
    methods: {
        ...mapActions({
            deleteFromList: 'deleteFromList'
        }),
        removeTask(task) {
            this.deleteFromList(task)
        }
    },
    computed: {
        ...mapGetters({
        list: 'list',
        }),

        filteredList() {
            if(this.filter === "Perform") {
                return this.list.filter(t => t.is_completed === false & t.is_deleted === false)
            } else if(this.filter === "Performed") {
                return this.list.filter(t => t.is_completed === true & t.is_deleted === false)
            } else {
                return this.list.filter(t => t.is_deleted === false)
            }
        },
    },
    created() {
        const windowUrl = Object.fromEntries(new URL(window.location).searchParams.entries());
        if(windowUrl.filter){
            this.filter = windowUrl.filter
        }
    },
    watch: {
        filter() {
            window.history.pushState(
                null,
                null,
                `${window.location.pathname}?filter=${this.filter}`
            )
        }
    } 
}
</script>

<style lang="scss">
//
$color1: rgb(90, 90, 90);
$color2: rgb(149, 149, 149);
//-----
.task{
    background-color: #fff;
    box-shadow: 0 0 8px 4px rgb(240, 237, 237);
    margin: 20px 0;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    .check {
        width: 20px;
        height: 17px;
    }
    .task_body {
        width: 90%;
    }
    h3 {
        padding: 4px 0 8px 0;
        font-size: calc(16px + 2 * ((100vw - 320px) / (1280 - 320)));
    }
    p {
        font-size: calc(13px + 2 * ((100vw - 320px) / (1280 - 320)));
        
    }
    button {
        color: $color1;
        background-color: #fff;
        padding: 10px 12px;
    }
    .btn_check {
        padding: 0;
    }
    .edit {
        color: rgb(238, 220, 87);
    }
    .delete {
        color: rgb(217, 67, 67);
    }  
}
.select{
    position: relative;
    height: 40px;

    .v-select {
    background: rgba(255, 255, 255, 0.898);
    margin: 10px 0;
    width: 180px;
    border-bottom: 2px solid $color1;
    font-size: 16px;
    padding: 3px;
    cursor: pointer;
    position: absolute;
    z-index: 5;
        li {
            padding: 5px 0;
        }
    }
    .vs__dropdown-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:nth-child(1) {
            width: 70%;
            input {
                display: none;
            }
        }
        div:nth-child(2) {
            button {
                padding: 0 4px;
            }
        }
    } 
}
.Deleted {
    position: relative;
    button {
        position: absolute;
        right: 0;
        color: #fff;
        background-color: $color1;
        padding: 10px 12px;
        border-radius: 10px;
        margin: 10px 0 0;
    }  
}


</style>
