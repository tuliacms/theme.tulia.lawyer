<template>
    <div class="block block-company-history">
        <div class="container-fluid container-xxl">
            <div class="row">
                <div class="col">
                    <div class="d-flex">
                        <div class="block-image d-none d-md-block" :style="{ backgroundImage: image.backgroundImage }"></div>
                        <div class="block-entries pt-2 ps-3 ps-md-5 pe-1">
                            <h2 class="mb-5">{{ block.data.title }}</h2>
                            <div class="block-entry mb-5" v-for="entry in block.data.entries" :key="entry.id">
                                <div class="block-entry-hl mb-2">
                                    <span class="block-entry-date">{{ entry.year }}</span>,
                                    <span class="block-entry-title">{{ entry.headline }}</span>
                                </div>
                                <p>{{ entry.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const BackgroundImage = extensions.render('BackgroundImage');
const image = BackgroundImage.of(block, () => block.data.image);

const classlist = computed(() => {
    return 'block block-about block-padding-none' + (block.config.pullUp === '1' ? ' block-pull-up' : '');
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.CompanyHistory.Render' }
</script>
