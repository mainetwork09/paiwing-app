<template>
  <v-container>
    <div class="step-one">
      <h3>Select Race</h3>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-icon>
            <v-icon color="pink">mdi-star</v-icon>
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
  name: "Step1",

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      setTimeout(function () {
        router.push("/step2");
      }, 400);
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
