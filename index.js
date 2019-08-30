
$(document).ready(function(){
  //animatie obiect1
  function animateObj1(){
    $('#obj1').animate(
      {'margin-top': 395}
      ,2000
    )
    .animate(
      {'margin-top': 5}
      ,2000
      ,animateObj1
    );
  }
  animateObj1();

  //animatie obiect2
  function animateObj2(){
    $('#obj2').animate(
      {'margin-top': 5}
      ,2000
    )
    .animate(
      {'margin-top': 395}
      ,2000
      ,animateObj2
    );
  }
  animateObj2();

  //animatie obiect 3
  function animateObj3(){
    $('#obj3').animate(
      {'margin-top': 395}
      ,2000
    )
    .animate(
      {'margin-top': 5}
      ,2000
      ,animateObj3
    );
  }
  animateObj3();

  //animatie obiect4
  function animateObj4(){
    $('#obj4').animate(
      {'margin-top': 5}
      ,2000
    )
    .animate(
      {'margin-top': 395}
      ,2000
      ,animateObj4
    );
  }
  animateObj4();

  //animatie obiect 5
  function animateObj5(){
    $('#obj5').animate(
      {'margin-top': 395}
      ,2000
    )
    .animate(
      {'margin-top': 5}
      ,2000
      ,animateObj5
    );
  }
  animateObj5();

  var color = $('#obj3').css('background-color');
  $('#obj3').hover(
    function(){
      $(this).css('background', 'blue')
    }, function(){
      $(this).css('background', color)
    });

    $('#obj1').click(function(){
        $(this)
        .css('height', 100)
        .css('width', 210)
      });
});
