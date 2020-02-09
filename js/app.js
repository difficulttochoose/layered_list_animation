console.log('App was loaded...');

const a = document.querySelectorAll('ul.list-unstyled.main a');

[].map.call(a, (el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    [...a].map(el => el.classList.remove('selected'));
    let a2 = document.querySelectorAll('ul.parent a');

    [...a2].map(el => el.parentNode.parentNode.classList.remove('parent'));

    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.toggle('open');
    }

    e.target.classList.add('selected');
    e.target.parentNode.parentNode.classList.add('parent');

    let ul = document.querySelectorAll('ul.parent ul');
    [...ul].map(el => {
      if (!el.parentNode.parentNode.classList.contains('parent')) {
        el.classList.remove('open');
      }
    });
  })
});
