<template>
    <div class="block block-about" style="z-index:0">
        <div class="row g-0">
            <div class="col-12 col-md-6 px-0">
                <div class="py-4 py-md-6 px-4 px-md-6">
                    <h2 class="mb-4"><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                    <WysiwygEditor class="mb-5" v-model="block.data.content"></WysiwygEditor>
                    <Image v-model="block.data.signature" size="original" :holder="block.id"></Image>
                </div>
            </div>
            <BackgroundImage class="col-6 px-0 d-none d-md-block block-sidebar-bg" placement="sidebar" v-model="block.data.sidebar"></BackgroundImage>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
const WysiwygEditor = extensions.editor('WysiwygEditor');
const Image = extensions.editor('Image');
const BackgroundImage = extensions.editor('BackgroundImage');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.About.Editor' }
</script>
