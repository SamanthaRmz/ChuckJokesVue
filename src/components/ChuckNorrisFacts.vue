<template>
  <div class="container">
    <h1 class="title">Hechos de Chuck Norris</h1>
    <div class="fact-list">
      <div class="row">
        <div class="col-md-4 col-6" v-for="(fact, index) in chuck.slice(0, 3)" :key="index">
          <ChuckCard :icon-url="fact.icon_url" :value="fact.value" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-6" v-for="(fact, index) in chuck.slice(3, 6)" :key="index">
          <ChuckCard :icon-url="fact.icon_url" :value="fact.value" />
        </div>
      </div>
      <!-- Agregar más filas si es necesario -->
    </div>
  </div>
</template>

<script>
import ChuckCard from './ChuckCard.vue';

export default {
  components: {
    ChuckCard
  },
  data() {
    return {
      chuck: [
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Chuck Norris can skydive into outer space." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "The chief export of Chuck Norris is pain." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Time waits for no man. Unless that man is Chuck Norris." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 35px;
}

.fact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
