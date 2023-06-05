<template>
    <div :class="classlist">
        <div class="container-xxl">
            <div class="row">
                <div class="block-number-entry col-6 col-md py-4" v-for="entry in block.data.numbers" :key="entry.id">
                    <span class="block-number">{{ entry.number }}</span>
                    <span class="block-label">{{ entry.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);

const classlist = computed(() => {
    return 'block block-company-numbers '
        + (block.config.pullUp === '1' ? ' block-pull-up' : '')
        + (block.config.type === 'compacted' ? ' block-company-numbers-compacted' : '');
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.CompanyInNumbers.Render' }
</script>
