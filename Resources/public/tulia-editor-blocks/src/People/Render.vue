<template>
    <div class="block block-people">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-title mb-4 mb-md-6">
                        <span>{{ block.data.title }}</span>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="entry in block.data.people" :key="entry.id">
                                <div class="block-person">
                                    <Image v-model="entry.image" size="lawyer-square"></Image>
                                    <div class="block-person-details pt-4 pb-4">
                                        <h4>{{ entry.name }}</h4>
                                        <span v-if="entry.position" class="person-position">{{ entry.position }}</span>
                                    </div>
                                    <div class="block-person-contacts py-2" v-if="entry.email || entry.phone">
                                        <a v-if="entry.email" class="person-email" :href="`mailto:${entry.email}`">{{ entry.email }}</a>
                                        <a v-if="entry.phone" class="person-phone" :href="`tel:${entry.phone}`">Tel: {{ entry.phone }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
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

const Image = extensions.render('Image');
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.People.Render' }
</script>
