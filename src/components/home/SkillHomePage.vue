<template>
  <section class="skill-style box" id="skill">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="text-uppercase title-text">Skill</h1>
          <p class="para">let's take a look my skill UwU</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div @click="TogglePopup('web')" class="skill">
              <div class="sevices-img text-center py-4">
                <img
                  src="@/assets/img/web.png"
                  alt="skill-1"
                  class="img-fluid"
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title text-uppercase font-roboto">
                  Web Developer
                </h5>
                <p class="card-text text-secondary">
                  HTML, CSS, JavaScript, Vue.js, WordPress
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div @click="TogglePopup('game')" class="skill">
              <div class="sevices-img text-center py-4">
                <img
                  src="@/assets/img/game.png"
                  alt="skill-2"
                  class="img-fluid"
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title text-uppercase font-roboto">
                  Game Developer
                </h5>
                <p class="card-text text-secondary">
                  Unreal Engine 4, Unity, C#
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WebSkillPage
        v-if="buttonTriggers"
        :TogglePopup="{ Trigger: () => TogglePopup(''), dataSkill: dataSkill }"
      />
    </div>
  </section>
</template>

<script>
import WebSkillPage from "@/components/skill/WebSkillPage.vue";

export default {
  data() {
    return {
      buttonTriggers: false,
      dataSkill: "",
    };
  },
  methods: {
    TogglePopup(value) {
      this.buttonTriggers = !this.buttonTriggers;
      this.dataSkill = value;
    },
  },
  components: {
    WebSkillPage,
  },
};
</script>