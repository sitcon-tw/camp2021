<template>
  <div class="time-table-container">
    <table border="0" class="time-table">
      <thead>
        <tr>
          <th>時間</th>
          <th>
            Day 1
            <div class="subtitle">8/11（三）</div>
          </th>
          <th>
            Day 2
            <div class="subtitle">8/12（四）</div>
          </th>
          <th>
            Day 3
            <div class="subtitle">8/13（五）</div>
          </th>
          <th>
            Day 4
            <div class="subtitle">8/14（六）</div>
          </th>
          <th>
            Day 5
            <div class="subtitle">8/15（日）</div>
          </th>
          <th>
            Day 6
            <div class="subtitle">8/16（一）</div>
          </th>
          <th>
            Day 7
            <div class="subtitle">8/17（二）</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>08:40</td>
          <td>
            艦隊離港
            <div class="subtitle">開幕</div>
          </td>
          <td rowspan="3" @click="showCourseInfo('開源力的基本型態')" class="clickable">
            開源力的基本型態
            <div class="subtitle">Python 3</div>
          </td>
          <td rowspan="3" @click="showCourseInfo('義大利麵令人戒慎恐懼')" class="clickable">
            義大利麵令人戒慎恐懼
            <div class="subtitle">Python 中的 Function 與 Module</div>
          </td>
          <td rowspan="3" @click="showCourseInfo('在手心凝聚開源能量吧')" class="clickable">
            在手心凝聚開源能量吧
            <div class="subtitle">手把手建立一個 Discord Bot</div>
          </td>
          <td rowspan="3">
            宇宙也並非特別安全…
            <div class="subtitle">密室逃脫</div>
          </td>
          <td rowspan="11">
            揭開地球沉寂的面紗
            <div class="subtitle">黑客松</div>
          </td>
          <td rowspan="6">
            踏入死寂的第一步
            <div class="subtitle">黑客松</div>
          </td>
        </tr>
        <tr>
          <td>10:00</td>
          <td rowspan="2">
            認識艦船自動駕駛系統
            <div class="subtitle">以及 Discord Bot</div>
          </td>
        </tr>
        <tr>
          <td>11:00</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td colspan="5">午餐</td>
        </tr>
        <tr>
          <td>13:30</td>
          <td rowspan="4" @click="showCourseInfo('和飛船保持社交距離')" class="clickable">
            和飛船保持社交距離
            <div class="subtitle">基礎遠端操作與編輯器教學</div>
          </td>
          <td rowspan="2" @click="showCourseInfo('咦…不夠嗎？')" class="clickable">
            咦…不夠嗎？
            <div class="subtitle">廣度課程</div>
          </td>
          <td rowspan="2">
            神秘活動
            <div class="subtitle">連介紹也是很神秘</div>
          </td>
          <td rowspan="2">
            是什麼讓人們聚在一起
            <div class="subtitle">開源精神短講</div>
          </td>
          <td rowspan="3" @click="cafeDialog = true" class="clickable">
            驚！長老竟在我眼前…
            <div class="subtitle">視界咖啡館</div>
          </td>
        </tr>
        <tr>
          <td>14:50</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td rowspan="5" @click="showCourseInfo('在星際間通訊')" class="clickable">
            在星際間通訊
            <div class="subtitle">HTTP / RESTful</div>
          </td>
          <td rowspan="5" @click="showCourseInfo('在巨人的右肩乘涼')" class="clickable">
            在巨人的右肩乘涼
            <div class="subtitle">常用 Python 套件</div>
          </td>
          <td rowspan="5">
            當飛船與國際太空站對接
            <div class="subtitle">社群闖關</div>
          </td>
          <td rowspan="4">
            下一站，地球
            <div class="subtitle">黑客松發表</div>
          </td>
        </tr>
        <tr>
          <td>16:00</td>
          <td rowspan="2">
            觸碰飛船的運算核心
            <div class="subtitle">廣度課程</div>
          </td>
        </tr>
        <tr>
          <td>17:00</td>
          <td rowspan="3" @click="showCourseInfo('請問這樣看得夠開嗎？')" class="clickable">
            請問這樣看得夠開嗎？
            <div class="subtitle">廣度課程</div>
          </td>
        </tr>
        <tr>
          <td>17:40</td>
          <td rowspan="3">
            想將開源力捏成什麼樣子呢?
            <div class="subtitle">黑客松</div>
          </td>
        </tr>
        <tr>
          <td>
            18:00
            <div class="subtitle">休息</div>
          </td>
          <td>
            宇宙的命運掌握在各位手中?
            <div class="subtitle">閉幕</div>
          </td>
        </tr>
      </tbody>
    </table>

    <Dialog v-model="courseInfoDialog">
      <div class="course-title">{{ courseInfoData.title }}</div>
      <div class="course-subtitle">{{ courseInfoData.subtitle }}</div>
      <div class="course-info-title">課程介紹</div>
      <div class="course-description" v-html="courseInfoData.description" />
      <div v-for="({ name, description }, i) of courseInfoData.speakers" :key="i">
        <div class="course-info-title">講者介紹 - {{ name }}</div>
        <div class="course-description" v-html="description" />
      </div>
    </Dialog>
    <Dialog v-model="cafeDialog">
      <div class="course-title">驚！長老竟在我眼前…</div>
      <div class="course-subtitle">視界咖啡館</div>
      <div class="course-info-title">課程介紹</div>
      <div class="course-description">
        視界咖啡館參考自世界咖啡館（The World
        Café），在本次夏令營中，我們邀請到各領域及社群知名前輩，將傳統座談會形式改以聊天的樣貌呈現。學員可以與資訊界的名人們近距離互動，期望透過縮短講者與學員之間的距離，講者可以更針對學員給出建議，也鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。
      </div>
      <div class="course-info-title">講者介紹 - Allen Own</div>
      <div class="course-description"></div>
      <div class="course-info-title">講者介紹 - IU</div>
      <div class="course-description">
        熱愛開源的軟體工程師，目前在 UniverseTech 任職前端主管，業餘時間喜歡參與各項開源專案與社群活動。<br />
        包含知名前端 Vue 框架成員之一，幫忙維護 VSCode 與 Vue 的語言支持；同時參與 g0v Disfactory 專案，協助 NGO
        處理臺灣農地工廠的問題；也當過唐鳳辦公室實習生，負責協助政府健檢網站。也曾在 SITCON, COSCUP, g0v summit, HITCON 當過志工，協助入場
        APP 開發或是官網開發。在 SITCON 以前當過年會與此活動（夏令營）的總召。
      </div>
      <div class="course-info-title">講者介紹 - Howard Wu</div>
      <div class="course-description"></div>
      <div class="course-info-title">講者介紹 - 蘇柏瑄 Brian Su</div>
      <div class="course-description">
        剛讀完大二的臺大資訊系學生，即將在暑假後成為大三生。高中時期不務正業，幾乎是個全職的程式競賽選手，參加過大大小小的比賽，並曾在亞塞拜然以臺灣歷史最佳名次拿下了國際資奧金牌。當過一年
        SITCON Camp 的學員、一年的 SITCON 與會者、兩年的 SITCON 工人、以及今年看起來要成為 SITCON Camp
        的講師，這淵源實在是兩三下講不完。目前在當個正常的大學生，偶爾打打大學的程式競賽。對後端開發及系統維護小有興趣，這個暑假也在因緣際會下去了金融公司實習。希望在這麼多不同領域間遊蕩的同時可以多少都把事情做好一點。
      </div>
    </Dialog>
  </div>
</template>

<script>
import courseData from '@/assets/courses.js'
let { courses, speakers } = courseData
export default {
  data: () => ({
    courses,
    speakers,
    cafeDialog: false,
    courseInfoDialog: false,
    courseInfoData: {
      title: '勝勝可愛',
      subtitle: '蓬蓬鬆餅好好ㄘ',
      description: '喵喵喵！',
      speakers: [
        {
          name: '蓬蓬鬆餅',
          description: '～世人都愛的美味鬆餅～'
        },
        {
          name: 'Sciuridae',
          description: '喵喵喵！Furry 好可愛喔'
        }
      ]
    }
  }),
  methods: {
    showCourseInfo(id) {
      try {
        let { subtitle, description, speakers } = this.courses[id]
        speakers = speakers.map(x => ({ name: x, description: this.speakers[x] }))
        this.courseInfoData = {
          title: id,
          subtitle,
          description,
          speakers
        }
        this.courseInfoDialog = true
      } catch (e) {
        alert('蹦蹦')
      }
    }
  }
}
</script>
<style lang="sass">
.course-title
  font-size: 40px
  line-height: 1.5em
  font-weight: bold
.course-subtitle
  font-size: 32px
  line-height: 1.5em
  color: #E0E0E0
  padding-bottom: 16px
  margin-bottom: 16px
  border-bottom: 1px solid #E0E0E0
.course-info-title
  font-size: 24px
  line-height: 1.5em
  font-weight: bold
  margin: 16px 0
  margin-top: 32px
.course-description
  font-size: 20px
  line-height: 1.5em

@media screen and (max-width: 768px)
  .course-title
    font-size: 28px
  .course-subtitle
    font-size: 22px
  .course-info-title
    font-size: 22px
  .course-description
    font-size: 16px
.time-table-container
  width: 100%
  overflow-x: auto
.time-table
  width: 100%
  min-width: 800px
  border-radius: 16px
  overflow: hidden
  th,td
    .subtitle
      opacity: .75
      font-size: .9em
      text-decoration: none
  th
    background-color: rgb(40 89 119 / 40%)
  td
    background-color: rgb(40 89 119 / 25%)
    text-align: center
    height: 2em
    width: calc(100% / 8)
    position: relative
    padding: 1em 0.5em 1em 0.5em
    &.clickable
      cursor: pointer
      &:before
        position: absolute
        content: '...'
        bottom: 0
        right: 4px
        font-size: 10px
    &:hover
      background-color: rgb(40 89 119 / 30%)

@media screen and (max-width: 512px)
  .time-table
    font-size: 12px
</style>