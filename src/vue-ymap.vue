<template>
  <div v-if="showMap">
    <yandex-map
        ymap-class="yandex-map"
        v-bind="config"
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
            @click="handleClickMarker"
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
    handleClickMarker(e) {
      this.$emit('onclick-marker', e)
    },
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