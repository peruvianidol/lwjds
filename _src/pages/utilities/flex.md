---
title: Flex
eleventyNavigation:
  key: Flex
  parent: Utilities
  order: 2
---

{% import 'macros/code.njk' as code %}

Flexbox utilities help arrange a group of items in a single direction. A parent element with flexbox will position all of its direct child elements.

## Flex

Flex arranges the direct children of an element horizontally.

You can override several defaults using custom properties.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--flex-align</code></td>
    <td>center</td>
    <td>Vertical alignment of flex items (align-items)</td>
  </tr>
  <tr>
    <td><code>--flex-gap</code></td>
    <td>10px</td>
    <td>Space between flex items (gap)</td>
  </tr>
  <tr>
    <td><code>--flex-justify</code></td>
    <td>flex-start</td>
    <td>Horizontal alignment of flex items (justify-content)</td>
  </tr>
  <tr>
    <td><code>--flex-wrap</code></td>
    <td>nowrap</td>
    <td>Whether flex content should wrap</td>
  </tr>
</table>

**Example**  
A list of links arranged horizontally using flex. (Adding `role="list"` removes the default padding and list style.)

<div class="doc-example">
  <ul class="lwj-flex" role="list">
    <li><a href="">Episodes</a></li>
    <li><a href="">Schedule</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Newsletter</a></li>
    <li><a href="">Store</a></li>
  </ul>
</div>

{% call code.sample() %}
<ul class="lwj-flex" role="list">
  <li><a href="">Episodes</a></li>
  <li><a href="">Schedule</a></li>
  <li><a href="">Blog</a></li>
  <li><a href="">Newsletter</a></li>
  <li><a href="">Store</a></li>
</ul>
{% endcall %}

## Space Between

Space Between works exactly the same as Flex except `--flex-justify` is set to `space-between`. This allows you to place two items on opposite sides of a flex container, or divide available space equally among more than two items.

**Example**  
Two buttons placed on opposite sides of a flex container using space between.

<div class="doc-example lwj-surface-brand">
  <div class="lwj-space-between">
    <button class="lwj-button-primary">Previous</button>
    <button class="lwj-button-primary">Next</button>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-space-between">
  <button class="lwj-button-primary">Previous</button>
  <button class="lwj-button-primary">Next</button>
</div>
{% endcall %}

## Flex Item

Flex Item makes an item take up all available horizontal space or, if applied to multiple elements in the same flex container, divides the space equally between those elements.

**Example**  
Blocks of text in flex containers with flex item applied to each child (top row) and without (bottom row). (`--flex-align: stretch` is applied so that each box in a row is the same height regardless of content.)

<div class="doc-example lwj-flow">
  <div class="lwj-flex" style="--flex-align: stretch">
    <div class="lwj-surface lwj-inset-square lwj-flex-item">
      <p>Add user management to a Next.js site with React server components, server actions, and AuthKit.</p>
    </div>
    <div class="lwj-surface lwj-inset-square lwj-flex-item">
      <p>Add audit logging and log streams to a Node Express app.</p>
    </div>
  </div>
  <div class="lwj-flex" style="--flex-align: stretch">
    <div class="lwj-surface lwj-inset-square">
      <p>Add user management to a Next.js site with React server components, server actions, and AuthKit.</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Add audit logging and log streams to a Node Express app.</p>
    </div>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-flex" style="--flex-align: stretch">
  <div class="lwj-surface lwj-inset-square lwj-flex-item">
    <p>Add user management to a Next.js site with React server components, server actions, and AuthKit.</p>
  </div>
  <div class="lwj-surface lwj-inset-square lwj-flex-item">
    <p>Add audit logging and log streams to a Node Express app.</p>
  </div>
</div>
<div class="lwj-flex" style="--flex-align: stretch">
  <div class="lwj-surface lwj-inset-square">
    <p>Add user management to a Next.js site with React server components, server actions, and AuthKit.</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Add audit logging and log streams to a Node Express app.</p>
  </div>
</div>
{% endcall %}


