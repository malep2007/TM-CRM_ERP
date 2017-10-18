/*
 Highcharts JS v4.1.9 (2015-10-07)

 (c) 2009-2013 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function(d) {
    function p(c, b, a) {
        var e, g, f = b.options.chart.options3d,
            h = !1;
        a ? (h = b.inverted, a = b.plotWidth / 2, b = b.plotHeight / 2, e = f.depth / 2, g = z(f.depth, 1) * z(f.viewDistance, 0)) : (a = b.plotLeft + b.plotWidth / 2, b = b.plotTop + b.plotHeight / 2, e = f.depth / 2, g = z(f.depth, 1) * z(f.viewDistance, 0));
        var j = [],
            i = a,
            k = b,
            l = e,
            q = g,
            a = A * (h ? f.beta : -f.beta),
            f = A * (h ? -f.alpha : f.alpha),
            o = m(a),
            x = n(a),
            r = m(f),
            v = n(f),
            t, u, y, w, s, p;
        d.each(c, function(a) {
            t = (h ? a.y : a.x) - i;
            u = (h ? a.x : a.y) - k;
            y = (a.z || 0) - l;
            w = x * t - o * y;
            s = -o * r * t - x * r * y + v * u;
            p = o * v * t + x * v * y + r * u;
            q > 0 &&
                q < Number.POSITIVE_INFINITY && (w *= q / (p + l + q), s *= q / (p + l + q));
            w += i;
            s += k;
            p += l;
            j.push({
                x: h ? s : w,
                y: h ? w : s,
                z: p
            })
        });
        return j
    }

    function B(c) {
        return c !== void 0 && c !== null
    }

    function F(c) {
        var b = 0,
            a, e;
        for (a = 0; a < c.length; a++) e = (a + 1) % c.length, b += c[a].x * c[e].y - c[e].x * c[a].y;
        return b / 2
    }

    function D(c) {
        var b = 0,
            a;
        for (a = 0; a < c.length; a++) b += c[a].z;
        return c.length ? b / c.length : 0
    }

    function s(c, b, a, e, g, f, d, j) {
        var i = [];
        return f > g && f - g > o / 2 + 1.0E-4 ? (i = i.concat(s(c, b, a, e, g, g + o / 2, d, j)), i = i.concat(s(c, b, a, e, g + o / 2, f, d, j))) : f < g && g - f > o / 2 + 1.0E-4 ?
            (i = i.concat(s(c, b, a, e, g, g - o / 2, d, j)), i = i.concat(s(c, b, a, e, g - o / 2, f, d, j))) : (i = f - g, ["C", c + a * n(g) - a * C * i * m(g) + d, b + e * m(g) + e * C * i * n(g) + j, c + a * n(f) + a * C * i * m(f) + d, b + e * m(f) - e * C * i * n(f) + j, c + a * n(f) + d, b + e * m(f) + j])
    }

    function G(c) {
        if (this.chart.is3d()) {
            var b = this.chart.options.plotOptions.column.grouping;
            if (b !== void 0 && !b && this.group.zIndex !== void 0 && !this.zIndexSet) this.group.attr({
                zIndex: this.group.zIndex * 10
            }), this.zIndexSet = !0;
            var a = this.options,
                e = this.options.states;
            this.borderWidth = a.borderWidth = B(a.edgeWidth) ? a.edgeWidth :
                1;
            d.each(this.data, function(b) {
                if (b.y !== null) b = b.pointAttr, this.borderColor = d.pick(a.edgeColor, b[""].fill), b[""].stroke = this.borderColor, b.hover.stroke = d.pick(e.hover.edgeColor, this.borderColor), b.select.stroke = d.pick(e.select.edgeColor, this.borderColor)
            })
        }
        c.apply(this, [].slice.call(arguments, 1))
    }
    var o = Math.PI,
        A = o / 180,
        m = Math.sin,
        n = Math.cos,
        z = d.pick,
        H = Math.round;
    d.perspective = p;
    var C = 4 * (Math.sqrt(2) - 1) / 3 / (o / 2);
    d.SVGRenderer.prototype.toLinePath = function(c, b) {
        var a = [];
        d.each(c, function(b) {
            a.push("L",
                b.x, b.y)
        });
        c.length && (a[0] = "M", b && a.push("Z"));
        return a
    };
    d.SVGRenderer.prototype.cuboid = function(c) {
        var b = this.g(),
            c = this.cuboidPath(c);
        b.front = this.path(c[0]).attr({
            zIndex: c[3],
            "stroke-linejoin": "round"
        }).add(b);
        b.top = this.path(c[1]).attr({
            zIndex: c[4],
            "stroke-linejoin": "round"
        }).add(b);
        b.side = this.path(c[2]).attr({
            zIndex: c[5],
            "stroke-linejoin": "round"
        }).add(b);
        b.fillSetter = function(a) {
            var b = d.Color(a).brighten(0.1).get(),
                c = d.Color(a).brighten(-0.1).get();
            this.front.attr({
                fill: a
            });
            this.top.attr({
                fill: b
            });
            this.side.attr({
                fill: c
            });
            this.color = a;
            return this
        };
        b.opacitySetter = function(a) {
            this.front.attr({
                opacity: a
            });
            this.top.attr({
                opacity: a
            });
            this.side.attr({
                opacity: a
            });
            return this
        };
        b.attr = function(a) {
            a.shapeArgs || B(a.x) ? (a = this.renderer.cuboidPath(a.shapeArgs || a), this.front.attr({
                d: a[0],
                zIndex: a[3]
            }), this.top.attr({
                d: a[1],
                zIndex: a[4]
            }), this.side.attr({
                d: a[2],
                zIndex: a[5]
            })) : d.SVGElement.prototype.attr.call(this, a);
            return this
        };
        b.animate = function(a, b, c) {
            B(a.x) && B(a.y) ? (a = this.renderer.cuboidPath(a), this.front.attr({
                zIndex: a[3]
            }).animate({
                    d: a[0]
                },
                b, c), this.top.attr({
                zIndex: a[4]
            }).animate({
                d: a[1]
            }, b, c), this.side.attr({
                zIndex: a[5]
            }).animate({
                d: a[2]
            }, b, c)) : a.opacity ? (this.front.animate(a, b, c), this.top.animate(a, b, c), this.side.animate(a, b, c)) : d.SVGElement.prototype.animate.call(this, a, b, c);
            return this
        };
        b.destroy = function() {
            this.front.destroy();
            this.top.destroy();
            this.side.destroy();
            return null
        };
        b.attr({
            zIndex: -c[3]
        });
        return b
    };
    d.SVGRenderer.prototype.cuboidPath = function(c) {
        var b = c.x,
            a = c.y,
            e = c.z,
            g = c.height,
            f = c.width,
            h = c.depth,
            j = d.map,
            i = [{
                x: b,
                y: a,
                z: e
            }, {
                x: b + f,
                y: a,
                z: e
            }, {
                x: b + f,
                y: a + g,
                z: e
            }, {
                x: b,
                y: a + g,
                z: e
            }, {
                x: b,
                y: a + g,
                z: e + h
            }, {
                x: b + f,
                y: a + g,
                z: e + h
            }, {
                x: b + f,
                y: a,
                z: e + h
            }, {
                x: b,
                y: a,
                z: e + h
            }],
            i = p(i, d.charts[this.chartIndex], c.insidePlotArea),
            a = function(a, b) {
                a = j(a, function(a) {
                    return i[a]
                });
                b = j(b, function(a) {
                    return i[a]
                });
                return F(a) < 0 ? a : F(b) < 0 ? b : []
            },
            c = a([3, 2, 1, 0], [7, 6, 5, 4]),
            b = a([1, 6, 7, 0], [4, 5, 2, 3]),
            a = a([1, 2, 5, 6], [0, 7, 4, 3]);
        return [this.toLinePath(c, !0), this.toLinePath(b, !0), this.toLinePath(a, !0), D(c), D(b), D(a)]
    };
    d.SVGRenderer.prototype.arc3d = function(c) {
        c.alpha *=
            A;
        c.beta *= A;
        var b = this.g(),
            a = this.arc3dPath(c),
            e = b.renderer,
            g = a.zTop * 100;
        b.shapeArgs = c;
        b.top = e.path(a.top).setRadialReference(c.center).attr({
            zIndex: a.zTop
        }).add(b);
        b.side1 = e.path(a.side2).attr({
            zIndex: a.zSide1
        });
        b.side2 = e.path(a.side1).attr({
            zIndex: a.zSide2
        });
        b.inn = e.path(a.inn).attr({
            zIndex: a.zInn
        });
        b.out = e.path(a.out).attr({
            zIndex: a.zOut
        });
        b.fillSetter = function(a) {
            this.color = a;
            var b = d.Color(a).brighten(-0.1).get();
            this.side1.attr({
                fill: b
            });
            this.side2.attr({
                fill: b
            });
            this.inn.attr({
                fill: b
            });
            this.out.attr({
                fill: b
            });
            this.top.attr({
                fill: a
            });
            return this
        };
        b.translateXSetter = function(a) {
            this.out.attr({
                translateX: a
            });
            this.inn.attr({
                translateX: a
            });
            this.side1.attr({
                translateX: a
            });
            this.side2.attr({
                translateX: a
            });
            this.top.attr({
                translateX: a
            })
        };
        b.translateYSetter = function(a) {
            this.out.attr({
                translateY: a
            });
            this.inn.attr({
                translateY: a
            });
            this.side1.attr({
                translateY: a
            });
            this.side2.attr({
                translateY: a
            });
            this.top.attr({
                translateY: a
            })
        };
        b.animate = function(a, b, c) {
            B(a.end) || B(a.start) ? (this._shapeArgs = this.shapeArgs, d.SVGElement.prototype.animate.call(this, {
                _args: a
            }, {
                duration: b,
                start: function() {
                    var a = arguments[0].elem,
                        b = a._shapeArgs;
                    b.fill !== a.color && a.attr({
                        fill: b.fill
                    })
                },
                step: function() {
                    var a = arguments[1],
                        b = a.elem,
                        c = b._shapeArgs,
                        e = a.end,
                        a = a.pos,
                        c = d.merge(c, {
                            x: c.x + (e.x - c.x) * a,
                            y: c.y + (e.y - c.y) * a,
                            r: c.r + (e.r - c.r) * a,
                            innerR: c.innerR + (e.innerR - c.innerR) * a,
                            start: c.start + (e.start - c.start) * a,
                            end: c.end + (e.end - c.end) * a
                        }),
                        e = b.renderer.arc3dPath(c);
                    b.shapeArgs = c;
                    b.top.attr({
                        d: e.top,
                        zIndex: e.zTop
                    });
                    b.inn.attr({
                        d: e.inn,
                        zIndex: e.zInn
                    });
                    b.out.attr({
                        d: e.out,
                        zIndex: e.zOut
                    });
                    b.side1.attr({
                        d: e.side1,
                        zIndex: e.zSide1
                    });
                    b.side2.attr({
                        d: e.side2,
                        zIndex: e.zSide2
                    })
                }
            }, c)) : d.SVGElement.prototype.animate.call(this, a, b, c);
            return this
        };
        b.destroy = function() {
            this.top.destroy();
            this.out.destroy();
            this.inn.destroy();
            this.side1.destroy();
            this.side2.destroy();
            d.SVGElement.prototype.destroy.call(this)
        };
        b.hide = function() {
            this.top.hide();
            this.out.hide();
            this.inn.hide();
            this.side1.hide();
            this.side2.hide()
        };
        b.show = function() {
            this.top.show();
            this.out.show();
            this.inn.show();
            this.side1.show();
            this.side2.show()
        };
        b.zIndex = g;
        b.attr({
            zIndex: g
        });
        return b
    };
    d.SVGRenderer.prototype.arc3dPath = function(c) {
        function b(a) {
            a %= 2 * o;
            a > o && (a = 2 * o - a);
            return a
        }
        var a = c.x,
            e = c.y,
            d = c.start,
            f = c.end - 1.0E-5,
            h = c.r,
            j = c.innerR,
            i = c.depth,
            k = c.alpha,
            l = c.beta,
            q = n(d),
            p = m(d),
            c = n(f),
            x = m(f),
            r = h * n(l);
        h *= n(k);
        var v = j * n(l),
            t = j * n(k),
            j = i * m(l),
            u = i * m(k),
            i = ["M", a + r * q, e + h * p],
            i = i.concat(s(a, e, r, h, d, f, 0, 0)),
            i = i.concat(["L", a + v * c, e + t * x]),
            i = i.concat(s(a, e, v, t, f, d, 0, 0)),
            i = i.concat(["Z"]),
            y = l > 0 ? o / 2 : 0,
            l = k > 0 ? 0 : o / 2,
            y = d > -y ? d : f > -y ? -y : d,
            w = f < o -
            l ? f : d < o - l ? o - l : f,
            k = ["M", a + r * n(y), e + h * m(y)],
            k = k.concat(s(a, e, r, h, y, w, 0, 0));
        f > o - l && d < o - l && (k = k.concat(["L", a + r * n(w) + j, e + h * m(w) + u]), k = k.concat(s(a, e, r, h, w, f, j, u)), k = k.concat(["L", a + r * n(f), e + h * m(f)]), k = k.concat(s(a, e, r, h, f, w, 0, 0)));
        k = k.concat(["L", a + r * n(w) + j, e + h * m(w) + u]);
        k = k.concat(s(a, e, r, h, w, y, j, u));
        k = k.concat(["Z"]);
        l = ["M", a + v * q, e + t * p];
        l = l.concat(s(a, e, v, t, d, f, 0, 0));
        l = l.concat(["L", a + v * n(f) + j, e + t * m(f) + u]);
        l = l.concat(s(a, e, v, t, f, d, j, u));
        l = l.concat(["Z"]);
        q = ["M", a + r * q, e + h * p, "L", a + r * q + j, e + h * p + u, "L", a +
            v * q + j, e + t * p + u, "L", a + v * q, e + t * p, "Z"
        ];
        a = ["M", a + r * c, e + h * x, "L", a + r * c + j, e + h * x + u, "L", a + v * c + j, e + t * x + u, "L", a + v * c, e + t * x, "Z"];
        x = Math.atan2(u, -j);
        e = Math.abs(f + x);
        c = Math.abs(d + x);
        d = Math.abs((d + f) / 2 + x);
        e = b(e);
        c = b(c);
        d = b(d);
        d *= 1E5;
        f = c * 1E5;
        e *= 1E5;
        return {
            top: i,
            zTop: o * 1E5 + 1,
            out: k,
            zOut: Math.max(d, f, e),
            inn: l,
            zInn: Math.max(d, f, e),
            side1: q,
            zSide1: e * 0.99,
            side2: a,
            zSide2: f * 0.99
        }
    };
    d.Chart.prototype.is3d = function() {
        return this.options.chart.options3d && this.options.chart.options3d.enabled
    };
    d.wrap(d.Chart.prototype, "isInsidePlot",
        function(c) {
            return this.is3d() ? !0 : c.apply(this, [].slice.call(arguments, 1))
        });
    d.getOptions().chart.options3d = {
        enabled: !1,
        alpha: 0,
        beta: 0,
        depth: 100,
        viewDistance: 25,
        frame: {
            bottom: {
                size: 1,
                color: "rgba(255,255,255,0)"
            },
            side: {
                size: 1,
                color: "rgba(255,255,255,0)"
            },
            back: {
                size: 1,
                color: "rgba(255,255,255,0)"
            }
        }
    };
    d.wrap(d.Chart.prototype, "init", function(c) {
        var b = [].slice.call(arguments, 1),
            a;
        if (b[0].chart.options3d && b[0].chart.options3d.enabled) b[0].chart.options3d.alpha = (b[0].chart.options3d.alpha || 0) % 360, b[0].chart.options3d.beta =
            (b[0].chart.options3d.beta || 0) % 360, a = b[0].plotOptions || {}, a = a.pie || {}, a.borderColor = d.pick(a.borderColor, void 0);
        c.apply(this, b)
    });
    d.wrap(d.Chart.prototype, "setChartSize", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        if (this.is3d()) {
            var b = this.inverted,
                a = this.clipBox,
                e = this.margin;
            a[b ? "y" : "x"] = -(e[3] || 0);
            a[b ? "x" : "y"] = -(e[0] || 0);
            a[b ? "height" : "width"] = this.chartWidth + (e[3] || 0) + (e[1] || 0);
            a[b ? "width" : "height"] = this.chartHeight + (e[0] || 0) + (e[2] || 0)
        }
    });
    d.wrap(d.Chart.prototype, "redraw", function(c) {
        if (this.is3d()) this.isDirtyBox = !0;
        c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.Chart.prototype, "renderSeries", function(c) {
        var b = this.series.length;
        if (this.is3d())
            for (; b--;) c = this.series[b], c.translate(), c.render();
        else c.call(this)
    });
    d.Chart.prototype.retrieveStacks = function(c) {
        var b = this.series,
            a = {},
            e, g = 1;
        d.each(this.series, function(d) {
            e = z(d.options.stack, c ? 0 : b.length - 1 - d.index);
            a[e] ? a[e].series.push(d) : (a[e] = {
                series: [d],
                position: g
            }, g++)
        });
        a.totalStacks = g + 1;
        return a
    };
    d.wrap(d.Axis.prototype, "setOptions", function(c, b) {
        var a;
        c.call(this, b);
        if (this.chart.is3d()) a = this.options, a.tickWidth = d.pick(a.tickWidth, 0), a.gridLineWidth = d.pick(a.gridLineWidth, 1)
    });
    d.wrap(d.Axis.prototype, "render", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        if (this.chart.is3d()) {
            var b = this.chart,
                a = b.renderer,
                e = b.options.chart.options3d,
                d = e.frame,
                f = d.bottom,
                h = d.back,
                d = d.side,
                j = e.depth,
                i = this.height,
                k = this.width,
                l = this.left,
                q = this.top;
            if (!this.isZAxis) this.horiz ? (h = {
                    x: l,
                    y: q + (b.xAxis[0].opposite ? -f.size : i),
                    z: 0,
                    width: k,
                    height: f.size,
                    depth: j,
                    insidePlotArea: !1
                },
                this.bottomFrame ? this.bottomFrame.animate(h) : this.bottomFrame = a.cuboid(h).attr({
                    fill: f.color,
                    zIndex: b.yAxis[0].reversed && e.alpha > 0 ? 4 : -1
                }).css({
                    stroke: f.color
                }).add()) : (e = {
                x: l + (b.yAxis[0].opposite ? 0 : -d.size),
                y: q + (b.xAxis[0].opposite ? -f.size : 0),
                z: j,
                width: k + d.size,
                height: i + f.size,
                depth: h.size,
                insidePlotArea: !1
            }, this.backFrame ? this.backFrame.animate(e) : this.backFrame = a.cuboid(e).attr({
                fill: h.color,
                zIndex: -3
            }).css({
                stroke: h.color
            }).add(), b = {
                x: l + (b.yAxis[0].opposite ? k : -d.size),
                y: q + (b.xAxis[0].opposite ?
                    -f.size : 0),
                z: 0,
                width: d.size,
                height: i + f.size,
                depth: j,
                insidePlotArea: !1
            }, this.sideFrame ? this.sideFrame.animate(b) : this.sideFrame = a.cuboid(b).attr({
                fill: d.color,
                zIndex: -2
            }).css({
                stroke: d.color
            }).add())
        }
    });
    d.wrap(d.Axis.prototype, "getPlotLinePath", function(c) {
        var b = c.apply(this, [].slice.call(arguments, 1));
        if (!this.chart.is3d()) return b;
        if (b === null) return b;
        var a = this.chart.options.chart.options3d,
            a = this.isZAxis ? this.chart.plotWidth : a.depth,
            d = this.opposite;
        this.horiz && (d = !d);
        b = [this.swapZ({
            x: b[1],
            y: b[2],
            z: d ? a : 0
        }), this.swapZ({
            x: b[1],
            y: b[2],
            z: a
        }), this.swapZ({
            x: b[4],
            y: b[5],
            z: a
        }), this.swapZ({
            x: b[4],
            y: b[5],
            z: d ? 0 : a
        })];
        b = p(b, this.chart, !1);
        return b = this.chart.renderer.toLinePath(b, !1)
    });
    d.wrap(d.Axis.prototype, "getLinePath", function(c) {
        return this.chart.is3d() ? [] : c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.Axis.prototype, "getPlotBandPath", function(c) {
        if (this.chart.is3d()) {
            var b = arguments,
                a = b[1],
                b = this.getPlotLinePath(b[2]);
            (a = this.getPlotLinePath(a)) && b ? a.push("L", b[10], b[11], "L", b[7], b[8], "L",
                b[4], b[5], "L", b[1], b[2]) : a = null;
            return a
        } else return c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.Tick.prototype, "getMarkPath", function(c) {
        var b = c.apply(this, [].slice.call(arguments, 1));
        if (!this.axis.chart.is3d()) return b;
        b = [this.axis.swapZ({
            x: b[1],
            y: b[2],
            z: 0
        }), this.axis.swapZ({
            x: b[4],
            y: b[5],
            z: 0
        })];
        b = p(b, this.axis.chart, !1);
        return b = ["M", b[0].x, b[0].y, "L", b[1].x, b[1].y]
    });
    d.wrap(d.Tick.prototype, "getLabelPosition", function(c) {
        var b = c.apply(this, [].slice.call(arguments, 1));
        if (!this.axis.chart.is3d()) return b;
        var a = p([this.axis.swapZ({
            x: b.x,
            y: b.y,
            z: 0
        })], this.axis.chart, !1)[0];
        a.x -= !this.axis.horiz && this.axis.opposite ? this.axis.transA : 0;
        a.old = b;
        return a
    });
    d.wrap(d.Tick.prototype, "handleOverflow", function(c, b) {
        if (this.axis.chart.is3d()) b = b.old;
        return c.call(this, b)
    });
    d.wrap(d.Axis.prototype, "getTitlePosition", function(c) {
        var b = c.apply(this, [].slice.call(arguments, 1));
        return !this.chart.is3d() ? b : b = p([this.swapZ({
            x: b.x,
            y: b.y,
            z: 0
        })], this.chart, !1)[0]
    });
    d.wrap(d.Axis.prototype, "drawCrosshair", function(c) {
        var b =
            arguments;
        this.chart.is3d() && b[2] && (b[2] = {
            plotX: b[2].plotXold || b[2].plotX,
            plotY: b[2].plotYold || b[2].plotY
        });
        c.apply(this, [].slice.call(b, 1))
    });
    d.Axis.prototype.swapZ = function(c, b) {
        if (this.isZAxis) {
            var a = b ? 0 : this.chart.plotLeft,
                d = this.chart;
            return {
                x: a + (d.yAxis[0].opposite ? c.z : d.xAxis[0].width - c.z),
                y: c.y,
                z: c.x - a
            }
        } else return c
    };
    var E = d.ZAxis = function() {
        this.isZAxis = !0;
        this.init.apply(this, arguments)
    };
    d.extend(E.prototype, d.Axis.prototype);
    d.extend(E.prototype, {
        setOptions: function(c) {
            c = d.merge({
                offset: 0,
                lineWidth: 0
            }, c);
            d.Axis.prototype.setOptions.call(this, c);
            this.coll = "zAxis"
        },
        setAxisSize: function() {
            d.Axis.prototype.setAxisSize.call(this);
            this.width = this.len = this.chart.options.chart.options3d.depth;
            this.right = this.chart.chartWidth - this.width - this.left
        },
        getSeriesExtremes: function() {
            var c = this,
                b = c.chart;
            c.hasVisibleSeries = !1;
            c.dataMin = c.dataMax = c.ignoreMinPadding = c.ignoreMaxPadding = null;
            c.buildStacks && c.buildStacks();
            d.each(c.series, function(a) {
                if (a.visible || !b.options.chart.ignoreHiddenSeries)
                    if (c.hasVisibleSeries = !0, a = a.zData, a.length) c.dataMin = Math.min(z(c.dataMin, a[0]), Math.min.apply(null, a)), c.dataMax = Math.max(z(c.dataMax, a[0]), Math.max.apply(null, a))
            })
        }
    });
    d.wrap(d.Chart.prototype, "getAxes", function(c) {
        var b = this,
            a = this.options,
            a = a.zAxis = d.splat(a.zAxis || {});
        c.call(this);
        if (b.is3d()) this.zAxis = [], d.each(a, function(a, c) {
            a.index = c;
            a.isX = !0;
            (new E(b, a)).setScale()
        })
    });
    d.wrap(d.seriesTypes.column.prototype, "translate", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        if (this.chart.is3d()) {
            var b = this.chart,
                a = this.options,
                e = a.depth || 25,
                g = (a.stacking ? a.stack || 0 : this._i) * (e + (a.groupZPadding || 1));
            a.grouping !== !1 && (g = 0);
            g += a.groupZPadding || 1;
            d.each(this.data, function(a) {
                if (a.y !== null) {
                    var c = a.shapeArgs,
                        d = a.tooltipPos;
                    a.shapeType = "cuboid";
                    c.z = g;
                    c.depth = e;
                    c.insidePlotArea = !0;
                    d = p([{
                        x: d[0],
                        y: d[1],
                        z: g
                    }], b, !1)[0];
                    a.tooltipPos = [d.x, d.y]
                }
            });
            this.z = g
        }
    });
    d.wrap(d.seriesTypes.column.prototype, "animate", function(c) {
        if (this.chart.is3d()) {
            var b = arguments[1],
                a = this.yAxis,
                e = this,
                g = this.yAxis.reversed;
            if (d.svg) b ? d.each(e.data,
                function(b) {
                    if (b.y !== null && (b.height = b.shapeArgs.height, b.shapey = b.shapeArgs.y, b.shapeArgs.height = 1, !g)) b.shapeArgs.y = b.stackY ? b.plotY + a.translate(b.stackY) : b.plotY + (b.negative ? -b.height : b.height)
                }) : (d.each(e.data, function(a) {
                if (a.y !== null) a.shapeArgs.height = a.height, a.shapeArgs.y = a.shapey, a.graphic && a.graphic.animate(a.shapeArgs, e.options.animation)
            }), this.drawDataLabels(), e.animate = null)
        } else c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.seriesTypes.column.prototype, "init", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        if (this.chart.is3d()) {
            var b = this.options,
                a = b.grouping,
                d = b.stacking,
                g = 0;
            if (a === void 0 || a) {
                a = this.chart.retrieveStacks(d);
                d = b.stack || 0;
                for (g = 0; g < a[d].series.length; g++)
                    if (a[d].series[g] === this) break;
                g = a.totalStacks * 10 - 10 * (a.totalStacks - a[d].position) - g
            }
            b.zIndex = g
        }
    });
    d.wrap(d.Series.prototype, "alignDataLabel", function(c) {
        if (this.chart.is3d() && (this.type === "column" || this.type === "columnrange")) {
            var b = arguments[4],
                a = {
                    x: b.x,
                    y: b.y,
                    z: this.z
                },
                a = p([a], this.chart, !0)[0];
            b.x = a.x;
            b.y =
                a.y
        }
        c.apply(this, [].slice.call(arguments, 1))
    });
    d.seriesTypes.columnrange && d.wrap(d.seriesTypes.columnrange.prototype, "drawPoints", G);
    d.wrap(d.seriesTypes.column.prototype, "drawPoints", G);
    d.wrap(d.seriesTypes.pie.prototype, "translate", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        if (this.chart.is3d()) {
            var b = this,
                a = b.chart,
                e = b.options,
                g = e.depth || 0,
                f = a.options.chart.options3d,
                h = {
                    x: a.plotWidth / 2,
                    y: a.plotHeight / 2,
                    z: f.depth
                },
                j = f.alpha,
                i = f.beta,
                k = e.stacking ? (e.stack || 0) * g : b._i * g;
            k += g / 2;
            e.grouping !==
                !1 && (k = 0);
            d.each(b.data, function(a) {
                var c = a.shapeArgs;
                a.shapeType = "arc3d";
                c.z = k;
                c.depth = g * 0.75;
                c.origin = h;
                c.alpha = j;
                c.beta = i;
                c.center = b.center;
                c = (c.end + c.start) / 2;
                a.slicedTranslation = {
                    translateX: H(n(c) * e.slicedOffset * n(j * A)),
                    translateY: H(m(c) * e.slicedOffset * n(j * A))
                }
            })
        }
    });
    d.wrap(d.seriesTypes.pie.prototype.pointClass.prototype, "haloPath", function(c) {
        var b = arguments;
        return this.series.chart.is3d() ? [] : c.call(this, b[1])
    });
    d.wrap(d.seriesTypes.pie.prototype, "drawPoints", function(c) {
        var b = this.group,
            a =
            this.options,
            e = a.states;
        if (this.chart.is3d()) this.borderWidth = a.borderWidth = a.edgeWidth || 1, this.borderColor = a.edgeColor = d.pick(a.edgeColor, a.borderColor, void 0), e.hover.borderColor = d.pick(e.hover.edgeColor, this.borderColor), e.hover.borderWidth = d.pick(e.hover.edgeWidth, this.borderWidth), e.select.borderColor = d.pick(e.select.edgeColor, this.borderColor), e.select.borderWidth = d.pick(e.select.edgeWidth, this.borderWidth), d.each(this.data, function(a) {
            var b = a.pointAttr;
            b[""].stroke = a.series.borderColor || a.color;
            b[""]["stroke-width"] = a.series.borderWidth;
            b.hover.stroke = e.hover.borderColor;
            b.hover["stroke-width"] = e.hover.borderWidth;
            b.select.stroke = e.select.borderColor;
            b.select["stroke-width"] = e.select.borderWidth
        });
        c.apply(this, [].slice.call(arguments, 1));
        this.chart.is3d() && d.each(this.points, function(a) {
            var c = a.graphic;
            c.out.add(b);
            c.inn.add(b);
            c.side1.add(b);
            c.side2.add(b);
            c[a.y ? "show" : "hide"]()
        })
    });
    d.wrap(d.seriesTypes.pie.prototype, "drawDataLabels", function(c) {
        if (this.chart.is3d()) {
            var b = this;
            d.each(b.data,
                function(a) {
                    var c = a.shapeArgs,
                        d = c.r,
                        f = c.depth,
                        h = (c.alpha || b.chart.options.chart.options3d.alpha) * A,
                        c = (c.start + c.end) / 2,
                        a = a.labelPos;
                    a[1] += -d * (1 - n(h)) * m(c) + (m(c) > 0 ? m(h) * f : 0);
                    a[3] += -d * (1 - n(h)) * m(c) + (m(c) > 0 ? m(h) * f : 0);
                    a[5] += -d * (1 - n(h)) * m(c) + (m(c) > 0 ? m(h) * f : 0)
                })
        }
        c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.seriesTypes.pie.prototype, "addPoint", function(c) {
        c.apply(this, [].slice.call(arguments, 1));
        this.chart.is3d() && this.update(this.userOptions, !0)
    });
    d.wrap(d.seriesTypes.pie.prototype, "animate", function(c) {
        if (this.chart.is3d()) {
            var b =
                arguments[1],
                a = this.options.animation,
                e = this.center,
                g = this.group,
                f = this.markerGroup;
            if (d.svg)
                if (a === !0 && (a = {}), b) {
                    if (g.oldtranslateX = g.translateX, g.oldtranslateY = g.translateY, b = {
                            translateX: e[0],
                            translateY: e[1],
                            scaleX: 0.001,
                            scaleY: 0.001
                        }, g.attr(b), f) f.attrSetters = g.attrSetters, f.attr(b)
                } else b = {
                    translateX: g.oldtranslateX,
                    translateY: g.oldtranslateY,
                    scaleX: 1,
                    scaleY: 1
                }, g.animate(b, a), f && f.animate(b, a), this.animate = null
        } else c.apply(this, [].slice.call(arguments, 1))
    });
    d.wrap(d.seriesTypes.scatter.prototype,
        "translate",
        function(c) {
            c.apply(this, [].slice.call(arguments, 1));
            if (this.chart.is3d()) {
                var b = this.chart,
                    a = d.pick(this.zAxis, b.options.zAxis[0]),
                    e = [],
                    g, f, h;
                for (h = 0; h < this.data.length; h++) g = this.data[h], f = a.isLog && a.val2lin ? a.val2lin(g.z) : g.z, g.plotZ = a.translate(f), g.isInside = g.isInside ? f >= a.min && f <= a.max : !1, e.push({
                    x: g.plotX,
                    y: g.plotY,
                    z: g.plotZ
                });
                b = p(e, b, !0);
                for (h = 0; h < this.data.length; h++) g = this.data[h], a = b[h], g.plotXold = g.plotX, g.plotYold = g.plotY, g.plotX = a.x, g.plotY = a.y, g.plotZ = a.z
            }
        });
    d.wrap(d.seriesTypes.scatter.prototype,
        "init",
        function(c, b, a) {
            if (b.is3d()) this.axisTypes = ["xAxis", "yAxis", "zAxis"], this.pointArrayMap = ["x", "y", "z"], this.parallelArrays = ["x", "y", "z"];
            c = c.apply(this, [b, a]);
            if (this.chart.is3d()) this.tooltipOptions.pointFormat = this.userOptions.tooltip ? this.userOptions.tooltip.pointFormat || "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>" : "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>";
            return c
        });
    if (d.VMLRenderer) d.setOptions({
            animate: !1
        }), d.VMLRenderer.prototype.cuboid =
        d.SVGRenderer.prototype.cuboid, d.VMLRenderer.prototype.cuboidPath = d.SVGRenderer.prototype.cuboidPath, d.VMLRenderer.prototype.toLinePath = d.SVGRenderer.prototype.toLinePath, d.VMLRenderer.prototype.createElement3D = d.SVGRenderer.prototype.createElement3D, d.VMLRenderer.prototype.arc3d = function(c) {
            c = d.SVGRenderer.prototype.arc3d.call(this, c);
            c.css({
                zIndex: c.zIndex
            });
            return c
        }, d.VMLRenderer.prototype.arc3dPath = d.SVGRenderer.prototype.arc3dPath, d.wrap(d.Axis.prototype, "render", function(c) {
            c.apply(this, [].slice.call(arguments,
                1));
            this.sideFrame && (this.sideFrame.css({
                zIndex: 0
            }), this.sideFrame.front.attr({
                fill: this.sideFrame.color
            }));
            this.bottomFrame && (this.bottomFrame.css({
                zIndex: 1
            }), this.bottomFrame.front.attr({
                fill: this.bottomFrame.color
            }));
            this.backFrame && (this.backFrame.css({
                zIndex: 0
            }), this.backFrame.front.attr({
                fill: this.backFrame.color
            }))
        })
})(Highcharts);