<template>
  <div>
    <table border="0" class="time-table">
      <tbody>
        <tr>
          <td>時間</td>
          <td>8/11（三）</td>
          <td>8/12（四）</td>
          <td>8/13（五）</td>
          <td>8/14（六）</td>
          <td>8/15（日）</td>
          <td>8/16（一）</td>
          <td>8/17（二）</td>
        </tr>
        <tr>
          <td>08:40-10:00</td>
          <td>
            <p>開幕</p>
          </td>
          <td rowspan="2">主線課程</td>
          <td rowspan="2" @click="showCourseInfo('義大利麵令人戒慎恐懼')" class="clickable">義大利麵令人戒慎恐懼</td>
          <td rowspan="2" @click="showCourseInfo('凝聚開源能量吧')" class="clickable">凝聚開源能量吧</td>
          <td rowspan="2">視界咖啡館</td>
          <td rowspan="9">黑客松</td>
          <td rowspan="5">黑客松</td>
        </tr>
        <tr>
          <td>10:00-12:00</td>
          <td>認識 Discord Bot</td>
        </tr>
        <tr>
          <td>12:00-13:30</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
        </tr>
        <tr>
          <td>13:30-14:50</td>
          <td rowspan="4" @click="showCourseInfo('和飛船保持社交距離')" class="clickable">和飛船保持社交距離</td>
          <td>廣度課程</td>
          <td>神秘活動</td>
          <td>開源精神短講</td>
          <td rowspan="3">密室逃脫</td>
        </tr>
        <tr>
          <td>14:50-15:00</td>
          <td rowspan="5" @click="showCourseInfo('星際間的通訊')" class="clickable">星際間的通訊</td>
          <td rowspan="5" @click="showCourseInfo('在巨人的右肩乘涼')" class="clickable">在巨人的右肩乘涼</td>
          <td rowspan="5">社群闖關</td>
        </tr>
        <tr>
          <td>15:00-16:40</td>
          <td rowspan="3">黑客松發表</td>
        </tr>
        <tr>
          <td>16:40-16:50</td>
          <td rowspan="3">黑客松</td>
        </tr>
        <tr>
          <td>16:50-17:40</td>
          <td rowspan="2">廣度課程</td>
        </tr>
        <tr>
          <td>17:40-18:00</td>
          <td>閉幕</td>
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
  </div>
</template>

<script>
import courseData from '@/assets/courses.js'
let { courses, speakers } = courseData
export default {
  data: () => ({
    courses,
    speakers,
    courseInfoDialog: false,
    courseInfoData: {
      title: '勝勝可愛',
      subtitle: '蓬蓬鬆餅好好ㄘ',
      description: '喵喵喵！',
      speakers: [
        {
          name: '蓬蓬鬆餅',
          description: '～世人都愛的美味鬆餅～'
        }
      ]
    }
  }),
  methods: {
    showCourseInfo(id) {
      console.log(this.speakers)
      let { subtitle, description, speakers } = this.courses[id]
      speakers = speakers.map(x => ({ name: x, description: this.speakers[x] }))
      this.courseInfoData = {
        title: id,
        subtitle,
        description,
        speakers
      }
      this.courseInfoDialog = true
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
.time-table
  width: 100%
  border-radius: 16px
  overflow: hidden
  th
    background-color: rgb(40 89 119 / 40%)
  td
    background-color: rgb(40 89 119 / 25%)
    text-align: center
    height: 2em
    width: calc(100% / 8)
    &.clickable
      cursor: pointer
      text-decoration: underline
    &:hover
      background-color: rgb(40 89 119 / 30%)

@media screen and (max-width: 512px)
  .time-table
    font-size: 12px
</style>