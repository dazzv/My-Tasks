<template>
    <div class="navbar">
        <div>
          <h1>Add a new task</h1>
          <router-link to="/list"><button class="btn">Back to a list</button></router-link>
        </div>
    </div>
    <div class="container">
        <h1>Title</h1>
        <input v-model="title" placeholder="Shopping">
        <h1>Description</h1>
        <textarea v-model="description" placeholder="Buy any notebooks"></textarea>
        <div v-if="id >= 0">
            <span>Is completed: </span>
            <input type="checkbox" class="check" v-model="isCompleted">
        </div>
        <div></div>
        <span v-if="successfull" class="msg">Succesfull !</span>
        <button class="btn2 add" @click="addNewTask"><span v-if="id === ':id'">Add</span><span v-if="id >= 0">Edit</span></button>
        <router-link to="/list"><button class="btn2"> Back </button></router-link>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "AddTask",
    props: ["id", "title", "description"],
    data() {
        return {
            successfull: false,
            isCompleted: false,
        }
    },
    methods: {
        ...mapActions({
            addNewTaskToList: 'addNewTaskToList',
        }),
        addNewTask() {
            if(this.title && this.description !== ''){
                const newTask = {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    is_completed: this.isCompleted,
                    is_deleted: false,
                }
                if(this.id >= 0){
                    newTask.id = this.id
                } else {
                    newTask.id = this.list.length
                }
                
                //action
                this.addNewTaskToList(newTask)
                this.successfull = true
                setTimeout(() => this.successfull = false, 1000)
                setTimeout(() => this.$router.push('/list'), 1100)
            } else {
                alert("Please enter a title and description for the task!")
            }  
        },

    },   
    computed: {
        ...mapGetters({
            list: 'list'
        })
    },
}
</script>

<style lang="scss">
$color1: rgb(90, 90, 90);
h1{
    color: $color1;
    margin: 10px 0;
    font-size: calc(16px + 5* ((100vw - 320px) / (1280 - 320)));
}
input{
    border-bottom: 1px solid $color1;
    padding: 4px;
    font-size: 18px;

}
textarea{
    font-size: 15px;
    border: 1px solid $color1;
    height: 150px;
    width: 100%;
    padding: 4px;
}
.btn2{
    color: #fff;
    background-color: $color1;
    padding: 10px 12px;
    border-radius: 10px;
    margin: 20px 10px 0; 
}
.add {
    background-color: rgb(7, 183, 7);
}
.msg {
    position: absolute;
    left: 160px;
    color: rgb(17, 228, 17);
    height: 18px;
    width: 87px;
    font-size: 16px;
}
.check {
    margin: 0 4px;
}
</style>