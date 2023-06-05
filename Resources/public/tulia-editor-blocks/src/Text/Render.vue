<template>
    <div class="block block-text">
        <div class="block-title mb-3 mb-md-4">
            <span>{{ block.data.title }}</span>
        </div>
        <div v-html="block.data.content"></div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Text.Render' }
</script>
