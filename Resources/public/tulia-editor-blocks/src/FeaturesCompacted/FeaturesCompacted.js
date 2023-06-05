const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'FeaturesCompacted',
    name: 'Features Compacted',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Legal Practice Areas',
                    features: [
                        {
                            id: '1',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '2',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '3',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '4',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '5',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '6',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '7',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                        {
                            id: '8',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                        },
                    ],
                };
            },
        },
    },
};
