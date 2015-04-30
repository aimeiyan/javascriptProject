$(function () {
//    homepage login-box focus delete value
    (function () {
        //    居中显示 dropdown-menu
        var w1 = $("#tbt-trigger-dropdown").width();
        var $menu = $('#tbt-trigger-dropdown .dropdown-menu');
        var w2 = $menu.width();
        $menu.css({"left": (w1 - w2) / 2});
    })();

    //error-tip
    $(".help-block").each(function () {
        var $this = $(this);
        // has error message
        if ($.trim($this.text())) {
            $this.css({"visibility": "visible"});
        }
    });

    //  error-box top 30%
    function push_top() {
        var $alert_box = $(".tbt-error-alert");
        var win_height = $(window).height();
        if (win_height < 600) {
            $alert_box.css({"margin-top": win_height * 0.1});
        }
        $alert_box.css({"margin-top": win_height * 0.15});
    }

    push_top();
    $(window).resize(push_top);

    // signup-btn status
    $("#checkbox").change(function () {
        var $btn = $("#tbt-signup-btn");
        if ($(this).is(":checked")) {
            $btn.removeClass("disabled");
        } else {
            $btn.addClass("disabled");
        }
    });

    // modal box
    $(".tbt-detail").click(function () {
        var idx = $(this).attr('data-mode-idx'),
            $model = $("#modal-box-0" + idx);
        $('.tbt-overlay').fadeIn();
        $model.fadeIn();

    });
    $(".tbt-modal-box .closed").click(function () {
        $(".tbt-modal-box,.tbt-overlay").fadeOut();
    });


//    police
    $(".tbt-policy-name").click(function () {
        $(".tbt-ui-xbox-wrapper,.tbt-overlay").fadeIn();
        return false;
    });
    $(".tbt-ui-xbox-close").click(function () {
        $(".tbt-ui-xbox-wrapper,.tbt-overlay").fadeOut();
        return false;
    });

    $('.tbt-agree-btn').click(function () {
        var p = window.parent;
        if (p !== window) {
            $("#tbt-signup-btn", p.document).removeClass('disabled');
            $('.tbt-ui-xbox-wrapper,.tbt-overlay', p.document).fadeOut();
            $('#checkbox', p.document)[0].checked = true;
        }
    });
});
