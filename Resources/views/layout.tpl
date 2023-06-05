<!doctype html>
<html lang="{{ page_locale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        {{ do_action('theme.head') }}
        {% block head %}{% endblock %}
    </head>

    {% set hasTopbar = customizer_get('lawyer.header.topbar.show') == 'yes' %}
    {% set hero_bg_desktop_url = image_url(customizer_get('lawyer.header.staticHero.backgroundImage'), { size: 'original', default: asset('/assets/theme/tulia/lawyer/theme/images/static-hero.jpg') }) %}
    {% set footer_bg_desktop_url = image_url(customizer_get('lawyer.footer.backgroundImage'), { size: 'original', default: asset('/assets/theme/tulia/lawyer/theme/images/footer-bg.jpg') }) %}

    <body class="{{ body_class(app.request, [hasTopbar ? ' header-has-topbar' : '']) }}">
        {% include template('_parts/header.tpl') %}
        {{ flashes() }}
        {% if is_homepage() %}
            {% include template('_parts/hero/static.tpl') %}
        {% endif %}
        {% block content %}{% endblock %}
        {% include template('_parts/footer.tpl') %}
        {{ do_action('theme.body') }}
    </body>
</html>
