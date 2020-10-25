<template>
  <div class="planet-card">
    <img src="../assets/default-planet.png" alt="default planet" />
    <div class="details">
      <h3>{{ planet.name }}</h3>
      <ul>
        <li>Climate: {{ planet.climate }}</li>
        <li>Diameter: {{ planet.diameter }}</li>
        <li>Gravity: {{ planet.gravity }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PlanetCard',
    props: {
        planet: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.planet-card {
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  margin: 20px 10px;

  h3 {
    text-align: center;
  }

  img {
    width: 160px;
    height: 160px;
  }

  @media screen and (min-width: 768px) {
    width: calc(33% - 20px);
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
  }
}
</style>
