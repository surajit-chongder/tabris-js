import {NavigationView, Color, WidgetCollection} from 'tabris';

let widget: NavigationView = new NavigationView;

// Properties
let actionColor: Color;
let actionTextColor: Color;
let pageAnimation: 'default' | 'none';
let drawerActionVisible: boolean;
let titleTextColor: Color;
let toolbarColor: Color;
let toolbarVisible: boolean;

actionColor = widget.actionColor;
actionTextColor = widget.actionTextColor;
pageAnimation = widget.pageAnimation;
drawerActionVisible = widget.drawerActionVisible;
titleTextColor = widget.titleTextColor;
toolbarColor = widget.toolbarColor;
toolbarVisible = widget.toolbarVisible;

widget.actionColor = actionColor;
widget.actionTextColor = actionTextColor;
widget.pageAnimation = pageAnimation;
widget.drawerActionVisible = drawerActionVisible;
widget.titleTextColor = titleTextColor;
widget.toolbarColor = toolbarColor;
widget.toolbarVisible = toolbarVisible;

// Methods
let widgetCollection: WidgetCollection;

widgetCollection = widget.pages();

// Events
let height: number;
widget.on({
  bottomToolbarHeightChanged: event => height = event.value,
  topToolbarHeightChanged: event => height = event.value
});
