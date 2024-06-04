<template>
    <div class="confetti-container">
      <div v-for="n in confettiCount" :key="n" class="confetti" :style="getConfettiStyle()"></div>
    </div>
  </template>

<script lang="ts" src="./Confetti.ts" />

<style lang="scss" src="./Confetti.scss">
</style>