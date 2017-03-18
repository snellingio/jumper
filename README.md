# jumper

[TRY THE DEMO](https://snellingio.github.io/jumper/index.html)

A shameless css / js implementation of Slack / Basecamp jump menu.

## How To Use
<p>
    To launch the jump menu, press <code>ctrl+k</code> or <code>ctrl+j</code> on Windows, or
    <code>cmd+k</code> or
    <code>cmd+j</code> on Mac to
    launch Jumper.</p>
<p>
    You can press <code>esc</code> to quit.
</p>
<br>

## Install
<p>
    First, include the dependencies:
<pre><code>&lt;link href="jumper.css" rel="stylesheet"&gt;
&lt;script src="jumper.dependencies.js" type="application/javascript">&lt;/script&gt;
&lt;script src="jumper.js" type="application/javascript">&lt;/script&gt;
</code></pre>
</p>
<br>


<p>
    Next, create a jump menu base template:
<pre><code>&lt;div id="jumper"&gt;
    &lt;div class="filter"&gt;
        &lt;div class="search"&gt;
            &lt;input class="mousetrap" type="text" placeholder="Jump to..." autofocus="true" spellcheck="false"
                   autocorrect="off"&gt;
        &lt;/div>
        &lt;ul class="list"&gt;
            [... See next section]
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
</p>
<br>


<p>
    Next, add any content you want within the list:
<pre><code>&lt;li&gt;&lt;a class="index" href="https://google.com">Google&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="index" href="https://github.com">Github&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="index" href="https://news.ycombinator.com"&gt;Hacker News&lt;/a>&lt;/li&gt;
&lt;li&gt;&lt;a class="index" href="https://reddit.com"&gt;Reddit&lt;/a&gt;&lt;/li&gt;
</code></pre>
</p>
<br>


<p>
    Finally, call the Jump init function, and pass in how many items you want to show in the search results:
<pre><code>&lt;script&gt;
    Jump(2);
&lt;/script&gt;
</code></pre>
</p>
<br>


<p>
    Creating a theme is easy. Just choose a dark background color for the filter, everything else will be an opacity
    style.
<pre><code>#jumper .filter {
    background-color: #242539;
}
</code></pre>
</p>
<br>

## License
[MIT](LICENSE)
