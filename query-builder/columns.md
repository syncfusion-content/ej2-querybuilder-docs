---
layout: post
title: Columns in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Columns in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Columns in ##Platform_Name## Query builder control

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/documentation/api/query-builder/#datasource) schema in the Query Builder. This plays a vital role in rendering column values. The query builder operations such as create or delete conditions, and create or delete groups, are performed based on the column definitions. The [`field`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#field) property of the [`columns`](https://ej2.syncfusion.com/documentation/api/query-builder/#columns) is necessary to map the data source values in the query builder columns.

> If the column field is not specified in the dataSource, the column values will be empty.

## Auto generation

The [`columns`](https://ej2.syncfusion.com/documentation/api/query-builder/#columns) are automatically generated when the [`columns`](https://ej2.syncfusion.com/documentation/api/query-builder/#columns) declaration is empty or undefined while initializing the query builder. All the columns in the [`dataSource`](https://ej2.syncfusion.com/documentation/api/query-builder/#datasource) are bound as the query builder columns.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs1" %}
{% endif %}

> When columns are auto-generated, the column type will be determined from the first record of the dataSource.

## Labels

By default, the column label is displayed from the column [`field`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#field) value. To override the default label, you have to define the [`label`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#label) value.

## Operators

The operator for a column can be defined in the [`operators`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#operators) property.
The available operators and its supported data types are:

| Operators | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith  | Checks whether the value begins with the specified value. | String |
| endswith  | Checks whether the value ends with the specified value. | String |
| contains | Checks whether the value contains the specified value. | String |
| equal | Checks whether the value is equal to the specified value. | String Number Date Boolean |
| notequal | Checks whether the value is not equal to the specified value. | String Number  Date Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date Number |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Date Number |
| lessthan | Checks whether the value is less than the specified value.| Date Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date Number |
| between | Checks whether the value is between the two-specific values. | Date Number |
| notbetween | Checks whether the value is not between the two-specific values. | Date Number |
| in | Checks whether the value is one of the specific values. | String Number |
| notin | Checks whether the value is not in the specific values. | String Number |

## Step

The Query Builder allows you to set the step values to the number fields. So that, you can easily access the numeric textbox. Use the [`step`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#step) property, to set the step value for number values.

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#format) property to format date and number values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs2" %}
{% endif %}

## Validation

Validation allows you to validate the conditions and it display errors for invalid fields while using the `validateFields` method.  To enable validation in the query builder , set the allowValidation to true. Column fields are validated after setting [`allowValidation`](https://ej2.syncfusion.com/documentation/api/query-builder/#allowvalidation) to true. So, you should manually configure the validation for Operator and Value fields through [`validation`](https://ej2.syncfusion.com/documentation/api/query-builder/columnsModel/#validation).

> Set [`isRequired`](https://ej2.syncfusion.com/documentation/api/query-builder/validation/#isrequired) validation for Operator and Value fields.
> Set [`min`](https://ej2.syncfusion.com/documentation/api/query-builder/validation/#min), [`max`](https://ej2.syncfusion.com/documentation/api/query-builder/validation/#max) values for number values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/validation-cs1" %}
{% endif %}
