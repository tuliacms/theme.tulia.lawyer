<template>
<!--    <BlockPadding :block="block"></BlockPadding>-->
    <FormSelect v-model="block.config.contactFormId" :label="translator.trans('Form', 'Tulia/Lawyer')"></FormSelect>
</template>
<script setup>
const { defineProps, inject, onMounted } = require('vue');
const BlockPadding = require('./../shared/BlockPadding.vue').default;
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const controls = inject('controls.registry');

const FormSelect = controls.manager('FormSelect');
onMounted(() => {
    block.config.__margin.top.xs = 1;
    block.config.__margin.top.xl = 5;
    block.config.__margin.bottom.xs = 1;
    block.config.__margin.bottom.xl = 5;
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.ContactDetails.Manager' }
</script>
