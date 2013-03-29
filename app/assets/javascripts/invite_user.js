$(function() {
    $("#user_in_the_list").hide();
    $("#remove_user").hide();

    $("#add_user").click(add_user);
});

function add_user() {
    user_id = $("#user_id").val();
    user_desc = $("#user_id").find("option:selected").text();

    if (user_desc != "") {
        found = false
        $('#table_users tbody tr').each(function() {
            if ( $(this).attr('id') == "row_" + user_id ) {
                alert($("#user_in_the_list").text());
                found = true;
            }
        });

        if (!found) {
            $('#table_users > tbody:last').append(
                '<tr id="row_' + user_id + '"><td>' + user_desc + '<input type="hidden" name="users[]" value="' + user_id + '" /></td><td><a onclick="remove_user(\'' + user_id + '\')">' + $("#remove_user").text() + '</a></td></tr>'
            );
        }
    }
}

function remove_user(id) {
    $("#row_" + id).remove();
}