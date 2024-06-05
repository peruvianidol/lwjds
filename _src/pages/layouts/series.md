---
title: Series
eleventyNavigation:
  key: Series
  parent: Layouts
  order: 1
---

{% import 'macros/code.njk' as code %}

<style>
  .lwj-layout-series-sample {
    border: 1px solid #615384;
    background-color: #0E032A;
    display: grid;
    grid-template-columns: 64px 1fr 64px;
    grid-template-rows: 32px auto 1fr auto;
    > * {
      outline: 1px dashed darkslateblue;
      outline-offset: 0px;
      padding: .5rem 1rem;
    }
    > [data-grid-area="hero"] {
      grid-column: 1 / -1;
      grid-row: 1 / 4;
      aspect-ratio: 1200/567;
      background-color: #E9E7ED;
    }
    > [data-grid-area="logo"] {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      z-index: 10;
      margin-left: 32px;
      background-color: #AE45FE;
      color: #FAF9FD;
      width: 100px;
      height: fit-content;
      z-index: 15;
      text-align: center;
      align-content: center;
    }
    > [data-grid-area="nav"] {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      width: 100%;
      height: fit-content;
      background-color: #9A91B1;
      z-index: 10;
      text-align: right;
      align-content: center;
    }
    > [data-grid-area="promo"] {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      background-color: #78757f;
      color: #FAF9FD;
      width: 100%;
      align-content: end;
    }
    > [data-grid-area="main"] {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
      height: 400px;
      background-color: #615384;
      color: #FAF9FD;
    }
  }
</style>

The series layout features several overlapping elements.

* The **Hero** image serves as a background for the top section of the page. Pass in the image URL with the custom property `--image`.
* The **Nav** sits above the Hero an aligns to the top/right of the page.
* The **Logo** sits above the Nav and is positioned to the left.
* The **Promo** section includes content related to the Hero image and sits above the Hero and aligns to the bottom/left.
* The **Main** section appears after the Hero and includes the rest of the page content.

**Example**  
A visualization of the Series layout. (Areas are not to scale.)

<div class="lwj-layout-series-sample">
  <div data-grid-area="logo">Logo</div>
  <nav data-grid-area="nav">Nav</nav>
  <div data-grid-area="hero">Hero</div>
  <div data-grid-area="promo">Promo</div>
  <main data-grid-area="main">Main</main>
</div>

{% call code.sample() %}
<div class="lwj-layout-series">
  <div data-grid-area="logo">...</div>
  <nav data-grid-area="nav">...</nav>
  <div data-grid-area="hero" style="--image: url('jason-hero.jpg')">...</div>
  <div data-grid-area="promo">...</div>
  <main data-grid-area="main">...</main>
</div>
{% endcall %}