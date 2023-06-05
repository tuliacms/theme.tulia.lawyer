<template>
    <div class="block block-introduction">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                    <div class="block-inner py-3 py-md-5">
                        <p class="lead mb-4"><Contenteditable v-model="block.data.lead"></Contenteditable></p>
                        <p class="mb-4"><Contenteditable v-model="block.data.content"></Contenteditable></p>
                        <p class="sublead mb-0"><Contenteditable v-model="block.data.sublead"></Contenteditable></p>
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
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Introduction.Editor' }
</script>
