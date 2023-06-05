<header class="{{ hasTopbar ? 'header-has-topbar' : '' }}">
    {% if hasTopbar %}
        <div class="topbar-info">
            <div class="container-fluid container-xxl">
                <div class="row">
                    <div class="col-12 col-md-6 text-center text-md-start" {{ customizer_live_control('lawyer.header.topbar.textLeft', { type: 'inner-html' }) }}>{{ customizer_get('lawyer.header.topbar.textLeft') }}</div>
                    <div class="col-12 col-md-6 text-center text-md-end" {{ customizer_live_control('lawyer.header.topbar.textRight', { type: 'inner-html' }) }}>{{ customizer_get('lawyer.header.topbar.textRight') }}</div>
                </div>
            </div>
        </div>
    {% endif %}
    <div class="container-fluid container-xxl">
        <nav class="navbar navbar-expand-md">
            <a class="navbar-brand" href="{{ path('frontend.homepage') }}">
                <img src="{{ asset('/assets/theme/tulia/lawyer/theme/images/logo.svg') }}" alt="Website Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main-menu-collapsible" aria-controls="navbar-main-menu-collapsible" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbar-main-menu-collapsible">
                {{ menu_space('mainmenu', 'horizontal') }}
            </div>
        </nav>
    </div>
</header>
