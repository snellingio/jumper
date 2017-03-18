# jumper

Demo: [https://snellingio.github.io/jumper/index.html](https://snellingio.github.io/jumper/index.html)

A css / js implementation of slack / basecamp jump menu.

![](https://raw.githubusercontent.com/snellingio/jumper/master/screencap.png)


<p>
    To launch the jump menu, press <code class="red">ctrl+k</code> or <code class="red">ctrl+j</code> on Windows, or
    <code class="red">cmd+k</code> or
    <code class="red">cmd+j</code> on Mac to
    launch Jumper.</p>
<p>
    You can press <code class="red">esc</code> to quit.
</p>
<br>


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
MIT
