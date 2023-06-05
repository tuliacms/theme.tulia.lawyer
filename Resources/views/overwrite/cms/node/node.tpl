{% extends 'theme' %}

{% block content %}
    {% if node.hasPurpose('page:homepage') == false %}
        {% include template('_parts/page-header.tpl') with { title: node.title } %}
    {% endif %}

    {% if edit_links_enabled() %}
        <div class="container-xxl">
            <div class="row">
                <div class="col my-4">{{ edit_links(node) }}</div>
            </div>
        </div>
    {% endif %}

    <div class="node-content">
        {{ node.content|default|raw }}
    </div>
{% endblock %}
