---
layout: post
title:  "How to install Jekyll"
date:   2015-08-17 18:19:27
categories: jekyll
tags: tutorial installation
permalink: how-to-install-jekyll
---
Getting Jekyll installed and ready-to-go should only take a few minutes. If it ever becomes a pain in the ass, please [file an issue][issue] (or submit a pull request) describing the issue you encountered and how we might make the process easier.

### Requirements

Installing Jekyll is easy and straight-forward, but there are a few requirements you’ll need to make sure your system has before you start.

- [Ruby][ruby]
- [RubyGems][rubygems]
- Linux, Unix, or Mac OS X
- [NodeJS][nodejs], or another JavaScript runtime (for CoffeeScript support).

<!-- more -->

<div class="alert-info">
    <div class="line1"></div>
    <div class="line2"></div>
    <h3>
        <div class="svg-container">
            <svg class="icon icon-info" viewBox="0 0 32 32">
                <use xlink:href="#icon-info"></use>
            </svg>
        </div>
        Running Jekyll on Windows
    </h3>
    <p>While Windows is not officially supported, it is possible to get it running on Windows. Special instructions can be found on our <a href="http://jekyllrb.com/docs/windows/#installation"> Windows-specific docs page</a>.</p>
</div>

### Install with RubyGems

The best way to install Jekyll is via [RubyGems][rubygems]. At the terminal prompt, simply run the following command to install Jekyll:

<pre><code class="language-markup">$ gem install jekyll</code></pre>

All of Jekyll’s gem dependencies are automatically installed by the above command, so you won’t have to worry about them at all. If you have problems installing Jekyll, check out the [troubleshooting][troubleshooting] page or [report an issue][issue] so the Jekyll community can improve the experience for everyone.

<div class="alert-info">
    <div class="line1"></div>
    <div class="line2"></div>
    <h3>
        <div class="svg-container">
            <svg class="icon icon-info" viewBox="0 0 32 32">
                <use xlink:href="#icon-info"></use>
            </svg>
        </div>
        Installing Xcode Command-Line Tools
    </h3>
    <p>If you run into issues installing Jekyll's dependencies which make use of native extensions and are using Mac OS X, you will need to install Xcode and the Command-Line Tools it ships with. Download in <code>Preferences → Downloads → Components</code>.</p>
</div>

### Pre-releases

In order to install a pre-release, make sure you have all the requirements installed properly and run:

<pre><code class="language-markup">gem install jekyll --pre</code></pre>

This will install the latest pre-release. If you want a particular pre-release, use the <code>-v</code> switch to indicate the version you’d like to install:

<pre><code class="language-markup">gem install jekyll -v '2.0.0.alpha.1'</code></pre>

If you’d like to install a development version of Jekyll, the process is a bit more involved. This gives you the advantage of having the latest and greatest, but may be unstable.

<pre>
<code class="language-markup">$ git clone git://github.com/jekyll/jekyll.git
$ cd jekyll
$ script/bootstrap
$ bundle exec rake build
$ ls pkg/*.gem | head -n 1 | xargs gem install -l</code>
</pre>

### Optional Extras

There are a number of (optional) extra features that Jekyll supports that you may want to install, depending on how you plan to use Jekyll. These extras include LaTeX support, and the use of alternative content rendering engines. Check out the [extras page][extras] for more information.

<div class="alert-warning">
    <div class="line1"></div>
    <div class="line2"></div>
    <h3>
        <div class="svg-container">
            <svg class="icon icon-star3" style="fill: #9d6002" viewBox="0 0 32 32">
                <use xlink:href="#icon-star3"></use>
            </svg>
        </div>
        ProTip™: Enable Syntax Highlighting
    </h3>
    <p>If you’re the kind of person who is using Jekyll, then chances are you’ll want to enable syntax highlighting using <a href="http://pygments.org/">Pygments</a> or <a href="https://github.com/jayferd/rouge">Rouge</a>. You should really <a href="http://jekyllrb.com/docs/templates/#code-snippet-highlighting">check out how to do that</a> before you go any farther. </p>
</div>

Now that you’ve got everything installed, let’s get to work!

> source article: <a href="http://jekyllrb.com/docs/installation/">http://jekyllrb.com/docs/installation/</a>

[issue]: https://github.com/jekyll/jekyll/issues/new
[ruby]: http://www.ruby-lang.org/en/downloads/
[rubygems]: http://rubygems.org/pages/download
[nodejs]: http://nodejs.org/
[troubleshooting]: http://jekyllrb.com/docs/troubleshooting/
[extras]: http://jekyllrb.com/docs/extras/

