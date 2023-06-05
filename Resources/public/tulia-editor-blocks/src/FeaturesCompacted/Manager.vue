<template></template>
<script setup>
const { defineProps, inject, onMounted } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const sectionConfigurator = inject('configurator.section');

onMounted(() => {
    block.config.__margin.top.xs = 1;
    block.config.__margin.top.xl = 5;
    block.config.__margin.bottom.xs = 1;
    block.config.__margin.bottom.xl = 5;

    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.FeaturesCompacted.Manager' }
</script>
