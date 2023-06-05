<template>
    <div class="block block-parallax" :data-parallax-image="`#parallax-${block.id}`" :style="{ backgroundImage: background.backgroundImage }">
        <div :id="`parallax-${block.id}`" data-speed="0.75" class="d-none">{{ background.link }}</div>
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                    <div class="block-title text-white mb-4 mb-md-6">
                        <span>Our rules and mission</span>
                    </div>
                </div>
                <div class="col-12 col-md-6" v-html="block.data.contentOne"></div>
                <div class="col-12 col-md-6" v-html="block.data.contentTwo"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const BackgroundImage = extensions.render('BackgroundImage');
const background = BackgroundImage.of(block, () => block.data.background);
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Parallax.Render' }
</script>
