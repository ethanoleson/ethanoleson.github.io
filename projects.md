<style>
  a { color: #FDB614; }

  .sidebar-button {
    display: block;
    padding: 8px 14px;
    margin-bottom: 8px;
    background: #219EBC;
    color: #FDB614 !important;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  }

  .sidebar-button.red {
    background: #9D2235;
    color: white !important;
  }

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

  <nav class="sidebar">
    <h3>Pages</h3>

    <a href="/" class="sidebar-button">Home</a>
    <a href="projects.md" class="sidebar-button">Projects</a>

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

    <a href="mailto:eoleson@uark.edu" class="sidebar-button">
      Email
    </a>
  </nav>

  <!-- MAIN CONTENT (Markdown enabled) -->
  <section class="main-content" markdown="1">

## Projects

I am interested mostly in the intersection of mathematics and sedimentology. 

My current projects include:

1. Evaluating the methods we use to calculate max depo age  
2. Fine tuning LA-ICP-MS for DZ U-Pb Geochronology  
3. Tectonic Sedimentology in Patagonia, Argentina  

I am also interested in:

1. Mathematically modeling basin processes  
2. Geomorphology in cave systems  
3. Geometric properties of minerals in thermochronology  
4. Developing new chronologic techniques  

**If you are also interested in these things, email me!**

<a href="mailto:eoleson@uark.edu"
   style="
     display:inline-block;
     padding:8px 14px;
     background: #219EBC;
     color: #FDB614;
     border-radius:6px;
     text-decoration:none;
     font-weight:600;
   ">
  Email Me!
</a>

  </section>
</div>