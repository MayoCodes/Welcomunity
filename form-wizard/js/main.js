$(function(){
    var magicIndex = 1;
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back"
        },
        onStepChanging: function (event, currentIndex, newIndex) { 

            if ( newIndex === 1 ) {
                $('.steps').addClass('step-2');
                magicIndex = 2;
                console.log(magicIndex);
            } else {
                var descrip = $("#sd").val();
                localStorage.setItem("shortDescription", descrip);
                $('.steps').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps').addClass('step-3');
                magicIndex = 3;
                console.log(magicIndex);
                
            } else {
                var firstName = $("#fn").val();
                var lastName = $("#ln").val();
                localStorage.setItem("firstn", firstName);
                localStorage.setItem("lastn", lastName);
                
                $('.steps').removeClass('step-3');
            }
            return true; 
        },
        onFinished: function (event, currentIndex) {
            // do something after finishing, such as submitting the form
            var nationality = $("#nat").val();
            localStorage.setItem("nationality", nationality);
            location.href="/main-pages/profileCard.html";
            }
    });
    
    // Custom Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){

            //magicIndex = magicIndex - 1;
            //console.log(magicIndex);

        $("#wizard").steps('previous');
    })
    // Select
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle().toggleClass('active');
    })
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
    // Payment
    $('.payment-block .payment-item').click(function(){
        $('.payment-block .payment-item').removeClass('active');
        $(this).addClass('active');
    })
    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
})
