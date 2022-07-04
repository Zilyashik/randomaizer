<template>
  <form action="#">
    <div class="select_container" >
      <select v-model="type" @change="$emit('addInput', item.index, type, content)" class="select">
        <option value="email" class="option">Email</option>
        <option value="number" class="option">Number</option>
        <option value="telephone" class="option">Telephone</option>
        <option value="text" class="option">Text</option>
        <option value="textarea" class="option">Textarea</option>
      </select>
      <input type="text" class="inputs" v-model="content">
      <button @click="$emit('removeInput', item.index)" class="button_delete">&#128465;</button>
    </div>
  </form>
</template>

<script>
import {components} from "@/inputs/components";

export default {
  name: "inputForms",
  props: ["item"],
  data () {
    return {
      type: 'email',
      content: '',
      schema: {
        ...components
      },
    }
  },
}
</script>

<style scoped>
.select_container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 400px;
  text-decoration: none;
}
.select{
  height: 44px;
  border-radius: 15px;
  text-decoration: none;
}
.select:focus{
  text-decoration: none;
}
.inputs{
  height: 44px;
  border-radius: 15px;
  text-decoration: none;
  border: 1px solid black;
  font-size: 20px;
  padding-left: 7px;
  width: 240px;
}
.button_delete{
  text-decoration: none;
  background-color: #CA3432;
  border: none;
  border-radius: 15px;
  width: 50px;
  font-size: 25px;
  height: 40px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.button_delete:hover{
  background-color: darkred;
}
.button_delete:active{
  background-color: salmon;
}
</style>