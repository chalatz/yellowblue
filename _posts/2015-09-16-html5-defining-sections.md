---
layout: post
title:  "Defining Sections in HTML5"
date:   2015-09-16 18:19:27
categories: HTML5
tags: tutorial
permalink: defining-sections-in-html5
---
All content lying inside the <code class="language-markup"><body></code> element is part of a section. Sections in HTML5 can be nested. Beside the main section, defined by the <code class="language-markup"><body></code> element, section limits are defined either explicitly or implicitly. Explicitly-defined sections are the content within <code class="language-markup"><body></code>,  <code class="language-markup"><section></code>,  <code class="language-markup"><article></code>,  <code class="language-markup"><aside></code>, and <code class="language-markup"><nav></code> tags.

<div class="alert-success">
    <div class="line1"></div>
    <div class="line2"></div>
    <blockquote class="text-black"><strong>Note:</strong> Each section can have its own heading hierarchy. Therefore, even a nested section can have an <code class="language-markup">&lt;h1></code>. See <a href="https://developer.mozilla.org/en-US/docs/Sections_and_Outlines_of_an_HTML5_document#Defining_Headings_in_HTML5">Defining Headings in HTML5</a>.</blockquote>
</div>

Example:

<!-- more -->

<pre class="line-numbers">
<code class="language-markup">&lt;section>
  &lt;h1>Forest elephants&lt;/h1>
  &lt;section>
    &lt;h1>Introduction&lt;/h1>
    &lt;p>In this section, we discuss the lesser known forest elephants.&lt;/p>
  &lt;/section>
  &lt;section>
    &lt;h1>Habitat&lt;/h1>
    &lt;p>Forest elephants do not live in trees but among them.&lt;/p>
  &lt;/section>
  &lt;aside>
    &lt;p>advertising block&lt;/p>
  &lt;/aside>
&lt;/section>
&lt;footer>
  &lt;p>(c) 2010 The Example company&lt;/p>
&lt;/footer></code>
</pre>

This HTML snippet defines a top-level section:

<pre class="line-numbers">
<code class="language-markup">&lt;section>
  &lt;h1>Forest elephants&lt;/h1>
  &lt;section>
    &lt;h1>Introduction&lt;/h1>
    &lt;p>In this section, we discuss the lesser known forest elephants.&lt;/p>
  &lt;/section>
  &lt;section>
    &lt;h1>Habitat&lt;/h1>
    &lt;p>Forest elephants do not live in trees but among them.&lt;/p>
  &lt;/section>
  &lt;aside>
    &lt;p>advertising block&lt;/p>
  &lt;/aside>
&lt;/section>
&lt;footer>
  &lt;p>(c) 2010 The Example company&lt;/p>
&lt;/footer></code>
</pre>

This section has three subsections:

<pre class="line-numbers">
<code class="language-markup">&lt;section>
  &lt;h1>Forest elephants&lt;/h1>

  &lt;section>
    &lt;h1>Introduction&lt;/h1>
    &lt;p>In this section, we discuss the lesser known forest elephants.&lt;/p>
  &lt;/section>

  &lt;section>
    &lt;h1>Habitat&lt;/h1>
    &lt;p>Forest elephants do not live in trees but among them.&lt;/p>
  &lt;/section>

  &lt;aside>
    &lt;p>advertising block&lt;/p>
  &lt;/aside>
&lt;/section>

&lt;footer>
  &lt;p>(c) 2010 The Example company&lt;/p>
&lt;/footer></code>
</pre>

This leads to the following outline:

<pre class="line-numbers">
<code class="language-markup">1. Forest elephants
   1.1 Introduction
   1.2 Habitat
</code>
</pre>

> source article: <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Sections_in_HTML5">Defining Sections in HTML5</a>
