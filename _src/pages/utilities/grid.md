---
title: Grid
eleventyNavigation:
  key: Grid
  parent: Utilities
  order: 3
---

{% import 'macros/code.njk' as code %}

The grid utility lets you arrange elements in a 2-dimensional grid that will respond to the available space given a minimum size.

(Not to be confused with a 12-column grid like you may have used in CSS frameworks like Bootstrap. See Donnie D'Amato's [Gridless Design](https://gridless.design/) for more reasons to scrap the 12-column grid.)

The custom property `--grid-col-min` represents the smallest width a grid item can be before the grid moves an item to the next row and stretches each item equally to fill the available space.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--grid-col-min</code></td>
    <td>200px</td>
    <td>The minimum width of grid items</td>
  </tr>
  <tr>
    <td><code>--gap</code></td>
    <td>8px</td>
    <td>Space between grid items</td>
  </tr>
  <tr>
    <td><code>--align-items</code></td>
    <td>center</td>
    <td>Vertical alignment of grid items</td>
  </tr>
</table>

**Example**  
A grid of items with a minimum width of 150px.

<div class="doc-example">
  <div class="lwj-grid" style="--grid-col-min: 150px">
    <div class="lwj-surface lwj-inset-square">
      <p>Card 1</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Card 2</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Card 3</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Card 4</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Card 5</p>
    </div>
    <div class="lwj-surface lwj-inset-square">
      <p>Card 6</p>
    </div>
  </div>
</div>

{% call code.sample() %}
<div class="lwj-grid" style="--grid-col-min: 150px">
  <div class="lwj-surface lwj-inset-square">
    <p>Card 1</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Card 2</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Card 3</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Card 4</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Card 5</p>
  </div>
  <div class="lwj-surface lwj-inset-square">
    <p>Card 6</p>
  </div>
</div>
{% endcall %}