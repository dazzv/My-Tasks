<template>
    <div class="navbar">
        <div>
          <h1>Taskbar</h1>
          <router-link to='/list/edit/id=:id'>
            <button class="btn"><span>+</span> Add a new task</button>
          </router-link>
        </div>
    </div>
    <div class="container">
      <task></task>
    </div>
</template>

<script>
import Task from '../components/task.vue'

export default {
  name: "List",
  components: { Task, },
} 
</script>

<style lang="scss">
//nullstyle
@import '../assets/style/nullstyle.scss';
//
$color1: rgb(90, 90, 90);
$color2: rgb(149, 149, 149);
//-------- 
.container {
  margin: 0 auto;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  position: relative;
}

.navbar{
  height: 80px;
  background-color: $color1;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
    width: 90%;
    }
  }
  h1 {
    width: 50%;
    color: #fff;
    font-size: calc(30px + 10 * ((100vw - 320px) / (1280 - 320)));
  }
}
.btn {
    color: $color1;
    background-color: #fff;
    padding: 10px 12px;
    border-radius: 10px;
    span {
      border: 2px solid $color1;
      border-radius: 50%;
      padding: 1px 4px;
    }
  }
</style>