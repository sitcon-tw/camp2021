<template>
  <div>
    <div class="container">
      <div class="header">
        <h1 class="page-title">行為準則</h1>
        <h1 class="page-title subtitle">Code of Conduct</h1>
      </div>
      <p>SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。</p>
      <p>因此，若有幸能在 SITCON 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：</p>

      <ul>
        <li>尊重每一位參與者，將對方的感受放在心上</li>
        <li>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢</li>
        <li>多關心周遭的社群夥伴，適度詢問對方是否需要協助</li>
        <li>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助</li>
        <li>在年會裡多交朋友，珍惜彼此相聚的時光！</li>
      </ul>

      <p>以下的行為是不被社群所容忍的：</p>

      <ul>
        <li>針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯</li>
        <li>任何形式的性騷擾、言語及肢體霸凌</li>
        <li>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影</li>
        <li>無故干擾議程或活動的正常進行，無視工作人員或會眾的制止</li>
        <li>干擾、攻擊會場網路，未經同意側錄封包或散佈隱私資訊</li>
        <li>違反法律的行為</li>
      </ul>

      <p>為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 工作人員的協助。</p>

      <p>我們誠摯的邀請來到 SITCON 的朋友一同履行以上承諾，將 SITCON 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。</p>
      <img class="spacecat" src="/2021/img/spacecat.svg" />
      <img class="star3" src="/2021/img/star3.svg" />
    </div>
    <div class="space-background">
      <img class="person" src="/2021/img/Group 108.svg" />
      <img class="star4" src="/2021/img/star4.svg" />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.container
  position: relative
  margin-top: 200px
  .spacecat
    margin-top: 200px
    margin-bottom: -6px
  .star3
    position: absolute
    left: 0
    bottom: 0
    animation: twinkling 2s 0s infinite
.space-background
  position: relative
  .person,.star4
    position: absolute
  .person
    bottom: 64px
    right: 0
    z-index: 1
    animation: floating 10s ease infinite
  .star4
    right: 0
    bottom: 0
    animation: twinkling 2s 1s infinite

@media screen and (max-width: 768px)
  .container
    .spacecat
      width: 150px
    .star3
      left: 0
      bottom: 0
      width: 100%
  .space-background
    .person
      bottom: 50px
      right: 10px
      width: 160px
    .star4
      right: 0
      bottom: 0
      width: 100%

@keyframes floating
  0%,100%
    transform: translate(10px,10px)
  25%
    transform: translate(7px,-7px)
  50%
    transform: translate(0px,0px)
</style> 