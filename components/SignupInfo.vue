<template>
  <div>
    <h1>報名資訊</h1>
    <p>在報名前，有些資訊要請您確認...</p>
    <h2>報名資格</h2>
    <p>
      具有學生身分
      <br />（持有任一學生證蓋有 109 學年度下學期註冊章）
      <br />或出生日期為 2002 年 9 月 1 日（含）以後。
    </p>

    <h2>活動需求</h2>
    <p>本次活動採全線上進行，為確保參與的品質，報名前請先確保已擁有適當設備，並能正常存取下方所列之軟體服務。</p>
    <div class="list-block">
      <section>
        <h3 class="with-underline">硬體設備</h3>
        <ul>
          <li>電腦 (筆記型、桌上型皆可)</li>
          <li>視訊鏡頭 (Webcam)</li>
          <li>麥克風</li>
        </ul>
      </section>
      <section>
        <h3 class="with-underline">使用平台</h3>
        <ul>
          <li>
            <a href="https://meet.google.com/" target="_blank">Google Meet</a>
            <a
              href="https://support.google.com/meethardware/answer/4541234?hl=zh-Hant"
              target="_blank"
            >(官方建議系統需求)</a>
          </li>
          <li>
            <a href="https://www.teamflowhq.com/" target="_blank">Teamflow</a>
          </li>
          <li>
            <a href="https://discord.com/" target="_blank">Discord</a>
            <a
              href="https://support.discord.com/hc/zh-tw/articles/213491697"
              target="_blank"
            >(官方建議系統需求)</a>
          </li>
        </ul>
      </section>
    </div>
    <p>建議可先註冊並試用相關平台，並測試平台上的影音狀況，避免影響活動品質。</p>
    <h2>注意事項</h2>
    <ul>
      <li>建議可先註冊相關平台，並測試平台上的影音狀況，避免影響參與活動的品質。</li>
      <li>本次活動採用 KKTIX 售票進行報名。</li>
      <li>正式取得學員資格後不得轉讓予他人使用，轉讓者將取消資格。</li>
      <li>繳費完成始完成報名程序，正取學員若未於期限內繳交報名費用，將取消資格，由備取者遞補。</li>
      <li>錄取通知以及行前注意等資訊，均將透過報名時所留下之電子郵件通知學員，請務必定期檢查信箱，以確保個人權益。</li>
      <li>團體報名不保證所有團員皆錄取，唯團報經錄取者，皆可享有團體報名優惠。</li>
    </ul>
    <p>
      有任何問題歡迎來信至
      <a href="mailto:ask@sitcon.camp" target="_blank">ask@sitcon.camp</a>，我們將儘速回覆您。
    </p>
    <div style="text-align:center">
      <a
        class="go-sign-up"
        href="https://sitcon.kktix.cc/events/sitcon-camp2021"
        target="_blank"
      >報名去 ➡</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.go-sign-up
    background-color: #fff
    color: #355260
    font-size: 28px
    margin-top: 16px
    padding: 16px
    display: inline-block
    border-radius: 100em
    text-decoration: none
    &:hover
        opacity: .9
    &:active
        opacity: 1
.list-block
    display: flex
    gap: 24px
    section
        width: 300px

@media screen and (max-width: 768px)
    .list-block
        display: block
        section
            width: 100%
</style>
