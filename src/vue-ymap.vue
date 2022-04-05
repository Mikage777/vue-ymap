<template>
  <div v-if="showMap">
    <yandex-map
        ymap-class="yandex-map"
        v-bind="config"
        @map-was-initialized="handleMapWasInitialized"
        @actionend="handleActionEnd"
        @balloonclose="handleBalloonClose"
        @balloonopen="handleBalloonOpen"
        @boundschange="handleBoundsChange"
        @click="handleClick"
        @contextmenu="handleContextMenu"
        @dblclick="handleDoubleClick"
        @destroy="handleDestroy"
        @hintclose="handleHintClose"
        @hintopen="handleHintOpen"
        @optionschange="handleOptionsChange"
        @sizechange="handleSizeChange"
        @typechange="handleTypeChange"
    >
      <div v-if="!!markers.length">
        <ymap-marker
            v-for="marker in markers"
            :key="marker.id"
            :markerId="marker.id"
            v-bind="{
              icon: {
                layout: 'default#image',
                imageHref: markerIcon,
              },
              ...marker
            }"
            @balloonclose="handleBalloonMarkerClose"
            @balloonopen="handleBalloonMarkerOpen"
            @click="handleClickMarker"
            @contextmenu="handleContextMenuMarker"
            @dblclick="handleDoubleClickMarker"
            @drag="handleDragMarker"
            @dragend="handleDragMarkerEnd"
            @dragstart="handleDragMarkerStart"
            @hintclose="handleHintMarkerClose"
            @hintopen="handleHintMarkerOpen"
            @mouseenter="handleMouseEnterMarker"
            @mouseleave="handleMouseLeaveMarker"
        />
      </div>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import markerIcon from './assets/images/marker.svg';

const DEFAULT_CENTER = [55.75222, 37.61556]; //mskcenter

export default {
  name: "vue-ymap",
  components: { yandexMap, ymapMarker },
  data() {
    return {
      markerIcon,
      showMap: false,
    }
  },
  props: {
    markers: {
      type: Array,
      default: () => [],
    },
    config: {
      type: Object,
      default: () => ({
        zoom: "14",
        coords: DEFAULT_CENTER,
        settings: {
          apiKey: '',
          lang: 'ru_RU',
          coordorder: 'latlong',
          version: '2.1'
        }
      }),
    }
  },
  mounted() {
    this.showMap = true;
  },
  methods: {
    handleMapWasInitialized(map) {
      this.$emit('map-was-initialized', map)
    },
    handleActionEnd(e) {
      this.$emit('actionend', e)
    },
    handleBalloonClose(e) {
      this.$emit('balloonclose', e)
    },
    handleBalloonOpen(e) {
      this.$emit('balloonopen', e)
    },
    handleBoundsChange(e) {
      this.$emit('boundschange', e)
    },
    handleClick(e) {
      this.$emit('click', e)
    },
    handleContextMenu(e) {
      this.$emit('contextmenu', e)
    },
    handleDoubleClick(e) {
      this.$emit('dblclick', e)
    },
    handleDestroy(e) {
      this.$emit('destroy', e)
    },
    handleHintClose(e) {
      this.$emit('hintclose', e)
    },
    handleHintOpen(e) {
      this.$emit('hintopen', e)
    },
    handleOptionsChange(e) {
      this.$emit('optionschange', e)
    },
    handleSizeChange(e) {
      this.$emit('sizechange', e)
    },
    handleTypeChange(e) {
      this.$emit('typechange', e)
    },
    handleBalloonMarkerClose(e) {
      this.$emit('marker-balloonclose', e)
    },
    handleBalloonMarkerOpen(e) {
      this.$emit('marker-balloonopen', e)
    },
    handleClickMarker(e) {
      this.$emit('marker-click', e)
    },
    handleContextMenuMarker(e) {
      this.$emit('marker-contextmenu', e)
    },
    handleDoubleClickMarker(e) {
      this.$emit('marker-dblclick', e)
    },
    handleDragMarker(e) {
      this.$emit('marker-drag', e)
    },
    handleDragMarkerEnd(e) {
      this.$emit('marker-dragend', e)
    },
    handleDragMarkerStart(e) {
      this.$emit('marker-dragstart', e)
    },
    handleHintMarkerClose(e) {
      this.$emit('marker-hintclose', e)
    },
    handleHintMarkerOpen(e) {
      this.$emit('marker-hintopen', e)
    },
    handleMouseEnterMarker(e) {
      this.$emit('marker-mouseenter', e)
    },
    handleMouseLeaveMarker(e) {
      this.$emit('marker-mouseleave', e)
    }
  }
};
</script>

<style lang="scss">
.yandex-map {
  width: 100%;
  height: 293px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 213px;
  }

  @media (max-width: 510px) {
    height: 205px;
  }
}
</style>