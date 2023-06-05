<template>
    <div :class="classlist">
        <div class="row g-0">
            <div class="col-12 col-md-6 px-0">
                <div class="py-4 py-md-6 px-4 px-md-6">
                    <h2 class="mb-4" v-if="block.data.title">{{ block.data.title }}</h2>
                    <div class="mb-5" v-if="block.data.content" v-html="block.data.content"></div>
                    <Image v-model="block.data.signature" size="original" :holder="block.id"></Image>
                </div>
            </div>
            <div class="col-6 px-0 d-none d-md-block block-sidebar-bg" :style="{ backgroundImage: sidebar.backgroundImage }"></div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const Image = extensions.render('Image');
const BackgroundImage = extensions.render('BackgroundImage');
const sidebar = BackgroundImage.of(block, () => block.data.sidebar);

const classlist = computed(() => {
    return 'block block-about' + (block.config.pullUp === '1' ? ' block-pull-up' : '');
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.About.Render' }
</script>
