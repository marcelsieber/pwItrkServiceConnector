$(document).ready(function() {
    $('#page').change(function() {
        $('#wrap_field .InputfieldContent').html("Wird geladen.");
        $('#editForm').submit();
    });
});