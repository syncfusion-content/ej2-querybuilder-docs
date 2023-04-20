---
layout: post
title: State persistence in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about State persistence in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in ##Platform_Name## Query builder control

State persistence allows you to maintain the current state in the browser’s `localStorage` even if the browser is refreshed or if you move to the next page within the browser. State persistence stores the Query Builder’s `rule` object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/documentation/state-persistence/) is defined to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs12" %}
{% endif %}