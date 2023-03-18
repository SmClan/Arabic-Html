var arabicElements = {
  'نص': 'h1',
  'سطر': 'hr'
};

Object.keys(arabicElements).forEach(function(key) {
  var arabicElement = document.createElement(key);
  var englishElement = arabicElements[key];
  document.createElement(englishElement);
});
