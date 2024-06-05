---
title: Design Tokens
eleventyNavigation:
  key: Design Tokens
  parent: Visual Style
  order: 5
---

Design tokens are a means of storing all of our visual style decisions, including type, spacing, and color. We use [Sass](https://sass-lang.com/) for tokens rather than exposing all of our tokens as CSS custom properties. This lets us maintain strict control over the contexts in which the systems values are used.

Tokens give us a shared vocabulary for describing visual style properties that translate across platforms. So while web, iOS and Android might use different values to express a property, when we are reviewing a design and talk about `$color-background-brand`, we all know what that means.

Tokens also facilitate supporting multiple brands or product verticals which might require different visual styles. Tokens also make it extremely easy to quickly rebrand an entire website without touching any production markup.

Tokens are stored in three layers, giving us varying degrees of control over the look and feel of our system.

## Global Tokens

Global tokens store all of the raw values in our system. Updating these values will change that value across the entire system.

{% highlight "css" %}
$white: #FAF9FD;
$black: #0E032A;
$indigo: #3B1B89;
...
$spacing-xs: 5px;
$spacing-sm: 10px;
$spacing-md: 20px;
...
$font-size-1: 2.25rem;
$font-size-2: 1.125rem;
$font-size-3: 1rem;
{% endhighlight %}

## Contextual Tokens

Contextual tokens describe _how_ global tokens are used. They include common values that are used across multiple components, such as `$color-text-interactive`. Contextual tokens allow us to change from one global token to another across multiple components.

{% highlight "css" %}
$color-text-body: $gray-150;
$color-text-interactive: $purple-200;
$color-text-inverse: $black;
$color-text-subdued: $gray-175;
$color-text-subdued-inverse: $gray-400;
$color-text-strong: $white;
{% endhighlight %}

## Component Tokens

Component tokens describe all of the values used for a single component and can point to contextual tokens, global tokens, or even one-off values. Component tokens allow us to make changes to a single component &mdash; changing the background color of a primary button, for example &mdash; without having to edit any CSS or HTML.

{% highlight "css" %}
$button-color-text: $color-text-body;
$button-color-background: $color-background-interactive; 
$button-color-border: transparent;
$button-color-background-focus: $color-background-interactive-highlight;
$button-radius: $radius-sm;
{% endhighlight %}