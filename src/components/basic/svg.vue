<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  data() {
    return {
      sizeGroup: {
        small: {
          size: '1em'
        },
        middle: {
          size: '1.8em'
        },
        large: {
          size: '3em'
        }
      }
    }
  },
  props: {
    name: {
      // svg文件名称
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 'middle'
    }
  },
  computed: {
    length: function () {
      return typeof this.size === 'number' ? this.size + 'px' : this.sizeGroup[this.size].size
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: v-bind(length);
  height: v-bind(length);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
