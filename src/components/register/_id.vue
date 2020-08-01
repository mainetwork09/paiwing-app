<template>
  <v-container>
    <div class="step-one">
      <h3>ข้อมูลส่วนตัว</h3>
      <v-form>
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="nameRules"
          :counter="10"
          label="Phone Number"
          required
        ></v-text-field>
      </v-form>
      <v-row justify="end" no-gutters class="mt-2">
        <v-btn @click="nextStep()">
          ถัดไป
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Register",

  methods: {
    nextStep: function () {
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.phone);
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
      };
      this.$store.dispatch("setOrderDetail", data);
      this.$router.push("/register/select-racetype");
    },
  },

  data() {
    return {
      nameRules: [],
      firstname: "",
      lastname: "",
      phone: "",
      //race_id: this.$route.params.id,
      //items: this.$store.state.race_items,
    };
  },
};
</script>
