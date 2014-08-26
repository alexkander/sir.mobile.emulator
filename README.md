# Sir Mobile Emulator
Emulador visual de dispositivos móviles actuales para probar y presentar aplicaciones HTML5.

## Usos

Sir Mobile Emulator es una extensión de jQuery que permite observar como luce tu aplicación en las pantallas de los diferentes dispositivos de mayor uso en la actualidad, con la finalidad de hacer de esta responsiva. Además podrás realizar presentaciones de tu aplicación antes de compilar nativamente para cada SO, o liberar versiones de pruebas online para navegadores webs, en los diferentes dispositivos móviles de mayor uso en la actualidad.

### Ejemplo
```html
<!DOCTYPE HTML>
<html>
  <head>
    <!-- SME's styles -->
    <link rel="stylesheet" href="http://sirideas.github.io/sir.mobile.emulator/dist/0.0.1-beta/styles/sme.min.css"/>
    <title>SirMobileEmulator</title>
  </head>
  <body>
    <!-- Container screen -->
    <iframe sme-auto src="http://sirideas.com"></iframe>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include sme.js -->
    <script src="http://sirideas.github.io/sir.mobile.emulator/dist/0.0.1-beta/scripts/sme.min.js"></script>
  </body>
</html>
```

## Documentación

La documentación correspondiente está [disponible en línea](http://sirideas.github.io/sir.mobile.emulator/).

## Licencia

Este software está licenciado bajo la [MIT](LICENSE), documentado bajo [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).

## Instalación mínima

Para la configuración básica de Sir Mobile Emulator se requiere cumplir los siguientes pasos:

* Incluir los estilos.
* Incluir jQuery.
* Incluir el script de Sìr Mobile Emulator.
* Indicar los elementos ser manejados con Sir Mobile Emulator colocando el atributo `sme-auto`.

## Contribuciones

Por favor reporte los bugs, sugerencias y agregué peticiones en el [GitHub issue tracker](https://github.com/SirIdeas/sir.mobile.emulator/issues).

## Registro de cambios

Ver [CHANGELOG](CHANGELOG.md).

## Historia
* No se tiene registro exacto del inicio del desarrollo de esta utilidad, pero se puede ubicar al comienzo de 2013.
* Desarrollado y mantenido por [@arondn2](http://twitter.com/arondn2) en [Sir Ideas, C.A.](http://sirideas.com/).
* Recibió su nombre poco después de que [Sir Ideas, C.A.](http://sirideas.com/) se conformará como empresa.
