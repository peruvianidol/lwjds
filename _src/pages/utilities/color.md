---
title: Color
eleventyNavigation:
  key: Color
  parent: Utilities
  order: 1
---

{% import 'macros/code.njk' as code %}

Color utilities can be used to apply specific colors to text, icons, and backgrounds.

## Text

Use text utilities to change the color of text and icons.

**Example**  
Text and icons in different colors.

<div class="doc-example lwj-flow">
  <div class="lwj-surface lwj-inset-square lwj-text-subdued">
    <p><strong>.lwj-text-subdued</strong><br>
    Use subdued text to reduce emphasis independent of font size/weight.</p>
    {% icon "heart", "lwj-icon-24" %}
  </div>
  <div class="lwj-surface-brand lwj-inset-square lwj-text-inverse">
    <p><strong>.lwj-text-inverse</strong><br>
    Use inverse text to provide adequate contrast on dark backgrounds.</p>
    {% icon "heart", "lwj-icon-24" %}
  </div>
  <div class="lwj-surface-brand lwj-inset-square lwj-text-subdued-inverse">
    <p><strong>.lwj-text-subdued-inverse</strong><br>
    Use subdued inverse text to reduce emphasis on dark backgrounds.</p>
    {% icon "heart", "lwj-icon-24" %}
  </div>
</div>

{% call code.sample() %}
<div class="lwj-surface lwj-text-subdued">
  <p><strong>.lwj-subdued</strong><br>
  Use subdued text to reduce emphasis independent of font size/weight.</p>
  <svg aria-hidden="true" class="lwj-icon-24">
    <title>heart</title>
    <use xlink:href="#heart"></use>
  </svg>
</div>
<div class="lwj-surface-brand lwj-text-inverse">
  <p><strong>.lwj-text-inverse</strong><br>
  Use inverse text to provide adequate contrast on dark backgrounds.</p>
  <svg aria-hidden="true" class="lwj-icon-24">
    <title>heart</title>
    <use xlink:href="#heart"></use>
  </svg>
</div>
<div class="lwj-surface-brand lwj-text-subdued-inverse">
  <p><strong>.lwj-text-subdued-inverse</strong><br>
  Use subdued inverse text to reduce emphasis on dark backgrounds.</p>
  <svg aria-hidden="true" class="lwj-icon-24">
    <title>heart</title>
    <use xlink:href="#heart"></use>
  </svg>
</div>
{% endcall %}

## Inherit

Use the inherit utility to make an element's content inherit the text color of its parent. Useful for overriding the default color of links.

**Example**  
A default link and a link with inherit applied.

<div class="doc-example lwj-flow">
  <p><a href="https://learnwithjason.dev">Learn with Jason</a></p>
  <p><a href="https://learnwithjason.dev" class="lwj-text-inherit">Learn with Jason</a></p>
</div>

{% call code.sample() %}
<p><a href="https://learnwithjason.dev">Learn with Jason</a></p>
<p><a href="https://learnwithjason.dev" class="lwj-text-inherit">Learn with Jason</a></p>
{% endcall %}

## Surface

Use surface utilities to change the background color of an element.

**Example**  
Containers with different background colors.

<div class="doc-example lwj-flow">
  <div class="doc-bordered lwj-surface lwj-inset-square">
    <strong>.lwj-surface</strong>
  </div>
  <div class="doc-bordered lwj-surface-brand lwj-inset-square lwj-text-inverse">
    <strong>.lwj-surface-brand</strong>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-surface lwj-inset-square">
  <strong>.lwj-surface</strong>
</div>
<div class="lwj-surface-brand lwj-inset-square lwj-text-inverse">
  <strong>.lwj-surface-brand</strong>
</div>
{% endcall %}