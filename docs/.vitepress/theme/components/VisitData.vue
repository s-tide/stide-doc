<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const pagePV = ref(0)
const sitePV = ref(0)
const siteUV = ref(0)
let observer

onMounted(() => {
  // 初始化ref值（如果已经有值）
  updateCountsFromDOM()

  // 创建MutationObserver来监听DOM变化
  observer = new MutationObserver(() => {
    updateCountsFromDOM()
  })

  // 配置观察选项
  const config = {
    childList: true,
    subtree: true,
    characterData: true
  }

  // 开始观察整个文档或特定容器
  observer.observe(document.body, config)
})

onUnmounted(() => {
  // 组件卸载时停止观察
  if (observer) {
    observer.disconnect()
  }
})

function updateCountsFromDOM() {
  const pagePVElement = document.getElementById('vercount_value_page_pv')
  const sitePVElement = document.getElementById('vercount_value_site_pv')
  const siteUVElement = document.getElementById('vercount_value_site_uv')

  pagePV.value = parseCount(pagePVElement?.textContent)
  sitePV.value = parseCount(sitePVElement?.textContent)
  siteUV.value = parseCount(siteUVElement?.textContent)
}

function parseCount(text) {
  if (!text) return 0
  // 提取数字部分
  const match = text.toString().match(/\d+/)
  return match ? parseInt(match[0], 10) : 0
}
</script>

<template>
  <div style="display: none">
    本文总阅读量 <span id="vercount_value_page_pv" style="display: none">Loading</span> 次
    本站总访问量 <span id="vercount_value_site_pv" style="display: none">Loading</span> 次
    本站总访客数 <span id="vercount_value_site_uv" style="display: none">Loading</span> 人
  </div>

  <NGrid class="visit-data-class" :cols="2">
    <NGridItem id="vercount_container_site_pv" style="display: none">
      <NStatistic label="本站总访问量" tabular-nums>
        <NNumberAnimation show-separator :from="0" :to="sitePV" />
        <template #suffix> 次 </template>
      </NStatistic>
    </NGridItem>
    <NGridItem id="vercount_container_site_uv" style="display: none">
      <NStatistic label="本站总访客数" tabular-nums>
        <NNumberAnimation show-separator :from="0" :to="siteUV" />
        <template #suffix> 人 </template>
      </NStatistic>
    </NGridItem>
  </NGrid>
</template>

<style>
.visit-data-class {
  margin-top: 18px;
}
</style>