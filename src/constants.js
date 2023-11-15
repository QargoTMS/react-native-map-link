/**
 * React Native Map Link
 */

import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export function generatePrefixes(options) {
  return {
    'apple-maps': isIOS ? 'maps://' : 'applemaps://',
    'google-maps': prefixForGoogleMaps(options.alwaysIncludeGoogle),
    'maps-me': 'mapsme://',
    'yandex-maps': 'yandexmaps://maps.yandex.ru/',
    'yandex-taxi': 'yandextaxi://',
    citymapper: 'citymapper://',
    copilot: 'copilot://',
    dgis: 'dgis://2gis.ru/',
    gett: 'gett://',
    kakaomap: 'kakaomap://',
    liftago: 'lftgpas://',
    lyft: 'lyft://',
    mapycz: isIOS ? 'szn-mapy://' : 'mapycz://',
    moovit: 'moovit://directions',
    navermap: options.naverCallerName ? 'nmap://' : 'nmap-disabled://',
    osmand: isIOS ? 'osmandmaps://' : 'osmand.geo://',
    petalmaps: 'petalmaps://',
    transit: 'transit://',
    truckmap: 'truckmap://',
    uber: 'uber://',
    waze: 'waze://',
    yandex: 'yandexnavi://',
  };
}

export function prefixForGoogleMaps(alwaysIncludeGoogle) {
  return isIOS && !alwaysIncludeGoogle
    ? 'comgooglemaps://'
    : 'https://www.google.com/maps/';
}

export function generateTitles(titles) {
  return {
    'apple-maps': 'Apple Maps',
    'google-maps': 'Google Maps',
    'maps-me': 'Maps Me',
    'yandex-maps': 'Yandex Maps',
    'yandex-taxi': 'Yandex Taxi',
    citymapper: 'Citymapper',
    copilot: 'Copilot GPS',
    dgis: '2GIS',
    gett: 'Gett',
    kakaomap: 'Kakao Maps',
    liftago: 'Liftago',
    lyft: 'Lyft',
    mapycz: 'Mapy.cz',
    moovit: 'Moovit',
    navermap: 'Naver Map',
    osmand: 'OsmAnd',
    petalmaps: 'Petal Maps',
    transit: 'The Transit App',
    truckmap: 'TruckMap',
    uber: 'Uber',
    waze: 'Waze',
    yandex: 'Yandex.Navi',
    ...(titles || {}),
  };
}

export const icons = {
  'apple-maps': require('./images/apple-maps.png'),
  'google-maps': require('./images/google-maps.png'),
  'maps-me': require('./images/maps-me.png'),
  'yandex-maps': require('./images/yandex-maps.png'),
  'yandex-taxi': require('./images/yandex-taxi.png'),
  citymapper: require('./images/citymapper.png'),
  copilot: require('./images/copilot.png'),
  dgis: require('./images/dgis.png'),
  gett: require('./images/gett.png'),
  kakaomap: require('./images/kakao-map.png'),
  liftago: require('./images/liftago.png'),
  lyft: require('./images/lyft.png'),
  mapycz: require('./images/mapycz.png'),
  moovit: require('./images/moovit.png'),
  navermap: require('./images/naver-map.png'),
  osmand: require('./images/osmand.png'),
  petalmaps: require('./images/petalmaps.png'),
  transit: require('./images/transit.png'),
  truckmap: require('./images/truckmap.png'),
  uber: require('./images/uber.png'),
  waze: require('./images/waze.png'),
  yandex: require('./images/yandex.png'),
};

export const appKeys = Object.keys(icons);
