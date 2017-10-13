<template>
  <mobile-tear-sheet>
    <mu-list>

      <mu-list-item title="首页">
        <mu-icon slot="left" value="home"/>
      </mu-list-item>

      <mu-list-item title="留言板" toggleNested>
        <mu-icon slot="left" value="message"/>

        <mu-list-item slot="nested" title="列表">
          <mu-icon slot="left" value="list"/>
        </mu-list-item>
        <mu-list-item slot="nested" title="新增">
          <mu-icon slot="left" value="add"/>
        </mu-list-item>

      </mu-list-item>
    </mu-list>
  </mobile-tear-sheet>
</template>
<script>
  export default {
    components: {}
  }
</script>
