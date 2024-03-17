<template>
  <div class="topBar">
    点击添加:
    <div class="circleBox">
      <div class="red circle" @click="onClickCircle('red')"></div>
      <div class="green circle" @click="onClickCircle('green')"></div>
      <div class="blue circle" @click="onClickCircle('blue')"></div>
    </div>
  </div>

  <div class="buttonBox">
    <button @click="onUndo">撤销</button>
    <button @click="onBack">回退</button>
  </div>

  <div class="listBox">
    <div>
      <p>可撤銷列表</p>
      <div class="undoList">
        <div v-for="name in undoList" :class="name" class="circle"></div>
      </div>
    </div>

    <div>
      <p>可回退列表</p>
      <div class="rollbackList">
        <div v-for="name in rollbackList" :class="name" class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {addRecord, getRollbackStack, getUndoStack, rollbackRecord, undoRecord} from "./core/record.ts";
import {computed} from "vue";

const undoList = computed(() => {
  return getUndoStack().map(command => command.name)
})

const rollbackList = computed(() => {
  return getRollbackStack().map(command => command.name)
})

function onClickCircle(name: string) {
  addRecord({name})
}

function onUndo() {
  undoRecord()
}

function onBack() {
  rollbackRecord()
}
</script>

<style scoped>
html {
  background: pink;
}

.circleBox {
  display: flex;
}

.circle {
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.red {
  background: red;
}

.green {
  background: green;
}

.blue {
  background: blue;
}

.undoList,
.rollbackList {
  display: flex;
  flex-flow: column-reverse;
  margin-right: 20px;
  width: 70px;
  height: 450px;
  border: 1px solid black;
}

.listBox {
  display: flex;
}
</style>
