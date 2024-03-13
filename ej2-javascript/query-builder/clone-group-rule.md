---
layout: post
title: Clone Group/Rule in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Clone Group/Rule in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Clone Group/Rule 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in ##Platform_Name## Query builder control

Query Builder allows you to clone rules as well as groups. The Clone options will create an exact replica of a rule or group next to the original. You can use [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/documentation/api/query-builder/#cloneGroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/documentation/api/query-builder/#cloneRule) method to clone rule.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/clone-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/clone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/clone-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/clone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}
{% endif %}