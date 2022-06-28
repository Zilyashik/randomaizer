export const components = {
    'email': {
        $cmp: 'FormKit',
        props: {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            validation: "required|email",
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