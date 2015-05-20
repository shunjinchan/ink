# ink

ink 参考了 bootstrap 与 Puerh，根据个人工作需要，基于 Sass 与 Grunt 构建的一套前端 UI 库。

ink 使用到的开源代码：

- [Mixin](https://github.com/marvin1023/sassCore/blob/master/core/_mixin.scss)，[CSS3](https://github.com/marvin1023/sassCore/blob/master/core/_css3.scss)，sass mixin 库
- [typo.css](http://typo.sofi.sh/)，中文网页重设与排版
- [media-queries](https://github.com/paranoida/sass-mediaqueries/blob/master/_media-queries.scss)，CSS3 媒体查询 Sass mixin 库
- [bootstrap](https://github.com/twbs/bootstrap) JS 组件


ink 包括 Typography、Grid、常用的 UI 组件、JS 组件（bootstrap）



## 文档类型（统一使用 HTML5 标准）

	<!DOCTYPE html>
	<html lang="zh-CN">
	  ...
	</html>
	
## 编码规范

[AlloyTeam](https://github.com/AlloyTeam/alloyteam.github.com)

[百度](https://github.com/ecomfe/spec)

[前端规范](http://front-end-standards.com/)

仅供参考

## 重置样式与排版

为了增强跨浏览器表现的一致性，ink 使用 [typo.css](http://typo.sofi.sh/)，这是由 [sofish](https://github.com/sofish) 维护的 CSS 重置样式库（包括排版样式）。详见 [http://typo.sofi.sh/](http://typo.sofi.sh/)。

### 字体

	font: 14px/1.8 Microsoft Yahei,tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
		
### 常用功能类

- `clearfix` 清除浮动
- `pull-left` 左浮动
- `pull-right` 右浮动
- `hide-text` 隐藏文字
- 详见 `utilities.scss`

## 兼容性

> 兼容 IE6+ / Chrome / Firefox / Safari，以及国产常用浏览器

ink 遵循渐进增强设计，在保证低端浏览器最基础的功能前提下，再针对搞基浏览器对页面的效果进行改进。

## iconfont（字体图标）

- 什么是 iconfont ？<br>
  简单粗暴的理解：就是表现形式为图标的自定义字体，使用方式跟普通字体没有区别。更多关于 iconfont 的资料请自行 google。
  
- 为什么要用 iconfont ？<br>
  字体图标具有良好的兼容性，矢量，规范等特点。
  
ink 已涵盖网站常用图标 84 枚（可根据各网站实际情况调整），兼容 `ie6+` 在内的各主流浏览器。

更多图标资源请访问 [http://iconfont.cn/](http://iconfont.cn/)

iconfont 制作教程 [字体图标制作详解](http://www.uisdc.com/make-the-font-icon)

## 栅格布局

ink 的布局是 980px 宽，分 20 个栅格，一个栅格的宽度为 30px，栅格之间的间隙为 20px。所有栅格必须包含在 `.container` 内。

更多关于栅格系统的介绍 [栅格设计](https://zh.wikipedia.org/wiki/%E6%A0%85%E6%A0%BC%E8%AE%BE%E8%AE%A1) 与 [网页的栅格系统设计](http://ued.taobao.org/blog/2008/09/grid_systems/) 。

### 布局 2.0

根据业务实际情况，无法直接使用栅格布局。于是就有了**布局2.0** 。具体使用方法请阅读源码`_layout.scss`。

## UI 组件

页面上的每个 UI 组件都应该像一个盒模型，不和页面的其他元素相互影响。使用统一的命名注释规范。

ink 的组件开发最重要的一点是每个组件都拥有各自的命名空间，避免全局类名过多导致冲突。

## JavaScript 组件

目前 ink 的所有组件都使用 Twitter Bootstrap 库的自定义 Javascript 插件（增加了`IE6/IE7`支持）。


## 使用 Sass

ink 的 CSS 文件是通过 Sass 源码编译而来的。Sass 是一门预处理语言，支持变量、mixin、函数等功能。更多关于 Sass 的资料请访问 [Sass 官网](http://sass-lang.com/) 或者 [Sass 中国](http://cn-sass.com/)。

### 编译

ink 虽然提供了已编译好的 CSS 文件，但建议根据实际需求编译 Sass 源码文件。
ink 使用 [Grunt](http://gruntjs.cn/) 作为构建工具。如果您未使用过 Grunt 或者其他类似（[gulp](http://gulpjs.com/)、[fis](http://fis.baidu.com/)）的构建工具，墙裂推荐使用。

### 包含内容

<table>
      <thead>
        <tr>
          <th>文件</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code>_setting.scss</code></th>
          <td>包括基础脚手架以及 UI 组件的配置信息</td>
        </tr>
        <tr>
          <th scope="row"><code>_base.scss</code></th>
          <td>入口文件</td>
        </tr>
        <tr>
          <th scope="row"><code>ink.css</code></th>
          <td>按需选择自己需要的版块</td>
        </tr>
        <tr>
          <th scope="row"><code>ext/**.scss</code></th>
          <td>一些 mixins</td>
        </tr>
        <tr>
          <th scope="row"><code>base/**.scss</code></th>
          <td>基础脚手架</td>
        </tr>
        <tr>
          <th scope="row"><code>ui/**.scss</code></th>
          <td>ui 组件</td>
        </tr>       
      </tbody>
    </table>