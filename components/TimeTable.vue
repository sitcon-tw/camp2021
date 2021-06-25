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
          <td rowspan="2">主線課程</td>
          <td rowspan="2">主線課程</td>
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
          <td rowspan="4">主線課程</td>
          <td>廣度課程</td>
          <td>神秘活動</td>
          <td>開源精神短講</td>
          <td rowspan="3">密室逃脫</td>
        </tr>
        <tr>
          <td>14:50-15:00</td>
          <td rowspan="5">主線課程</td>
          <td rowspan="5">主線課程</td>
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
        width: calc(100% / 8)
        &:hover
            background-color: rgb(40 89 119 / 30%)

@media screen and (max-width: 512px)
    .time-table
        font-size: 12px
</style>