<template>
    <div class="block block-features-compacted">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title without-bottomline mb-4">
                        <span>{{ block.data.title }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-features-list-bg">
            <div class="container-xxl g-0">
                <div class="block-features-list">
                    <div class="block-feature-entry px-2 py-4 px-3" v-for="entry in block.data.features" :key="entry.id">
                        <span class="block-icon mb-3"><i :class="entry.icon"></i></span>
                        <div class="block-hl mb-3">{{ entry.name }}</div>
                        <p v-if="entry.description">{{ entry.description }}</p>
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
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.FeaturesCompacted.Render' }
</script>
