$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }else {
            addUser();
        }

        //@todo
        //1. get values
        var userInput = document.getElementById("username").value;
        console.log(userInput);
        //2. create a new element
        var table = document.getElementById("table table-striped userList");

        var count= 1;

        function addUser() {

            var userInput = document.getElementById("username").value;
            var tr = document.createElement('tr');
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));

            // counter
            var table = document.getElementById("tbl");
            td1.innerHTML = table.rows.length ;
            td2.innerHTML = userInput;
            td3.innerHTML = '<button onclick= "$(this).closest(\'tr\').remove();" type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button>';

            document.getElementById("tbl").appendChild(tr);
            document.getElementById("username").value = '';
        }

        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        $(this).closest('tr').remove();

    });

    // Bei dem counter update hatte ich ein problem und wusste nicht wie ich es lösen sollte.... Goggle half auch nicht leider.

});

