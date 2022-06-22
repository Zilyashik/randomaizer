<template>
  <FormKitSchema :schema="schema" />
</template>

<script>
import { FormKitSchema } from '@formkit/vue'
export default {
  name: "inputForms",
  components: FormKitSchema,
  data() {
    return {
      schema: [
        {
          $cmp: 'FormKit',
          props: {
            type: 'select',
            id: 'input',
            label: 'Input',
            placeholder: 'Pick your input',
            options: {
              email: 'Email',
              number: 'Number',
              telephone: 'Telephone',
              text: 'Text',
              textarea: 'Textarea'
            },
            validation: 'required'
          }
        },
        {
          $cmp: 'FormKit',
          if: '$get(input).value === email',
          props: {
            type: 'text',
            label: '$: "Type (" + $get(input).value + ")"',
            name: 'email',
            placeholder: 'example@example.ru',
          }
        },
        {
          $cmp: 'FormKit',
          if: '$get(input).value === number',
          props: {
            type: 'number',
            label: '$: "Type (" + $get(input.value + ")"',
            name: 'Number',
            placeholder: 'Number',
          },
        },
        {
          $cmp: 'FormKit',
          if: '$get(input).value === telephone',
          props: {
            type: 'tel',
            label: '$: "Type (" + $get(input).value + ")"',
            name: 'telephone',
            placeholder: 'Telephone',
          }
        },
        {
          $cmp: 'FormKit',
          if: '$get(input).value === text',
          props: {
            type: 'text',
            label: '$: "Type (" + $get(input).value + ")"',
            name: 'Text',
            placeholder: 'Text',
          },
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>