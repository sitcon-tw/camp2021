<template>
  <div>
    <table class="time-table">
      <thead>
        <tr>
          <th>時間 / 日期</th>
          <th>ㄧ</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>09:00-10:20</td>
          <td rowspan="2">開幕</td>
          <td rowspan="5">主線課程</td>
          <td rowspan="5">主線課程</td>
          <td>廣度課程</td>
          <td rowspan="10">黑客松</td>
        </tr>
        <tr>
          <td>10:20-10:30</td>
          <td rowspan="4">社群闖關</td>
        </tr>
        <tr>
          <td>10:30-11:30</td>
          <td>認識 Discord Bot</td>
        </tr>
        <tr>
          <td>11:30-12:00</td>
          <td>黑客松討論</td>
        </tr>
        <tr>
          <td>12:00-12:20</td>
          <td rowspan="2">用餐時間</td>
        </tr>
        <tr>
          <td>12:20-13:30</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
        </tr>
        <tr>
          <td>13:30-14:50</td>
          <td rowspan="2">主線課程</td>
          <td>廣度課程</td>
          <td>開源精神短講</td>
          <td>社群闖關</td>
        </tr>
        <tr>
          <td>14:50-16:30</td>
          <td rowspan="2">主線課程</td>
          <td rowspan="2">主線課程</td>
          <td rowspan="2">視界咖啡館</td>
        </tr>
        <tr>
          <td>16:30-17:30</td>
          <td>認識 Discord Bot</td>
        </tr>
        <tr>
          <td>17:30-18:30</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
          <td>用餐時間</td>
        </tr>
        <tr>
          <td>18:30-20:30</td>
          <td rowspan="2">主線課程</td>
          <td rowspan="2">密室逃脫</td>
          <td rowspan="2">黑客松</td>
          <td rowspan="2">黑客松</td>
          <td>黑客松發表</td>
        </tr>
        <tr>
          <td>20:30-21:40</td>
          <td>閉幕</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>
<style lang="sass">
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
        width: calc(100% / 6)
        &:hover
            background-color: rgb(40 89 119 / 30%)

@media screen and (max-width: 512px)
    .time-table
        font-size: 12px
</style>