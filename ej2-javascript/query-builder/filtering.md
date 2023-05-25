---
layout: post
title: Filtering in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Filtering in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in ##Platform_Name## Query builder control

Query Builder allows you to create or delete conditions and groups. You can use [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can create or delete conditions by interacting through the user interface and methods.

* Use the [`addRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#addrules), and [`deleteRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#deleterules) methods to create/delete conditions.
* Use [`addGroups`](https://ej2.syncfusion.com/documentation/api/query-builder/#addgroups), and [`deleteGroups`](https://ej2.syncfusion.com/documentation/api/query-builder/#deletegroups) methods to create/delete groups.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/filtering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/filtering-cs1" %}
{% endif %}