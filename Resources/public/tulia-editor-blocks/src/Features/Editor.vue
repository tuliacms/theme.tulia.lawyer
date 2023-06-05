<template>
    <div class="block block-features">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title mb-4">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 px-2 pt-2 pt-md-4 pb-2 pb-md-5 px-5 block-feature-entry" v-for="entry in features.collection" :key="entry.id">
                    <span class="block-icon mb-3"><FontIcon v-model="entry.icon"></FontIcon></span>
                    <div><Contenteditable class="block-hl mb-3" v-model="entry.name"></Contenteditable></div>
                    <p><Contenteditable v-model="entry.description"></Contenteditable></p>
                    <a class="d-inline-block px-5 py-2"><Contenteditable v-model="block.data.readMore"></Contenteditable> <FontIcon v-model="block.data.readMoreIcon"></FontIcon></a>
                    <InputText v-model="entry.link" :help="translator.trans('linkFeaturesHelp', 'Tulia/Lawyer')"></InputText>
                    <br />
                    <Actions actions="moveBackward,moveForward,remove" :collection="features" :item="entry"></Actions>
                </div>
                <div class="col-12 px-2 pt-2 pt-md-4 pb-2 pb-md-5 px-5 block-feature-entry">
                    <Actions actions="add" :collection="features"></Actions>
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
const controls = inject('controls.registry');

const Contenteditable = extensions.editor('Contenteditable');
const FontIcon = extensions.editor('FontIcon');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');
const InputText = controls.editor('Input.Text');

const features = new Collection(block, 'features', {
    icon: 'fa-solid fa-house-lock',
    name: 'Real estate law',
    description: 'Nam luctus consequat erat sed blandit. Etiam sit amet lacus scelerisque, molestie sem a, imperdiet ligula',
    link: '',
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Features.Editor' }
</script>
