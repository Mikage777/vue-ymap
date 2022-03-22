# vue-ymap

Wrapper for vue-yandex-maps

### Setup
```
npm install vue-ymap
yarn add vue-ymap
```

### Configuration

| **attribute**     | **type** | **description**                                                                                                                                                              |
|-------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _config_          | object   | Object of attributes (see [more](https://vue-yandex-maps.github.io/guide/Map.html#attributes))                                                                               |
| _markers_         | array    | Array of objects attributes for markers (see [more](https://vue-yandex-maps.github.io/guide/Map.html#attributes)) <br /> Object marker must also contain a property "**id**" |
| _@onclick-marker_ | function | Event for click marker                                                                                                                                                       |