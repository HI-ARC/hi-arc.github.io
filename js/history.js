$(function() {
    var id = '#' + $('input[type=radio][name=activity]:checked').val();
    $(id).removeClass('disable');

    $('input[type=radio][name=activity]').change(function() {
        $('.timeline').addClass('disable');

        var id = '#' + this.value;
        $(id).removeClass('disable');
    });
});