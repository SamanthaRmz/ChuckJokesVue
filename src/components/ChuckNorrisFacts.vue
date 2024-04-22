<template>
  <div class="container">
    <h1 class="title">Hechos de Chuck Norris</h1>
    <ul class="fact-list">
      <li class="fact-item" v-for="(fact, index) in chuck" :key="index">{{ fact.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chuck: [
        { value: "Chuck Norris can skydive into outer space." },
        { value: "The chief export of Chuck Norris is pain." },
        { value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { value: "Time waits for no man. Unless that man is Chuck Norris." },
        { value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    };
  }
};
</script>

<style src="./ChuckNorrisFacts.css"></style>
