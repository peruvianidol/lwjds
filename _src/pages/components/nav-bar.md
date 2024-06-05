---
title: Nav Bar
eleventyNavigation:
  key: Nav Bar
  parent: Components
  order: 3
---

{% import 'macros/code.njk' as code %}

The nav bar is a flex container with a semi-transparent background for placing on top of a background image. The small version uses a lighter background color, has less padding, and is an inline flex container rather than a block flex container.

You can override the default justification of the contents of the nav bar using the `--flex-justify` custom property.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--flex-justify</code></td>
    <td>flex-start</td>
    <td>Horizontal alignment of flex items (justify-content)</td>
  </tr>
</table>

**Example**  
A small nav bar and a default nav bar.

<div class="doc-example lwj-flow lwj-surface-brand">
  <a href="" class="lwj-text-eyebrow-sm lwj-nav-bar-sm">
    <span>Manage your profile</span>
    <img class="lwj-avatar-sm" src="/assets/images/jason.jpg" alt="Jason">
  </a>
  <ul role="list" class="lwj-text-eyebrow-lg lwj-nav-bar">
    <li><a href="">Watch</a></li>
    <li><a href="">Schedule</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Partners</a></li>
    <li><a href="">Search (&#8984;K)</a></li>
  </ul>
</div>

{% call code.sample() %}
<a href="" class="lwj-text-eyebrow-sm lwj-nav-bar-sm">
  <span>Manage your profile</span>
  <img class="lwj-avatar-sm" src="jason.jpg" alt="Jason">
</a>
<ul role="list" class="lwj-text-eyebrow-lg lwj-nav-bar">
  <li><a href="">Watch</a></li>
  <li><a href="">Schedule</a></li>
  <li><a href="">Blog</a></li>
  <li><a href="">Partners</a></li>
  <li><a href="">Search (&#8984;K)</a></li>
</ul>
{% endcall %}