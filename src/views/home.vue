<template>
    <div class="container">
        <div class="welcomePage">
            <h1>Welcome!</h1>
            <router-link to="/list">
                <button>My Tasks </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  margin: 0 auto;
  height: 90vh;
}
.welcomePage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    button {
        border-radius: 30px;
        padding: 8px 12px;
        background-color: rgb(90, 90, 90);
        color: #fff;
        cursor: pointer;
    }
    h1 {
        color: rgb(90, 90, 90);
        height: 30px;
        font-size: 30px;
    }
}
</style>