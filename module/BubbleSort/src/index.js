Array.prototype.bubble_sort = function () {
  let i, j, temp;
  for (i = 0; i < this.length - 1; i++) {
    for (j = 0; j < this.length - 1 - i; j++) {

      console.log(this, this[j]);
      if (this[j] > this[j + 1]) {
        temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;

      }
    }
  }
  return this;
};
let array = [];

function load() {
  for (var i = 0, len = array.length; i < len; i++) {
    let div = document.createElement('div');
    div.style.height = array[i] + '%';
    div.setAttribute('index', i);
    div.classList.add('default')
    div.setAttribute('value', array[i]);
    let span = document.createElement('span');
    span.innerHTML = array[i];
    div.appendChild(span);
    // div.style.lineHeight = array[i] > 100 ? '200px' : array[i] * 2 + 'px';
    app.appendChild(div);
  }
}

function sort() {
  let $div = $('#app').children();
  let length = $div.length;
  let x = 0;
  for (let index = 0; index < length - 1; index++) {
    for (let j = 0; j < length - 1 - index; j++) {

      (function (j) {
        setTimeout(function () {
          let current = $div[j];
          let next = $div[j + 1];
          current.classList.add('current')
          next.classList.add('current')
          if (parseFloat(current.getAttribute('value')) > parseFloat(next.getAttribute('value'))) {
            let temp = $div[j].getAttribute('value');
            $(current).attr('value', $(next).attr('value'));
            $(current).height($(current).attr('value') + '%');
            $(current).find('span').html($(current).attr('value'));
            $(next).height(temp + '%');
            $(next).find('span').html(temp);
            $(next).attr('value', temp);
          }
          current.classList.remove('current')
          next.classList.remove('current')
          if (j == length - 1 - index - 1) {
            next.classList.add('pass');
          }
        }, x * 1000)

      })(j)
      x++;
    }

  }
}


function createRandom(num, from, to) {
  var arr = [];
  for (var i = from; i <= to; i++)
    arr.push(i);
  arr.sort(function () {
    return 0.5 - Math.random();
  });
  arr.length = num;
  return arr;
}
$(function () {

  reload();


})

function reload() {
   $('#app').html('');
  array = createRandom(10, 1, 50);
  load();
  sort();
  $('#nums').val(array.splice(','));

}