---
title: Spacing
eleventyNavigation:
  key: Spacing
  parent: Visual Style
  order: 2
---

Spacing refers to the values used to create space between elements (margin) and within elements (padding). Our spacing values should be far enough apart to create a distinct heirarchy while using as few values as possible. Spacing is largely applied using [utility classes](/utilities/spacing/) rather than within component styles to make components as reusable as possible in different contexts.

## Spacing Scale

<ul class="doc-space-list lwj-grid" role="list" style="--align-items: end; --grid-col-min: 100px">
  <li data-size="xs"><code>$spacing-xs</code><br>(5px)</li>
  <li data-size="sm"><code>$spacing-sm</code><br>(10px)</li>
  <li data-size="md"><code>$spacing-md</code><br>(20px)</li>
  <li data-size="lg"><code>$spacing-lg</code><br>(30px)</li>
  <li data-size="xl"><code>$spacing-xl</code><br>(60px)</li>
</ul>

## Logical Properties

CSS logical properties replace directions (up/down/left/right) with `inline` and `block` to better support languages with writing directions that are not left-to-right, top-to-bottom.

In English:

* **Inline** refers to left/right values
* **Block** refers to top/bottom values
* **Inline Start** = left
* **Inline End** = right
* **Block Start** = top
* **Block End** = bottom

See [web.dev's logical properties](https://web.dev/learn/css/logical-properties) for more.

## Terminology

Terminology for spacing is derived from Nathan Curtis' [Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62).

### Inset

Inset describes the space within an element and refers to a padding value. There are also several modifiers that describe how the space is distributed.

* **Inset Square** has equal padding on all four sides.
* **Inset Squish** has more inline padding than block padding.
* **Inset Stretch** has more block padding than inline padding.

<div class="doc-grid">
  <figure>
    <div class="doc-example-inset-square"></div>
    <figcaption>Inset Square</figcaption>
  </figure>
  <figure>
    <div class="doc-example-inset-squish" style="--inset: .5rem 1rem"></div>
    <figcaption>Inset Squish</figcaption>
  </figure>
  <figure>
    <div class="doc-example-inset-stretch" style="--inset: 1rem .5rem"></div>
    <figcaption>Inset Stretch</figcaption>
  </figure>
</div>

### Stack

Stack descibes the vertical space applied to the outside of an element to provide space between elements and refers to a margin value. To avoid collapsing margins, we only apply margin to the bottom or right of an element wherever possible.

<div class="doc-grid">
  <figure>
    <div class="doc-stack doc-example-stack"></div>
    <div class="doc-example-inset-square" style="--inset: 0"></div>
    <figcaption>Stack</figcaption>
  </figure>
</div>

### Inline 

Inline describes the horizontal space applied to the outside of an element to provide space between elements and refers to a margin value.

<div>
  <figure>
    <div class="doc-grid">
      <div class="doc-inline doc-example-inline"></div>
      <div class="doc-example-inset-square" style="--inset: 0"></div>
    </div>
    <figcaption>Inline</figcaption>
  </figure>
</div>