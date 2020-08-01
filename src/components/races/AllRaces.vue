<template>
  <v-container>
    <div class="step-one">
      <h3>รายการแข่งขัน</h3>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-avatar>
            <v-img :src="item.thumbnail"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.date_schedule }}</div>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
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
