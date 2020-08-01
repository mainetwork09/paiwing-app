<template>
  <v-container>
    <div class="step-one">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-icon>
            <v-icon color="pink">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.date_schedule }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AllRace",

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      setTimeout(function () {
        router.push("/race/" + item.race_id);
      }, 400);
    },
  },

  data() {
    return {
      items: this.$store.state.race_items,
    };
  },
};
</script>
