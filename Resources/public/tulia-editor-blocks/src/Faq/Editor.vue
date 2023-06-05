<template>
    <div class="block block-faq">
        <div class="container-fluid container-xxl g-0">
            <div class="row">
                <div class="col">
                    <h2 class="mb-5"><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                    <BackgroundImage class="block-hero p-3 p-md-5" v-model="block.data.background">
                        <div class="block-hl">
                            <Contenteditable v-model="block.data.description"></Contenteditable>
                        </div>
                    </BackgroundImage>
                    <div class="accordion mb-4" v-for="entry in faq.collection" :key="entry.id">
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <button class="accordion-button" type="button">
                                    <Contenteditable v-model="entry.question"></Contenteditable>
                                </button>
                            </div>
                            <div class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <WysiwygEditor v-model="entry.answer"></WysiwygEditor>
                                    <Actions actions="moveUp,moveDown,remove" :collection="faq" :item="entry"></Actions>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Actions actions="add" :collection="faq"></Actions>
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

const WysiwygEditor = extensions.editor('WysiwygEditor');
const Contenteditable = extensions.editor('Contenteditable');
const BackgroundImage = extensions.editor('BackgroundImage');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');

const faq = new Collection(block, 'faq', {
    question: 'Phasellus id vestibulum lorem. Etiam nec vulputate ex',
    answer: '<p>Sed orci sapien, <b>elementum vitae massa vitae</b>, consequat malesuada enim. In eros ipsum</p>',
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Faq.Editor' }
</script>
