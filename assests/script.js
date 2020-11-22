//When i hover over hamburger it zoom out
$(".navbar-item").hover(
    function() {
        $(this).animate({ 'zoom': 1.2 }, 400);
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 400);
    });

//When i click Hamburger icon would rotate
$(function () {
    

    $("#hamburger").click(function() {
        
        // var toggle = $("#navMenu").css("display","block");


        var burger = document.querySelector("#hamburger");
        var nav = document.querySelector('#'+burger.dataset.target);    
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');

       
       
    });




    $("#myName").click(function() {
      //  $("#myName").animateRotate({
            // rotateX: 180,
            // rotateY: 180
        // }, {
            // duration: 1500,
            // easing: "swing", 
            // complete: function() {
                // console.log('complete:\n\tthis: ' + this); //this is supposed to be the DOM node, but it isn't
            // },
            // done: function(animation, jumpedToEnd) {
                // console.log('done:\n\tthis: ' + this
                            // + '\n\tanimation: ' + animation
                            // + '\n\tjumpedToEnd: ' + jumpedToEnd);
            // }
        // });
    // });
    });
});
//When hambuger button clicked side panel open
//When I Click my Name it willl rotate and display my email and phone

//Research on toggle and trigger


    