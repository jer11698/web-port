<template>
  <div class="popup">
    <div class="popup-inner">
      <h2>{{ dataSkill }}</h2>
      <button @click="TogglePopup.Trigger()">Close</button>
      <div class="overflow">
        <div class="card boxpopup mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/img/mafia/image.png"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                src="@/assets/img/mafia/image2.png"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                src="@/assets/img/mafia/image3.png"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                src="@/assets/img/mafia/image4.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">Mafia's Story Blog</h1>
                <p class="card-text">
                  A web blog that collects information about the history and
                  origins of each mafia group.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card boxpopup mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/img/HH.GG/image.png"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                src="@/assets/img/HH.GG/image2.png"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                src="@/assets/img/HH.GG/image3.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">HH.GG</h1>
                <p class="card-text">
                  The website collects information on the game League of
                  Legends, including character data. And introduce the use of
                  various characters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
  data() {
    return {
      dataSkill: this.TogglePopup.dataSkill,
      web: {
        tilte: "Web Developer",
        list: [
          {
            name: "Mafia's Story Blog",
            detail:
              "A web blog that collects information about the history andorigins of each mafia group.",
            image: [
              "mafia/image.png",
              "mafia/image2.png",
              "mafia/image3.png",
              "mafia/image4.png",
            ],
          },
          {
            name: "HH.GG",
            detail:
              "The website collects information on the game League of Legends, including character data. And introduce the use of various characters",
            image: ["HH.GG/image.png", "HH.GG/image2.png", "HH.GG/image3.png"],
          },
        ],
      },
    };
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup .popup-inner {
  background: #fff;
  padding: 32px;
}

.overflow {
  overflow-y: scroll !important;
  height: 50vh;
}

.card.boxpopup {
  max-width: 68vw;
}
</style>