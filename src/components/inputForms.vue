<template>
     <div class="double" >
      <FormKitSchema
          :schema="schema"
          class="inputs"
          v-model="schema"
      />
     </div>
</template>

<script>
import { FormKitSchema } from '@formkit/vue'
export default {
  name: "inputForms",
  components: FormKitSchema,
  data () {
    return {
      schema: [
        {
          $cmp: 'FormKit',
          props: {
            type: 'select',
            id: 'input',
            placeholder: 'Pick your input',
            options: {
              email: 'Email',
              number: 'Number',
              telephone: 'Telephone',
              text: 'Text',
              textarea: 'Textarea'
            },
            validation: 'required'
          },
        },
        {
          $cmp: 'FormKit',
          id: 'email',
          if: '$get(input).value === email',
          props: {

            type: 'email',
            name: 'email',
            placeholder: 'Email',
          },
        },
        {
          $cmp: 'FormKit',
          id: 'number',
          if: '$get(input).value === number',
          props: {

            type: 'number',
            name: 'Number',
            placeholder: 'Number',
          },
        },
        {
          $cmp: 'FormKit',
          id: 'tel',
          if: '$get(input).value === telephone',
          props: {

            type: 'tel',
            name: 'telephone',
            placeholder: 'Telephone',
          }
        },
        {
          $cmp: 'FormKit',
          id: 'text',
          if: '$get(input).value === text',
          props: {

            type: 'text',
            name: 'Text',
            placeholder: 'Text',
          },
        },
        {
          $cmp: 'FormKit',
          id: 'textarea',
          if: '$get(input).value === textarea',
          props: {

            type: 'textarea',
            name: 'Textarea',
            placeholder: 'Textarea',
          },
        },
      ],
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