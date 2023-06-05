<div
    class="page-header"
    data-parallax="scroll"
    data-speed="0.75"
    data-image-src="{{ hero_bg_desktop_url }}"
        {{ customizer_live_control('lawyer.header.staticHero.backgroundImage', { type: 'background-image', image_size: 'original', default: hero_bg_desktop_url }) }}
>
    <div class="page-title text-center py-5 px-3 ms-auto me-auto">
        <h1 class="m-0">{{ title }}</h1>
        {{ breadcrumbs('justify-content-center mt-3 d-none d-md-flex') }}
    </div>
</div>
