<template>
    <Select v-model="block.data.style.padding" label="Margins" :choices="options.padding"></Select>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const translator = inject('translator');

const Select = props.block.control('Select');

const options = {
    padding: {
        '': 'Default margin',
        'block-no-padding': 'No margin',
        'block-padding-top': 'Margin on top',
        'block-padding-bottom': 'Margin on bottom',
        'block-padding-double': 'Margin double',
        'block-padding-double-bottom': 'Margin double on top',
        'block-padding-double-top': 'Margin double on bottom',
    }
};
</script>
