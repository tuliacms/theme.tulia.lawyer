<template>
    <div class="block block-faq">
        <div class="container-fluid container-xxl g-0">
            <div class="row">
                <div class="col">
                    <h2 class="mb-5">{{ block.data.title }}</h2>
                    <div class="block-hero p-3 p-md-5" :style="{ backgroundImage: background.backgroundImage }">
                        <div class="block-hl">{{ block.data.description }}</div>
                    </div>
                    <div class="accordion" :id="`accordion-${block.id}`">
                        <div class="accordion-item" v-for="(entry, index) in block.data.faq" :key="entry.id">
                            <div class="accordion-header" :id="`heading-${entry.id}`">
                                <button :class="{ 'accordion-button': 1, 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${entry.id}`" aria-expanded="true" :aria-controls="`collapse-${entry.id}`">{{ entry.question }}</button>
                            </div>
                            <div :id="`collapse-${entry.id}`" :class="{ 'accordion-collapse collapse': 1, 'show': index === 0 }" :aria-labelledby="`heading-${entry.id}`" :data-bs-parent="`#accordion-${block.id}`">
                                <div class="accordion-body" v-html="entry.answer"></div>
                            </div>
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

const BackgroundImage = extensions.render('BackgroundImage');
const background = BackgroundImage.of(block, () => block.data.background);
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.Faq.Editor' }
</script>
