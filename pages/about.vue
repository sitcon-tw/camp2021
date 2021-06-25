<template>
  <div class="container">
    <div class="header">
      <h1 class="page-title">籌備團隊</h1>
      <h1 class="page-title subtitle">About SITCON</h1>
    </div>
    <h1>關於 SITCON</h1>
    <p>學生計算機年會（SITCON）是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群，也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。</p>
    <p>除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。 我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。</p>
    <p>
      對我們所做的事情感興趣？ 歡迎加入 郵件論壇 或
      <a href="https://sitcon.org/telegram" target="_blank">Telegram 群組</a> 一起來規劃討論。
    </p>
    <h2 class="text-center" style="margin: 40px 0">我們舉辦過的活動</h2>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 年會</h2>
        <p>SITCON 年會是由一群熱愛分享、熱愛資訊領域的學生自主籌辦的活動，致力於資訊教育的普及與推廣。<br /><br />藉由舉辦多軌議程、議程、論壇的交流與討論，期望將資訊領域的知識與不同領域背景人才交換新知！</p>
      </div>
      <div class="img">
        <img src="/img/sitcon.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>Hour of Code</h2>
        <p>Hour of Code 是個一小時介紹計算機科學的活動，希望在揭開程式設計的神秘面紗的同時，說明它是任何人都可以學習的基礎知識，並期望擴展人們在計算機科學領域的參與。</p>
      </div>
      <div class="img">
        <img src="/img/50694221331_e465f84efc_k.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 夏令營</h2>
        <p>SITCON 團隊認為將資訊教育向下扎根、為對資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並撒播開源種子，是一件相當重要且值得去做的事情。<br /><br />透過主線課程、社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。</p>
      </div>
      <div class="img">
        <img src="/img/sitcon.jpg" />
      </div>
    </div>
    <div class="img-content-container">
      <div class="content">
        <h2>SITCON 定期聚</h2>
        <p>除了辦理大型活動外，SITCON 也舉辦定期聚，將全台灣各地對於資訊科技相關領域有興趣的學生們串聯起來，透過彼此共享、交流來切磋精進，砥礪自主自學的風氣</p>
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
