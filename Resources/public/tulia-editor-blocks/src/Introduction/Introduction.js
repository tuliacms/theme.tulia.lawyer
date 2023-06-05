const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'Introduction',
    name: 'Introduction',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Who we are',
                    lead: 'Phasellus id vestibulum lorem. Etiam nec ex. Sed orci sapien, elementum',
                    content: 'In eros ipsum, porttitor in ipsum quis, aliquet condimentum tellus. Nullam eu ultricies ipsum. Nullam volutpat ante vel dui accumsan, et fringilla nibh commodo.',
                    sublead: 'Mauris mattis sem nisi, quis eleifend est aliquet',
                };
            },
        },
    },
};
