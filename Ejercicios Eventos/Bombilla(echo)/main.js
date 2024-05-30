const luz = document.querySelector('#bombillaOn');

$('#interruptorOff').click(() => $('#bombillaOff , #interruptorOff').toggle());
$('#interruptorOn').click(() => $('#bombillaOff , #interruptorOff').toggle());


$('#opacity').on('input', function (value) {
    $('#bombillaOp').css({
        opacity: $(this).val() * '.01'
    });
});


