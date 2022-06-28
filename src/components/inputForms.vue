<template>
     <div class="double" >
       <select v-model="type" @change="$emit('addInput', index, type)">
         <option value="email">email</option>
         <option value="number">number</option>
         <option value="telephone">telephone</option>
         <option value="text">text</option>
         <option value="textarea">textarea</option>
       </select>

      <FormKitSchema
          :schema="schema[type]"
          class="inputs"
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

.double {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 3px solid black;
  height: 70px;
  width: 330px;
}
.inputs{

}
</style>