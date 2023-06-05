<template>
    <div class="block block-single-title">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title mb-3 mb-md-4">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Title.Editor' }
</script>
