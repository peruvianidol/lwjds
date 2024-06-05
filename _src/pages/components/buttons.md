---
title: Buttons
eleventyNavigation:
  key: Buttons
  parent: Components
  order: 2
---

{% import 'macros/code.njk' as code %}

## Primary Button

Use the primary button as the main call-to-action on a page.

**Example**  
A primary button.

<div class="doc-example lwj-surface-brand">
  <button type="button" class="lwj-button-primary">Start watching</button>
</div>

{% call code.sample() %}
<button type="button" class="lwj-button-primary">Start watching</button>
{% endcall %}