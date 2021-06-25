<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>
<style lang="sass">
*
  box-sizing: border-box
body,html
  scroll-behavior: smooth
  font-family: "Noto Sans TC", sans-serif
  background-color: #192C35
  color: #FFF
  margin: 0
  overflow-x: hidden
h1,h2,h3,h4,h5,h6
  margin: 0
a
  color: #fff

.container
  max-width: 1000px
  margin: 0 auto
  width: 95%
  nav + &
    margin-top: 200px
.header
  margin-bottom: 90px
.text-center
  text-align: center
h1.page-title
  text-align: center
  font-size: 48px
  &.subtitle
    font-size: 32px

.img-content-container
  display: flex
  margin: 16px 0
  &:nth-child(odd)
    .img
      padding-left: 16px
  &:nth-child(even):not(.non-reverse)
    flex-direction: row-reverse
    .img
      padding-right: 16px
  .content,.img
    text-align: center
  .content
    flex: 1
    text-align: left
  .img
    width: 300px
    img
      width: 100%
      border-radius: 16px
@media screen and (max-width: 768px)
  .img-content-container
    flex-direction: column
    &:nth-child(even):not(.non-reverse)
      flex-direction: column
    &.reverse
      flex-direction: column-reverse
    .content,.img
      width: 100%
    .img
      padding: 0 !important
</style>