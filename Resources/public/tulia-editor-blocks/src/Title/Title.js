const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'Title',
    name: 'Title',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABkCAMAAACYXt08AAAAe1BMVEX////8/Pz59vHt7u7y8vL6+PeYm5zz7OampKHy9ffh6/CJlpt8hYhbbXiysbCAl6NleIOHgHtlbG5NXWfV4Oavx9OhuMXNxb6Yrbidk4qNjImcioFweXtzb21bZWtAVGBPVln/8+Hj29fE0dbu2MnZ0MjFt6zCrZ5shI/ZUJrEAAAA4ElEQVR42u3TuW7DMBCE4WUoUtRp3bdk2Y6dvP8TRka6VKkMg/g/zDbbTTECAAAAAAAAAAAAAAAAAAAAAPi/3u4u2SdXT2Mm4Z6f5F6X3TpImLo0Hm3Znu1JiY+MqlS0BJfCfJ5EVhtLmJXd3Mo4yFd6llDXqfiqElnkUshRPVj6RsKiz+ZWzd1v9aZeG/HTdbtdq/iRxY8iT6r8W+6ZS8rE3qxLImenYcu3WLxkdGS0Cp7Rz0iktdLHqUBEAhMdXz+3jreiXs18/KFejeoAAAAAAAAAAAAAAAAAAAAA/PAD1MELvMz5egYAAAAASUVORK5CYII=',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    title: 'Title',
                };
            },
        },
    },
};
