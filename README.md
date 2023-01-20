# frontend 22 VC 
## subtitel h2
### subsubtitel eller h3

vanlig text ,*italic* , **bold** , ***italicBold***


- un ordered list
- item
- item
    - indented list bara tabba

1. lista 
1. ha 1. för att numrera istället för riktiga nummer 
1. för den auto numrerar den listan

[Markdown link](https://www.markdownguide.org/basic-syntax/)


``` html
<h1> Titel </h1>
 <picture>
  <source media="(min-width:650px)" srcset="img_pink_flowersjpg">
  <source media="(min-width:465px)" srcset="img_white_flowerjpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> 
```

```css
@media (prefers-color-scheme: light) {
  :root {
    --color-bg: #ffffff;
    --color-fg: #000000;
  }
}
```

```js
let url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fvf3rhj45h32ghj4234'

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
```
<img src="images\elaichi mockup-01.jpg" alt="isolated" width="200"/>

![image info](/images/elaichi%20mockup-01.jpg)
