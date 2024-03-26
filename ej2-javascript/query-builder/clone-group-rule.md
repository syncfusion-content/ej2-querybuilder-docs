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

The Query Builder functionality extends to cloning both individual rules and entire groups. Utilizing the Clone options will generate an exact duplicate of a rule or group adjacent to the original one. This feature enables users to replicate complex query structures effortlessly. The [`showButtons`](https://ej2.syncfusion.com/documentation/api/query-builder/#showbuttons) function offers users the ability to toggle the visibility of these cloning buttons, providing convenient control over the cloning process within the Query Builder interface.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/documentation/api/query-builder/#clonegroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/documentation/api/query-builder/#clonerule) method to clone rule.

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