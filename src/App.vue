<template>

  <div class="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}
.app{
  margin: 0 auto;
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
