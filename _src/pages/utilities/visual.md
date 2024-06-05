---
title: Visual
eleventyNavigation:
  key: Visual
  parent: Utilities
  order: 5
---

{% import 'macros/code.njk' as code %}

## Margin Auto

Use `.lwj-margin-auto` to center an element.

**Example**  
A centered image using margin auto.

<div class="doc-example">
  <figure>
    <img src="/assets/images/jason.jpg" class="lwj-avatar lwj-margin-auto lwj-stack-xs" alt="Jason">
    <figcaption class="lwj-text-body-sm lwj-text-center">
      Jason Lengstorf
    </figcaption>
  </figure>
</div>

{% call code.sample() %}
<figure>
  <img src="jason.jpg" class="lwj-avatar lwj-margin-auto lwj-stack-xs" alt="Jason">
  <figcaption class="lwj-text-body-sm lwj-text-center">
    Jason Lengstorf
  </figcaption>
</figure>
{% endcall %}
