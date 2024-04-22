<template>
  <div class="card">
    <img :src="iconUrl" class="card-img-top" alt="Chuck Norris">
    <div class="card-body">
      <div class="text-area">
        <p class="card-text">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.text-area {
  background-color: #5CD18B;
  padding: 10px;
  margin-bottom: 25px;
}
</style>
