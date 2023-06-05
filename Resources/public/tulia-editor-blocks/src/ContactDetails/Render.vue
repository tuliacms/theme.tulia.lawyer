<template>
    <div class="block block-contact-details">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12">
                    <div class="block-title mb-3 mb-md-4">
                        <span>{{ block.data.title }}</span>
                    </div>
                    <p class="text-center mb-5" v-if="block.data.description">{{ block.data.description }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md" v-for="entry in block.data.sections" :key="entry.id">
                    <span class="block-icon"><i :class="entry.icon"></i></span>
                    <span v-if="entry.content" class="block-details" v-html="entry.content"></span>
                </div>
                <div class="col-12">
                    <div class="tued-dynamic-block mt-5">[contact_form id="{{ block.config.contactFormId }}"]</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
</script>
<script>
export default { name: 'TuliaLawyerTheme.Block.ContactDetails.Render' }
</script>
