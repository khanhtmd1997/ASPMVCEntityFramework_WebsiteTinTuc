﻿(function (d) { var f = false; function e() { var a = window, b = "inner"; if (!("innerWidth" in window)) { b = "client"; a = document.documentElement || document.body } return { width: a[b + "Width"], height: a[b + "Height"] } } showDefaultMenu = function (q, b, o, p) { if (d(o).find("ul").is(".submenu")) { var r = d(o).find("ul.submenu"); if (b.Orientation.toLowerCase() == "vertical" || d(o).parent().is(".submenu")) { r.css("left", r.parent().outerWidth(true)); d(o).css("position", "relative"); var m = d(o).children("a,span").offset().top - d(o).offset().top; m = m + d(o).children("a,span").outerHeight(true); if (!d("#MenuH em").hasClass("sf-sub-indicator") && d("#MenuH select")) { r.css("margin-top", "-" + m + "px"); r.css("margin-left", "0px"); var a = d(o).offset().left + d(o).outerWidth(true); if (a + r.outerWidth() > d(window).width()) { r.css("left", "0px").css("left", "-" + r.outerWidth() + "px") } } } else { var n = d(o).children("a,span").offset().left - d(o).offset().left; if (n > 0) { r.css("margin-left", "-" + n + "px") } var c = d(o).children("a,span").offset().top - d(o).offset().top; if (c > 0) { r.css("margin-top", c + "px") } } } d("ul:first", o).fadeIn(p) }; hideDefaultMenu = function (a, h, c, b) { d("ul.submenu:first", c).hide() }; showAccordionMenu = function (a, h, c, b) { if (h.Event == "hover") { if (d(c).siblings().parent().is(".menu")) { d(c).siblings().children("ul").slideUp(b).parent("li").removeClass("has-children-open").addClass("has-children-close") } d("ul", c).slideDown(b).css({ position: "relative", display: "block" }) } else { if (d("ul.submenu", c).is(".submenu")) { d(c).children("ul").slideDown(b).css({ position: "relative", display: "block" }) } } if (d(c).is(".has-children-close")) { d(c).removeClass("has-children-close").addClass("has-children-open") } }; hideAccordionMenu = function (a, h, c, b) { if (h.Event == "hover") { if (d(c).parent("ul").is(".menu")) { d("ul", c).slideUp(b) } } else { if (d("ul.submenu", c).is(".submenu")) { d(c).children("ul").slideUp(b); if (d(c).parent("ul").css("display") != "none") { d("ul.submenu", c).slideUp(b).parent("li").removeClass("has-children-open").addClass("has-children-close") } } } if (d(c).is(".has-children-open")) { d(c).removeClass("has-children-open").addClass("has-children-close") } }; showMegaMenu = function (J, H, c, x) { d("ul.submenu", J).hide(); d("ul.submenu", J).css({ left: "" }); var F = d(".container").outerWidth(); if (d(c).children("ul").is(".submenu")) { var E = d(c).children("ul.submenu"); E.css("position", "absolute"); if (H.Orientation.toLowerCase() == "vertical") { E.css("left", E.parent().outerWidth(true)); d(c).css("position", "relative"); var K = d(c).children("a,span").offset().top - d(c).offset().top; K = K + d(c).children("a,span").outerHeight(true); E.css("margin-top", "-" + K + "px"); E.css("margin-left", "0px"); var z = d(c).offset().left + d(c).outerWidth(true); if (z > d(window).width() / 2) { E.css("left", "0px").css("left", "-" + E.outerWidth() + "px") } } else { var A = d(c).find("a,span").offset().top - d(c).offset().top; if (A > 0) { E.css("margin-top", A + "px") } if (H.Orientation.toLowerCase() == "horizontal") { var G = parseInt(d(".container").css("padding-left").split("px")[0]); var L = parseInt(d(".container").css("padding-right").split("px")[0]); var C = d(".container").width() + G + L; var a = Math.floor(((d(window).width() - C) / 2)); var I = E.width(); var y = (I - d(c).width()) / 2; var b = d(c).width(); var D = Math.floor(d(c).offset().left - a); var B = C - D - b; if (D + b + y > C) { var w = I - b - B; E.css("left", "-" + w + "px") } else { if (y > D) { E.css("left", "-" + D + "px") } else { if (d(c).hasClass("mega")) { E.css("left", "-" + y + "px") } } } } } } d("ul.submenu", c).fadeIn(x) }; hideMegaMenu = function (a, h, c, b) { d("ul.submenu", a).hide() }; megaMenuWithColumns = function (v, t, C, A, y, B, b, z, a) { z = z.toLowerCase(); if (z == "vertical") { var i = d("#MenuV").width(); var c = parseInt(d(".container").css("padding-left").split("px")[0]); var w = parseInt(d(".container").css("padding-right").split("px")[0]); var x = d(".container").width() - c - w; if (v > A) { A = x - i } else { A = v } } var D = C.children("li"); if (y == true) { C = C.parent() } else { for (var u = 0; u < D.length; u += t) { D.slice(u, u + t).wrapAll("<div class='megamenu-row'></div>") } } C.css("width", a * t + "px"); C.children(".megamenu-row").children("li").css({ display: "table-cell", "max-width": b + "px", "min-width": B + "px", width: v / t + "px" }) }; megaMenuNoColumns = function (t, z, x, y, b, r, a, s, w) { w = w.toLowerCase(); if (w == "vertical") { var q = d("#MenuV").width(); var c = parseInt(d(".container").css("padding-left").split("px")[0]); var u = parseInt(d(".container").css("padding-right").split("px")[0]); var v = d(".container").width() - c - u; x = v - q } if (t <= x) { z.css("width", t); z.children("li").css({ "min-height": a + "px", width: s + "px", "min-width": y + "px", "max-width": b + "px" }) } else { s = parseInt(x / r); maxCol = (100 * s) / x; z.css("width", s * r); z.children("li").css({ "max-width": b + "px", "min-height": a + "px", "min-width": y + "px", width: maxCol + "%" }) } }; showMobileMenu = function (c, a, j, i, b) { if (c == "select") { if (f == false) { d(".menu").parent().each(function () { if (d(this).is("#MenuH")) { d("<select></select><span></span>").appendTo(this); d("<option />", { selected: "selected", value: "", text: "Go to..." }).appendTo("#MenuH select"); var l = d("select", this); var h = d("select + span", this); d("ul li", this).each(function () { var s = d(this), v = s.children("a:first, span:first"), r = s.parents("li"), k = new Array(r.length + 1).join("-"); if (v.html() !== "") { var t = v.text(); var u = d("<option>").text(k + " " + t); u.text().replace("ï¿½", "-"); u.val(v.attr("href")); if (u.val() == "") { u.attr("disabled", "disabled") } u.appendTo(l); if (s.hasClass("current")) { u.attr("selected", "selected") } } }); h.text(l.find("option:selected").text().replace(/^-+/, "").trim()); l.change(function () { window.location = d(this).find("option:selected").val() }); var g = d("#MenuH .menu > .mi:not(.current) > .txt").css("color"); h.css("color", g) } }); f = true } } else { if (c == "toggle") { d("li > ul", a).each(function () { var g = d(this).parent().children("a, span"); if (g.find(".sf-sub-indicator").length <= 0) { g.append('<em class="sf-sub-indicator closed"></em>') } else { g.find(".sf-sub-indicator").removeClass("opened").addClass("closed") } }); d("em.sf-sub-indicator", a).click(function () { var g = d(this).parent().parent("li"); if (d(this).hasClass("closed")) { d(this).removeClass("closed").addClass("opened"); showDefaultMenu(a, j, g, b) } else { d(this).removeClass("opened").addClass("closed"); hideDefaultMenu(a, j, g, b); d(g.children("ul").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed"); hideDefaultMenu(a, j, g.children("ul").children("li"), b); d(g.children("ul").children(".megamenu-row").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed"); hideDefaultMenu(a, j, g.children("ul").children(".megamenu-row").children("li"), b) } return false }) } } }; d.fn.BindMENU = function (a) { var y = "fast"; var x = "hover"; var B = d(this); var A = "toggle"; var z = "768"; if (a.Speed != null) { y = a.Speed.toLowerCase() } if (a.Event != null) { if ((a.Event.toLowerCase() == "hover") || (a.Event.toLowerCase() == "mouseover")) { x = "hover" } else { if ((a.Event.toLowerCase() == "click") || (a.Event.toLowerCase() == "mouseclick")) { x = "click" } } } if (navigator.userAgent.indexOf("MSIE 7") != -1) { d("ul.submenu", this).before('<div style="height: 0px; line-height: 0px; clear: both; overflow: hidden; font-size:0px; position:fixed" />') } eventOpenDefaultMenu = function (i, g, j, h) { if (x == "hover") { d("li", i).hover(function () { showDefaultMenu(g, j, this, h) }, function () { hideDefaultMenu(g, j, this, h) }) } else { d("li > a, li > span", i).click(function (k) { var l = d(this).parent("li"); if (d(l).children("ul").is(".submenu")) { k.preventDefault(); if (d(l).children("ul").css("display") != "none") { hideDefaultMenu(g, j, l, h) } else { d(this).closest("ul").children("li").children("a, span").not(this).parent().find("ul").hide(); showDefaultMenu(g, j, l, h) } } else { d(g).find("ul.submenu").hide() } }) } }; eventOpenAccordionMenu = function (g) { if (x == "hover") { d("li", g).hover(function (h) { h.stopPropagation(); showAccordionMenu(B, a, this, y) }, function (h) { h.stopPropagation(); hideAccordionMenu(B, a, this, y) }) } else { d("li > a, li > span", g).click(function (h) { var i = d(this).parent("li"); if (d(i).children("ul").is(".submenu")) { h.preventDefault(); h.stopPropagation(); if (d(i).children("ul").css("display") != "none") { hideAccordionMenu(B, a, i, y) } else { showAccordionMenu(B, a, i, y) } } }) } }; eventOpenMegaMenu = function (i, g, j, h) { if (x == "hover") { d(i).children("li").hover(function () { showMegaMenu(g, j, this, h) }, function () { hideMegaMenu(g, j, this, h) }) } else { d("li > a, li > span", i).click(function (k) { var l = d(this).parent("li"); if (d(l).children("ul").is(".submenu")) { k.preventDefault(); if (d(l).children("ul").css("display") != "none") { hideMegaMenu(g, j, l, h) } else { showMegaMenu(g, j, l, h) } } else { d(g).find("ul.submenu").hide() } }) } }; if ((a.Orientation.toLowerCase() == "horizontal" && a.MenuStyle.toLowerCase() == "accordion") || a.MenuStyle.toLowerCase() == "defaultmenu") { d("ul.submenu", this).hide().css({ "min-width": "180px", position: "absolute" }); d("ul.submenu", this).children("li.mi").each(function () { if (d(this).children().is("ul")) { d(this).addClass("has-children") } d(this).children(".submenu").css("min-width", "180px") }); eventOpenDefaultMenu(this, B, a, y) } if (a.Orientation.toLowerCase() == "vertical" && a.MenuStyle.toLowerCase() == "accordion") { d(this).closest("#MenuV").addClass("accordion"); d(this).children("li").children("ul").hide(); if (typeof (a.Event) !== "undefined") { a.Event = a.Event.toLowerCase() } else { a.Event = x } if (a.Event == "click") { d("li", this).children("ul").each(function () { d(this).parent("li").addClass("has-children has-children-close") }) } else { d("li", this).each(function () { if (d(this).children().is("ul")) { if (d(this).parent("ul").is(".menu")) { d(this).addClass("has-children has-children-close") } } }) } eventOpenAccordionMenu(this) } if (a.MenuStyle.toLowerCase() == "megamenu") { d(this).parents("#MenuH, #MenuV").addClass("megamenu"); d("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="' + style_mobile_path + 'mobile-megamenu.css" type="text/css" />'); d(this).children("li").children("ul").each(function () { if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") } }); d(this).children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") }); var b = 0; var c = 0; a.MinWidth = parseInt(a.MinWidth); a.MaxWidth = parseInt(a.MaxWidth); if (a.MinWidth > 0) { if (a.MinWidth > a.MaxWidth) { a.MinWidth = 150; a.MaxWidth = 250 } else { a.MinWidth } } else { a.MinWidth = 150 } if (a.MaxWidth > 0) { a.MaxWidth } else { a.MaxWidth = 250 } d(".submenu", this).css({ left: "-9999px", display: "block", visibility: "hidden" }); d(".mega > .submenu", this).each(function () { var g = 0; d(this).children("li").each(function () { g++ }); d("li", this).each(function () { if (d(this).width() > b) { var q = parseInt(d(this).css("padding-left").split("px")[0]); var p = parseInt(d(this).css("padding-right").split("px")[0]); var o = parseInt(d(this).css("margin-left").split("px")[0]); var n = parseInt(d(this).css("margin-right").split("px")[0]); b = d(this).width() + q + p + o + n; if (b > a.MaxWidth) { b = a.MaxWidth; d("a", this).css("white-space", "normal") } else { if (b < a.MinWidth) { b = a.MinWidth } else { b } } if (d(this).outerHeight(true) > c) { c = d(this).outerHeight(true) } } }); var j = parseInt(d(".container").css("padding-left").split("px")[0]); var h = parseInt(d(".container").css("padding-right").split("px")[0]); var l = d(".container").width() + j + h; if (a.MaxColumns && a.MaxColumns > 0 && a.MaxColumns <= g) { var k = d(this); var m = parseInt(b * g); megaMenuWithColumns(m, parseInt(a.MaxColumns), k, l, false, a.MinWidth, a.MaxWidth, a.Orientation, b); var i = d(this).children(".megamenu-row"); d(window).resize(function () { if (d(window).width() >= z) { var o = parseInt(d(".container").css("padding-left").split("px")[0]); var n = parseInt(d(".container").css("padding-right").split("px")[0]); var p = d(".container").width() + o + n; megaMenuWithColumns(m, parseInt(a.MaxColumns), i, p, true, a.MinWidth, a.MaxWidth, a.Orientation, b) } else { d("#MenuH .submenu, #MenuH .megamenu-row > li").removeAttr("style"); d("#MenuH .submenu").css("display", "none") } }) } else { var k = d(this); var m = parseInt(b * g); megaMenuNoColumns(m, d(this), l, a.MinWidth, a.MaxWidth, g, c, b, a.Orientation); var k = d(this); d(window).resize(function () { if (d(window).width() >= z) { var o = parseInt(d(".container").css("padding-left").split("px")[0]); var n = parseInt(d(".container").css("padding-right").split("px")[0]); var p = d(".container").width() + o + n; megaMenuNoColumns(m, k, p, a.MinWidth, a.MaxWidth, g, c, b, a.Orientation) } else { d("#MenuH .submenu, #MenuH .submenu > li").removeAttr("style"); d("#MenuH .submenu").css("display", "none") } }) } }); d(".submenu", this).css({ display: "", visibility: "" }); d(this).children("li").children("ul").hide(); eventOpenMegaMenu(this, B, a, y) } if (a.Orientation.toLowerCase() == "vertical") { var B = d(this); var r = a.MenuStyle.toLowerCase(); if (e().width <= 991) { d("li", B).unbind(); d(".submenu", B).css("position", ""); B.closest("#MenuV").removeClass().addClass("accordion"); d("ul.submenu, ul.submenu > li, li > ul.submenu", B).attr("style", ""); d("li.mega", B).removeClass("mega"); a.MenuStyle = "Accordion"; var t = B.closest("#MenuV"); var s = t.parent(); t.appendTo(s); eventOpenAccordionMenu(this) } d(window).resize(function () { if (e().width <= 991) { d("li", B).unbind(); d("ul.submenu", B).css("position", ""); B.closest("#MenuV").removeClass().addClass("accordion"); d("ul.submenu, ul.submenu > li, li > ul.submenu", B).removeAttr("style"); d("li.mega", B).removeClass("mega"); a.MenuStyle = "Accordion"; var h = B.closest("#MenuV"); var g = h.parent(); h.appendTo(g); eventOpenAccordionMenu(B) } else { var h = B.closest("#MenuV"); var g = h.parent(); h.prependTo(g); d("ul.submenu, li", B).unbind(); B.closest("#MenuV").removeClass(); switch (r) { case "accordion": a.MenuStyle = "Accordion"; B.closest("#MenuV").addClass("accordion"); eventOpenAccordionMenu(B); break; case "defaultmenu": a.MenuStyle = "DefaultMenu"; d("ul.submenu", B).css("position", "absolute"); d("ul.submenu", B).each(function () { d(this).css("min-width", "180px") }); eventOpenDefaultMenu(B, this, a, y); break; case "megamenu": a.MenuStyle = "MegaMenu"; B.closest("#MenuV").addClass("megamenu"); B.children("li").children("ul").each(function () { if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") } if (d(this).children().hasClass("megamenu-row")) { d(this).parent().addClass("mega") } }); B.children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") }); d("li.mega > ul.submenu", B).css("display", "none"); eventOpenMegaMenu(B, B, a, y); break } } }) } if (A && a.Orientation.toLowerCase() == "horizontal") { var w = A.toLowerCase(); var v = z.match(/^[0-9]*$/) ? z : 768; var B = d(this); var u = false; mobileMenu_MediaQuery = function () { d("head").append('<link id="styles-mobile" rel="stylesheet" href="' + style_mobile_path + "mobile-" + w + '.css" type="text/css" />'); d('link[id="styles-mobile-megamenu"]').remove(); if (a.MenuStyle.toLowerCase() == "megamenu" && a.Orientation.toLowerCase() == "horizontal") { B.children("li.mega").removeClass("mega"); B.closest("#MenuH").removeClass("megamenu"); d(".menu > li, .submenu, .submenu > li, .megamenu-row > li", B).removeAttr("style"); d(".submenu", B).css("display", "none") } }; if (e().width < v) { mobileMenu_MediaQuery(); d("li", B).unbind(); showMobileMenu(w, B, a, this, y); u = true } d(window).resize(function () { if (e().width >= v) { if (u == true) { d('#MenuH em.sf-sub-indicator, link[id="styles-mobile"]').remove(); B.closest("#MenuH").children("select, select + span").css("display", "none"); if (a.Orientation.toLowerCase() == "horizontal") { if (a.MenuStyle.toLowerCase() == "defaultmenu") { d("li.mi", B).children("ul.submenu").css({ display: "none", "min-width": "180px", position: "absolute" }); eventOpenDefaultMenu(B, B, a, y) } else { B.closest("#MenuH").addClass("megamenu"); B.children("li").children("ul").each(function () { if (d(this).children("li").children("ul").is(".submenu")) { d(this).parent().addClass("mega") } if (d(this).children().hasClass("megamenu-row")) { d(this).parent().addClass("mega") } }); B.children("li:not(.mega)").each(function () { d(this).children(".submenu").css("min-width", "180px") }); d("li.mi").children("ul.submenu").css({ display: "none" }); d("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="' + style_mobile_path + 'mobile-megamenu.css" type="text/css" />'); eventOpenMegaMenu(B, B, a, y) } } u = false } } else { if (u == false) { mobileMenu_MediaQuery(); B.closest("#MenuH").children("select, select + span").css("display", ""); d("li", B).unbind(); showMobileMenu(w, B, a, this, y); u = true } } }) } } })(jQuery);