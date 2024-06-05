---
title: Spacing
eleventyNavigation:
  key: Spacing
  parent: Utilities
  order: 4
---

{% import 'macros/code.njk' as code %}

Spacing utilities allow you to adjust the margins and/or padding of an element or group of elements. Refer to [Spacing](/visual-style/spacing/) in Visual Style to learn more about the naming conventions used below.

## Margin

Use margin utilities to adjust the spacing between elements.

### Stack

Stack adds margin to the bottom (block-end) of an element. You can append a size to change the default value.

<table class="doc-table">
  <tr>
    <th>Class</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><code>.lwj-stack-xs</code></td>
    <td>5px</td>
  </tr>
  <tr>
    <td><code>.lwj-stack</code>, <code>.lwj-stack-sm</code></td>
    <td>10px</td>
  </tr>
  <tr>
    <td><code>.lwj-stack-md</code></td>
    <td>20px</td>
  </tr>
  <tr>
    <td><code>.lwj-stack-lg</code></td>
    <td>30px</td>
  </tr>
  <tr>
    <td><code>.lwj-stack-xl</code></td>
    <td>60px</td>
  </tr>
</table>

You can also override the default value with the <code>\--stack-size</code> custom property. 

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--stack-size</code></td>
    <td>10px</td>
    <td>Bottom margin value</td>
  </tr>
</table>

**Example**  
A heading with a bottom margin followed by a paragraph.

<div class="doc-example">
  <p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
  <p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
</div>

{% call code.sample() %}
<p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
<p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
{% endcall %}

### Flow

Flow adds margin to the bottom of all direct children of an element. Use this utility instead of applying the `stack` utility to each child element. The last child element will not include a bottom margin to avoid adding unwanted additional space to the bottom of a flow container. You can append a size to change the default value.

<table class="doc-table">
  <tr>
    <th>Class</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><code>.lwj-flow-xs</code></td>
    <td>5px</td>
  </tr>
  <tr>
    <td><code>.lwj-flow</code>, <code>.lwj-flow-sm</code></td>
    <td>10px</td>
  </tr>
  <tr>
    <td><code>.lwj-flow-md</code></td>
    <td>20px</td>
  </tr>
  <tr>
    <td><code>.lwj-flow-lg</code></td>
    <td>30px</td>
  </tr>
  <tr>
    <td><code>.lwj-flow-xl</code></td>
    <td>60px</td>
  </tr>
</table>

You can also override the default value with the `--flow-size` custom property.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--flow-size</code></td>
    <td>10px</td>
    <td>Bottom margin value of children</td>
  </tr>
</table>

You can also use the `stack` utility inside of a `flow` block to override the margin value for an individual child element.

**Example**  
A heading with a bottom margin of 10px, followed by several paragraphs of text with bottom margins of 20px.

<div class="doc-example">
  <div class="lwj-flow-md">
    <p class="lwj-stack lwj-heading-1">Build for maintainability to boost shipping velocity.</p>
    <p>Maintainable code should be easy to delete. Optimizing for deletion makes code easier to refactor, or even fully replace — and it can be hot-swapped without other systems ever noticing or needing to care.</p>
    <p>Reducing the external surface area of the codebase starts as building for maintainability, but it results in much higher velocity.</p>
    <p>For example, your team might have an API written in Node. Later, you may decide to rebuild in Go or Rust to solve a performance bottleneck. As long as the rebuilt API has the same endpoints, arguments, and return values, none of the services consuming that API don’t even need to be made aware of the change — they’ll just see a performance boost once the new version rolls out.</p>
    <p>Nothing can reach its internals and touch things if the API stays accurate. You don’t have to worry that changing a line of code will break the whole codebase. There’s no way for some other piece of code to reach beyond the API boundary.</p>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-flow-md">
  <p class="lwj-stack lwj-heading-1">Build for maintainability to boost shipping velocity.</p>
  <p>Maintainable code should be easy to delete. Optimizing for deletion makes code easier to refactor, or even fully replace — and it can be hot-swapped without other systems ever noticing or needing to care.</p>
  <p>Reducing the external surface area of the codebase starts as building for maintainability, but it results in much higher velocity.</p>
  <p>For example, your team might have an API written in Node. Later, you may decide to rebuild in Go or Rust to solve a performance bottleneck. As long as the rebuilt API has the same endpoints, arguments, and return values, none of the services consuming that API don’t even need to be made aware of the change — they’ll just see a performance boost once the new version rolls out.</p>
  <p>Nothing can reach its internals and touch things if the API stays accurate. You don’t have to worry that changing a line of code will break the whole codebase. There’s no way for some other piece of code to reach beyond the API boundary.</p>
</div>
{% endcall %}

## Padding

Use padding utilities to adjust the spacing inside of an element.

### Inset Square

Inset Square adds equal padding to all sides of an element.

You can override the default value with the `--inset-size` custom property.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--inset-size</code></td>
    <td>10px</td>
    <td>Padding value</td>
  </tr>
</table>

**Example**  
A heading and paragraph inside of a container with equal padding on all sides.

<div class="doc-example">
  <div class="lwj-surface lwj-inset-square">
    <p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
    <p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-surface lwj-inset-square">
  <p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
  <p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
</div>
{% endcall %}

<!-- ### Inset Squish

Inset Squish adds more padding to the sides of an element than the top and bottom.

You can override the default value with the `--inset-size` custom property.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--inset-size</code></td>
    <td>8px 30px</td>
    <td>Padding value</td>
  </tr>
</table>

**Example**  
A heading and paragraph inside of a container with more padding on the sides than the top and bottom.

<div class="doc-example">
  <div class="lwj-surface lwj-inset-squish">
    <p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
    <p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-surface lwj-inset-squish">
  <p class="lwj-stack lwj-heading-2">Learn from the web's leading experts.</p>
  <p>Every Thursday, Jason pair programs with the brightest minds in web development to learn something new in 90 minutes.</p>
</div>
{% endcall %} -->