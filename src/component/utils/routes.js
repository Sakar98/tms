export const routes = [
    {
      "type": "link",
      "text": "Dashboard",
      "link": "/Dashboard",
      "icon": "",
    //   "icon": "icon-display",
      "permissions": [],
    //   "permissions": ["DASHBOARD"],
      "display": false,
      "isRoute": false,
      "breadCrumb": ''
    },
    {
      "type": "title",
      "text": "Main Links",
      "link": "/home-app",
      "icon": "",
      "permissions": [],
      "display": false,
      "isRoute": false,
      "breadCrumb": ''
    },
    {
      "type": "link",
      "text": "Terminal List",
      "link": "/TerminalList",
    //   "icon": "icon-order",
      "icon": "",
    //   "isActive": (match, location) => {return location.pathname === '/TerminalList' || location.pathname.includes('/TerminalDetails'); },
    //   "permissions": ["LIST_DEVICE_DATA"],
      "permissions": [],
      "display": true,
      "isRoute": true,
      "breadCrumb": 'TerminalList',
      "componentName": 'terminalList'
    },
    {
      "type": "link",
      "text": "Terminal Details",
      "link": "/TerminalDetails/:tid",
      "icon": "",
    //   "icon": "icon-order",
    //   "isActive": (match, location) => { return location.pathname === '/TerminalList' || location.pathname.includes('/TerminalDetails'); },
    //   "permissions": ["LIST_DEVICE_DATA"],
      "permissions": [],
      "display": false,
      "isRoute": true,
      "breadCrumb": 'TerminalDetails',
      "componentName": 'terminalDetails'
    }
  ];
  