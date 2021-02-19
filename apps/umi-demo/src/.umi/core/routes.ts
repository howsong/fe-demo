// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/haosen/Desktop/demos/umi-demo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'/Users/haosen/Desktop/demos/umi-demo/src/pages/index')}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index')}),
        "routes": [
          {
            "path": "/home",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/Users/haosen/Desktop/demos/umi-demo/src/pages/home')}),
            "exact": true
          },
          {
            "path": "/visual",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__visual' */'/Users/haosen/Desktop/demos/umi-demo/src/pages/visual')}),
            "exact": true
          },
          {
            "path": "/antd",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__antd' */'/Users/haosen/Desktop/demos/umi-demo/src/pages/antd')}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
