// =======================================================
// =======================================================
// Fill Form - Danae's favourite
// =======================================================
// =======================================================

let $body = $('body');

if ((document.location.hostname === 'localhost') || (document.location.hostname === 'stray-booking.dev')) {
    $body.append('<span id="fillform" style="z-index:9;position:fixed;cursor:pointer;right:0;bottom:0;border:0;background:#f5821e;color:white;font: 10px/1.2 arial;padding:3px 10px;">FILL FORM</span>');
}

$body.on('click', '#fillform', function () {

    $.each($('select'), function () {
        $('option:last', $(this)).attr('selected', 'selected');
        $('select').trigger('chosen:updated');
    });

    $.each($('input[type=text]:visible'), function () {
        let $this = $(this);
        let autoFillData = $this.attr('data-autofill');
        let name = $this.attr('name');
        if (!$this.parent().hasClass('chosen-search') && $this.val().length < 1) {
            if (autoFillData) {
                $this.val(autoFillData);
            } else if (name && name.toLowerCase().indexOf('creditcardname') >= 0) {
                $this.val('J DE GRAAF');
            } else if (name && name.toLowerCase().indexOf('quantity') >= 0) {
                $this.val('1');
            } else if (name && name.toLowerCase().indexOf('cvv') >= 0) {
                $this.val('147');
            } else if (name && name.toLowerCase().indexOf('expiryyear') >= 0) {
                $this.val('16');
            } else if (name && name.toLowerCase().indexOf('expirymonth') >= 0) {
                $this.val('05');
            } else if (name && name.toLowerCase().indexOf('creditcardnumber') >= 0) {
                $this.val('4111111111111111');
            } else if (name && name.toLowerCase().indexOf('email') >= 0) {
                $this.val('jd@pinc.nz');
            } else if (name && name.toLowerCase().indexOf('date') >= 0 || name && name.toLowerCase().indexOf('expiry') >= 0 || name && name.toLowerCase().indexOf('dob') >= 0) {
                $this.val(new Moment().startOf('hour').format('YYYY-MM-DD'));
                $this.parent().find('b').text(new Moment().startOf('hour').format('YYYY-MM-DD'));
            } else if (name && name.toLowerCase().indexOf('postalcode') >= 0) {
                $this.val('1061');
            } else if (name && name.toLowerCase().indexOf('phone') >= 0 || name && name.toLowerCase().indexOf('contact') >= 0) {
                $this.val('+64211156667');
            } else if (name && name.toLowerCase().indexOf('state') >= 0) {
                $this.val('Auckland');
            } else if (name && name.toLowerCase().indexOf('city') >= 0) {
                $this.val('Auckland');
            } else if (name && name.toLowerCase().indexOf('addressline2') >= 0) {
                $this.val('Mt Wellington');
            } else if (name && name.toLowerCase().indexOf('address') >= 0) {
                $this.val('261A Penrose Road');
            } else if (name && name.toLowerCase().indexOf('username') >= 0) {
                $this.val('pinc');
            } else if (name && name.toLowerCase().indexOf('country') >= 0) {
                $this.val('New Zealand');
            } else if (name && name.toLowerCase().indexOf('zip') >= 0) {
                $this.val('1064');
            } else if (name && name.toLowerCase().indexOf('policy') >= 0 || name && name.toLowerCase().indexOf('passengerpassport') >= 0) {
                $this.val('2356894');
            } else if (name && name.toLowerCase().indexOf('firstname') >= 0) {
                $this.val('Jaydn');
            } else if (name && name.toLowerCase().indexOf('lastname') >= 0 || name && name.toLowerCase().indexOf('surname') >= 0) {
                $this.val('de Graaf');
            } else if (name && name.toLowerCase().indexOf('insuranceco') >= 0) {
                $this.val('Permanentinc');
            } else {
                $this.val('Jaydn de Graaf');
            }
        }
    });

    $.each($('input[type=number]:visible'), function () {
        let $this = $(this);
        let autoFillData = $this.attr('data-autofill');
        if (autoFillData) {
            $this.val(autoFillData);
        } else {
            $this.val('3');
        }
    });

    $.each($('input[type=email]:visible'), function () {
        let $this = $(this);
        let autoFillData = $this.attr('data-autofill');
        if (autoFillData) {
            $this.val(autoFillData);
        } else {
            $this.val('jd@pinc.nz');
        }
    });

    $.each($('textarea:visible'), function () {
        let $this = $(this);
        let autoFillData = $this.attr('data-autofill');
        if (autoFillData) {
            $this.val(autoFillData);
        } else {
            $this.val('Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.');
        }
    });
});