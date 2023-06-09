---
layout: post
title: Import export in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Import export in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Import export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Import export in ##Platform_Name## Query builder control

Importing allows you to view or edit the predefined conditions which is available in JSON or SQL. You can import the conditions either initial rendering or post rendering.

## Initial rendering

To apply conditions initially, you can define the [`rule`](https://ej2.syncfusion.com/documentation/api/query-builder/#rule). Here, you can import structured JSON object by defining the [`rule`](https://ej2.syncfusion.com/documentation/api/query-builder/#rule) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs14" %}
{% endif %}

## Post rendering

### Importing from JSON

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#setrules) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-json-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-json-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-json-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-json-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-json-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-json-cs1" %}
{% endif %}

### Importing from SQL

You can set the conditions from SQL query through the [`setRulesFromSql`](https://ej2.syncfusion.com/documentation/api/query-builder/#setrulesfromsql) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/import-sql-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/import-sql-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/import-sql-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/import-sql-cs1" %}
{% endif %}

# Exporting

Exporting allows you to save or maintain the created conditions through the Query Builder. You can export the defined conditions by the following ways.

## Exporting to JSON

You can export the defined conditions to structured JSON object through the [`getRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#getrules) method.

## Exporting to SQL

You can export the defined conditions to SQL query through the [`getSqlFromRules`](https://ej2.syncfusion.com/documentation/api/query-builder/#getsqlfromrules) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/export-cs1" %}
{% endif %}