const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'Faq',
    name: 'Faq',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Do you have questions?',
                    description: 'If you do not find the answer to your question, feel free and contact us.',
                    background: {
                        id: null,
                        filename: null,
                        size: 'lawyer-about',
                    },
                    faq: [
                        {
                            id: '1',
                            question: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex',
                            answer: '<p>Sed orci sapien, <b>elementum vitae massa vitae</b>, consequat malesuada enim. In eros ipsum</p>',
                        },
                        {
                            id: '2',
                            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            answer: '<p>Mauris id ligula diam. Quisque nec augue vel ante pellentesque tempor nec aliquam orci. Curabitur a erat convallis, imperdiet dolor sed, tincidunt magna. Vestibulum volutpat mollis pharetra. Curabitur blandit libero arcu, nec tristique tortor tristique sed. </p>',
                        },
                        {
                            id: '3',
                            question: 'Etiam vel orci condimentum',
                            answer: '<p>Pellentesque tempus quam elit, maximus luctus mi tincidunt sed. Sed varius eget erat interdum tempus. In blandit sagittis arcu, ut dictum.</p>',
                        }
                    ],
                };
            },
        },
    },
};
