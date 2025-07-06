---
layout: archive
title: My Public Repos
permalink: /repos/
---

<ul>
{% for repo in site.github.public_repositories %}
  <li>
    <a href="{{ repo.html_url }}">{{ repo.name }}</a> — {{ repo.description }}
  </li>
{% endfor %}
</ul>
