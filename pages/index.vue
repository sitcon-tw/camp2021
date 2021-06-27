<template>
  <div>
    <div class="hero-header">
      <div class="container">
        <img src="/2021/img/hero-logo.svg" width="300px" class="hero-logo" />
        <img src="/2021/img/stars1.svg" class="stars1" v-rellax="{ speed: -1 }" />
        <img src="/2021/img/stars2.svg" class="stars2" v-rellax="{ speed: -1.2 }" />
        <img src="/2021/img/saturn.svg" class="saturn" v-rellax="{ speed: 1.5 }" />
        <img src="/2021/img/rocket.svg" class="rocket" v-rellax="{ speed: -1 }" />
      </div>
    </div>
    <div class="slogan">
      <h3 class="text-center">樂趣之餘，不忘學習</h3>
      <h1 class="text-center">由資訊社群所打造，超高知識含量的夏令營</h1>
    </div>
    <div class="container">
      <div class="img-content-container" style="position: relative;">
        <div class="content">
          <p
            style="margin-top:0;"
          >有鑑於資訊領域逐漸成為科技時代的重要學門，社群與開源精神亦持續抬頭，SITCON 團隊認為將資訊教育向下扎根，為在資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並播灑開源種子，是一件相當重要且值得去做的事情。</p>

          <p>2014 年至今，SITCON 夏令營已將邁入第六屆，在此之前課程內容涵蓋開源碼、資訊安全、Maker、Python、後端的 Node.js、前端的資料爬蟲、視覺化、Telegram bot 等。另外更有社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。</p>

          <p>2021 年度，SITCON 夏令營因應疫情改於線上舉辦，以「開源星球，源力崛起」為主軸，帶領各位一同進入開源宇宙。我們將傳承歷屆夏令營的概念，今年的線上夏令營將會把往年的豐富活動都移轉到線上舉行，也會有從基礎 Python 程式語言到做出自己的聊天機器人的實作課程。開源宇宙也將更進一步把故事和營隊整合，配合豐富的課程、座談會及社群闖關，營造完整的體驗，絕對能讓學員擁有截然不同的營隊體驗。</p>
        </div>
        <div class="img" style="min-width: 400px">
          <img src="/2021/img/48711198528_e7ac02a80b_k.jpg" />
        </div>
        <img src="/2021/img/flag.svg" class="flag-img" />
      </div>
      <section id="課程活動" style="padding-top: 128px;margin-top: -96px">
        <h1 style="margin: 16px 0">課程活動</h1>
        <time-table />
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">主線課程</h2>
            <p>今年由於疫情關係，課程皆改以線上方式進行。</p>
            <p>營隊將採取小班制教學的模式，由兩位隊輔帶領六人小組；在課程中，隊輔會分段播放講師的預錄影片，並穿插多個實作，在確保學員都完成後，我們才會進行下一階段。</p>
            <p>由於往年舉辦夏令營時，每個小組的進度大多不一致，使得講師在教課時容易分身乏術，因此課程被設計為：分段播放預錄影片，由隊輔協助學員理解課程內容，講師依情況即時指導學員！</p>
          </div>
          <div class="img">
            <img src="/2021/img/48711667217_a251f33169_k.jpg" />
          </div>
        </div>
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">Hackathon</h2>
            <p>黑客松（Hackathon）是「黑客」（Hack；原指早期為電腦系統找尋不完美的地方，或是探索不同的解法，來改善電腦系統）與「馬拉松」（Marathon）的組合字，顧名思義，也就像是程式設計、工程界的馬拉松：由有興趣的一群人在有限的時間內，發揮自己的專長做出一個有特色的專案。</p>
            <p>雖然夏令營改為線上，但我們也準備了共同編輯的工具，讓大家即使宅在家，也能獲得完成專案的成就感!</p>
          </div>
          <div class="img">
            <img src="/2021/img/48711667217_a251f33169_k.jpg" />
          </div>
        </div>
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">廣度課程</h2>
            <p>為避免單一的教學方式限制了學員對資訊領域的視野，夏令營在設計時，特別安排了廣度課程。讓學員在學習基礎課程之餘，也能學到資訊領域的其他層面，增加自身資訊技能的廣度。其中，我們邀請到了許多在資訊圈打滾多年的權威人士分享自身經驗，期許能為迷茫中的學員，點亮未來的一盞明燈，找到屬於自己的資訊路。</p>
          </div>
          <div class="img">
            <img src="/2021/img/48711673932_dd4e775482_k.jpg" />
          </div>
        </div>
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">視界咖啡館</h2>
            <p>視界咖啡館參考自世界咖啡館（The World Café），在本次夏令營中，我們邀請到各領域及社群知名前輩，將傳統座談會形式改以聊天的樣貌呈現。學員可以與資訊界的名人們近距離互動，期望透過縮短講者與學員之間的距離，講者可以更針對學員給出建議，也鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。</p>
          </div>
          <div class="img">
            <img src="/2021/img/48711185743_0289ac2d95_k.jpg" />
          </div>
        </div>
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">社群闖關</h2>
            <p>就算有疫情，社群也從不缺席！</p>
            <p>社群闖關邀請許多資訊相關社群前來擺攤，藉由互動遊戲、影片欣賞、專人介紹...等方式，讓學員認識所謂的「社群」，並對開源活動有初步了解。點選課表可檢視詳細的社群資訊。</p>
          </div>
          <div class="img">
            <img src="/2021/img/48711417321_9811d901a1_k.jpg" />
          </div>
        </div>
        <div class="img-content-container">
          <div class="content">
            <h2 class="with-underline">故事劇情</h2>
            <p>我們會將故事劇情帶入課程中，讓學員在學習時更有樂趣！</p>
            <p>延續 2019 年的故事，在解決了 SITCON 艦艇號的問題後，在宇宙中的隊長們終於意識到我們的地球在小石被替除的前隊員拿走後，就已經失去開源力了。</p>
            <p>宇宙中的萬物都需要仰賴開源力來維持生命，而地球的開源力被取走了，也不再產生新生命了。</p>
            <p>兩千年過後的現在，地球上的生命體不是壽命已到離開了這個世界，就是已經離開地球，到宇宙當中生存了。 ———現在，我們將要重新返航到地球去，將地球開源力的能量來源『小石』帶回到地球中，讓地球回到 2000 年前的美麗，不再如此的了無生息。</p>
          </div>
          <div class="img">
            <img src="/2021/img/sitcon.jpg" />
          </div>
        </div>
      </section>
    </div>
    <div class="review" id="過往紀錄與回饋">
      <youtube
        class="video-background"
        @ready="videoReady"
        @ended="videoEnded"
        player-width="100%"
        player-height="100%"
        mute
        video-id="oAtiOrpj6DQ"
      />
      <div class="container">
        <h1>過往紀錄與回饋</h1>
        <p>
          SITCON 夏令營在為學員帶來扎實內容的同時，也希望整個學習的過程有趣且精彩
          <br />以下為過往活動的影音紀錄，今年雖改為線上，但我們想帶給大家的內容絕不縮水。
        </p>
      </div>
      <div class="image-wall">
        <splide :options="{...imageWallOptions,interval: 5000,focus: 'center'}">
          <splide-slide v-for="item of imageWall.row1" :key="item">
            <img :src="item" />
          </splide-slide>
        </splide>
        <splide :options="{...imageWallOptions,interval: 4600}" style="margin-top: 48px">
          <splide-slide v-for="item of imageWall.row2" :key="item">
            <img :src="item" />
          </splide-slide>
        </splide>
      </div>
      <div class="bottom-btns">
        <a href="https://www.youtube.com/watch?v=oAtiOrpj6DQ" target="_blank">查看完整回顧影片</a>
        <a href="https://www.flickr.com/photos/sitcon/albums" target="_blank">查看更多照片</a>
      </div>
    </div>
    <splide :options="{...reportOptions}" style="margin: 32px 0" id="report-splide">
      <splide-slide v-for="({name,avatar,content,link,year},i) of reportItems" :key="i">
        <div class="report">
          <img class="avatar" :src="avatar" />
          <div class="title">SITCON Camp {{year}} 學員</div>
          <div class="name">{{name}}</div>
          <div class="content" v-html="content.replace(/\n/g,'<br>')" />
          <div class="readmore">
            <a :href="link" target="_blank" v-if="link.startsWith('http')">閱讀全文</a>
            <router-link :to="link" v-else>閱讀全文</router-link>
          </div>
        </div>
      </splide-slide>
    </splide>
    <div class="container">
      <h1>活動資訊</h1>
      <div class="event-info">
        <section>
          <p>日期</p>
          <h1>08/11（三）~ 08/17（二）</h1>
          <p>每天 08:40 ~ 18:00，逢用餐時段休息 90 分鐘</p>
        </section>
        <section>
          <p>地點</p>
          <h1>線上平台</h1>
          <p>相關資訊請見報名說明</p>
        </section>
      </div>
      <section id="報名資訊" style="padding-top: 128px;margin-top: -80px">
        <h1>報名資訊</h1>
        <div class="signup-info">
          <div class="time">
            報名時間
            <h2>即日起 ~ 2021/07/10</h2>
          </div>
          <div class="sign-up">
            <div class="signup-btn" @click="showSignupInfo=true">前往報名 ➡</div>
          </div>
          <div class="price-container">
            <div class="price-item">
              <div class="title">個人報名</div>
              <div class="price">4500 NTD/人</div>
            </div>
            <div class="price-item">
              <div class="title">團體報名</div>
              <div class="price">4200 NTD/人</div>
            </div>
          </div>
        </div>
        <div class="price-note">
          <p>三人同時報名，視為團體報名，每團以三人為限。</p>
          <p>本次夏令營預計招收學員 60 名，我們會針對報名資料做簡易審查，非先報先贏。</p>
          <p>正取學員名單將於 07/23 公佈，屆時請關注 SITCON 相關社群媒體。</p>
          <p>
            正取學員需完成報名費繳交，始完成報名程序；另設有補助名額，請詳閱
            <a
              href="https://drive.google.com/file/d/1kODllu2VNdeUi_covc_PeW8WnffCEhTH/view"
              target="_blank"
            >補助辦法</a>。
          </p>
          <p>
            關於退費事宜，請見
            <a
              href="https://drive.google.com/file/d/1xMgpsaATsIlSWfv31VcV0dCuy8if5tqE/view"
              target="_blank"
            >退費說明文件</a>。
          </p>
        </div>
      </section>
    </div>
    <div class="more-info container">
      <section>
        <div class="title-and-link">
          <h1>關於 SITCON</h1>
          <router-link to="/about">深入瞭解</router-link>
        </div>
        <p>學生計算機年會（SITCON）是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群， 也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。 除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。</p>
        <p>我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。</p>
      </section>
      <section>
        <div class="title-and-link">
          <h1>行為準則 / Code of Conduct</h1>
          <router-link to="/coc">深入瞭解</router-link>
        </div>

        <p>SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀社群的的行為準則（Code of Conduct），共同創造一個友善的環境。</p>
      </section>
    </div>
    <Dialog v-model="showSignupInfo">
      <signup-info />
    </Dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    reportOptions: {
      type: "loop",
      perPage: 5,
      perMove: 1,
      gap: "24px",
      pagination: false,
      focus: "center",
      breakpoints: {
        1024: {
          perPage: 1,
          fixedWidth: 300
        },
        1366: {
          perPage: 3,
          fixedWidth: 300
        }
      }
    },
    reportItems: [
      {
        name: "William Mou",
        avatar: "https://i.imgur.com/rnV72WM.jpg",
        year: 2017,
        content:
          "學生計算機年會（SITCON）簡單來說就是每年為喜歡資訊的學生舉辦的年會，會要請需多資訊界重量級講師來進行演講，而 SITCON 夏令營則是為學生舉辦的資訊營隊活動....",
        link: "https://anjoincamp.blogspot.com/2019/08/sitcon-camp.html"
      },
      {
        name: "李杰穎",
        avatar: "https://i.imgur.com/SY6Zi2x.jpg",
        year: 2019,
        content:
          "這是我參加過課程最硬的營隊，也是唯一一次在營期中熬夜到三點的。\n這次程式開發的經驗真的讓我了解到什麼叫跟時間賽跑，我從來沒有打code打到凌晨3點，早上7點起來繼續的經驗。而且做出來的成品是真的可以用的，就真的非常非常有成就感，期望以後還有機會體驗到這種開發的經驗。\nSITCON 2020 我會去的！！！（當工人感覺不錯呢）",
        link: "https://jayin92.github.io/posts/2019-sitcon-camp/"
      },
      {
        name: "Vincent",
        avatar: "https://i.imgur.com/I7iV7Fo.jpg",
        year: 2019,
        content:
          "在參加 SITCON 夏令營前，我只知道資訊中的演算法競賽，參加後，我知道資安、專案開發、人工智慧…等領域，甚至認識到了在這些領域前段的社群朋友們。\n以我自己的經驗，我參加了…",
        link: "/report/vincent"
      },
      {
        name: "陳俊宇",
        avatar: "https://i.imgur.com/RlcXMX1.png",
        year: 2019,
        content:
          "Telegram bot 技術門檻不高，只要會一些基本的 Python 語法就能做出來，這也是這五天 SITCON 夏令營的主要課程之一。\n我們的黑客松題目：猜歌機器人，不知道你有沒有這樣的經驗，和一群動漫迷時，放一首動漫歌曲，看對方由沒有聽過；而這次的黑客松，我們小隊打算在 Telegram 上做一個猜歌機器人，主要流程如下…",
        link: "https://forum.gamer.com.tw/C.php?bsn=60292&snA=5734&tnum=1"
      },
      {
        name: "楊芷安",
        avatar: "/2021/img/avatar.svg",
        year: 2019,
        content:
          "“視”界咖啡館使用座談會的形式對講師們問問題，輪到與PCman的訪談，其實一開始我對他比較沒有那麼感興趣，但後來他分享自己如何從學醫回到資工的經驗還挺精彩的，他也將醫生檢查病人的那套 SOP 運用在 debug 上，強大的 SOP，居然不只可以用在當市長，還可以 debug 啊~",
        link: "https://anjoincamp.blogspot.com/2019/08/sitcon-camp.html"
      }
    ],
    imageWallOptions: {
      type: "loop",
      perPage: 6,
      perMove: 1,
      gap: "10px",
      height: 200,
      heightRatio: 0.2,
      autoplay: true,
      cover: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        768: {
          perPage: 2,
          height: 150
        }
      }
    },
    imageWall: {
      row1: [
        "/2021/img/48711148968_c0c5b92648_k.jpg",
        "/2021/img/48711158398_a9e76fe8c6_k.jpg",
        "/2021/img/48711173683_6a5438b593_k.jpg",
        "/2021/img/48711180203_df7f6ba7b3_k.jpg",
        "/2021/img/48711432406_1dc02a6270_k.jpg",
        "/2021/img/48711460716_f573528caf_k.jpg",
        "/2021/img/48711478201_f0b3b61d1f_k.jpg"
      ],
      row2: [
        "/2021/img/48711504911_54e1d297c7_k.jpg",
        "/2021/img/48711513221_eddbacab82_k.jpg",
        "/2021/img/48711514086_fe8bcd70a3_k.jpg",
        "/2021/img/48711645867_304b3f2727_k.jpg",
        "/2021/img/48711654047_e36f5fe98d_k.jpg",
        "/2021/img/48711655747_6f4d128066_k.jpg",
        "/2021/img/48711675447_324a2915f4_k.jpg",
        "/2021/img/48711684617_e8d23396b3_k.jpg"
      ]
    },
    showSignupInfo: false,
    player: null
  }),
  methods: {
    videoReady(event) {
      this.player = event.target;
      this.player.playVideo();
    },
    videoEnded() {
      this.player.seekTo(0);
    }
  }
};
</script>
<style lang="sass">
.hero-header
  margin-top: 128px
  width: 100vw
  overflow: hidden
  .container
    position: relative
    height: 70vh
    min-height: 500px
    .stars1,
    .stars2,
    .saturn,
    .rocket
      position: absolute
    .stars1
      bottom: 20vh
      left: 7vw
      animation: twinkling 2s 0s infinite
    .stars2
      right: 0
      top: 4vh
      animation: twinkling 2s 1s infinite
    .saturn
      left: 0
      bottom: 0
    .rocket
      right: 80px
      bottom: 120px

@media screen and (max-width: 768px)
  .hero-header
    .container
      .stars1
        width: 100%
        left: 0
      .stars2
        width: 100%
        top: 128px
      .saturn
        width: 200px
      .rocket
        width: 100px

.flag-img
  position: absolute
  right: 0
  right: -100px
  top: -318px
  z-index: 0

@media screen and (max-width: 1100px)
  .flag-img
    right: 0
@media screen and (max-width: 768px)
  .flag-img
    display: none
.slogan
  margin-top: 100px
  margin-bottom: 60px
  position: relative
.review
  background-color: #000
  background-size: cover
  margin: 32px 0
  position: relative
  .video-background,.video-background iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    pointer-events: none
  .container
    position: relative
    margin-bottom: 32px
    padding-top: 120px
  .video-background
    opacity: .4
    overflow: hidden
  .video-background iframe
    top: 50%
    left: 50%
    width: 100vw
    height: 100vh
    transform: translate(-50%, -50%) scale(1.2)
@media (min-aspect-ratio: 16/9)
  .review .video-background iframe
    height: 56.25vw
@media (max-aspect-ratio: 16/9)
  .review .video-background iframe
    width: 177.78vh

.bottom-btns
  padding: 64px 0
  position: relative
  text-align: center
  a
    background-color: rgba(255,255,255,.2)
    border: 2px solid #fff
    border-radius: 100em
    text-decoration: none
    padding: 6px 12px
    margin: 0 8px
    transition: all .4s ease
    &:hover
      background-color: rgba(255,255,255,.3)
    &:active
      background-color: rgba(255,255,255,.4)
.more-info
  background-color: #335A46
  padding: 32px
  border-radius: 16px
  margin-bottom: 64px
  section + section
    margin-top: 60px
  h1
    font-size: 36px
  .title-and-link
    display: flex
    align-items: flex-end
    h1
      flex: 1
.signup-btn
  font-size: 24px
  background-color: #fff
  color: #192C35
  padding: 16px 32px
  border-radius: 100em
  text-decoration: none
  display: inline-block
  cursor: pointer
  &:hover
    box-shadow: inset 0 0 10em rgba(0, 0, 0, .1)
  &:active
    box-shadow: inset 0 0 10em rgba(0, 0, 0, .2)

.event-info
  display: flex
  section
    margin-top: 16px
    width: 50%
    p
      margin: 8px 0
@media screen and (max-width: 768px)
  .event-info
    display: block
    section
      width: 100%
.signup-info
  display: grid
  grid-template-areas: "time price" "sign-up price"
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr 1fr
  align-items: center
  margin-bottom: 64px
  .time
    grid-area: time
  .sign-up
    grid-area: sign-up
    align-self: flex-end
  .price-container
    grid-area: price
    width: 100%
    .price-item
      width: 100%
      max-width: 270px
      padding: 16px 32px
      border-radius: 16px
      background-color: #CF992D
      font-size: 24px
      & + .price-item
        margin-top: 24px
      .title
        border-bottom: 1px solid #fff
        padding-bottom: 8px
        margin-bottom: 8px
        font-size: 18px

@media screen and (max-width: 768px)
  .signup-info
    grid-template-areas: "time" "price" "sign-up"
    grid-template-columns: initial
    grid-template-rows: initial
    .time, .price-container, .sign-up
      margin-top: 16px

    .price-container
      display: flex
      gap: 12px
      .price-item
        width: 50%
        padding: 16px
        & + .price-item
          margin-top: 0
        .title
          font-size: 16px
        .price
          font-size: 22px
    .sign-up
      margin-top: 64px
      align-self: center
      justify-self: center
.price-note
  background-color: #285977
  padding: 16px 32px
  border-radius: 16px
  margin-bottom: 64px
.splide__slide
  border-radius: 4px
  user-select: initial

#report-splide
  .splide__slide
    user-select: initial
  .splide__track
    &:before
      left: 0
      background: linear-gradient(to right, rgba(25, 44, 53, .75), #0000)
    &:after
      right: 0
      background: linear-gradient(to left, rgba(25, 44, 53, .75), #0000)
    &:before, &:after
      position: absolute
      top: 0
      content: ''
      height: 100%
      width: 200px
      z-index: 1
      pointer-events: none
  .report
    background-color: #fff
    border-radius: 16px
    padding: 16px
    color: #000
    text-align: center
    margin-top: 64px
    padding-top: 0
    .avatar
      display: inline-block
      width: 128px
      height: 128px
      object-fit: cover
      border-radius: 100em
      margin-top: -64px
    .title
      font-weight: bold
    .content
      text-align: left
      margin-top: 16px
    .readmore
      margin-top: 16px
      text-align: right
      a
        background-color: #000
        padding: 8px 16px
        border-radius: 100em
        color: #fff
        text-decoration: none
        &:hover
          opacity: .8
        &:active
          opacity: 1

@media screen and (max-width: 768px)
  #report-splide .splide__track
    &:before, &:after
      width: 50px
/*

        <div class="report">
          <img class="avatar" src="/img/avatar.png" />
          <div class="title">SITCON Camp 2017 學員</div>
          <div class="name">William Mou</div>
          <div class="content">學生計算機年會（SITCON）簡單來說就是每年為喜歡資訊的學生舉辦的年會，會要請需多資訊界重量級講師來進行演講，而 SITCON 夏令營則是為學生舉辦的資訊營隊活動....</div>
          <div class="readmore">閱讀全文</div>
    */
</style>
