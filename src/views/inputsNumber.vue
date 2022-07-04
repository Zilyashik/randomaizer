<template>
  <form @submit.prevent="add" class="add">
    <p>Напишите кол-во полей</p>
    <input type="number" v-model="count" class="number" min="0"/>
    <button type="submit" class="button_add">Создать</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    add() {
      this.$router.push({name: 'list', params: {number: this.count}});
    }
  }
}
</script>

<style scoped>
.add{
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  line-height: 15px;
  font-size: 15px;
  margin-top: 20px;

}
.number{
  border: 1px solid black;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  width: 180px;
}
p{
  font-size: 14px;
}
.button_add{
  text-decoration: none;
  background-color: #CA3432;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  width: 180px;
  height: 40px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.button_add:hover{
  background-color: darkred;
}
.button_add:active{
  background-color: salmon;
}
</style>