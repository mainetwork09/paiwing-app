<template>
  <v-app>
    <v-main>
      <v-navigation-drawer v-model="drawer" app>
        <v-toolbar-title class="pt-3 px-5" color="purple">Paiwing App</v-toolbar-title>
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>หน้าแรก</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/all-races">
            <v-list-item-action>
              <v-icon>mdi-run-fast</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>รายการแข่งขัน</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="my-races">
            <v-list-item-action>
              <v-icon>mdi-star</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>รายการแข่งขันของฉัน</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="profile">
            <v-list-item-action>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar dense light app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title color="purple">Paiwing App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),

  beforeCreate: function () {
    console.log("env", process.env);
    //if(process.env.NODE_ENV === "development") {}
    /*this.$liff
      .init({
        liffId: "1561133255-7gzQ2vlA",
      })
      .then(() => {
        if (!this.$liff.isLoggedIn()) {
          this.$liff.login();
        }
      })
      .catch(function (error) {
        console.error(error);
      });*/
  },
};
</script>

<style lang="scss">
.v-application {
  font-family: "Kanit" !important;
  font-weight: 400;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
}
.v-toolbar__title {
  color: #5e72e4;
  font-weight: 400;
}
</style>

