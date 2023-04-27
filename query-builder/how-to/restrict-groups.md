---
layout: post
title: Restrict groups in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Restrict groups in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Restrict groups 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Restrict groups in ##Platform_Name## Query builder control

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/documentation/api/query-builder/#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs9" %}
{% endif %}

> You can use this property in the mobile mode to restrict the nested group creation.
