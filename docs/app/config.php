<?php

$jsonStr = json_encode(array(
  'langs' => array('es'),
  'currentVersion' => 'v0.0.1-beta',
  'es' => array(
    'by' => 'por',
    '_createdAndMantainedInBy' => 'Creado y mantenido en <a href="http://sirideas.com">Sir Ideas, C.A.</a> por <a href="http://twitter.com/arondn2">@arondn2</a>',
    '_templateByBootstrap' => 'Plantilla basada en <a target="_blank" href="http://getbootstrap.com">Bootstrap</a>.',
    '_licensedCodeOn' => 'Código licensiado bajo <a target="_blank" href="https://github.com/SirIdeas/sir.mobile.emulator/LICENSE">MIT</a>, documentado bajo <a target="_blank" href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.',
    'forkMeOnGitHub' => 'Fork me on GitHub',
    'gitHub' => 'GitHub',
    'es' => 'Español',
    'currentVersion' => 'Versión actual',

    'home' => 'Inicio',
    '_home' => 'Emulador visual de los dispositivos móviles mas utilizados en la actualidad para probar y presentar aplicaciones HTML5',

    'features' => array(
      array(
        'name' => 'Fácil de configurar',
        'image' => '',
        'description' => 'Descarga, agrega, inicia y observa como luce tu aplicación HTML5 en diferentes dispositivos móviles y en diferentes direcciones.',
        'to' => './#basic-config',
        'buttonText' => 'Ir a sección >>'
      ),
      array(
        'name' => 'Dispositivos personalizados',
        'image' => '',
        'description' => 'Si no encuentras el dispositivo móvil que buscas puedes agregar un dispositivo personalizado, e inclusive modificar los existentes.',
        'to' => 'docs.html',
        'buttonText' => 'Ir a sección >>'
      ),
      array(
        'name' => 'Diversidad de dispositivos',
        'image' => '',
        'description' => 'Puedes probar o presentar un aplicación en los diferentes dispositivos móviles e mayor uso en la actualidad.',
        'to' => 'docs.html',
        'buttonText' => 'Ir a sección >>'
      )
    ),

    'bigFeatures' => array(
      array(
        'question' => '¿Quieres hacer tu aplicación responsiva?',
        'answer' => 'Observa como se comporta tu aplicación diferentes pantallas',
        'image' => '',
        'description' => 'Al tuilizar SME podrás observar como luce tu aplicación en las pantallas de los diferentes dispositivos de mayor uso en la actualidad, con la finalidad de hacer de esta responsiva.'
      ),
      array(
        'question' => '¿Quieres mostrar una aplicación sin compilarla?',
        'answer' => 'Muestra tu aplicación a tu cliente de una forma elegante y sin compilarla.',
        'image' => '',
        'description' => 'Podrás realizar presentaciones de tu aplicación antes de compilar nativamente para cada SO, o liberar versiones de pruebas online para navegadores webs.'
      ),
      array(
        'question' => '¿Deseas colaborar con el proyecto?',
        'answer' => 'Contátacnos para contribuyas con nuevas funciones o sugerencias.',
        'image' => '',
        'description' => 'Si quieres colaborar como desarrollador en el proyecto contáctanos para incluirte en el equipo, realizar sugerencias, o reportar bugs.'
      ),
    ),

    'getstarted' => 'Comenzar',
    '_getstarted' => 'Cómo descargar, configurar y comenzar a usar Sir Mobile Emulator en tu aplicación HTML5.',

    'download' => 'Descargar',
    '_download' => 'Existe dos formas de usar Sir Mobile Emulator. Descargando los paquetes comprimidos o incluyendolos desde un CDN.',

    'downloadZip' => 'Descargar comprimido',
    '_downloadZip' => 'Puede descargar los archivos JS, CSS e imágenes utilizadas e un compromido listo para ser usada.',

    'cdnInclude' => 'Incluir desde CDN',
    '_cdnInclude' => 'De igual forma para muestras en la WEB se puede incluir desde sitios CDN.',

    'gitHubClone' => 'Obtener de GitHub',
    '_gitHubClone' => 'Si desea indagar profundamente en el código de Sir Mobile Emulator puede clonar los fuentes desde el GitHub',

    'basicConfig' => 'Configuración básica',
    '_basicConfig' => 'Para la configuración básica de Sir Mobile Emulator se requiere cumplir los siguientes pasos:',
    '_basicConfigSteps' => array(
      'Incluir los estilos.',
      'Incluir Jquery.',
      'Incluir el script de Sìr Mobile Emulator.',
      'Indicar los elementos ser manejados con Sir Mobile Emulator colocando el atributo <code>sme-auto</code>.'
    ),

    'basicTemplate' => 'Plantilla básica',
    '_basicTemplate' => 'Para hacer trabajar rápidamente con Sir Mobile Emulator puede tomar la siguiente plantilla base y modificarla a conveniencia.',

    'docs' => 'Documentación',
    '_docs' => 'Aprenda como configurar la mayoría de las características disponibles en Sir Mobile Emulator.',

    'overview' => 'Información general',
    '_overview' => 'Para hacer uso del Sir Mobile Emulator se requiere primera mente incluir en nuestro proyectos como se indica en la sección de <a href="#/getstarted"><em>Descargar</em></a>',

    'configuration' => 'Configuración',
    '_configuration' => 'Existen dos vías de realizar la configuración: vía atributo, o vía JavaScript',

    'viaAttribute' => 'Vía atributo',
    '_viaAttribute' => 'Para realizar una configuración e esta forma, se debe colocar un atributo <code>sme-auto</code> en el elemento que se desea establecer como pantalla del dispositivo. <code>sme.js</code> se encargará de establecer estos elementos como emuladores en el momento de su carga:',

    'viaJs' => 'Vía JavaScript',
    '_viaJs' => 'Para realizar la configuración por medio de una llamanda JavaScript:',

    'configurationWarning' => 'Emuladores separados',
    '_configurationWarning' => 'Tome en cuenta que se generará una instancia por separado por cada elemento con la etiqueta <code>sme-auto</code>, y por cada incluido en la llamada JavaScript.',

    'params' => 'Parámetros',
    '_params1' => 'En el caso de una configuración vía atributo los parámetros pueden ser especifícados como atributos de un objeto JSON indicado como valor de atributo <code>sme-auto</code>:',
    '_params2' => 'Si la configuración de realiza desde una llamada JavaScript, los parámetros son indicados, de igual forma como atributos de un objeto JSON, pero esa vez es pasado como primer parámetro del llamado:',

    'options' => 'Opciones',
    'option' => 'Opción',
    'type' => 'Tipo',
    'default' => 'Valor por defecto',
    'description' => 'Descripción',

    '_paramsArray' => array(
      array(
        'name' => 'sId',
        'type' => 'string',
        'default' => 'false',
        'description' => 'Clave de ubicación de la configuración del emulador en el localStorage. Si su valor es <code>false</code>, no se cargará ni guardará la configuración.'
      ),
      array(
        'name' => 'aDevices',
        'type' => 'string[]',
        'default' => 'true',
        'description' => 'Índices de lo dispositivos que estarán disponibles en el emulador. Si su valor es <code>true</code>, se tomará todos los dispositivos como disponibles. Si su valor es <code>false</code> no se permitirá cambiar de dispositivo. Para una ver la lista de dispositivos disponibles ir a <a href="#devices-available">Dispositivos disponibles</a>.'
      ),
      array(
        'name' => 'sDeviceType',
        'type' => 'string',
        'default' => "'all'",
        'description' => 'Tipo de dispositivos disponibles. Filtra la lista de dispositivos disponibles indicados en el parámetro <code>aDevices</code>, dejando solo aquellos que sean del mismo tipo que el indicado. Si su valor es <code>\'all\'</code> se dejarán todos los dispositivos. Para una ver la lista de tipos de dispositivos ir a <a href="#devices-types">Tipos de dispositivos</a>.'
      ),
      array(
        'name' => 'sOrientation',
        'type' => 'string',
        'default' => "'portrait'",
        'description' => "Orientación del dispositivo: vertical (<code>'portrait'</code>) o horizontal (<code>'landscape'</code>). Si se carga una configuración desde el localSorage se omitirá este parámetro."
      ),
      array(
        'name' => 'bOrientations',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Permitir o deshabilitar el cambio de orientación del dispositivo.'
      ),
      array(
        'name' => 'bOpen',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Mostrar la barra de opciones abierta/cerrada. Si se carga una configuración desde el localSorage se omitirá este parámetro.'
      ),
      array(
        'name' => 'bShowOpen',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Mostrar/ocultar el botón para abrir/cerrar la barra de opciones.'
      ),
      array(
        'name' => 'fZoom',
        'type' => 'float',
        'default' => '1.0',
        'description' => 'Valor de zoom actual. Si se carga una configuración desde el localSorage se omitirá este parámetro.'
      ),
      array(
        'name' => 'fMinZoom',
        'type' => 'float',
        'default' => '.1',
        'description' => 'Valor mínimo de zoom permitido.'
      ),
      array(
        'name' => 'fMaxZoom',
        'type' => 'float',
        'default' => '2.0',
        'description' => 'Valor máximo de zoom permitido.'
      ),
      array(
        'name' => 'fIncZoom',
        'type' => 'float',
        'default' => '.1',
        'description' => 'Valor desplazamiento de zoom.'
      ),
      array(
        'name' => 'bShowZoom',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Mostrar/ocultar botones de zoom.'
      ),
      array(
        'name' => 'bShowOptions',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Mostrar/ocultar la barra de opciones.'
      ),
      array(
        'name' => 'oLogos',
        'type' => 'object',
        'default' => '{}',
        'description' => 'Objeto donde cada atributo representa la icono a agregar en la barra de iconos, lenzado a la a la URL indicada en el nombre del atributo.'
      ),
      array(
        'name' => 'bShowLogoInfo',
        'type' => 'boolean',
        'default' => 'true',
        'description' => 'Mostrar/ocultar el logotipo información del plugin.'
      ),
      array(
        'name' => 'oActions',
        'type' => 'object',
        'default' => '{}',
        'description' => 'Objeto de acciones que representan las funciones que se ejecutará al hacer click en los botones con los mismos nombres de los atributos del objeto.'
      ),
    ),

    'devices' => 'Dispositivos',
    '_devices' => 'La lista de dispositivos disponibles en Sir Mobile Emulator asi como las medidas de sus pantallas fueron tomados de las medidas existentes en la opción Emulation de Developer tools de Google Chrome. La selección se basó principalmente en dos familias: la familia de iOS (iPhone y iPad) y la familia Nexus.',

    'devicesTypes' => 'Tipos de dispositivos',
    '_devicesTypes' => 'Básica mente solo existe 2 tipos de dispositivos: los teléfonos inteligentes (<code>phone</code>) y las tabletas <code>tablet</code>. Sir Mobile Emulator, permite filtrar por tipos los dispositivos que se podrán seleccionar en la barra de acciones mediante la opción <code>sDeviceType</code>. Los valores posibles para esta opción son:',
    '_devicesTypesLi' => array(
      'all' => 'Incluir todos los dispositivos',
      'phone' => 'Incluir solo teléfonos',
      'tablet' => 'Incluir solo tabletas',
    ),

    'devicesAvailable' => 'Dispositivos disponibles',
    '_devicesAvailable' => 'Los dispositivos disponibles nativamente en Sir Mobile Emulator son:',
    '_devicesAvailableLi' => array(
      'iphone-3g-3gs' => 'iPhone 3G y iPhone 3GS',
      'iphone-4' => 'iPhone 4',
      'iphone-5' => 'iPhone 5',
      'ipad-mini' => 'iPad Mini',
      'ipad-3' => 'iPad 3',
      'nexus-10' => 'Nexus 10',
      'nexus-4' => 'Nexus 4',
      'nexus-5' => 'Nexus 5',
      'nexus-7' => 'Nexus 7',
      'nexus-7-2' => 'Nexus 7 (2013)',
      'nexus-s' => 'Nexus s',
    ),

    'addingDevices' => 'Agregando dispositivos',
    '_addingDevices' => 'Próximamente',

    'about' => 'Acerca de',
    '_about' => 'Descubra el origen del proyecto y otros aspectos resaltantes.',

    'origin' => 'Origen del proyecto',
    '_origin' => 'De la utilidad al proyecto.',
    '_originP' => array(
      'Durante el desarrollo varios proyectos por parte de <a target="_blank" href="http://twitter.com/arondn2">@arondn2</a>, se presentó la necesidad disponer de una herramienta con la cual probar diferentes tamaños de pantalla sin requerir compilarla, mucho menos de tener los dispositivos.',
      'Así entonces nace Sir Mobile Emulator como una utilidad sin nombre que permitía redimensionar el contenedor donde se ejecuta un contenedor de un código HTML. Con esto, el desarrollador lograba observar rápidamente como se compartaba su aplicación ante diferentes dimesiones.',
      'Al poco tiempo creada esta utilidad medianamente completa, Google Chrome puso a disposición de los desarrolladores en su Developer Tools opciones de emulación de dispositivos, que en un principio permitía solo la emulación de pantalla. Sin embargo, esto no detuvo la adición de nuevas opciones al "emulador", conviertiéndola en una herramienta mas completa que la versión anterior.',
      'Ya con la conformación de <a target="_blank" href="http://sirideas.com">Sir Ideas</a> se dió nombre a la herramienta: Sir Mobile Emulator, que figuraba ahora como plugin de jQuery y que sirve de interfaz no solo para realizar pruebas, sino tambien presentar aplicaciones en los navegador web. De igual forma se decidió liberar el proyecto para que otros desarrolladores con las mismas necesidad de puedna hacer uso del mismo.',
    ),

    'notes' => 'Notas',
    '_notes' => array(
      'Sir Mobile Emulator no pretende conseguir algún beneficio económico. Fué concebido para cubrir una necesidad y liberado para ayudar a cualquier otro al que se le presente el mismo problema. Debido a esto el mantenimiento de la herramienta es y será una acción completamente desinteresado y sin fines de lucro, por lo que se pide comprensión en los asuntos del mismo.'
    ),

    'tools' => 'Herramientas utilizadas',

    'toolsSme' => 'En el plugin',
    '_toolsSme' => 'Para la base del plugin se utilizó como base <a target="_blank" href="http://jquery.com/">jQuery</a> en su versión 1.11.1.',

    'toolsDocs' => 'En la documentación',
    '_toolsDocsDetail' => array(
      'Estilos se elaboradon madiente <a target="_blank" href="http://getbootstrap.com/">Bootstrap</a> en la versión 3.2.0, y la maquetación está basada principalmente en la estructura de la documentación oficial del mismo.',
      '<a target="_blank" href="http://jquery.com/">jQuery</a> en la versión 1.11.1, el cual es requerido para el funcionamiento de <a target="_blank" href="http://getbootstrap.com/">Bootstrap</a>.',
      'Hace uso de <a target="_blank" href="http://gruntjs.com/">Grunt</a>, <a target="_blank" href="http://bower.io/">Bower</a> y varios de los componentes de estas herramientas',
      'Los iconos de las acciones fueron la biblioteca de iconos de <a target="_blank" href="https://fontello.com/">Fontello</a>.',
    ),

    'sorry' => 'Fuentes de imágenes',
    '_sorry' => 'Los frames de las imágenes de los dispositivos fueron tomados de diversos lugares en la web, editados de adaptados para su uso en Sir Mobile Emulator. El momento de la busqueda de las imágenes no se procuro tomar las fuentes, pues no se pensaba en llegar a este punto, por lo que se pide de forma representativa disculpa a los autores de las mismas.'

  ),
));

file_put_contents('config.json', $jsonStr);

echo $jsonStr;

?>