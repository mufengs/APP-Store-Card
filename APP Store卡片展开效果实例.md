## APP Store卡片展开效果实例

### 项目地址

[项目效果预览](https://mufengs.github.io/APP-Store-Card/App%20Store%20%E5%8D%A1%E7%89%87%E5%B1%95%E5%BC%80%E6%95%88%E6%9E%9C/html/App%20Store.html)

### 敲码思路

- 该项目是针对手机App Store软件页面卡片展开效果的实现，整个页面的宽度也只有480px。

- 页面制作的主要效果通过jQuery，使用toggleCLass方法实现类的转换，其中页面样式较多的使用到css3中的一些属性。

### 知识锚点

- **`:root `** 是css伪类匹配文档的根元素，对于html来说，:root元素表示html根元素。除了优先级更高以外，与html选择器相同。在声明变量时，:root很有用。
  - `:root {--card-height:480px;} `
  - `card {height:var(--card-height)}`
- **`height:100vh`**:相对于浏览器视窗的高度，即浏览器可视区域的高度大小。
- **`object-fit`** css属性指定可替换元素的内容如何适用其使用高度和宽度确定的框。
  - `object-fit:cover 保持宽高比同时填充整个内容框`
- **`border-radius`**:设置元素的外边框圆角。当使用1个半径时，确定的是一个圆形。当使用2个半径时，确定的是一个椭圆。该属性是一个简写属性，其包括4个属性：
  - `border-top-left-radius`
  - `border-top-right-radius`
  - `border-bottom-right-radius`
  - `border-bottom-left-radius`
- **`box-shadow`**: 在元素的框架上添加阴影效果，在同一个元素上可以添加多个阴影效果，之间要用逗号分开，包括：x轴偏移，y轴偏移，模糊半径，扩展半径，颜色。
  - 若指定2个值，则属性为：`offset-X`，`offset-Y`;
  - 若指定3个值，则第三个属性值为：`blur-radius`;
  - 若指定4个值，则第四个属性值为：`spread-radius`;
  - inset和color为可选值；
- **`display:flex`** 是css中display属性新添加的一个值。它将使它适用的元素成为一个[flex container](https://developer.mozilla.org/en-US/docs/Glossary/flex_container)（伸缩容器），而这个元素的每个子元素将成为 [flex item](https://developer.mozilla.org/en-US/docs/Glossary/flex_item)（伸缩项目）。伸缩项目将参与到flex布局中，
  - [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 的 `align-content`属性设置了浏览器如何沿着[弹性盒子布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)的纵轴和[网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)的主轴在内容项之间和周围分配空间。
  - [CSS](https://developer.mozilla.org/zh-CN/docs/CSS) `flex-direction` 属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。
  - [CSS](https://developer.mozilla.org/zh-CN/docs/CSS) `align-items`属性将所有直接子节点上的align-self值设置为一个组。 align-self属性设置项目在其包含块中在交叉轴方向上的对齐方式。
  - [flex布局详解](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- **`transform`** `css transform`属性允许元素的旋转、倾斜、缩放和平移。这是通过修改css的元素格式化模型坐标空间来实现。
  - `transform—Y` 定义元素Y轴的平移
  - `scale` 定义元素的缩放
  - `translate-origin` 定义元素变化的原点

### 小结

- CSS有许多新鲜的属性，提供了更深、更丰富的效果。所以它远远没有那么简单
- jQuery使js代码变得简单，它有值得探究到底的意义













