<template>
    <div class="timer-container">
        <template v-if="isFinished">
            <div class="releaseKraken">
                Release the Kraken!
            </div>
            <Confetti />
        </template>
        <div class="timer">
            {{ timeLeft }}
        </div>
    </div>
  </template>

<script lang="ts" src="./Timer.ts" />

<style lang="scss" src="./Timer.scss">
</style>