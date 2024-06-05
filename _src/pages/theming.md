---
title: Theming
layout: page.njk
permalink: /theming/
hasBreadcrumbs: true
eleventyNavigation:
  key: Theming
  order: 6
---

{% import 'macros/code.njk' as code %}

You can use custom properties to override some of the system's default values to support multiple brands and/or light/dark mode.

Under the hood, the system uses the CSS var() function to set themeable values to a custom property, and if that property doesn’t exist, it will default to the token value.

{% highlight "scss" %}
.lwj-surface-brand {
  background-color: var(--color-background-brand, #{$color-background-brand});
}
{% endhighlight %}

To create theme, include your values in a CSS file via a `link` tag in the document’s `head` to point to an external file, or use a `style` tag to add them directly to a page.

Your custom properties can be scoped to the `:root` (the entire document), or you can isolate them to a specific area of the page by scoping it to a class.

The examples below are editable. You can replace any of the color names with CSS color names or any other [supported color values](https://www.w3schools.com/cssref/css_colors_legal.php) and this page’s theme will update in realtime. (You can also delete the text to revert back to the default values.)

## Scoping to the root

Use `:root` to make custom properties available to all elements in the document that use them. You can override as many or as few values as you want. Any `.lwj-` classes will use their default values unless specifically overridden here.

**Note:** to avoid repetition, you can use your own custom properties to set a value in one place and have it apply to several different contexts.

<style style="display: block" contenteditable>
  :root {
    --brand: #710000;
    --highlight: deeppink;
    --accent: mediumvioletred;
    --inverse: lightyellow;
    --surface: ghostwhite;
    --text: black;
    --subdued: slategray;
    --color-background-body: var(--surface);
    --color-background-brand: var(--brand);
    --color-text-inverse: var(--inverse);
    --color-text-body: var(--text);
    --color-text-interactive: var(--highlight);
    --color-text-subdued: var(--subdued);
    --color-text-strong: var(--text);
    --color-background-accent: var(--inverse);
  }

</style>

## Scoping to a class

You can scope your styles to a class and all elements within a container with that class will have the theme values applied. It will still inherit default styles from Pit Viper or any custom properties declared in `:root` unless explicitly overridden in the class scope.

In the following example, `--color-background-brand-accent` and `--color-border` are overriding values declared in the `:root` example above. The rest of the values are only overriding the system's defaults.

<style style="display: block" contenteditable>
  .myClass {
    --color-button-text: var(--accent);
    --color-button-primary-background: var(--brand);
    --button-radius: 2rem;
    --color-background-brand: midnightblue;
    --color-border: red;
  }

</style>

<div class="myClass">
  <div class="lwj-surface-brand doc-inset-square doc-bordered">
    <button type="button" class="lwj-button-primary">Button</button>
  </div>
</div>

{% call code.sample() %}
<div class="myClass">
  <div class="lwj-surface-brand doc-inset-square doc-bordered">
    <button type="button" class="lwj-button-primary">Button</button>
  </div>
</div>
{% endcall %}

## Accessibility considerations

When creating themes, be sure to [check the contrast](https://webaim.org/resources/contrastchecker/) between foreground and background colors to ensure they have a contrast ratio of at least 4.5:1 (WCAG AA).

* [Contrast and Color Accessibility](https://webaim.org/articles/contrast/)