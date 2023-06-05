<template>
    <div class="block block-introduction">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title">
                        <span>{{ block.data.title }}</span>
                    </div>
                    <div class="block-inner py-3 py-md-5">
                        <p class="lead mb-4">{{ block.data.lead }}</p>
                        <p class="mb-4">{{ block.data.content }}</p>
                        <p class="sublead mb-0">{{ block.data.sublead }}</p>
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
export default { name: 'TuliaLawyerTheme.Block.Introduction.Render' }
</script>
