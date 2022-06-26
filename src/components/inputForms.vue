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
export default {
  name: "inputForms",
  props: ["index"],
  components: FormKitSchema,
  data () {
    return {
      type: 'email',
      schema: {
        'email': {
          $cmp: 'FormKit',
          props: {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
          },
        },
        'number': {
          $cmp: 'FormKit',
          props: {
            type: 'number',
            name: 'Number',
            placeholder: 'Number',
          },
        },
        'telephone': {
          $cmp: 'FormKit',
          props: {
            type: 'tel',
            name: 'telephone',
            placeholder: 'Telephone',
          }
        },
        'text': {
          $cmp: 'FormKit',
          props: {
            type: 'text',
            name: 'Text',
            placeholder: 'Text',
          },
        },
        'textarea': {
          $cmp: 'FormKit',
          props: {
            type: 'textarea',
            name: 'Textarea',
            placeholder: 'Textarea',
          },
        },
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
  height: 200px;
  width: 700px;
}

.inputs{
  width: 200px;
}
</style>