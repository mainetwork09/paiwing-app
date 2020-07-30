<template>
  <v-container>
    <div class="step-one">
      <h3>Select Event</h3>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" v-on:click="nextStep(item)">
          <v-list-item-icon>
            <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.content }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="app-navigation">
        <router-link to="/step2">Next</router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Step1",

  methods: {
    nextStep: (item) => {
      console.log(item);
      this.goTo("/step2");
    },
  },

  data() {
    return {
      items: [
        { title: "test test", content: "aabb" },
        { title: "test test2", content: "aabb" },
      ],
    };
  },
};
</script>
