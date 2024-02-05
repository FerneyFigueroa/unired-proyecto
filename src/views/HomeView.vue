<template>
 
   <div class=" home">
      <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top  " data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        
        <!-- <h1>HeroBiz<span>.</span></h1> -->
      </a>
      
        <img v-if="username"  src="../images/logo.png" alt="" style="width: 90px; image-rendering: auto;"  >
      
      <span v-if="username" class="ps-5 colores">
        <h5>{{ username }}</h5>
        </span>
      <img   v-if="!username" src="../images/Virtual.png" alt="" style="width: 200px; image-rendering: auto;"  >
      
     
      <nav id="navbar" class="navbar">
        <ul>

          

          <li><a class="" href="#">Inicio</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">Nosotros</a></li>
          <li><a class="nav-link scrollto" href="index.html#services">Servicios</a></li>
          <li><a class="nav-link scrollto" href="index.html#pricing">Planes</a></li>
          <li><a class="" href="https://wisphub.app/solicitar-instalacion/virtualred/" target="_blank">Solicitar-Instalación</a></li>
          <li><a class="" href="https://clientes.portalinternet.app/saldo/virtualred/" target="_blank">Consultar-Saldo</a></li>
         
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none "></i>

        
          
      </nav><!-- .navbar -->

      <router-link  v-if="!username"  :to="{ name: 'login' }" class="btn-getstarted scrollto me-5 be-5 rounded-5" href="index.html#t" > Ingresar</router-link>


      <button type="button" v-if="username" class="btn btn-danger me-5 ms-5 "
        @click="onLogout">
        <i class="bi bi-box-arrow-left  "></i> Salir
         </button>
    </div>
  </header><!-- End Header -->



  


  <div v-if="!username"  id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="../images/BANNER-TV-E-INTERNET.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <!-- <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../images/BANNER-TV-ALTA-CALIDAD.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <!-- <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> -->
      </div>
    </div>
    <div class="carousel-item">
      <img src="../images/BANNER-DE-SERVICIO.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <!-- <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> -->
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






<section v-if="username" id="hero-animated" class="hero-animated d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <img src="../assets/images/Virtual.png" class="img-fluid animated">
      <h2>Bienvenido <span> </span></h2>
      <p>En este espacio digital, encontrarás todo lo relacionado con tus servicios. Desde solicitar instalaciones y descargar facturas hasta gestionar traslados y verificar la velocidad de tu conexión. Además, podrás realizar solicitudes de mantenimiento y gestionar la cancelación de servicios. Estamos aquí para hacer tu experiencia con nosotros más fácil y conveniente. ¡Explora y aprovecha al máximo todos nuestros servicios!.</p>
      
    </div>
  </section>
 

  <main id="main">

    <section v-if="username"  id="featured-services" class="featured-services">
  <div class="container">


    
    <div class="row gy-4 justify-content-center "> <!-- Alinea las tarjetas al centro -->

      <div class="col-xl-3 col-md-6 d-flex pb-5 "  data-aos="zoom-out">
        <div class="card h-100 border shadow  hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/solisi.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Solicitud de Instalación</h5>
            <p class="card-text">Realiza tu solicitud de servicios  de internet y televición aquí pregunta por la promo.</p>
            <a href="https://wa.me/573008472620" class="btn btn-primary stretched-link" target="_blank">Solicitar</a>
          </div>
        </div>
      </div><!-- End Card Item -->

      <!-- Repite la estructura para las demás tarjetas -->

      
      <div class="col-xl-3 col-md-6 d-flex pb-5" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/soli.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Facturación</h5>
            <p class="card-text">Aquí puedes encontrar la factura de tus servicios de internet y televición.</p>
            <a href="https://clientes.portalinternet.app/saldo/virtualred/" class="btn btn-primary stretched-link" target="_blank">Descargar</a>
          </div>
        </div>
      </div><!-- End Card Item -->


      
      <div class="col-xl-3 col-md-6 d-flex pb-5" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/test1.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Prueba de velocidad</h5>
            <p class="card-text">Haz un test de velocidad con nosotros y descubre la potencia de tu conexión a internet.</p>
            <a href="https://www.speedtest.net/" class="btn btn-primary stretched-link">Realizar</a>
          </div>
        </div>
      </div><!-- End Card Item -->


      
      <div class="col-xl-3 col-md-6 d-flex pb-5" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/traslado.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Traslados</h5>
            <p class="card-text"> Solicita el traslado de tus servicios de Internet y disfruta de tu conexión en tu hogar. </p>
            <a href="https://wa.me/573008472620" class="btn btn-primary stretched-link" target="_blank">Solicitar</a>
          </div>
        </div>
      </div><!-- End Card Item -->


      
      <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/soporte1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Cuidamos de tu conexión</h5>
            <p class="card-text"> Si notas alguna anomalía en tu servicio de Internet o TV, no te preocupes. Estamos aquí para resolverlo rápidamente.</p>
            <a href="https://wa.me/573008472620" class="btn btn-primary stretched-link" target="_blank">Solicitar</a>
          </div>
        </div>
      </div><!-- End Card Item -->

      
      <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/clave.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Cambia tu clave de wifi</h5>
            <p class="card-text">Con nosotros puedes cambiar la clave de tu internet cuando quieras. 
             ¡Tu seguridad es nuestra prioridad!</p>
            <a href="https://wa.me/573008472620"  class="btn btn-primary stretched-link" target="_blank">Solicitar </a>
          </div>
        </div>
      </div><!-- End Card Item -->

      
      <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/stri.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Streaming</h5>
            <p class="card-text">Regístrate ahora y obtén 10% de descuento en tu primer mes. ¡No te pierdas la oportunidad de sumergirte en el mejor entretenimiento!</p>
            <a href="https://wa.me/573008472620"  class="btn btn-primary stretched-link" target="_blank">Solicitar</a>
          </div>
        </div>
      </div>
      <!-- End Card Item -->


      
      <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
        <div class="card h-100 border shadow hover-transition"> <!-- Agrega clases para bordes y sombras -->
          <img src="../../src/img/cancelar.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Cancelación de Servicio</h5>
            <p class="card-text">Queremos informarte sobre el proceso para cancelar tu servicio de internet en caso de que así lo desees.</p>
            <a href="https://wa.me/573008472620" class="btn btn-primary stretched-link" target="_blank">Solicitar</a>
          </div>
        </div>
      </div><!-- End Card Item -->

    </div>
  </div>
</section>



    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up" >


    

        <div class="section-header">
          <h2>Nuestros servicios de Internet y TV de alta calidad</h2>
        </div>

        <div class="row gy-5" >
          

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!">
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-1.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative  shadow">
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank" >
                  <h3>Fibra Optica</h3>
                </a>
                <p>Ofrecemos más que Internet, ofrecemos una experiencia. Navega con confianza y velocidad con nuestro servicio de fibra óptica</p>
              </div>
            </div>
          </div><!-- End Service Item -->


          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!" >
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-2.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative shadow">
                <div class="icon">
                  <i class="bi bi-broadcast"></i>
                </div>
                <a href="https://wa.me/573008472620" class="stretched-link" target="_blank">
                  <h3>Internet Rural</h3>
                </a>
                <p> Extendemos nuestra cobertura a las áreas más remotas. Con nuestro servicio de Internet Rural, garantizamos una cobertura total</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!">
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-3.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative shadow">
                <div class="icon">
                  <i class="bi bi-easel"></i>
                </div>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank">
                  <h3>Internet y Tv</h3>
                </a>
                <p>Descubre la potencia de la fibra óptica junto con una amplia selección de canales. ¡El combo perfecto para tu familia!</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!">
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-4.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative shadow">
                <div class="icon">
                  <i class="bi bi-bounding-box-circles"></i>
                </div>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank">
                  <h3>Televisión por IP</h3>
                </a>
                <p> Explora una nueva dimensión de entretenimiento con nuestra Televisión por IP, lleva contigo tus programas favoritos. </p>
                <a href="https://wa.me/573008472620"  class="stretched-link"></a>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!">
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-5.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative shadow">
                <div class="icon">
                  <i class="bi bi-calendar4-week"></i>
                </div>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank">
                  <h3>Paneles Solares</h3>
                </a>
                <p> Instalación de paneles para un hogar autosuficiente y comprometido con el medio ambiente.Haz tu hogar ecoamigable con paneles solares.</p>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank"></a>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700" data-bs-toggle="tooltip" data-bs-placement="top" title="Contrata ya!">
            <div class="service-item">
              <div class="img">
                <img src="../../public/assets/img/services-6.jpg" class="img-fluid" alt="">
              </div>
              <div class="details position-relative shadow">
                <div class="icon">
                  <i class="bi bi-chat-square-text"></i>
                </div>
                <a href="https://wa.me/573008472620"  class="stretched-link" target="_blank">
                  <h3>Vigilancia 24/7</h3>
                </a>
                <p>
Protege tu hogar o empresa con nuestras cámaras de seguridad. Obtén tranquilidad con una vigilancia constante y sin complicaciones.</p>
                <a href="https://wa.me/573008472620" class="stretched-link" target="_blank"></a>
              </div>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>
    </section><!-- End Services Section -->

     <!-- ======= Pricing Section ======= -->

    <section id="pricing" class="pricing">
      <div class="container " data-aos="fade-up">

        <div class="section-header">
          <h2> Planes de Internet y TV de VirtualRed.</h2>
      
        </div>

        <div class="row gy-4">

          <div class="col-lg-4 " data-aos="zoom-in" data-aos-delay="200">
            <div class="pricing-item shadow">

              <div class="pricing-header">
                <h3>Internet Fibra Optica</h3>
                <h4><sup>$</sup>35.000<span></span></h4>
              </div>

              <ul>
                <li class="na"><i class="bi bi-x"></i> <span>Sin Contratos a Largo Plazo</span></li>
                <li class="na"><i class="bi bi-x"></i> <span>Sin Cargos Ocultos</span></li>
                <li><i class="bi bi-dot"></i> <span>Conectividad de Alta Velocidad</span></li>
                <li><i class="bi bi-dot"></i> <span>Capacidad para Múltiples Dispositivos</span></li>
                <li><i class="bi bi-dot"></i> <span>Conexión Estable</span></li>
                
              </ul>

              <div class="text-center mt-auto">
                <a href="https://wa.me/573008472620"  class="buy-btn" target="_blank">Contrata ya!</a>
              </div>

            </div>
          </div><!-- End Pricing Item -->

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="pricing-item featured shadow ">

              <div class="pricing-header">
                <h3>Internet Inalámbrico</h3>
                <h4><sup>$</sup>35.000<span></span></h4>
              </div>

              <ul>
                <li class="na"><i class="bi bi-x"></i> <span>Sin Contratos a Largo Plazo</span></li>
                <li class="na"><i class="bi bi-x"></i> <span>Sin Cargos Ocultos</span></li>
                <li><i class="bi bi-dot"></i> <span>Planes Personalizables</span></li>
                <li><i class="bi bi-dot"></i> <span>Soporte Técnico Dedicado</span></li>
                <li><i class="bi bi-dot"></i> <span>Conexión Estable</span></li>
              </ul> 

              <div class="text-center mt-auto">
                <a href="https://wa.me/573008472620"  class="buy-btn" target="_blank">Contrata ya!</a>
              </div>

            </div>
          </div><!-- End Pricing Item -->

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
            <div class="pricing-item shadow ">

              <div class="pricing-header">
                <h3>Internet Y Televisión</h3>
                <h4><sup>$</sup>50.000<span></span></h4>
              </div>

              <ul>

                <li class="na"><i class="bi bi-x"></i> <span>Sin Contratos a Largo Plazo</span></li>
                <li class="na"><i class="bi bi-x"></i> <span>Sin Cargos Ocultos</span></li>
                <li><i class="bi bi-dot"></i> <span>Variedad de Canales en Alta Definición HD</span></li>
                <li><i class="bi bi-dot"></i> <span>Soporte Técnico Dedicado</span></li>
                <li><i class="bi bi-dot"></i> <span>Conexión Estable</span></li>
                
              </ul>

              <div class="text-center mt-auto">
                <a href="https://wa.me/573008472620"  class="buy-btn" target="_blank">Contrata ya!</a>
              </div>

            </div>
          </div><!-- End Pricing Item -->

        </div>

      </div>
    </section><!-- End Pricing Section -->

 <!-- ======= About Section ======= -->
 <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>¿Quién es VirtuaRed?</h2>
          <p>Empresa Caucana, legalmente constituida y con una trayectoria de más de 4 años en el sector de las
             telecomunicaciones. Nuestra dedicación se centra en reducir la brecha digital presente en los sectores más
             vulnerables, brindando soluciones de conectividad. Ofrecemos servicios de Internet por Fibra y Radio Enlace
             para garantizar conexiones rápidas y confiables.</p>
        </div>

        <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-5">
            <div class="about-img">
              <img src="../../public/assets/images/img/logo.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-7">
            <h3 class="pt-0 pt-lg-5">Nuestra misión, visión y valores</h3>

            <!-- Tabs -->
            <ul class="nav nav-pills mb-3">
              <li><a class="nav-link active" data-bs-toggle="pill" href="#tab1">Misión</a></li>
              <li><a class="nav-link" data-bs-toggle="pill" href="#tab2">Visión</a></li>
              <li><a class="nav-link" data-bs-toggle="pill" href="#tab3">Valores</a></li>
            </ul><!-- End Tabs -->

            <!-- Tab Content -->
            <div class="tab-content">

              <div class="tab-pane fade show active" id="tab1">

                <p class="fst-italic">En Virtual Red, como empresa líder en servicios de telecomunicaciones, nos
                   enorgullece nuestra misión empresarial, centrada en:</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Interconectar las Regiones Más Apartadas:</h4>
                </div>
                <p>Nos comprometemos a superar las barreras geográficas y conectar las regiones más remotas de los
                   departamentos que abarcamos. Creemos en la importancia de eliminar la brecha digital y proporcionar
                   acceso igualitario a las oportunidades que ofrece la conectividad.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Garantizar Alta Disponibilidad:</h4>
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
                  <h4>Liderazgo Tecnológico:</h4>
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
                <p>>Nos comprometemos a ser líderes en innovación. Buscamos constantemente nuevas formas de mejorar y
                   transformar la experiencia de conectividad para nuestros clientes.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Excelencia en el Servicio al Cliente:</h4>
                </div>
                <p>Valoramos la excelencia en el servicio al cliente. Nos esforzamos por comprender las necesidades
                   individuales de cada cliente y superar sus expectativas con un servicio personalizado, amable y
                   eficiente</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Transparencia y Honestidad:</h4>
                </div>
                <p>Practicamos la transparencia y la honestidad en todas nuestras interacciones. Creemos que la confianza
                   es fundamental en las relaciones comerciales y nos esforzamos por construir relaciones sólidas basadas
                   en la transparencia y la integridad.</p>

              </div><!-- End Tab 3 Content -->

            </div>

          </div>

        </div>

      </div>
    </section><!-- End About Section -->






<!-- ======= Clients Section ======= -->
      <div class="section-header">
          <h2>Nuestros exitosos aliados tecnológicos! </h2>
   
        </div>

<section id="clients" class="clients">
      <div class="container" data-aos="zoom-out">

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src="../images/data.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="../images/huawei1.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="../images/macrotics.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="../images/mercusis.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="../images/mimosa.jpg" class="img-fluid" alt=""></div>
            <!-- <div class="swiper-slide"><img src="../images/planes.jpg" class="img-fluid" alt=""></div> -->
            <div class="swiper-slide"><img src="../images/tenda.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="../images/ubiquiti.png" class="img-fluid" alt=""></div>
          </div>
        </div>

      </div>
    </section><!-- End Clients Section -->

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
 
           <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img wifi-background"></div>
         </div>
 
       </div>
     </section>
     <!-- End F.A.Q Section -->


    

   
     <div class="section-header">
          <h2>
            Lo que dicen nuestros clientes...</h2>
   
        </div>


      <!-- ======= Testimonials Section ======= -->
      <section id="testimonials" class="testimonials">
        
      <div class="container" data-aos="fade-up">

        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="../../public/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                <h3>Andres Ledezma</h3>
                <h4></h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  "La velocidad y estabilidad del servicio de internet de VirtualRed es impresionante. Desde que cambié a su servicio, he experimentado una conexión rápida y confiable, lo cual ha mejorado significativamente mi experiencia en línea. ¡Totalmente recomendado!"
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="../../public/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                <h3>Sandra Olmos</h3>
                <h4></h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  "La atención al cliente de VirtualRed es excepcional. Siempre están disponibles para resolver cualquier problema y brindan asistencia de manera rápida y eficiente. Me siento respaldado como cliente y eso es algo que valoro enormemente."
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="../../public/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                <h3>Karla Leal</h3>
                <h4></h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  "Hice la prueba de velocidad y los resultados superaron mis expectativas. La conexión es constante, sin interrupciones, y la velocidad de descarga y carga es excelente. VirtualRed ha mejorado mi vida digital, y no puedo pedir más en un servicio de internet."
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="../../public/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                <h3> Brandon Molina</h3>
                <h4></h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  "La instalación del servicio de internet fue rápida y sin complicaciones. El equipo técnico de VirtualRed hizo un trabajo excelente y aseguró que todo funcionara perfectamente. Estoy muy satisfecho con la calidad del servicio que ofrecen."
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="../../public/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                <h3>John Mera</h3>
                <h4></h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  "¡Increíble relación calidad-precio! VirtualRed ofrece planes de internet asequibles con velocidades sorprendentes. Me permite disfrutar de la transmisión de videos, juegos en línea y trabajo remoto sin problemas. Definitivamente, la mejor elección en proveedores de internet."
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->


    
   

    
  </main>
 <!-- ======= Footer ======= -->
<footer id="footer" class="footer">

<div class="footer-content">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6">
        <div class="footer-info">
          <h3>VirtualRed</h3>
          <p>
            Popayán - Cauca <br><br>
            <strong>Teléfono:</strong> 3008472620<br>
            <strong>Email:</strong> virtualred@gmail.com<br>
          </p>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Enlaces Útiles</h4>
        <ul>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Inicio</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Acerca de nosotros</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Servicios</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Términos de servicio</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Política de privacidad</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Nuestros Servicios</h4>
        <ul>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Diseño Web</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Desarrollo Web</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Gestión de Productos</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Diseño Gráfico</a></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Nuestro Boletín</h4>
        <p>Recibe las últimas noticias y actualizaciones de VirtualRed suscribiéndote a nuestro boletín.</p>
        <form action="" method="">
          <input type="email" name="email" placeholder="Tu correo electrónico"><input type="submit" value="Suscribirse">
        </form>
      </div>

    </div>
  </div>
</div>
</footer>
    
    <a href="https://wa.me/573008472620" target="_blank" class="pse-button   vibrating-icon">
         <img src="../assets/img/pse-logo.png" alt="Botón PSE" style="width: 200px; height: auto;">
       </a>
 
 
       <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
           class="bi bi-arrow-up-short"></i></a>
 
       <a href="https://wa.me/573008472620" target="_blank"
       class="whatsapp-link d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
       <i class="bi bi-whatsapp  vibrating-icon"></i>
      </a>

      <div id="preloader">

      </div>
   </div>
 
     
      
    
   

</template>


<script>


import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

import { onMounted, onBeforeUnmount } from 'vue';


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
    };
    const handleScroll = () => {
      const header = document.getElementById('header');

      if (window.scrollY > 50) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    };

    // Registrar el evento de scroll al montar el componente
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // Eliminar el evento de scroll al destruir el componente
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
     return{
       username,
       onLogout
     }
  }
}
</script>




<style scoped>
.fixed {
  background-color: #fff; /* Puedes ajustar el color de fondo según tus necesidades */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Añadir una sombra sutil */
}
@import '../css/header.css';

 
 /* @import '/public/assets/vendor/bootstrap-icons/bootstrap-icons.min.css'; */

/* @import '/public/assets/vendor/aos/aos.css';
@import '/public/assets/vendor/glightbox/css/glightbox.min.css';
@import '/public/assets/vendor/swiper/swiper-bundle.min.css';

@import '/public/assets/css/variables.css'; */

</style>
