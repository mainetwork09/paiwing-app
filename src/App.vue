<template>
  <v-app>
    <v-app-bar app>
      <div v-if="this.$route.path!='/'">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-toolbar-title>Race Register</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
