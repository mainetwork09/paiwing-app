<template>
  <v-container>
    <div class="step-one">
      <h3>Select Race Type</h3>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-icon>
            <v-icon color="pink">mdi-decagram</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.content }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Step2",

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      this.$store.dispatch("setOrderRaceType", item.title);
      setTimeout(function () {
        router.push("/register/order-summary");
      }, 400);
    },
  },

  data() {
    return {
      items: [
        { title: "Mini Marathon", content: "run only 10km" },
        { title: "Half Marathon", content: "run only 21km" },
      ],
    };
  },
};
</script>
