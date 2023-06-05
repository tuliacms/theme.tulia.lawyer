<template>
    <div class="block block-company-history">
        <div class="container-fluid container-xxl">
            <div class="row">
                <div class="col">
                    <div class="d-flex">
                        <BackgroundImage class="block-image d-none d-md-block" v-model="block.data.image"></BackgroundImage>
                        <div class="block-entries pt-2 ps-3 ps-md-5 pe-1">
                            <h2 class="mb-5"><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                            <div class="block-entry mb-5" v-for="entry in entries.collection" :key="entry.id">
                                <div class="block-entry-hl mb-2">
                                    <span class="block-entry-date"><Contenteditable v-model="entry.year"></Contenteditable></span>,
                                    <span class="block-entry-title"><Contenteditable v-model="entry.headline"></Contenteditable></span>
                                </div>
                                <p><Contenteditable v-model="entry.content"></Contenteditable></p>
                                <Actions actions="moveUp,moveDown,remove" :collection="entries" :item="entry"></Actions>
                            </div>
                            <Actions actions="add" :collection="entries"></Actions>
                        </div>
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
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');
const BackgroundImage = extensions.editor('BackgroundImage');

const entries = new Collection(block, 'entries', {
    year: '2022',
    headline: 'We\'re hiring new lawyers',
    content: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex. Sed orci sapien, elementum vitae massa vitae, consequat malesuada enim. In eros ipsum',
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.CompanyHistory.Editor' }
</script>
