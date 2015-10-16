---
layout: post
title:  "Comparing CSS PREprocessors"
date:   2015-08-10 18:19:27
categories: CSS
tags: preprocessors
permalink: comparing-css-preprocessors
excerpt: "Comparing your favourite CSS preprocessors, side by side."
comments: true
---
### Variables
<div class="table-container">
  <table class="pure-table pure-table-striped full-width blue-var">
    <thead>
      <tr>
        <th></th>
        <th>Less</th>
        <th>Sass</th>
        <th>Stylus</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>
          <div class="bold">Basic</div>
          <div>Ability to declare variables and use them later</div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="bold">Default</div>
          <div>Default variables are overwritten by regular ones, no matter when they are declared</div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-close icon-red" viewBox="0 0 32 32">
                  <use xlink:href="#icon-close "></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="bold">Lazy</div>
          <div>Variable Hoisting, variables can be declared after being used</div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark "></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-close icon-red" viewBox="0 0 32 32">
                  <use xlink:href="#icon-close"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-close icon-red" viewBox="0 0 32 32">
                  <use xlink:href="#icon-close"></use>
              </svg>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="bold">Lookup</div>
          <div>Use the value of a previously declared property elsewhere</div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-close icon-red" viewBox="0 0 32 32">
                  <use xlink:href="#icon-close "></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-close icon-red" viewBox="0 0 32 32">
                  <use xlink:href="#icon-close"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="bold">Scoped</div>
          <div>Restrict the scope of variables</div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark "></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
        <td>
          <div class="svg-container">
              <svg class="icon icon-checkmark icon-green" viewBox="0 0 32 32">
                  <use xlink:href="#icon-checkmark"></use>
              </svg>
          </div>
        </td>
      </tr>

    </tbody>
  </table>
</div>

> source article: <a href="http://csspre.com/compare/">csspre.com/compare/</a>
