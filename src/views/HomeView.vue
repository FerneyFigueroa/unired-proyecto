<template>
  <div class="home">
    <header id="header" class="header fixed-top p-1" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img class="img-fluid ps-5"  src="@/assets/images/Virtual.png" alt="Logo Empresa" width="280px" >
      
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="#about">Inicio</a></li>
          <li><a class="nav-link scrollto" href="#about">Nosotros</a></li>
          <li><a class="nav-link scrollto" href="#services">Servicios</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Planes</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contacto</a></li>

          <!-- <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="index.html#services">Services</a></li>
          <li><a class="nav-link scrollto" href="index.html#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="index.html#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li> -->
          <!-- <li class="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li>
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
            </ul>
          </li> -->
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li> -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>

        <span class="ps-5">
          {{ username }} 

        </span>

        
  

      
      </nav><!-- .navbar -->

      
      <router-link v-if="!username"  :to="{ name: 'Login' }" class="btn-getstarted scrollto me-5 be-5 rounded-5" href="index.html#t"> Ingresar</router-link>
      
      <button type="button" v-if="username" class="btn btn-danger me-5 "
        @click="onLogout">
        <i class="bi bi-box-arrow-left "></i> Salir
         </button>
      

      

    </div>
  </header>




    <!-- <header id="header" class="header fixed-top p-0" data-scrollto-offset="0">
  <div class="container-fluid d-flex align-items-center justify-content-between">
    <img class="ms-5 p-1" src="@/assets/images/Virtual.png" alt="Logo Empresa" width="250px">

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link scrollto" href="#about">Inicio</a></li>
        <li><a class="nav-link scrollto" href="#about">Nosotros</a></li>
        <li><a class="nav-link scrollto" href="#services">Servicios</a></li>
        <li><a class="nav-link scrollto" href="#pricing">Planes</a></li>
        <li><a class="nav-link scrollto" href="#contact">Contacto</a></li>
      </ul>
    </nav>

    
  </div>
</header> -->
     
 
 
 
     <div class="carousel-separator" style="padding-top: 100px;">
       <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
         <div class="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
             aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div class="carousel-inner">
           <div class="carousel-item active" data-bs-interval="4000">
             <img src="../assets/img/INTTV.jpg" class="d-block custom-size img-fluid     animate__animated animate__zoomIn"
               alt="...">
             <div class="carousel-caption d-none d-md-block">
 
 
 
             </div>
           </div>
           <div class="carousel-item" data-bs-interval="3000">
             <!-- <img src="@/assets/img/vel.jpg" class="d-block custom-size img-fluid   animate__animated animate__zoomIn" alt="..."> -->
             <img src="../assets/img/fibra.jpg" class="d-block custom-size img-fluid   animate__animated animate__zoomIn"
               alt="...">
             <div class="carousel-caption d-none d-md-block">
 
 
             </div>
           </div>
           <div class="carousel-item">
             <img src="../assets/img/ant.png" class="d-block custom-size img-fluid   animate__animated animate__zoomIn"
               alt="...">
             <div class="carousel-caption d-none d-md-block">
 
 
             </div>
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
 
 
 
       <!-- ======= Services Section ======= -->
       <section id="services" class="services pt-3">
         <div class="container" data-aos="fade-up">
 
           <div class="section-header">
             <span class="h2 gradient-text">¡Conéctate con la excelencia y el futuro hoy mismo!</span>
             
           </div>
 
           <div class="row gy-5">
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/fibra1.jpg" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="fas fa-network-wired"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>Internet Fibra Optica</h3>
                   </a>
                   <p >Experimenta la velocidad del futuro con nuestro servicio de Internet por Fibra Óptica. Nuestra red de fibra óptica proporciona velocidades ultrarrápidas.</p>
                 </div>
               </div>
             </div> <!-- End Service Item -->
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/torre.jpg" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="bi bi-broadcast"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>Internet Inalambrico</h3>
                   </a>
                   <p >Rompe barreras geográficas con nuestro servicio de Internet Rural. Llevamos la conectividad a lugares donde otros no pueden llegar.</p>
                 </div>
               </div>
             </div><!-- End Service Item -->
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/internet-hogar.jpg" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="bi bi-easel"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>Internet y Tv</h3>
                   </a>
                   <p>Nuestro servicio de Internet y TV ofrece una combinación perfecta de velocidad, entretenimiento y confiabilidad para satisfacer todas tus necesidades.</p>
                 </div>
               </div>
             </div><!-- End Service Item -->
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/canales.png" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="bi bi-tv"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>Tv Digital</h3>
                   </a>
                   <p>Sumérgete en un mundo de entretenimiento visualmente impactante con nuestros servicios de TV en alta definición.</p>
                   <a href="#" class="stretched-link"></a>
                 </div>
               </div>
             </div><!-- End Service Item -->
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/camara.jpg" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="bi bi-camera2"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>INSTALACION DE CAMARAS DE SEGURIDAD</h3>
                   </a>
                   <p>Transforma tu Energía y Abraza la Sostenibilidad con Nuestro Servicio de Instalación de Paneles Solares</p>
                   <a href="#" class="stretched-link"></a>
                 </div>
               </div>
             </div><!-- End Service Item -->
 
             <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
               <div class="service-item">
                 <div class="img">
                   <img src="../assets/img/panel.jpg" class="img-fluid" alt="">
                 </div>
                 <div class="details position-relative">
                   <div class="icon">
                     <i class="bi bi-sun"></i>
                   </div>
                   <a href="#" class="stretched-link">
                     <h3>INSTALACION DE PANELES SOLARES</h3>
                   </a>
                   <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti
                     recusandae ducimus enim.</p>
                   <a href="#" class="stretched-link"></a>
                 </div>
               </div>
             </div><!-- End Service Item -->
 
           </div>
 
         </div>
       </section><!-- End Services Section -->
 
 
 
       <!-- ======= Pricing Section ======= -->
       <section id="pricing" class="pricing">
         <div class="container" data-aos="fade-up">
 
           <div class="section-header">
             <span class="h2 gradient-text">Conéctate al Futuro con VirtualRed: Descubre Nuestros Planes de Internet y TV</span>
            
           </div>
           <div class="row gy-4">
 
             <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
               <div class="pricing-item">
 
                 <div class="pricing-header">
                   <h3>Internet Fibra Optica</h3>
                   <h4><sup>$</sup>35.000<span> </span></h4>
                 </div>
 
                 <ul>
                   <li><i class="bi bi-dot"></i> <span>Sin Contratos a Largo Plazo</span></li>
                   <li><i class="bi bi-dot"></i> <span>Sin Cargos Ocultos</span></li>
                   <li><i class="bi bi-dot"></i> <span>Internet de Fibra Óptica Ultra Veloz</span></li>
                   <!-- <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                   <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li> -->
                   <li><i class="bi bi-dot"></i> <span>Instalación Rápida y Sencilla</span></li>
                   <li><i class="bi bi-dot"></i> <span>Soporte Técnico Especializado</span></li>
                 </ul>
 
                 <div class="text-center mt-auto">
                   <a href="#" class="buy-btn">Compra ya!</a>
                 </div>
 
               </div>
             </div><!-- End Pricing Item -->
 
             <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
               <div class="pricing-item featured">
 
                 <div class="pricing-header">
                   <h3>Internet Y Televisión</h3>
                   <h4><sup>$</sup>50.000<span> </span></h4>
                 </div>
 
                 <ul>
                   <li><i class="bi bi-dot"></i> <span>Sin Contratos a Largo Plazo</span></li>
                   <li><i class="bi bi-dot"></i> <span>Sin Cargos Ocultos</span></li>
                   <li><i class="bi bi-dot"></i> <span>Conectividad de Alta Velocidad</span></li>
                   <li><i class="bi bi-dot"></i> <span></span>Capacidad para Múltiples Dispositivos</li>
                   <li><i class="bi bi-dot"></i> <span>Variedad de Canales en Alta Definición HD</span></li>
 
                 </ul>
 
                 <div class="text-center mt-auto">
                   <a href="#" class="buy-btn">Compra ya!</a>
                 </div>
 
               </div>
             </div><!-- End Pricing Item -->
 
             <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
               <div class="pricing-item">
 
                 <div class="pricing-header">
                   <h3>Internet Inalámbrico </h3>
                   <h4><sup>$</sup>35.00<span> </span></h4>
                 </div>
 
                 <ul>
                   <li><i class="bi bi-dot"></i> <span> Sin Contratos a Largo Plazo</span></li>
                   <li><i class="bi bi-dot"></i> <span>Sin Cargos Ocultos</span></li>
                   <li><i class="bi bi-dot"></i> <span> Streaming y Juegos sin Interrupciones</span></li>
                   <li><i class="bi bi-dot"></i> <span>Soporte Técnico Dedicado</span></li>
                   <li><i class="bi bi-dot"></i> <span>Planes Personalizables</span></li>
                 </ul>
 
                 <div class="text-center mt-auto">
                   <a href="#" class="buy-btn">Compra ya!</a>
                 </div>
 
               </div>
             </div><!-- End Pricing Item -->
 
           </div>
 
         </div>
       </section>
 
     </div>

      <!-- ======= Clients Section ======= -->
   
     <section id="clients" class="clients pb-4">
       <div class="container" data-aos="zoom-out">
 
         <div class="clients-slider swiper">
           <div class="section-header">
             <span class="h2 gradient-text">Nuestros exitosos aliados tecnológicos</span>
           </div>
           
           <div class="swiper-wrapper align-items-center">
             <div class="swiper-slide"><img src="assets/img/clients/mimosa.jpg" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/ubiquiti.png" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/tenda.png" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/mercusis.png" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/huawei1.png" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/macrotics.png" class="img-fluid" alt=""></div>
             <div class="swiper-slide"><img src="assets/img/clients/data.png" class="img-fluid" alt=""></div>
 
           </div>
         </div>
 
       </div>
     </section>
 
     <!-- ======= About Section ======= -->
     <section id="about" class="about pt-0">
       <div class="container" data-aos="fade-up">
 
         <div class="section-header ">
           <span class = 'h2 gradient-text'>¿Quién es VirtuaRed?</span>
 
           <p class="custom-font-size">Empresa Caucana, legalmente constituida y con una trayectoria de más de 4 años en el sector de las
             telecomunicaciones. Nuestra dedicación se centra en reducir la brecha digital presente en los sectores más
             vulnerables, brindando soluciones de conectividad. Ofrecemos servicios de Internet por Fibra y Radio Enlace
             para garantizar conexiones rápidas y confiables.</p>
         </div>
 
         <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
 
           <div class="col-lg-5">
             <div class="about-img">
               <img src="../img/Virtual.jpg" class="img-fluid" alt="">
             </div>
           </div>
 
           <div class="col-lg-7">
             <span class="pt-0 pt-lg-5  h2 gradient-text">Nuestra misión, visión y valores</span>
 
             <!-- Tabs -->
             <ul class="nav nav-pills mb-3">
               <li><a class="nav-link active" data-bs-toggle="pill" href="#tab1">Mision</a></li>
               <li><a class="nav-link" data-bs-toggle="pill" href="#tab2">Vision</a></li>
               <li><a class="nav-link" data-bs-toggle="pill" href="#tab3">Valores</a></li>
             </ul><!-- End Tabs -->
 
             <!-- Tab Content -->
             <div class="tab-content">
 
               <div class="tab-pane fade show active" id="tab1">
 
                 <p class="fst-italic">En Virtual Red, como empresa líder en servicios de telecomunicaciones, nos
                   enorgullece nuestra misión empresarial, centrada en</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Interconectar las Regiones Más Apartadas: </h4>
                 </div>
                 <p>Nos comprometemos a superar las barreras geográficas y conectar las regiones más remotas de los
                   departamentos que abarcamos. Creemos en la importancia de eliminar la brecha digital y proporcionar
                   acceso igualitario a las oportunidades que ofrece la conectividad..</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Garantizar Alta Disponibilidad: </h4>
                 </div>
                 <p>Nos esforzamos por garantizar una alta disponibilidad del servicio mediante la implementación de
                   tecnología de punta. Estamos comprometidos con la inversión continua en infraestructura y la adopción de
                   soluciones avanzadas para ofrecer a nuestros clientes conexiones confiables y de calidad.</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Prestar Servicios Esenciales:</h4>
                 </div>
                 <p>Nos dedicamos a proporcionar servicios de telecomunicaciones básicos a hogares y empresas en nuestra
                   región. Nuestra meta es mejorar la calidad de vida de las comunidades al facilitar la comunicación y el
                   acceso a la información esencial para el desarrollo personal y empresarial.</p>
 
               </div><!-- End Tab 1 Content -->
 
               <div class="tab-pane fade show" id="tab2">
 
                 <p class="fst-italic">En Virtual Red, nos visualizamos como líderes indiscutibles en el ámbito de las
                   telecomunicaciones, guiados por una visión clara y ambiciosa que abarca.</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Liderazgo Tecnológico:</h4>
                 </div>
                 <p>Buscamos ser pioneros en la implementación de tecnologías de vanguardia que permitan a nuestros
                   clientes disfrutar de experiencias de conectividad más avanzadas.</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Excelencia en la Experiencia del Cliente:</h4>
                 </div>
                 <p>Nos comprometemos a proporcionar una experiencia del cliente excepcional en cada interacción. Nos
                   visualizamos como la elección preferida de los clientes, reconocidos por nuestro servicio personalizado,
                   confiable y orientado a sus necesidades.</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Liderazgo Tecnológico: </h4>
                 </div>
                 <p>Buscamos ser pioneros en la implementación de tecnologías de vanguardia que permitan a nuestros
                   clientes disfrutar de experiencias de conectividad más avanzadas. Nos esforzamos por ser líderes en la
                   adopción de soluciones innovadoras que transformen la forma en que las comunidades se conectan y
                   comunican.</p>
 
               </div><!-- End Tab 2 Content -->
 
               <div class="tab-pane fade show" id="tab3">
 
                 <p class="fst-italic">En Virtual Red, nuestros valores son la base de nuestra cultura y guían cada acción
                   que tomamos. Nos enorgullece abrazar y promover los siguientes principios:</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Innovación Constante:</h4>
                 </div>
                 <p>Nos comprometemos a ser líderes en innovación. Buscamos constantemente nuevas formas de mejorar y
                   transformar la experiencia de conectividad para nuestros clientes</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Excelencia en el Servicio al Cliente:</h4>
                 </div>
                 <p>Valoramos la excelencia en el servicio al cliente. Nos esforzamos por comprender las necesidades
                   individuales de cada cliente y superar sus expectativas con un servicio personalizado, amable y
                   eficiente.</p>
 
                 <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check2"></i>
                   <h4>Transparencia y Honestidad: </h4>
                 </div>
                 <p> Practicamos la transparencia y la honestidad en todas nuestras interacciones. Creemos que la confianza
                   es fundamental en las relaciones comerciales y nos esforzamos por construir relaciones sólidas basadas
                   en la transparencia y la integridad.</p>
 
               </div><!-- End Tab 3 Content -->
 
             </div>
 
           </div>
 
         </div>
 
       </div>
     </section><!-- End About Section -->
 
     <!-- ======= Features Section ======= -->
     
 
 
 
 
     
     <!-- ======= F.A.Q Section ======= -->
     <section id="faq" class="faq">
       <div class="container-fluid" data-aos="fade-up">
 
         <div class="row gy-4">
 
           <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
 
             <div class="content px-xl-5">
               <span class="h2 gradient-text">Entiende por qué <strong> Virtual Red es tu
                   mejor opción.</strong></span>
             </div>
 
             <div class="accordion accordion-flush px-xl-5" id="faqlist">
 
               <div class="accordion-item" data-aos="fade-up" data-aos-delay="200">
                 <h3 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faq-content-1">
                     <i class="bi bi-question-circle question-icon"></i>
                     Conexión Ultrarrápida con Internet por Fibra:
                   </button>
                 </h3>
                 <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                   <div class="accordion-body">
                     Experimenta la velocidad en su máxima expresión con nuestra conexión de Internet por fibra. Desde descargas rápidas hasta transmisiones sin interrupciones, te ofrecemos una conexión que acompaña tu ritmo de vida digital.
                   </div>
                 </div>
               </div><!-- # Faq item-->
 
               <div class="accordion-item" data-aos="fade-up" data-aos-delay="300">
                 <h3 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faq-content-2">
                     <i class="bi bi-question-circle question-icon"></i>
                     TV en Alta Definición para una Experiencia Visual Inigualable:
                   </button>
                 </h3>
                 <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                   <div class="accordion-body">
                     Sumérgete en el mundo de la alta definición con nuestra oferta de TV en HD. Colores vibrantes y detalles nítidos transforman cada momento en una experiencia cinematográfica desde la comodidad de tu hogar.
                   </div>
                 </div>
               </div><!-- # Faq item-->
 
               <div class="accordion-item" data-aos="fade-up" data-aos-delay="400">
                 <h3 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faq-content-3">
                     <i class="bi bi-question-circle question-icon"></i>
                     Conéctate en Cualquier Rincón con Internet Rural:
                   </button>
                 </h3>
                 <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                   <div class="accordion-body">
                     Para aquellos que residen en zonas rurales, Virtual Red ofrece soluciones de Internet Rural confiables. No permitas que tu ubicación limite tu conectividad. Explora el mundo digital con la misma velocidad y confiabilidad, independientemente de dónde estés.
                   </div>
                 </div>
               </div><!-- # Faq item-->
 
               <div class="accordion-item" data-aos="fade-up" data-aos-delay="500">
                 <h3 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faq-content-4">
                     <i class="bi bi-question-circle question-icon"></i>
                     Atención al Cliente Personalizada:
                   </button>
                 </h3>
                 <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                   <div class="accordion-body">
                     <i class="bi bi-question-circle question-icon"></i>
                     En Virtual Red, no solo somos proveedores de servicios; somos tu equipo de soporte digital. Nuestro equipo de atención al cliente está disponible para ayudarte en cada paso del camino. La atención personalizada es nuestra promesa.
                   </div>
                 </div>
               </div><!-- # Faq item-->
 
               <div class="accordion-item" data-aos="fade-up" data-aos-delay="600">
                 <h3 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faq-content-5">
                     <i class="bi bi-question-circle question-icon"></i>
                     En Virtual Red, creemos en ofrecerte lo mejor sin ataduras. 
                   </button>
                 </h3>
                 <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                   <div class="accordion-body">
                     En Virtual Red, creemos que la libertad digital es esencial. Queremos que disfrutes de la mejor experiencia sin sentirte atado por contratos restrictivos. 
                   </div>
                 </div>
               </div><!-- # Faq item-->
 
             </div>
 
           </div>
 
           <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
             style='background-image: url("assets/img/wifi.png");'>&nbsp;</div>
         </div>
 
       </div>
     </section><!-- End F.A.Q Section -->
 
     <!-- ======= Testimonials Section ======= -->
     <section id="testimonials" class="testimonials">
       <div class="container" data-aos="fade-up">
 
         <div class="testimonials-slider swiper">
           <div class="swiper-wrapper">
 
             <div class="swiper-slide">
               <div class="testimonial-item">
                 <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                 <h3>ferney Ortiz</h3>
                 <h4></h4>
                 <div class="stars">
                   <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                     class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                 <p>
                   <i class="bi bi-quote quote-icon-left"></i>
                   Lo que realmente destaca de Virtual Red es su atención al cliente. En un par de ocasiones en las que tuve consultas, el equipo de soporte fue increíblemente útil y rápido para resolver cualquier problema. Saber que puedo contar con un excelente servicio al cliente hace que mi elección de Virtual Red valga la pena.
                   <i class="bi bi-quote quote-icon-right"></i>
                 </p>
               </div>
             </div><!-- End testimonial item -->
 
             <div class="swiper-slide">
               <div class="testimonial-item">
                 <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                 <h3>Sara Wilsson</h3>
                 <h4></h4>
                 <div class="stars">
                   <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                     class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                 <p>
                   <i class="bi bi-quote quote-icon-left"></i>
                   Como profesional que trabaja desde casa, la calidad de mi conexión a Internet es crucial. Virtual Red no solo ofrece velocidades consistentes, sino también un soporte técnico excepcional. 
                   <i class="bi bi-quote quote-icon-right"></i>
                 </p>
               </div>
             </div><!-- End testimonial item -->
 
             <div class="swiper-slide">
               <div class="testimonial-item">
                 <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                 <h3>Jena Karlis</h3>
                 <h4></h4>
                 <div class="stars">
                   <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                     class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                 <p>
                   <i class="bi bi-quote quote-icon-left"></i>
                   Virtual Red ha elevado mis expectativas en cuanto a servicios de Internet. La velocidad es impresionante, y la conexión es increíblemente confiable.
                   <i class="bi bi-quote quote-icon-right"></i>
                 </p>
               </div>
             </div><!-- End testimonial item -->
 
             <div class="swiper-slide">
               <div class="testimonial-item">
                 <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                 <h3>Matt Brandon</h3>
                 <h4></h4>
                 <div class="stars">
                   <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                     class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                 <p>
                   <i class="bi bi-quote quote-icon-left"></i>
                   Vivo en una zona rural y estaba cansado de lidiar con conexiones lentas. Desde que me cambié a Virtual Red, la diferencia ha sido asombrosa. La velocidad de Internet rural que ofrecen es excepcional.
                   <i class="bi bi-quote quote-icon-right"></i>
                 </p>
               </div>
             </div><!-- End testimonial item -->
 
             <div class="swiper-slide">
               <div class="testimonial-item">
                 <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                 <h3>John Larson</h3>
                 
                 <div class="stars">
                   <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                     class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                 <p>
                   <i class="bi bi-quote quote-icon-left"></i>
                   Mi familia y yo somos ávidos consumidores de contenido en línea, y Virtual Red ha hecho que nuestras sesiones de streaming sean completamente sin complicaciones. La velocidad de carga es rápida, la calidad de video es excelente, y nunca nos preocupamos por los búferes. ¡Increíble servicio!
                   <i class="bi bi-quote quote-icon-right"></i>
                 </p>
               </div>
             </div><!-- End testimonial item -->
 
           </div>
           <div class="swiper-pagination"></div>
         </div>
 
       </div>
     </section><!-- End Testimonials Section -->
 
 
     <!-- ======= Contact Section ======= -->
     <section id="contact" class="contact">
       <div class="container">
 
         <div class="section-header">
           <span class="h2 gradient-text">Contacto</span>
 
         </div>
 
       </div>
 
 
 
       <div class="container">
 
         <div class="row gy-5 gx-lg-5">
 
           <div class="col-lg-4">
 
             <div class="info">
               
 
               <div class="info-item d-flex">
                 <i class="bi bi-geo-alt flex-shrink-0"></i>
                 <div>
                   <h4>Ubicación:</h4>
                   <p>carr 7 #  9-56 centro</p>
                 </div>
               </div><!-- End Info Item -->
 
               <div class="info-item d-flex">
                 <i class="bi bi-envelope flex-shrink-0"></i>
                 <div>
                   <h4>Email:</h4>
                   <p>virtualredtv@gmail.com</p>
                 </div>
               </div><!-- End Info Item -->
 
               <div class="info-item d-flex">
                 <i class="bi bi-phone flex-shrink-0"></i>
                 <div>
                   <h4>Telefono:</h4>
                   <p>+57 3008472620</p>
                 </div>
               </div><!-- End Info Item -->
 
             </div>
 
           </div>
 
           <div class="col-lg-8">
             <form action="forms/contact.php" method="post" role="form" class="php-email-form">
               <div class="row">
                 <div class="col-md-6 form-group">
                   <input type="text" name="name" class="form-control" id="name" placeholder="Nombres" required>
                 </div>
                 <div class="col-md-6 form-group mt-3 mt-md-0">
                   <input type="email" class="form-control" name="email" id="email" placeholder="Correo" required>
                 </div>
               </div>
               <div class="form-group mt-3">
                 <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
               </div>
               <div class="form-group mt-3">
                 <textarea class="form-control" name="message" placeholder="Mensaje" required></textarea>
               </div>
               <div class="my-3">
                 <div class="loading">Loading</div>
                 <div class="error-message"></div>
                 <div class="sent-message">Your message has been sent. Thank you!</div>
               </div>
               <div class="text-center"><button type="submit">Enviar Mensaje</button></div>
             </form>
           </div><!-- End Contact Form -->
 
         </div>
 
       </div>
     </section><!-- End Contact Section aqui va ese main -->
 
 
 
     <!-- ======= Footer ======= -->
     <footer id="footer" class="footer">
 
       <div class="footer-content">
         <div class="container">
           <div class="row">
 
             <div class="col-lg-3 col-md-6">
               <div class="footer-info">
 
                 <h3>VIRTUALRED</h3>
                 <p>
                   
                   <strong>Ubicación: </strong> carr 7 #  9-56 centro<br>
                   <strong>Telefono:</strong> +57 3008472620<br>
                   <strong>Correo:</strong> virtualredtv@gmail.com<br>
                 </p>
               </div>
             </div>
 
             <div class="col-lg-2 col-md-6 footer-links">
               <h4>Enlaces útiles</h4>
               <ul>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Inicio</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Nosotros</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Servicios</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Planes</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Contacto</a></li>
               </ul>
             </div>
 
             <div class="col-lg-3 col-md-6 footer-links">
               <h4>Nuestros servicios</h4>
               <ul>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Internet Fibra</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Internet Rural</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Internet y tv</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Instalación de Camaras de Seguridad</a></li>
                 <li><i class="bi bi-chevron-right"></i> <a href="#">Instalación de Camaras de Paneles Solares</a></li>
               </ul>
             </div>
 
             <div class="col-lg-4 col-md-6 footer-newsletter">
               <h4>Nuestro Boletínr</h4>
               <p>Recibe las últimas actualizaciones, ofertas exclusivas y noticias emocionantes directamente en tu bandeja de entrada.</p>
               <form action="" method="post">
                 <input type="email" name="email"><input type="submit" value="Subscribir">
               </form>
 
             </div>
 
           </div>
         </div>
       </div>
 
       <div class="footer-legal text-center">
         <div
           class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
 
           <div class="d-flex flex-column align-items-center align-items-lg-start">
             <div class="copyright">
               &copy; Copyright <strong><span>VirtualRed</span></strong>. 2024
             </div>
             <div class="credits">
               Diseño de <a href="https://../">VirtualRed - Unired</a>
             </div>
           </div>
 
           <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
             <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
             <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
             <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
 
           </div>
 
         </div>
 
       </div>
 
 
 
     </footer><!-- End Footer -->
 
 
     <div>
       <a href="https://www.bancolombia.com/personas" class="pse-button   vibrating-icon">
         <img src="../assets/img/pse-logo.png" alt="Botón PSE" style="width: 200px; height: auto;">
       </a>
 
 
       <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
           class="bi bi-arrow-up-short"></i></a>
 
       <a href="https://api.whatsapp.com/send?phone=3008472620" target="_blank"
       class="whatsapp-link d-flex align-items-center justify-content-center">
       <i class="bi bi-whatsapp  vibrating-icon"></i>
     </a>
   </div>
  </div>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'




export default {
  setup(){
     const router = useRouter()
     const {username ,logout} = useAuth()

     const onLogout = async () => {
      const confirmLogout = await Swal.fire({
        title: '¿Estás seguro de salir?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar',
      })

      if (confirmLogout.isConfirmed) {
        // Si el usuario confirma, realizar el logout
        router.push({ name: 'home' })
        logout()
      }
    }
    
     return{
       username,
       onLogout
     }
  }
}
</script>




<style scoped>

@import '../css/header.css';

@import '/public/assets/css/main.css';
@import '/public/assets/vendor/bootstrap-icons/bootstrap-icons.min.css';

@import '/public/assets/vendor/aos/aos.css';
@import '/public/assets/vendor/glightbox/css/glightbox.min.css';
@import '/public/assets/vendor/swiper/swiper-bundle.min.css';

@import '/public/assets/css/variables.css';
</style>
