---
title: Type
eleventyNavigation:
  key: Type
  parent: Components
  order: 4
---

{% import 'macros/code.njk' as code %}

## Headings

<div class="doc-example doc-flow">
  <div>
    <p class="lwj-heading-1">#DoItAnyways</p>
    <p class="lwj-text-body-sm"><strong>.lwj-heading-1</strong></p>
  </div>

  <div>
    <p class="lwj-heading-2">Build an app by April 14 for a chance to win a MacBook Air</p>
    <p class="lwj-text-body-sm"><strong>.lwj-heading-2</strong></p>
  </div>

  <div>
    <p class="lwj-heading-3">Participate and win prizes!</p>
    <p class="lwj-text-body-sm"><strong>.lwj-heading-3</strong></p>
  </div>

  <div>
    <p class="lwj-heading-4">No ragrets</p>
    <p class="lwj-text-body-sm"><strong>.lwj-heading-4</strong></p>
  </div>
</div>

{% call code.sample() %}
<p class="lwj-heading-1">#DoItAnyways</p>
<p class="lwj-heading-2">Build an app by April 14 for a chance to win a MacBook Air</p>
<p class="lwj-heading-3">Participate and win prizes!</p>
<p class="lwj-heading-4">No ragrets</p>
{% endcall %}

## Body Text

<div class="doc-example doc-flow">
  <div>
    <p class="lwj-text-body-md">The only way to get better at a thing is to do the thing. Join Jason in his daily deliberate practice to improve his filmmaking. There are always reasons not to start — if we want to be great, we have to #DoItAnyways.</p>
    <p class="lwj-text-body-sm"><strong>.lwj-text-body-md</strong></p>
  </div>

  <div>
    <p class="lwj-text-body-sm">My whole life philosophy sounds kinda silly when I say it out loud.</p>
    <p class="lwj-text-body-sm"><strong>.lwj-text-body-sm</strong></p>
  </div>
</div>

{% call code.sample() %}
<p class="lwj-text-body-md">The only way to get better at a thing is to do the thing. Join Jason in his daily deliberate practice to improve his filmmaking. There are always reasons not to start — if we want to be great, we have to #DoItAnyways.</p>
<p class="lwj-text-body-sm">My whole life philosophy sounds kinda silly when I say it out loud.</p>
{% endcall %}

## Eyebrows

<div class="doc-example doc-flow">
  <div>
    <p class="lwj-text-eyebrow-lg">Newsletter</p>
    <p class="lwj-text-body-sm"><strong>.lwj-text-eyebrow-lg</strong></p>
  </div>

  <div>
    <p class="lwj-text-eyebrow-sm">Manage your profile</p>
    <p class="lwj-text-body-sm"><strong>.lwj-text-eyebrow-sm</strong></p>
  </div>
</div>

{% call code.sample() %}
<p class="lwj-text-eyebrow-lg">Newsletter</p>
<p class="lwj-text-eyebrow-sm">Manage your profile</p>
{% endcall %}

## Emphasis

<div>
  <p class="lwj-text-subdued">Use subdued text to reduce emphasis independent of font size and weight.</p>
  <p class="lwj-text-body-sm"><strong>.lwj-text-subdued</strong></p>
</div>

<div>
  <p><strong>Use strong text to increase emphasis independent of font size and color.</strong></p>  <p class="lwj-text-body-sm"><strong>Use <code>&lt;strong&gt;</code> on body text</strong></p>
</div>

{% call code.sample() %}
<p class="lwj-text-subdued">Use subdued text to reduce emphasis independent of font size and weight.</p>
<p><strong>Use strong text to increase emphasis independent of font size and color.</strong></p> 
{% endcall %}

## Centered Text

Use `.lwj-text-center` to align text to the center of a container.

**Example**  
A block of text with aligned to the center.

<div class="doc-example">
  <p class="lwj-text-center">Participate and win prizes!</p>
</div>

{% call code.sample() %}
<p class="lwj-text-center">Participate and win prizes!</p>
{% endcall %}

## Columns

Use `.lwj-columns` to distribute multiple lines of text into two or more columns. Use custom properties to override the value of the number of columns and the column width. 

You can override the default values for the number of columns and space between columns using custom properties.

<table class="doc-table">
  <tr>
    <th>Custom Property</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>--columns</code></td>
    <td>2</td>
    <td>Number of columns</td>
  </tr>
  <tr>
    <td><code>--gap</code></td>
    <td>60px</td>
    <td>Space between columns</td>
  </tr>
</table>

**Example**  
Text divided into columns.

<div class="doc-example">
  <p class="lwj-columns" style="--columns: 3; --gap: 30px">
    Natalie Davis<br>
    Vaibhav Tandon<br>
    Brandon Roberts<br>
    Erin Mikail Staples<br>
    Nick Taylor<br>
    Art Rosnovsky<br>
    Roger Stringer<br>
    Adam<br>
    Tiago Couto<br>
    Darshak Parikh<br>
    Craig Richardson<br>
    Bryan Robinson<br>
    Michael Nichols<br>
    Patrick Whitty-Clarke<br>
    Samuel Alvarez<br>
    Peter Carlsson<br>
    patrick.py<br>
    Yannick<br>
    It's Charlie.<br>
    Acthy<br>
    Vinny (MRVDOG)<br>
    michaeljolley<br>
    Gil Creque
  </p>
</div>

{% call code.sample() %}
<p class="lwj-columns" style="--columns: 3; --gap: 30px">
  Natalie Davis<br>
  Vaibhav Tandon<br>
  Brandon Roberts<br>
  ...
  Vinny (MRVDOG)<br>
  michaeljolley<br>
  Gil Creque
</p>
{% endcall %}