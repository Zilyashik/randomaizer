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

      <button
          @click="$emit('removeInput', item.index)"
      >Delete1
      </button>
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
  /*border: 3px solid palevioletred;*/
  height: 60px;
  width: 400px;
  text-decoration: none;
}
.select{
  height: 44px;
  border-radius: 5px;
  text-decoration: none;
}
.select:focus{
  text-decoration: none;
}
.option{
  /*border: 3px solid tomato;*/
}
</style>