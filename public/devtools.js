var elements = chrome.devtools.panels.elements;

elements.createSidebarPane('Matman', function (sidebar) {
  // https://developer.chrome.com/extensions/devtools.panels#method-ExtensionSidebarPane-setPage
  sidebar.setPage('sidebar/index.html');
  sidebar.setHeight('12ex');
});

chrome.devtools.panels.create(
  'MatmanConsole',
  'icons/icon16.png',
  'panel/index.html'
);

chrome.devtools.panels.create(
  'Mocker',
  'icons/icon16.png',
  'mocker/index.html'
);
