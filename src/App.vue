<template>
  <div>
    Сколько создать?
    <input type="number" v-model="forms.count" @change="createComponent" />
  </div>

  <inputForms
      v-for="index in forms.count"
      :key="index"
  />

  <button @click="this.forms.count++">+</button>
</template>

<script>
import inputForms from '@/components/inputForms';

export default {
  name: 'App',
  components: {
    inputForms
  },
  data() {
    return {
      forms: {
        count: 0,
      },
      components: {
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
  methods: {
  }
}
</script>

<style>

</style>
