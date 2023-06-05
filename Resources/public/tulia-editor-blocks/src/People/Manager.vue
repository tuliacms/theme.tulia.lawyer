<template></template>
<script setup>
const { defineProps, inject, onMounted } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
onMounted(() => {
    block.config.__margin.top.xs = 1;
    block.config.__margin.top.xl = 5;
    block.config.__margin.bottom.xs = 1;
    block.config.__margin.bottom.xl = 5;
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.People.Manager' }
</script>
