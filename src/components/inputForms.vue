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
      ]
    }
  }
}
</script>

<style scoped>

</style>