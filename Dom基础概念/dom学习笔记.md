## Dom学习笔记

#### Dom基本概念

* 什么是DOM
    其实就是javascript里对网页document的一个数据类型。

* 浏览器的支持
    火狐的支持是最好

#### DOM节点
    节点其实就是HTML，在CSS中我们叫他标签，在JS中我们叫元素，在DOM中我们称之为节点。

* 子节点
    * childNodes
        * 相当于父子元素，但是在ES标准中，对普通文本也会当做一个节点，所以不能简单的认为一个<>标签就构成一个节点类。
        * 代码请看js代码函数getChildNodeNum，他获取了原本3个子li元素，但是返回的是7个子节点，这7个元素包括3个li元素，4个空行元素，其实就是文本节点。
    * 获取子节点
        * 对象.childNodes
        * 对象.childNodes.length : 子节点个数
    * nodeType
        * 子节点的类型，通过这个类型，来判断究竟是文本节点还是元素节点，然后根据类型给予不同的代码执行。
        * 这个类型主要是number类型。元素节点的类型是1，文本节点类型是3。

    - children
        * 也可以使用这个数组类型，直接获取元素类型节点了。

* 父节点：parentNode
    * 就是一个节点对象，利用这个对象的style，就可以访问父节点的行内样式属性了。
    - 例子：点击链接，隐藏整个li；


* 这个元素用于定位的父节点：offsetParent
    - 例子：获取元素在页面上的实际位置；

#### DOM的首尾子节点
* 注意有兼容性的问题；在前面的是包含文本节点的计数，后者只有高级浏览器支持，IE6-8不支持。
* firstChild/firstElementChild
* lastChild/lastElementChild
* nextSibling/nextElementSibling 兄弟节点
* previousSibling/previousElementSibling

#### DOM元素属性获取
* 除了常用的JS属性操作方法： oTxt.value = '',oTxt['value'] = 'xxx';
* setAttribute(名称，值)

#### JS用className选择元素
* 之前获取元素的方法，1个是通过id来获取这个元素对象，还有一个通过tagName获取标签，前者只能获取一个，后者是获取所有标签，我如何获取class相同的元素那？
* 一般采用的方法是，获取所有父节点后面的元素标签，然后通过一个条件判断className符合我们的类名。往往采用函数单独封装起来。


