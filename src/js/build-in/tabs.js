export default function tabs() {

'use strict'
  let tab = document.querySelectorAll('.nav-item'),
      tabContent = document.querySelectorAll('.characters__tab-item');

  tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
      hideTab();
      this.classList.add('tab-header_show');
      tabContent[i].classList.add('tab-content_show');
    });
  });

  function hideTab() {
    tab.forEach((item) => {
      item.classList.remove('tab-header_show');
    });
    tabContent.forEach((item) => {
      item.classList.remove('tab-content_show');
    });
  }
}