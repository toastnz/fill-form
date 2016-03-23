<span id="fillform" onclick="fillForm()">FILL FORM</span>
<style>
    #fillform {
        z-index: 9;
        position: fixed;
        cursor: pointer;
        left: 0;
        bottom: 0;
        border: 0;
        opacity: 0.7;
        background: #212121;
        color: white;
        font: 10px/1.2 arial;
        padding: 3px 10px;
        transition: all 120ms;
    }

    #fillform:hover {
        opacity: 1
    }
</style>
<script>
    // =======================================================
    // Fill Form - Danae's favourite
    // =======================================================

    document.onkeydown = handleKeyDown;

    function handleKeyDown(e) {
        var cmndPressed = 0;
        var shiftPressed = 0;
        var evt = (e == null ? event : e);
        shiftPressed = evt.shiftKey;
        cmndPressed = evt.metaKey;
        if (shiftPressed && cmndPressed && evt.keyCode == 70) {
            fillForm();
            return true;
        }
    }

    function fillForm() {
        console.log('Filling in all the things');
        var inputs = document.getElementsByTagName('input');
        for (var a = 0; a < inputs.length; a++) {
            var input = inputs[a];
            switch (input.type) {
                case 'hidden':
                    break;
                case 'text':
                    text(input);
                    break;
                case 'email':
                    email(input);
                    break;
                default:
                    console.log();
            }
        }
        var textareas = document.getElementsByTagName('textarea');
        for (var b = 0; b < textareas.length; b++) {
            textarea(textareas[b]);
        }
        var selects = document.getElementsByTagName('select');
        for (var c = 0; c < selects.length; c++) {
            select(selects[c]);
        }
    }

    function select(input) {
        input.options[input.options.length - 1].selected = true;
    }

    function textarea(input) {
        if (!input.value) {
            input.value = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.';
        }
    }

    function email(input) {
        if (!input.value) {
            input.value = 'john.doe@example.com';
        }
    }

    function text(input) {
        if (!input.value) {
            switch (input.name.toLowerCase()) {
                case 'firstname':
                    input.value = 'John';
                    break;
                case 'lastname':
                    input.value = 'Doe';
                    break;
                case 'name':
                    input.value = 'John Doe';
                    break;
                case 'email':
                    input.value = 'john.doe@example.com';
                    break;
                case 'phone':
                    input.value = '091234567';
                    break;
                case 'mobile':
                    input.value = '0213456789';
                    break;
                case 'quantity':
                    input.value = '1';
                    break;
                default:
                    console.log();
            }
        }
    }
</script>