// site.js

(function() {
    var ele = document.getElementById("username");
    ele.innerHTML = "Shawn";

    var main = document.getElementById("main");

    main.onmouseenter = function () {
        main.style = "background-color: #888;";
    };

    main.onmouseleave = function () {
        main.style = "";
    };
})();