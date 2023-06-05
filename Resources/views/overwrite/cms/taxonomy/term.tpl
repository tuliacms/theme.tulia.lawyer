{% extends 'theme' %}

{% block content %}
    {% include template('_parts/page-header.tpl') with { title: term.name } %}
    {% if edit_links_enabled() %}
        <div class="container-xxl">
            <div class="row">
                <div class="col my-4">{{ edit_links(term) }}</div>
            </div>
        </div>
    {% endif %}
    <div class="container-xxl">
        <div class="row my-5 nodes-list">
            {% for node in nodes %}
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="node-entry">
                        {% if node.thumbnail %}
                            <a href="{{ node_path(node) }}" title="{{ node.title }}">
                                {{ image(node.thumbnail, { size: 'node-thumbnail' }) }}
                            </a>
                        {% endif %}
                        <h2 class="block-title text-start mb-4 mt-4">
                            <a href="{{ node_path(node) }}" title="{{ node.title }}" class="d-block">
                                <span>{{ node.title }}</span>
                            </a>
                        </h2>
                        {{ edit_links(node) }}
                        <p>{{ node.introduction }}</p>
                        <a href="{{ node_path(node) }}" title="{{ node.title }}" class="btn btn-primary">{{ 'readMore'|trans }}</a>
                    </div>
                </div>
            {% endfor %}
        </div>
        <div class="row my-5">
            <div class="col">
                {{ paginator.position('center')|raw }}
            </div>
        </div>
    </div>
{% endblock %}
