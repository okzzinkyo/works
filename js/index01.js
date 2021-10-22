$(window).ready(function () {
  $(".start-btn").css("display", "flex");
  // nav background 적용
  if ($(window).scrollTop() != 0) {
    $(".nav-bg").show();
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $(".nav-bg").addClass("nav-stop");
      $(".nav-bg").slideUp(300);
      console.log("nav-bg 나타남");
    } else if ($(".nav-bg").hasClass("nav-stop")) {
      $(".nav-bg").slideDown(300);
      $(".nav-bg").removeClass("nav-stop");
      console.log("nav-bg 사라짐");
    }
  });
});

// Section03(Latest Works) button 효과
$(".header-title").show();
$("#header p").show();
$(".gallery-B").hide();
console.log("header text animation");

// btn - A
function galleryA() {
  if ($(".gallery-A").hasClass("galleryA-show") == false) {
    $(".btn-A").removeClass("clicked");
    $(".btn-B").removeClass("clicked");
    $(".gallery-A > .project-item").show();
    $(".gallery").css("transform", "translateX(0)");
    setTimeout(function () {
      $(".gallery-B").hide();
    }, 1000);
    $(".gallery-A").addClass("galleryA-show");
    $(".gallery-B").removeClass("galleryB-show");
    console.log("galleryA-show");
  }
}
// btn - B
function galleryB() {
  if ($(".gallery-B").hasClass("galleryB-show") == false) {
    $(".btn-A").addClass("clicked");
    $(".btn-B").addClass("clicked");
    $(".gallery-B").show();
    $(".gallery").css("transform", "translateX(-1200px)");
    setTimeout(function () {
      $(".gallery-A > .project-item").hide();
    }, 1000);
    $(".gallery-B").addClass("galleryB-show");
    $(".gallery-A").removeClass("galleryA-show");
    console.log("galleryB-show");
  }
}

// Scroll event에 적용된 jquery
// https://stackoverflow.com/questions/10573021/jquery-scroll-with-timeout
// 위 사이트처럼 clearTimeout 적용해줄것!!!
$(window).scroll(function () {
  // Section01(AboutUs) show & hide
  var scrollTop = $(window).scrollTop();
  var About_position =
    $(".AboutUs-wrap").position().top - $(window).height() / 2;

  if (
    scrollTop >= About_position &&
    $("#AboutUs").hasClass("section01-show") == false
  ) {
    // show animation add
    $("#AboutUs h2").show();
    $("#AboutUs h2").css("animation-name", "fadeInLeft");
    $("#AboutUs p").show();
    $("#AboutUs p").css("animation-name", " fadeInRight");

    $("#AboutUs").addClass("section01-show");
    console.log("Section01 show");
  } else if (
    scrollTop < About_position &&
    $("#AboutUs").hasClass("section01-show") == true
  ) {
    // hide animation add
    $("#AboutUs h2").css("animation-name", "fadeOutLeft");
    $("#AboutUs p").css("animation-name", "fadeOutRight");

    setTimeout(function () {
      $("#AboutUs h2").hide();
      $("#AboutUs p").hide();
    }, 300);

    $("#AboutUs").removeClass("section01-show");
    console.log("Section01 hide");
  }

  // Section02(WhatWeDo) show & hide
  var What_position =
    $(".WhatWeDo-wrap").position().top - $(window).height() / 2;

  if (
    scrollTop >= What_position &&
    $("#WhatWeDo").hasClass("section02-show") == false
  ) {
    // show animation add
    $(".WhatWeDo-title h2").show();
    $(".WhatWeDo-title h2").css("animation-name", "fadeInLeft");

    // item show animation add
    $("#doing-items01").show();
    $("#doing-items01").css("animation-name", "fadeInUP");
    setTimeout(function () {
      $("#doing-items02").show();
      $("#doing-items02").css("animation-name", "fadeInUP");
    }, 300);
    setTimeout(function () {
      $("#doing-items03").show();
      $("#doing-items03").css("animation-name", "fadeInUP");
    }, 500);

    $("#WhatWeDo").addClass("section02-show");
    console.log("section02 show");
  } else if (
    scrollTop < What_position &&
    $("#WhatWeDo").hasClass("section02-show") == true
  ) {
    // hide animation add
    $(".WhatWeDo-title h2").css("animation-name", "fadeOutLeft");

    // item hide animation add
    $("#doing-items03").css("animation-name", "fadeOutDown");
    setTimeout(function () {
      $(".WhatWeDo-title h2").hide();
      $("#doing-items03").hide();
      $("#doing-items02").css("animation-name", "fadeOutDown");
    }, 300);
    setTimeout(function () {
      $("#doing-items02").hide();
      $("#doing-items01").css("animation-name", "fadeOutDown");
    }, 500);
    setTimeout(function () {
      $("#doing-items01").hide();
    }, 700);

    $("#WhatWeDo").removeClass("section02-show");
    console.log("section02 hide");
  }

  // Section03(Latest Works) show & hide
  var Works_position =
    $(".Works-wrap").position().top - $(window).height() / 2;
  if (
    scrollTop >= Works_position &&
    $("#Works").hasClass("section03-show") == false
  ) {
    // show animation add
    $(".Works-title h2").show();
    $(".Works-title h2").css("animation-name", "fadeInLeft");

    // gallery show
    $(".gallery-A").addClass("flex");
    $(".gallery-A").css("animation-name", "fadeInUp");
    console.log("section03 show");

    $("#Works").addClass("section03-show");
  } else if (
    scrollTop < Works_position &&
    $("#Works").hasClass("section03-show") == true
  ) {
    // hide animation add
    $(".Works-title h2").css("animation-name", "fadeOutLeft");
    $(".gallery-A").css("animation-name", "fadeOutDown");
    setTimeout(function () {
      $(".Works-title h2").hide();
      $(".gallery-A").removeClass("flex");
    }, 500);
    console.log("section03 hide");

    $("#Works").removeClass("section03-show");
  }

  // Section04(Meet The Team) show & hide
  var Team_position =
    $(".Team-wrap").position().top - $(window).height() / 2;
  if (
    scrollTop >= Team_position &&
    $("#Team").hasClass("section04-show") == false
  ) {
    // title show animation add
    $(".Team-title h2").show();
    $(".Team-title h2").css("animation-name", "fadeInLeft");

    // member img show
    setTimeout(function () {
      $(".member-img:eq(0)").show().css("animation-name", "ImgShow");
    }, 800);
    setTimeout(function () {
      $(".member-img:eq(1)").show().css("animation-name", "ImgShow");
    }, 1000);
    setTimeout(function () {
      $(".member-img:eq(2)").show().css("animation-name", "ImgShow");
    }, 1200);
    setTimeout(function () {
      $(".member-img:eq(3)").show().css("animation-name", "ImgShow");
    }, 1400);
    console.log("section04 show");

    $("#Team").addClass("section04-show");
  } else if (
    scrollTop < Team_position &&
    $("#Team").hasClass("section04-show") == true
  ) {
    // title hide animation add
    $(".Team-title h2").css("animation-name", "fadeOutLeft");
    setTimeout(function () {
      $(".Team-title h2").hide();
    }, 500);

    // member img hide
    $(".member-img").css("animation-name", "ImgHide");
    setTimeout(function () {
      $(".member-img").hide();
    }, 500);
    console.log("section04 hide");

    $("#Team").removeClass("section04-show");
  }

  // Blockquote
  var blockquote_position =
    $(".blockquote-wrap").position().top - $(window).height() / 2;
  if (
    scrollTop >= blockquote_position &&
    $(".blockquote").hasClass("blockquote-show") == false
  ) {
    //show animation add
    $(".blockquote").addClass("flex");
    $(".blockquote").show();
    $(".blockquote").css("animation-name", "fadeInUp");

    setTimeout(function () {
      $(".wise-saying").show();
      $(".author").show();
      $(".author").css("animation-name", "fadeInUp");
    }, 500);
    setTimeout(function () {
      $(".wise-saying").css("transform", "scale(1)");
    }, 600);
    console.log("blockquote show");

    $(".blockquote").addClass("blockquote-show");
  } else if (
    scrollTop < blockquote_position &&
    $(".blockquote").hasClass("blockquote-show") == true
  ) {
    //hide animation add
    $(".blockquote").css("animation-name", "fadeOutDown");
    setTimeout(function () {
      $(".blockquote").removeClass("flex");
      $(".wise-saying").css("transform", "scale(0.3333333)");
      $(".author").css("animation-name", "fadeOutDown");
    }, 300);
    setTimeout(function () {
      $(".wise-saying").hide();
      $(".author").hide();
    }, 600);
    console.log("blockquote hide");

    $(".blockquote").removeClass("blockquote-show");
  }

  // Section05(Contact Us) show & hide
  var Contact_position =
    $(".Contact-wrap").position().top - $(window).height() / 2;
  if (
    scrollTop >= Contact_position &&
    $("#Contact").hasClass("section05-show") == false
  ) {
    //show animation add
    $(".Contact-title h2").show();
    $(".Contact-title h2").css("animation-name", "fadeInLeft");
    $(".agency-adress").show();
    $(".agency-adress").css("animation-name", "fadeInUp");
    $(".agency-call").show();
    $(".agency-call").css("animation-name", "fadeInUp");
    $("#user-info").show();
    $("#user-info").css("animation-name", "fadeInRight");

    setTimeout(function () {
      $(".agency-name p").show();
      $(".agency-name p").css("animation-name", "fadeInLeft");
    }, 500);
    console.log("section5 show");

    $("#Contact").addClass("section05-show");
  } else if (
    scrollTop < Contact_position &&
    $("#Contact").hasClass("section05-show") == true
  ) {
    // hide animation add
    $(".Contact-title h2").css("animation-name", "fadeOutLeft");
    $(".agency-name p").css("animation-name", "fadeOutLeft");
    $(".agency-adress").css("animation-name", "fadeOutLeft");
    $(".agency-call").css("animation-name", "fadeOutDown");
    $("#user-info").css("animation-name", "fadeOutRight");
    setTimeout(function () {
      $(".Contact-title h2").hide();
      $(".agency-name p").hide();
      $(".agency-adress").hide();
      $(".agency-call").hide();
      $("#user-info").hide();
    }, 300);
    console.log("section5 hide");

    $("#Contact").removeClass("section05-show");
  }
});

// submit 유효성 체크!!
var is_name = 0;
var is_email = 0;
var is_text = 0;

function checkinput() {
  var IDvalue = $("#userID").val();
  var EMAILvalue = $("#userEMAIL").val();
  var TEXTvalue = $("#userTEXT").val();

  if (IDvalue == "" || IDvalue == null) {
    is_name = 0;
    $("#userID").addClass("error");
    $("#ID-error").html(
      "<span class='label ff-desciption fs-tiny'>" +
        "※ 아이디를 입력해주세요." +
        "</span>"
    );
  } else {
    is_name = 1;
    $("#userID").removeClass("error");
    $("#ID-error").html("");
  }

  if (EMAILvalue == "" || EMAILvalue == null) {
    is_email = 0;
    $("#userEMAIL").addClass("error");
    $("#EMAIL-error").html(
      "<span class='label ff-desciption fs-tiny'>" +
        "※ 메일 주소를 입력해주세요." +
        "</span>"
    );
  } else {
    if (isEmail(EMAILvalue)) {
      is_email = 1;
      $("#userEMAIL").removeClass("error");
      $("#EMAIL-error").html("");
    } else {
      is_email = 0;
      $("#userEMAIL").addClass("error");
      $("#EMAIL-error").html(
        "<span class='label ff-desciption fs-tiny'>" +
          "※ 올바른 형식의 메일을 입력해주세요." +
          "</span>"
      );
    }
  }

  if (TEXTvalue == "" || TEXTvalue == null) {
    is_text = 0;
    $("#userTEXT").addClass("error");
    $("#TEXT-error").html(
      "<span class='label ff-desciption fs-tiny'>" +
        "※ 문의하실 내용을 입력해주세요." +
        "</span>"
    );
  } else {
    is_text = 1;
    $("#userTEXT").removeClass("error");
    $("#TEXT-error").html("");
  }
  if (is_name == 1 && is_email == 1 && is_text == 1) {
    $(".btn-submit").submit();
  }

  // 유효성 test 후 input blur시 다시 유효성 test
  $("#userID").blur(function () {
    checkinput();
  });
  $("#userEMAIL").blur(function () {
    checkinput();
  });
  $("#userTEXT").blur(function () {
    checkinput();
  });

  // inputfocus시 error 효과 지우기
  $("#userID").focus(function () {
    $("#userID").removeClass("error");
    $("#ID-error").html("");
  });
  $("#userEMAIL").focus(function () {
    $("#userEMAIL").removeClass("error");
    $("#EMAIL-error").html("");
  });
  $("#userTEXT").focus(function () {
    $("#userTEXT").removeClass("error");
    $("#TEXT-error").html("");
  });
}

function isEmail(EMAILvalue) {
  var regex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(EMAILvalue);
}