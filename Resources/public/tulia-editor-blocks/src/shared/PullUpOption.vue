<template>
    <Select v-model="block.config.pullUp" :label="translator.trans('pullUp', 'Tulia/Lawyer')" :help="translator.trans('pullUpHelp', 'Tulia/Lawyer')" :choices="options.pullUp"></Select>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const translator = inject('translator');
const controls = inject('controls.registry');

const Select = controls.manager('Select');

const options = {
    pullUp: {
        '1': translator.trans('yes'),
        '0': translator.trans('no'),
    }
};
</script>
