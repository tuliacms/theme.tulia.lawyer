<div class="hero hero-static">
    <div
         class="hero-bg"
         data-parallax="scroll"
         data-speed="0.75"
         data-image-src="{{ hero_bg_desktop_url }}"
         {{ customizer_live_control('lawyer.header.staticHero.backgroundImage', { type: 'background-image', image_size: 'original', default: hero_bg_desktop_url }) }}
    >
        <div class="hero-texts">
            <div class="hero-text-line1" {{ customizer_live_control('lawyer.header.staticHero.aboveLine') }}>{{ customizer_get('lawyer.header.staticHero.aboveLine') }}</div>
            <div class="hero-text-line2" {{ customizer_live_control('lawyer.header.staticHero.headline') }}>{{ customizer_get('lawyer.header.staticHero.headline') }}</div>
            <div class="hero-text-line3" {{ customizer_live_control('lawyer.header.staticHero.description') }}>{{ customizer_get('lawyer.header.staticHero.description') }}</div>
        </div>
    </div>
</div>
