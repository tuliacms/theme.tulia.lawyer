<template>
    <div class="block block-people">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title mb-4 mb-md-6">
                        <span><Contenteditable v-model="block.data.title"></Contenteditable></span>
                    </div>
                    <div class="row">
                        <div class="col-4" v-for="entry in people.collection" :key="entry.id">
                            <div class="block-person mb-5">
                                <Image v-model="entry.image" size="lawyer-square" :holder="block.id"></Image>
                                <div class="block-person-details pt-4 pb-4">
                                    <h4><Contenteditable v-model="entry.name"></Contenteditable></h4>
                                    <span class="person-position"><Contenteditable v-model="entry.position"></Contenteditable></span>
                                </div>
                                <div class="block-person-contacts py-2">
                                    <span class="person-email"><Contenteditable v-model="entry.email"></Contenteditable></span>
                                    <span class="person-phone">Tel: <Contenteditable v-model="entry.phone"></Contenteditable></span>
                                </div>
                                <Actions actions="moveBackward,moveForward,remove" :collection="people" :item="entry"></Actions>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <Actions actions="add" :collection="people"></Actions>
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
const Image = extensions.editor('Image');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');

const people = new Collection(block, 'people', {
    image: {id: null, filename: null, size: 'lawyer-square'},
    name: 'Obediah Stone',
    position: 'Lawyer & CEO',
    email: 'john.doe@gmail.com',
    phone: '800-700-600',
});
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.People.Editor' }
</script>
