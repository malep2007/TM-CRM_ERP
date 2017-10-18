/*
 Highstock JS v2.1.9 (2015-10-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function() {
    function B() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                typeof a !== "object" && (a = {});
                for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
                return a
            };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function I(a, b) {
        return parseInt(a, b || 10)
    }

    function Ia(a) {
        return typeof a === "string"
    }

    function ha(a) {
        return a &&
            typeof a === "object"
    }

    function Ja(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function ra(a) {
        return typeof a === "number"
    }

    function Ka(a) {
        return Y.log(a) / Y.LN10
    }

    function sa(a) {
        return Y.pow(10, a)
    }

    function ta(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function t(a) {
        return a !== s && a !== null
    }

    function X(a, b, c) {
        var d, e;
        if (Ia(b)) t(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (t(b) && ha(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function na(a) {
        return Ja(a) ?
            a : [a]
    }

    function G(a, b) {
        if (ya && !ea && b && b.opacity !== s) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        w(a.style, b)
    }

    function aa(a, b, c, d, e) {
        a = F.createElement(a);
        b && w(a, b);
        e && G(a, {
            padding: 0,
            border: $,
            margin: 0
        });
        c && G(a, c);
        d && d.appendChild(a);
        return a
    }

    function ia(a, b) {
        var c = function() {
            return s
        };
        c.prototype = new a;
        w(c.prototype, b);
        return c
    }

    function Qa(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function ab(a) {
        return (kb && kb(a) || vb || 0) * 6E4
    }

    function La(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, k = [];
            (c = a.indexOf(c)) !==
            -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++) e = e[g[h]];
                if (f.length) f = f.join(":"), g = /\.([0-9])/, h = N.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = D.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = ja(f, e)
            }
            k.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        k.push(a);
        return k.join("")
    }

    function wb(a) {
        return Y.pow(10, T(Y.log(a) / Y.LN10))
    }

    function xb(a, b, c, d, e) {
        var f, g = a,
            c = p(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c ===
            1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)
            if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        g *= c;
        return g
    }

    function yb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function Ra(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Fa(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function Ma(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(),
            delete a[c]
    }

    function Sa(a) {
        lb || (lb = aa(Ta));
        a && lb.appendChild(a);
        lb.innerHTML = ""
    }

    function oa(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        U.console && console.log(c)
    }

    function la(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Xa(a, b) {
        b.renderer.globalAnimation = p(a, b.animation)
    }

    function Nb() {
        var a = N.global,
            b = a.useUTC,
            c = b ? "getUTC" : "get",
            d = b ? "setUTC" : "set";
        fa = a.Date || window.Date;
        vb = b && a.timezoneOffset;
        kb = b && a.getTimezoneOffset;
        mb = function(a, c, d, h, i, k) {
            var j;
            b ? (j =
                fa.UTC.apply(0, arguments), j += ab(j)) : j = (new fa(a, c, p(d, 1), p(h, 0), p(i, 0), p(k, 0))).getTime();
            return j
        };
        zb = c + "Minutes";
        Ab = c + "Hours";
        Bb = c + "Day";
        bb = c + "Date";
        cb = c + "Month";
        db = c + "FullYear";
        Ob = d + "Milliseconds";
        Pb = d + "Seconds";
        Qb = d + "Minutes";
        Rb = d + "Hours";
        Cb = d + "Date";
        Db = d + "Month";
        Eb = d + "FullYear"
    }

    function Z() {}

    function Ya(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function Sb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total =
            null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: p(b.y, f ? 4 : c ? 14 : -6),
            x: p(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    function Fb(a) {
        var b = a.options,
            c = b.navigator,
            d = c.enabled,
            b = b.scrollbar,
            e = b.enabled,
            f = d ? c.height : 0,
            g = e ? b.height : 0;
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.setBaseSeries();
        this.height = f;
        this.scrollbarHeight =
            g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions = c;
        this.scrollbarOptions = b;
        this.outlineHeight = f + g;
        this.init()
    }

    function Gb(a) {
        this.init(a)
    }
    var s, F = document,
        U = window,
        Y = Math,
        x = Y.round,
        T = Y.floor,
        za = Y.ceil,
        v = Y.max,
        E = Y.min,
        Q = Y.abs,
        ba = Y.cos,
        ga = Y.sin,
        ua = Y.PI,
        pa = ua * 2 / 360,
        Ga = navigator.userAgent,
        Tb = U.opera,
        ya = /(msie|trident|edge)/i.test(Ga) && !Tb,
        nb = F.documentMode === 8,
        ob = !ya && /AppleWebKit/.test(Ga),
        Ua = /Firefox/.test(Ga),
        eb = /(Mobile|Android|Windows Phone)/.test(Ga),
        Na = "http://www.w3.org/2000/svg",
        ea = !!F.createElementNS && !!F.createElementNS(Na, "svg").createSVGRect,
        Yb = Ua && parseInt(Ga.split("Firefox/")[1], 10) < 4,
        ma = !ea && !ya && !!F.createElement("canvas").getContext,
        Va, Za, Ub = {},
        Hb = 0,
        lb, N, ja, Ib, J, ka = function() {
            return s
        },
        ca = [],
        fb = 0,
        Ta = "div",
        $ = "none",
        Zb = /^[0-9]+$/,
        pb = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        $b = "stroke-width",
        fa, mb, vb, kb, zb, Ab, Bb, bb, cb, db, Ob, Pb, Qb, Rb, Cb, Db, Eb, K = {},
        D;
    D = U.Highcharts = U.Highcharts ? oa(16, !0) : {};
    D.seriesTypes = K;
    var w = D.extend = function(a, b) {
            var c;
            a || (a = {});
            for (c in b) a[c] =
                b[c];
            return a
        },
        p = D.pick = function() {
            var a = arguments,
                b, c, d = a.length;
            for (b = 0; b < d; b++)
                if (c = a[b], c !== s && c !== null) return c
        },
        R = D.wrap = function(a, b, c) {
            var d = a[b];
            a[b] = function() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(d);
                return c.apply(this, a)
            }
        };
    ja = function(a, b, c) {
        if (!t(b) || isNaN(b)) return N.lang.invalidDate || "";
        var a = p(a, "%Y-%m-%d %H:%M:%S"),
            d = new fa(b - ab(b)),
            e, f = d[Ab](),
            g = d[Bb](),
            h = d[bb](),
            i = d[cb](),
            k = d[db](),
            j = N.lang,
            m = j.weekdays,
            d = w({
                a: m[g].substr(0, 3),
                A: m[g],
                d: Qa(h),
                e: h,
                w: g,
                b: j.shortMonths[i],
                B: j.months[i],
                m: Qa(i + 1),
                y: k.toString().substr(2, 2),
                Y: k,
                H: Qa(f),
                k: f,
                I: Qa(f % 12 || 12),
                l: f % 12 || 12,
                M: Qa(d[zb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Qa(d.getSeconds()),
                L: Qa(x(b % 1E3), 3)
            }, D.dateFormats);
        for (e in d)
            for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    J = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    D.numberFormat = function(a, b, c, d) {
        var e = N.lang,
            a = +a || 0,
            f = b ===
            -1 ? E((a.toString().split(".")[1] || "").length, 20) : isNaN(b = Q(b)) ? 2 : b,
            b = c === void 0 ? e.decimalPoint : c,
            d = d === void 0 ? e.thousandsSep : d,
            e = a < 0 ? "-" : "",
            c = String(I(a = Q(a).toFixed(f))),
            g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Q(a - c).toFixed(f).slice(2) : "")
    };
    Ib = {
        init: function(a, b, c) {
            var b = b || "",
                d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g, b = b.split(" "),
                c = [].concat(c),
                h, i, k = function(a) {
                    for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g +
                        1], a[g + 2])
                };
            e && (k(b), k(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (c === 1) e = d;
            else if (f === b.length && c < 1)
                for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) +
                    d;
            else e = b;
            return e
        }
    };
    (function(a) {
        U.HighchartsAdapter = U.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, g, h) {
                        return -g * (b /= h) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function(b, e) {
                    var f = c.step,
                        g;
                    e === "cur" ? f = c.prototype : e === "_default" && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c, a = b ? a : this;
                        if (a.prop !== "align") return c = a.elem, c.attr ? c.attr(a.prop, e === "cur" ? s : a.now) : g.apply(this, arguments)
                    })
                });
                R(a.cssHooks.opacity,
                    "get",
                    function(a, b, c) {
                        return b.attr ? b.opacity || 0 : a.call(this, b, c)
                    });
                this.addAnimSetter("d", function(a) {
                    var c = a.elem,
                        f;
                    if (!a.started) f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0;
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    var c, g = a.length;
                    for (c = 0; c < g; c++)
                        if (b.call(a[c], a[c], c, a) === !1) return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart",
                        b = arguments,
                        c, g;
                    if (this[0]) {
                        Ia(b[0]) && (a = b[0],
                            b = Array.prototype.slice.call(b, 1));
                        c = b[0];
                        if (c !== s) c.chart = c.chart || {}, c.chart.renderTo = this[0], new D[a](c, b[1]), g = this;
                        c === s && (g = ca[X(this[0], "data-highcharts-chart")])
                    }
                    return g
                }
            },
            addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {
                    set: c
                } : a.fx.step[b] = c
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b,
                c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = F.removeEventListener ? "removeEventListener" : "detachEvent";
                F[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d)
            },
            fireEvent: function(b, c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !ya && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                w(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            b === "preventDefault" && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g],
                    b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                if (c.pageX === s) c.pageX = a.pageX, c.pageY = a.pageY;
                return c
            },
            animate: function(b, c, d) {
                var e = a(b);
                if (!b.style) b.style = {};
                if (c.d) b.toD = c.d, c.d = 1;
                e.stop();
                c.opacity !== s && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            },
            stop: function(b) {
                b.hasAnim && a(b).stop()
            }
        }
    })(U.jQuery);
    var S = U.HighchartsAdapter,
        M = S || {};
    S && S.init.call(S, Ib);
    var qb = M.adapterRun,
        ac = M.getScript,
        Oa = M.inArray,
        o = D.each = M.each,
        gb = M.grep,
        bc =
        M.offset,
        Aa = M.map,
        A = M.addEvent,
        V = M.removeEvent,
        O = M.fireEvent,
        cc = M.washMouseEvent,
        rb = M.animate,
        $a = M.stop;
    N = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/stock/2.1.9/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/stock/2.1.9/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return this.y === null ? "" : D.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: 0.25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ea,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: eb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var W = N.plotOptions,
        S = W.line;
    Nb();
    var dc = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        ec = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        fc = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        va = function(a) {
            var b = [],
                c, d;
            (function(a) {
                a && a.stops ? d = Aa(a.stops, function(a) {
                    return va(a[1])
                }) : (c = dc.exec(a)) ? b = [I(c[1]), I(c[2]), I(c[3]), parseFloat(c[4], 10)] : (c = ec.exec(a)) ? b = [I(c[1], 16), I(c[2], 16), I(c[3], 16), 1] : (c = fc.exec(a)) && (b = [I(c[1]), I(c[2]), I(c[3]), 1])
            })(a);
            return {
                get: function(c) {
                    var f;
                    d ? (f = B(a), f.stops = [].concat(f.stops), o(d, function(a, b) {
                            f.stops[b] = [f.stops[b][0], a.get(c)]
                        })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," +
                        b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;
                    return f
                },
                brighten: function(a) {
                    if (d) o(d, function(b) {
                        b.brighten(a)
                    });
                    else if (ra(a) && a !== 0) {
                        var c;
                        for (c = 0; c < 3; c++) b[c] += I(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                    }
                    return this
                },
                rgba: b,
                setOpacity: function(a) {
                    b[3] = a;
                    return this
                },
                raw: a
            }
        };
    Z.prototype = {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function(a, b) {
            this.element = b === "span" ? aa(b) : F.createElementNS(Na,
                b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = p(b, this.renderer.globalAnimation, !0);
            $a(this);
            if (b) {
                b = B(b, {});
                if (c) b.complete = c;
                rb(this, a, b)
            } else this.attr(a, null, c);
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, i, k, j, m, l, n, q, r = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                i = d.gradients;
                j = a.stops;
                n = c.radialReference;
                Ja(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                f === "radialGradient" && n && !t(g.gradientUnits) &&
                    (h = g, g = B(g, d.getRadialAttr(n, h), {
                        gradientUnits: "userSpaceOnUse"
                    }));
                for (q in g) q !== "id" && r.push(q, g[q]);
                for (q in j) r.push(j[q]);
                r = r.join(",");
                i[r] ? a = i[r].attr("id") : (g.id = a = "highcharts-" + Hb++, i[r] = k = d.createElement(f).attr(g).add(d.defs), k.radAttr = h, k.stops = [], o(j, function(a) {
                    a[1].indexOf("rgba") === 0 ? (e = va(a[1]), m = e.get("rgb"), l = e.get("a")) : (m = a[1], l = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": m,
                        "stop-opacity": l
                    }).add(k);
                    k.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")");
                c.gradient =
                    r
            }
        },
        applyTextShadow: function(a) {
            var b = this.element,
                c, d = a.indexOf("contrast") !== -1,
                e = {},
                f = this.renderer.forExport,
                g = f || b.style.textShadow !== s && !ya;
            if (d) e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
            if (ob || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function(a) {
                var d = b.firstChild,
                    e, f, a = a.split(" ");
                e = a[a.length - 1];
                (f = a[a.length - 2]) && o(c, function(a,
                    c) {
                    var g;
                    c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
                    g = a.cloneNode(1);
                    X(g, {
                        "class": "highcharts-text-shadow",
                        fill: e,
                        stroke: e,
                        "stroke-opacity": 1 / v(I(f), 3),
                        "stroke-width": f,
                        "stroke-linejoin": "round"
                    });
                    b.insertBefore(g, d)
                })
            }))
        },
        attr: function(a, b, c) {
            var d, e = this.element,
                f, g = this,
                h;
            typeof a === "string" && b !== s && (d = a, a = {}, a[d] = b);
            if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a) {
                    b =
                        a[d];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
                    if (this.rotation && (d === "x" || d === "y")) this.doTransform = !0;
                    h || (this[d + "Setter"] || this._defaultSetter).call(this, b, d, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b)
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1
            }
            c && c();
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a,
                a === "height" ? v(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = X(b, "class") || "";
            c.indexOf(a) === -1 && X(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = p(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : $)
        },
        crisp: function(a) {
            var b, c = {},
                d, e =
                a.strokeWidth || this.strokeWidth || 0;
            d = x(e) % 2 / 2;
            a.x = T(a.x || this.x || 0) + d;
            a.y = T(a.y || this.y || 0) + d;
            a.width = T((a.width || this.width || 0) - 2 * d);
            a.height = T((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            if (a && a.color) a.fill = a.color;
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && I(a.width) || this.textWidth;
                b && (a = w(b, c));
                this.styles = a;
                e && (ma || !ea && this.renderer.forExport) && delete a.width;
                if (ya && !ea) G(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    X(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            Za && a === "click" ? (d.ontouchstart = function(a) {
                c.touchEventFired = fa.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (Ga.indexOf("Android") === -1 || fa.now() - (c.touchEventFired || 0) > 1100) &&
                b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (t(c) || t(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate =
                    b, !c || Ia(c)) this.alignTo = d = c || "renderer", ta(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = x(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = x(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr =
                h;
            return this
        },
        getBBox: function(a) {
            var b, c = this.renderer,
                d, e = this.rotation,
                f = this.element,
                g = this.styles,
                h = e * pa;
            d = this.textStr;
            var i, k = f.style,
                j, m;
            d !== s && (m = ["", e || 0, g && g.fontSize, f.style.width].join(","), m = d === "" || Zb.test(d) ? "num:" + d.toString().length + m : d + m);
            m && !a && (b = c.cache[m]);
            if (!b) {
                if (f.namespaceURI === Na || c.forExport) {
                    try {
                        j = this.fakeTS && function(a) {
                                o(f.querySelectorAll(".highcharts-text-shadow"), function(b) {
                                    b.style.display = a
                                })
                            }, Ua && k.textShadow ? (i = k.textShadow, k.textShadow = "") : j && j($), b = f.getBBox ?
                            w({}, f.getBBox()) : {
                                width: f.offsetWidth,
                                height: f.offsetHeight
                            }, i ? k.textShadow = i : j && j("")
                    } catch (l) {}
                    if (!b || b.width < 0) b = {
                        width: 0,
                        height: 0
                    }
                } else b = this.htmlGetBBox();
                if (c.isSVG) {
                    a = b.width;
                    d = b.height;
                    if (ya && g && g.fontSize === "11px" && d.toPrecision(3) === "16.9") b.height = d = 14;
                    if (e) b.width = Q(d * ga(h)) + Q(a * ba(h)), b.height = Q(d * ba(h)) + Q(a * ga(h))
                }
                m && (c.cache[m] = b)
            }
            return b
        },
        show: function(a) {
            return this.attr({
                visibility: a ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b =
                this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d;
            if (a) this.parentGroup = a;
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            $a(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && o(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div && d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && ta(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, i, k, j;
            if (a) {
                i = p(a.width, 3);
                k = (a.opacity || 0.15) / i;
                j = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f = g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    X(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": k * e,
                        "stroke-width": h,
                        transform: "translate" + j,
                        fill: $
                    });
                    if (c) X(f, "height", v(X(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            this.element.nodeName ===
                "circle" && (a = {
                    x: "cx",
                    y: "cy"
                }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash",
                    "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = I(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b ||
                (b = F.createElementNS(Na, "title"), this.element.appendChild(b));
            b.appendChild(F.createTextNode(String(p(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(a) {
            if (a !== this.textStr) delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)
        },
        fillSetter: function(a, b, c) {
            typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function(a, b) {
            var c = this.renderer,
                d = this.parentGroup,
                c = (d || c).element || c.box,
                e, f, g = this.element,
                h;
            e = this.added;
            var i;
            t(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                if ((a = this.zIndex) && d) d.handleZ = !0;
                d = c.childNodes;
                for (i = 0; i < d.length && !h; i++)
                    if (e = d[i], f = X(e, "zIndex"), e !== g && (I(f) > a || !t(a) && t(f))) c.insertBefore(g, e), h = !0;
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    Z.prototype.yGetter = Z.prototype.xGetter;
    Z.prototype.translateXSetter = Z.prototype.translateYSetter = Z.prototype.rotationSetter = Z.prototype.verticalAlignSetter =
        Z.prototype.scaleXSetter = Z.prototype.scaleYSetter = function(a, b) {
            this[b] = a;
            this.doTransform = !0
        };
    Z.prototype["stroke-widthSetter"] = Z.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], Z.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;
        else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var qa = function() {
        this.init.apply(this,
            arguments)
    };
    qa.prototype = {
        Element: Z,
        init: function(a, b, c, d, e, f) {
            var g = location,
                h, d = this.createElement("svg").attr({
                    version: "1.1"
                }).css(this.getStyle(d));
            h = d.element;
            a.appendChild(h);
            a.innerHTML.indexOf("xmlns") === -1 && X(h, "xmlns", Na);
            this.isSVG = !0;
            this.box = h;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ua || ob) && F.getElementsByTagName("base").length ? g.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(F.createTextNode("Created with Highstock 2.1.9"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var i;
            if (Ua && a.getBoundingClientRect) this.subPixelFix = b = function() {
                G(a, {
                    left: 0,
                    top: 0
                });
                i = a.getBoundingClientRect();
                G(a, {
                    left: za(i.left) - i.left + "px",
                    top: za(i.top) - i.top + "px"
                })
            }, b(), A(U, "resize", b)
        },
        getStyle: function(a) {
            return this.style = w({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Ma(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && V(U, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        getRadialAttr: function(a, b) {
            return {
                cx: a[0] - a[2] / 2 + b.cx * a[2],
                cy: a[1] - a[2] / 2 + b.cy * a[2],
                r: b.r * a[2]
            }
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = p(a.textStr,
                    "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, k = X(b, "x"), j = a.styles, m = a.textWidth, l = j && j.lineHeight, n = j && j.textShadow, q = j && j.textOverflow === "ellipsis", r = g.length, C = m && !a.added && this.box, z = function(a) {
                    return l ? I(l) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : j && j.fontSize || c.style.fontSize || 12, a).h
                }, u = function(a) {
                    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; r--;) b.removeChild(g[r]);
            !f && !n && !q && e.indexOf(" ") === -1 ? b.appendChild(F.createTextNode(u(e))) : (h = /<.*style="([^"]+)".*>/,
                i = /<.*href="(http[^"]+)".*>/, C && C.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), o(e, function(e, f) {
                    var g, l = 0,
                        e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    g = e.split("|||");
                    o(g, function(e) {
                        if (e !== "" || g.length === 1) {
                            var n = {},
                                r = F.createElementNS(Na, "tspan"),
                                C;
                            h.test(e) && (C = e.match(h)[1].replace(/(;| |^)color([ :])/,
                                "$1fill$2"), X(r, "style", C));
                            i.test(e) && !d && (X(r, "onclick", 'location.href="' + e.match(i)[1] + '"'), G(r, {
                                cursor: "pointer"
                            }));
                            e = u(e.replace(/<(.|\n)*?>/g, "") || " ");
                            if (e !== " ") {
                                r.appendChild(F.createTextNode(e));
                                if (l) n.dx = 0;
                                else if (f && k !== null) n.x = k;
                                X(r, n);
                                b.appendChild(r);
                                !l && f && (!ea && d && G(r, {
                                    display: "block"
                                }), X(r, "dy", z(r)));
                                if (m) {
                                    for (var n = e.replace(/([^\^])-/g, "$1- ").split(" "), p = g.length > 1 || f || n.length > 1 && j.whiteSpace !== "nowrap", o, y, s, t = [], v = z(r), x = 1, w = a.rotation, B = e, E = B.length;
                                        (p || q) && (n.length ||
                                            t.length);) a.rotation = 0, o = a.getBBox(!0), s = o.width, !ea && c.forExport && (s = c.measureSpanWidth(r.firstChild.data, a.styles)), o = s > m, y === void 0 && (y = o), q && y ? (E /= 2, B === "" || !o && E < 0.5 ? n = [] : (o && (y = !0), B = e.substring(0, B.length + (o ? -1 : 1) * za(E)), n = [B + (m > 3 ? "\u2026" : "")], r.removeChild(r.firstChild))) : !o || n.length === 1 ? (n = t, t = [], n.length && (x++, r = F.createElementNS(Na, "tspan"), X(r, {
                                        dy: v,
                                        x: k
                                    }), C && X(r, "style", C), b.appendChild(r)), s > m && (m = s)) : (r.removeChild(r.firstChild), t.unshift(n.pop())), n.length && r.appendChild(F.createTextNode(n.join(" ").replace(/- /g,
                                        "-")));
                                    y && a.attr("title", a.textStr);
                                    a.rotation = w
                                }
                                l++
                            }
                        }
                    })
                }), C && C.removeChild(b), n && a.applyTextShadow && a.applyTextShadow(n))
        },
        getContrast: function(a) {
            a = va(a).rgba;
            return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF"
        },
        button: function(a, b, c, d, e, f, g, h, i) {
            var k = this.label(a, b, c, i, null, null, null, null, "button"),
                j = 0,
                m, l, n, q, r, C, a = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                e = B({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: a,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, e);
            n = e.style;
            delete e.style;
            f = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            q = f.style;
            delete f.style;
            g = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            r = g.style;
            delete g.style;
            h = B(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            C = h.style;
            delete h.style;
            A(k.element, ya ? "mouseover" : "mouseenter", function() {
                j !== 3 && k.attr(f).css(q)
            });
            A(k.element, ya ? "mouseout" : "mouseleave", function() {
                j !== 3 && (m = [e, f, g][j], l = [n, q, r][j], k.attr(m).css(l))
            });
            k.setState = function(a) {
                (k.state = j = a) ? a === 2 ? k.attr(g).css(r) :
                    a === 3 && k.attr(h).css(C): k.attr(e).css(n)
            };
            return k.on("click", function(a) {
                j !== 3 && d.call(k, a)
            }).attr(e).css(w({
                cursor: "default"
            }, n))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = x(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = x(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: $
            };
            Ja(a) ? b.d = a : ha(a) && w(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ha(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy",
                    a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            if (ha(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            var e = ha(a) ? a.r : e,
                g = this.createElement("rect"),
                a = ha(a) ? a : a === s ? {} : {
                    x: a,
                    y: b,
                    width: v(c, 0),
                    height: v(d, 0)
                };
            if (f !== s) a.strokeWidth = f, a = g.crisp(a);
            if (e) a.r = e;
            g.rSetter = function(a) {
                X(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return t(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: $
            };
            arguments.length > 1 && w(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a,
            b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(x(b), x(c), d, e, f),
                i = /^url\((.*?)\)$/,
                k, j;
            if (h) g = this.path(h), w(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && w(g, f);
            else if (i.test(a)) j = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(x((d - b[0]) / 2), x((e - b[1]) / 2)))
            }, k = a.match(i)[1], a = Ub[k] || f && f.width && f.height && [f.width, f.height], g = this.image(k).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? j(g, a) : (g.attr({
                width: 0,
                height: 0
            }), aa("img", {
                onload: function() {
                    this.width === 0 && (G(this, {
                        position: "absolute",
                        top: "-999em"
                    }), document.body.appendChild(this));
                    j(g, Ub[k] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this)
                },
                src: k
            }));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    c = e.r || c || d,
                    g = e.end - 0.001,
                    d = e.innerR,
                    h = e.open,
                    i = ba(f),
                    k = ga(f),
                    j = ba(g),
                    g = ga(g),
                    e = e.end - f < ua ? 0 : 1;
                return ["M", a + c * i, b + c * k, "A", c, c, 0, e, 1, a + c * j, b + c * g, h ? "M" : "L", a + d * j, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * k, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = E(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    e = e && e.anchorY,
                    i;
                i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f,
                    b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b
                ];
                h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return i
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Hb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs),
                a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        },
        text: function(a, b, c, d) {
            var e = ma || !ea && this.forExport,
                f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            if (c) f.y = Math.round(c);
            if (a || a === 0) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            if (!d) a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    l;
                for (l = 0; l < d.length; l++) e = d[l], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        },
        fontMetrics: function(a,
            b) {
            var c, d, a = a || this.style.fontSize;
            !a && b && U.getComputedStyle && (b = b.element || b, a = (c = U.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? I(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;
            c = a < 24 ? a + 3 : x(a * 1.2);
            d = x(c * 0.8);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = v(d * ba(b * pa), 4));
            return {
                x: -a / 3 * ga(b * pa),
                y: d
            }
        },
        label: function(a, b, c, d, e, f, g, h, i) {
            function k() {
                var a, b;
                a = q.element.style;
                C = (L === void 0 || Ba === void 0 || n.styles.textAlign) && t(q.textStr) && q.getBBox();
                n.width = (L || C.width || 0) + 2 * u + p;
                n.height =
                    (Ba || C.height || 0) + 2 * u;
                D = u + l.fontMetrics(a && a.fontSize, q).b;
                if (A) {
                    if (!r) a = x(-z * u) + E, b = (h ? -D : 0) + E, n.box = r = d ? l.symbol(d, a, b, n.width, n.height, hb) : l.rect(a, b, n.width, n.height, 0, hb[$b]), r.isImg || r.attr("fill", $), r.add(n);
                    r.isImg || r.attr(w({
                        width: x(n.width),
                        height: x(n.height)
                    }, hb));
                    hb = null
                }
            }

            function j() {
                var a = n.styles,
                    a = a && a.textAlign,
                    b = p + u * (1 - z),
                    c;
                c = h ? 0 : D;
                if (t(L) && C && (a === "center" || a === "right")) b += {
                    center: 0.5,
                    right: 1
                }[a] * (L - C.width);
                if (b !== q.x || c !== q.y) q.attr("x", b), c !== s && q.attr("y", c);
                q.x = b;
                q.y = c
            }

            function m(a,
                b) {
                r ? r.attr(a, b) : hb[a] = b
            }
            var l = this,
                n = l.g(i),
                q = l.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                r, C, z = 0,
                u = 3,
                p = 0,
                L, Ba, v, Jb, E = 0,
                hb = {},
                D, A;
            n.onAdd = function() {
                q.add(n);
                n.attr({
                    text: a || a === 0 ? a : "",
                    x: b,
                    y: c
                });
                r && t(e) && n.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            n.widthSetter = function(a) {
                L = a
            };
            n.heightSetter = function(a) {
                Ba = a
            };
            n.paddingSetter = function(a) {
                if (t(a) && a !== u) u = n.padding = a, j()
            };
            n.paddingLeftSetter = function(a) {
                t(a) && a !== p && (p = a, j())
            };
            n.alignSetter = function(a) {
                z = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[a]
            };
            n.textSetter = function(a) {
                a !== s && q.textSetter(a);
                k();
                j()
            };
            n["stroke-widthSetter"] = function(a, b) {
                a && (A = !0);
                E = a % 2 / 2;
                m(b, a)
            };
            n.strokeSetter = n.fillSetter = n.rSetter = function(a, b) {
                b === "fill" && a && (A = !0);
                m(b, a)
            };
            n.anchorXSetter = function(a, b) {
                e = a;
                m(b, x(a) - E - v)
            };
            n.anchorYSetter = function(a, b) {
                f = a;
                m(b, a - Jb)
            };
            n.xSetter = function(a) {
                n.x = a;
                z && (a -= z * ((L || C.width) + u));
                v = x(a);
                n.attr("translateX", v)
            };
            n.ySetter = function(a) {
                Jb = n.y = x(a);
                n.attr("translateY", Jb)
            };
            var F = n.css;
            return w(n, {
                css: function(a) {
                    if (a) {
                        var b = {},
                            a = B(a);
                        o(n.textProps, function(c) {
                            a[c] !== s && (b[c] = a[c],
                                delete a[c])
                        });
                        q.css(b)
                    }
                    return F.call(n, a)
                },
                getBBox: function() {
                    return {
                        width: C.width + 2 * u,
                        height: C.height + 2 * u,
                        x: C.x - u,
                        y: C.y - u
                    }
                },
                shadow: function(a) {
                    r && r.shadow(a);
                    return n
                },
                destroy: function() {
                    V(n.element, "mouseenter");
                    V(n.element, "mouseleave");
                    q && (q = q.destroy());
                    r && (r = r.destroy());
                    Z.prototype.destroy.call(n);
                    n = l = k = j = m = null
                }
            })
        }
    };
    Va = qa;
    w(Z.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            if (a && a.textOverflow ===
                "ellipsis") a.whiteSpace = "nowrap", a.overflow = "hidden";
            this.styles = w(this.styles, a);
            G(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element;
            if (a.nodeName === "text") a.style.position = "absolute";
            return {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[g],
                    i = this.shadows,
                    k = this.styles;
                G(b, {
                    marginLeft: c,
                    marginTop: d
                });
                i && o(i, function(a) {
                    G(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && o(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var j = this.rotation,
                        m, l = I(this.textWidth),
                        n = [j, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
                    if (n !== this.cTT) {
                        m = a.fontMetrics(b.style.fontSize).b;
                        t(j) && this.setSpanRotation(j, h, m);
                        i = p(this.elemWidth, b.offsetWidth);
                        if (i > l && /[ \-]/.test(b.textContent || b.innerText)) G(b, {
                            width: l + "px",
                            display: "block",
                            whiteSpace: k &&
                                k.whiteSpace || "normal"
                        }), i = l;
                        this.getSpanCorrection(i, m, h, j, g)
                    }
                    G(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    if (ob) m = b.offsetHeight;
                    this.cTT = n
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a, b, c) {
            var d = {},
                e = ya ? "-ms-transform" : ob ? "-webkit-transform" : Ua ? "MozTransform" : Tb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Ua ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
            G(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    w(qa.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
                d.htmlUpdateTransform()
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                b === "align" && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({
                text: a,
                x: x(b),
                y: x(c)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            if (f.isSVG) d.add = function(a) {
                var b,
                    c = f.box.parentNode,
                    k = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) k.push(a), a = a.parentGroup;
                        o(k.reverse(), function(a) {
                            var d, e = X(a.element, "class");
                            e && (e = {
                                className: e
                            });
                            b = a.div = a.div || aa(Ta, e, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            w(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            o(["opacity", "visibility"], function(b) {
                                R(a, b + "Setter", function(a, b,
                                    c, e) {
                                    a.call(this, b, c, e);
                                    d[c] = b
                                })
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    var ib;
    if (!ea && !ma) M = {
            init: function(a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'],
                    d = ["position: ", "absolute", ";"],
                    e = b === Ta;
                (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = aa(c);
                this.renderer = a
            },
            add: function(a) {
                var b =
                    this.renderer,
                    c = this.element,
                    d = b.box,
                    d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                return this
            },
            updateTransform: Z.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var a = this.rotation,
                    b = ba(a * pa),
                    c = ga(a * pa);
                G(this.element, {
                    filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : $
                })
            },
            getSpanCorrection: function(a, b, c, d, e) {
                var f = d ? ba(d * pa) : 1,
                    g = d ? ga(d * pa) : 0,
                    h = p(this.elemHeight, this.element.offsetHeight),
                    i;
                this.xCorr = f < 0 && -a;
                this.yCorr = g < 0 && -h;
                i = f * g < 0;
                this.xCorr += g * b * (i ? 1 - c : c);
                this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
                e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), G(this.element, {
                    textAlign: e
                }))
            },
            pathToVML: function(a) {
                for (var b = a.length, c = []; b--;)
                    if (ra(a[b])) c[b] = x(a[b] * 10) - 5;
                    else if (a[b] === "Z") c[b] = "x";
                else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] ===
                    c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
                return c.join(" ") || "x"
            },
            clip: function(a) {
                var b = this,
                    c;
                a ? (c = a.members, ta(c, b), c.push(b), b.destroyClip = function() {
                    ta(c, b)
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                    clip: nb ? "inherit" : "rect(auto)"
                });
                return b.css(a)
            },
            css: Z.prototype.htmlCss,
            safeRemoveChild: function(a) {
                a.parentNode && Sa(a)
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                return Z.prototype.destroy.apply(this)
            },
            on: function(a, b) {
                this.element["on" +
                    a] = function() {
                    var a = U.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            },
            cutOffPath: function(a, b) {
                var c, a = a.split(/[ ,]/);
                c = a.length;
                if (c === 9 || c === 11) a[c - 4] = a[c - 2] = I(a[c - 2]) - 10 * b;
                return a.join(" ")
            },
            shadow: function(a, b, c) {
                var d = [],
                    e, f = this.element,
                    g = this.renderer,
                    h, i = f.style,
                    k, j = f.path,
                    m, l, n, q;
                j && typeof j.value !== "string" && (j = "x");
                l = j;
                if (a) {
                    n = p(a.width, 3);
                    q = (a.opacity || 0.15) / n;
                    for (e = 1; e <= 3; e++) {
                        m = n * 2 + 1 - 2 * e;
                        c && (l = this.cutOffPath(j.value, m + 0.5));
                        k = ['<shape isShadow="true" strokeweight="', m, '" filled="false" path="',
                            l, '" coordsize="10 10" style="', f.style.cssText, '" />'
                        ];
                        h = aa(g.prepVML(k), null, {
                            left: I(i.left) + p(a.offsetX, 1),
                            top: I(i.top) + p(a.offsetY, 1)
                        });
                        if (c) h.cutOff = m + 1;
                        k = ['<stroke color="', a.color || "black", '" opacity="', q * e, '"/>'];
                        aa(g.prepVML(k), null, null, h);
                        b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                        d.push(h)
                    }
                    this.shadows = d
                }
                return this
            },
            updateShadows: ka,
            setAttr: function(a, b) {
                nb ? this.element[a] = b : this.element.setAttribute(a, b)
            },
            classSetter: function(a) {
                this.element.className = a
            },
            dashstyleSetter: function(a,
                b, c) {
                (c.getElementsByTagName("stroke")[0] || aa(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
                this[b] = a
            },
            dSetter: function(a, b, c) {
                var d = this.shadows,
                    a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (d)
                    for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a)
            },
            fillSetter: function(a, b, c) {
                var d = c.nodeName;
                if (d === "SPAN") c.style.color = a;
                else if (d !== "IMG") c.filled = a !== $, this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
            },
            opacitySetter: ka,
            rotationSetter: function(a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -x(ga(a * pa) + 1) + "px";
                c.top = x(ba(a * pa)) + "px"
            },
            strokeSetter: function(a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b))
            },
            "stroke-widthSetter": function(a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                ra(a) && (a += "px");
                this.setAttr("strokeweight", a)
            },
            titleSetter: function(a, b) {
                this.setAttr(b, a)
            },
            visibilitySetter: function(a, b, c) {
                a === "inherit" && (a = "visible");
                this.shadows && o(this.shadows, function(c) {
                    c.style[b] = a
                });
                c.nodeName === "DIV" && (a = a === "hidden" ?
                    "-999em" : 0, nb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            },
            xSetter: function(a, b, c) {
                this[b] = a;
                b === "x" ? b = "left" : b === "y" && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            },
            zIndexSetter: function(a, b, c) {
                c.style[b] = a
            }
        }, D.VMLElement = M = ia(Z, M), M.prototype.ySetter = M.prototype.widthSetter = M.prototype.heightSetter = M.prototype.xSetter, M = {
            Element: M,
            isIE8: Ga.indexOf("MSIE 8.0") > -1,
            init: function(a, b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement(Ta).css(w(this.getStyle(d), {
                    position: "relative"
                }));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.cache = {};
                this.setSize(b, c, !1);
                if (!F.namespaces.hcv) {
                    F.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        F.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (f) {
                        F.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(a, b, c, d) {
                var e = this.createElement(),
                    f = ha(a);
                return w(e, {
                    members: [],
                    count: 0,
                    left: (f ? a.x : a) + 1,
                    top: (f ? a.y : b) + 1,
                    width: (f ? a.width : c) - 1,
                    height: (f ? a.height : d) - 1,
                    getCSS: function(a) {
                        var b = a.element,
                            c = b.nodeName,
                            a = a.inverted,
                            d = this.top - (c === "shape" ? b.offsetTop : 0),
                            e = this.left,
                            b = e + this.width,
                            f = d + this.height,
                            d = {
                                clip: "rect(" + x(a ? e : d) + "px," + x(a ? f : b) + "px," + x(a ? b : f) + "px," + x(a ? d : e) + "px)"
                            };
                        !a && nb && c === "DIV" && w(d, {
                            width: b + "px",
                            height: f + "px"
                        });
                        return d
                    },
                    updateClipping: function() {
                        o(e.members, function(a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }
                })
            },
            color: function(a, b, c, d) {
                var e = this,
                    f, g = /^rgba/,
                    h, i, k = $;
                a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                if (i) {
                    var j, m, l = a.linearGradient || a.radialGradient,
                        n, q, r, C, p, u = "",
                        a = a.stops,
                        y, L = [],
                        Ba = function() {
                            h = ['<fill colors="' + L.join(",") + '" opacity="', r, '" o:opacity2="', q, '" type="', i, '" ', u, 'focus="100%" method="any" />'];
                            aa(e.prepVML(h), null, null, b)
                        };
                    n = a[0];
                    y = a[a.length - 1];
                    n[0] > 0 && a.unshift([0, n[1]]);
                    y[0] < 1 && a.push([1, y[1]]);
                    o(a, function(a, b) {
                        g.test(a[1]) ? (f = va(a[1]), j = f.get("rgb"), m = f.get("a")) : (j = a[1], m = 1);
                        L.push(a[0] * 100 + "% " + j);
                        b ? (r = m, C = j) : (q = m, p = j)
                    });
                    if (c === "fill")
                        if (i === "gradient") c = l.x1 || l[0] || 0, a = l.y1 || l[1] || 0, n = l.x2 || l[2] || 0, l = l.y2 || l[3] || 0, u = 'angle="' + (90 - Y.atan((l - a) / (n - c)) * 180 / ua) + '"', Ba();
                        else {
                            var k = l.r,
                                s = k * 2,
                                t = k * 2,
                                v = l.cx,
                                x = l.cy,
                                w = b.radialReference,
                                B, k = function() {
                                    w && (B = d.getBBox(), v += (w[0] - B.x) / B.width - 0.5, x += (w[1] - B.y) / B.height - 0.5, s *= w[2] / B.width, t *= w[2] / B.height);
                                    u = 'src="' + N.global.VMLRadialGradientURL +
                                        '" size="' + s + "," + t + '" origin="0.5,0.5" position="' + v + "," + x + '" color2="' + p + '" ';
                                    Ba()
                                };
                            d.added ? k() : d.onAdd = k;
                            k = C
                        }
                    else k = j
                } else if (g.test(a) && b.tagName !== "IMG") f = va(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], aa(this.prepVML(h), null, null, b), k = f.get("rgb");
                else {
                    k = b.getElementsByTagName(c);
                    if (k.length) k[0].opacity = 1, k[0].type = "solid";
                    k = a
                }
                return k
            },
            prepVML: function(a) {
                var b = this.isIE8,
                    a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>",
                    ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a
            },
            text: qa.prototype.html,
            path: function(a) {
                var b = {
                    coordsize: "10 10"
                };
                Ja(a) ? b.d = a : ha(a) && w(b, a);
                return this.createElement("shape").attr(b)
            },
            circle: function(a, b, c) {
                var d = this.symbol("circle");
                if (ha(a)) c = a.r, b = a.y, a = a.x;
                d.isCircle = !0;
                d.r = c;
                return d.attr({
                    x: a,
                    y: b
                })
            },
            g: function(a) {
                var b;
                a && (b = {
                    className: "highcharts-" + a,
                    "class": "highcharts-" +
                        a
                });
                return this.createElement(Ta).attr(b)
            },
            image: function(a, b, c, d, e) {
                var f = this.createElement("img").attr({
                    src: a
                });
                arguments.length > 1 && f.attr({
                    x: b,
                    y: c,
                    width: d,
                    height: e
                });
                return f
            },
            createElement: function(a) {
                return a === "rect" ? this.symbol(a) : qa.prototype.createElement.call(this, a)
            },
            invertChild: function(a, b) {
                var c = this,
                    d = b.style,
                    e = a.tagName === "IMG" && a.style;
                G(a, {
                    flip: "x",
                    left: I(d.width) - (e ? I(e.top) : 1),
                    top: I(d.height) - (e ? I(e.left) : 1),
                    rotation: -90
                });
                o(a.childNodes, function(b) {
                    c.invertChild(b, a)
                })
            },
            symbols: {
                arc: function(a,
                    b, c, d, e) {
                    var f = e.start,
                        g = e.end,
                        h = e.r || c || d,
                        c = e.innerR,
                        d = ba(f),
                        i = ga(f),
                        k = ba(g),
                        j = ga(g);
                    if (g - f === 0) return ["x"];
                    f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * k, b + h * j];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * k, b + c * j, a + c * d, b + c * i, "x", "e");
                    f.isArc = !0;
                    return f
                },
                circle: function(a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                },
                rect: function(a, b, c, d, e) {
                    return qa.prototype.symbols[!t(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
                }
            }
        },
        D.VMLRenderer = ib = function() {
            this.init.apply(this, arguments)
        }, ib.prototype = B(qa.prototype, M), Va = ib;
    qa.prototype.measureSpanWidth = function(a, b) {
        var c = F.createElement("span"),
            d;
        d = F.createTextNode(a);
        c.appendChild(d);
        G(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Sa(c);
        return d
    };
    var Vb;
    if (ma) D.CanVGRenderer = M = function() {
        Na = "http://www.w3.org/1999/xhtml"
    }, M.prototype.symbols = {}, Vb = function() {
        function a() {
            var a = b.length,
                d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }
        var b = [];
        return {
            push: function(c, d) {
                b.length === 0 && ac(d,
                    a);
                b.push(c)
            }
        }
    }(), Va = M;
    Ya.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.categories,
                e = a.names,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                i = f === h[0],
                k = f === h[h.length - 1],
                e = d ? p(d[f], e[f], f) : f,
                d = this.label,
                h = h.info,
                j;
            a.isDatetimeAxis && h && (j = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = k;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: k,
                dateTimeLabelFormat: j,
                value: a.isLog ? la(sa(e)) : e
            });
            t(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label =
                d = t(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(B(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(a) {
            var b = this.axis,
                c = a.x,
                d = b.chart.chartWidth,
                e = b.chart.spacing,
                f = p(b.labelLeft, E(b.pos, e[3])),
                e = p(b.labelRight, v(b.pos + b.len, d - e[1])),
                g = this.label,
                h = this.rotation,
                i = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[b.labelAlign],
                k = g.getBBox().width,
                j = b.slotWidth,
                m = 1,
                l, n = {};
            if (h) h < 0 && c - i * k < f ? l = x(c / ba(h * pa) - f) : h > 0 && c + i * k > e && (l = x((d - c) / ba(h * pa)));
            else if (d = c + (1 - i) * k, c - i * k < f ? j = a.x + j * (1 - i) - f : d > e && (j = e - a.x + j * i, m = -1), j = E(b.slotWidth, j), j < b.slotWidth && b.labelAlign === "center" && (a.x += m * (b.slotWidth - j - i * (b.slotWidth - E(k, j)))), k > j || b.autoRotation && g.styles.width) l = j;
            if (l) {
                n.width = l;
                if (!b.options.labels.style.textOverflow) n.textOverflow = "ellipsis";
                g.css(n)
            }
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b +
                    c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis,
                k = i.transA,
                j = i.reversed,
                m = i.staggerLines,
                l = i.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                c = p(e.y, l.y + (i.side === 2 ? 8 : -(c.getBBox().height / 2))),
                a = a + e.x + l.x - (f && d ? f * k * (j ? -1 : 1) : 0),
                b = b + c - (f && !d ? f * k * (j ? 1 : -1) : 0);
            m && (b += g / (h || 1) % m * (i.labelOffset / m));
            return {
                x: a,
                y: x(b)
            }
        },
        getMarkPath: function(a,
            b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                i = this.label,
                k = this.pos,
                j = e.labels,
                m = this.gridLine,
                l = h ? h + "Grid" : "grid",
                n = h ? h + "Tick" : "tick",
                q = e[l + "LineWidth"],
                r = e[l + "LineColor"],
                C = e[l + "LineDashStyle"],
                z = e[n + "Length"],
                l = p(e[n + "Width"], !h && d.isXAxis ? 1 : 0),
                u = e[n + "Color"],
                o = e[n + "Position"],
                n = this.mark,
                L = j.step,
                Ba = !0,
                t = d.tickmarkOffset,
                v = this.getPosition(g, k, t, b),
                x = v.x,
                v = v.y,
                w = g && x === d.pos + d.len ||
                !g && v === d.pos ? -1 : 1,
                c = p(c, 1);
            this.isActive = !0;
            if (q) {
                k = d.getPlotLinePath(k + t, q * w, b, !0);
                if (m === s) {
                    m = {
                        stroke: r,
                        "stroke-width": q
                    };
                    if (C) m.dashstyle = C;
                    if (!h) m.zIndex = 1;
                    if (b) m.opacity = 0;
                    this.gridLine = m = q ? f.path(k).attr(m).add(d.gridGroup) : null
                }
                if (!b && m && k) m[this.isNew ? "attr" : "animate"]({
                    d: k,
                    opacity: c
                })
            }
            if (l && z) o === "inside" && (z = -z), d.opposite && (z = -z), h = this.getMarkPath(x, v, z, l * w, g, f), n ? n.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: u,
                "stroke-width": l,
                opacity: c
            }).add(d.axisGroup);
            if (i && !isNaN(x)) i.xy =
                v = this.getLabelPosition(x, v, i, g, j, t, a, L), this.isFirst && !this.isLast && !p(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? Ba = !1 : g && !d.isRadial && !j.step && !j.rotation && !b && c !== 0 && this.handleOverflow(v), L && a % L && (Ba = !1), Ba && !isNaN(v.y) ? (v.opacity = c, i[this.isNew ? "attr" : "animate"](v), this.isNew = !1) : i.attr("y", -9999)
        },
        destroy: function() {
            Ma(this, this.axis)
        }
    };
    D.PlotLineOrBand = function(a, b) {
        this.axis = a;
        if (b) this.options = b, this.id = b.id
    };
    D.PlotLineOrBand.prototype = {
        render: function() {
            var a =
                this,
                b = a.axis,
                c = b.horiz,
                d = a.options,
                e = d.label,
                f = a.label,
                g = d.width,
                h = d.to,
                i = d.from,
                k = t(i) && t(h),
                j = d.value,
                m = d.dashStyle,
                l = a.svgElem,
                n = [],
                q, r = d.color,
                C = d.zIndex,
                p = d.events,
                u = {},
                o = b.chart.renderer;
            b.isLog && (i = Ka(i), h = Ka(h), j = Ka(j));
            if (g) {
                if (n = b.getPlotLinePath(j, g), u = {
                        stroke: r,
                        "stroke-width": g
                    }, m) u.dashstyle = m
            } else if (k) {
                n = b.getPlotBandPath(i, h, d);
                if (r) u.fill = r;
                if (d.borderWidth) u.stroke = d.borderColor, u["stroke-width"] = d.borderWidth
            } else return;
            if (t(C)) u.zIndex = C;
            if (l)
                if (n) l.animate({
                    d: n
                }, null, l.onGetPath);
                else {
                    if (l.hide(), l.onGetPath = function() {
                            l.show()
                        }, f) a.label = f = f.destroy()
                }
            else if (n && n.length && (a.svgElem = l = o.path(n).attr(u).add(), p))
                for (q in d = function(b) {
                        l.on(b, function(c) {
                            p[b].apply(a, [c])
                        })
                    }, p) d(q);
            if (e && t(e.text) && n && n.length && b.width > 0 && b.height > 0) {
                e = B({
                    align: c && k && "center",
                    x: c ? !k && 4 : 10,
                    verticalAlign: !c && k && "middle",
                    y: c ? k ? 16 : 10 : k ? 6 : -4,
                    rotation: c && !k && 90
                }, e);
                if (!f) {
                    u = {
                        align: e.textAlign || e.align,
                        rotation: e.rotation
                    };
                    if (t(C)) u.zIndex = C;
                    a.label = f = o.text(e.text, 0, 0, e.useHTML).attr(u).css(e.style).add()
                }
                b = [n[1], n[4], k ? n[6] : n[1]];
                k = [n[2], n[5], k ? n[7] : n[2]];
                n = Ra(b);
                c = Ra(k);
                f.align(e, !1, {
                    x: n,
                    y: c,
                    width: Fa(b) - n,
                    height: Fa(k) - c
                });
                f.show()
            } else f && f.hide();
            return a
        },
        destroy: function() {
            ta(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Ma(this)
        }
    };
    var H = D.Axis = function() {
        this.init.apply(this, arguments)
    };
    H.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0,
                y: 15
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return D.numberFormat(this.total, -1)
                },
                style: B(W.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible =
                d.visible !== !1;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names = this.names || [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = t(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair =
                p(d.crosshair, na(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            Oa(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed === s) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) A(this, f, d[f]);
            if (this.isLog) this.val2lin = Ka, this.lin2val = sa
        },
        setOptions: function(a) {
            this.options = B(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], B(N[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = N.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = La(h, this);
            else if (c) g = b;
            else if (d) g = ja(d, b);
            else if (f && a >= 1E3)
                for (; f-- && g === s;) c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !==
                    null && (g = D.numberFormat(b / c, -1) + e[f]);
            g === s && (g = Q(b) >= 1E4 ? D.numberFormat(b, -1) : D.numberFormat(b, -1, s, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            o(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options,
                        e = d.threshold,
                        f;
                    a.hasVisibleSeries = !0;
                    a.isLog && e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length) a.dataMin = E(p(a.dataMin, d[0]),
                            Ra(d)), a.dataMax = v(p(a.dataMax, d[0]), Fa(d))
                    } else {
                        c.getExtremes();
                        f = c.dataMax;
                        c = c.dataMin;
                        if (t(c) && t(f)) a.dataMin = E(p(a.dataMin, c), c), a.dataMax = v(p(a.dataMax, f), f);
                        if (t(e)) a.threshold = e;
                        if (!d.softThreshold || a.isLog) a.softThreshold = !1
                    }
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this,
                h = 1,
                i = 0,
                k = d ? g.oldTransA : g.transA,
                d = d ? g.oldMin : g.min,
                j = g.minPixelPadding,
                e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            if (!k) k = g.transA;
            if (c) h *= -1, i = g.len;
            g.reversed && (h *= -1, i -= h * (g.sector || g.len));
            b ? (a =
                a * h + i, a -= j, a = a / k + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * k + i + h * j + (ra(f) ? k * f * g.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                i, k, j = c && f.oldChartHeight || f.chartHeight,
                m = c && f.oldChartWidth || f.chartWidth,
                l;
            i = this.transB;
            var n = function(a, b, c) {
                    if (a <
                        b || a > c) d ? a = E(v(b, a), c) : l = !0;
                    return a
                },
                e = p(e, this.translate(a, null, null, c)),
                a = c = x(e + i);
            i = k = x(j - e - i);
            isNaN(e) ? l = !0 : this.horiz ? (i = h, k = j - this.bottom, a = c = n(a, g, g + this.width)) : (a = g, c = m - this.right, i = k = n(i, h, h + this.height));
            return l && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, k], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = la(T(b / a) * a),
                f = la(za(c / a) * a),
                g = [];
            if (b === c && ra(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = la(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f,
                g = f - e;
            if (g && g / c < this.len / 3)
                if (this.isLog) {
                    f = b.length;
                    for (e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0))
                } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
            else
                for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function() {
            var a =
                this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, i, k, j;
            if (this.isXAxis && this.minRange === s && !this.isLog) t(a.min) || t(a.max) ? this.minRange = null : (o(this.series, function(a) {
                i = a.xData;
                for (g = k = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                    if (h = i[g] - i[g - 1], f === s || h < f) f = h
            }), this.minRange = E(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                j = this.minRange;
                d = (j - c + b) / 2;
                d = [b - d, p(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = Fa(d);
                c = [b + j, p(a.max, b + j)];
                if (e) c[2] = this.dataMax;
                c = Ra(c);
                c - b < j && (d[0] =
                    c - j, d[1] = p(a.min, c - j), b = Fa(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                i = !!b.categories,
                k = b.transA,
                j = b.isXAxis;
            if (j || i || d)
                if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : o(b.series, function(a) {
                        var c = i ? 1 : j ? a.pointRange : b.axisPointRange || 0,
                            h = a.options.pointPlacement,
                            k = a.closestPointRange;
                        d = v(d, c);
                        b.single || (f = v(f, Ia(h) ? 0 : c / 2), g = v(g, h === "on" ? 0 : c));
                        !a.noSharedTooltip && t(k) && (e = t(e) ? E(e, k) : k)
                    }), h = b.ordinalSlope && e ?
                    b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = E(d, c), j) b.closestPointRange = e;
            if (a) b.oldTransA = k;
            b.translationSlope = b.transA = k = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = k * f
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                i = d.maxPadding,
                k = d.minPadding,
                j = d.tickInterval,
                m = d.tickPixelInterval,
                l = b.categories,
                n = b.threshold,
                q = b.softThreshold,
                r, C, z, u;
            !f && !l && !h && this.getTickAmount();
            z = p(b.userMin, d.min);
            u = p(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && oa(11, 1)) : (!q && t(n) && (b.dataMin >= n ? (r = n, k = 0) : b.dataMax <= n && (C = n, i = 0)), b.min = p(z, r, b.dataMin), b.max = p(u, C, b.dataMax));
            if (e) !a && E(b.min, p(b.dataMin, b.min)) <= 0 && oa(10, 1), b.min = la(Ka(b.min), 15), b.max = la(Ka(b.max), 15);
            if (b.range && t(b.max)) b.userMin = b.min = z = v(b.min,
                b.minFromRange()), b.userMax = u = b.max, b.range = null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!l && !b.axisPointRange && !b.usePercentage && !h && t(b.min) && t(b.max) && (c = b.max - b.min)) !t(z) && k && (b.min -= c * k), !t(u) && i && (b.max += c * i);
            if (ra(d.floor)) b.min = v(b.min, d.floor);
            if (ra(d.ceiling)) b.max = E(b.max, d.ceiling);
            if (q && t(b.dataMin))
                if (n = n || 0, !t(z) && b.min < n && b.dataMin >= n) b.min = n;
                else if (!t(u) && b.max > n && b.dataMax <= n) b.max = n;
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !j && m ===
                b.linkedParent.options.tickPixelInterval ? j = b.linkedParent.tickInterval : p(j, this.tickAmount ? (b.max - b.min) / v(this.tickAmount - 1, 1) : void 0, l ? 1 : (b.max - b.min) * m / v(b.len, m));
            g && !a && o(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange) b.tickInterval = v(b.pointRange, b.tickInterval);
            a = p(d.minTickInterval, b.isDatetimeAxis &&
                b.closestPointRange);
            if (!j && b.tickInterval < a) b.tickInterval = a;
            if (!f && !e && !j) b.tickInterval = xb(b.tickInterval, null, wb(b.tickInterval), p(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);
            if (!this.tickAmount && this.len) b.tickInterval = b.unsquish();
            this.setTickPositions()
        },
        setTickPositions: function() {
            var a = this.options,
                b, c = a.tickPositions,
                d = a.tickPositioner,
                e = a.startOnTick,
                f = a.endOnTick,
                g;
            this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" &&
                this.tickInterval === 1 ? 0.5 : 0;
            this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length >
                    this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max])))) this.tickPositions = b = d;
            if (!this.isLinked) this.trimTicks(b, e, f), this.min === this.max && t(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount()
        },
        trimTicks: function(a, b, c) {
            var d = a[0],
                e = a[a.length - 1],
                f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            a.length === 0 && t(d) && a.push((e + d) / 2)
        },
        getTickAmount: function() {
            var a = {},
                b, c = this.options,
                d = c.tickAmount,
                e = c.tickPixelInterval;
            !t(c.tickInterval) && this.len < e && !this.isRadial && !this.isLog && c.startOnTick && c.endOnTick && (d = 2);
            !d && this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && (o(this.chart[this.coll], function(c) {
                var d = c.options,
                    e = c.horiz,
                    d = [e ? d.left : d.top, e ? d.width : d.height, d.pane].join(",");
                c.series.length && (a[d] ? b = !0 : a[d] = 1)
            }), b && (d = za(this.len / e) + 1));
            if (d < 4) this.finalTickAmt = d, d = 5;
            this.tickAmount = d
        },
        adjustTickAmount: function() {
            var a = this.tickInterval,
                b =
                this.tickPositions,
                c = this.tickAmount,
                d = this.finalTickAmt,
                e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(la(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (t(d)) {
                for (a = c = b.length; a--;)(d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = s
            }
        },
        setScale: function() {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            o(this.series, function(b) {
                if (b.isDirtyData ||
                    b.isDirty || b.xAxis.isDirty) a = !0
            });
            if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax
            } else this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart,
                c = p(c, !0);
            o(f.series, function(a) {
                delete a.kdTree
            });
            e = w(e, {
                min: a,
                max: b
            });
            O(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options,
                f = E(c, p(e.min, c)),
                e = v(d, p(e.max, d));
            this.allowZoomOutside || (t(c) && a <= f && (a = f), t(d) && b >= e && (b = e));
            this.displayBtn = a !== s || b !== s;
            this.setExtremes(a, b, !1, s, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = p(b.width, a.plotWidth - c + (b.offsetRight || 0)),
                f = p(b.height,
                    a.plotHeight),
                g = p(b.top, a.plotTop),
                b = p(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = v(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? la(sa(this.min)) : this.min,
                max: a ? la(sa(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? sa(this.min) : this.min,
                b = b ? sa(this.max) : this.max;
            a === null ? a = b < 0 ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (p(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        unsquish: function() {
            var a = this.ticks,
                b = this.options.labels,
                c = this.horiz,
                d = this.tickInterval,
                e = d,
                f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
                g, h = b.rotation,
                i = this.chart.renderer.fontMetrics(b.style.fontSize,
                    a[0] && a[0].label),
                k, j = Number.MAX_VALUE,
                m, l = function(a) {
                    a /= f || 1;
                    a = a > 1 ? za(a) : 1;
                    return a * d
                };
            c ? (m = !b.staggerLines && !b.step && (t(h) ? [h] : f < p(b.autoRotationLimit, 80) && b.autoRotation)) && o(m, function(a) {
                var b;
                if (a === h || a && a >= -90 && a <= 90) k = l(Q(i.h / ga(pa * a))), b = k + Q(a / 360), b < j && (j = b, g = a, e = k)
            }) : b.step || (e = l(i.h));
            this.autoRotation = m;
            this.labelRotation = p(g, h);
            return e
        },
        renderUnsquish: function() {
            var a = this.chart,
                b = a.renderer,
                c = this.tickPositions,
                d = this.ticks,
                e = this.options.labels,
                f = this.horiz,
                g = a.margin,
                h = this.categories ?
                c.length : c.length - 1,
                i = this.slotWidth = f && !e.step && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || a.chartWidth * 0.33),
                k = v(1, x(i - 2 * (e.padding || 5))),
                j = {},
                g = b.fontMetrics(e.style.fontSize, d[0] && d[0].label),
                h = e.style.textOverflow,
                m, l = 0;
            if (!Ia(e.rotation)) j.rotation = e.rotation || 0;
            if (this.autoRotation) o(c, function(a) {
                if ((a = d[a]) && a.labelLength > l) l = a.labelLength
            }), l > k && l > g.h ? j.rotation = this.labelRotation : this.labelRotation = 0;
            else if (i && (m = {
                    width: k + "px"
                }, !h)) {
                m.textOverflow =
                    "clip";
                for (i = c.length; !f && i--;)
                    if (k = c[i], k = d[k].label)
                        if (k.styles.textOverflow === "ellipsis" && k.css({
                                textOverflow: "clip"
                            }), k.getBBox().height > this.len / c.length - (g.h - g.f)) k.specCss = {
                            textOverflow: "ellipsis"
                        }
            }
            if (j.rotation && (m = {
                    width: (l > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"
                }, !h)) m.textOverflow = "ellipsis";
            this.labelAlign = j.align = e.align || this.autoLabelAlign(this.labelRotation);
            o(c, function(a) {
                var b = (a = d[a]) && a.label;
                if (b) b.attr(j), m && b.css(B(m, b.specCss)), delete b.specCss, a.rotation =
                    j.rotation
            });
            this.tickRotCorr = b.rotCorr(g.b, this.labelRotation || 0, this.side === 2)
        },
        hasData: function() {
            return this.hasVisibleSeries || t(this.min) && t(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                i = b.inverted ? [1, 0, 3, 2][h] : h,
                k, j, m = 0,
                l, n = 0,
                q = d.title,
                r = d.labels,
                C = 0,
                z = b.axisOffset,
                b = b.clipOffset,
                u = [-1, 1, 1, -1][h],
                y, L = a.axisParent;
            k = a.hasData();
            a.showAxis = j = k || p(d.showEmpty, !0);
            a.staggerLines = a.horiz && r.staggerLines;
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(L), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(L), a.labelGroup = c.g("axis-labels").attr({
                zIndex: r.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(L);
            if (k || a.isLinked) {
                if (o(e, function(b) {
                        f[b] ? f[b].addLabel() : f[b] = new Ya(a, b)
                    }), a.renderUnsquish(), o(e, function(b) {
                        if (h === 0 || h === 2 || {
                                1: "left",
                                3: "right"
                            }[h] === a.labelAlign) C = v(f[b].getLabelSize(), C)
                    }), a.staggerLines) C *= a.staggerLines, a.labelOffset =
                    C
            } else
                for (y in f) f[y].destroy(), delete f[y];
            if (q && q.text && q.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle = c.text(q.text, 0, 0, q.useHTML).attr({
                    zIndex: 7,
                    rotation: q.rotation || 0,
                    align: q.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[q.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(q.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (j) m = a.axisTitle.getBBox()[g ? "height" : "width"], l = q.offset, n = t(l) ? 0 : p(q.margin, g ? 5 : 10);
                a.axisTitle[j ? "show" : "hide"]()
            }
            a.offset = u * p(d.offset, z[h]);
            a.tickRotCorr =
                a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
            c = h === 2 ? a.tickRotCorr.y : 0;
            g = C + n + (C && u * (g ? p(r.y, a.tickRotCorr.y + 8) : r.x) - c);
            a.axisTitleMargin = p(l, g);
            z[h] = v(z[h], a.axisTitleMargin + m + u * a.offset, g);
            d = d.offset ? 0 : T(d.lineWidth / 2) * 2;
            b[i] = v(b[i], d)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight -
                this.bottom
            ], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                i = e.x || 0,
                k = e.y || 0,
                j = I(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? j : 0);
            return {
                x: a ? d + i : b + (g ? this.width : 0) + h + i,
                y: a ? b + k - (g ? this.height : 0) + h : d + k
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.isLinked,
                g = a.tickPositions,
                h = a.axisTitle,
                i = a.ticks,
                k = a.minorTicks,
                j = a.alternateBands,
                m = d.stackLabels,
                l = d.alternateGridColor,
                n = a.tickmarkOffset,
                q = d.lineWidth,
                r, C = b.hasRendered && t(a.oldMin) && !isNaN(a.oldMin),
                p = a.showAxis,
                u = c.globalAnimation,
                y, L;
            a.labelEdge.length = 0;
            a.overlap = !1;
            o([i, k, j], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || f) {
                a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function(b) {
                    k[b] || (k[b] = new Ya(a, b, "minor"));
                    C && k[b].isNew && k[b].render(null, !0);
                    k[b].render(null, !1, 1)
                });
                if (g.length &&
                    (o(g, function(b, c) {
                        if (!f || b >= a.min && b <= a.max) i[b] || (i[b] = new Ya(a, b)), C && i[b].isNew && i[b].render(c, !0, 0.1), i[b].render(c)
                    }), n && (a.min === 0 || a.single))) i[-1] || (i[-1] = new Ya(a, -1, null, !0)), i[-1].render(-1);
                l && o(g, function(b, c) {
                    L = g[c + 1] !== s ? g[c + 1] + n : a.max - n;
                    if (c % 2 === 0 && b < a.max && L <= a.max - n) j[b] || (j[b] = new D.PlotLineOrBand(a)), y = b + n, j[b].options = {
                        from: e ? sa(y) : y,
                        to: e ? sa(L) : L,
                        color: l
                    }, j[b].render(), j[b].isActive = !0
                });
                if (!a._addedPlotLB) o((d.plotLines || []).concat(d.plotBands || []), function(b) {
                        a.addPlotBandOrLine(b)
                    }),
                    a._addedPlotLB = !0
            }
            o([i, k, j], function(a) {
                var c, d, e = [],
                    f = u ? u.duration || 500 : 0,
                    g = function() {
                        for (d = e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                    };
                for (c in a)
                    if (!a[c].isActive) a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                a === j || !b.hasRendered || !f ? g() : f && setTimeout(g, f)
            });
            if (q) r = a.getLinePath(q), a.axisLine ? a.axisLine.animate({
                d: r
            }) : a.axisLine = c.path(r).attr({
                stroke: d.lineColor,
                "stroke-width": q,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[p ? "show" : "hide"]();
            if (h && p) h[h.isNew ? "attr" :
                "animate"](a.getTitlePosition()), h.isNew = !1;
            m && m.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), o(this.plotLinesAndBands, function(a) {
                a.render()
            }));
            o(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || V(b);
            for (d in c) Ma(c[d]), c[d] = null;
            o([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                Ma(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),
                function(a) {
                    b[a] && (b[a] = b[a].destroy())
                });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair,
                e = d.animation;
            if (!this.crosshair || (t(b) || !p(this.crosshair.snap, !0)) === !1 || b && b.series && b.series[this.coll] !== this) this.hideCrosshair();
            else if (p(d.snap, !0) ? t(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null,
                    null, c) || null, c === null) this.hideCrosshair();
            else if (this.cross) this.cross.attr({
                visibility: "visible"
            })[e ? "animate" : "attr"]({
                d: c
            }, e);
            else {
                e = this.categories && !this.isRadial;
                e = {
                    "stroke-width": d.width || (e ? this.transA : 1),
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: d.zIndex || 2
                };
                if (d.dashStyle) e.dashstyle = d.dashStyle;
                this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    w(H.prototype, {
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b,
                    null, null, !0),
                d = this.getPlotLinePath(a, null, null, !0);
            d && c && d.toString() !== c.toString() ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines")
        },
        addPlotBandOrLine: function(a, b) {
            var c = (new D.PlotLineOrBand(this, a)).render(),
                d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands,
                    c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--;) b[e].id === a && ta(b, b[e])
            })
        }
    });
    H.prototype.getTimeTicks = function(a, b, c, d) {
        var e = [],
            f = {},
            g = N.global.useUTC,
            h, i = new fa(b - ab(b)),
            k = a.unitRange,
            j = a.count;
        if (t(b)) {
            i[Ob](k >= J.second ? 0 : j * T(i.getMilliseconds() / j));
            if (k >= J.second) i[Pb](k >= J.minute ? 0 : j * T(i.getSeconds() / j));
            if (k >= J.minute) i[Qb](k >= J.hour ? 0 : j * T(i[zb]() / j));
            if (k >= J.hour) i[Rb](k >=
                J.day ? 0 : j * T(i[Ab]() / j));
            if (k >= J.day) i[Cb](k >= J.month ? 1 : j * T(i[bb]() / j));
            k >= J.month && (i[Db](k >= J.year ? 0 : j * T(i[cb]() / j)), h = i[db]());
            k >= J.year && (h -= h % j, i[Eb](h));
            if (k === J.week) i[Cb](i[bb]() - i[Bb]() + p(d, 1));
            b = 1;
            if (vb || kb) i = i.getTime(), i = new fa(i + ab(i));
            h = i[db]();
            for (var d = i.getTime(), m = i[cb](), l = i[bb](), n = (J.day + (g ? ab(i) : i.getTimezoneOffset() * 6E4)) % J.day; d < c;) e.push(d), k === J.year ? d = mb(h + b * j, 0) : k === J.month ? d = mb(h, m + b * j) : !g && (k === J.day || k === J.week) ? d = mb(h, m, l + b * j * (k === J.day ? 1 : 7)) : d += k * j, b++;
            e.push(d);
            o(gb(e,
                function(a) {
                    return k <= J.hour && a % J.day === n
                }), function(a) {
                f[a] = "day"
            })
        }
        e.info = w(a, {
            higherRanks: f,
            totalRange: k * j
        });
        return e
    };
    H.prototype.normalizeTimeTickInterval = function(a, b) {
        var c = b || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ],
            d = c[c.length - 1],
            e = J[d[0]],
            f = d[1],
            g;
        for (g = 0; g < c.length; g++)
            if (d = c[g], e = J[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + J[c[g + 1][0]]) /
                2) break;
        e === J.year && a < 5 * e && (f = [1, 2, 5]);
        c = xb(a / e, f, d[0] === "year" ? v(wb(a / e), 1) : 1);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        }
    };
    H.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options,
            f = this.len,
            g = [];
        if (!d) this._minorAutoInterval = null;
        if (a >= 0.5) a = x(a), g = this.getLinearTickPositions(a, b, c);
        else if (a >= 0.08)
            for (var f = T(b), h, i, k, j, m, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !m; f++) {
                i = e.length;
                for (h = 0; h < i && !m; h++) k = Ka(sa(f) * e[h]), k > b && (!d || j <= c) && j !== s && g.push(j), j > c && (m = !0),
                    j = k
            } else if (b = sa(b), c = sa(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = xb(a, null, wb(a)), g = Aa(this.getLinearTickPositions(a, b, c), Ka), !d) this._minorAutoInterval = a / 5;
        if (!d) this.tickInterval = a;
        return g
    };
    var Kb = D.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Kb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = I(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ma || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = e.options.animation !==
                !1 && !e.isHidden && (Q(a - f.x) > 1 || Q(b - f.y) > 1),
                h = e.followPointer || e.len > 1;
            w(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? s : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? s : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32)
        },
        hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            if (!this.isHidden) this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0
            }, p(a, this.options.hideDelay, 500))
        },
        getAnchor: function(a, b) {
            var c,
                d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = d.plotLeft,
                h = 0,
                i = 0,
                k, j, a = na(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === s && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (o(a, function(a) {
                k = a.series.yAxis;
                j = a.series.xAxis;
                h += a.plotX + (!e && j ? j.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && k ? k.top - f : 0)
            }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
            return Aa(c, x)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g = c.h || 0,
                h, i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
                k = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                j = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative),
                m = function(a, b, c, d, h, i) {
                    var k = c < d - e,
                        l = d + e + c < b,
                        m = d - e - c;
                    d += e;
                    if (j && l) f[a] = d;
                    else if (!j && k) f[a] = m;
                    else if (k) f[a] = E(i - c, m - g < 0 ? m : m - g);
                    else if (l) f[a] = v(h, d + g + c > b ? d : d + g);
                    else return !1
                },
                l = function(a, b, c, d) {
                    if (d < e || d > b - e) return !1;
                    else f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d -
                        c / 2
                },
                n = function(a) {
                    var b = i;
                    i = k;
                    k = b;
                    h = a
                },
                q = function() {
                    m.apply(0, i) !== !1 ? l.apply(0, k) === !1 && !h && (n(!0), q()) : h ? f.x = f.y = 0 : (n(!0), q())
                };
            (d.inverted || this.len > 1) && n();
            q();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || na(this),
                c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h, i = {},
                k, j = [];
            k = e.formatter || this.defaultFormatter;
            var i =
                c.hoverPoints,
                m, l = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = na(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            l && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && o(i, function(a) {
                a.setState()
            }), o(a, function(a) {
                a.setState("hover");
                j.push(a.getLabelConfig())
            }), i = {
                x: a[0].category,
                y: a[0].y
            }, i.points = j, this.len = j.length, a = a[0]) : i = a.getLabelConfig();
            k = k.call(i, this);
            i = a.series;
            this.distance = p(i.tooltipOptions.distance, 16);
            k === !1 ? this.hide() : (this.isHidden &&
                ($a(d), d.attr("opacity", 1).show()), d.attr({
                    text: k
                }), m = e.borderColor || a.color || i.color || "#606060", d.attr({
                    stroke: m
                }), this.updatePosition({
                    plotX: f,
                    plotY: g,
                    negative: a.negative,
                    ttBelow: a.ttBelow,
                    h: h[2] || 0
                }), this.isHidden = !1);
            O(c, "tooltipRefresh", {
                text: k,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: m
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(x(c.x), x(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        getXDateFormat: function(a,
            b, c) {
            var d, b = b.dateTimeLabelFormats,
                e = c && c.closestPointRange,
                f, g = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h, i = "millisecond";
            if (e) {
                h = ja("%m-%d %H:%M:%S.%L", a.x);
                for (f in J) {
                    if (e === J.week && +ja("%w", a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
                        f = "week";
                        break
                    } else if (J[f] > e) {
                        f = i;
                        break
                    } else if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    f !== "week" && (i = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header",
                d = a.series,
                e = d.tooltipOptions,
                f = e.xDateFormat,
                g = d.xAxis,
                h = g && g.options.type === "datetime" && ra(a.key),
                c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return La(c, {
                point: a,
                series: d
            })
        },
        bodyFormatter: function(a) {
            return Aa(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var wa;
    Za = F.documentElement.ontouchstart !== s;
    var Wa = D.Pointer = function(a, b) {
        this.init(a, b)
    };
    Wa.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = ma ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (D.Tooltip && b.tooltip.enabled) a.tooltip = new Kb(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0);
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d, a = a || window.event,
                a = cc(a);
            if (!a.target) a.target =
                a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            if (!b) this.chartPosition = b = bc(this.chart.container);
            d.pageX === s ? (c = v(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return w(a, {
                chartX: x(c),
                chartY: x(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            o(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e = d ? d.shared : !1,
                f = b.hoverPoint,
                g = b.hoverSeries,
                h, i = Number.MAX_VALUE,
                k, j, m = [],
                l, n;
            if (!e && !g)
                for (h = 0; h < c.length; h++)
                    if (c[h].directTouch || !c[h].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip : g.directTouch) && f ? l = f : (o(c, function(b) {
                k = b.noSharedTooltip && e;
                j = !e && b.directTouch;
                b.visible && !k && !j && p(b.options.enableMouseTracking, !0) && (n = b.searchPoint(a, !k && b.kdDimensions === 1)) && m.push(n)
            }), o(m, function(a) {
                if (a && typeof a.dist === "number" && a.dist < i) i = a.dist, l = a
            }));
            if (l && (l !== this.prevKDPoint || d && d.isHidden)) {
                if (e &&
                    !l.series.noSharedTooltip) {
                    for (h = m.length; h--;)(m[h].clientX !== l.clientX || m[h].series.noSharedTooltip) && m.splice(h, 1);
                    m.length && d && d.refresh(m, a);
                    o(m, function(b) {
                        b.onMouseOver(a, b !== (g && g.directTouch && f || l))
                    })
                } else if (d && d.refresh(l, a), !g || !g.directTouch) l.onMouseOver(a);
                this.prevKDPoint = l
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            if (d && !this._onDocumentMouseMove) this._onDocumentMouseMove = function(a) {
                    if (ca[wa]) ca[wa].pointer.onDocumentMouseMove(a)
                },
                A(F, "mousemove", this._onDocumentMouseMove);
            o(b.axes, function(b) {
                b.drawCrosshair(a, p(l, f))
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.hoverPoints,
                g = c.tooltip,
                h = g && g.shared ? f : e;
            (a = a && g && h) && na(h)[0].plotX === s && (a = !1);
            if (a) g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function(a) {
                p(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            }));
            else {
                if (e) e.onMouseOut();
                f && o(f, function(a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                if (this._onDocumentMouseMove) V(F, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
                o(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            o(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b =
                this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                i = b.plotTop,
                k = b.plotWidth,
                j = b.plotHeight,
                m, l = this.selectionMarker,
                n = this.mouseDownX,
                q = this.mouseDownY,
                r = c.panKey && a[c.panKey + "Key"];
            if (!l || !l.touch)
                if (d < h ? d = h : d > h + k && (d = h + k), e < i ? e = i : e > i + j && (e = i + j), this.hasDragged = Math.sqrt(Math.pow(n - d, 2) + Math.pow(q - e, 2)), this.hasDragged >
                    10) {
                    m = b.isInsidePlot(n - h, q - i);
                    if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && m && !r && !l) this.selectionMarker = l = b.renderer.rect(h, i, f ? 1 : k, g ? 1 : j, 0).attr({
                        fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                        zIndex: 7
                    }).add();
                    l && f && (d -= n, l.attr({
                        width: Q(d),
                        x: (d > 0 ? 0 : d) + n
                    }));
                    l && g && (d = e - q, l.attr({
                        height: Q(d),
                        y: (d > 0 ? 0 : d) + q
                    }));
                    m && !l && c.panning && b.pan(a, c.panning)
                }
        },
        drop: function(a) {
            var b = this,
                c = this.chart,
                d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                        xAxis: [],
                        yAxis: [],
                        originalEvent: a.originalEvent ||
                            a
                    },
                    f = this.selectionMarker,
                    g = f.attr ? f.attr("x") : f.x,
                    h = f.attr ? f.attr("y") : f.y,
                    i = f.attr ? f.attr("width") : f.width,
                    k = f.attr ? f.attr("height") : f.height,
                    j;
                if (this.hasDragged || d) o(c.axes, function(c) {
                    if (c.zoomEnabled && t(c.min) && (d || b[{
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        }[c.coll]])) {
                        var f = c.horiz,
                            n = a.type === "touchend" ? c.minPixelPadding : 0,
                            q = c.toValue((f ? g : h) + n),
                            f = c.toValue((f ? g + i : h + k) - n);
                        e[c.coll].push({
                            axis: c,
                            min: E(q, f),
                            max: v(q, f)
                        });
                        j = !0
                    }
                }), j && O(c, "selection", e, function(a) {
                    c.zoom(w(a, d ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker =
                    this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            if (c) G(c.container, {
                cursor: c._cursor
            }), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            ca[wa] && ca[wa].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition,
                a = this.normalize(a, c);
            c && !this.inClass(a.target, "highcharts-tracker") &&
                !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            var a = ca[wa];
            if (a) a.pointer.reset(), a.pointer.chartPosition = null
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            wa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = X(a, "class"))
                    if (c.indexOf(b) !==
                        -1) return !0;
                    else if (c.indexOf("highcharts-container") !== -1) return !1;
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries,
                a = a.relatedTarget || a.toElement;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop,
                a = this.normalize(a);
            a.originalEvent = a;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (O(c.series,
                "click", w(a, {
                    point: c
                })), b.hoverPoint && c.firePointEvent("click", a)) : (w(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && O(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            A(b, "mouseleave", a.onContainerMouseLeave);
            fb === 1 && A(F, "mouseup", a.onDocumentMouseUp);
            if (Za) b.ontouchstart = function(b) {
                    a.onContainerTouchStart(b)
                },
                b.ontouchmove = function(b) {
                    a.onContainerTouchMove(b)
                }, fb === 1 && A(F, "touchend", a.onDocumentTouchEnd)
        },
        destroy: function() {
            var a;
            V(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            fb || (V(F, "mouseup", this.onDocumentMouseUp), V(F, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    w(D.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) &&
            this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var i = this.chart,
                k = a ? "x" : "y",
                j = a ? "X" : "Y",
                m = "chart" + j,
                l = a ? "width" : "height",
                n = i["plot" + (a ? "Left" : "Top")],
                q, r, C = h || 1,
                p = i.inverted,
                o = i.bounds[a ? "h" : "v"],
                y = b.length === 1,
                L = b[0][m],
                s = c[0][m],
                v = !y && b[1][m],
                t = !y && c[1][m],
                x, c = function() {
                    !y && Q(L - v) > 20 && (C = h || Q(s - t) / Q(L - v));
                    r = (n - s) / C + L;
                    q = i["plot" + (a ? "Width" : "Height")] / C
                };
            c();
            b = r;
            b < o.min ? (b = o.min, x = !0) : b + q > o.max && (b = o.max - q, x = !0);
            x ? (s -= 0.8 * (s - g[k][0]), y || (t -= 0.8 * (t -
                g[k][1])), c()) : g[k] = [s, t];
            p || (f[k] = r - n, f[l] = q);
            f = p ? 1 / C : C;
            e[l] = q;
            e[k] = b;
            d[p ? a ? "scaleY" : "scaleX" : "scale" + j] = C;
            d["translate" + j] = f * n + (s - f * L)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = a.touches,
                f = e.length,
                g = b.lastValidTouch,
                h = b.hasZoom,
                i = b.selectionMarker,
                k = {},
                j = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
                m = {};
            if (f > 1) b.initiated = !0;
            h && b.initiated && !j && a.preventDefault();
            Aa(e, function(a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart") o(e, function(a,
                b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"],
                        d = a.minPixelPadding,
                        e = a.toPixels(p(a.options.min, a.dataMin)),
                        f = a.toPixels(p(a.options.max, a.dataMax)),
                        g = E(e, f),
                        e = v(e, f);
                    b.min = E(a.pos, g - d);
                    b.max = v(a.pos + a.len, e + d)
                }
            }), b.res = !0;
            else if (d.length) {
                if (!i) b.selectionMarker = i = w({
                    destroy: ka,
                    touch: !0
                }, c.plotBox);
                b.pinchTranslate(d, e, k, i, m, g);
                b.hasPinched = h;
                b.scaleGroups(k,
                    m);
                if (!h && b.followTouchMove && f === 1) this.runPointActions(b.normalize(a));
                else if (b.res) b.res = !1, this.reset(!1, 0)
            }
        },
        touch: function(a, b) {
            var c = this.chart;
            wa = c.index;
            a.touches.length === 1 ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : a.touches.length === 2 && this.pinch(a)
        },
        onContainerTouchStart: function(a) {
            this.touch(a, !0)
        },
        onContainerTouchMove: function(a) {
            this.touch(a)
        },
        onDocumentTouchEnd: function(a) {
            ca[wa] &&
                ca[wa].pointer.drop(a)
        }
    });
    if (U.PointerEvent || U.MSPointerEvent) {
        var Ca = {},
            Lb = !!U.PointerEvent,
            gc = function() {
                var a, b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in Ca) Ca.hasOwnProperty(a) && b.push({
                    pageX: Ca[a].pageX,
                    pageY: Ca[a].pageY,
                    target: Ca[a].target
                });
                return b
            },
            Mb = function(a, b, c, d) {
                a = a.originalEvent || a;
                if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && ca[wa]) d(a), d = ca[wa].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: ka,
                    touches: gc()
                })
            };
        w(Wa.prototype, {
            onContainerPointerDown: function(a) {
                Mb(a,
                    "onContainerTouchStart", "touchstart",
                    function(a) {
                        Ca[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.currentTarget
                        }
                    })
            },
            onContainerPointerMove: function(a) {
                Mb(a, "onContainerTouchMove", "touchmove", function(a) {
                    Ca[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    };
                    if (!Ca[a.pointerId].target) Ca[a.pointerId].target = a.currentTarget
                })
            },
            onDocumentPointerUp: function(a) {
                Mb(a, "onDocumentTouchEnd", "touchend", function(a) {
                    delete Ca[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, Lb ? "pointerdown" : "MSPointerDown",
                    this.onContainerPointerDown);
                a(this.chart.container, Lb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(F, Lb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        R(Wa.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            this.hasZoom && G(b.container, {
                "-ms-touch-action": $,
                "touch-action": $
            })
        });
        R(Wa.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(A)
        });
        R(Wa.prototype, "destroy", function(a) {
            this.batchMSEvents(V);
            a.call(this)
        })
    }
    var sb =
        D.Legend = function(a, b) {
            this.init(a, b)
        };
    sb.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled) c.itemStyle = d, c.itemHiddenStyle = B(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], c.render(), A(c.chart, "endResize", function() {
                c.positionCheckboxes()
            })
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e =
                a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                i = {
                    fill: h
                },
                k;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (k in i.stroke = h, g = a.convertAttribs(g), g) d = g[k], d !== s && (i[k] = d);
                f.attr(i)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4,
                d);
            if (f) f.x = e, f.y = d
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Sa(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            if (b) c = b.translateY, o(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, G(f, {
                    left: b.translateX + e.checkboxOffset +
                        f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : $
                }))
            })
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            if (b.text) {
                if (!this.title) this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({
                    translateY: c
                })
            }
            this.titleHeight = c
        },
        setText: function(a) {
            var b = this.options;
            a.legendItem.attr({
                text: b.labelFormat ? La(b.labelFormat,
                    a) : b.labelFormatter.call(a)
            })
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = d.layout === "horizontal",
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                i = this.itemHiddenStyle,
                k = this.padding,
                j = e ? p(d.itemDistance, 20) : 0,
                m = !d.rtl,
                l = d.width,
                n = d.itemMarginBottom || 0,
                q = this.itemMarginTop,
                r = this.initialItemX,
                C = a.legendItem,
                o = a.series && a.series.drawLegendSymbol ? a.series : a,
                u = o.options,
                u = this.createCheckboxForItem && u && u.showCheckbox,
                y = d.useHTML;
            if (!C) {
                a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                a.legendItem = C = c.text("", m ? f + g : -g, this.baseline || 0, y).css(B(a.visible ? h : i)).attr({
                    align: m ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline) this.fontMetrics = c.fontMetrics(h.fontSize, C), this.baseline = this.fontMetrics.f + 3 + q, C.attr("y", this.baseline);
                o.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, C, y, h, i);
                this.colorizeItem(a, a.visible);
                u && this.createCheckboxForItem(a)
            }
            this.setText(a);
            c = C.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + j + (u ? 20 :
                0);
            this.itemHeight = g = x(a.legendItemHeight || c.height);
            if (e && this.itemX - r + f > (l || b.chartWidth - 2 * k - r - d.x)) this.itemX = r, this.itemY += q + this.lastLineHeight + n, this.lastLineHeight = 0;
            this.maxItemWidth = v(this.maxItemWidth, f);
            this.lastItemY = q + this.itemY + n;
            this.lastLineHeight = v(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += q + g + n, this.lastLineHeight = g);
            this.offsetWidth = l || v((e ? this.itemX - r - j : f) + k, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            o(this.chart.series,
                function(b) {
                    var c = b.options;
                    if (p(c.showInLegend, !t(c.linkedTo) ? s : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
                });
            return a
        },
        adjustMargins: function(a, b) {
            var c = this.chart,
                d = this.options,
                e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !t(a[g]) && (c[pb[g]] = v(c[pb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + p(d.margin,
                    12) + b[g]))
            })
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, i = a.box,
                k = a.options,
                j = a.padding,
                m = k.borderWidth,
                l = k.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            yb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            k.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            o(e, function(b) {
                a.renderItem(b)
            });
            g = (k.width || a.offsetWidth) + j;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += j;
            if (m || l) {
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({
                        width: g,
                        height: h
                    })), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, k.borderRadius, m || 0).attr({
                    stroke: k.borderColor,
                    "stroke-width": m || 0,
                    fill: l || $
                }).add(d).shadow(k.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight =
                h;
            o(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(w({
                width: g,
                height: h
            }, k), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
                g = e.maxHeight,
                h, i = this.clipRect,
                k = e.navigation,
                j = p(k.animation, !0),
                m = k.arrowSize || 12,
                l = this.nav,
                n = this.pages,
                q = this.padding,
                r, C = this.allItems,
                z = function(a) {
                    i.attr({
                        height: a
                    });
                    if (b.contentGroup.div) b.contentGroup.div.style.clip =
                        "rect(" + q + "px,9999px," + (q + a) + "px,0)"
                };
            e.layout === "horizontal" && (f /= 2);
            g && (f = E(f, g));
            n.length = 0;
            if (a > f) {
                this.clipHeight = h = v(f - 20 - this.titleHeight - q, 0);
                this.currentPage = p(this.currentPage, 1);
                this.fullHeight = a;
                o(C, function(a, b) {
                    var c = a._legendItemPos[1],
                        d = x(a.legendItem.getBBox().height),
                        e = n.length;
                    if (!e || c - n[e - 1] > h && (r || c) !== n[e - 1]) n.push(r || c), e++;
                    b === C.length - 1 && c + d - n[e - 1] > h && n.push(c);
                    c !== r && (r = c)
                });
                if (!i) i = b.clipRect = d.clipRect(0, q, 9999, 0), b.contentGroup.clip(i);
                z(h);
                if (!l) this.nav = l = d.g().attr({
                        zIndex: 1
                    }).add(this.group),
                    this.up = d.symbol("triangle", 0, 0, m, m).on("click", function() {
                        b.scroll(-1, j)
                    }).add(l), this.pager = d.text("", 15, 10).css(k.style).add(l), this.down = d.symbol("triangle-down", 0, 0, m, m).on("click", function() {
                        b.scroll(1, j)
                    }).add(l);
                b.scroll(0);
                a = f
            } else if (l) z(c.chartHeight), l.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0;
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                i = this.pager,
                k =
                this.padding;
            e > d && (e = d);
            if (e > 0) b !== s && Xa(b, this.chart), this.nav.attr({
                translateX: k,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: e === 1 ? g : h
            }).css({
                cursor: e === 1 ? "default" : "pointer"
            }), i.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    M = D.LegendSymbolMixin = {
        drawRectangle: function(a,
            b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d;
            d = a.symbolWidth;
            var e = this.chart.renderer,
                f = this.legendGroup,
                a = a.baseline - x(a.fontMetrics.b * 0.3),
                g;
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !==
                !1) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(Ga) || Ua) && R(sb.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    var Ha = D.Chart = function() {
        this.init.apply(this, arguments)
    };
    Ha.prototype = {
        callbacks: [],
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = B(N, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing",
                d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = ca.length;
            ca.push(f);
            fb++;
            d.reflow !== !1 && A(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) A(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ma ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = K[a.type || b.type || b.defaultSeriesType]) || oa(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a,
                a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, i = this.hasCartesianSeries,
                k = this.isDirtyBox,
                j = c.length,
                m = j,
                l = this.renderer,
                n = l.isHidden(),
                q = [];
            Xa(a, this);
            n && this.cloneRenderTo();
            for (this.layOutTitles(); m--;)
                if (a = c[m], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (m = j; m--;)
                    if (a = c[m], a.options.stacking) a.isDirty = !0;
            o(c, function(a) {
                a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0)
            });
            if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i && !this.isResizing) this.maxTicks = null, o(b, function(a) {
                a.setScale()
            });
            this.getMargins();
            i && (o(b, function(a) {
                a.isDirty && (k = !0)
            }), o(b, function(a) {
                var b = a.min + "," + a.max;
                if (a.extKey !== b) a.extKey = b, q.push(function() {
                    O(a, "afterSetExtremes", w(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (k || g) && a.redraw()
            }));
            k && this.drawChartBox();
            o(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            l.draw();
            O(this, "redraw");
            n && this.cloneRenderTo(!0);
            o(q, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b]
            }
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = na(b.xAxis || {}),
                b = b.yAxis = na(b.yAxis || {});
            o(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            o(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            o(c, function(b) {
                new H(a, b)
            })
        },
        getSelectedPoints: function() {
            var a = [];
            o(this.series, function(b) {
                a = a.concat(gb(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return gb(this.series, function(a) {
                return a.selected
            })
        },
        setTitle: function(a, b, c) {
            var g;
            var d = this,
                e = d.options,
                f;
            f = e.title = B(e.title, a);
            g = e.subtitle = B(e.subtitle, b), e = g;
            o([
                ["title", a, f],
                ["subtitle",
                    b, e
                ]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1],
                    a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox.width - 44;
            if (c && (c.css({
                        width: (f.width || h) + "px"
                    }).align(w({
                        y: g.fontMetrics(f.style.fontSize, c).b - 3
                    }, f), !1, "spacingBox"), !f.floating &&
                    !f.verticalAlign)) b = c.getBBox().height;
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(w({
                y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b
            }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign && (b = za(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw()
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            if (!t(b)) this.containerWidth = qb(c,
                "width");
            if (!t(a)) this.containerHeight = qb(c, "height");
            this.chartWidth = v(0, b || this.containerWidth || 600);
            this.chartHeight = v(0, p(a, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), G(b, {
                    position: "absolute",
                    top: "-9999px",
                    display: "block"
                }), b.style.setProperty &&
                b.style.setProperty("display", "block", "important"), F.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options,
                c = b.chart,
                d, e, f;
            this.renderTo = a = c.renderTo;
            f = "highcharts-" + Hb++;
            if (Ia(a)) this.renderTo = a = F.getElementById(a);
            a || oa(13, !0);
            d = I(X(a, "data-highcharts-chart"));
            !isNaN(d) && ca[d] && ca[d].hasRendered && ca[d].destroy();
            X(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !c.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = aa(Ta, {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, w({
                position: "relative",
                overflow: "hidden",
                width: d + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new(D[c.renderer] || Va)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            ma && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        },
        getMargins: function(a) {
            var b =
                this.spacing,
                c = this.margin,
                d = this.titleOffset;
            this.resetMargins();
            if (d && !t(c[0])) this.plotTop = v(this.plotTop, d + this.options.title.margin + b[0]);
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var a = this,
                b = a.axisOffset = [0, 0, 0, 0],
                c = a.margin;
            a.hasCartesianSeries && o(a.axes, function(a) {
                a.visible && a.getOffset()
            });
            o(pb, function(d, e) {
                t(c[e]) || (a[d] +=
                    b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || qb(d, "width"),
                f = c.height || qb(d, "height"),
                c = a ? a.target : U,
                d = function() {
                    if (b.container) b.setSize(e, f, !1), b.hasUserSize = null
                };
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === U || c === F)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            A(U, "resize",
                b);
            A(a, "destroy", function() {
                V(U, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g, h = d.renderer;
            d.isResizing += 1;
            g = function() {
                d && O(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            Xa(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (t(a)) d.chartWidth = e = v(0, x(a)), d.hasUserSize = !!e;
            if (t(b)) d.chartHeight = f = v(0, x(b));
            a = h.globalAnimation;
            (a ? rb : G)(d.container, {
                width: e + "px",
                height: f + "px"
            }, a);
            d.setChartSize(!0);
            h.setSize(e, f, c);
            d.maxTicks = null;
            o(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            o(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            O(d, "resize");
            a = h.globalAnimation;
            a === !1 ? g() : setTimeout(g, a && a.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                i, k, j, m;
            this.plotLeft = i = x(this.plotLeft);
            this.plotTop = k = x(this.plotTop);
            this.plotWidth = j = v(0, x(d - i - this.marginRight));
            this.plotHeight =
                m = v(0, x(e - k - this.marginBottom));
            this.plotSizeX = b ? m : j;
            this.plotSizeY = b ? j : m;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: i,
                y: k,
                width: j,
                height: m
            };
            d = 2 * T(this.plotBorderWidth / 2);
            b = za(v(d, h[3]) / 2);
            c = za(v(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: T(this.plotSizeX - v(d, h[1]) / 2 - b),
                height: v(0, T(this.plotSizeY - v(d, h[2]) / 2 - c))
            };
            a || o(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a =
                this;
            o(pb, function(b, c) {
                a[b] = p(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                i = a.borderWidth || 0,
                k = a.backgroundColor,
                j = a.plotBackgroundColor,
                m = a.plotBackgroundImage,
                l = a.plotBorderWidth || 0,
                n, q = this.plotLeft,
                r = this.plotTop,
                p = this.plotWidth,
                o = this.plotHeight,
                u = this.plotBox,
                y = this.clipRect,
                s =
                this.clipBox;
            n = i + (a.shadow ? 8 : 0);
            if (i || k)
                if (e) e.animate(e.crisp({
                    width: c - n,
                    height: d - n
                }));
                else {
                    e = {
                        fill: k || $
                    };
                    if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                    this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)
                }
            if (j) f ? f.animate(u) : this.plotBackground = b.rect(q, r, p, o, 0).attr({
                fill: j
            }).add().shadow(a.plotShadow);
            if (m) h ? h.animate(u) : this.plotBGImage = b.image(m, q, r, p, o).add();
            y ? y.animate({
                    width: s.width,
                    height: s.height
                }) : this.clipRect =
                b.clipRect(s);
            if (l) g ? g.animate(g.crisp({
                x: q,
                y: r,
                width: p,
                height: o,
                strokeWidth: -l
            })) : this.plotBorder = b.rect(q, r, p, o, 0, -l).attr({
                stroke: a.plotBorderColor,
                "stroke-width": l,
                fill: $,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            o(["inverted", "angular", "polar"], function(g) {
                c = K[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = K[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a =
                this,
                b = a.series;
            o(b, function(a) {
                a.linkedSeries.length = 0
            });
            o(b, function(b) {
                var d = b.options.linkedTo;
                if (Ia(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent = d, b.visible = p(b.options.visible, d.options.visible, b.visible)
            })
        },
        renderSeries: function() {
            o(this.series, function(a) {
                a.translate();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && o(b.items, function(c) {
                var d = w(b.style, c.style),
                    e = I(d.left) + a.plotLeft,
                    f = I(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options,
                d, e, f, g;
            this.setTitle();
            this.legend = new sb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 13;
            o(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = d / this.plotWidth > 1.1;
            g = e / this.plotHeight > 1.1;
            if (f || g) this.maxTicks = null, o(a, function(a) {
                    (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
                }),
                this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && o(a, function(a) {
                a.visible && a.render()
            });
            if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                if (a.href) location.href = a.href
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position)
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            O(a, "destroy");
            ca[a.index] = s;
            fb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            V(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d) d.innerHTML =
                "", V(d), f && Sa(d);
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !ea && U == U.top && F.readyState !== "complete" || ma && !U.canvg ? (ma ? Vb.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : F.attachEvent("onreadystatechange", function() {
                F.detachEvent("onreadystatechange", a.firstRender);
                F.readyState === "complete" && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                O(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                o(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                O(a, "beforeRender");
                if (D.Pointer) a.pointer = new Wa(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                o(a.callbacks, function(b) {
                    a.index !== s && b.apply(a, [a])
                });
                O(a, "load");
                a.cloneRenderTo(!0)
            }
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = ha(c) ? c : [c, c, c, c];
            return [p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3])]
        }
    };
    var hc = D.CenteredSeriesMixin = {
            getCenter: function() {
                var a = this.options,
                    b = this.chart,
                    c = 2 * (a.slicedOffset || 0),
                    d = b.plotWidth - 2 * c,
                    b = b.plotHeight - 2 * c,
                    e = a.center,
                    e = [p(e[0], "50%"), p(e[1], "50%"), a.size || "100%", a.innerSize || 0],
                    f = E(d, b),
                    g, h;
                for (g = 0; g < 4; ++g) h = e[g], a = g < 2 || g === 2 && /%$/.test(h), e[g] = (/%$/.test(h) ? [d, b, f, e[2]][g] * parseFloat(h) / 100 : parseFloat(h)) + (a ? c : 0);
                e[3] > e[2] && (e[3] = e[2]);
                return e
            }
        },
        Da = function() {};
    Da.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors,
                    this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey,
                a = Da.prototype.optionsToObject.call(this, a);
            w(this, a);
            this.options = this.options ? w(this.options, a) : a;
            if (d) this.y = this[d];
            if (this.x === s && c) this.x = b === s ? c.autoIncrement() : b;
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.options.keys,
                e = d || c.pointArrayMap || ["y"],
                f = e.length,
                g = 0,
                h =
                0;
            if (typeof a === "number" || a === null) b[e[0]] = a;
            else if (Ja(a)) {
                if (!d && a.length > f) {
                    c = typeof a[0];
                    if (c === "string") b.name = a[0];
                    else if (c === "number") b.x = a[0];
                    g++
                }
                for (; h < f;) {
                    if (!d || a[g] !== void 0) b[e[h]] = a[g];
                    g++;
                    h++
                }
            } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            }
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            if (b && (this.setState(), ta(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) V(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b =
                this.series,
                c = b.tooltipOptions,
                d = p(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            o(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return La(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey ||
                    a.metaKey || a.shiftKey)
            });
            O(this, a, b, c)
        },
        visible: !0
    };
    var P = D.Series = function() {};
    P.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Da,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return p(a.options.index, a._i) - p(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            w(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected === !0
            });
            if (ma) b.animation = !1;
            e = b.events;
            for (d in e) A(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            o(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian) a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            yb(f, g);
            this.yAxis && yb(this.yAxis.series, g);
            o(f, function(a, b) {
                a.index = b;
                a.name =
                    a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            o(a.axisTypes || [], function(e) {
                o(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== s && b[e] === d.id || b[e] === s && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && oa(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            o(c.parallelArrays, typeof b === "number" ? function(d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a +
                    "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                c, d = a.pointIntervalUnit,
                b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            if (d === "month" || d === "year") a = new fa(b), a = d === "month" ? +a[Db](a[cb]() + c) : +a[Eb](a[db]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                    d.length && (b = [d])
                } else o(d,
                    function(c, g) {
                        c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                    });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = B(e, c.series, a);
            this.tooltipOptions = B(N.tooltip, N.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            if ((c.negativeColor || c.negativeFillColor) && !c.zones) a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && t(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (t(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color",
                this.options.color || W[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) a.radius = 0
        },
        drawLegendSymbol: M.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, i = e.options,
                k = e.chart,
                j = null,
                m = e.xAxis,
                l = m && !!m.categories,
                n = i.turboThreshold,
                q = this.xData,
                r = this.yData,
                C = (h = e.pointArrayMap) && h.length,
                a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h &&
                !e.cropped && !e.hasGroupedData && e.visible) o(a, function(a, b) {
                f[b].update && f[b].update(a, !1, null, !1)
            });
            else {
                e.xIncrement = null;
                e.pointRange = l ? 1 : i.pointRange;
                e.colorCounter = 0;
                o(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (n && h > n) {
                    for (c = 0; j === null && c < h;) j = a[c], c++;
                    if (ra(j)) {
                        l = p(i.pointStart, 0);
                        j = p(i.pointInterval, 1);
                        for (c = 0; c < h; c++) q[c] = l, r[c] = a[c], l += j;
                        e.xIncrement = l
                    } else if (Ja(j))
                        if (C)
                            for (c = 0; c < h; c++) j = a[c], q[c] = j[0], r[c] = j.slice(1, C + 1);
                        else
                            for (c = 0; c < h; c++) j = a[c], q[c] = j[0], r[c] = j[1];
                    else oa(12)
                } else
                    for (c =
                        0; c < h; c++)
                        if (a[c] !== s && (j = {
                                series: e
                            }, e.pointClass.prototype.applyOptions.apply(j, [a[c]]), e.updateParallelArrays(j, c), l && t(j.name))) m.names[j.x] = j.name;
                Ia(r[0]) && oa(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                if (m) m.minRange = m.userMinRange;
                e.isDirty = e.isDirtyData = k.isDirtyBox = !0;
                c = !1
            }
            i.legendType === "point" && (this.processData(), this.generatePoints());
            b && k.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                i, k =
                this.options;
            i = k.cropThreshold;
            var j = this.getExtremesFromAll || k.getExtremesFromAll,
                m = this.isCartesian,
                l, n;
            if (m && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (h) a = h.getExtremes(), l = a.min, n = a.max;
            if (m && this.sorted && !j && (!i || d > i || this.forceCrop))
                if (b[d - 1] < l || b[0] > n) b = [], c = [];
                else if (b[0] < l || b[d - 1] > n) e = this.cropData(this.xData, this.yData, l, n), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], d > 0 && (g === s || d < g) ? g = d : d < 0 && this.requireSorting && oa(15);
            this.cropped =
                f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            if (k.pointRange === null) this.pointRange = g || 1;
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = p(this.cropShoulder, 1),
                i;
            for (i = 0; i < e; i++)
                if (a[i] >= c) {
                    f = v(0, i - h);
                    break
                }
            for (; i < e; i++)
                if (a[i] > d) {
                    g = i + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart ||
                0,
                i, k = this.hasGroupedData,
                j, m = [],
                l;
            if (!b && !k) b = [], b.length = a.length, b = this.data = b;
            for (l = 0; l < g; l++) i = h + l, k ? m[l] = (new f).init(this, [d[l]].concat(na(e[l]))) : (b[i] ? j = b[i] : a[i] !== s && (b[i] = j = (new f).init(this, a[i], d[l])), m[l] = j), m[l].index = i;
            if (b && (g !== (c = b.length) || k))
                for (l = 0; l < c; l++)
                    if (l === h && !k && (l += g), b[l]) b[l].destroyElements(), b[l].plotX = s;
            this.data = b;
            this.points = m
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                i, k, j, m, a = a ||
                this.stackedYData || this.processedYData;
            d = a.length;
            for (m = 0; m < d; m++)
                if (k = c[m], j = a[m], i = j !== null && j !== s && (!b.isLog || j.length || j > 0), k = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[m + 1] || k) >= g && (c[m - 1] || k) <= h, i && k)
                    if (i = j.length)
                        for (; i--;) j[i] !== null && (e[f++] = j[i]);
                    else e[f++] = j;
            this.dataMin = Ra(e);
            this.dataMax = Fa(e)
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis,
                    f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, k = i === "between" || ra(i), j = a.threshold, m = a.startFromThreshold ? j : 0, l, n, q, r, o = Number.MAX_VALUE, a = 0; a < g; a++) {
                var z = f[a],
                    u = z.x,
                    y = z.y;
                n = z.low;
                var L = b && e.stacks[(this.negStacks && y < (m ? 0 : j) ? "-" : "") + this.stackKey];
                if (e.isLog && y !== null && y <= 0) z.y = y = null, oa(10);
                z.plotX = l = E(v(-1E5, c.translate(u, 0, 0, 0, 1, i, this.type === "flags")), 1E5);
                if (b && this.visible && L && L[u]) r = this.getStackIndicator(r, u, this.index), L = L[u], y = L.points[r.key], n = y[0], y = y[1], n === m && (n =
                    p(j, e.min)), e.isLog && n <= 0 && (n = null), z.total = z.stackTotal = L.total, z.percentage = L.total && z.y / L.total * 100, z.stackY = y, L.setOffset(this.pointXOffset || 0, this.barW || 0);
                z.yBottom = t(n) ? e.translate(n, 0, 1, 0, 1) : null;
                h && (y = this.modifyValue(y, z));
                z.plotY = n = typeof y === "number" && y !== Infinity ? E(v(-1E5, e.translate(y, 0, 1, 0, 1)), 1E5) : s;
                z.isInside = n !== s && n >= 0 && n <= e.len && l >= 0 && l <= c.len;
                z.clientX = k ? c.translate(u, 0, 0, 0, 1) : l;
                z.negative = z.y < (j || 0);
                z.category = d && d[z.x] !== s ? d[z.x] : z.x;
                a && (o = E(o, Q(l - q)));
                q = l
            }
            this.closestPointRangePx =
                o;
            this.getSegments()
        },
        setClip: function(a) {
            var b = this.chart,
                c = this.options,
                d = b.renderer,
                e = b.inverted,
                f = this.clipBox,
                g = f || b.clipBox,
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","),
                i = b[h],
                k = b[h + "m"];
            if (!i) {
                if (a) g.width = 0, b[h + "m"] = k = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
                b[h] = i = d.clipRect(g)
            }
            a && (i.count += 1);
            if (c.clip !== !1) this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(k), this.sharedClipKey = h;
            a || (i.count -= 1,
                i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function(a) {
            var b = this.chart,
                c = this.options.animation,
                d;
            if (c && !ha(c)) c = W[this.type].animation;
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip();
            O(this, "afterAnimate")
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, i, k, j, m = this.options.marker,
                l = this.pointAttr[""],
                n, q, r, o = this.markerGroup,
                z = p(m.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * m.radius);
            if (m.enabled !== !1 || this._hasPointMarkers)
                for (f = b.length; f--;)
                    if (g = b[f], d = T(g.plotX), e = g.plotY, j = g.graphic, n = g.marker || {}, q = !!g.marker, a = z && n.enabled === s || n.enabled, r = g.isInside, a && e !== s && !isNaN(e) && g.y !== null)
                        if (a = g.pointAttr[g.selected ? "select" : ""] || l, h = a.r, i = p(n.symbol, this.symbol), k = i.indexOf("url") === 0, j) j[r ? "show" : "hide"](!0).animate(w({
                            x: d - h,
                            y: e - h
                        }, j.symbolName ? {
                            width: 2 * h,
                            height: 2 *
                                h
                        } : {}));
                        else {
                            if (r && (h > 0 || k)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, q ? n : m).attr(a).add(o)
                        }
            else if (j) g.graphic = j.destroy()
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {},
                a = a || {},
                b = b || {},
                c = c || {},
                d = d || {};
            for (f in e) g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = W[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color,
                h = a.options.negativeColor;
            f = {
                stroke: g,
                fill: g
            };
            var i = a.points || [],
                k, j, m = [],
                l = a.pointAttrToOptions;
            k = a.hasPointSpecificOptions;
            var n = c.lineColor,
                q = c.fillColor;
            j = b.turboThreshold;
            var r = a.zones,
                C = a.zoneAxis || "y",
                z;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || va(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || va(e.negativeColor || h).brighten(e.brightness).get());
            m[""] = a.convertAttribs(c, f);
            o(["hover", "select"], function(b) {
                m[b] = a.convertAttribs(d[b], m[""])
            });
            a.pointAttr = m;
            g = i.length;
            if (!j || g < j || k)
                for (; g--;) {
                    j = i[g];
                    if ((c = j.options &&
                            j.options.marker || j.options) && c.enabled === !1) c.radius = 0;
                    if (r.length) {
                        k = 0;
                        for (f = r[k]; j[C] >= f.value;) f = r[++k];
                        j.color = j.fillColor = p(f.color, a.color)
                    }
                    k = b.colorByPoint || j.color;
                    if (j.options)
                        for (z in l) t(c[l[z]]) && (k = !0);
                    if (k) {
                        c = c || {};
                        k = [];
                        d = c.states || {};
                        f = d.hover = d.hover || {};
                        if (!b.marker || j.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !j.options.color && e[j.negative && h ? "negativeColor" : "color"] || va(j.color).brighten(f.brightness || e.brightness).get();
                        f = {
                            color: j.color
                        };
                        if (!q) f.fillColor =
                            j.color;
                        if (!n) f.lineColor = j.color;
                        c.hasOwnProperty("color") && !c.color && delete c.color;
                        k[""] = a.convertAttribs(w(f, c), m[""]);
                        k.hover = a.convertAttribs(d.hover, m.hover, k[""]);
                        k.select = a.convertAttribs(d.select, m.select, k[""])
                    } else k = m;
                    j.pointAttr = k
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(Ga),
                d, e = a.data || [],
                f, g, h;
            O(a, "destroy");
            V(a);
            o(a.axisTypes || [], function(b) {
                if (h = a[b]) ta(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f =
                e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof Z && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
            if (b.hoverSeries === a) b.hoverSeries = null;
            ta(b.series, a);
            for (g in a) delete a[g]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            o(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h, "L") : d === "center" ? c.push((i.plotX +
                    g) / 2, i.plotY, "L", (i.plotX + g) / 2, h, "L") : c.push(g, i.plotY, "L")), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a = this,
                b = [],
                c, d = [];
            o(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color, b.dashStyle]
                ],
                d = b.lineWidth,
                e = b.linecap !== "square",
                f = this.getGraphPath(),
                g = this.fillGraph && this.color || $;
            o(this.zones, function(d, e) {
                c.push(["zoneGraph" +
                    e, d.color || a.color, d.dashStyle || b.dashStyle
                ])
            });
            o(c, function(c, i) {
                var k = c[0],
                    j = a[k];
                if (j) j.animate({
                    d: f
                });
                else if ((d || g) && f.length) j = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? j.dashstyle = c[2] : e && (j["stroke-linecap"] = j["stroke-linejoin"] = "round"), a[k] = a.chart.renderer.path(f).attr(j).add(a.group).shadow(i < 2 && b.shadow)
            })
        },
        applyZones: function() {
            var a = this,
                b = this.chart,
                c = b.renderer,
                d = this.zones,
                e, f, g = this.clips || [],
                h, i = this.graph,
                k = this.area,
                j = v(b.chartWidth, b.chartHeight),
                m = this[(this.zoneAxis ||
                    "y") + "Axis"],
                l, n = m.reversed,
                q = b.inverted,
                r = m.horiz,
                C, z, u, y = !1;
            if (d.length && (i || k) && m.min !== s) i && i.hide(), k && k.hide(), l = m.getExtremes(), o(d, function(d, o) {
                e = n ? r ? b.plotWidth : 0 : r ? 0 : m.toPixels(l.min);
                e = E(v(p(f, e), 0), j);
                f = E(v(x(m.toPixels(p(d.value, l.max), !0)), 0), j);
                y && (e = f = m.toPixels(l.max));
                C = Math.abs(e - f);
                z = E(e, f);
                u = v(e, f);
                if (m.isXAxis) {
                    if (h = {
                            x: q ? u : z,
                            y: 0,
                            width: C,
                            height: j
                        }, !r) h.x = b.plotHeight - h.x
                } else if (h = {
                        x: 0,
                        y: q ? u : z,
                        width: j,
                        height: C
                    }, r) h.y = b.plotWidth - h.y;
                b.inverted && c.isVML && (h = m.isXAxis ? {
                    x: 0,
                    y: n ?
                        z : u,
                    height: h.width,
                    width: b.chartWidth
                } : {
                    x: h.y - b.plotLeft - b.spacingBox.x,
                    y: 0,
                    width: h.height,
                    height: b.chartHeight
                });
                g[o] ? g[o].animate(h) : (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), k && a["zoneArea" + o].clip(g[o]));
                y = d.value > l.max
            }), this.clips = g
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                o(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            if (b.xAxis) A(c, "resize", a), A(b, "destroy", function() {
                    V(c, "resize", a)
                }), a(), b.invertGroups =
                a
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || 0.1
            }).add(e), f.addClass("highcharts-series-" + this.index));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            if (a.inverted) b = c, c = this.xAxis;
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !!a.animate && b.renderer.isSVG &&
                p(c.duration, 500) || 0,
                f = a.visible ? "visible" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            o(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h) e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate()
            }, e) : a.afterAnimate();
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.isDirty,
                d = this.group,
                e = this.xAxis,
                f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({
                translateX: p(e && e.left, a.plotLeft),
                translateY: p(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && O(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(a, b) {
            var c = this.xAxis,
                d = this.yAxis,
                e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function() {
            function a(b, d, g) {
                var h, i;
                if (i = b && b.length) return h = c.kdAxisArray[d % g], b.sort(function(a, b) {
                    return a[h] - b[h]
                }), i = Math.floor(i / 2), {
                    point: b[i],
                    left: a(b.slice(0, i), d + 1, g),
                    right: a(b.slice(i + 1), d + 1, g)
                }
            }

            function b() {
                var b =
                    gb(c.points || [], function(a) {
                        return a.y !== null
                    });
                c.kdTree = a(b, d, d)
            }
            var c = this,
                d = c.kdDimensions;
            delete c.kdTree;
            c.options.kdSync ? b() : setTimeout(b)
        },
        searchKDTree: function(a, b) {
            function c(a, b, k, j) {
                var m = b.point,
                    l = d.kdAxisArray[k % j],
                    n, q, r = m;
                q = t(a[e]) && t(m[e]) ? Math.pow(a[e] - m[e], 2) : null;
                n = t(a[f]) && t(m[f]) ? Math.pow(a[f] - m[f], 2) : null;
                n = (q || 0) + (n || 0);
                m.dist = t(n) ? Math.sqrt(n) : Number.MAX_VALUE;
                m.distX = t(q) ? Math.sqrt(q) : Number.MAX_VALUE;
                l = a[l] - m[l];
                n = l < 0 ? "left" : "right";
                q = l < 0 ? "right" : "left";
                b[n] && (n = c(a, b[n],
                    k + 1, j), r = n[g] < r[g] ? n : m);
                b[q] && Math.sqrt(l * l) < r[g] && (a = c(a, b[q], k + 1, j), r = a[g] < r[g] ? a : r);
                return r
            }
            var d = this,
                e = this.kdAxisArray[0],
                f = this.kdAxisArray[1],
                g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    Sb.prototype = {
        destroy: function() {
            Ma(this, this.axis)
        },
        render: function(a) {
            var b = this.options,
                c = b.format,
                c = c ? La(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c,
                null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        },
        setOffset: function(a, b) {
            var c = this.axis,
                d = c.chart,
                e = d.inverted,
                f = c.reversed,
                f = this.isNegative && !f || !this.isNegative && f,
                g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                c = c.translate(0),
                c = Q(g - c),
                h = d.xAxis[0].translate(this.x) + a,
                i = d.plotHeight,
                f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? i - h - b : f ? i - g - c : i - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop ===
                !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    Ha.prototype.getStacks = function() {
        var a = this;
        o(a.yAxis, function(a) {
            if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks
        });
        o(a.series, function(b) {
            if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) b.stackKey = b.type + p(b.options.stack, "")
        })
    };
    H.prototype.buildStacks = function() {
        var a = this.series,
            b = p(this.options.reversedStacks, !0),
            c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage)
                for (c = 0; c < a.length; c++) a[c].setPercentStacks()
        }
    };
    H.prototype.renderStackTotals = function() {
        var a = this.chart,
            b = a.renderer,
            c = this.stacks,
            d, e, f = this.stackTotalGroup;
        if (!f) this.stackTotalGroup = f = b.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add();
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)
            for (e in a = c[d], a) a[e].render(f)
    };
    H.prototype.resetStacks = function() {
        var a = this.stacks,
            b, c;
        if (!this.isXAxis)
            for (b in a)
                for (c in a[b]) a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(),
                    delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0)
    };
    H.prototype.cleanStacks = function() {
        var a, b, c;
        if (!this.isXAxis) {
            if (this.oldStacks) a = this.stacks = this.oldStacks;
            for (b in a)
                for (c in a[b]) a[b][c].cum = a[b][c].total
        }
    };
    P.prototype.setStackedPoints = function() {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var a = this.processedXData,
                b = this.processedYData,
                c = [],
                d = b.length,
                e = this.options,
                f = e.threshold,
                g = e.startFromThreshold ? f : 0,
                h = e.stack,
                e = e.stacking,
                i = this.stackKey,
                k = "-" + i,
                j = this.negStacks,
                m = this.yAxis,
                l = m.stacks,
                n = m.oldStacks,
                q, r, o, z, u, y, s;
            m.stacksTouched += 1;
            for (u = 0; u < d; u++) {
                y = a[u];
                s = b[u];
                q = this.getStackIndicator(q, y, this.index);
                z = q.key;
                o = (r = j && s < (g ? 0 : f)) ? k : i;
                l[o] || (l[o] = {});
                if (!l[o][y]) n[o] && n[o][y] ? (l[o][y] = n[o][y], l[o][y].total = null) : l[o][y] = new Sb(m, m.options.stackLabels, r, y, h);
                o = l[o][y];
                o.points[z] = [p(o.cum, g)];
                o.touched = m.stacksTouched;
                e === "percent" ? (r = r ? i : k, j && l[r] && l[r][y] ? (r = l[r][y], o.total = r.total = v(r.total, o.total) + Q(s) || 0) : o.total = la(o.total + (Q(s) ||
                    0))) : o.total = la(o.total + (s || 0));
                o.cum = p(o.cum, g) + (s || 0);
                o.points[z].push(o.cum);
                c[u] = o.cum
            }
            if (e === "percent") m.usePercentage = !0;
            this.stackedYData = c;
            m.oldStacks = {}
        }
    };
    P.prototype.setPercentStacks = function() {
        var a = this,
            b = a.stackKey,
            c = a.yAxis.stacks,
            d = a.processedXData,
            e;
        o([b, "-" + b], function(b) {
            var f;
            for (var g = d.length, h, i; g--;)
                if (h = d[g], e = a.getStackIndicator(e, h, a.index), f = (i = c[b] && c[b][h]) && i.points[e.key], h = f) i = i.total ? 100 / i.total : 0, h[0] = la(h[0] * i), h[1] = la(h[1] * i), a.stackedYData[g] = h[1]
        })
    };
    P.prototype.getStackIndicator =
        function(a, b, c) {
            !t(a) || a.x !== b ? a = {
                x: b,
                index: 0
            } : a.index++;
            a.key = [c, b, a.index].join(",");
            return a
        };
    w(Ha.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), O(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis",
                f = this.options;
            new H(this, B(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = na(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d)
        },
        showLoading: function(a) {
            var b = this,
                c = b.options,
                d =
                b.loadingDiv,
                e = c.loading,
                f = function() {
                    d && G(d, {
                        left: b.plotLeft + "px",
                        top: b.plotTop + "px",
                        width: b.plotWidth + "px",
                        height: b.plotHeight + "px"
                    })
                };
            if (!d) b.loadingDiv = d = aa(Ta, {
                className: "highcharts-loading"
            }, w(e.style, {
                zIndex: 10,
                display: $
            }), b.container), b.loadingSpan = aa("span", null, e.labelStyle, d), A(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown) G(d, {
                opacity: 0,
                display: ""
            }), rb(d, {
                opacity: e.style.opacity
            }, {
                duration: e.showDuration || 0
            }), b.loadingShown = !0;
            f()
        },
        hideLoading: function() {
            var a =
                this.options,
                b = this.loadingDiv;
            b && rb(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    G(b, {
                        display: $
                    })
                }
            });
            this.loadingShown = !1
        }
    });
    w(Da.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                if (f.y === null && h) f.graphic = h.destroy();
                if (ha(a) && !Ja(a)) f.redraw = function() {
                    if (h && h.element && a && a.marker && a.marker.symbol) f.graphic = h.destroy();
                    if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                if (m && f.name) m[f.x] =
                    f.name;
                j.data[i] = f.options;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries) k.isDirtyBox = !0;
                if (j.legendType === "point") k.isDirtyLegend = !0;
                b && k.redraw(c)
            }
            var f = this,
                g = f.series,
                h = f.graphic,
                i, k = g.chart,
                j = g.options,
                m = g.xAxis && g.xAxis.names,
                b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {
                options: a
            }, e)
        },
        remove: function(a, b) {
            this.series.removePoint(Oa(this, this.series.data), a, b)
        }
    });
    w(P.prototype, {
        addPoint: function(a, b, c, d) {
            var e = this,
                f = e.options,
                g = e.data,
                h = e.graph,
                i = e.area,
                k = e.chart,
                j = e.xAxis &&
                e.xAxis.names,
                m = h && h.shift || 0,
                l = ["graph", "area"],
                h = f.data,
                n, q = e.xData;
            Xa(d, k);
            if (c) {
                for (d = e.zones.length; d--;) l.push("zoneGraph" + d, "zoneArea" + d);
                o(l, function(a) {
                    if (e[a]) e[a].shift = m + (f.step ? 2 : 1)
                })
            }
            if (i) i.isArea = !0;
            b = p(b, !0);
            i = {
                series: e
            };
            e.pointClass.prototype.applyOptions.apply(i, [a]);
            l = i.x;
            d = q.length;
            if (e.requireSorting && l < q[d - 1])
                for (n = !0; d && q[d - 1] > l;) d--;
            e.updateParallelArrays(i, "splice", d, 0, 0);
            e.updateParallelArrays(i, d);
            if (j && i.name) j[l] = i.name;
            h.splice(d, 0, a);
            n && (e.data.splice(d, 0, null), e.processData());
            f.legendType === "point" && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), k.redraw())
        },
        removePoint: function(a, b, c) {
            var d = this,
                e = d.data,
                f = e[a],
                g = d.points,
                h = d.chart,
                i = function() {
                    e.length === g.length && g.splice(a, 1);
                    e.splice(a, 1);
                    d.options.data.splice(a, 1);
                    d.updateParallelArrays(f || {
                        series: d
                    }, "splice", a, 1);
                    f && f.destroy();
                    d.isDirty = !0;
                    d.isDirtyData = !0;
                    b && h.redraw()
                };
            Xa(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove",
                null, i) : i()
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart,
                a = p(a, !0);
            if (!c.isRemoving) c.isRemoving = !0, O(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            });
            c.isRemoving = !1
        },
        update: function(a, b) {
            var c = this,
                d = this.chart,
                e = this.userOptions,
                f = this.type,
                g = K[f].prototype,
                h = ["group", "markerGroup", "dataLabelsGroup"],
                i;
            if (a.type && a.type !== f || a.zIndex !== void 0) h.length = 0;
            o(h, function(a) {
                h[a] = c[a];
                delete c[a]
            });
            a = B(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (i in g) this[i] = s;
            w(this, K[a.type || f].prototype);
            o(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1)
        }
    });
    w(H.prototype, {
        update: function(a, b) {
            var c = this.chart,
                a = c.options[this.coll][this.options.index] = B(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = s;
            this.init(c, w(a, {
                events: s
            }));
            c.isDirtyBox = !0;
            p(b, !0) && c.redraw()
        },
        remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] &&
                d[e].remove(!1);
            ta(b.axes, this);
            ta(b[c], this);
            b.options[c].splice(this.options.index, 1);
            o(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw()
        },
        setTitle: function(a, b) {
            this.update({
                title: a
            }, b)
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b)
        }
    });
    var Ea = ia(P);
    K.line = Ea;
    W.area = B(S, {
        softThreshold: !1,
        threshold: 0
    });
    var xa = ia(P, {
        type: "area",
        getSegments: function() {
            var a = this,
                b = [],
                c = [],
                d = [],
                e = this.xAxis,
                f = this.yAxis,
                g = f.stacks[this.stackKey],
                h = {},
                i, k, j = this.points,
                m = this.options.connectNulls,
                l, n, q;
            if (this.options.stacking && !this.cropped) {
                for (n = 0; n < j.length; n++) h[j[n].x] = j[n];
                for (q in g) g[q].total !== null && d.push(+q);
                d.sort(function(a, b) {
                    return a - b
                });
                o(d, function(b) {
                    var d = null,
                        j;
                    if (!m || h[b] && h[b].y !== null)
                        if (h[b]) c.push(h[b]);
                        else {
                            for (n = a.index; n <= f.series.length; n++)
                                if (l = a.getStackIndicator(null, b, n), j = g[b].points[l.key]) {
                                    d = j[1];
                                    break
                                }
                            i = e.translate(b);
                            k = f.getThreshold(d);
                            c.push({
                                y: null,
                                plotX: i,
                                clientX: i,
                                plotY: k,
                                yBottom: k,
                                onMouseOver: ka
                            })
                        }
                });
                c.length && b.push(c)
            } else P.prototype.getSegments.call(this),
                b = this.segments;
            this.segments = b
        },
        getSegmentPath: function(a) {
            var b = P.prototype.getSegmentPath.call(this, a),
                c = [].concat(b),
                d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold),
                g;
            d === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)
                for (d = a.length - 1; d >= 0; d--) g = p(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g);
            else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        },
        closeSegment: function(a, b, c) {
            a.push("L", b[b.length - 1].plotX,
                c, "L", b[0].plotX, c)
        },
        drawGraph: function() {
            this.areaPath = [];
            P.prototype.drawGraph.apply(this);
            var a = this,
                b = this.areaPath,
                c = this.options,
                d = [
                    ["area", this.color, c.fillColor]
                ];
            o(this.zones, function(b, f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            o(d, function(d) {
                var f = d[0],
                    g = a[f];
                g ? g.animate({
                    d: b
                }) : a[f] = a.chart.renderer.path(b).attr({
                    fill: p(d[2], va(d[1]).setOpacity(p(c.fillOpacity, 0.75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        },
        drawLegendSymbol: M.drawRectangle
    });
    K.area = xa;
    W.spline = B(S);
    Ea = ia(P, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1],
                g = a[c + 1],
                h, i, k, j;
            if (f && g) {
                a = f.plotY;
                k = g.plotX;
                var g = g.plotY,
                    m;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                k = (1.5 * d + k) / 2.5;
                j = (1.5 * e + g) / 2.5;
                m = (j - i) * (k - d) / (k - h) + e - j;
                i += m;
                j += m;
                i > a && i > e ? (i = v(a, e), j = 2 * e - i) : i < a && i < e && (i = E(a, e), j = 2 * e - i);
                j > g && j > e ? (j = v(g, e), i = 2 * e - j) : j < g && j < e && (j = E(g, e), i = 2 * e - j);
                b.rightContX = k;
                b.rightContY = j
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M",
                d, e
            ];
            return b
        }
    });
    K.spline = Ea;
    W.areaspline = B(W.area);
    xa = xa.prototype;
    Ea = ia(Ea, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: xa.getSegmentPath,
        closeSegment: xa.closeSegment,
        drawGraph: xa.drawGraph,
        drawLegendSymbol: M.drawRectangle
    });
    K.areaspline = Ea;
    W.column = B(S, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    Ea = ia(P, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            P.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && o(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            })
        },
        getColumnMetrics: function() {
            var a =
                this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {},
                h, i = 0;
            b.grouping === !1 ? i = 1 : o(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis;
                if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === s && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h
            });
            var k = E(Q(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                j = k * b.groupPadding,
                m = (k - 2 * j) / i,
                b = E(b.maxPointWidth || c.len, p(b.pointWidth, m * (1 - 2 * b.pointPadding)));
            return a.columnMetrics = {
                width: b,
                offset: (m - b) / 2 + (j + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * m - k / 2) * (e ? -1 : 1)
            }
        },
        crispCol: function(a, b, c, d) {
            var e = this.chart,
                f = this.borderWidth,
                g = -(f % 2 ? 0.5 : 0),
                f = f % 2 ? 0.5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            g = Q(b) <= 0.5;
            d = Math.round(b + d) + f;
            b = Math.round(b) + f;
            d -= b;
            g && (b -= 1, d += 1);
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = p(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                i = h.width,
                k = a.barW = v(i, 1 + 2 * d),
                j = a.pointXOffset = h.offset;
            b.inverted && (f -= 0.5);
            c.pointPadding && (k = za(k));
            P.prototype.translate.apply(a);
            o(a.points, function(c) {
                var d = E(p(c.yBottom, f), 9E4),
                    h = 999 + Q(d),
                    h = E(v(-h, c.plotY), e.len + h),
                    q = c.plotX + j,
                    r = k,
                    o = E(h, d),
                    z, u = v(h, d) - o;
                Q(u) < g && g && (u = g, z = !e.reversed && !c.negative || e.reversed && c.negative, o = Q(o - f) > g ? d - g : f - (z ? g : 0));
                c.barX = q;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - q - r / 2, u] : [q + r / 2, h + e.pos - b.plotTop, u];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(q, o, r, u)
            })
        },
        getSymbol: ka,
        drawLegendSymbol: M.drawRectangle,
        drawGraph: ka,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            o(a.points, function(h) {
                var i = h.plotY,
                    k = h.graphic;
                if (i !== s && !isNaN(i) && h.y !== null) f = h.shapeArgs, i = t(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], k ? ($a(k), k.attr(i)[b.pointCount <
                    e ? "animate" : "attr"](B(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);
                else if (k) h.graphic = k.destroy()
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            if (ea) a ? (e.scaleY = 0.001, a = E(b.pos + b.len, v(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && o(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            });
            P.prototype.remove.apply(a, arguments)
        }
    });
    K.column = Ea;
    W.bar = B(W.column);
    xa = ia(Ea, {
        type: "bar",
        inverted: !0
    });
    K.bar = xa;
    W.scatter = B(S, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    xa = ia(P, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function() {
            this.options.lineWidth && P.prototype.drawGraph.call(this)
        }
    });
    K.scatter = xa;
    W.pie = B(S, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.y === null ? void 0 : this.point.name
            },
            x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    S = {
        type: "pie",
        isCartesian: !1,
        pointClass: ia(Da, {
            init: function() {
                Da.prototype.init.apply(this, arguments);
                var a = this,
                    b;
                a.name = p(a.name, "Slice");
                b = function(b) {
                    a.slice(b.type === "select")
                };
                A(a, "select", b);
                A(a, "unselect", b);
                return a
            },
            setVisible: function(a, b) {
                var c = this,
                    d = c.series,
                    e = d.chart,
                    f = d.options.ignoreHiddenPoint,
                    b = p(b, f);
                if (a !== c.visible) {
                    c.visible = c.options.visible = a = a === s ? !c.visible : a;
                    d.options.data[Oa(c, d.data)] =
                        c.options;
                    o(["graphic", "dataLabel", "connector", "shadowGroup"], function(b) {
                        if (c[b]) c[b][a ? "show" : "hide"](!0)
                    });
                    c.legendItem && e.legend.colorizeItem(c, a);
                    !a && c.state === "hover" && c.setState("");
                    if (f) d.isDirty = !0;
                    b && e.redraw()
                }
            },
            slice: function(a, b, c) {
                var d = this.series;
                Xa(c, d.chart);
                p(b, !0);
                this.sliced = this.options.sliced = a = t(a) ? a : !this.sliced;
                d.options.data[Oa(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            },
            haloPath: function(a) {
                var b = this.shapeArgs,
                    c = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start,
                    end: b.end
                })
            }
        }),
        requireSorting: !1,
        directTouch: !0,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        animate: function(a) {
            var b = this,
                c = b.points,
                d = b.startAngleRad;
            if (!a) o(c, function(a) {
                var c =
                    a.graphic,
                    g = a.shapeArgs;
                c && (c.attr({
                    r: a.startR || b.center[3] / 2,
                    start: d,
                    end: d
                }), c.animate({
                    r: g.r,
                    start: g.start,
                    end: g.end
                }, b.options.animation))
            }), b.animate = null
        },
        updateTotals: function() {
            var a, b = 0,
                c = this.points,
                d = c.length,
                e, f = this.options.ignoreHiddenPoint;
            for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; a < d; a++) e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b
        },
        generatePoints: function() {
            P.prototype.generatePoints.call(this);
            this.updateTotals()
        },
        translate: function(a) {
            this.generatePoints();
            var b = 0,
                c = this.options,
                d = c.slicedOffset,
                e = d + c.borderWidth,
                f, g, h, i = c.startAngle || 0,
                k = this.startAngleRad = ua / 180 * (i - 90),
                i = (this.endAngleRad = ua / 180 * (p(c.endAngle, i + 360) - 90)) - k,
                j = this.points,
                m = c.dataLabels.distance,
                c = c.ignoreHiddenPoint,
                l, n = j.length,
                q;
            if (!a) this.center = a = this.getCenter();
            this.getX = function(b, c) {
                h = Y.asin(E((b - a[1]) / (a[2] / 2 + m), 1));
                return a[0] + (c ? -1 : 1) * ba(h) * (a[2] / 2 + m)
            };
            for (l = 0; l < n; l++) {
                q = j[l];
                f = k + b * i;
                if (!c || q.visible) b += q.percentage / 100;
                g = k + b * i;
                q.shapeType = "arc";
                q.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: x(f * 1E3) / 1E3,
                    end: x(g * 1E3) / 1E3
                };
                h = (g + f) / 2;
                h > 1.5 * ua ? h -= 2 * ua : h < -ua / 2 && (h += 2 * ua);
                q.slicedTranslation = {
                    translateX: x(ba(h) * d),
                    translateY: x(ga(h) * d)
                };
                f = ba(h) * a[2] / 2;
                g = ga(h) * a[2] / 2;
                q.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
                q.half = h < -ua / 2 || h > ua / 2 ? 1 : 0;
                q.angle = h;
                e = E(e, m / 2);
                q.labelPos = [a[0] + f + ba(h) * m, a[1] + g + ga(h) * m, a[0] + f + ba(h) * e, a[1] + g + ga(h) * e, a[0] + f, a[1] + g, m < 0 ? "center" : q.half ? "right" : "left", h]
            }
        },
        drawGraph: null,
        drawPoints: function() {
            var a = this,
                b = a.chart.renderer,
                c, d, e = a.options.shadow,
                f, g, h;
            if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group);
            o(a.points, function(i) {
                if (i.y !== null) {
                    d = i.graphic;
                    g = i.shapeArgs;
                    f = i.shadowGroup;
                    if (e && !f) f = i.shadowGroup = b.g("shadow").add(a.shadowGroup);
                    c = i.sliced ? i.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    };
                    f && f.attr(c);
                    if (d) d.setRadialReference(a.center).animate(w(g, c));
                    else {
                        h = {
                            "stroke-linejoin": "round"
                        };
                        if (!i.visible) h.visibility = "hidden";
                        i.graphic = d = b[i.shapeType](g).setRadialReference(a.center).attr(i.pointAttr[i.selected ? "select" : ""]).attr(h).attr(c).add(a.group).shadow(e,
                            f)
                    }
                }
            })
        },
        searchPoint: ka,
        sortByAngle: function(a, b) {
            a.sort(function(a, d) {
                return a.angle !== void 0 && (d.angle - a.angle) * b
            })
        },
        drawLegendSymbol: M.drawRectangle,
        getCenter: hc.getCenter,
        getSymbol: ka
    };
    S = ia(P, S);
    K.pie = S;
    P.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            i, k, j = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), k = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex ||
            6), p(d.defer, !0) && (k.attr({
            opacity: +h
        }), h || A(a, "afterAnimate", function() {
            a.visible && k.show();
            k[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, o(e, function(e) {
            var h, n = e.dataLabel,
                q, r, o = e.connector,
                z = !0,
                u, y = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled);
            if (n && !h) e.dataLabel = n.destroy();
            else if (h) {
                d = B(g, f);
                u = d.style;
                h = d.rotation;
                q = e.getLabelConfig();
                i = d.format ? La(d.format, q) : d.formatter.call(q, d);
                u.color = p(d.color, u.color, a.color, "black");
                if (n)
                    if (t(i)) n.attr({
                            text: i
                        }),
                        z = !1;
                    else {
                        if (e.dataLabel = n = n.destroy(), o) e.connector = o.destroy()
                    }
                else if (t(i)) {
                    n = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    if (u.color === "contrast") y.color = d.inside || d.distance < 0 || b.stacking ? j.getContrast(e.color || a.color) : "#000000";
                    if (c) y.cursor = c;
                    for (r in n) n[r] === s && delete n[r];
                    n = e.dataLabel = j[h ? "text" : "label"](i, 0, -999, d.shape, null, null, d.useHTML).attr(n).css(w(u, y)).add(k).shadow(d.shadow)
                }
                n && a.alignDataLabel(e,
                    n, d, null, z)
            }
        })
    };
    P.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = p(a.plotX, -999),
            i = p(a.plotY, -999),
            k = b.getBBox(),
            j = f.renderer.fontMetrics(c.style.fontSize).b,
            m = this.visible && (a.series.forceDL || f.isInsidePlot(h, x(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        if (m) d = w({
            x: g ? f.plotWidth - i : h,
            y: x(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), w(c, {
            width: k.width,
            height: k.height
        }), c.rotation ? (a = f.renderer.rotCorr(j, c.rotation), b[e ? "attr" : "animate"]({
            x: d.x + c.x + d.width / 2 + a.x,
            y: d.y + c.y + d.height / 2
        }).attr({
            align: c.align
        })) : (b.align(c, null, d), g = b.alignAttr, p(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, k, d, e) : p(c.crop, !0) && (m = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + k.width, g.y + k.height)), c.shape && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        if (!m) $a(b), b.attr({
            y: -999
        }), b.placed = !1
    };
    P.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            i = b.verticalAlign,
            k, j, m = a.box ? 0 : a.padding || 0;
        k = c.x + m;
        if (k < 0) h === "right" ? b.align = "left" : b.x = -k, j = !0;
        k = c.x + d.width - m;
        if (k > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - k, j = !0;
        k = c.y + m;
        if (k < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -k, j = !0;
        k = c.y + d.height - m;
        if (k > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - k, j = !0;
        if (j) a.placed = !f, a.align(b, null, e)
    };
    if (K.pie) K.pie.prototype.drawDataLabels = function() {
        var a = this,
            b = a.data,
            c, d = a.chart,
            e = a.options.dataLabels,
            f = p(e.connectorPadding, 10),
            g = p(e.connectorWidth, 1),
            h = d.plotWidth,
            i = d.plotHeight,
            k, j, m = p(e.softConnector, !0),
            l = e.distance,
            n = a.center,
            q = n[2] / 2,
            r = n[1],
            C = l > 0,
            z, u, y, s = [
                [],
                []
            ],
            t, w, B, D, A, F = [0, 0, 0, 0],
            K = function(a, b) {
                return b.y - a.y
            };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            P.prototype.drawDataLabels.apply(a);
            o(b, function(a) {
                a.dataLabel && a.visible && s[a.half].push(a)
            });
            for (D = 2; D--;) {
                var I = [],
                    M = [],
                    H = s[D],
                    G = H.length,
                    J;
                if (G) {
                    a.sortByAngle(H, D - 0.5);
                    for (A = b = 0; !b && H[A];) b = H[A] && H[A].dataLabel && (H[A].dataLabel.getBBox().height || 21), A++;
                    if (l > 0) {
                        u = E(r + q + l, d.plotHeight);
                        for (A = v(0, r - q - l); A <= u; A += b) I.push(A);
                        u = I.length;
                        if (G > u) {
                            c = [].concat(H);
                            c.sort(K);
                            for (A = G; A--;) c[A].rank = A;
                            for (A = G; A--;) H[A].rank >= u && H.splice(A, 1);
                            G = H.length
                        }
                        for (A = 0; A < G; A++) {
                            c = H[A];
                            y = c.labelPos;
                            c = 9999;
                            var O, N;
                            for (N = 0; N < u; N++) O = Q(I[N] - y[1]), O < c && (c = O, J = N);
                            if (J < A && I[A] !== null) J = A;
                            else
                                for (u < G - A + J && I[A] !== null && (J = u - G + A); I[J] === null;) J++;
                            M.push({
                                i: J,
                                y: I[J]
                            });
                            I[J] = null
                        }
                        M.sort(K)
                    }
                    for (A = 0; A < G; A++) {
                        c = H[A];
                        y = c.labelPos;
                        z = c.dataLabel;
                        B = c.visible === !1 ? "hidden" : "inherit";
                        c = y[1];
                        if (l > 0) {
                            if (u = M.pop(), J = u.i, w = u.y, c > w && I[J + 1] !== null || c < w && I[J - 1] !== null) w = E(v(0, c), d.plotHeight)
                        } else w =
                            c;
                        t = e.justify ? n[0] + (D ? -1 : 1) * (q + l) : a.getX(w === r - q - l || w === r + q + l ? c : w, D);
                        z._attr = {
                            visibility: B,
                            align: y[6]
                        };
                        z._pos = {
                            x: t + e.x + ({
                                left: f,
                                right: -f
                            }[y[6]] || 0),
                            y: w + e.y - 10
                        };
                        z.connX = t;
                        z.connY = w;
                        if (this.options.size === null) u = z.width, t - u < f ? F[3] = v(x(u - t + f), F[3]) : t + u > h - f && (F[1] = v(x(t + u - h + f), F[1])), w - b / 2 < 0 ? F[0] = v(x(-w + b / 2), F[0]) : w + b / 2 > i && (F[2] = v(x(w + b / 2 - i), F[2]))
                    }
                }
            }
            if (Fa(F) === 0 || this.verifyDataLabelOverflow(F)) this.placeDataLabels(), C && g && o(this.points, function(b) {
                k = b.connector;
                y = b.labelPos;
                if ((z = b.dataLabel) && z._pos &&
                    b.visible) B = z._attr.visibility, t = z.connX, w = z.connY, j = m ? ["M", t + (y[6] === "left" ? 5 : -5), w, "C", t, w, 2 * y[2] - y[4], 2 * y[3] - y[5], y[2], y[3], "L", y[4], y[5]] : ["M", t + (y[6] === "left" ? 5 : -5), w, "L", y[2], y[3], "L", y[4], y[5]], k ? (k.animate({
                    d: j
                }), k.attr("visibility", B)) : b.connector = k = a.chart.renderer.path(j).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: B
                }).add(a.dataLabelsGroup);
                else if (k) b.connector = k.destroy()
            })
        }
    }, K.pie.prototype.placeDataLabels = function() {
        o(this.points, function(a) {
            var b =
                a.dataLabel;
            if (b && a.visible)(a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                y: -999
            })
        })
    }, K.pie.prototype.alignDataLabel = ka, K.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center,
            c = this.options,
            d = c.center,
            e = c.minSize || 80,
            f = e,
            g;
        d[0] !== null ? f = v(b[2] - v(a[1], a[3]), e) : (f = v(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
        d[1] !== null ? f = v(E(f, b[2] - v(a[0], a[2])), e) : (f = v(E(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
        f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ?
            f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), o(this.points, function(a) {
            if (a.dataLabel) a.dataLabel._pos = null
        }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
        return g
    };
    if (K.column) K.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted,
            g = a.series,
            h = a.dlBox || a.shapeArgs,
            i = p(a.below, a.plotY > p(this.translatedThreshold, g.yAxis.len)),
            k = p(c.inside, !!this.options.stacking);
        if (h && (d = B(h), f && (d = {
                x: g.yAxis.len - d.y - d.height,
                y: g.xAxis.len - d.x - d.width,
                width: d.height,
                height: d.width
            }), !k)) f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
        c.align = p(c.align, !f || k ? "center" : i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || k ? "middle" : i ? "top" : "bottom");
        P.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    (function(a) {
        var b = a.Chart,
            c = a.each,
            d = a.pick,
            e = HighchartsAdapter.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var e = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled ||
                        a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function(b) {
                        c(a.points, function(a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var b = a.length,
                d, e, k, j, m, l, n;
            for (e = 0; e < b; e++)
                if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                k = a[e];
                for (d = e + 1; d < b; ++d)
                    if (j = a[d], k && j && k.placed && j.placed &&
                        k.newOpacity !== 0 && j.newOpacity !== 0 && (m = k.alignAttr, l = j.alignAttr, n = 2 * (k.box ? 0 : k.padding), m = !(l.x > m.x + (k.width - n) || l.x + (j.width - n) < m.x || l.y > m.y + (k.height - n) || l.y + (j.height - n) < m.y)))(k.labelrank < j.labelrank ? k : j).newOpacity = 0
            }
            c(a, function(a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function() {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(D);
    var jb = D.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(a) {
                    for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode;
                    if (d !== s && d !== b.hoverPoint) d.onMouseOver(a)
                };
            o(a.points, function(a) {
                if (a.graphic) a.graphic.element.point = a;
                if (a.dataLabel) a.dataLabel.element.point = a
            });
            if (!a._hasTracking) o(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), Za)) a[b].on("touchstart", f)
            }), a._hasTracking = !0
        },
        drawTrackerGraph: function() {
            var a =
                this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                i = f.options.tooltip.snap,
                k = a.tracker,
                j = b.cursor,
                m = j && {
                    cursor: j
                },
                j = a.singlePoints,
                l, n = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                q = "rgba(192,192,192," + (ea ? 1.0E-4 : 0.002) + ")";
            if (e && !c)
                for (l = e + 1; l--;) d[l] === "M" && d.splice(l + 1, 0, d[l + 1] - i, d[l + 2], "L"), (l && d[l] === "M" || l === e) && d.splice(l, 0, "L", d[l - 2] + i, d[l - 1]);
            for (l = 0; l < j.length; l++) e = j[l], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            k ? k.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: q,
                fill: c ? q : $,
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), o([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(m);
                if (Za) a.on("touchstart", n)
            }))
        }
    };
    if (K.column) Ea.prototype.drawTracker = jb.drawTrackerPoint;
    if (K.pie) K.pie.prototype.drawTracker = jb.drawTrackerPoint;
    if (K.scatter) xa.prototype.drawTracker =
        jb.drawTrackerPoint;
    w(sb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                        a.setVisible && a.setVisible()
                    },
                    b = {
                        browserEvent: b
                    };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : O(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = aa("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            A(a.checkbox, "click", function(b) {
                O(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select()
                })
            })
        }
    });
    N.legend.itemStyle.cursor = "pointer";
    w(Ha.prototype, {
        showResetZoom: function() {
            var a = this,
                b = N.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            O(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? o(this.axes, function(a) {
                b = a.zoom()
            }) : o(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e) this.showResetZoom();
            else if (!d && ha(e)) this.resetZoomButton = e.destroy();
            b && this.redraw(p(this.options.chart.animation, a && a.animation, this.pointCount < 100))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && o(d, function(a) {
                a.setState()
            });
            o(b === "xy" ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"],
                    h = c[b ? "xAxis" : "yAxis"][0],
                    i = c[b ? "mouseDownX" : "mouseDownY"],
                    k = (h.pointRange || 0) / 2,
                    j = h.getExtremes(),
                    m = h.toValue(i - d, !0) + k,
                    k = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - k,
                    i = i > d;
                if (h.series.length && (i || m > E(j.dataMin, j.min)) && (!i || k < v(j.dataMax, j.max))) h.setExtremes(m, k, !1, !1, {
                    trigger: "pan"
                }), e = !0;
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            G(c.container, {
                cursor: "move"
            })
        }
    });
    w(Da.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Oa(c, d.data)] = c.options;
                c.setState(a && "select");
                b || o(e.getSelectedPoints(), function(a) {
                    if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[Oa(a, d.data)] = a.options, a.setState(""),
                        a.firePointEvent("unselect")
                })
            })
        },
        onMouseOver: function(a, b) {
            var c = this.series,
                d = c.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) d.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || Oa(this, b) === -1) this.setState(), a.hoverPoint = null
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a =
                    B(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) A(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = T(this.plotX),
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = W[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                i = g && g.states[a],
                k = i && i.enabled === !1,
                j = e.stateMarkerGraphic,
                m = this.marker || {},
                l = e.chart,
                n = e.halo,
                q, a = a || "";
            q = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (k || h && i.enabled ===
                    !1) || a && m.states && m.states[a] && m.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && q.r, this.graphic.attr(B(q, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), j && j.hide();
                else {
                    if (a && i)
                        if (g = i.radius, m = m.symbol || e.symbol, j && j.currentSymbol !== m && (j = j.destroy()), j) j[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else if (m) e.stateMarkerGraphic = j = l.renderer.symbol(m, c - g, d - g, 2 * g, 2 * g).attr(q).add(e.markerGroup), j.currentSymbol = m;
                    if (j) j[a && l.isInsidePlot(c, d, l.inverted) ? "show" : "hide"](), j.element.point = this
                }
                if ((c =
                        f[a] && f[a].halo) && c.size) {
                    if (!n) e.halo = n = l.renderer.path().add(l.seriesGroup);
                    n.attr(w({
                        fill: va(this.color || e.color).setOpacity(c.opacity).get()
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })
                } else n && n.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, a * 2, a * 2)
        }
    });
    w(P.prototype, {
        onMouseOver: function() {
            var a =
                this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && O(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && O(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState()
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                e = b.lineWidth,
                b = 0,
                a = a || "";
            if (this.state !==
                a && (this.state = a, !(d[a] && d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
                a = {
                    "stroke-width": e
                };
                for (c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
            }
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === s ? !h : a) ? "show" : "hide";
            o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint &&
                    d.hoverPoint.series) === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && o(d.series, function(a) {
                if (a.options.stacking && a.visible) a.isDirty = !0
            });
            o(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            if (g) d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            O(c, f)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === s ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            O(this, a ? "select" : "unselect")
        },
        drawTracker: jb.drawTrackerGraph
    });
    R(P.prototype, "init", function(a) {
        var b;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        (b = this.xAxis) && b.options.ordinal && A(this, "updatedData", function() {
            delete b.ordinalIndex
        })
    });
    R(H.prototype, "getTimeTicks", function(a, b, c, d, e, f, g, h) {
        var i = 0,
            k = 0,
            j, m = {},
            l, n, q, r = [],
            o = -Number.MAX_VALUE,
            p = this.options.tickPixelInterval;
        if (!this.options.ordinal && !this.options.breaks || !f || f.length < 3 || c === s) return a.call(this, b, c, d, e);
        for (n = f.length; k < n; k++) {
            q = k && f[k - 1] > d;
            f[k] < c && (i = k);
            if (k === n - 1 || f[k + 1] - f[k] > g * 5 ||
                q) {
                if (f[k] > o) {
                    for (j = a.call(this, b, f[i], f[k], e); j.length && j[0] <= o;) j.shift();
                    j.length && (o = j[j.length - 1]);
                    r = r.concat(j)
                }
                i = k + 1
            }
            if (q) break
        }
        a = j.info;
        if (h && a.unitRange <= J.hour) {
            k = r.length - 1;
            for (i = 1; i < k; i++) ja("%d", r[i]) !== ja("%d", r[i - 1]) && (m[r[i]] = "day", l = !0);
            l && (m[r[0]] = "day");
            a.higherRanks = m
        }
        r.info = a;
        if (h && t(p)) {
            var h = a = r.length,
                k = [],
                u;
            for (l = []; h--;) i = this.translate(r[h]), u && (l[h] = u - i), k[h] = u = i;
            l.sort();
            l = l[T(l.length / 2)];
            l < p * 0.6 && (l = null);
            h = r[a - 1] > d ? a - 1 : a;
            for (u = void 0; h--;) i = k[h], d = u - i, u && d < p * 0.8 && (l ===
                null || d < l * 0.8) ? (m[r[h]] && !m[r[h + 1]] ? (d = h + 1, u = i) : d = h, r.splice(d, 1)) : u = i
        }
        return r
    });
    w(H.prototype, {
        beforeSetTickPositions: function() {
            var a, b = [],
                c = !1,
                d, e = this.getExtremes(),
                f = e.min,
                g = e.max,
                h, i = this.isXAxis && !!this.options.breaks;
            if ((e = this.options.ordinal) || i) {
                o(this.series, function(c, d) {
                    if (c.visible !== !1 && (c.takeOrdinalPosition !== !1 || i))
                        if (b = b.concat(c.processedXData), a = b.length, b.sort(function(a, b) {
                                return a - b
                            }), a)
                            for (d = a - 1; d--;) b[d] === b[d + 1] && b.splice(d, 1)
                });
                a = b.length;
                if (a > 2) {
                    d = b[1] - b[0];
                    for (h = a -
                        1; h-- && !c;) b[h + 1] - b[h] !== d && (c = !0);
                    if (!this.options.keepOrdinalPadding && (b[0] - f > d || g - b[b.length - 1] > d)) c = !0
                }
                c ? (this.ordinalPositions = b, d = this.val2lin(v(f, b[0]), !0), h = v(this.val2lin(E(g, b[b.length - 1]), !0), 1), this.ordinalSlope = g = (g - f) / (h - d), this.ordinalOffset = f - d * g) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = s
            }
            this.doPostTranslate = e && c || i;
            this.groupIntervalFactor = null
        },
        val2lin: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var d = c.length,
                    e, f;
                for (e = d; e--;)
                    if (c[e] === a) {
                        f = e;
                        break
                    }
                for (e =
                    d - 1; e--;)
                    if (a > c[e] || e === 0) {
                        c = (a - c[e]) / (c[e + 1] - c[e]);
                        f = e + c;
                        break
                    }
                return b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset
            } else return a
        },
        lin2val: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var d = this.ordinalSlope,
                    e = this.ordinalOffset,
                    f = c.length - 1,
                    g, h;
                if (b) a < 0 ? a = c[0] : a > f ? a = c[f] : (f = T(a), h = a - f);
                else
                    for (; f--;)
                        if (g = d * f + e, a >= g) {
                            d = d * (f + 1) + e;
                            h = (a - g) / (d - g);
                            break
                        } return h !== s && c[f] !== s ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a
            } else return a
        },
        getExtendedPositions: function() {
            var a = this.chart,
                b = this.series[0].currentDataGrouping,
                c = this.ordinalIndex,
                d = b ? b.count + b.unitName : "raw",
                e = this.getExtremes(),
                f, g;
            if (!c) c = this.ordinalIndex = {};
            if (!c[d]) f = {
                    series: [],
                    getExtremes: function() {
                        return {
                            min: e.dataMin,
                            max: e.dataMax
                        }
                    },
                    options: {
                        ordinal: !0
                    },
                    val2lin: H.prototype.val2lin
                }, o(this.series, function(c) {
                    g = {
                        xAxis: f,
                        xData: c.xData,
                        chart: a,
                        destroyGroupedData: ka
                    };
                    g.options = {
                        dataGrouping: b ? {
                            enabled: !0,
                            forced: !0,
                            approximation: "open",
                            units: [
                                [b.unitName, [b.count]]
                            ]
                        } : {
                            enabled: !1
                        }
                    };
                    c.processData.apply(g);
                    f.series.push(g)
                }), this.beforeSetTickPositions.apply(f),
                c[d] = f.ordinalPositions;
            return c[d]
        },
        getGroupIntervalFactor: function(a, b, c) {
            var d = 0,
                c = c.processedXData,
                e = c.length,
                f = [],
                g = this.groupIntervalFactor;
            if (!g) {
                for (; d < e - 1; d++) f[d] = c[d + 1] - c[d];
                f.sort(function(a, b) {
                    return a - b
                });
                d = f[T(e / 2)];
                a = v(a, c[0]);
                b = E(b, c[e - 1]);
                this.groupIntervalFactor = g = e * d / (b - a)
            }
            return g
        },
        postProcessTickInterval: function(a) {
            var b = this.ordinalSlope;
            return b ? this.options.breaks ? this.closestPointRange : a / (b / this.closestPointRange) : a
        }
    });
    R(Ha.prototype, "pan", function(a, b) {
        var c = this.xAxis[0],
            d = b.chartX,
            e = !1;
        if (c.options.ordinal && c.series.length) {
            var f = this.mouseDownX,
                g = c.getExtremes(),
                h = g.dataMax,
                i = g.min,
                k = g.max,
                j = this.hoverPoints,
                m = c.closestPointRange,
                f = (f - d) / (c.translationSlope * (c.ordinalSlope || m)),
                l = {
                    ordinalPositions: c.getExtendedPositions()
                },
                m = c.lin2val,
                n = c.val2lin,
                q;
            if (l.ordinalPositions) {
                if (Q(f) > 1) j && o(j, function(a) {
                    a.setState()
                }), f < 0 ? (j = l, q = c.ordinalPositions ? c : l) : (j = c.ordinalPositions ? c : l, q = l), l = q.ordinalPositions, h > l[l.length - 1] && l.push(h), this.fixedRange = k - i, f = c.toFixedRange(null,
                    null, m.apply(j, [n.apply(j, [i, !0]) + f, !0]), m.apply(q, [n.apply(q, [k, !0]) + f, !0])), f.min >= E(g.dataMin, i) && f.max <= v(h, k) && c.setExtremes(f.min, f.max, !0, !1, {
                    trigger: "pan"
                }), this.mouseDownX = d, G(this.container, {
                    cursor: "move"
                })
            } else e = !0
        } else e = !0;
        e && a.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    R(P.prototype, "getSegments", function(a) {
        var b, c = this.options.gapSize,
            d = this.xAxis;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        if (c) b = this.segments, o(b, function(a, f) {
            for (var g = a.length - 1; g--;)
                if (a[g].x <
                    d.min && a[g + 1].x > d.max) {
                    b.length = 0;
                    break
                } else a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f + 1, 0, a.splice(g + 1, a.length - g))
        })
    });
    (function(a) {
        function b() {
            return Array.prototype.slice.call(arguments, 1)
        }
        var c = a.pick,
            d = a.wrap,
            e = a.extend,
            f = HighchartsAdapter.fireEvent,
            g = a.Axis,
            h = a.Series;
        e(g.prototype, {
            isInBreak: function(a, b) {
                var c = a.repeat || Infinity,
                    d = a.from,
                    e = a.to - a.from,
                    c = b >= d ? (b - d) % c : c - (d - b) % c;
                return a.inclusive ? c <= e : c < e && c !== 0
            },
            isInAnyBreak: function(a, b) {
                var d = this.options.breaks,
                    e = d && d.length,
                    f,
                    g, h;
                if (e) {
                    for (; e--;) this.isInBreak(d[e], a) && (f = !0, g || (g = c(d[e].showPoints, this.isXAxis ? !1 : !0)));
                    h = f && b ? f && !g : f
                }
                return h
            }
        });
        d(g.prototype, "setTickPositions", function(a) {
            a.apply(this, Array.prototype.slice.call(arguments, 1));
            if (this.options.breaks) {
                var b = this.tickPositions,
                    c = this.tickPositions.info,
                    d = [],
                    e;
                for (e = 0; e < b.length; e++) this.isInAnyBreak(b[e]) || d.push(b[e]);
                this.tickPositions = d;
                this.tickPositions.info = c
            }
        });
        d(g.prototype, "init", function(a, b, c) {
            if (c.breaks && c.breaks.length) c.ordinal = !1;
            a.call(this,
                b, c);
            if (this.options.breaks) {
                var d = this;
                d.doPostTranslate = !0;
                this.val2lin = function(a) {
                    var b = a,
                        c, e;
                    for (e = 0; e < d.breakArray.length; e++)
                        if (c = d.breakArray[e], c.to <= a) b -= c.len;
                        else if (c.from >= a) break;
                    else if (d.isInBreak(c, a)) {
                        b -= a - c.from;
                        break
                    }
                    return b
                };
                this.lin2val = function(a) {
                    var b, c;
                    for (c = 0; c < d.breakArray.length; c++)
                        if (b = d.breakArray[c], b.from >= a) break;
                        else b.to < a ? a += b.len : d.isInBreak(b, a) && (a += b.len);
                    return a
                };
                this.setExtremes = function(a, b, c, d, e) {
                    for (; this.isInAnyBreak(a);) a -= this.closestPointRange;
                    for (; this.isInAnyBreak(b);) b -= this.closestPointRange;
                    g.prototype.setExtremes.call(this, a, b, c, d, e)
                };
                this.setAxisTranslation = function(a) {
                    g.prototype.setAxisTranslation.call(this, a);
                    var b = d.options.breaks,
                        a = [],
                        c = [],
                        e = 0,
                        h, i, j = d.userMin || d.min,
                        k = d.userMax || d.max,
                        o, p;
                    for (p in b) i = b[p], h = i.repeat || Infinity, d.isInBreak(i, j) && (j += i.to % h - j % h), d.isInBreak(i, k) && (k -= k % h - i.from % h);
                    for (p in b) {
                        i = b[p];
                        o = i.from;
                        for (h = i.repeat || Infinity; o - h > j;) o -= h;
                        for (; o < j;) o += h;
                        for (; o < k; o += h) a.push({
                            value: o,
                            move: "in"
                        }), a.push({
                            value: o +
                                (i.to - i.from),
                            move: "out",
                            size: i.breakSize
                        })
                    }
                    a.sort(function(a, b) {
                        return a.value === b.value ? (a.move === "in" ? 0 : 1) - (b.move === "in" ? 0 : 1) : a.value - b.value
                    });
                    b = 0;
                    o = j;
                    for (p in a) {
                        i = a[p];
                        b += i.move === "in" ? 1 : -1;
                        if (b === 1 && i.move === "in") o = i.value;
                        b === 0 && (c.push({
                            from: o,
                            to: i.value,
                            len: i.value - o - (i.size || 0)
                        }), e += i.value - o - (i.size || 0))
                    }
                    d.breakArray = c;
                    f(d, "afterBreaks");
                    d.transA *= (k - d.min) / (k - j - e);
                    d.min = j;
                    d.max = k
                }
            }
        });
        d(h.prototype, "generatePoints", function(a) {
            a.apply(this, b(arguments));
            var c = this.xAxis,
                d = this.yAxis,
                e = this.points,
                f, g = e.length,
                h = this.options.connectNulls,
                o;
            if (c && d && (c.options.breaks || d.options.breaks))
                for (; g--;)
                    if (f = e[g], o = f.y === null && h === !1, !o && (c.isInAnyBreak(f.x, !0) || d.isInAnyBreak(f.y, !0))) e.splice(g, 1), this.data[g] && this.data[g].destroyElements()
        });
        d(a.seriesTypes.column.prototype, "drawPoints", function(a) {
            a.apply(this);
            var a = this.points,
                b = this.yAxis,
                d = b.breakArray || [],
                e = c(this.options.threshold, b.min),
                g, h, q, o, p, s;
            for (o = 0; o < a.length; o++) {
                h = a[o];
                s = h.stackY || h.y;
                for (p = 0; p < d.length; p++) {
                    q = d[p];
                    g = !1;
                    if (e < q.from && s > q.to || e > q.from && s < q.from) g = "pointBreak";
                    else if (e < q.from && s > q.from && s < q.to || e > q.from && s > q.to && s < q.from) g = "pointInBreak";
                    g && f(b, g, {
                        point: h,
                        brk: q
                    })
                }
            }
        })
    })(D);
    var da = P.prototype,
        S = Kb.prototype,
        ic = da.processData,
        jc = da.generatePoints,
        kc = da.destroy,
        lc = S.tooltipFooterHeaderFormatter,
        mc = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                month: ["%B %Y", "%B", "-%B %Y"],
                year: ["%Y", "%Y", "-%Y"]
            }
        },
        Wb = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        },
        Xb = [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1]],
            ["week", [1]],
            ["month", [1, 3, 6]],
            ["year", null]
        ],
        Pa = {
            sum: function(a) {
                var b = a.length,
                    c;
                if (!b && a.hasNulls) c = null;
                else if (b)
                    for (c = 0; b--;) c += a[b];
                return c
            },
            average: function(a) {
                var b = a.length,
                    a = Pa.sum(a);
                typeof a === "number" && b && (a /= b);
                return a
            },
            open: function(a) {
                return a.length ? a[0] : a.hasNulls ? null :
                    s
            },
            high: function(a) {
                return a.length ? Fa(a) : a.hasNulls ? null : s
            },
            low: function(a) {
                return a.length ? Ra(a) : a.hasNulls ? null : s
            },
            close: function(a) {
                return a.length ? a[a.length - 1] : a.hasNulls ? null : s
            },
            ohlc: function(a, b, c, d) {
                a = Pa.open(a);
                b = Pa.high(b);
                c = Pa.low(c);
                d = Pa.close(d);
                if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d]
            },
            range: function(a, b) {
                a = Pa.low(a);
                b = Pa.high(b);
                if (typeof a === "number" || typeof b === "number") return [a, b]
            }
        };
    da.groupData = function(a, b, c, d) {
        var e =
            this.data,
            f = this.options.data,
            g = [],
            h = [],
            i = a.length,
            k, j, m = !!b,
            l = [
                [],
                [],
                [],
                []
            ],
            d = typeof d === "function" ? d : Pa[d],
            n = this.pointArrayMap,
            q = n && n.length,
            o;
        for (o = 0; o <= i; o++)
            if (a[o] >= c[0]) break;
        for (; o <= i; o++) {
            for (; c[1] !== s && a[o] >= c[1] || o === i;)
                if (k = c.shift(), j = d.apply(0, l), j !== s && (g.push(k), h.push(j)), l[0] = [], l[1] = [], l[2] = [], l[3] = [], o === i) break;
            if (o === i) break;
            if (n) {
                k = this.cropStart + o;
                k = e && e[k] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [f[k]]);
                var p;
                for (j = 0; j < q; j++)
                    if (p = k[n[j]], typeof p === "number") l[j].push(p);
                    else if (p === null) l[j].hasNulls = !0
            } else if (k = m ? b[o] : null, typeof k === "number") l[0].push(k);
            else if (k === null) l[0].hasNulls = !0
        }
        return [g, h]
    };
    da.processData = function() {
        var a = this.chart,
            b = this.options,
            c = b.dataGrouping,
            d = this.allowDG !== !1 && c && p(c.enabled, a.options._stock),
            e;
        this.forceCrop = d;
        this.groupPixelWidth = null;
        this.hasProcessed = !0;
        if (ic.apply(this, arguments) !== !1 && d) {
            this.destroyGroupedData();
            var f = this.processedXData,
                g = this.processedYData,
                h = a.plotSizeX,
                a = this.xAxis,
                i = a.options.ordinal,
                k = this.groupPixelWidth =
                a.getGroupPixelWidth && a.getGroupPixelWidth(),
                d = this.pointRange;
            if (k) {
                e = !0;
                this.points = null;
                var j = a.getExtremes(),
                    d = j.min,
                    j = j.max,
                    i = i && a.getGroupIntervalFactor(d, j, this) || 1,
                    h = k * (j - d) / h * i,
                    k = a.getTimeTicks(a.normalizeTimeTickInterval(h, c.units || Xb), d, j, a.options.startOfWeek, f, this.closestPointRange),
                    g = da.groupData.apply(this, [f, g, k, c.approximation]),
                    f = g[0],
                    g = g[1];
                if (c.smoothed) {
                    c = f.length - 1;
                    for (f[c] = Math.min(f[c], j); c-- && c > 0;) f[c] += h / 2;
                    f[0] = Math.max(f[0], d)
                }
                this.currentDataGrouping = k.info;
                if (b.pointRange ===
                    null) this.pointRange = k.info.totalRange;
                this.closestPointRange = k.info.totalRange;
                if (t(f[0]) && f[0] < a.dataMin) {
                    if (a.min === a.dataMin) a.min = f[0];
                    a.dataMin = f[0]
                }
                this.processedXData = f;
                this.processedYData = g
            } else this.currentDataGrouping = null, this.pointRange = d;
            this.hasGroupedData = e
        }
    };
    da.destroyGroupedData = function() {
        var a = this.groupedData;
        o(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null)
        });
        this.groupedData = null
    };
    da.generatePoints = function() {
        jc.apply(this);
        this.destroyGroupedData();
        this.groupedData =
            this.hasGroupedData ? this.points : null
    };
    S.tooltipFooterHeaderFormatter = function(a, b) {
        var c = a.series,
            d = c.tooltipOptions,
            e = c.options.dataGrouping,
            f = d.xDateFormat,
            g, h = c.xAxis;
        h && h.options.type === "datetime" && e && ra(a.key) ? (c = c.currentDataGrouping, e = e.dateTimeLabelFormats, c ? (h = e[c.unitName], c.count === 1 ? f = h[0] : (f = h[1], g = h[2])) : !f && e && (f = this.getXDateFormat(a, d, h)), f = ja(f, a.key), g && (f += ja(g, a.key + c.totalRange - 1)), d = d[(b ? "footer" : "header") + "Format"].replace("{point.key}", f)) : d = lc.call(this, a, b);
        return d
    };
    da.destroy =
        function() {
            for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy();
            kc.apply(this)
        };
    R(da, "setOptions", function(a, b) {
        var c = a.call(this, b),
            d = this.type,
            e = this.chart.options.plotOptions,
            f = W[d].dataGrouping;
        if (Wb[d]) f || (f = B(mc, Wb[d])), c.dataGrouping = B(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping);
        if (this.chart.options._stock) this.requireSorting = !0;
        return c
    });
    R(H.prototype, "setScale", function(a) {
        a.call(this);
        o(this.series, function(a) {
            a.hasProcessed = !1
        })
    });
    H.prototype.getGroupPixelWidth =
        function() {
            var a = this.series,
                b = a.length,
                c, d = 0,
                e = !1,
                f;
            for (c = b; c--;)(f = a[c].options.dataGrouping) && (d = v(d, f.groupPixelWidth));
            for (c = b; c--;)
                if ((f = a[c].options.dataGrouping) && a[c].hasProcessed)
                    if (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) e = !0;
            return e ? d : 0
        };
    H.prototype.setDataGrouping = function(a, b) {
        var c, b = p(b, !0);
        a || (a = {
            forced: !1,
            units: null
        });
        if (this instanceof H)
            for (c = this.series.length; c--;) this.series[c].update({
                dataGrouping: a
            }, !1);
        else o(this.chart.options.series,
            function(b) {
                b.dataGrouping = a
            }, !1);
        b && this.chart.redraw()
    };
    W.ohlc = B(W.column, {
        lineWidth: 1,
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null
    });
    S = ia(K.column, {
        type: "ohlc",
        pointArrayMap: ["open", "high", "low", "close"],
        toYData: function(a) {
            return [a.open, a.high, a.low, a.close]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        upColorProp: "stroke",
        getAttribs: function() {
            K.column.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                a = a.upColor || this.color,
                c = B(this.pointAttr),
                d = this.upColorProp;
            c[""][d] = a;
            c.hover[d] = b.hover.upColor || a;
            c.select[d] = b.select.upColor || a;
            o(this.points, function(a) {
                if (a.open < a.close && !a.options.color) a.pointAttr = c
            })
        },
        translate: function() {
            var a = this.yAxis;
            K.column.prototype.translate.apply(this);
            o(this.points, function(b) {
                if (b.open !== null) b.plotOpen =
                    a.translate(b.open, 0, 1, 0, 1);
                if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1)
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, i, k;
            o(a.points, function(j) {
                if (j.plotY !== s) i = j.graphic, c = j.pointAttr[j.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] % 2 / 2, k = x(j.plotX) - f, g = x(j.shapeArgs.width / 2), h = ["M", k, x(j.yBottom), "L", k, x(j.plotY)], j.open !== null && (d = x(j.plotOpen) + f, h.push("M", k, d, "L", k - g, d)), j.close !== null && (e = x(j.plotClose) + f, h.push("M", k, e, "L", k + g, e)), i ? i.attr(c).animate({
                        d: h
                    }) :
                    j.graphic = b.renderer.path(h).attr(c).add(a.group)
            })
        },
        animate: null
    });
    K.ohlc = S;
    W.candlestick = B(W.column, {
        lineColor: "black",
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 2
            }
        },
        tooltip: W.ohlc.tooltip,
        threshold: null,
        upColor: "white"
    });
    S = ia(S, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        upColorProp: "fill",
        getAttribs: function() {
            K.ohlc.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                c = a.upLineColor || a.lineColor,
                d = b.hover.upLineColor || c,
                e =
                b.select.upLineColor || c;
            o(this.points, function(a) {
                if (a.open < a.close) {
                    if (a.lineColor) a.pointAttr = B(a.pointAttr), c = a.lineColor;
                    a.pointAttr[""].stroke = c;
                    a.pointAttr.hover.stroke = d;
                    a.pointAttr.select.stroke = e
                }
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d = a.pointAttr[""],
                e, f, g, h, i, k, j, m, l, n, q;
            o(a.points, function(o) {
                l = o.graphic;
                if (o.plotY !== s) c = o.pointAttr[o.selected ? "selected" : ""] || d, j = c["stroke-width"] % 2 / 2, m = x(o.plotX) - j, e = o.plotOpen, f = o.plotClose, g = Y.min(e, f), h = Y.max(e, f), q = x(o.shapeArgs.width /
                    2), i = x(g) !== x(o.plotY), k = h !== o.yBottom, g = x(g) + j, h = x(h) + j, n = ["M", m - q, h, "L", m - q, g, "L", m + q, g, "L", m + q, h, "Z", "M", m, g, "L", m, i ? x(o.plotY) : g, "M", m, h, "L", m, k ? x(o.yBottom) : h], l ? l.attr(c).animate({
                    d: n
                }) : o.graphic = b.renderer.path(n).attr(c).add(a.group).shadow(a.options.shadow)
            })
        }
    });
    K.candlestick = S;
    var tb = qa.prototype.symbols;
    W.flags = B(W.column, {
        fillColor: "white",
        lineWidth: 1,
        pointRange: 0,
        shape: "flag",
        stackDistance: 12,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        tooltip: {
            pointFormat: "{point.text}<br/>"
        },
        threshold: null,
        y: -30
    });
    K.flags = ia(K.column, {
        type: "flags",
        sorted: !1,
        noSharedTooltip: !0,
        allowDG: !1,
        takeOrdinalPosition: !1,
        trackerGroups: ["markerGroup"],
        forceCrop: !0,
        init: P.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function() {
            K.column.prototype.translate.apply(this);
            var a = this.chart,
                b = this.points,
                c = b.length - 1,
                d, e, f = this.options.onSeries,
                f = (d = f && a.get(f)) && d.options.step,
                g = d && d.points,
                h = g && g.length,
                i = this.xAxis,
                k = i.getExtremes(),
                j, m, l;
            if (d && d.visible && h) {
                d = d.currentDataGrouping;
                m = g[h - 1].x + (d ? d.totalRange : 0);
                for (b.sort(function(a, b) {
                        return a.x - b.x
                    }); h-- && b[c];)
                    if (d = b[c], j = g[h], j.x <= d.x && j.plotY !== s) {
                        if (d.x <= m) d.plotY = j.plotY, j.x < d.x && !f && (l = g[h + 1]) && l.plotY !== s && (d.plotY += (d.x - j.x) / (l.x - j.x) * (l.plotY - j.plotY));
                        c--;
                        h++;
                        if (c < 0) break
                    }
            }
            o(b, function(c, d) {
                var f;
                if (c.plotY === s) c.x >= k.min && c.x <= k.max ? c.plotY = a.chartHeight - i.bottom - (i.opposite ? i.height : 0) + i.offset - a.plotTop :
                    c.shapeArgs = {};
                if ((e = b[d - 1]) && e.plotX === c.plotX) {
                    if (e.stackIndex === s) e.stackIndex = 0;
                    f = e.stackIndex + 1
                }
                c.stackIndex = f
            })
        },
        drawPoints: function() {
            var a, b = this.pointAttr[""],
                c = this.points,
                d = this.chart.renderer,
                e, f, g = this.options,
                h = g.y,
                i, k, j, m, l, n;
            for (k = c.length; k--;)
                if (j = c[k], a = j.plotX > this.xAxis.len, e = j.plotX, e > 0 && (e -= p(j.lineWidth, g.lineWidth) % 2), m = j.stackIndex, i = j.options.shape || g.shape, f = j.plotY, f !== s && (f = j.plotY + h - (m !== s && m * g.stackDistance)), l = m ? s : j.plotX, n = m ? s : j.plotY, m = j.graphic, f !== s && e >= 0 && !a) a =
                    j.pointAttr[j.selected ? "select" : ""] || b, m ? m.attr({
                        x: e,
                        y: f,
                        r: a.r,
                        anchorX: l,
                        anchorY: n
                    }) : j.graphic = d.label(j.options.title || g.title || "A", e, f, i, l, n, g.useHTML).css(B(g.style, j.style)).attr(a).attr({
                        align: i === "flag" ? "left" : "center",
                        width: g.width,
                        height: g.height
                    }).add(this.markerGroup).shadow(g.shadow), j.tooltipPos = [e, f];
                else if (m) j.graphic = m.destroy()
        },
        drawTracker: function() {
            var a = this.points;
            jb.drawTrackerPoint.apply(this);
            o(a, function(b) {
                var c = b.graphic;
                c && A(c.element, "mouseover", function() {
                    if (b.stackIndex >
                        0 && !b.raised) b._y = c.y, c.attr({
                        y: b._y - 8
                    }), b.raised = !0;
                    o(a, function(a) {
                        if (a !== b && a.raised && a.graphic) a.graphic.attr({
                            y: a._y
                        }), a.raised = !1
                    })
                })
            })
        },
        animate: ka,
        buildKDTree: ka,
        setClip: ka
    });
    tb.flag = function(a, b, c, d, e) {
        return ["M", e && e.anchorX || a, e && e.anchorY || b, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "Z"]
    };
    o(["circle", "square"], function(a) {
        tb[a + "pin"] = function(b, c, d, e, f) {
            var g = f && f.anchorX,
                f = f && f.anchorY;
            a === "circle" && e > d && (b -= x((e - d) / 2), d = e);
            b = tb[a](b, c, d, e);
            g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);
            return b
        }
    });
    Va ===
        D.VMLRenderer && o(["flag", "circlepin", "squarepin"], function(a) {
            ib.prototype.symbols[a] = tb[a]
        });
    var S = [].concat(Xb),
        ub = function(a) {
            var b = gb(arguments, function(a) {
                return typeof a === "number"
            });
            if (b.length) return Math[a].apply(0, b)
        };
    S[4] = ["day", [1, 2, 3, 4]];
    S[5] = ["week", [1, 2, 3]];
    w(N, {
        navigator: {
            handles: {
                backgroundColor: "#ebe7e8",
                borderColor: "#b2b1b6"
            },
            height: 40,
            margin: 25,
            maskFill: "rgba(128,179,236,0.3)",
            maskInside: !0,
            outlineColor: "#b2b1b6",
            outlineWidth: 1,
            series: {
                type: K.areaspline === s ? "line" : "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: 0.05,
                dataGrouping: {
                    approximation: "average",
                    enabled: !0,
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: S
                },
                dataLabels: {
                    enabled: !1,
                    zIndex: 2
                },
                id: "highcharts-navigator-series",
                lineColor: null,
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1,
                threshold: null
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineColor: "#EEE",
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    style: {
                        color: "#888"
                    },
                    x: 3,
                    y: -4
                },
                crosshair: !1
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0.1,
                maxPadding: 0.1,
                labels: {
                    enabled: !1
                },
                crosshair: !1,
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: eb ? 20 : 14,
            barBackgroundColor: "#bfc8d1",
            barBorderRadius: 0,
            barBorderWidth: 1,
            barBorderColor: "#bfc8d1",
            buttonArrowColor: "#666",
            buttonBackgroundColor: "#ebe7e8",
            buttonBorderColor: "#bbb",
            buttonBorderRadius: 0,
            buttonBorderWidth: 1,
            minWidth: 6,
            rifleColor: "#666",
            trackBackgroundColor: "#eeeeee",
            trackBorderColor: "#eeeeee",
            trackBorderWidth: 1,
            liveRedraw: ea && !eb
        }
    });
    Fb.prototype = {
        drawHandle: function(a, b) {
            var c = this.chart,
                d = c.renderer,
                e = this.elementsToDestroy,
                f = this.handles,
                g = this.navigatorOptions.handles,
                g = {
                    fill: g.backgroundColor,
                    stroke: g.borderColor,
                    "stroke-width": 1
                },
                h;
            this.rendered || (f[b] = d.g("navigator-handle-" + ["left", "right"][b]).css({
                cursor: "ew-resize"
            }).attr({
                zIndex: 4 - b
            }).add(), h = d.rect(-4.5, 0, 9, 16, 0, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(g).add(f[b]), e.push(h));
            f[b][c.isResizing ? "animate" : "attr"]({
                translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a,
                    10),
                translateY: this.top + this.height / 2 - 8
            })
        },
        drawScrollbarButton: function(a) {
            var b = this.chart.renderer,
                c = this.elementsToDestroy,
                d = this.scrollbarButtons,
                e = this.scrollbarHeight,
                f = this.scrollbarOptions,
                g;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor,
                "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ?
                2 : -2), e / 2]).attr({
                fill: f.buttonArrowColor
            }).add(d[a]), c.push(g));
            a && d[a].attr({
                translateX: this.scrollerWidth - e
            })
        },
        render: function(a, b, c, d) {
            var e = this.chart,
                f = e.renderer,
                g, h, i, k, j = this.scrollbarGroup,
                m = this.navigatorGroup,
                l = this.scrollbar,
                m = this.xAxis,
                n = this.scrollbarTrack,
                o = this.scrollbarHeight,
                r = this.scrollbarEnabled,
                s = this.navigatorOptions,
                z = this.scrollbarOptions,
                u = z.minWidth,
                y = this.height,
                w = this.top,
                A = this.navigatorEnabled,
                B = s.outlineWidth,
                D = B / 2,
                F = 0,
                I = this.outlineHeight,
                J = z.barBorderRadius,
                H = z.barBorderWidth,
                G = w + D,
                K;
            if (t(a) && !isNaN(a)) {
                this.navigatorLeft = g = p(m.left, e.plotLeft + o);
                this.navigatorWidth = h = p(m.len, e.plotWidth - 2 * o);
                this.scrollerLeft = i = g - o;
                this.scrollerWidth = k = k = h + 2 * o;
                m.getExtremes && (K = this.getUnionExtremes(!0)) && (K.dataMin !== m.min || K.dataMax !== m.max) && m.setExtremes(K.dataMin, K.dataMax, !0, !1);
                c = p(c, m.translate(a));
                d = p(d, m.translate(b));
                if (isNaN(c) || Q(c) === Infinity) c = 0, d = k;
                if (!(m.translate(d, !0) - m.translate(c, !0) < e.xAxis[0].minRange)) {
                    this.zoomedMax = E(v(c, d, 0), h);
                    this.zoomedMin = v(this.fixedWidth ?
                        this.zoomedMax - this.fixedWidth : E(c, d), 0);
                    this.range = this.zoomedMax - this.zoomedMin;
                    c = x(this.zoomedMax);
                    b = x(this.zoomedMin);
                    a = c - b;
                    if (!this.rendered) {
                        if (A) this.navigatorGroup = m = f.g("navigator").attr({
                            zIndex: 3
                        }).add(), this.leftShade = f.rect().attr({
                            fill: s.maskFill
                        }).add(m), s.maskInside ? this.leftShade.css({
                            cursor: "ew-resize "
                        }) : this.rightShade = f.rect().attr({
                            fill: s.maskFill
                        }).add(m), this.outline = f.path().attr({
                            "stroke-width": B,
                            stroke: s.outlineColor
                        }).add(m);
                        if (r) this.scrollbarGroup = j = f.g("scrollbar").add(),
                            l = z.trackBorderWidth, this.scrollbarTrack = n = f.rect().attr({
                                x: 0,
                                y: -l % 2 / 2,
                                fill: z.trackBackgroundColor,
                                stroke: z.trackBorderColor,
                                "stroke-width": l,
                                r: z.trackBorderRadius || 0,
                                height: o
                            }).add(j), this.scrollbar = l = f.rect().attr({
                                y: -H % 2 / 2,
                                height: o,
                                fill: z.barBackgroundColor,
                                stroke: z.barBorderColor,
                                "stroke-width": H,
                                r: J
                            }).add(j), this.scrollbarRifles = f.path().attr({
                                stroke: z.rifleColor,
                                "stroke-width": 1
                            }).add(j)
                    }
                    e = e.isResizing ? "animate" : "attr";
                    if (A) {
                        this.leftShade[e](s.maskInside ? {
                            x: g + b,
                            y: w,
                            width: c - b,
                            height: y
                        } : {
                            x: g,
                            y: w,
                            width: b,
                            height: y
                        });
                        if (this.rightShade) this.rightShade[e]({
                            x: g + c,
                            y: w,
                            width: h - c,
                            height: y
                        });
                        this.outline[e]({
                            d: ["M", i, G, "L", g + b - D, G, g + b - D, G + I, "L", g + c - D, G + I, "L", g + c - D, G, i + k, G].concat(s.maskInside ? ["M", g + b + D, G, "L", g + c - D, G] : [])
                        });
                        this.drawHandle(b + D, 0);
                        this.drawHandle(c + D, 1)
                    }
                    if (r && j) this.drawScrollbarButton(0), this.drawScrollbarButton(1), j[e]({
                        translateX: i,
                        translateY: x(G + y)
                    }), n[e]({
                        width: k
                    }), g = o + b, h = a - H, h < u && (F = (u - h) / 2, h = u, g -= F), this.scrollbarPad = F, l[e]({
                        x: T(g) + H % 2 / 2,
                        width: h
                    }), u = o + b + a / 2 - 0.5, this.scrollbarRifles.attr({
                        visibility: a >
                            12 ? "visible" : "hidden"
                    })[e]({
                        d: ["M", u - 3, o / 4, "L", u - 3, 2 * o / 3, "M", u, o / 4, "L", u, 2 * o / 3, "M", u + 3, o / 4, "L", u + 3, 2 * o / 3]
                    });
                    this.scrollbarPad = F;
                    this.rendered = !0
                }
            }
        },
        addEvents: function() {
            var a = this.chart.container,
                b = this.mouseDownHandler,
                c = this.mouseMoveHandler,
                d = this.mouseUpHandler,
                e;
            e = [
                [a, "mousedown", b],
                [a, "mousemove", c],
                [document, "mouseup", d]
            ];
            Za && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]);
            o(e, function(a) {
                A.apply(null, a)
            });
            this._events = e
        },
        removeEvents: function() {
            o(this._events, function(a) {
                V.apply(null,
                    a)
            });
            this._events = s;
            this.navigatorEnabled && this.baseSeries && V(this.baseSeries, "updatedData", this.updatedDataHandler)
        },
        init: function() {
            var a = this,
                b = a.chart,
                c, d, e = a.scrollbarHeight,
                f = a.navigatorOptions,
                g = a.height,
                h = a.top,
                i, k, j = a.baseSeries;
            a.mouseDownHandler = function(d) {
                var d = b.pointer.normalize(d),
                    e = a.zoomedMin,
                    f = a.zoomedMax,
                    h = a.top,
                    j = a.scrollbarHeight,
                    k = a.scrollerLeft,
                    l = a.scrollerWidth,
                    m = a.navigatorLeft,
                    o = a.navigatorWidth,
                    p = a.scrollbarPad,
                    s = a.range,
                    t = d.chartX,
                    v = d.chartY,
                    d = b.xAxis[0],
                    w, x = eb ? 10 : 7;
                if (v >
                    h && v < h + g + j)
                    if ((h = !a.scrollbarEnabled || v < h + g) && Y.abs(t - e - m) < x) a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null;
                    else if (h && Y.abs(t - f - m) < x) a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null;
                else if (t > m + e - p && t < m + f + p) a.grabbedCenter = t, a.fixedWidth = s, i = t - e;
                else if (t > k && t < k + l) {
                    f = h ? t - m - s / 2 : t < m ? e - s * 0.2 : t > k + l - j ? e + s * 0.2 : t < m + e ? e - s : f;
                    if (f < 0) f = 0;
                    else if (f + s >= o) f = o - s, w = a.getUnionExtremes().dataMax;
                    if (f !== e) a.fixedWidth = s, e = c.toFixedRange(f, f + s, null, w), d.setExtremes(e.min,
                        e.max, !0, !1, {
                            trigger: "navigator"
                        })
                }
            };
            a.mouseMoveHandler = function(c) {
                var d = a.scrollbarHeight,
                    e = a.navigatorLeft,
                    f = a.navigatorWidth,
                    g = a.scrollerLeft,
                    h = a.scrollerWidth,
                    j = a.range,
                    l;
                if (c.pageX !== 0) c = b.pointer.normalize(c), l = c.chartX, l < e ? l = e : l > g + h - d && (l = g + h - d), a.grabbedLeft ? (k = !0, a.render(0, 0, l - e, a.otherHandlePos)) : a.grabbedRight ? (k = !0, a.render(0, 0, a.otherHandlePos, l - e)) : a.grabbedCenter && (k = !0, l < i ? l = i : l > f + i - j && (l = f + i - j), a.render(0, 0, l - i, l - i + j)), k && a.scrollbarOptions.liveRedraw && setTimeout(function() {
                        a.mouseUpHandler(c)
                    },
                    0)
            };
            a.mouseUpHandler = function(d) {
                var e, f;
                if (k) {
                    if (a.zoomedMin === a.otherHandlePos) e = a.fixedExtreme;
                    else if (a.zoomedMax === a.otherHandlePos) f = a.fixedExtreme;
                    e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f);
                    b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {
                        trigger: "navigator",
                        triggerOp: "navigator-drag",
                        DOMEvent: d
                    })
                }
                if (d.type !== "mousemove") a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = k = i = null
            };
            var m = b.xAxis.length,
                l = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.navigatorEnabled ? (a.xAxis = c = new H(b, B({
                breaks: j && j.xAxis.options.breaks,
                ordinal: j && j.xAxis.options.ordinal
            }, f.xAxis, {
                id: "navigator-x-axis",
                isX: !0,
                type: "datetime",
                index: m,
                height: g,
                offset: 0,
                offsetLeft: e,
                offsetRight: -e,
                keepOrdinalPadding: !0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: !1
            })), a.yAxis = d = new H(b, B(f.yAxis, {
                id: "navigator-y-axis",
                alignTicks: !1,
                height: g,
                offset: 0,
                index: l,
                zoomEnabled: !1
            })), j || f.series.data ? a.addBaseSeries() : b.series.length === 0 && R(b, "redraw", function(c,
                d) {
                if (b.series.length > 0 && !a.series) a.setBaseSeries(), b.redraw = c;
                c.call(b, d)
            })) : a.xAxis = c = {
                translate: function(a, c) {
                    var d = b.xAxis[0],
                        f = d.getExtremes(),
                        g = b.plotWidth - 2 * e,
                        h = ub("min", d.options.min, f.dataMin),
                        d = ub("max", d.options.max, f.dataMax) - h;
                    return c ? a * d / g + h : g * (a - h) / d
                },
                toFixedRange: H.prototype.toFixedRange
            };
            R(b, "getMargins", function(b) {
                var e = this.legend,
                    f = e.options;
                b.apply(this, [].slice.call(arguments, 1));
                a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign ===
                    "bottom" && f.enabled && !f.floating ? e.legendHeight + p(f.margin, 10) : 0);
                if (c && d) c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize()
            });
            a.addEvents()
        },
        getUnionExtremes: function(a) {
            var b = this.chart.xAxis[0],
                c = this.xAxis,
                d = c.options,
                e = b.options,
                f;
            if (!a || b.dataMin !== null) f = {
                dataMin: p(d && d.min, ub("min", e.min, b.dataMin, c.dataMin)),
                dataMax: p(d && d.max, ub("max", e.max, b.dataMax, c.dataMax))
            };
            return f
        },
        setBaseSeries: function(a) {
            var b = this.chart,
                a = a || b.options.navigator.baseSeries;
            this.series && this.series.remove();
            this.baseSeries = b.series[a] || typeof a === "string" && b.get(a) || b.series[0];
            this.xAxis && this.addBaseSeries()
        },
        addBaseSeries: function() {
            var a = this.baseSeries,
                b = a ? a.options : {},
                c = b.data,
                d = this.navigatorOptions.series,
                e;
            e = d.data;
            this.hasNavigatorData = !!e;
            b = B(b, d, {
                enableMouseTracking: !1,
                group: "nav",
                padXAxis: !1,
                xAxis: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                name: "Navigator",
                showInLegend: !1,
                isInternal: !0,
                visible: !0
            });
            b.data = e || c;
            this.series = this.chart.initSeries(b);
            if (a && this.navigatorOptions.adaptToUpdatedData !==
                !1) A(a, "updatedData", this.updatedDataHandler), a.userOptions.events = w(a.userOptions.event, {
                updatedData: this.updatedDataHandler
            })
        },
        updatedDataHandler: function() {
            var a = this.chart.scroller,
                b = a.baseSeries,
                c = b.xAxis,
                d = c.getExtremes(),
                e = d.min,
                f = d.max,
                g = d.dataMin,
                d = d.dataMax,
                h = f - e,
                i, k, j, m, l, n = a.series;
            i = n.xData;
            var o = !!c.setExtremes;
            k = f >= i[i.length - 1] - (this.closestPointRange || 0);
            i = e <= g;
            if (!a.hasNavigatorData) n.options.pointStart = b.xData[0], n.setData(b.options.data, !1), l = !0;
            i && (m = g, j = m + h);
            k && (j = d, i || (m = v(j -
                h, n.xData[0])));
            o && (i || k) ? isNaN(m) || c.setExtremes(m, j, !0, !1, {
                trigger: "updatedData"
            }) : (l && this.chart.redraw(!1), a.render(v(e, g), E(f, d)))
        },
        destroy: function() {
            this.removeEvents();
            o([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function(a) {
                a && a.destroy && a.destroy()
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar =
                null;
            o([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(a) {
                Ma(a)
            })
        }
    };
    D.Scroller = Fb;
    R(H.prototype, "zoom", function(a, b, c) {
        var d = this.chart,
            e = d.options,
            f = e.chart.zoomType,
            g = e.navigator,
            e = e.rangeSelector,
            h;
        if (this.isXAxis && (g && g.enabled || e && e.enabled))
            if (f === "x") d.resetZoomButton = "blocked";
            else if (f === "y") h = !1;
        else if (f === "xy") d = this.previousZoom, t(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);
        return h !== s ? h : a.call(this, b, c)
    });
    R(Ha.prototype,
        "init",
        function(a, b, c) {
            A(this, "beforeRender", function() {
                var a = this.options;
                if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new Fb(this)
            });
            a.call(this, b, c)
        });
    R(P.prototype, "addPoint", function(a, b, c, d, e) {
        var f = this.options.turboThreshold;
        f && this.xData.length > f && ha(b) && !Ja(b) && this.chart.scroller && oa(20, !0);
        a.call(this, b, c, d, e)
    });
    w(N, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 18,
                fill: "#f7f7f7",
                padding: 2,
                r: 0,
                "stroke-width": 0,
                style: {
                    color: "#444",
                    cursor: "pointer",
                    fontWeight: "normal"
                },
                zIndex: 7,
                states: {
                    hover: {
                        fill: "#e7e7e7"
                    },
                    select: {
                        fill: "#e7f0f9",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }
            },
            height: 35,
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    });
    N.lang = B(N.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    });
    Gb.prototype = {
        clickButton: function(a, b) {
            var c = this,
                d = c.selected,
                e = c.chart,
                f = c.buttons,
                g = c.buttonOptions[a],
                h = e.xAxis[0],
                i = e.scroller && e.scroller.getUnionExtremes() || h || {},
                k = i.dataMin,
                j = i.dataMax,
                m, l = h && x(E(h.max, p(j, h.max))),
                n = g.type,
                q, i = g._range,
                r, t, w, u = g.dataGrouping;
            if (!(k === null || j === null || a === c.selected)) {
                e.fixedRange = i;
                if (u) this.forcedDataGrouping = !0, H.prototype.setDataGrouping.call(h || {
                    chart: this.chart
                }, u, !1);
                if (n === "month" || n === "year")
                    if (h) {
                        if (n = {
                                range: g,
                                max: l,
                                dataMin: k,
                                dataMax: j
                            }, m = h.minFromRange.call(n), typeof n.newMax === "number") l = n.newMax
                    } else i = g;
                else if (i) m = v(l - i, k), l = E(m + i, j);
                else if (n === "ytd")
                    if (h) {
                        if (j === s) k = Number.MAX_VALUE, j = Number.MIN_VALUE, o(e.series, function(a) {
                            a = a.xData;
                            k = E(a[0], k);
                            j = v(a[a.length - 1], j)
                        }), b = !1;
                        l = new fa(j);
                        m = l.getFullYear();
                        m = r = v(k || 0, fa.UTC(m, 0, 1));
                        l = l.getTime();
                        l = E(j || l, l)
                    } else {
                        A(e, "beforeRender", function() {
                            c.clickButton(a)
                        });
                        return
                    }
                else n === "all" && h && (m = k, l = j);
                f[d] && f[d].setState(0);
                f[a] && f[a].setState(2);
                h ? (h.setExtremes(m, l, p(b, 1), 0, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: g
                }), c.setSelected(a)) : (q = e.options.xAxis[0], w = q.range, q.range = i, t = q.min, q.min = r, c.setSelected(a), A(e, "load", function() {
                    q.range = w;
                    q.min = t
                }))
            }
        },
        setSelected: function(a) {
            this.selected = this.options.selected = a
        },
        defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        }],
        init: function(a) {
            var b = this,
                c = a.options.rangeSelector,
                d = c.buttons || [].concat(b.defaultButtons),
                e = c.selected,
                f = b.blurInputs = function() {
                    var a = b.minInput,
                        c = b.maxInput;
                    a && a.blur && O(a, "blur");
                    c && c.blur && O(c, "blur")
                };
            b.chart = a;
            b.options = c;
            b.buttons = [];
            a.extraTopMargin = c.height;
            b.buttonOptions = d;
            A(a.container, "mousedown", f);
            A(a, "resize", f);
            o(d, b.computeButtonRange);
            e !== s && d[e] && this.clickButton(e, !1);
            A(a, "load", function() {
                A(a.xAxis[0], "setExtremes", function(c) {
                    this.max - this.min !== a.fixedRange && c.trigger !== "rangeSelectorButton" && c.trigger !== "updatedData" && b.forcedDataGrouping && this.setDataGrouping(!1, !1)
                });
                A(a.xAxis[0], "afterSetExtremes", function() {
                    b.updateButtonStates(!0)
                })
            })
        },
        updateButtonStates: function(a) {
            var b = this,
                c = this.chart,
                d = c.xAxis[0],
                e = c.scroller && c.scroller.getUnionExtremes() || d,
                f = e.dataMin,
                g = e.dataMax,
                h = b.selected,
                i = b.options.allButtonsEnabled,
                k = b.buttons;
            a && c.fixedRange !== x(d.max - d.min) && (k[h] && k[h].setState(0), b.setSelected(null));
            o(b.buttonOptions, function(a, e) {
                var l = x(d.max - d.min),
                    n = a._range,
                    o = a.type,
                    p = a.count || 1,
                    s = n > g - f,
                    t = n < d.minRange,
                    u = a.type === "all" && d.max - d.min >= g - f && k[e].state !== 2,
                    v = a.type === "ytd" && ja("%Y", f) === ja("%Y", g),
                    w = c.renderer.forExport && e === h,
                    n = n === l;
                if ((o === "month" || o === "year") && l >= {
                        month: 28,
                        year: 365
                    }[o] * 864E5 * p && l <= {
                        month: 31,
                        year: 366
                    }[o] * 864E5 * p) n = !0;
                w || n && e !== h ? (b.setSelected(e), k[e].setState(2)) : !i && (s || t || u || v) ? k[e].setState(3) :
                    k[e].state === 3 && k[e].setState(0)
            })
        },
        computeButtonRange: function(a) {
            var b = a.type,
                c = a.count || 1,
                d = {
                    millisecond: 1,
                    second: 1E3,
                    minute: 6E4,
                    hour: 36E5,
                    day: 864E5,
                    week: 6048E5
                };
            if (d[b]) a._range = d[b] * c;
            else if (b === "month" || b === "year") a._range = {
                month: 30,
                year: 365
            }[b] * 864E5 * c
        },
        setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            if (t(b)) this[a + "Input"].HCTime = b;
            this[a + "Input"].value = ja(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({
                text: ja(c.inputDateFormat || "%b %e, %Y",
                    this[a + "Input"].HCTime)
            })
        },
        showInput: function(a) {
            var b = this.inputGroup,
                c = this[a + "DateBox"];
            G(this[a + "Input"], {
                left: b.translateX + c.x + "px",
                top: b.translateY + "px",
                width: c.width - 2 + "px",
                height: c.height - 2 + "px",
                border: "2px solid silver"
            })
        },
        hideInput: function(a) {
            G(this[a + "Input"], {
                border: 0,
                width: "1px",
                height: "1px"
            });
            this.setInputValue(a)
        },
        drawInput: function(a) {
            var b = this,
                c = b.chart,
                d = c.renderer.style,
                e = c.renderer,
                f = c.options.rangeSelector,
                g = b.div,
                h = a === "min",
                i, k, j = this.inputGroup;
            this[a + "Label"] = k = e.label(N.lang[h ?
                "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 2
            }).css(B(d, f.labelStyle)).add(j);
            j.offset += k.width + 5;
            this[a + "DateBox"] = e = e.label("", j.offset).attr({
                padding: 2,
                width: f.inputBoxWidth || 90,
                height: f.inputBoxHeight || 17,
                stroke: f.inputBoxBorderColor || "silver",
                "stroke-width": 1
            }).css(B({
                textAlign: "center",
                color: "#444"
            }, d, f.inputStyle)).on("click", function() {
                b.showInput(a);
                b[a + "Input"].focus()
            }).add(j);
            j.offset += e.width + (h ? 10 : 0);
            this[a + "Input"] = i = aa("input", {
                name: a,
                className: "highcharts-range-selector",
                type: "text"
            }, w({
                position: "absolute",
                border: 0,
                width: "1px",
                height: "1px",
                padding: 0,
                textAlign: "center",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily,
                top: c.plotTop + "px"
            }, f.inputStyle), g);
            i.onfocus = function() {
                b.showInput(a)
            };
            i.onblur = function() {
                b.hideInput(a)
            };
            i.onchange = function() {
                var a = i.value,
                    d = (f.inputDateParser || fa.parse)(a),
                    e = c.xAxis[0],
                    g = e.dataMin,
                    j = e.dataMax;
                isNaN(d) && (d = a.split("-"), d = fa.UTC(I(d[0]), I(d[1]) - 1, I(d[2])));
                isNaN(d) || (N.global.useUTC || (d += (new fa).getTimezoneOffset() * 6E4), h ? d > b.maxInput.HCTime ?
                    d = s : d < g && (d = g) : d < b.minInput.HCTime ? d = s : d > j && (d = j), d !== s && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, s, s, {
                        trigger: "rangeSelectorInput"
                    }))
            }
        },
        getPosition: function() {
            var a = this.chart,
                b = a.options.rangeSelector,
                a = p((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height);
            return {
                buttonTop: a,
                inputTop: a - 10
            }
        },
        render: function(a, b) {
            var c = this,
                d = c.chart,
                e = d.renderer,
                f = d.container,
                g = d.options,
                h = g.exporting && g.navigation && g.navigation.buttonOptions,
                i = g.rangeSelector,
                k = c.buttons,
                g = N.lang,
                j = c.div,
                j = c.inputGroup,
                m = i.buttonTheme,
                l = i.buttonPosition || {},
                n = i.inputEnabled,
                q = m && m.states,
                r = d.plotLeft,
                s, v = this.getPosition(),
                u = c.group,
                y = c.rendered;
            if (!y && (c.group = u = e.g("range-selector-buttons").add(), c.zoomText = e.text(g.rangeSelectorZoom, p(l.x, r), 15).css(i.labelStyle).add(u), s = p(l.x, r) + c.zoomText.getBBox().width + 5, o(c.buttonOptions, function(a, b) {
                    k[b] = e.button(a.text, s, 0, function() {
                        c.clickButton(b);
                        c.isActive = !0
                    }, m, q && q.hover, q && q.select, q && q.disabled).css({
                        textAlign: "center"
                    }).add(u);
                    s += k[b].width + p(i.buttonSpacing,
                        5);
                    c.selected === b && k[b].setState(2)
                }), c.updateButtonStates(), n !== !1)) c.div = j = aa("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), f.parentNode.insertBefore(j, f), c.inputGroup = j = e.g("input-group").add(), j.offset = 0, c.drawInput("min"), c.drawInput("max");
            u[y ? "animate" : "attr"]({
                translateY: v.buttonTop
            });
            n !== !1 && (j.align(w({
                    y: v.inputTop,
                    width: j.offset,
                    x: h && v.inputTop < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0
                }, i.inputPosition), !0, d.spacingBox), t(n) || (d = u.getBBox(), j[j.translateX < d.x + d.width + 10 ? "hide" : "show"]()),
                c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0
        },
        destroy: function() {
            var a = this.minInput,
                b = this.maxInput,
                c = this.chart,
                d = this.blurInputs,
                e;
            V(c.container, "mousedown", d);
            V(c, "resize", d);
            Ma(this.buttons);
            if (a) a.onfocus = a.onblur = a.onchange = null;
            if (b) b.onfocus = b.onblur = b.onchange = null;
            for (e in this) this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Sa(this[e])), this[e] = null
        }
    };
    H.prototype.toFixedRange = function(a, b, c, d) {
        var e = this.chart && this.chart.fixedRange,
            a = p(c,
                this.translate(a, !0)),
            b = p(d, this.translate(b, !0)),
            c = e && (b - a) / e;
        c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e);
        return {
            min: a,
            max: b
        }
    };
    H.prototype.minFromRange = function() {
        var a = this.range,
            b = {
                month: "Month",
                year: "FullYear"
            }[a.type],
            c, d = this.max,
            e, f, g = function(a, c) {
                var d = new fa(a);
                d["set" + b](d["get" + b]() + c);
                return d.getTime() - a
            };
        typeof a === "number" ? (c = this.max - a, f = a) : c = d + g(d, -a.count);
        e = p(this.dataMin, Number.MIN_VALUE);
        isNaN(c) && (c = e);
        if (c <= e) c = e, f === void 0 && (f = g(c, a.count)), this.newMax = E(c + f, this.dataMax);
        isNaN(d) && (c =
            void 0);
        return c
    };
    R(Ha.prototype, "init", function(a, b, c) {
        A(this, "init", function() {
            if (this.options.rangeSelector.enabled) this.rangeSelector = new Gb(this)
        });
        a.call(this, b, c)
    });
    D.RangeSelector = Gb;
    Ha.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(f.min, f.max)
        }

        function c() {
            f = a.xAxis[0].getExtremes();
            isNaN(f.min) || h.render(f.min, f.max)
        }

        function d(a) {
            a.triggerOp !== "navigator-drag" && g.render(a.min, a.max)
        }

        function e(a) {
            h.render(a.min, a.max)
        }
        var f, g = a.scroller,
            h = a.rangeSelector;
        g && (A(a.xAxis[0], "afterSetExtremes", d), R(a, "drawChartBox", function(a) {
            var c = this.isDirtyBox;
            a.call(this);
            c && b()
        }), b());
        h && (A(a.xAxis[0], "afterSetExtremes", e), A(a, "resize", c), c());
        A(a, "destroy", function() {
            g && V(a.xAxis[0], "afterSetExtremes", d);
            h && (V(a, "resize", c), V(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    D.StockChart = function(a, b) {
        var c = a.series,
            d, e = p(a.navigator && a.navigator.enabled, !0) ? {
                startOnTick: !1,
                endOnTick: !1
            } : null,
            f = {
                marker: {
                    enabled: !1,
                    radius: 2
                }
            },
            g = {
                shadow: !1,
                borderWidth: 0
            };
        a.xAxis = Aa(na(a.xAxis || {}), function(a) {
            return B({
                minPadding: 0,
                maxPadding: 0,
                ordinal: !0,
                title: {
                    text: null
                },
                labels: {
                    overflow: "justify"
                },
                showLastLabel: !0
            }, a, {
                type: "datetime",
                categories: null
            }, e)
        });
        a.yAxis = Aa(na(a.yAxis || {}), function(a) {
            d = p(a.opposite, !0);
            return B({
                labels: {
                    y: -2
                },
                opposite: d,
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, a)
        });
        a.series = null;
        a = B({
            chart: {
                panning: !0,
                pinchType: "x"
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null,
                style: {
                    fontSize: "16px"
                }
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: f,
                spline: f,
                area: f,
                areaspline: f,
                arearange: f,
                areasplinerange: f,
                column: g,
                columnrange: g,
                candlestick: g,
                ohlc: g
            }
        }, a, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        });
        a.series = c;
        return new Ha(a, b)
    };
    R(Wa.prototype, "init", function(a, b, c) {
        var d = c.chart.pinchType || "";
        a.call(this, b, c);
        this.pinchX = this.pinchHor = d.indexOf("x") !== -1;
        this.pinchY = this.pinchVert = d.indexOf("y") !== -1;
        this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
    });
    R(H.prototype, "autoLabelAlign", function(a) {
        var b = this.chart,
            c = this.options,
            b = b._labelPanes = b._labelPanes || {},
            d = this.options.labels;
        if (this.chart.options._stock && this.coll === "yAxis" && (c = c.top + "," + c.height, !b[c] && d.enabled)) {
            if (d.x === 15) d.x = 0;
            if (d.align === void 0) d.align = "right";
            b[c] = 1;
            return "right"
        }
        return a.call(this, [].slice.call(arguments, 1))
    });
    R(H.prototype, "getPlotLinePath", function(a, b, c, d, e, f) {
        var g = this,
            h = this.isLinked && !this.series ? this.linkedParent.series : this.series,
            i = g.chart,
            k = i.renderer,
            j = g.left,
            m = g.top,
            l, n, q, r, s = [],
            w = [],
            u;
        if (g.coll === "colorAxis") return a.apply(this, [].slice.call(arguments, 1));
        w = g.isXAxis ? t(g.options.yAxis) ? [i.yAxis[g.options.yAxis]] : Aa(h, function(a) {
            return a.yAxis
        }) : t(g.options.xAxis) ? [i.xAxis[g.options.xAxis]] : Aa(h, function(a) {
            return a.xAxis
        });
        o(g.isXAxis ? i.yAxis : i.xAxis, function(a) {
            if (t(a.options.id) ? a.options.id.indexOf("navigator") === -1 : 1) {
                var b = a.isXAxis ? "yAxis" : "xAxis",
                    b = t(a.options[b]) ? i[b][a.options[b]] : i[b][0];
                g === b && w.push(a)
            }
        });
        u = w.length ? [] : [g.isXAxis ? i.yAxis[0] : i.xAxis[0]];
        o(w, function(a) {
            Oa(a, u) === -1 && u.push(a)
        });
        f = p(f, g.translate(b,
            null, null, d));
        isNaN(f) || (g.horiz ? o(u, function(a) {
            var b;
            n = a.pos;
            r = n + a.len;
            l = q = x(f + g.transB);
            if (l < j || l > j + g.width) e ? l = q = E(v(j, l), j + g.width) : b = !0;
            b || s.push("M", l, n, "L", q, r)
        }) : o(u, function(a) {
            var b;
            l = a.pos;
            q = l + a.len;
            n = r = x(m + g.height - f);
            if (n < m || n > m + g.height) e ? n = r = E(v(m, n), g.top + g.height) : b = !0;
            b || s.push("M", l, n, "L", q, r)
        }));
        return s.length > 0 ? k.crispPolyLine(s, c || 1) : null
    });
    H.prototype.getPlotBandPath = function(a, b) {
        var c = this.getPlotLinePath(b, null, null, !0),
            d = this.getPlotLinePath(a, null, null, !0),
            e = [],
            f;
        if (d &&
            c && d.toString() !== c.toString())
            for (f = 0; f < d.length; f += 6) e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
        else e = null;
        return e
    };
    qa.prototype.crispPolyLine = function(a, b) {
        var c;
        for (c = 0; c < a.length; c += 6) a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = x(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = x(a[c + 2]) + b % 2 / 2);
        return a
    };
    if (Va === D.VMLRenderer) ib.prototype.crispPolyLine = qa.prototype.crispPolyLine;
    R(H.prototype, "hideCrosshair", function(a, b) {
        a.call(this, b);
        t(this.crossLabelArray) && (t(b) ? this.crossLabelArray[b] &&
            this.crossLabelArray[b].hide() : o(this.crossLabelArray, function(a) {
                a.hide()
            }))
    });
    R(H.prototype, "drawCrosshair", function(a, b, c) {
        var d, e;
        a.call(this, b, c);
        if (t(this.crosshair.label) && this.crosshair.label.enabled && t(c)) {
            var a = this.chart,
                f = this.options.crosshair.label,
                g = this.isXAxis ? "x" : "y",
                b = this.horiz,
                h = this.opposite,
                i = this.left,
                k = this.top,
                j = this.crossLabel,
                m, l, n = f.format,
                o = "";
            if (!j) j = this.crossLabel = a.renderer.label().attr({
                align: f.align || (b ? "center" : h ? this.labelAlign === "right" ? "right" : "left" : this.labelAlign ===
                    "left" ? "left" : "center"),
                zIndex: 12,
                height: b ? 16 : s,
                fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray",
                padding: p(f.padding, 2),
                stroke: f.borderColor || null,
                "stroke-width": f.borderWidth || 0
            }).css(w({
                color: "white",
                fontWeight: "normal",
                fontSize: "11px",
                textAlign: "center"
            }, f.style)).add();
            b ? (m = c.plotX + i, l = k + (h ? 0 : this.height)) : (m = h ? this.width + i : 0, l = c.plotY + k);
            if (l < k || l > k + this.height) this.hideCrosshair();
            else {
                !n && !f.formatter && (this.isDatetimeAxis && (o = "%b %d, %Y"), n = "{value" + (o ? ":" + o : "") + "}");
                j.attr({
                    text: n ?
                        La(n, {
                            value: c[g]
                        }) : f.formatter.call(this, c[g]),
                    x: m,
                    y: l,
                    visibility: "visible"
                });
                c = j.getBBox();
                if (b) {
                    if (this.options.tickPosition === "inside" && !h || this.options.tickPosition !== "inside" && h) l = j.y - c.height
                } else l = j.y - c.height / 2;
                b ? (d = i - c.x, e = i + this.width - c.x) : (d = this.labelAlign === "left" ? i : 0, e = this.labelAlign === "right" ? i + this.width : a.chartWidth);
                j.translateX < d && (m += d - j.translateX);
                j.translateX + c.width >= e && (m -= j.translateX + c.width - e);
                j.attr({
                    x: m,
                    y: l,
                    visibility: "visible"
                })
            }
        }
    });
    var nc = da.init,
        oc = da.processData,
        pc = Da.prototype.tooltipFormatter;
    da.init = function() {
        nc.apply(this, arguments);
        this.setCompare(this.options.compare)
    };
    da.setCompare = function(a) {
        this.modifyValue = a === "value" || a === "percent" ? function(b, c) {
            var d = this.compareValue;
            if (b !== s && (b = a === "value" ? b - d : b = 100 * (b / d) - 100, c)) c.change = b;
            return b
        } : null;
        if (this.chart.hasRendered) this.isDirty = !0
    };
    da.processData = function() {
        var a = 0,
            b, c, d;
        oc.apply(this, arguments);
        if (this.xAxis && this.processedYData) {
            b = this.processedXData;
            c = this.processedYData;
            for (d = c.length; a <
                d; a++)
                if (typeof c[a] === "number" && b[a] >= this.xAxis.min) {
                    this.compareValue = c[a];
                    break
                }
        }
    };
    R(da, "getExtremes", function(a) {
        a.apply(this, [].slice.call(arguments, 1));
        if (this.modifyValue) this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin)
    });
    H.prototype.setCompare = function(a, b) {
        this.isXAxis || (o(this.series, function(b) {
            b.setCompare(a)
        }), p(b, !0) && this.chart.redraw())
    };
    Da.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + D.numberFormat(this.change,
            p(this.series.tooltipOptions.changeDecimals, 2)));
        return pc.apply(this, [a])
    };
    R(P.prototype, "render", function(a) {
        if (this.chart.options._stock && this.xAxis) !this.clipBox && this.animate ? (this.clipBox = B(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && ($a(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({
            width: this.xAxis.len,
            height: this.yAxis.len
        }));
        a.call(this)
    });
    w(D, {
        Color: va,
        Point: Da,
        Tick: Ya,
        Renderer: Va,
        SVGElement: Z,
        SVGRenderer: qa,
        arrayMin: Ra,
        arrayMax: Fa,
        charts: ca,
        dateFormat: ja,
        error: oa,
        format: La,
        pathAnim: Ib,
        getOptions: function() {
            return N
        },
        hasBidiBug: Yb,
        isTouchDevice: eb,
        setOptions: function(a) {
            N = B(!0, N, a);
            Nb();
            return N
        },
        addEvent: A,
        removeEvent: V,
        createElement: aa,
        discardElement: Sa,
        css: G,
        each: o,
        map: Aa,
        merge: B,
        splat: na,
        extendClass: ia,
        pInt: I,
        svg: ea,
        canvas: ma,
        vml: !ea && !ma,
        product: "Highstock",
        version: "2.1.9"
    })
})();