<template>
  <div>
    <div id="footer" class="container">
      <div class="item">
        <div class="title">學生計算機年會</div>
        <p>Students' Information Technology Conference</p>
      </div>
      <div class="item">
        <div class="title">社群媒體</div>
        <div>
          <a :href="link" v-for="{link,icon,title} of socialMedia" :key="title" :title="title">
            <img class="icon" :src="icon" />
          </a>
        </div>
      </div>
      <div class="item">
        <div class="title">聯絡我們</div>
        <p>
          合作聯繫：<a href="mailto:contact@sitcon.org" target="_blank">contact@sitcon.org</a>
          <span style="width: .5em;display: inline-block" />
          報名事宜：<a href="mailto:ask@sitcon.org" target="_blank">ask@sitcon.org</a>
        </p>
      </div>
      <div class="item">
        <div class="title">歷年網站</div>
        <div>
          <a
            :href="'https://sitcon.camp/'+year"
            v-for="year of years"
            :key="year"
            :title="year"
          >{{year}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    years: [2019, 2017, 2016, 2015, 2014],
    socialMedia: [
      {
        title: "Facebook",
        icon: "/2021/icon/facebook.svg",
        link: "https://www.facebook.com/SITCONtw"
      },
      {
        title: "Flickr",
        icon: "/2021/icon/flickr.svg",
        link: "https://www.flickr.com/photos/sitcon/albums"
      },
      {
        title: "Telegram",
        icon: "/2021/icon/telegram.svg",
        link: "https://t.me/SITCONtw"
      },
      {
        title: "Twitter",
        icon: "/2021/icon/twitter.svg",
        link: "https://twitter.com/sitcontw"
      },
      {
        title: "YouTube",
        icon: "/2021/icon/youtube.svg",
        link: "https://www.youtube.com/user/SITCONArchive"
      }
    ]
  })
};
</script>

<style lang="sass">
#footer
  border-top: 1px solid #77878E
  display: flex
  flex-wrap: wrap
  padding-top: 20px
  .item
    margin: 10px 0
    width: 50%
    .title
      font-weight: bold
      font-size: 18px
      margin-bottom: .5em
    .icon
      width: 24px
      filter: invert(1)
      user-select: none
    p
      margin-top: 0
    a
      text-decoration: none
      & + a
        margin-left: 1.5em
      &:hover
        opacity: .8
      &:active
        opacity: 1

@media screen and (max-width: 768px)
  #footer
    display: block
    .item
      margin: 20px 0
      width: 100%
</style>
