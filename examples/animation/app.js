const animationPage = require('./animation');
const peoplePage = require('./people');
const trayPage = require('./tray');
const {Button, NavigationView, Page, ui} = require('tabris');

const MARGIN = 8;

let navigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let mainPage = new Page({
  title: 'Animation Examples'
}).appendTo(navigationView);

[animationPage, peoplePage, trayPage].forEach((page) => {
  new Button({
    left: MARGIN, top: ['prev()', MARGIN],
    text: page.title
  }).on('select', () => page.appendTo(navigationView))
    .appendTo(mainPage);
});
