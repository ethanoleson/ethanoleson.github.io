<style>
  /* Global link color */
  a {
    color: #FDB614;
  }

  /* Layout for sidebar + main content */
  .page-layout {
    display: flex;
    gap: 32px;
    align-items: flex-start;
  }

  .sidebar {
    min-width: 180px;
    max-width: 220px;
    font-size: 0.95em;
  }

  .sidebar h3 {
    margin-top: 0;
  }

  .sidebar a {
    display: block;
    margin: 4px 0;
    text-decoration: none;
  }

  .sidebar a:hover {
    text-decoration: underline;
  }

  /* Optional: make images scale nicely */
  .main-content img {
    max-width: 100%;
    height: auto;
  }

  /* Mobile: stack sidebar above content */
  @media (max-width: 800px) {
    .page-layout {
      flex-direction: column;
    }
  }
</style>

<div class="page-layout">

  <!-- SIDEBAR -->
  <nav class="sidebar">
    <h3>Pages</h3>
    <a href="/">Home</a>
    <a href="projects.md">Projects</a>
    <a href="E_W_Oleson_CV_2025_geo.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
    <a href="https://github.com/ethanoleson" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="mailto:eoleson@uark.edu">Email</a>
  </nav>

  <!-- MAIN CONTENT -->
  <div class="main-content">

<img src="ethan_2.png" width="40%">
<br>
**I like sed rocks and statistics.**
<br>

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <a href="https://github.com/ethanoleson" target="_blank" rel="noopener noreferrer" style="
    display: inline-block;
    padding: 8px 14px;
    background: #219EBC;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  ">Github</a>

  <a href="https://clastics.uark.edu/" target="_blank" rel="noopener noreferrer" style="
    display: inline-block;
    padding: 8px 14px;
    background: #219EBC;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  ">CSRG Website</a>

  <a href="https://geosciences.uark.edu/" target="_blank" rel="noopener noreferrer" style="
    display: inline-block;
    padding: 8px 14px;
    background: #9D2235;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
   ">UArk Geosciences</a>

  <a href="mailto:eoleson@uark.edu" 
   style="
     display:inline-block;
     padding:8px 14px;
     background: #219EBC;
     color:white;
     border-radius:6px;
     text-decoration:none;
     font-weight:600;
   ">
    Email Me!
  </a>
</div>

<br>
**Hi! I'm Ethan.** I am a Ph.D. student at the **University of Arkansas** in Fayetteville, AR. 

I am a geochronologist and sedimentologist who is interested in understanding the evolution of modern and ancient sedimentary systems and their linkages to tectonic processes through the use and development of thermo/geochronologic techniques.

I primarily work on detrital and igneous zircon UPb and AHe/ZHe.

Geo/Thermochronology ● Tectonic Sedimentology ● Basin Analysis ● Mathematical Modeling of Geologic Processes ● Geochronology Methods Development ● Geochronology Statistics ● U-series Geochemistry

## My CV:

**2024 – Present:** Ph.D. in Geosciences, University of Arkansas, Fayetteville.  
<div style="margin-left: 20px;">Advisor: Glenn R. Sharman</div>
<br>

**2022 – 2024:** M.S. in Geology, University of Arkansas, Fayetteville.  
<div style="margin-left: 20px;">Advisor: Matthew D. Covington</div>
<br>

**2018 – 2022:** B.S. in Earth Sciences (minor in math), Montana State University, Bozeman, MT.  
<div style="margin-left: 20px;">Advisor: Devon A. Orme</div>
<br>

Orcid: 0009-0000-6225-4338
<br>

<a href="E_W_Oleson_CV_2025_geo.pdf" target="_blank" rel="noopener noreferrer" style="
  display: inline-block;
  padding: 8px 14px;
  background: #219EBC;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
">
  Download CV
</a>
<br>

## Frequent Collaborators
- [Matthew Malkowski](https://www.mmalkowski.com/) at UT-Austin  
- Jack Fekete at BP p.l.c (formerly of the University of Arkansas)  
- Boise State University Isotope Geology Laboratory  

## Pages
- [Projects](projects.md)

<div style="text-align: center;">
  <img src="jack_and_ethan_hogs_and_owls_2024.JPG" width="40%">
</div>

<p>Updated: <span id="last-updated"></span></p>

<script>
  document.getElementById("last-updated").textContent =
    new Date(document.lastModified).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
</script>

  </div> <!-- end .main-content -->

</div> <!-- end .page-layout -->