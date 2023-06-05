<template>
    <div class="block block-text">
        <div class="block-title mb-3 mb-md-4">
            <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
        </div>
        <WysiwygEditor v-model="block.data.content"></WysiwygEditor>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
const WysiwygEditor = extensions.editor('WysiwygEditor');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Text.Editor' }
</script>
