const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'ContactDetails',
    name: 'Contact Details',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABkCAMAAACYXt08AAAAV1BMVEX////4+Pju7u/FxsfT1NXm5+fMzc7y8/PZ2dq9vr+xkFne39+wsrO3uLnt5NekpqiAg4WYmpy7nm1laGv08Ojl2cbYx6vFrIOOj5JGSUzNuZVzdnjf0bqM28GlAAADQElEQVR42uzXwWooIQwF0CQmGtF5Ruxihvn//3zSZaGr0i7kHpVE7laEEAAAAAAAAAAAAAAAnCFiWcSdH7/Xet5oN+U3Vjwx7en3PWPQmfokj0qzz5Urh5f5yCJSeqjQsuyrC51pTPI30Rgj7RIu7+qLyOnZ4bKkfgedSaK/evfQKJHKunqt75hj2ONEc067x6RDcZN9qDgxs9vW2KQUlx2akBgBwK/hP/fx74sP/nMEAAA/xdpEihCzN7Ei+1KKmpTcmIqQcOGdM+92N3u1InLED+xGtV6dVbWmnPTqVzLtWXutUmtJuWqtSdqgvmu/etVRnU6Q3XJOrNm0mWtLrlwyW06WNLNYcrO8C6n19Jnvfer4+q0zHjoAAADAf3bpHUWCIAaCaMpaCKMMoQ80df9z7swd0hijHzpAguL1+gkV8oqQX5TcTsKV07Byiwe48koSjowWSmYPfK7lVKwuY/56yOsADRkyCvIu7d35yGyAk1DulEh3naPbMmpgmyw5RcKRVSwJK6Pka+TV/j5j0rzzJLAhsw7ZVU/J6e9O6/X6Z89edrWGYSAA2zO+yol+8f4viw8gEDvaNZ+TiStLVRbd9b9/B3FgV5bPCCYnXbzg6okUIKZSXoDNQCTHRyDj9iNL8fKawKTvMepVooMRh0Nkj0FOjjxk0maftmi3kNDO+MaDvvWJ4I7ZG28Yy8S1wHIZO2OiEaDKC7RP6NnNGrrD8DlltN6Z3mlWuz9+ZwQRGA5bbBW9Y4xzvIQeNFN5oWILfifsyK2I1vOVIy9MlVn49SFjgIk9IoI5eothtIA8k/irSclN/TNOUcg7iq2vtT0yf+V7+TuXbqNbC6k/n/97QhW68bUTm4J0QJGAyyOeooJfXw6+lioS2GYnugHFEoVuyDNQUUhC17a+G1+VSHlJWSZWcYxRl9TG4YoLyhPetDN3rkNLrrEj4uPd0bfFdrjPHTemPTwOXR5wFuybtZPGSvOAObsuQXmLQWFbNbero7Rm04JqeHY5Gtt46doMnqrQ433Iz6nmtStBuz1tYXYJeUAZtD4dzS6kGYMblyzKe3gweMHn///0/763BwckAAAAAIL+v+5HqAAAAAAAwERzxSF5trbUPAAAAABJRU5ErkJggg==',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Contact us',
                    description: 'Cras ultricies finibus nunc a egestas.',
                    sections: [
                        {
                            id: '1',
                            icon: 'fa-solid fa-location-dot',
                            content: 'Lawyer Company Ltd.<br />10, Union Street',
                        },
                        {
                            id: '2',
                            icon: 'fa-solid fa-phone',
                            content: 'Tel: 234 234 234<br />Email: lawyer@lawyer.com',
                        },
                        {
                            id: '3',
                            icon: 'fa-solid fa-clock',
                            content: 'Mon-Sat: 08:00 – 20:00<br />Sunday: Closed',
                        }
                    ],
                };
            },
        },
        config: {
            state: () => {
                return {
                    contactFormId: '',
                };
            },
        },
    },
};
