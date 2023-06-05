<template>
    <BackgroundImage class="block block-parallax" v-model="block.data.background">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                    <div class="block-title text-white mb-4 mb-md-6">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <WysiwygEditor v-model="block.data.contentOne"></WysiwygEditor>
                </div>
                <div class="col-12 col-md-6">
                    <WysiwygEditor v-model="block.data.contentTwo"></WysiwygEditor>
                </div>
            </div>
        </div>
    </BackgroundImage>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
const WysiwygEditor = extensions.editor('WysiwygEditor');
const BackgroundImage = extensions.editor('BackgroundImage');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Parallax.Editor' }
</script>
