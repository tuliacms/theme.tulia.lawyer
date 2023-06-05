const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'CompanyHistory',
    name: 'CompanyHistory',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Our history',
                    image: {
                        id: '',
                        filename: '',
                        size: 'lawyer-vertical-narrow',
                    },
                    entries: [{
                        id: '1',
                        year: '2022',
                        headline: 'We\'re hiring new lawyers',
                        content: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex. Sed orci sapien, elementum vitae massa vitae, consequat malesuada enim. In eros ipsum',
                    },{
                        id: '2',
                        year: '1990',
                        headline: 'Etiam nec vulputate ex. Sed orci sapien',
                        content: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex. Sed orci sapien, elementum vitae massa vitae, consequat malesuada enim. In eros ipsum',
                    },{
                        id: '3',
                        year: '1920',
                        headline: 'Opening',
                        content: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex. Sed orci sapien, elementum vitae massa vitae, consequat malesuada enim. In eros ipsum',
                    }],
                };
            },
        },
    },
};
