<template>
  <div class="container">
    <div class="header">
      <h1 class="page-title">籌備團隊</h1>
      <h1 class="page-title subtitle">About SITCON</h1>
    </div>
    <h1>關於 SITCON</h1>
    <p>學生計算機年會（SITCON）是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群， 也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。</p>
    <p>除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。 我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。</p>
    <p>
      對我們所做的事情感興趣？ 歡迎加入 郵件論壇 或
      <a href="https://sitcon.org/telegram" target="_blank">Telegram 群組</a> 一起來規劃討論。
    </p>
    <h2 class="text-center" style="margin: 40px 0">我們舉辦過的活動</h2>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 年會</h2>
        <p>今年夏令營有別於往年的單一教學方式，而是在不影響一般課程的情況，安排一些廣度課程，讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。</p>
        <p>除基礎課程與廣度課程外，我們也邀請到許多在資訊領域打滾多年的人士分享自身經驗，期許迷茫中的學員，可以點燃未來的一盞明燈，在資訊道路上有前進的動力及方向。</p>
      </div>
      <div class="img">
        <img src="/img/sitcon.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>Hour of Code</h2>
        <p>今年夏令營有別於往年的單一教學方式，而是在不影響一般課程的情況，安排一些廣度課程，讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。</p>
        <p>除基礎課程與廣度課程外，我們也邀請到許多在資訊領域打滾多年的人士分享自身經驗，期許迷茫中的學員，可以點燃未來的一盞明燈，在資訊道路上有前進的動力及方向。</p>
      </div>
      <div class="img">
        <img src="/img/50694221331_e465f84efc_k.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 夏令營</h2>
        <p>社群闖關邀請到許多資訊相關社群前來擺攤，藉由互動遊戲、影片欣賞、專人介紹…等方式，讓學員認識所謂「社群」，並對開源活動有初步了解。點選課表可檢視詳細的社群資訊。</p>
      </div>
      <div class="img">
        <img src="/img/sitcon.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 定期聚</h2>
        <p>黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）跟「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松。由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。</p>
      </div>
      <div class="img">
        <img src="/img/49294271702_ec4bc17bce_k.jpg" />
      </div>
    </div>
    <h1 style="margin: 40px 0">夏令營籌備團隊</h1>
    <section v-for="group of groups" :key="group" class="group">
      <h2>{{group}}</h2>
      <div class="items">
        <div class="item" v-for="({name,mail},i) of members.filter(x=>x.group==group)" :key="i">
          <img class="avatar" :src="`https://secure.gravatar.com/avatar/${mail}?s=512`" />
          <div class="name">{{name}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import members from "@/assets/members.js";
export default {
  data: () => ({
    members,
    groups: []
  }),
  created() {
    let groups = new Set();
    members.map(x => {
      groups.add(x.group);
    });
    this.groups = Array.from(groups);
  }
};
</script>
<style lang="sass">
.group
  margin: 40px 0
  h2
    margin-bottom: 20px
  .items
    display: flex
    flex-wrap: wrap
    gap: 24px
    .item
      margin: 8px 0
      img
        --size: 85px
        width: var(--size)
        height: var(--size)
        border-radius: 100em
        background-color: #fff
      .name
        text-align: center
        font-size: 14px
</style>