<template>
    <div class="block block-features-compacted">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title without-bottomline mb-4">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-features-list-bg">
            <div class="container-xxl g-0">
                <div class="block-features-list">
                    <div class="block-feature-entry px-2 py-4 px-3" v-for="entry in features.collection" :key="entry.id">
                        <span class="block-icon mb-3"><FontIcon v-model="entry.icon"></FontIcon></span>
                        <div class="block-hl mb-3"><Contenteditable v-model="entry.name"></Contenteditable></div>
                        <p><Contenteditable v-model="entry.description"></Contenteditable></p>
                        <Actions actions="moveBackward,moveForward,remove" :collection="features" :item="entry"></Actions>
                    </div>
                </div>
            </div>
            <div class="text-center py-5">
                <Actions actions="add" :collection="features"></Actions>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
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
export default { name: 'TuliaLawyerTheme.Block.FeaturesCompacted.Editor' }
</script>
