# vue-ymap

Wrapper for vue-yandex-maps

### Setup
```
npm install vue-ymap
yarn add vue-ymap
```

### Attributes

| **attribute** | **type** | **description**                                                                                                                                                              |
|---------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _config_      | object   | Object of attributes (see [more](https://vue-yandex-maps.github.io/guide/Map.html#attributes))                                                                               |
| _markers_     | array    | Array of objects attributes for markers (see [more](https://vue-yandex-maps.github.io/guide/Map.html#attributes)) <br /> Object marker must also contain a property "**id**" |

### Events

| **event**           | **description**                                                                         |
|---------------------|-----------------------------------------------------------------------------------------|
| map-was-initialized | [instance of map](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Map-docpage/) |
| actionend           |    [map event](https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/events-docpage/)   |
| balloonclose        |                                                                                         |
| balloonopen         |                                                                                         |
| boundschange        |                                                                                         |
| click               |                                                                                         |
| contextmenu         |                                                                                         |
| dblclick            |                                                                                         |
| destroy             |                                                                                         |
| hintclose           |                                                                                         |
| hintopen            |                                                                                         |
| optionschange       |                                                                                         |
| sizechange          |                                                                                         |
| typechange          |                                                                                         |
| marker-balloonclose |  [marker event](https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/events-docpage/)  |
| marker-balloonopen  |                                                                                         |
| marker-click        |                                                                                         |
| marker-contextmenu  |                                                                                         |
| marker-dblclick     |                                                                                         |
| marker-drag         |                                                                                         |
| marker-dragend      |                                                                                         |
| marker-dragstart    |                                                                                         |
| marker-hintclose    |                                                                                         |
| marker-hintopen     |                                                                                         |
| marker-mouseenter   |                                                                                         |
| marker-mouseleave   |                                                                                         |