<template>
  <nav>
    <nuxt-link class="logo-link" to="/">
      <img class="star" src="/2021/img/star.svg" />
      <img class="logo" src="/2021/img/sitcon-camp-mini.svg" />
    </nuxt-link>
    <div style="flex:1" />
    <div class="links" :class="{show: link}" @click="link=false">
      <nuxt-link
        v-for="(item,i) of navItems"
        :key="i"
        :to="{ path: item.link, hash: item.hash||null }"
        class="link"
      >{{item.title}}</nuxt-link>
    </div>
    <div class="menu" :class="{active: link}" @click="showLink">A</div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navItems: [
      { title: "課程活動", link: "/", hash: "#課程活動" },
      { title: "過往紀錄", link: "/", hash: "#過往紀錄與回饋" },
      { title: "報名資訊", link: "/", hash: "#報名資訊" },
      { title: "行為準則", link: "/coc" },
      { title: "籌備團隊", link: "/about" }
    ],
    link: false
  }),
  methods: {
    showLink() {
      this.link = !this.link;
    }
  }
};
</script>
<style lang="sass" scoped>
nav
  position: fixed
  top: 55px
  max-width: 1000px
  margin: auto
  left: 0
  right: 0
  background-color: #285977
  padding: 12px 30px
  border-radius: calc(52px / 2)
  display: flex
  align-items: center
  z-index: 1
  width: 95%
  .logo-link
    grid-area: logo
    display: flex
    align-items: center
    .star
      margin-right: 18px
  .links
    grid-area: links
    .link
      color: #fff
      padding: 6px 18px
      text-decoration: none
      border-radius: 100em
      &:hover
        background-color: rgba(255,255,255,.1)
      &:active
        background-color: rgba(255,255,255,.15)
  .menu
    grid-area: menu
    display: none
    font-family: "Anicons Regular", sans-serif
    font-size: 24px
    font-variation-settings: "TIME" 1
    transition: font-variation-settings 0.4s ease
    user-select: none
    &.active
      font-variation-settings: "TIME" 100
@media screen and (max-width: 768px)
  nav
    display: grid
    top: 40px
    grid-template-areas: 'logo menu' 'links links'
    .menu
      display: block
      text-align: right
      cursor: pointer
      display: flex
      align-items: center
      justify-content: flex-end
    .links
      transition: all .2s ease
      transform-origin: top center
      max-height: 0px
      opacity: 0
      overflow: hidden
      &.show
        margin-top: 8px
        transform: scaleY(1)
        max-height: 200px
        opacity: 1
      .link
        display: block
</style>