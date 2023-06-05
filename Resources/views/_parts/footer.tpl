{% trans_default_domain 'tulia.lawyer-theme' %}

{% set socialMedia = {
    facebook: customizer_get('lawyer.footer.socialMedia.facebook'),
    twitter: customizer_get('lawyer.footer.socialMedia.twitter'),
    youtube: customizer_get('lawyer.footer.socialMedia.youtube'),
    instagram: customizer_get('lawyer.footer.socialMedia.instagram'),
} %}

<footer>
    <div
        class="footer-bg"
        data-parallax="scroll"
        data-speed="0.85"
        data-image-src="{{ footer_bg_desktop_url }}"
        {{ customizer_live_control('lawyer.footer.backgroundImage', { type: 'background-image', image_size: 'original', default: footer_bg_desktop_url }) }}
    >
        <div class="footer-fg container-fluid container-xxl py-3 pt-5 py-md-8">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-12 text-center text-md-start pe-md-5">
                    {{ widgets_space('footer-info') }}
                </div>
                <div class="col-md-5 col-sm-4 col-12 text-center text-md-start pe-md-5 footer-links-two-columns">
                    {{ menu_space('footer-links', 'vertical') }}
                </div>
                <div class="col-md-3 col-sm-4 col-12 text-center text-md-start">
                    {{ widgets_space('footer-contact') }}
                </div>
            </div>
        </div>
    </div>
    <div class="footer-copyrights">
        <div class="container-fluid container-xxl">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <p class="mb-3 mb-md-0">Copyrights &copy; <span {{ customizer_live_control('lawyer.footer.copyrights') }}>{{ customizer_get('lawyer.footer.copyrights') }}</span></p>
                </div>
                <div class="col-12 col-md-6 text-center text-md-end footer-copyrights-socials">
                    {% if socialMedia.facebook %}
                        <a href="{{ socialMedia.facebook }}" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i></a>
                    {% endif %}
                    {% if socialMedia.twitter %}
                        <a href="{{ socialMedia.twitter }}" target="_blank" rel="noopener"><i class="fa-brands fa-twitter"></i></a>
                    {% endif %}
                    {% if socialMedia.youtube %}
                        <a href="{{ socialMedia.youtube }}" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
                    {% endif %}
                    {% if socialMedia.instagram %}
                        <a href="{{ socialMedia.instagram }}" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</footer>
