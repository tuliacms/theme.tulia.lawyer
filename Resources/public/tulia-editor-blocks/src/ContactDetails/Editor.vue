<template>
    <div class="block block-contact-details">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                    <div class="block-title mb-3 mb-md-4">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                    <p class="text-center mb-5"><Contenteditable v-model="block.data.description"></Contenteditable></p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md" v-for="entry in sections.collection" :key="entry.id">
                    <span class="block-icon"><FontIcon v-model="entry.icon"></FontIcon></span>
                    <span class="block-details"><Contenteditable v-model="entry.content"></Contenteditable></span>
                    <Actions actions="moveBackward,moveForward,remove" :collection="sections" :item="entry"></Actions>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <Actions actions="add" :collection="sections"></Actions>
                </div>
            </div>
            <div class="card mt-5">
                <div class="card-body">
                    {{ translator.trans('Here will be rendered form.', 'Tulia/Lawyer') }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
const FontIcon = extensions.editor('FontIcon');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');
const sections = new Collection(block, 'sections', {
    icon: 'fa-solid fa-location-dot',
    content: 'Lawyer Company Ltd.<br />10, Union Street',
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.ContactDetails.Editor' }
</script>
