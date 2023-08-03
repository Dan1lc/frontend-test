<template>
  <div class="tabs-list">
    <ul class="tabs-list__header">
      <li
        v-for="(tab,i) in tabs"
        :key="i"
      >
        <TabsButton
          :active="activeTab === tab.title"
          :hint-text="tab.hintText"
          :disabled="tab.disabled"
          @click="changeTab(tab.title)"
        >
          {{ tab.title }}
        </TabsButton>
      </li>
    </ul>
    <div class="tabs-list__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots, provide } from 'vue';
import TabsButton from '@ui/TabsList/TabsButton/TabsButton';

const tabs = ref(ref(useSlots()?.default()).value.map((tab) => ({
  title:tab.props.title,
  hintText:tab.props['hint-text'],
  disabled:tab.props.disabled,
})));

const activeTab = ref(tabs.value[0]?.title);

provide('activeTab', activeTab);

const changeTab = (title) => {
  activeTab.value = title;
};
</script>

<style lang="scss" src="./TabsList.scss" scoped/>
