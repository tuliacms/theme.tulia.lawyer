const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'Features',
    name: 'Features',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Legal Practice Areas',
                    readMore: 'Read more',
                    readMoreIcon: 'fa-solid fa-right-long',
                    features: [
                        {
                            id: '1',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                        {
                            id: '2',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                        {
                            id: '3',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                        {
                            id: '4',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                        {
                            id: '5',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                        {
                            id: '6',
                            icon: 'fa-solid fa-house-lock',
                            name: 'Real estate law',
                            description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
                            link: '',
                        },
                    ],
                };
            },
        },
    },
};
