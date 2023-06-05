<template>
    <Select label="Style" v-model="block.config.type" :choices="styles"></Select>
</template>
<script setup>
const { defineProps, inject, onMounted } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const controls = inject('controls.registry');

const Select = controls.manager('Select');

const styles = {
    '': 'Default',
    'compacted': 'Compacted',
};
onMounted(() => {
    block.config.__margin.top.xs = 1;
    block.config.__margin.top.xl = 5;
    block.config.__margin.bottom.xs = 1;
    block.config.__margin.bottom.xl = 5;
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.CompanyInNumbers.Manager' }
</script>
