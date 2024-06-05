---
title: Avatars
eleventyNavigation:
  key: Avatars
  parent: Components
  order: 1
---

{% import 'macros/code.njk' as code %}

Use avatars to display a portrait of a person. Images with non-square aspect ratios will be cropped to the center. Be sure to include an `alt` attribute. Avatars come in two sizes.

<table class="doc-table">
  <tr>
    <th>Class</th>
    <th>Size</th>
  </tr>
  <tr>
    <td><code>.lwj-avatar</code></td>
    <td>90px</td>
  </tr>
  <tr>
    <td><code>.lwj-avatar-sm</code></td>
    <td>30px</td>
  </tr>
</table>

**Example**  
Default and small avatars.

<div class="doc-example doc-flow">
  <div class="doc-flex">
    <img class="lwj-avatar" src="/assets/images/jason.jpg" alt="Jason">
    <img class="lwj-avatar" src="/assets/images/sarah.png" alt="Sarah">
    <img class="lwj-avatar" src="/assets/images/angie.png" alt="Angie">
  </div>
  <div class="doc-flex">
    <img class="lwj-avatar-sm" src="/assets/images/jason.jpg" alt="Jason">
    <img class="lwj-avatar-sm" src="/assets/images/sarah.png" alt="Sarah">
    <img class="lwj-avatar-sm" src="/assets/images/angie.png" alt="Angie">
  </div>
</div>

{% call code.sample() %}
<img class="lwj-avatar" src="jason.jpg" alt="Jason">
<img class="lwj-avatar" src="sarah.png" alt="Sarah">
<img class="lwj-avatar" src="angie.png" alt="Angie">
<img class="lwj-avatar-sm" src="jason.jpg" alt="Jason">
<img class="lwj-avatar-sm" src="sarah.png" alt="Sarah">
<img class="lwj-avatar-sm" src="angie.png" alt="Angie">
{% endcall %}