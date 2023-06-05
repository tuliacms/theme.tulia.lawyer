const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'Text',
    name: 'Text',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Text block',
                    content: '<p>Mauris sed placerat sapien. Etiam eu elit sit amet sem rutrum rhoncus. In vulputate ultrices risus, sed consectetur ante convallis ac. Vestibulum tincidunt feugiat ipsum, sed placerat odio convallis quis. Phasellus leo lectus, interdum et hendrerit ac, lobortis ac dolor. Donec id nisl condimentum, placerat eros quis, mollis tellus. Praesent eu lorem egestas, porta lectus id, iaculis nulla. Fusce rhoncus, libero pellentesque pellentesque fringilla, velit augue fermentum lorem, porttitor condimentum orci orci eu arcu. Duis lobortis nibh ut urna rhoncus, quis tincidunt nisi tempus. Mauris interdum sapien tortor, a rhoncus quam interdum nec. Donec eget tincidunt risus. In efficitur, lectus auctor cursus facilisis, purus lacus mattis metus, sit amet ullamcorper elit magna ut elit. Integer congue, lorem vitae ullamcorper auctor, nibh nulla facilisis metus, ut facilisis arcu leo sed lectus. Cras congue elementum nisl, et pretium mi fringilla vel.</p><p>Sed dignissim tellus justo, at feugiat arcu condimentum id. Cras ultricies finibus nunc a egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis vehicula tellus. Mauris elit lacus, ornare eget orci eget, sodales bibendum tortor. Nunc quam turpis, luctus eu turpis et, molestie tincidunt nulla. Curabitur vel ipsum a ligula venenatis pellentesque eu a dui. Integer auctor odio nec porta gravida. Cras lorem massa, pretium vel dapibus id, gravida a ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque viverra elit quis leo auctor cursus. Donec non consequat metus, nec tempor ligula. Praesent dictum felis at leo faucibus porttitor. Vivamus ut sem et augue imperdiet hendrerit.</p>',
                };
            },
        },
    },
};