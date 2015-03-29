/* ========================================================================
 * Sir Mobile Emulator: sme.js
 * http://sirideas.github.io/sir.mobile.emulator/
 * ========================================================================
 * Copyright 2014-2015 Sir Ideas, C. A.
 * Licensed under MIT (https://github.com/SirIdeas/sir.mobile.emulator/blob/master/LICENSE)
 * ========================================================================
 */
(function($){
  'use strict';

  var instances = [],

  propertysDirections = {
    'portrait'  : {
      'width'   : 'width',
      'height'  : 'height',
      'top'     : 'top',
      'left'    : 'left',
      'bottom'  : 'bottom',
      'right'   : 'right',
    },
    'landscape' : {
      'width'   : 'height',
      'height'  : 'width',
      'top'     : 'right',
      'left'    : 'top',
      'bottom'  : 'left',
      'right'   : 'bottom',
    }
  },

  oDevices = {
    'iphone-3g-3gs':{
      name: 'iPhone 3G S',
      userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
      type: 'phone',
      width: 320,
      height: 480,
      devicePixelRatio: 1,
      padding: { top: 116, left: 33, bottom: 115, right: 31 },
      buttons: {
        buttonHome: { top: 608, left: 158, bottom: 32, right: 155 }
      }
    },
    'iphone-4':{
      name: 'iPhone 4',
      userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
      type: 'phone',
      width: 640,
      height: 960,
      devicePixelRatio: 2,
      padding: { top: 260, left: 60, bottom: 266, right: 60 },
      buttons: {
        buttonHome: { top: 1282, left: 308, bottom: 60, right: 306 }
      }
    },
    'iphone-5':{
      name: 'iPhone 5',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
      type: 'phone',
      width: 640,
      height: 1136,
      devicePixelRatio: 2,
      padding: { top: 222, left: 58, bottom: 208, right: 48 },
      buttons: {
        buttonHome: { top: 1382, left: 308, bottom: 44, right: 298 }
      }
    },
    'ipad-mini': {
      name: 'iPad 1/2/Mini',
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5',
      type: 'tablet',
      width: 768,
      height: 1024,
      devicePixelRatio: 1,
      padding: { top: 129, left: 49, bottom: 130, right: 49 },
      buttons: {
        buttonHome: { top: 1187, left: 401, bottom: 29, right: 400 }
      }
    },
    'ipad-3': {
      name: 'iPad 3/4',
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
      type: 'tablet',
      width: 1536,
      height: 2048,
      devicePixelRatio: 2,
      padding: { top: 222, left: 192, bottom: 220, right: 192 },
      buttons: {
        buttonHome: { top: 2326, left: 904, bottom: 50, right: 902 }
      }
    },
    'nexus-10': {
      name: 'Nexus 10',
      userAgent: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36',
      type: 'tablet',
      width: 1600,
      height: 2560,
      devicePixelRatio: 2,
      padding: { top: 408, left: 320, bottom: 428, right: 264 },
      buttons : {}
    },
    'nexus-4': {
      name: 'Nexus 4',
      userAgent: 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
      type: 'phone',
      width: 768,
      height: 1280,
      devicePixelRatio: 2,
      padding: { top: 188, left: 112, bottom: 214, right: 110 },
      buttons : {}
    },
    'nexus-5': {
      name: 'Nexus 5',
      userAgent: 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
      type: 'phone',
      width: 1080,
      height: 1920,
      devicePixelRatio: 3,
      padding: { top: 198, left: 63, bottom: 253, right: 63 },
      buttons : {}
    },
    'nexus-7': {
      name: 'Nexus 7',
      userAgent: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36',
      type: 'tablet',
      width: 800.3,
      height: 1279.95,
      devicePixelRatio: 1.325,
      padding: { top: 190, left: 104, bottom: 189, right: 108 },
      buttons : {}
    },
    'nexus-7-2': {
      name: 'Nexus 7 2',
      userAgent: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36',
      type: 'tablet',
      width: 1200,
      height: 1920,
      devicePixelRatio: 2,
      padding: { top: 304, left: 210, bottom: 354, right: 210 },
      buttons : {}
    },
    'nexus-s': {
      name: 'Nexus S',
      userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Nexus S Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      type: 'phone',
      width: 480,
      height: 800,
      devicePixelRatio: 1.5,
      padding: { top: 162, left: 50, bottom: 158, right: 44 },
      buttons : {}
    },
  },

  oClasses = {
    options          : 'sme-options',
    optionsInner     : 'sme-options-inner',
    optionGroup      : 'sme-option-group',
    option           : 'sme-option',
    action           : 'sme-action',
    parent           : 'sme-parent',
    closed           : 'sme-closed',
    openButton       : 'sme-open-button',
    text             : 'sme-text',
    hideWhenClosed   : 'sme-hide-when-closed',
    openButtonClose  : 'icon-right-circled',
    openButtonOpen   : 'icon-left-circled',
    zoomButtonIn     : 'icon-zoom-in',
    zoomButtonOut    : 'icon-zoom-out',
    zoomButtonText   : 'sme-zoom-button-text',
    orientationButtons : {
      portrait       : 'icon-doc',
      landscape      : 'icon-doc-landscape',
    },
    deviceText       : 'sme-device-text',
    caret            : 'icon-down-dir',
    active           : 'sme-active',
    list             : 'sme-list',
    hide             : 'sme-hide',
    listContainer    : 'sme-list-container',
    right            : 'sme-right',
    display          : 'sme-display',
    displayParent    : 'sme-display-parent',
    displayGroup     : 'sme-display-group',
    displaySize      : 'sme-display-size',
    displayImg       : 'sme-display-img',
    verticalAlign    : 'sme-vertical-align',
    buttons          : 'sme-buttons',
    button           : 'sme-button',
    auto             : 'sme-auto',
  },

  oDefaults = {

    sId           : false,

    sDevice       : null,
    aDevices      : true,
    sDeviceType   : 'all',
    sOrientation  : 'portrait',
    bOrientations : true,

    bOpen         : true,
    bShowOpen     : true,

    fZoom         : .5,
    fMinZoom      : .1,
    fMaxZoom      : 2.0,
    fIncZoom      : .1,
    bShowZoom     : true,

    bShowOptions  : true,

    oLogos        : false,
    bShowLogoInfo : true,

    oActions      : {},

  },

  aOrientationsClasses = {
    'portrait'  : 'icon-doc',
    'landscape' : 'icon-doc-landscape'
  },

  aOrientations = [ 'portrait', 'landscape' ],
  aParamsToSave = [ 'sDevice', 'sOrientation', 'fZoom', 'bOpen' ],

  sURL = 'http://sirideas.github.io/sir.mobile.emulator/',

  sIdLocalstorageKey = '-sirideas-emulator',

  sCurrentDeviceClass = '',

  fnGetInstante = function(tElement){
    for(var i = 0; i<instances.length; i++){
      if(tElement == instances[i].tElement){
        return instances[i].oOptions;
      }
    }return null;
  },

  fnParseInParams = function(oOptions, params){
    var ret = {};
    for(var i in params){
      i = params[i];
      if(oOptions[i]){
        ret[i] = oOptions[i];
      }
    }return ret;
  },

  fnGetSavedOptions = function(oOptions){
    return JSON.parse(localStorage.getItem(oOptions.sKeyMaster))
  },

  fnSave = function(oOptions){
    if(oOptions.sId!==false){
      localStorage.setItem(oOptions.sKeyMaster, JSON.stringify(fnParseInParams(oOptions, aParamsToSave)));
    }
  },

  fnSetZoom = function(oOptions, fIncr){
    oOptions.fZoom = oOptions.fZoom + fIncr*oOptions.fIncZoom;
    if(oOptions.fMaxZoom!==false) oOptions.fZoom = Math.min(oOptions.fMaxZoom, oOptions.fZoom);
    if(oOptions.fMinZoom!==false) oOptions.fZoom = Math.max(oOptions.fMinZoom, oOptions.fZoom);
    oOptions.fZoom = Math.max(oOptions.fZoom, .01);
    oOptions.tZoomButtonText.html(Math.floor(oOptions.fZoom*100) + '%');
  },

  fnUpdateDeviceClass = function(oOptions){
    oOptions.tDisplayGroup.removeClass(sCurrentDeviceClass);
    sCurrentDeviceClass = 'sme-device-' + oOptions.sDevice + '-' + oOptions.sOrientation;
    oOptions.tDisplayGroup.addClass(sCurrentDeviceClass);
  },

  fnSetOrientation = function(oOptions, sOrientation){
    oOptions.tOrientationsButtonsGroup
      .find('.' + oClasses.active)
      .removeClass(oClasses.active);

    oOptions.tOrientationsButtons[sOrientation].addClass(oClasses.active);

    oOptions.sOrientation = sOrientation;
  },

  fnSetDevice = function(oOptions, sDevice){

    oOptions.tDevicesList
      .find('.' + oClasses.active)
      .removeClass(oClasses.active);

    oOptions.tDevicesItems[sDevice].addClass(oClasses.active);

    oOptions.sDevice = sDevice;
    oOptions.oDevice = oDevices[sDevice];
    oOptions.tDevicesText.html(oOptions.oDevice.name);

    navigator.userAgent = oOptions.oDevice.userAgent

    oOptions.oButtons = {};
    oOptions.tButtonsGroup.empty();

    for(var i in oOptions.oActions){
      if(oOptions.oDevice.buttons[i]){
        oOptions.oButtons[i] = $('<div/>')
          .addClass(oClasses.button)
          .click(oOptions.oActions[i]);
        oOptions.tButtonsGroup.append(oOptions.oButtons[i]);
      }
    }

  },

  fnAllowDevice = function(sDevice, sDeviceType){
    return oDevices[sDevice] && (oDevices[sDevice].type === sDeviceType || 'all' === sDeviceType);
  },

  fnRenderOpenButton = function(oOptions){

    var tOpenButton = $('<span/>')
      .addClass(oClasses.option)
      .addClass(oClasses.action)
      .addClass(oClasses.openButton)
      .click(function(){
        tOpenButton
          .toggleClass(oClasses.openButtonClose)
          .toggleClass(oClasses.openButtonOpen);
        oOptions.tOptions.toggleClass(oClasses.closed);
        oOptions.tParent.toggleClass(oClasses.closed);
        fnSave(oOptions);
      });

    if(oOptions.bOpen){
      tOpenButton.addClass(oClasses.openButtonOpen);
    }else{
      tOpenButton.addClass(oClasses.openButtonClose);
      oOptions.tParent.addClass(oClasses.closed);
      oOptions.tOptions.addClass(oClasses.closed);
    }

    oOptions.tOptionsInner.append(tOpenButton);

  },

  fnRenderZoomButtons = function(oOptions){

    oOptions.tZoomButtonText = $('<span/>')
      .addClass(oClasses.option)
      .addClass(oClasses.text)
      .addClass(oClasses.zoomButtonText);

    var tZoomButtonsGroup = $('<span/>')
      .addClass(oClasses.optionGroup)
      .addClass(oClasses.hideWhenClosed)
      .append($('<span/>')
        .addClass(oClasses.option)
        .addClass(oClasses.action)
        .addClass(oClasses.zoomButtonOut)
        .click(function(){
          fnSetZoom(oOptions, -1);
          fnRefresh(oOptions);
          fnSave(oOptions);
        })
      )
      .append(oOptions.tZoomButtonText)
      .append($('<span/>')
        .addClass(oClasses.option)
        .addClass(oClasses.action)
        .addClass(oClasses.zoomButtonIn)
        .click(function(){
          fnSetZoom(oOptions, 1);
          fnRefresh(oOptions);
          fnSave(oOptions);
        })
      );

    fnSetZoom(oOptions, 0);
    oOptions.tOptionsInner.append(tZoomButtonsGroup);

  },

  fnRenderOrientationsButtons = function(oOptions){

    oOptions.tOrientationsButtons = {};

    oOptions.tOrientationsButtonsGroup = $('<span/>')
      .addClass(oClasses.optionGroup)
      .addClass(oClasses.hideWhenClosed);

    for(var i in aOrientations){
      (function(sOrientation){
        oOptions.tOrientationsButtons[sOrientation] =
          $('<span/>')
            .addClass(oClasses.option)
            .addClass(oClasses.action)
            .addClass(oClasses.orientationButtons[sOrientation])
            .click(function(){
              fnSetOrientation(oOptions, sOrientation);
              fnRefresh(oOptions);
              fnSave(oOptions);
            });
        oOptions.tOrientationsButtonsGroup.append(oOptions.tOrientationsButtons[sOrientation]);
      })(aOrientations[i])
    }

    oOptions.tOptionsInner.append(oOptions.tOrientationsButtonsGroup);
    fnSetOrientation(oOptions, oOptions.sOrientation);

  },

  fnRenderDevicesButtons = function(oOptions){

    oOptions.tDevicesItems = {};
    oOptions.tDevicesList = $('<div/>')
      .addClass(oClasses.listContainer)
      .addClass(oClasses.hide);

    for(var i in oOptions.aDevices){
      (function(sDevice){
        oOptions.tDevicesItems[sDevice] = $('<div/>')
          .addClass(oClasses.action)
          .html(oDevices[sDevice].name)
          .click(function(){
            oOptions.tDevicesList.addClass(oClasses.hide);
            fnSetDevice(oOptions, sDevice);
            fnRefresh(oOptions);
            fnSave(oOptions);
          });
        oOptions.tDevicesList.append(oOptions.tDevicesItems[sDevice]);
      })(oOptions.aDevices[i])
    }

    oOptions.tDevicesText = $('<span/>')
      .addClass(oClasses.option)
      .addClass(oClasses.text)
      .addClass(oClasses.deviceText);

    oOptions.tDevicesButtonsGroup = $('<span/>')
      .addClass(oClasses.optionGroup)
      .append(oOptions.tDevicesText)
      .append($('<span/>')
        .addClass(oClasses.option)
        .addClass(oClasses.action)
        .addClass(oClasses.caret)
        .click(function(){
          oOptions.tDevicesList.toggleClass(oClasses.hide);
        })
      );

    oOptions.tDevicesContainer = $('<span/>')
      .addClass(oClasses.hideWhenClosed)
      .addClass(oClasses.list)
      .append(oOptions.tDevicesButtonsGroup)
      .append(oOptions.tDevicesList);

    oOptions.tOptionsInner.append(oOptions.tDevicesContainer);
    fnSetDevice(oOptions, oOptions.sDevice);

  },

  fnRenderLogos = function(oOptions){

    var showLogos = false;

    if(oOptions.oLogos === true){
      showLogos = true;
      oOptions.oLogos = {};
    }else if(oOptions.oLogos === false){
      showLogos = false;
      oOptions.oLogos = {};
    }else{
      showLogos = true;
    }

    if(oOptions.bShowLogoInfo === true){
      showLogos = true;
      oOptions.oLogos[sURL] = 'sme-icon'
    }

    console.log(oOptions.oLogos);

    var countLogos = false
    for(var i in oOptions.oLogos){
      countLogos = true;
      break;
    }

    showLogos = showLogos && countLogos;

    if(showLogos){

      var tOptionsInnerRight = $('<div/>')
        .addClass(oClasses.optionsInner)
        .addClass(oClasses.hideWhenClosed)
        .addClass(oClasses.right);

      for(var i in oOptions.oLogos){
        tOptionsInnerRight
          .append($('<a href="'+i+'"/>')
            .addClass(oClasses.option)
            .addClass(oClasses.action)
            .attr('target', '_blank')
            .append('<span class="'+oOptions.oLogos[i]+'"/>')
          );
      }

      oOptions.tOptions.append(tOptionsInnerRight)

    }

  },

  fnRenderEmulator = function(oOptions){

    oOptions.tDisplayParent = $('<div/>')
      .addClass(oClasses.displayParent)
      .append(oOptions.tElement);

    oOptions.tButtonsGroup = $('<div/>')
      .addClass(oClasses.buttons);

    oOptions.tDisplayGroup = $('<div/>')
      .addClass(oClasses.displayGroup)
      .append(oOptions.tButtonsGroup)
      .append(oOptions.tDisplayParent);

    oOptions.tDisplaySize = $('<div/>')
      .addClass(oClasses.displaySize)
      .append(oOptions.tDisplayGroup);

    var tDisplayVerticalAlign = $('<div/>')
      .addClass(oClasses.verticalAlign)
      .append($('<div/>')
        .addClass(oOptions.tDisplaySize)
        .append(oOptions.tDisplaySize)
      );

    oOptions.tParent = $('<div/>')
      .addClass(oClasses.parent)
      .append(tDisplayVerticalAlign);

    oOptions.tMainContainer.append(oOptions.tParent);

  },

  fnRefresh = function(oOptions){

    var oDevice = oOptions.oDevice;

    var propertys = propertysDirections[oOptions.sOrientation];

    var sizes = {
      zoom   : oOptions.fZoom,
      width  : oDevice[propertys.width] / oDevice.devicePixelRatio,
      height : oDevice[propertys.height] / oDevice.devicePixelRatio,
      top    : oDevice.padding[propertys.top] / oDevice.devicePixelRatio,
      left   : oDevice.padding[propertys.left] / oDevice.devicePixelRatio,
      bottom : oDevice.padding[propertys.bottom] / oDevice.devicePixelRatio,
      right  : oDevice.padding[propertys.right] / oDevice.devicePixelRatio,
    };

    sizes.displayWidth  = sizes.width + sizes.left + sizes.right;
    sizes.displayHeight = sizes.height + sizes.top + sizes.bottom;

    oOptions.tDisplaySize.css({
      'width'  : sizes.displayWidth  * sizes.zoom,
      'height' : sizes.displayHeight * sizes.zoom,
    });

    oOptions.tDisplayGroup.css({
      'width'             : sizes.displayWidth,
      'height'            : sizes.displayHeight,
      '-webkit-transform' : 'scale('+ sizes.zoom +')',
      '-moz-transform'    : 'scale('+ sizes.zoom +')',
      '-ms-transform'     : 'scale('+ sizes.zoom +')',
      '-o-transform'      : 'scale('+ sizes.zoom +')',
      'transform'         : 'scale('+ sizes.zoom +')',
    });

    oOptions.tDisplayParent.css({
      'width'    : sizes.width,
      'height'   : sizes.height,
      'top'      : sizes.top,
      'left'     : sizes.left,
    });

    fnUpdateDeviceClass(oOptions);

    for(var i in oOptions.oButtons){
      oOptions.oButtons[i].css({
        'top'    : oDevice.buttons[i][propertys.top] / oDevice.devicePixelRatio,
        'left'   : oDevice.buttons[i][propertys.left] / oDevice.devicePixelRatio,
        'bottom' : oDevice.buttons[i][propertys.bottom] / oDevice.devicePixelRatio,
        'right'  : oDevice.buttons[i][propertys.right] / oDevice.devicePixelRatio,
      });
    }

  },

  fnRenderOptions = function(oOptions){

    oOptions.tOptionsInner = $('<div/>')
      .addClass(oClasses.optionsInner);

    oOptions.tOptions = $('<div/>')
      .addClass(oClasses.options)
      .append(oOptions.tOptionsInner);

    oOptions.tMainContainer.append(oOptions.tOptions);

    if(oOptions.bShowOpen)         fnRenderOpenButton(oOptions);
    if(oOptions.bShowZoom)         fnRenderZoomButtons(oOptions);
    if(oOptions.bOrientations)     fnRenderOrientationsButtons(oOptions);
    if(oOptions.aDevices.length>1) fnRenderDevicesButtons(oOptions);

    fnRenderLogos(oOptions);

  },

  fnInit = function(tContainer, oOptions){

    oOptions = $.extend({}, oDefaults, oOptions);
    if(oOptions.sId !== false){
      oOptions.sKeyMaster = oOptions.sId + sIdLocalstorageKey;
      oOptions = $.extend({}, oOptions, fnGetSavedOptions(oOptions));
    }

    oOptions.tElement = $(tContainer);
    oOptions.tMainContainer = oOptions.tElement.parent();
    oOptions.tElement.addClass(oClasses.display);

    if(oOptions.aDevices === true){
      oOptions.aDevices = [];
      for(var i in oDevices){
        if(fnAllowDevice(i, oOptions.sDeviceType)){
          oOptions.aDevices.push(i);
        }
      }
    }else if(oOptions.aDevices === false){
      oOptions.aDevices = [];
    }else{
      var aDevicesTmp = [];
      for(var i in oOptions.aDevices){
        if(fnAllowDevice(oOptions.aDevices[i], oOptions.sDeviceType)){
          aDevicesTmp.push(oOptions.aDevices[i]);
        }
      }
      oOptions.aDevices = aDevicesTmp;
    }

    if(oOptions.aDevices.length === 0){
      oOptions.aDevices.push(oOptions.sDevice);
    }

    oOptions.oDevice = oDevices[oOptions.sDevice];

    if(!oOptions.oDevice){
      for(var i in oOptions.aDevices){
        oOptions.sDevice = oOptions.aDevices[0];
        oOptions.oDevice = oDevices[oOptions.sDevice];
        break;
      }
    }

    fnRenderEmulator(oOptions);

    if(oOptions.bShowOptions){
      fnRenderOptions(oOptions);
    }else{
      oOptions.tParent.addClass(oClasses.closed);
    }

    fnRefresh(oOptions);

    return oOptions;

  },

  __call = function(pOptions){
    return this.each(function(){
      var oOptions = fnGetInstante(this);
      if(oOptions == null){
        oOptions = eval('[' + ($(this).attr(oClasses.auto) || '').trim() + ']')[0] || {};
        oOptions = $.extend({}, oOptions, pOptions);
        instances.push(fnInit(this, oOptions));
      }
    });
  };

  __call.oDevices = oDevices;

  $.fn.extend({
    sirMobileEmulator: __call
  });

  $('['+oClasses.auto+']').sirMobileEmulator();

})($);
