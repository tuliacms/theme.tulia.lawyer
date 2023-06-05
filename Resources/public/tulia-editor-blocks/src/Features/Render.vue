<template>
    <div class="block block-features">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title mb-4">
                        <span>{{ block.data.title }}</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 px-2 pt-2 pt-md-4 pb-2 pb-md-5 px-5 block-feature-entry" v-for="entry in block.data.features" :key="entry.id">
                    <span class="block-icon mb-3"><span :class="entry.icon"></span></span>
                    <div class="block-hl mb-3">{{ entry.name }}</div>
                    <p>{{ entry.description }}</p>
                    <a v-if="entry.link" :href="entry.link" class="d-inline-block px-5 py-2">{{ block.data.readMore }} <i :class="block.data.readMoreIcon"></i></a>
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
export default { name: 'TuliaLawyerTheme.Block.Features.Render' }
</script>
