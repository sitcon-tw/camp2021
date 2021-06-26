<template>
  <div class="dialog-container" :class="{show:value}">
    <div class="dialog-overlay" @click="$emit('input', false)" />
    <div class="dialog-content">
      <div class="close" @click="$emit('input', false)">A</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style lang="sass" scoped>
.dialog-container
    position: fixed
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 99
    opacity: 0
    pointer-events: none
    transition: opacity .4s ease
    &.show
        display: block
        opacity: 1
        pointer-events: initial
        .dialog-content
            animation: fadeInUp .4s ease
    .dialog-overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: rgba(0,0,0,.8)
        cursor: pointer
    .dialog-content
        position: relative
        margin: 32px auto
        z-index: 99
        top: 32px
        background-color: #355260
        width: 95%
        max-width: 1000px
        margin: auto
        padding: 32px
        border-radius: 16px
        max-height: calc(100vh - 32px - 32px)
        overflow-y: scroll
        .close
            font-family: "Anicons Regular", sans-serif
            font-size: 24px
            font-variation-settings: "TIME" 100
            position: absolute
            top: 32px
            right: 32px
            cursor: pointer

@keyframes fadeIn
    0%
        opacity: 0
    100%
        opacity: 1
@keyframes fadeInUp
    0%
        opacity: 0
        transform: translateY(100px)
    100%
        opacity: 1
        transform: none
</style>