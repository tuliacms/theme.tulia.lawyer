<template>
    <div :class="classlist" style="z-index:0">
        <div class="container-xxl">
            <div class="row">
                <div class="block-number-entry col-6 col-md py-4" v-for="entry in entries.collection" :key="entry.id">
                    <Contenteditable class="block-number" v-model="entry.number"></Contenteditable>
                    <Contenteditable class="block-label" v-model="entry.label"></Contenteditable>
                    <div>
                        <Actions actions="moveBackward,moveForward,remove" :collection="entries" :item="entry"></Actions>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <Actions actions="add" :collection="entries"></Actions>
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

const Contenteditable = extensions.editor('Contenteditable');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');

const entries = new Collection(block, 'numbers', {
    number: 1700,
    label: 'Trusted clients',
});

const classlist = computed(() => {
    return 'block block-company-numbers '
        + (block.config.pullUp === '1' ? ' block-pull-up' : '')
        + (block.config.type === 'compacted' ? ' block-company-numbers-compacted' : '')
    ;
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.CompanyInNumbers.Editor' }
</script>
