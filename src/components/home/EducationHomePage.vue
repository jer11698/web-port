<template>
  <section class="education-style box" id="education">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 image-hero">
          <img src="@/assets/img/ladkrabangjpg.jpg" alt="" class="img" />
          <h2 class="text-center text">
            King Mongkut's Institute of Technology Ladkrabang
          </h2>
          <div class="info-overlay">
            <h3>King Mongkut's Institute of Technology Ladkrabang</h3>
            <h5>Information Technology, Multimedia</h5>
            <ul>
              <li>GRAPHICS DESIGN PRINCIPLES</li>
              <li>MULTIMEDIA PROGRAMMING</li>
              <li>3D COMPUTER ANIMATION</li>
              <li>COMPUTER GRAPHICS AND ANIMATION</li>
              <li>GAME DEVELOPMENT</li>
              <li>WEB TECHNOLOGY</li>
              <li>INFORMATION SYSTEMS ANALYSIS AND DESIGN</li>
              <li>HUMAN INTERFACE DESIGN</li>
              <li>WEB DESIGN AND DEVELOPMENT</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 image-hero">
          <img src="@/assets/img/ratjabopit.jpg" alt="" class="img" />
          <h2 class="text-center text">Wat Rajabopit School</h2>
          <div class="info-overlay">
            <h3>Wat Rajabopit School</h3>
            <h5>Mathematics-Science Program</h5>
            <ul>
              <li>Grade 7-12</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listName: [
        {
          tilte: "King Mongkut's Institute of Technology Ladkrabang",
          caption: "Information Technology, Multimedia",
          details: ["GRAPHICS DESIGN PRINCIPLES", ""],
        },
      ],
    };
  },
};
</script>