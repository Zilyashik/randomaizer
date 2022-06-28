<template>
     <div class="select_container" >
       <select v-model="type" @change="$emit('addInput', index, type)" class="select">
         <option value="email" class="option">Email</option>
         <option value="number" class="option">Number</option>
         <option value="telephone" class="option">Telephone</option>
         <option value="text" class="option">Text</option>
         <option value="textarea" class="option">Textarea</option>
       </select>

      <FormKitSchema
          :schema="schema[type]"
          class="inputs"
          outer-class="$reset input"
      />
     </div>
</template>

<script>
import { FormKitSchema } from '@formkit/vue'
import {components} from "@/inputs/components";

export default {
  name: "inputForms",
  props: ["index"],
  components: FormKitSchema,
  data () {
    return {
      type: 'email',
      schema: {
        ...components
      }
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
  border: 3px solid palevioletred;
  height: 70px;
  width: 330px;
}
.select{
  border: 3px solid seagreen;
  height: 30px;
}
.option{
  border: 3px solid tomato;
}
</style>