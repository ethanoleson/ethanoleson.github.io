<style>
  /* Global Markdown link color */
  a {
    color: #FDB614;
  }

  /* ------------------ BUTTON STYLES FOR SIDEBAR ------------------ */
  .sidebar-button {
    display: block;
    padding: 8px 14px;
    margin-bottom: 8px;
    background: #219EBC;          /* Blue */
    color: #FDB614 !important;    /* Gold text on blue */
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  }

  .sidebar-button:hover {
    filter: brightness(0.9);
  }

  /* Red CV button (white text) */
  .sidebar-button.red {
    background: #9D2235;          /* Razorback red */
    color: white !important;
  }

  /* ------------------ PAGE LAYOUT ------------------ */
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

  <a href="/" class="sidebar-button">Home</a>
  <a href="/projects.html" class="sidebar-button">Projects</a>

  <h3 style="margin-top: 20px;">Links</h3>

  <a href="E_W_Oleson_CV_2025_geo.pdf" 
     target="_blank" rel="noopener noreferrer" 
     class="sidebar-button red">
    CV (PDF)
  </a>

  <a href="https://github.com/ethanoleson"
     target="_blank" rel="noopener noreferrer"
     class="sidebar-button">
    GitHub
  </a>

  <a href= "https://www.linkedin.com/in/ethan-oleson-38a2a2156/"
     target="_blank" rel="noopener noreferrer"
     class="sidebar-button">
     LinkedIn
  </a>

  <a href="mailto:eoleson@uark.edu" class="sidebar-button">
    Email
  </a>

  <a href="https://geosciences.uark.edu/" target="_blank" rel="noopener noreferrer"
     class = "sidebar-button red">
    UArk Geosciences
  </a>
</nav>

  <!-- MAIN CONTENT (Markdown enabled!) -->
  <section class="main-content" markdown="1">

 
<img src="ethan_2.png" width="40%">

**I like sed rocks and statistics.**

<!-- <div style="display: flex; gap: 10px; margin-bottom: 20px;">
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
</div> -->

---

**Hi! I'm Ethan.** I am a Ph.D. student at the **University of Arkansas** in Fayetteville, AR.  

I am a geochronologist and sedimentologist who is interested in understanding the evolution of modern and ancient sedimentary systems and their linkages to tectonic processes through the use and development of thermo/geochronologic techniques.  

I primarily work on detrital and igneous zircon UPb and AHe/ZHe.  

Geo/Thermochronology ● Tectonic Sedimentology ● Basin Analysis ● Mathematical Modeling of Geologic Processes ● Geochronology Methods Development ● Geochronology Statistics ● U-series Geochemistry

## Research Highlight
<div markdown="1" style="
  background: #e8f4fa;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 16px 0;s
  border: 1px solid #c8dfea;
">
  **November 24th, 2025**
  <br><br>
  I recently published a standalone Windows application on GitHub that makes converting .tif and .jpeg files to DeepZoom (.dzi) files super easy. Before now, this was not a trivial process and required deprecating several image processing libraries, such as PIL. Now, all you need to do is download a program and go! This was motivated by the launch of Glenn Sharman’s Petro-Image, which requires a .dzi file to visualize your scanned thin sections at very high resolution and at multiple extinction angles in PPL and XPL. 
  <br><br>
  Access this program by following the link in the side panel to my GitHub page. 
  
</div>

## My CV:
**2024 – Present:** Ph.D. in Geosciences, University of Arkansas, Fayetteville.  
<div style="margin-left: 20px;">Advisor: Glenn R. Sharman</div>

**2022 – 2024:** M.S. in Geology, University of Arkansas, Fayetteville.  
<div style="margin-left: 20px;">Advisor: Matthew D. Covington</div>

**2018 – 2022:** B.S. in Earth Sciences (minor in math), Montana State University, Bozeman, MT.  
<div style="margin-left: 20px;">Advisor: Devon A. Orme</div>

<br>
Orcid: 0009-0000-6225-4338  

<!-- <a href="E_W_Oleson_CV_2025_geo.pdf" target="_blank" rel="noopener noreferrer" style="
  display: inline-block;
  padding: 8px 14px;
  background: #219EBC;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
">
  Download CV
</a> -->

## Frequent Collaborators

- [Matthew Malkowski](https://www.mmalkowski.com/) at UT-Austin  
- Jack Fekete at BP p.l.c  
- Boise State University Isotope Geology Laboratory  

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

  </section>
</div>