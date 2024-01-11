/*! For license information please see vendors.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(e, t, n) {
            "use strict";
            (function(e, i) {
                n.d(t, "k", function() {
                    return r
                }), n.d(t, "m", function() {
                    return a
                }), n.d(t, "l", function() {
                    return s
                }), n.d(t, "i", function() {
                    return l
                }), n.d(t, "a", function() {
                    return u
                }), n.d(t, "b", function() {
                    return c
                }), n.d(t, "c", function() {
                    return d
                }), n.d(t, "d", function() {
                    return f
                }), n.d(t, "e", function() {
                    return h
                }), n.d(t, "f", function() {
                    return p
                }), n.d(t, "g", function() {
                    return g
                }), n.d(t, "h", function() {
                    return m
                }), n.d(t, "j", function() {
                    return v
                });
                var r = "undefined" != typeof window ? window : e.exports && void 0 !== i ? i : {},
                    s = function(e) {
                        var t = {},
                            n = e.document,
                            i = e.GreenSockGlobals = e.GreenSockGlobals || e;
                        if (i.TweenLite) return i.TweenLite;

                        function r(e) {
                            var t, n = e.split("."),
                                r = i;
                            for (t = 0; t < n.length; t++) r[n[t]] = r = r[n[t]] || {};
                            return r
                        }

                        function s(e) {
                            var t, n = [],
                                i = e.length;
                            for (t = 0; t !== i; n.push(e[t++]));
                            return n
                        }

                        function a() {}
                        var o, l, u, c, d, f, h, p = r("com.greensock"),
                            g = 1e-8,
                            m = (f = Object.prototype.toString, h = f.call([]), function(e) {
                                return null != e && (e instanceof Array || "object" == typeof e && !!e.push && f.call(e) === h)
                            }),
                            v = {},
                            _ = function(e, n, s, a) {
                                this.sc = v[e] ? v[e].sc : [], (v[e] = this).gsClass = null, this.func = s;
                                var o = [];
                                this.check = function(l) {
                                    for (var u, c, d, f, h = n.length, p = h; - 1 < --h;)(u = v[n[h]] || new _(n[h], [])).gsClass ? (o[h] = u.gsClass, p--) : l && u.sc.push(this);
                                    if (0 === p && s)
                                        for (d = (c = ("com.greensock." + e).split(".")).pop(), f = r(c.join("."))[d] = this.gsClass = s.apply(s, o), a && (i[d] = t[d] = f), h = 0; h < this.sc.length; h++) this.sc[h].check()
                                }, this.check(!0)
                            },
                            y = e._gsDefine = function(e, t, n, i) {
                                return new _(e, t, n, i)
                            },
                            b = p._class = function(e, t, n) {
                                return t = t || function() {}, y(e, [], function() {
                                    return t
                                }, n), t
                            };
                        y.globals = i;
                        var x = [0, 0, 1, 1],
                            S = b("easing.Ease", function(e, t, n, i) {
                                this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? x.concat(t) : x
                            }, !0),
                            T = S.map = {},
                            w = S.register = function(e, t, n, i) {
                                for (var r, s, a, o, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                                    for (s = l[u], r = i ? b("easing." + s, null, !0) : p.easing[s] || {}, a = c.length; - 1 < --a;) o = c[a], T[s + "." + o] = T[o + s] = r[o] = e.getRatio ? e : e[o] || new e
                            };
                        for ((u = S.prototype)._calcEnd = !1, u.getRatio = function(e) {
                                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                                var t = this._type,
                                    n = this._power,
                                    i = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                                return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : e < .5 ? i / 2 : 1 - i / 2
                            }, l = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --l;) u = o[l] + ",Power" + l, w(new S(null, null, 1, l), u, "easeOut", !0), w(new S(null, null, 2, l), u, "easeIn" + (0 === l ? ",easeNone" : "")), w(new S(null, null, 3, l), u, "easeInOut");
                        T.linear = p.easing.Linear.easeIn, T.swing = p.easing.Quad.easeInOut;
                        var E = b("events.EventDispatcher", function(e) {
                            this._listeners = {}, this._eventTarget = e || this
                        });
                        (u = E.prototype).addEventListener = function(e, t, n, i, r) {
                            r = r || 0;
                            var s, a, o = this._listeners[e],
                                l = 0;
                            for (this !== c || d || c.wake(), null == o && (this._listeners[e] = o = []), a = o.length; - 1 < --a;)(s = o[a]).c === t && s.s === n ? o.splice(a, 1) : 0 === l && s.pr < r && (l = a + 1);
                            o.splice(l, 0, {
                                c: t,
                                s: n,
                                up: i,
                                pr: r
                            })
                        }, u.removeEventListener = function(e, t) {
                            var n, i = this._listeners[e];
                            if (i)
                                for (n = i.length; - 1 < --n;)
                                    if (i[n].c === t) return void i.splice(n, 1)
                        }, u.dispatchEvent = function(e) {
                            var t, n, i, r = this._listeners[e];
                            if (r)
                                for (1 < (t = r.length) && (r = r.slice(0)), n = this._eventTarget; - 1 < --t;)(i = r[t]) && (i.up ? i.c.call(i.s || n, {
                                    type: e,
                                    target: n
                                }) : i.c.call(i.s || n))
                        };
                        var C = e.requestAnimationFrame,
                            A = e.cancelAnimationFrame,
                            k = Date.now || function() {
                                return (new Date).getTime()
                            },
                            P = k();
                        for (l = (o = ["ms", "moz", "webkit", "o"]).length; - 1 < --l && !C;) C = e[o[l] + "RequestAnimationFrame"], A = e[o[l] + "CancelAnimationFrame"] || e[o[l] + "CancelRequestAnimationFrame"];
                        b("Ticker", function(e, t) {
                            var i, r, s, o, l, u = this,
                                f = k(),
                                h = !(!1 === t || !C) && "auto",
                                p = 500,
                                g = 33,
                                m = function(e) {
                                    var t, n, a = k() - P;
                                    p < a && (f += a - g), P += a, u.time = (P - f) / 1e3, t = u.time - l, (!i || 0 < t || !0 === e) && (u.frame++, l += t + (o <= t ? .004 : o - t), n = !0), !0 !== e && (s = r(m)), n && u.dispatchEvent("tick")
                                };
                            E.call(u), u.time = u.frame = 0, u.tick = function() {
                                m(!0)
                            }, u.lagSmoothing = function(e, t) {
                                if (!arguments.length) return p < 1e8;
                                p = e || 1e8, g = Math.min(t, p, 0)
                            }, u.sleep = function() {
                                null != s && (h && A ? A(s) : clearTimeout(s), r = a, s = null, u === c && (d = !1))
                            }, u.wake = function(e) {
                                null !== s ? u.sleep() : e ? f += -P + (P = k()) : 10 < u.frame && (P = k() - p + 5), r = 0 === i ? a : h && C ? C : function(e) {
                                    return setTimeout(e, 1e3 * (l - u.time) + 1 | 0)
                                }, u === c && (d = !0), m(2)
                            }, u.fps = function(e) {
                                if (!arguments.length) return i;
                                o = 1 / ((i = e) || 60), l = this.time + o, u.wake()
                            }, u.useRAF = function(e) {
                                if (!arguments.length) return h;
                                u.sleep(), h = e, u.fps(i)
                            }, u.fps(e), setTimeout(function() {
                                "auto" === h && u.frame < 5 && "hidden" !== (n || {}).visibilityState && u.useRAF(!1)
                            }, 1500)
                        }), (u = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
                        var F = b("core.Animation", function(e, t) {
                            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !!t.immediateRender, this.data = t.data, this._reversed = !!t.reversed, J) {
                                d || c.wake();
                                var n = this.vars.useFrames ? W : J;
                                n.add(this, n._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        c = F.ticker = new p.Ticker, (u = F.prototype)._dirty = u._gc = u._initted = u._paused = !1, u._totalTime = u._time = 0, u._rawPrevTime = -1, u._next = u._last = u._onUpdate = u._timeline = u.timeline = null, u._paused = !1;
                        var R = function() {
                            d && 2e3 < k() - P && ("hidden" !== (n || {}).visibilityState || !c.lagSmoothing()) && c.wake();
                            var e = setTimeout(R, 2e3);
                            e.unref && e.unref()
                        };
                        R(), u.play = function(e, t) {
                            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                        }, u.pause = function(e, t) {
                            return null != e && this.seek(e, t), this.paused(!0)
                        }, u.resume = function(e, t) {
                            return null != e && this.seek(e, t), this.paused(!1)
                        }, u.seek = function(e, t) {
                            return this.totalTime(Number(e), !1 !== t)
                        }, u.restart = function(e, t) {
                            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                        }, u.reverse = function(e, t) {
                            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                        }, u.render = function(e, t, n) {}, u.invalidate = function() {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                        }, u.isActive = function() {
                            var e, t = this._timeline,
                                n = this._startTime;
                            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - g
                        }, u._enabled = function(e, t) {
                            return d || c.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                        }, u._kill = function(e, t) {
                            return this._enabled(!1, !1)
                        }, u.kill = function(e, t) {
                            return this._kill(e, t), this
                        }, u._uncache = function(e) {
                            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                            return this
                        }, u._swapSelfInParams = function(e) {
                            for (var t = e.length, n = e.concat(); - 1 < --t;) "{self}" === e[t] && (n[t] = this);
                            return n
                        }, u._callback = function(e) {
                            var t = this.vars,
                                n = t[e],
                                i = t[e + "Params"],
                                r = t[e + "Scope"] || t.callbackScope || this;
                            switch (i ? i.length : 0) {
                                case 0:
                                    n.call(r);
                                    break;
                                case 1:
                                    n.call(r, i[0]);
                                    break;
                                case 2:
                                    n.call(r, i[0], i[1]);
                                    break;
                                default:
                                    n.apply(r, i)
                            }
                        }, u.eventCallback = function(e, t, n, i) {
                            if ("on" === (e || "").substr(0, 2)) {
                                var r = this.vars;
                                if (1 === arguments.length) return r[e];
                                null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = m(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
                            }
                            return this
                        }, u.delay = function(e) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                        }, u.duration = function(e) {
                            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, u.totalDuration = function(e) {
                            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                        }, u.time = function(e, t) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                        }, u.totalTime = function(e, t, n) {
                            if (d || c.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (e < 0 && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var i = this._totalDuration,
                                        r = this._timeline;
                                    if (i < e && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                                }
                                this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (L.length && Q(), this.render(e, t, !1), L.length && Q())
                            }
                            return this
                        }, u.progress = u.totalProgress = function(e, t) {
                            var n = this.duration();
                            return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
                        }, u.startTime = function(e) {
                            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                        }, u.endTime = function(e) {
                            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                        }, u.timeScale = function(e) {
                            if (!arguments.length) return this._timeScale;
                            var t, n;
                            for (e = e || g, this._timeline && this._timeline.smoothChildTiming && (n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / e), this._timeScale = e, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
                            return this
                        }, u.reversed = function(e) {
                            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, u.paused = function(e) {
                            if (!arguments.length) return this._paused;
                            var t, n, i = this._timeline;
                            return e != this._paused && i && (d || e || c.wake(), n = (t = i.rawTime()) - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 != n && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                        };
                        var I = b("core.SimpleTimeline", function(e) {
                            F.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });

                        function D(t) {
                            return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                        }(u = I.prototype = new F).constructor = I, u.kill()._gc = !1, u._first = u._last = u._recent = null, u._sortChildren = !1, u.add = u.insert = function(e, t, n, i) {
                            var r, s;
                            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                                for (s = e._startTime; r && r._startTime > s;) r = r._prev;
                            return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
                        }, u._remove = function(e, t) {
                            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, u.render = function(e, t, n) {
                            var i, r = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
                        }, u.rawTime = function() {
                            return d || c.wake(), this._totalTime
                        };
                        var O = b("TweenLite", function(t, n, i) {
                            if (F.call(this, n, i), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                            var r, a, o, l = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                                u = this.vars.overwrite;
                            if (this._overwrite = u = null == u ? Y[O.defaultOverwrite] : "number" == typeof u ? u >> 0 : Y[u], (l || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                                for (this._targets = o = s(t), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(a = o[r]) ? "string" != typeof a ? a.length && a !== e && a[0] && (a[0] === e || a[0].nodeType && a[0].style && !a.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(s(a))) : (this._siblings[r] = ee(a, this, !1), 1 === u && 1 < this._siblings[r].length && te(a, this, null, 1, this._siblings[r])) : "string" == typeof(a = o[r--] = O.selector(a)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = ee(t, this, !1), 1 === u && 1 < this._siblings.length && te(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === n && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -g, this.render(Math.min(0, -this._delay)))
                        }, !0);

                        function M(e) {
                            for (var t, n = this._firstPT; n;) t = n.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m.call(this._tween, t, this._target || n.t, this._tween) : t < 1e-6 && -1e-6 < t && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
                        }

                        function B(e) {
                            return (1e3 * e | 0) / 1e3 + ""
                        }

                        function G(e, t, n, i) {
                            var r, s, a, o, l, u, c, d = [],
                                f = 0,
                                h = "",
                                p = 0;
                            for (d.start = e, d.end = t, e = d[0] = e + "", t = d[1] = t + "", n && (n(d), e = d[0], t = d[1]), d.length = 0, r = e.match(z) || [], s = t.match(z) || [], i && (i._next = null, i.blob = 1, d._firstPT = d._applyPT = i), l = s.length, o = 0; o < l; o++) c = s[o], h += (u = t.substr(f, t.indexOf(c, f) - f)) || !o ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === r[o] || r.length <= o ? h += c : (h && (d.push(h), h = ""), a = parseFloat(r[o]), d.push(a), d._firstPT = {
                                _next: d._firstPT,
                                t: d,
                                p: d.length - 1,
                                s: a,
                                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                f: 0,
                                m: p && p < 4 ? Math.round : B
                            }), f += c.length;
                            return (h += t.substr(f)) && d.push(h), d.setRatio = M, U.test(t) && (d.end = null), d
                        }

                        function N(e, t, n, i, r, s, a, o, l) {
                            "function" == typeof i && (i = i(l || 0, e));
                            var u = typeof e[t],
                                c = "function" != u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                                d = "get" !== n ? n : c ? a ? e[c](a) : e[c]() : e[t],
                                f = "string" == typeof i && "=" === i.charAt(1),
                                h = {
                                    t: e,
                                    p: t,
                                    s: d,
                                    f: "function" == u,
                                    pg: 0,
                                    n: r || t,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - d || 0
                                };
                            if ("number" == typeof d && ("number" == typeof i || f) || (a || isNaN(d) || !f && isNaN(i) || "boolean" == typeof d || "boolean" == typeof i ? (h.fp = a, h = {
                                    t: G(d, f ? parseFloat(h.s) + h.c + (h.s + "").replace(/[0-9\-\.]/g, "") : i, o || O.defaultStringFilter, h),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || t,
                                    pr: 0,
                                    m: 0
                                }) : (h.s = parseFloat(d), f || (h.c = parseFloat(i) - h.s || 0))), h.c) return (h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h
                        }(u = O.prototype = new F).constructor = O, u.kill()._gc = !1, u.ratio = 0, u._firstPT = u._targets = u._overwrittenProps = u._startAt = null, u._notifyPluginsOfEnabled = u._lazy = !1, O.version = "2.1.3", O.defaultEase = u._ease = new S(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = c, O.autoSleep = 120, O.lagSmoothing = function(e, t) {
                            c.lagSmoothing(e, t)
                        }, O.selector = e.$ || e.jQuery || function(t) {
                            var i = e.$ || e.jQuery;
                            return i ? (O.selector = i)(t) : (n = n || e.document) ? n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
                        };
                        var L = [],
                            V = {},
                            z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            U = /[\+-]=-?[\.\d]/,
                            q = O._internals = {
                                isArray: m,
                                isSelector: D,
                                lazyTweens: L,
                                blobDif: G
                            },
                            j = O._plugins = {},
                            K = q.tweenLookup = {},
                            H = 0,
                            X = q.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1,
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1,
                                id: 1,
                                yoyoEase: 1,
                                stagger: 1
                            },
                            Y = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                            },
                            W = F._rootFramesTimeline = new I,
                            J = F._rootTimeline = new I,
                            $ = 30,
                            Q = q.lazyRender = function() {
                                var e, t, n = L.length;
                                for (V = {}, e = 0; e < n; e++)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                                L.length = 0
                            };

                        function Z(e, t, n, i) {
                            var r, s, a = e.vars.onOverwrite;
                            return a && (r = a(e, t, n, i)), (a = O.onOverwrite) && (s = a(e, t, n, i)), !1 !== r && !1 !== s
                        }
                        J._startTime = c.time, W._startTime = c.frame, J._active = W._active = !0, setTimeout(Q, 1), F._updateRoot = O.render = function() {
                            var e, t, n;
                            if (L.length && Q(), J.render((c.time - J._startTime) * J._timeScale, !1, !1), W.render((c.frame - W._startTime) * W._timeScale, !1, !1), L.length && Q(), c.frame >= $) {
                                for (n in $ = c.frame + (parseInt(O.autoSleep, 10) || 120), K) {
                                    for (e = (t = K[n].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                                    0 === t.length && delete K[n]
                                }
                                if ((!(n = J._first) || n._paused) && O.autoSleep && !W._first && 1 === c._listeners.tick.length) {
                                    for (; n && n._paused;) n = n._next;
                                    n || c.sleep()
                                }
                            }
                        }, c.addEventListener("tick", F._updateRoot);
                        var ee = function(e, t, n) {
                                var i, r, s = e._gsTweenID;
                                if (K[s || (e._gsTweenID = s = "t" + H++)] || (K[s] = {
                                        target: e,
                                        tweens: []
                                    }), t && ((i = K[s].tweens)[r = i.length] = t, n))
                                    for (; - 1 < --r;) i[r] === t && i.splice(r, 1);
                                return K[s].tweens
                            },
                            te = function(e, t, n, i, r) {
                                var s, a, o, l;
                                if (1 === i || 4 <= i) {
                                    for (l = r.length, s = 0; s < l; s++)
                                        if ((o = r[s]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
                                        else if (5 === i) break;
                                    return a
                                }
                                var u, c = t._startTime + g,
                                    d = [],
                                    f = 0,
                                    h = 0 === t._duration;
                                for (s = r.length; - 1 < --s;)(o = r[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (u = u || ne(t, 0, h), 0 === ne(o, u, h) && (d[f++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((h || !o._initted) && c - o._startTime <= 2 * g || (d[f++] = o)));
                                for (s = f; - 1 < --s;)
                                    if (l = (o = d[s])._firstPT, 2 === i && o._kill(n, e, t) && (a = !0), 2 !== i || !o._firstPT && o._initted && l) {
                                        if (2 !== i && !Z(o, t)) continue;
                                        o._enabled(!1, !1) && (a = !0)
                                    }
                                return a
                            },
                            ne = function(e, t, n) {
                                for (var i = e._timeline, r = i._timeScale, s = e._startTime; i._timeline;) {
                                    if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
                                    i = i._timeline
                                }
                                return t < (s /= r) ? s - t : n && s === t || !e._initted && s - t < 2 * g ? g : (s += e.totalDuration() / e._timeScale / r) > t + g ? 0 : s - t - g
                            };
                        u._init = function() {
                            var e, t, n, i, r, s, a = this.vars,
                                o = this._overwrittenProps,
                                l = this._duration,
                                u = !!a.immediateRender,
                                c = a.ease,
                                d = this._startAt;
                            if (a.startAt) {
                                for (i in d && (d.render(-1, !0), d.kill()), r = {}, a.startAt) r[i] = a.startAt[i];
                                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = O.to(this.target || {}, 0, r), u)
                                    if (0 < this._time) this._startAt = null;
                                    else if (0 !== l) return
                            } else if (a.runBackwards && 0 !== l)
                                if (d) d.render(-1, !0), d.kill(), this._startAt = null;
                                else {
                                    for (i in 0 !== this._time && (u = !1), n = {}, a) X[i] && "autoCSS" !== i || (n[i] = a[i]);
                                    if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== a.lazy, n.immediateRender = u, this._startAt = O.to(this.target, 0, n), u) {
                                        if (0 === this._time) return
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                }
                            if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, a.easeParams) : T[c] || O.defaultEase : O.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (s = this._targets.length, e = 0; e < s; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e) && (t = !0);
                            else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                            if (t && O._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                            this._onUpdate = a.onUpdate, this._initted = !0
                        }, u._initProps = function(t, n, i, r, s) {
                            var a, o, l, u, c, d;
                            if (null == t) return !1;
                            for (a in V[t._gsTweenID] && Q(), this.vars.css || t.style && t !== e && t.nodeType && j.css && !1 !== this.vars.autoCSS && function(e, t) {
                                    var n, i = {};
                                    for (n in e) X[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!j[n] || j[n] && j[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                                    e.css = i
                                }(this.vars, t), this.vars)
                                if (d = this.vars[a], X[a]) d && (d instanceof Array || d.push && m(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[a] = d = this._swapSelfInParams(d, this));
                                else if (j[a] && (u = new j[a])._onInitTween(t, this.vars[a], this, s)) {
                                for (this._firstPT = c = {
                                        _next: this._firstPT,
                                        t: u,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: a,
                                        pg: 1,
                                        pr: u._priority,
                                        m: 0
                                    }, o = u._overwriteProps.length; - 1 < --o;) n[u._overwriteProps[o]] = this._firstPT;
                                (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                            } else n[a] = N.call(this, t, a, "get", d, a, 0, null, this.vars.stringFilter, s);
                            return r && this._kill(r, t) ? this._initProps(t, n, i, r, s) : 1 < this._overwrite && this._firstPT && 1 < i.length && te(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (V[t._gsTweenID] = !0), l)
                        }, u.render = function(e, t, n) {
                            var i, r, s, a, o = this,
                                l = o._time,
                                u = o._duration,
                                c = o._rawPrevTime;
                            if (u - g <= e && 0 <= e) o._totalTime = o._time = u, o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1, o._reversed || (i = !0, r = "onComplete", n = n || o._timeline.autoRemoveChildren), 0 === u && (!o._initted && o.vars.lazy && !n || (o._startTime === o._timeline._duration && (e = 0), (c < 0 || e <= 0 && -g <= e || c === g && "isPause" !== o.data) && c !== e && (n = !0, g < c && (r = "onReverseComplete")), o._rawPrevTime = a = !t || e || c === e ? e : g));
                            else if (e < g) o._totalTime = o._time = 0, o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0, (0 !== l || 0 === u && 0 < c) && (r = "onReverseComplete", i = o._reversed), -g < e ? e = 0 : e < 0 && (o._active = !1, 0 === u && (!o._initted && o.vars.lazy && !n || (0 <= c && (c !== g || "isPause" !== o.data) && (n = !0), o._rawPrevTime = a = !t || e || c === e ? e : g))), (!o._initted || o._startAt && o._startAt.progress()) && (n = !0);
                            else if (o._totalTime = o._time = e, o._easeType) {
                                var d = e / u,
                                    f = o._easeType,
                                    h = o._easePower;
                                (1 === f || 3 === f && .5 <= d) && (d = 1 - d), 3 === f && (d *= 2), 1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d), o.ratio = 1 === f ? 1 - d : 2 === f ? d : e / u < .5 ? d / 2 : 1 - d / 2
                            } else o.ratio = o._ease.getRatio(e / u);
                            if (o._time !== l || n) {
                                if (!o._initted) {
                                    if (o._init(), !o._initted || o._gc) return;
                                    if (!n && o._firstPT && (!1 !== o.vars.lazy && o._duration || o.vars.lazy && !o._duration)) return o._time = o._totalTime = l, o._rawPrevTime = c, L.push(o), void(o._lazy = [e, t]);
                                    o._time && !i ? o.ratio = o._ease.getRatio(o._time / u) : i && o._ease._calcEnd && (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1))
                                }
                                for (!1 !== o._lazy && (o._lazy = !1), o._active || !o._paused && o._time !== l && 0 <= e && (o._active = !0), 0 === l && (o._startAt && (0 <= e ? o._startAt.render(e, !0, n) : r = r || "_dummyGS"), o.vars.onStart && (0 === o._time && 0 !== u || t || o._callback("onStart"))), s = o._firstPT; s;) s.f ? s.t[s.p](s.c * o.ratio + s.s) : s.t[s.p] = s.c * o.ratio + s.s, s = s._next;
                                o._onUpdate && (e < 0 && o._startAt && -1e-4 !== e && o._startAt.render(e, !0, n), t || (o._time !== l || i || n) && o._callback("onUpdate")), r && (o._gc && !n || (e < 0 && o._startAt && !o._onUpdate && -1e-4 !== e && o._startAt.render(e, !0, n), i && (o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !t && o.vars[r] && o._callback(r), 0 === u && o._rawPrevTime === g && a !== g && (o._rawPrevTime = 0)))
                            }
                        }, u._kill = function(e, t, n) {
                            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
                            var i, r, s, a, o, l, u, c, d, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                                h = this._firstPT;
                            if ((m(t) || D(t)) && "number" != typeof t[0])
                                for (i = t.length; - 1 < --i;) this._kill(e, t[i], n) && (l = !0);
                            else {
                                if (this._targets) {
                                    for (i = this._targets.length; - 1 < --i;)
                                        if (t === this._targets[i]) {
                                            o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (t !== this.target) return !1;
                                    o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                                }
                                if (o) {
                                    if (u = e || o, c = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill), n && (O.onOverwrite || this.vars.onOverwrite)) {
                                        for (s in u) o[s] && (d = d || []).push(s);
                                        if ((d || !e) && !Z(this, n, t, d)) return !1
                                    }
                                    for (s in u)(a = o[s]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (r[s] = 1);
                                    !this._firstPT && this._initted && h && this._enabled(!1, !1)
                                }
                            }
                            return l
                        }, u.invalidate = function() {
                            this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this);
                            var e = this._time;
                            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], F.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -g, this.render(e, !1, !1 !== this.vars.lazy)), this
                        }, u._enabled = function(e, t) {
                            if (d || c.wake(), e && this._gc) {
                                var n, i = this._targets;
                                if (i)
                                    for (n = i.length; - 1 < --n;) this._siblings[n] = ee(i[n], this, !0);
                                else this._siblings = ee(this.target, this, !0)
                            }
                            return F.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                        }, O.to = function(e, t, n) {
                            return new O(e, t, n)
                        }, O.from = function(e, t, n) {
                            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
                        }, O.fromTo = function(e, t, n, i) {
                            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new O(e, t, i)
                        }, O.delayedCall = function(e, t, n, i, r) {
                            return new O(t, 0, {
                                delay: e,
                                onComplete: t,
                                onCompleteParams: n,
                                callbackScope: i,
                                onReverseComplete: t,
                                onReverseCompleteParams: n,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, O.set = function(e, t) {
                            return new O(e, 0, t)
                        }, O.getTweensOf = function(e, t) {
                            if (null == e) return [];
                            var n, i, r, s;
                            if (e = "string" != typeof e ? e : O.selector(e) || e, (m(e) || D(e)) && "number" != typeof e[0]) {
                                for (n = e.length, i = []; - 1 < --n;) i = i.concat(O.getTweensOf(e[n], t));
                                for (n = i.length; - 1 < --n;)
                                    for (s = i[n], r = n; - 1 < --r;) s === i[r] && i.splice(n, 1)
                            } else if (e._gsTweenID)
                                for (n = (i = ee(e).concat()).length; - 1 < --n;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                            return i || []
                        }, O.killTweensOf = O.killDelayedCallsTo = function(e, t, n) {
                            "object" == typeof t && (n = t, t = !1);
                            for (var i = O.getTweensOf(e, t), r = i.length; - 1 < --r;) i[r]._kill(n, e)
                        };
                        var ie = b("plugins.TweenPlugin", function(e, t) {
                            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ie.prototype
                        }, !0);
                        if (u = ie.prototype, ie.version = "1.19.0", ie.API = 2, u._firstPT = null, u._addTween = N, u.setRatio = M, u._kill = function(e) {
                                var t, n = this._overwriteProps,
                                    i = this._firstPT;
                                if (null != e[this._propName]) this._overwriteProps = [];
                                else
                                    for (t = n.length; - 1 < --t;) null != e[n[t]] && n.splice(t, 1);
                                for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                                return !1
                            }, u._mod = u._roundProps = function(e) {
                                for (var t, n = this._firstPT; n;)(t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
                            }, O._onPluginEvent = function(e, t) {
                                var n, i, r, s, a, o = t._firstPT;
                                if ("_onInitAllProps" === e) {
                                    for (; o;) {
                                        for (a = o._next, i = r; i && i.pr > o.pr;) i = i._next;
                                        (o._prev = i ? i._prev : s) ? o._prev._next = o: r = o, (o._next = i) ? i._prev = o : s = o, o = a
                                    }
                                    o = t._firstPT = r
                                }
                                for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (n = !0), o = o._next;
                                return n
                            }, ie.activate = function(e) {
                                for (var t = e.length; - 1 < --t;) e[t].API === ie.API && (j[(new e[t])._propName] = e[t]);
                                return !0
                            }, y.plugin = function(e) {
                                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                                var t, n = e.propName,
                                    i = e.priority || 0,
                                    r = e.overwriteProps,
                                    s = {
                                        init: "_onInitTween",
                                        set: "setRatio",
                                        kill: "_kill",
                                        round: "_mod",
                                        mod: "_mod",
                                        initAll: "_onInitAllProps"
                                    },
                                    a = b("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                                        ie.call(this, n, i), this._overwriteProps = r || []
                                    }, !0 === e.global),
                                    o = a.prototype = new ie(n);
                                for (t in (o.constructor = a).API = e.API, s) "function" == typeof e[t] && (o[s[t]] = e[t]);
                                return a.version = e.version, ie.activate([a]), a
                            }, o = e._gsQueue) {
                            for (l = 0; l < o.length; l++) o[l]();
                            for (u in v) v[u].func || e.console.log("GSAP encountered missing dependency: " + u)
                        }
                        return d = !1, O
                    }(r),
                    a = r.GreenSockGlobals,
                    o = a.com.greensock,
                    l = o.core.SimpleTimeline,
                    u = o.core.Animation,
                    c = a.Ease,
                    d = a.Linear,
                    f = d,
                    h = a.Power1,
                    p = a.Power2,
                    g = a.Power3,
                    m = a.Power4,
                    v = a.TweenPlugin;
                o.events.EventDispatcher
            }).call(this, n(20)(e), n(21))
        },
        20: function(e, t) {
            e.exports = function(e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return t.l
                        }
                    }), Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function() {
                            return t.i
                        }
                    }), Object.defineProperty(t, "exports", {
                        enumerable: !0
                    }), t.webpackPolyfill = 1
                }
                return t
            }
        },
        21: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        37: function(e, t, n) {
            window.eve = n(38);
            var i, r, s, a, o, l, u, c, d, f, h = (i = "undefined" == typeof eve ? function() {} : eve, s = {}, a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return setTimeout(e, 16, (new Date).getTime()), !0
            }, o = Array.isArray || function(e) {
                return e instanceof Array || "[object Array]" == Object.prototype.toString.call(e)
            }, l = 0, u = "M" + (+new Date).toString(36), c = Date.now || function() {
                return +new Date
            }, d = function(e) {
                if (e) {
                    var t = 0;
                    for (var n in s)
                        if (s.hasOwnProperty(n)) {
                            var o = s[n],
                                l = o.get();
                            t++, o.s = (l - o.b) / (o.dur / o.spd), 1 <= o.s && (delete s[n], o.s = 1, t--, function(e) {
                                setTimeout(function() {
                                    i("mina.finish." + e.id, e)
                                })
                            }(o)), o.update()
                        }
                    r = !!t && a(d)
                } else r = r || a(d)
            }, (f = function(e, t, n, i, r, a, o) {
                var c = {
                    id: u + (l++).toString(36),
                    start: e,
                    end: t,
                    b: n,
                    s: 0,
                    dur: i - n,
                    spd: 1,
                    get: r,
                    set: a,
                    easing: o || f.linear,
                    status: p,
                    speed: m,
                    duration: v,
                    stop: _,
                    pause: y,
                    resume: b,
                    update: x
                };
                s[c.id] = c;
                var h, g = 0;
                for (h in s)
                    if (s.hasOwnProperty(h) && 2 == ++g) break;
                return 1 == g && d(), c
            }).time = c, f.getById = function(e) {
                return s[e] || null
            }, f.linear = function(e) {
                return e
            }, f.easeout = function(e) {
                return Math.pow(e, 1.7)
            }, f.easein = function(e) {
                return Math.pow(e, .48)
            }, f.easeinout = function(e) {
                if (1 == e) return 1;
                if (0 == e) return 0;
                var t = .48 - e / 1.04,
                    n = Math.sqrt(.1734 + t * t),
                    i = n - t,
                    r = -n - t,
                    s = Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + .5;
                return 3 * (1 - s) * s * s + s * s * s
            }, f.backin = function(e) {
                return 1 == e ? 1 : e * e * (2.70158 * e - 1.70158)
            }, f.backout = function(e) {
                return 0 == e ? 0 : (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }, f.elastic = function(e) {
                return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - .075) * (2 * Math.PI) / .3) + 1
            }, f.bounce = function(e) {
                var t = 7.5625,
                    n = 2.75;
                return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
            }, window.mina = f);

            function p(e) {
                var t = this;
                if (null == e) return t.s;
                var n = t.s - e;
                t.b += t.dur * n, t.B += t.dur * n, t.s = e
            }

            function m(e) {
                if (null == e) return this.spd;
                this.spd = e
            }

            function v(e) {
                var t = this;
                if (null == e) return t.dur;
                t.s = t.s * e / t.dur, t.dur = e
            }

            function _() {
                delete s[this.id], this.update(), i("mina.stop." + this.id, this)
            }

            function y() {
                var e = this;
                e.pdif || (delete s[e.id], e.update(), e.pdif = e.get() - e.b)
            }

            function b() {
                var e = this;
                e.pdif && (e.b = e.get() - e.pdif, delete e.pdif, s[e.id] = e, d())
            }

            function x() {
                var e, t = this;
                if (o(t.start)) {
                    e = [];
                    for (var n = 0, i = t.start.length; n < i; n++) e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s)
                } else e = +t.start + (t.end - t.start) * t.easing(t.s);
                t.set(e)
            }
            var S = function(e) {
                function t(e, i) {
                    if (e) {
                        if (e.nodeType) return K(e);
                        if (P(e, "array") && t.set) return t.set.apply(t, e);
                        if (e instanceof z) return e;
                        if (null == i) try {
                            return K(e = n.doc.querySelector(String(e)))
                        } catch (e) {
                            return null
                        }
                    }
                    return new j(e = null == e ? "100%" : e, i = null == i ? "100%" : i)
                }
                t.version = "0.5.1", t.toString = function() {
                    return "Snap v" + this.version
                }, t._ = {};
                var n = {
                    win: e.window,
                    doc: e.window.document
                };
                t._.glob = n;
                var i, r, s = "hasOwnProperty",
                    a = String,
                    o = parseFloat,
                    l = parseInt,
                    u = Math,
                    c = u.max,
                    d = u.min,
                    f = u.abs,
                    h = (u.pow, u.PI),
                    p = (u.round, Object.prototype.toString),
                    m = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    v = (t._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    _ = {
                        hs: 1,
                        rg: 1
                    },
                    y = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    b = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    x = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                    S = 0,
                    T = "S" + (+new Date).toString(36),
                    w = function(e) {
                        return (e && e.type ? e.type : "") + T + (S++).toString(36)
                    },
                    E = "http://www.w3.org/1999/xlink",
                    C = "http://www.w3.org/2000/svg",
                    A = {};

                function k(e, t) {
                    if (t) {
                        if ("#text" == e && (e = n.doc.createTextNode(t.text || t["#text"] || "")), "#comment" == e && (e = n.doc.createComment(t.text || t["#text"] || "")), "string" == typeof e && (e = k(e)), "string" == typeof t) return 1 == e.nodeType ? "xlink:" == t.substring(0, 6) ? e.getAttributeNS(E, t.substring(6)) : "xml:" == t.substring(0, 4) ? e.getAttributeNS(C, t.substring(4)) : e.getAttribute(t) : "text" == t ? e.nodeValue : null;
                        if (1 == e.nodeType) {
                            for (var i in t)
                                if (t[s](i)) {
                                    var r = a(t[i]);
                                    r ? "xlink:" == i.substring(0, 6) ? e.setAttributeNS(E, i.substring(6), r) : "xml:" == i.substring(0, 4) ? e.setAttributeNS(C, i.substring(4), r) : e.setAttribute(i, r) : e.removeAttribute(i)
                                }
                        } else "text" in t && (e.nodeValue = t.text)
                    } else e = n.doc.createElementNS(C, e);
                    return e
                }

                function P(e, t) {
                    return "finite" == (t = a.prototype.toLowerCase.call(t)) ? isFinite(e) : !("array" != t || !(e instanceof Array || Array.isArray && Array.isArray(e))) || "null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || p.call(e).slice(8, -1).toLowerCase() == t
                }

                function F(e, t, n) {
                    return function i() {
                        var r = Array.prototype.slice.call(arguments, 0),
                            a = r.join("␀"),
                            o = i.cache = i.cache || {},
                            l = i.count = i.count || [];
                        return o[s](a) ? function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t) return e.push(e.splice(n, 1)[0])
                        }(l, a) : (1e3 <= l.length && delete o[l.shift()], l.push(a), o[a] = e.apply(t, r)), n ? n(o[a]) : o[a]
                    }
                }

                function R(e) {
                    return e % 360 * h / 180
                }

                function I() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                }

                function D() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                }

                function O(e, n, i) {
                    if (null == n && P(e, "object") && "r" in e && "g" in e && "b" in e && (i = e.b, n = e.g, e = e.r), null == n && P(e, string)) {
                        var r = t.getRGB(e);
                        e = r.r, n = r.g, i = r.b
                    }
                    return (1 < e || 1 < n || 1 < i) && (e /= 255, n /= 255, i /= 255), [e, n, i]
                }

                function M(e, n, i, r) {
                    var s = {
                        r: e = u.round(255 * e),
                        g: n = u.round(255 * n),
                        b: i = u.round(255 * i),
                        opacity: P(r, "finite") ? r : 1,
                        hex: t.rgb(e, n, i),
                        toString: G
                    };
                    return P(r, "finite") && (s.opacity = r), s
                }
                t.url = function(e) {
                    return "url('#" + e + "')"
                }, t._.$ = k, t._.id = w, t.format = (i = /\{([^\}]+)\}/g, r = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(e, t) {
                    return a(e).replace(i, function(e, n) {
                        return function(e, t, n) {
                            var i = n;
                            return t.replace(r, function(e, t, n, r, s) {
                                t = t || r, i && (t in i && (i = i[t]), "function" == typeof i && s && (i = i()))
                            }), i = (null == i || i == n ? e : i) + ""
                        }(e, n, t)
                    })
                }), t._.clone = function e(t) {
                    if ("function" == typeof t || Object(t) !== t) return t;
                    var n = new t.constructor;
                    for (var i in t) t[s](i) && (n[i] = e(t[i]));
                    return n
                }, t._.cacher = F, t.rad = R, t.deg = function(e) {
                    return 180 * e / h % 360
                }, t.sin = function(e) {
                    return u.sin(t.rad(e))
                }, t.tan = function(e) {
                    return u.tan(t.rad(e))
                }, t.cos = function(e) {
                    return u.cos(t.rad(e))
                }, t.asin = function(e) {
                    return t.deg(u.asin(e))
                }, t.acos = function(e) {
                    return t.deg(u.acos(e))
                }, t.atan = function(e) {
                    return t.deg(u.atan(e))
                }, t.atan2 = function(e) {
                    return t.deg(u.atan2(e))
                }, t.angle = function e(t, n, i, r, s, a) {
                    if (null != s) return e(t, n, s, a) - e(i, r, s, a);
                    var o = t - i,
                        l = n - r;
                    return o || l ? (180 + 180 * u.atan2(-l, -o) / h + 360) % 360 : 0
                }, t.len = function(e, n, i, r) {
                    return Math.sqrt(t.len2(e, n, i, r))
                }, t.len2 = function(e, t, n, i) {
                    return (e - n) * (e - n) + (t - i) * (t - i)
                }, t.closestPoint = function(e, t, n) {
                    function i(e) {
                        var i = e.x - t,
                            r = e.y - n;
                        return i * i + r * r
                    }
                    for (var r, s, a, o, l = e.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, d = 1 / 0, f = 0; f <= u; f += c)(o = i(a = l.getPointAtLength(f))) < d && (r = a, s = f, d = o);
                    for (c *= .5; .5 < c;) {
                        var h, p, g, m, v, _;
                        0 <= (g = s - c) && (v = i(h = l.getPointAtLength(g))) < d ? (r = h, s = g, d = v) : (m = s + c) <= u && (_ = i(p = l.getPointAtLength(m))) < d ? (r = p, s = m, d = _) : c *= .5
                    }
                    return {
                        x: r.x,
                        y: r.y,
                        length: s,
                        distance: Math.sqrt(d)
                    }
                }, t.is = P, t.snapTo = function(e, t, n) {
                    if (n = P(n, "finite") ? n : 10, P(e, "array")) {
                        for (var i = e.length; i--;)
                            if (f(e[i] - t) <= n) return e[i]
                    } else {
                        var r = t % (e = +e);
                        if (r < n) return t - r;
                        if (e - n < r) return t - r + e
                    }
                    return t
                }, t.getRGB = F(function(e) {
                    if (!e || (e = a(e)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: G
                    };
                    if ("none" == e) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: G
                    };
                    if (_[s](e.toLowerCase().substring(0, 2)) || "#" == e.charAt() || (e = B(e)), !e) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: G
                    };
                    var n, i, r, f, h, p, g = e.match(m);
                    return g ? (g[2] && (r = l(g[2].substring(5), 16), i = l(g[2].substring(3, 5), 16), n = l(g[2].substring(1, 3), 16)), g[3] && (r = l((h = g[3].charAt(3)) + h, 16), i = l((h = g[3].charAt(2)) + h, 16), n = l((h = g[3].charAt(1)) + h, 16)), g[4] && (p = g[4].split(v), n = o(p[0]), "%" == p[0].slice(-1) && (n *= 2.55), i = o(p[1]), "%" == p[1].slice(-1) && (i *= 2.55), r = o(p[2]), "%" == p[2].slice(-1) && (r *= 2.55), "rgba" == g[1].toLowerCase().slice(0, 4) && (f = o(p[3])), p[3] && "%" == p[3].slice(-1) && (f /= 100)), g[5] ? (p = g[5].split(v), n = o(p[0]), "%" == p[0].slice(-1) && (n /= 100), i = o(p[1]), "%" == p[1].slice(-1) && (i /= 100), r = o(p[2]), "%" == p[2].slice(-1) && (r /= 100), "deg" != p[0].slice(-3) && "°" != p[0].slice(-1) || (n /= 360), "hsba" == g[1].toLowerCase().slice(0, 4) && (f = o(p[3])), p[3] && "%" == p[3].slice(-1) && (f /= 100), t.hsb2rgb(n, i, r, f)) : g[6] ? (p = g[6].split(v), n = o(p[0]), "%" == p[0].slice(-1) && (n /= 100), i = o(p[1]), "%" == p[1].slice(-1) && (i /= 100), r = o(p[2]), "%" == p[2].slice(-1) && (r /= 100), "deg" != p[0].slice(-3) && "°" != p[0].slice(-1) || (n /= 360), "hsla" == g[1].toLowerCase().slice(0, 4) && (f = o(p[3])), p[3] && "%" == p[3].slice(-1) && (f /= 100), t.hsl2rgb(n, i, r, f)) : (n = d(u.round(n), 255), i = d(u.round(i), 255), r = d(u.round(r), 255), f = d(c(f, 0), 1), (g = {
                        r: n,
                        g: i,
                        b: r,
                        toString: G
                    }).hex = "#" + (16777216 | r | i << 8 | n << 16).toString(16).slice(1), g.opacity = P(f, "finite") ? f : 1, g)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: G
                    }
                }, t), t.hsb = F(function(e, n, i) {
                    return t.hsb2rgb(e, n, i).hex
                }), t.hsl = F(function(e, n, i) {
                    return t.hsl2rgb(e, n, i).hex
                }), t.rgb = F(function(e, t, n, i) {
                    if (P(i, "finite")) {
                        var r = u.round;
                        return "rgba(" + [r(e), r(t), r(n), +i.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
                });
                var B = function(e) {
                        var t = n.doc.getElementsByTagName("head")[0] || n.doc.getElementsByTagName("svg")[0],
                            i = "rgb(255, 0, 0)";
                        return (B = F(function(e) {
                            if ("red" == e.toLowerCase()) return i;
                            t.style.color = i, t.style.color = e;
                            var r = n.doc.defaultView.getComputedStyle(t, "").getPropertyValue("color");
                            return r == i ? null : r
                        }))(e)
                    },
                    G = function() {
                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                    };
                t.color = function(e) {
                    var n;
                    return P(e, "object") && "h" in e && "s" in e && "b" in e ? (n = t.hsb2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.opacity = 1, e.hex = n.hex) : P(e, "object") && "h" in e && "s" in e && "l" in e ? (n = t.hsl2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.opacity = 1, e.hex = n.hex) : (P(e, "string") && (e = t.getRGB(e)), P(e, "object") && "r" in e && "g" in e && "b" in e && !("error" in e) ? (n = t.rgb2hsl(e), e.h = n.h, e.s = n.s, e.l = n.l, n = t.rgb2hsb(e), e.v = n.b) : ((e = {
                        hex: "none"
                    }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1, e.error = 1)), e.toString = G, e
                }, t.hsb2rgb = function(e, t, n, i) {
                    var r, s, a, o, l;
                    return P(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, i = e.o, e = e.h), o = (l = n * t) * (1 - f((e = (e *= 360) % 360 / 60) % 2 - 1)), r = s = a = n - l, M(r += [l, o, 0, 0, o, l][e = ~~e], s += [o, l, l, o, 0, 0][e], a += [0, 0, o, l, l, o][e], i)
                }, t.hsl2rgb = function(e, t, n, i) {
                    var r, s, a, o, l;
                    return P(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h), (1 < e || 1 < t || 1 < n) && (e /= 360, t /= 100, n /= 100), o = (l = 2 * t * (n < .5 ? n : 1 - n)) * (1 - f((e = (e *= 360) % 360 / 60) % 2 - 1)), r = s = a = n - l / 2, M(r += [l, o, 0, 0, o, l][e = ~~e], s += [o, l, l, o, 0, 0][e], a += [0, 0, o, l, l, o][e], i)
                }, t.rgb2hsb = function(e, t, n) {
                    var i, r;
                    return e = (n = O(e, t, n))[0], t = n[1], n = n[2], {
                        h: ((0 == (r = (i = c(e, t, n)) - d(e, t, n)) ? null : i == e ? (t - n) / r : i == t ? (n - e) / r + 2 : (e - t) / r + 4) + 360) % 6 * 60 / 360,
                        s: 0 == r ? 0 : r / i,
                        b: i,
                        toString: I
                    }
                }, t.rgb2hsl = function(e, t, n) {
                    var i, r, s, a;
                    return e = (n = O(e, t, n))[0], t = n[1], n = n[2], i = ((r = c(e, t, n)) + (s = d(e, t, n))) / 2, {
                        h: ((0 == (a = r - s) ? null : r == e ? (t - n) / a : r == t ? (n - e) / a + 2 : (e - t) / a + 4) + 360) % 6 * 60 / 360,
                        s: 0 == a ? 0 : i < .5 ? a / (2 * i) : a / (2 - 2 * i),
                        l: i,
                        toString: D
                    }
                }, t.parsePathString = function(e) {
                    if (!e) return null;
                    var n = t.path(e);
                    if (n.arr) return t.path.clone(n.arr);
                    var i = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        r = [];
                    return P(e, "array") && P(e[0], "array") && (r = t.path.clone(e)), r.length || a(e).replace(y, function(e, t, n) {
                        var s = [],
                            a = t.toLowerCase();
                        if (n.replace(x, function(e, t) {
                                t && s.push(+t)
                            }), "m" == a && 2 < s.length && (r.push([t].concat(s.splice(0, 2))), a = "l", t = "m" == t ? "l" : "L"), "o" == a && 1 == s.length && r.push([t, s[0]]), "r" == a) r.push([t].concat(s));
                        else
                            for (; s.length >= i[a] && (r.push([t].concat(s.splice(0, i[a]))), i[a]););
                    }), r.toString = t.path.toString, n.arr = t.path.clone(r), r
                };
                var N = t.parseTransformString = function(e) {
                    if (!e) return null;
                    var n = [];
                    return P(e, "array") && P(e[0], "array") && (n = t.path.clone(e)), n.length || a(e).replace(b, function(e, t, i) {
                        var r = [];
                        t.toLowerCase(), i.replace(x, function(e, t) {
                            t && r.push(+t)
                        }), n.push([t].concat(r))
                    }), n.toString = t.path.toString, n
                };

                function L(e) {
                    return e.node.ownerSVGElement && K(e.node.ownerSVGElement) || t.select("svg")
                }

                function V(e) {
                    P(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
                    for (var t = 0, n = 0, i = this.node; this[t];) delete this[t++];
                    for (t = 0; t < e.length; t++) "set" == e[t].type ? e[t].forEach(function(e) {
                        i.appendChild(e.node)
                    }) : i.appendChild(e[t].node);
                    var r = i.childNodes;
                    for (t = 0; t < r.length; t++) this[n++] = K(r[t]);
                    return this
                }

                function z(e) {
                    if (e.snap in A) return A[e.snap];
                    var t;
                    try {
                        t = e.ownerSVGElement
                    } catch (e) {}
                    this.node = e, t && (this.paper = new j(t)), this.type = e.tagName || e.nodeName;
                    var n = this.id = w(this);
                    if (this.anims = {}, this._ = {
                            transform: []
                        }, e.snap = n, "g" == (A[n] = this).type && (this.add = V), this.type in {
                            g: 1,
                            mask: 1,
                            pattern: 1,
                            symbol: 1
                        })
                        for (var i in j.prototype) j.prototype[s](i) && (this[i] = j.prototype[i])
                }

                function U(e) {
                    this.node = e
                }

                function q(e, t) {
                    var n = k(e);
                    return t.appendChild(n), K(n)
                }

                function j(e, t) {
                    var i, r, a, o = j.prototype;
                    if (e && e.tagName && "svg" == e.tagName.toLowerCase()) {
                        if (e.snap in A) return A[e.snap];
                        var l = e.ownerDocument;
                        for (var u in i = new z(e), r = e.getElementsByTagName("desc")[0], a = e.getElementsByTagName("defs")[0], r || ((r = k("desc")).appendChild(l.createTextNode("Created with Snap")), i.node.appendChild(r)), a || (a = k("defs"), i.node.appendChild(a)), i.defs = a, o) o[s](u) && (i[u] = o[u]);
                        i.paper = i.root = i
                    } else k((i = q("svg", n.doc.body)).node, {
                        height: t,
                        version: 1.1,
                        width: e,
                        xmlns: C
                    });
                    return i
                }

                function K(e) {
                    return e ? e instanceof z || e instanceof U ? e : e.tagName && "svg" == e.tagName.toLowerCase() ? new j(e) : e.tagName && "object" == e.tagName.toLowerCase() && "image/svg+xml" == e.type ? new j(e.contentDocument.getElementsByTagName("svg")[0]) : new z(e) : e
                }
                t._.svgTransform2string = function(e) {
                    var t = [];
                    return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(e, n, i) {
                        return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (2 < i.length ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == n ? t.push(["m", 1, 0, u.tan(R(i[0])), 1, 0, 0]) : "skewY" == n ? t.push(["m", 1, u.tan(R(i[0])), 0, 1, 0, 0]) : t.push([n.charAt(0)].concat(i)), e
                    }), t
                }, t._.rgTransform = /^[a-z][\s]*-?\.?\d/i, t._.transform2matrix = function(e, n) {
                    var i = N(e),
                        r = new t.Matrix;
                    if (i)
                        for (var s = 0, o = i.length; s < o; s++) {
                            var l, u, c, d, f, h = i[s],
                                p = h.length,
                                g = a(h[0]).toLowerCase(),
                                m = h[0] != g,
                                v = m ? r.invert() : 0;
                            "t" == g && 2 == p ? r.translate(h[1], 0) : "t" == g && 3 == p ? m ? (l = v.x(0, 0), u = v.y(0, 0), c = v.x(h[1], h[2]), d = v.y(h[1], h[2]), r.translate(c - l, d - u)) : r.translate(h[1], h[2]) : "r" == g ? 2 == p ? (f = f || n, r.rotate(h[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == p && (m ? (c = v.x(h[2], h[3]), d = v.y(h[2], h[3]), r.rotate(h[1], c, d)) : r.rotate(h[1], h[2], h[3])) : "s" == g ? 2 == p || 3 == p ? (f = f || n, r.scale(h[1], h[p - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == p ? m ? (c = v.x(h[2], h[3]), d = v.y(h[2], h[3]), r.scale(h[1], h[1], c, d)) : r.scale(h[1], h[1], h[2], h[3]) : 5 == p && (m ? (c = v.x(h[3], h[4]), d = v.y(h[3], h[4]), r.scale(h[1], h[2], c, d)) : r.scale(h[1], h[2], h[3], h[4])) : "m" == g && 7 == p && r.add(h[1], h[2], h[3], h[4], h[5], h[6])
                        }
                    return r
                }, t._unit2px = function(e, t, n) {
                    var i = L(e).node,
                        r = {},
                        s = i.querySelector(".svg---mgr");

                    function a(e) {
                        if (null == e) return "";
                        if (e == +e) return e;
                        k(s, {
                            width: e
                        });
                        try {
                            return s.getBBox().width
                        } catch (e) {
                            return 0
                        }
                    }

                    function o(e) {
                        if (null == e) return "";
                        if (e == +e) return e;
                        k(s, {
                            height: e
                        });
                        try {
                            return s.getBBox().height
                        } catch (e) {
                            return 0
                        }
                    }

                    function l(i, s) {
                        null == t ? r[i] = s(e.attr(i) || 0) : i == t && (r = s(null == n ? e.attr(i) || 0 : n))
                    }
                    switch (s || (k(s = k("rect"), {
                        x: -9e9,
                        y: -9e9,
                        width: 10,
                        height: 10,
                        class: "svg---mgr",
                        fill: "none"
                    }), i.appendChild(s)), e.type) {
                        case "rect":
                            l("rx", a), l("ry", o);
                        case "image":
                            l("width", a), l("height", o);
                        case "text":
                            l("x", a), l("y", o);
                            break;
                        case "circle":
                            l("cx", a), l("cy", o), l("r", a);
                            break;
                        case "ellipse":
                            l("cx", a), l("cy", o), l("rx", a), l("ry", o);
                            break;
                        case "line":
                            l("x1", a), l("x2", a), l("y1", o), l("y2", o);
                            break;
                        case "marker":
                            l("refX", a), l("markerWidth", a), l("refY", o), l("markerHeight", o);
                            break;
                        case "radialGradient":
                            l("fx", a), l("fy", o);
                            break;
                        case "tspan":
                            l("dx", a), l("dy", o);
                            break;
                        default:
                            l(t, a)
                    }
                    return i.removeChild(s), r
                }, n.doc.contains || n.doc.compareDocumentPosition, t._.getSomeDefs = function(e) {
                    var n = e.node.ownerSVGElement && K(e.node.ownerSVGElement) || e.node.parentNode && K(e.node.parentNode) || t.select("svg") || t(0, 0),
                        i = n.select("defs"),
                        r = null != i && i.node;
                    return r || q("defs", n.node).node
                }, t._.getSomeSVG = L, t.select = function(e) {
                    return e = a(e).replace(/([^\\]):/g, "$1\\:"), K(n.doc.querySelector(e))
                }, t.selectAll = function(e) {
                    for (var i = n.doc.querySelectorAll(e), r = (t.set || Array)(), s = 0; s < i.length; s++) r.push(K(i[s]));
                    return r
                }, setInterval(function() {
                    for (var e in A)
                        if (A[s](e)) {
                            var t = A[e],
                                n = t.node;
                            ("svg" != t.type && !n.ownerSVGElement || "svg" == t.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete A[e]
                        }
                }, 1e4), z.prototype.attr = function(e, t) {
                    var n = this.node;
                    if (!e) {
                        if (1 != n.nodeType) return {
                            text: n.nodeValue
                        };
                        for (var i = n.attributes, r = {}, a = 0, o = i.length; a < o; a++) r[i[a].nodeName] = i[a].nodeValue;
                        return r
                    }
                    if (P(e, "string")) {
                        if (!(1 < arguments.length)) return eve("snap.util.getattr." + e, this).firstDefined();
                        var l = {};
                        l[e] = t, e = l
                    }
                    for (var u in e) e[s](u) && eve("snap.util.attr." + u, this, e[u]);
                    return this
                }, t.parse = function(e) {
                    var t = n.doc.createDocumentFragment(),
                        i = !0,
                        r = n.doc.createElement("div");
                    if ((e = a(e)).match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>", i = !1), r.innerHTML = e, e = r.getElementsByTagName("svg")[0])
                        if (i) t = e;
                        else
                            for (; e.firstChild;) t.appendChild(e.firstChild);
                    return new U(t)
                }, t.fragment = function() {
                    for (var e = Array.prototype.slice.call(arguments, 0), i = n.doc.createDocumentFragment(), r = 0, s = e.length; r < s; r++) {
                        var a = e[r];
                        a.node && a.node.nodeType && i.appendChild(a.node), a.nodeType && i.appendChild(a), "string" == typeof a && i.appendChild(t.parse(a).node)
                    }
                    return new U(i)
                }, t._.make = q, t._.wrap = K, j.prototype.el = function(e, t) {
                    var n = q(e, this.node);
                    return t && n.attr(t), n
                }, z.prototype.children = function() {
                    for (var e = [], n = this.node.childNodes, i = 0, r = n.length; i < r; i++) e[i] = t(n[i]);
                    return e
                }, z.prototype.toJSON = function() {
                    var e = [];
                    return function e(t, n) {
                        for (var i = 0, r = t.length; i < r; i++) {
                            var s = {
                                    type: t[i].type,
                                    attr: t[i].attr()
                                },
                                a = t[i].children();
                            n.push(s), a.length && e(a, s.childNodes = [])
                        }
                    }([this], e), e[0]
                }, eve.on("snap.util.getattr", function() {
                    var e = eve.nt(),
                        t = (e = e.substring(e.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                    return H[s](t) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(t) : k(this.node, e)
                });
                var H = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };
                return eve.on("snap.util.attr", function(e) {
                    var t = eve.nt(),
                        n = {};
                    n[t = t.substring(t.lastIndexOf(".") + 1)] = e;
                    var i = t.replace(/-(\w)/gi, function(e, t) {
                            return t.toUpperCase()
                        }),
                        r = t.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                    H[s](r) ? this.node.style[i] = null == e ? "" : e : k(this.node, n)
                }), t.ajax = function(e, t, n, i) {
                    var r = new XMLHttpRequest,
                        s = w();
                    if (r) {
                        if (P(t, "function")) i = n, n = t, t = null;
                        else if (P(t, "object")) {
                            var a = [];
                            for (var o in t) t.hasOwnProperty(o) && a.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                            t = a.join("&")
                        }
                        return r.open(t ? "POST" : "GET", e, !0), t && (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (eve.once("snap.ajax." + s + ".0", n), eve.once("snap.ajax." + s + ".200", n), eve.once("snap.ajax." + s + ".304", n)), r.onreadystatechange = function() {
                            4 == r.readyState && eve("snap.ajax." + s + "." + r.status, i, r)
                        }, 4 == r.readyState ? r : (r.send(t), r)
                    }
                }, t.load = function(e, n, i) {
                    t.ajax(e, function(e) {
                        var r = t.parse(e.responseText);
                        i ? n.call(i, r) : n(r)
                    })
                }, t.getElementByPoint = function(e, t) {
                    this.canvas;
                    var i = n.doc.elementFromPoint(e, t);
                    if (n.win.opera && "svg" == i.tagName) {
                        var r = function(e) {
                                var t = e.getBoundingClientRect(),
                                    n = e.ownerDocument,
                                    i = n.body,
                                    r = n.documentElement,
                                    s = r.clientTop || i.clientTop || 0,
                                    a = r.clientLeft || i.clientLeft || 0;
                                return {
                                    y: t.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - s,
                                    x: t.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - a
                                }
                            }(i),
                            s = i.createSVGRect();
                        s.x = e - r.x, s.y = t - r.y, s.width = s.height = 1;
                        var a = i.getIntersectionList(s, null);
                        a.length && (i = a[a.length - 1])
                    }
                    return i ? K(i) : null
                }, t.plugin = function(e) {
                    e(t, z, j, n, U)
                }, n.win.Snap = t
            }(window || this);
            S.plugin(function(e, t, n, i, r) {
                var s = t.prototype,
                    a = e.is,
                    o = String,
                    l = e._unit2px,
                    u = e._.$,
                    c = e._.make,
                    d = e._.getSomeDefs,
                    f = e._.wrap;

                function h() {
                    return this.string
                }

                function p(t, n) {
                    if (null == n) {
                        var i = !0;
                        if (!(n = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new e.Matrix;
                        n = e._.svgTransform2string(n)
                    } else n = e._.rgTransform.test(n) ? o(n).replace(/\.{3}|\u2026/g, t._.transform || "") : e._.svgTransform2string(n), a(n, "array") && (n = e.path ? e.path.toString.call(n) : o(n)), t._.transform = n;
                    var r = e._.transform2matrix(n, t.getBBox(1));
                    if (i) return r;
                    t.matrix = r
                }
                s.getBBox = function(t) {
                    if ("tspan" == this.type) return e._.box(this.node.getClientRects().item(0));
                    if (!e.Matrix || !e.path) return this.node.getBBox();
                    var n = this,
                        i = new e.Matrix;
                    if (n.removed) return e._.box();
                    for (;
                        "use" == n.type;)
                        if (t || (i = i.add(n.transform().localMatrix.translate(n.attr("x") || 0, n.attr("y") || 0))), n.original) n = n.original;
                        else {
                            var r = n.attr("xlink:href");
                            n = n.original = n.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
                        }
                    var s = n._,
                        a = e.path.get[n.type] || e.path.get.deflt;
                    try {
                        return t ? (s.bboxwt = a ? e.path.getBBox(n.realPath = a(n)) : e._.box(n.node.getBBox()), e._.box(s.bboxwt)) : (n.realPath = a(n), n.matrix = n.transform().localMatrix, s.bbox = e.path.getBBox(e.path.map(n.realPath, i.add(n.matrix))), e._.box(s.bbox))
                    } catch (t) {
                        return e._.box()
                    }
                }, s.transform = function(t) {
                    var n = this._;
                    if (null != t) return t instanceof e.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : p(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? u(this.node, {
                        gradientTransform: this.matrix
                    }) : "pattern" == this.type ? u(this.node, {
                        patternTransform: this.matrix
                    }) : u(this.node, {
                        transform: this.matrix
                    })), this;
                    for (var i, r = this, s = new e.Matrix(this.node.getCTM()), a = p(this), l = [a], c = new e.Matrix, d = a.toTransformString(), f = o(a) == o(this.matrix) ? o(n.transform) : d;
                        "svg" != r.type && (r = r.parent());) l.push(p(r));
                    for (i = l.length; i--;) c.add(l[i]);
                    return {
                        string: f,
                        globalMatrix: s,
                        totalMatrix: c,
                        localMatrix: a,
                        diffMatrix: s.clone().add(a.invert()),
                        global: s.toTransformString(),
                        total: c.toTransformString(),
                        local: d,
                        toString: h
                    }
                }, s.parent = function() {
                    return f(this.node.parentNode)
                }, s.append = s.add = function(e) {
                    if (e) {
                        if ("set" == e.type) {
                            var t = this;
                            return e.forEach(function(e) {
                                t.add(e)
                            }), this
                        }
                        e = f(e), this.node.appendChild(e.node), e.paper = this.paper
                    }
                    return this
                }, s.appendTo = function(e) {
                    return e && (e = f(e)).append(this), this
                }, s.prepend = function(e) {
                    if (e) {
                        if ("set" == e.type) {
                            var t, n = this;
                            return e.forEach(function(e) {
                                t ? t.after(e) : n.prepend(e), t = e
                            }), this
                        }
                        var i = (e = f(e)).parent();
                        this.node.insertBefore(e.node, this.node.firstChild), this.add && this.add(), e.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
                    }
                    return this
                }, s.prependTo = function(e) {
                    return (e = f(e)).prepend(this), this
                }, s.before = function(e) {
                    if ("set" == e.type) {
                        var t = this;
                        return e.forEach(function(e) {
                            var n = e.parent();
                            t.node.parentNode.insertBefore(e.node, t.node), n && n.add()
                        }), this.parent().add(), this
                    }
                    var n = (e = f(e)).parent();
                    return this.node.parentNode.insertBefore(e.node, this.node), this.parent() && this.parent().add(), n && n.add(), e.paper = this.paper, this
                }, s.after = function(e) {
                    var t = (e = f(e)).parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
                }, s.insertBefore = function(e) {
                    e = f(e);
                    var t = this.parent();
                    return e.node.parentNode.insertBefore(this.node, e.node), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
                }, s.insertAfter = function(e) {
                    e = f(e);
                    var t = this.parent();
                    return e.node.parentNode.insertBefore(this.node, e.node.nextSibling), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
                }, s.remove = function() {
                    var e = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, e && e.add(), this
                }, s.select = function(e) {
                    return f(this.node.querySelector(e))
                }, s.selectAll = function(t) {
                    for (var n = this.node.querySelectorAll(t), i = (e.set || Array)(), r = 0; r < n.length; r++) i.push(f(n[r]));
                    return i
                }, s.asPX = function(e, t) {
                    return null == t && (t = this.attr(e)), +l(this, e, t)
                }, s.use = function() {
                    var e, t = this.node.id;
                    return t || (t = this.id, u(this.node, {
                        id: t
                    })), e = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? c(this.type, this.node.parentNode) : c("use", this.node.parentNode), u(e.node, {
                        "xlink:href": "#" + t
                    }), e.original = this, e
                }, s.clone = function() {
                    var t = f(this.node.cloneNode(!0));
                    return u(t.node, "id") && u(t.node, {
                            id: t.id
                        }),
                        function(t) {
                            var n, i = t.selectAll("*"),
                                r = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                                s = [],
                                a = {};

                            function o(t, n) {
                                var i = u(t.node, n);
                                (i = (i = i && i.match(r)) && i[2]) && "#" == i.charAt() && (i = i.substring(1)) && (a[i] = (a[i] || []).concat(function(i) {
                                    var r = {};
                                    r[n] = e.url(i), u(t.node, r)
                                }))
                            }

                            function l(e) {
                                var t = u(e.node, "xlink:href");
                                t && "#" == t.charAt() && (t = t.substring(1)) && (a[t] = (a[t] || []).concat(function(t) {
                                    e.attr("xlink:href", "#" + t)
                                }))
                            }
                            for (var c = 0, d = i.length; c < d; c++) {
                                o(n = i[c], "fill"), o(n, "stroke"), o(n, "filter"), o(n, "mask"), o(n, "clip-path"), l(n);
                                var f = u(n.node, "id");
                                f && (u(n.node, {
                                    id: n.id
                                }), s.push({
                                    old: f,
                                    id: n.id
                                }))
                            }
                            for (c = 0, d = s.length; c < d; c++) {
                                var h = a[s[c].old];
                                if (h)
                                    for (var p = 0, g = h.length; p < g; p++) h[p](s[c].id)
                            }
                        }(t), t.insertAfter(this), t
                }, s.toDefs = function() {
                    return d(this).appendChild(this.node), this
                }, s.pattern = s.toPattern = function(e, t, n, i) {
                    var r = c("pattern", d(this));
                    return null == e && (e = this.getBBox()), a(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, e = e.x), u(r.node, {
                        x: e,
                        y: t,
                        width: n,
                        height: i,
                        patternUnits: "userSpaceOnUse",
                        id: r.id,
                        viewBox: [e, t, n, i].join(" ")
                    }), r.node.appendChild(this.node), r
                }, s.marker = function(e, t, n, i, r, s) {
                    var o = c("marker", d(this));
                    return null == e && (e = this.getBBox()), a(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, r = e.refX || e.cx, s = e.refY || e.cy, e = e.x), u(o.node, {
                        viewBox: [e, t, n, i].join(" "),
                        markerWidth: n,
                        markerHeight: i,
                        orient: "auto",
                        refX: r || 0,
                        refY: s || 0,
                        id: o.id
                    }), o.node.appendChild(this.node), o
                };
                var g = {};

                function m(e) {
                    return function() {
                        var t = e ? "<" + this.type : "",
                            n = this.node.attributes,
                            i = this.node.childNodes;
                        if (e)
                            for (var r = 0, s = n.length; r < s; r++) t += " " + n[r].name + '="' + n[r].value.replace(/"/g, '\\"') + '"';
                        if (i.length) {
                            for (e && (t += ">"), r = 0, s = i.length; r < s; r++) 3 == i[r].nodeType ? t += i[r].nodeValue : 1 == i[r].nodeType && (t += f(i[r]).toString());
                            e && (t += "</" + this.type + ">")
                        } else e && (t += "/>");
                        return t
                    }
                }
                s.data = function(t, n) {
                    var i = g[this.id] = g[this.id] || {};
                    if (0 == arguments.length) return eve("snap.data.get." + this.id, this, i, null), i;
                    if (1 != arguments.length) return i[t] = n, eve("snap.data.set." + this.id, this, n, t), this;
                    if (e.is(t, "object")) {
                        for (var r in t) t.hasOwnProperty(r) && this.data(r, t[r]);
                        return this
                    }
                    return eve("snap.data.get." + this.id, this, i[t], t), i[t]
                }, s.removeData = function(e) {
                    return null == e ? g[this.id] = {} : g[this.id] && delete g[this.id][e], this
                }, s.outerSVG = s.toString = m(1), s.innerSVG = m(), s.toDataURL = function() {
                    if (window && window.btoa) {
                        var t = this.getBBox(),
                            n = e.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                                x: +t.x.toFixed(3),
                                y: +t.y.toFixed(3),
                                width: +t.width.toFixed(3),
                                height: +t.height.toFixed(3),
                                contents: this.outerSVG()
                            });
                        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
                    }
                }, r.prototype.select = s.select, r.prototype.selectAll = s.selectAll
            }), S.plugin(function(e, t, n, i, r) {
                var s, a = Object.prototype.toString,
                    o = String,
                    l = Math;

                function u(e, t, n, i, r, s) {
                    if (null == t && "[object SVGMatrix]" == a.call(e)) return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.e = e.e, void(this.f = e.f);
                    null != e ? (this.a = +e, this.b = +t, this.c = +n, this.d = +i, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
                }

                function c(e) {
                    return e[0] * e[0] + e[1] * e[1]
                }

                function d(e) {
                    var t = l.sqrt(c(e));
                    e[0] && (e[0] /= t), e[1] && (e[1] /= t)
                }(s = u.prototype).add = function(e, t, n, i, r, s) {
                    if (e && e instanceof u) return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
                    var a = e * this.a + t * this.c,
                        o = e * this.b + t * this.d;
                    return this.e += r * this.a + s * this.c, this.f += r * this.b + s * this.d, this.c = n * this.a + i * this.c, this.d = n * this.b + i * this.d, this.a = a, this.b = o, this
                }, u.prototype.multLeft = function(e, t, n, i, r, s) {
                    if (e && e instanceof u) return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
                    var a = e * this.a + n * this.b,
                        o = e * this.c + n * this.d,
                        l = e * this.e + n * this.f + r;
                    return this.b = t * this.a + i * this.b, this.d = t * this.c + i * this.d, this.f = t * this.e + i * this.f + s, this.a = a, this.c = o, this.e = l, this
                }, s.invert = function() {
                    var e = this,
                        t = e.a * e.d - e.b * e.c;
                    return new u(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
                }, s.clone = function() {
                    return new u(this.a, this.b, this.c, this.d, this.e, this.f)
                }, s.translate = function(e, t) {
                    return this.e += e * this.a + t * this.c, this.f += e * this.b + t * this.d, this
                }, s.scale = function(e, t, n, i) {
                    return null == t && (t = e), (n || i) && this.translate(n, i), this.a *= e, this.b *= e, this.c *= t, this.d *= t, (n || i) && this.translate(-n, -i), this
                }, s.rotate = function(t, n, i) {
                    t = e.rad(t), n = n || 0, i = i || 0;
                    var r = +l.cos(t).toFixed(9),
                        s = +l.sin(t).toFixed(9);
                    return this.add(r, s, -s, r, n, i), this.add(1, 0, 0, 1, -n, -i)
                }, s.skewX = function(e) {
                    return this.skew(e, 0)
                }, s.skewY = function(e) {
                    return this.skew(0, e)
                }, s.skew = function(t, n) {
                    t = t || 0, n = n || 0, t = e.rad(t), n = e.rad(n);
                    var i = l.tan(t).toFixed(9),
                        r = l.tan(n).toFixed(9);
                    return this.add(1, r, i, 1, 0, 0)
                }, s.x = function(e, t) {
                    return e * this.a + t * this.c + this.e
                }, s.y = function(e, t) {
                    return e * this.b + t * this.d + this.f
                }, s.get = function(e) {
                    return +this[o.fromCharCode(97 + e)].toFixed(4)
                }, s.toString = function() {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, s.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, s.determinant = function() {
                    return this.a * this.d - this.b * this.c
                }, s.split = function() {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var n = [
                        [this.a, this.b],
                        [this.c, this.d]
                    ];
                    t.scalex = l.sqrt(c(n[0])), d(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = l.sqrt(c(n[1])), d(n[1]), t.shear /= t.scaley, this.determinant() < 0 && (t.scalex = -t.scalex);
                    var i = n[0][1],
                        r = n[1][1];
                    return r < 0 ? (t.rotate = e.deg(l.acos(r)), i < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(l.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, s.toTransformString = function(e) {
                    var t = e || this.split();
                    return +t.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : "") + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : "") + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : ""))
                }, e.Matrix = u, e.matrix = function(e, t, n, i, r, s) {
                    return new u(e, t, n, i, r, s)
                }
            }), S.plugin(function(e, t, n, i, r) {
                var s, a = e._.make,
                    o = e._.wrap,
                    l = e.is,
                    u = e._.getSomeDefs,
                    c = /^url\((['"]?)([^)]+)\1\)$/,
                    d = e._.$,
                    f = e.url,
                    h = String,
                    p = e._.separator;

                function g(n) {
                    return function(i) {
                        if (eve.stop(), i instanceof r && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, u(this).appendChild(i), i = o(i)), i instanceof t)
                            if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                                i.node.id || d(i.node, {
                                    id: i.id
                                });
                                var s = f(i.node.id)
                            } else s = i.attr(n);
                        else if ((s = e.color(i)).error) {
                            var a = e(u(this).ownerSVGElement).gradient(i);
                            s = a ? (a.node.id || d(a.node, {
                                id: a.id
                            }), f(a.node.id)) : i
                        } else s = h(s);
                        var l = {};
                        l[n] = s, d(this.node, l), this.node.style[n] = ""
                    }
                }
                e.deurl = function(e) {
                    var t = String(e).match(c);
                    return t ? t[2] : e
                }, eve.on("snap.util.attr.mask", function(e) {
                    if (e instanceof t || e instanceof r) {
                        if (eve.stop(), e instanceof r && 1 == e.node.childNodes.length && (e = e.node.firstChild, u(this).appendChild(e), e = o(e)), "mask" == e.type) var n = e;
                        else(n = a("mask", u(this))).node.appendChild(e.node);
                        n.node.id || d(n.node, {
                            id: n.id
                        }), d(this.node, {
                            mask: f(n.id)
                        })
                    }
                }), s = function(e) {
                    if (e instanceof t || e instanceof r) {
                        eve.stop();
                        for (var n, i = e.node; i;) {
                            if ("clipPath" === i.nodeName) {
                                n = new t(i);
                                break
                            }
                            if ("svg" === i.nodeName) {
                                n = void 0;
                                break
                            }
                            i = i.parentNode
                        }
                        n || ((n = a("clipPath", u(this))).node.appendChild(e.node), n.node.id || d(n.node, {
                            id: n.id
                        })), d(this.node, {
                            "clip-path": f(n.node.id || n.id)
                        })
                    }
                }, eve.on("snap.util.attr.clip", s), eve.on("snap.util.attr.clip-path", s), eve.on("snap.util.attr.clipPath", s), eve.on("snap.util.attr.fill", g("fill")), eve.on("snap.util.attr.stroke", g("stroke"));
                var m = /^([lr])(?:\(([^)]*)\))?(.*)$/i;

                function v(e) {
                    eve.stop(), e == +e && (e += "px"), this.node.style.fontSize = e
                }

                function _(t) {
                    return function() {
                        eve.stop();
                        var n = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + t);
                        return "none" == n ? n : e(i.doc.getElementById(n.match(c)[1]))
                    }
                }

                function y(e) {
                    return function(t) {
                        eve.stop();
                        var n = "marker" + e.charAt(0).toUpperCase() + e.substring(1);
                        if ("" != t && t) {
                            if ("marker" == t.type) {
                                var i = t.node.id;
                                return i || d(t.node, {
                                    id: t.id
                                }), void(this.node.style[n] = f(i))
                            }
                        } else this.node.style[n] = "none"
                    }
                }

                function b() {
                    return eve.stop(), this.node.style.fontSize
                }
                eve.on("snap.util.grad.parse", function(e) {
                    var t = (e = h(e)).match(m);
                    if (!t) return null;
                    var n = t[1],
                        i = t[2],
                        r = t[3];
                    1 == (i = i.split(/\s*,\s*/).map(function(e) {
                        return +e == e ? +e : e
                    })).length && 0 == i[0] && (i = []);
                    var s = (r = (r = r.split("-")).map(function(e) {
                            var t = {
                                color: (e = e.split(":"))[0]
                            };
                            return e[1] && (t.offset = parseFloat(e[1])), t
                        })).length,
                        a = 0,
                        o = 0;

                    function l(e, t) {
                        for (var n = (t - a) / (e - o), i = o; i < e; i++) r[i].offset = +(+a + n * (i - o)).toFixed(2);
                        o = e, a = t
                    }
                    s--;
                    for (var u = 0; u < s; u++) "offset" in r[u] && l(u, r[u].offset);
                    return r[s].offset = r[s].offset || 100, l(s, r[s].offset), {
                        type: n,
                        params: i,
                        stops: r
                    }
                }), eve.on("snap.util.attr.d", function(t) {
                    eve.stop(), l(t, "array") && l(t[0], "array") && (t = e.path.toString.call(t)), (t = h(t)).match(/[ruo]/i) && (t = e.path.toAbsolute(t)), d(this.node, {
                        d: t
                    })
                })(-1), eve.on("snap.util.attr.#text", function(e) {
                    eve.stop(), e = h(e);
                    for (var t = i.doc.createTextNode(e); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(t)
                })(-1), eve.on("snap.util.attr.path", function(e) {
                    eve.stop(), this.attr({
                        d: e
                    })
                })(-1), eve.on("snap.util.attr.class", function(e) {
                    eve.stop(), this.node.className.baseVal = e
                })(-1), eve.on("snap.util.attr.viewBox", function(e) {
                    var t;
                    t = l(e, "object") && "x" in e ? [e.x, e.y, e.width, e.height].join(" ") : l(e, "array") ? e.join(" ") : e, d(this.node, {
                        viewBox: t
                    }), eve.stop()
                })(-1), eve.on("snap.util.attr.transform", function(e) {
                    this.transform(e), eve.stop()
                })(-1), eve.on("snap.util.attr.r", function(e) {
                    "rect" == this.type && (eve.stop(), d(this.node, {
                        rx: e,
                        ry: e
                    }))
                })(-1), eve.on("snap.util.attr.textpath", function(e) {
                    if (eve.stop(), "text" == this.type) {
                        var n, i, r;
                        if (!e && this.textPath) {
                            for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                            return i.remove(), void delete this.textPath
                        }
                        if (l(e, "string")) {
                            var s = u(this),
                                a = o(s.parentNode).path(e);
                            s.appendChild(a.node), n = a.id, a.attr({
                                id: n
                            })
                        } else(e = o(e)) instanceof t && ((n = e.attr("id")) || (n = e.id, e.attr({
                            id: n
                        })));
                        if (n)
                            if (i = this.textPath, r = this.node, i) i.attr({
                                "xlink:href": "#" + n
                            });
                            else {
                                for (i = d("textPath", {
                                        "xlink:href": "#" + n
                                    }); r.firstChild;) i.appendChild(r.firstChild);
                                r.appendChild(i), this.textPath = o(i)
                            }
                    }
                })(-1), eve.on("snap.util.attr.text", function(e) {
                    if ("text" == this.type) {
                        for (var t = this.node, n = function(e) {
                                var t = d("tspan");
                                if (l(e, "array"))
                                    for (var r = 0; r < e.length; r++) t.appendChild(n(e[r]));
                                else t.appendChild(i.doc.createTextNode(e));
                                return t.normalize && t.normalize(), t
                            }; t.firstChild;) t.removeChild(t.firstChild);
                        for (var r = n(e); r.firstChild;) t.appendChild(r.firstChild)
                    }
                    eve.stop()
                })(-1), eve.on("snap.util.attr.fontSize", v)(-1), eve.on("snap.util.attr.font-size", v)(-1), eve.on("snap.util.getattr.transform", function() {
                    return eve.stop(), this.transform()
                })(-1), eve.on("snap.util.getattr.textpath", function() {
                    return eve.stop(), this.textPath
                })(-1), eve.on("snap.util.getattr.marker-end", _("end"))(-1), eve.on("snap.util.getattr.markerEnd", _("end"))(-1), eve.on("snap.util.getattr.marker-start", _("start"))(-1), eve.on("snap.util.getattr.markerStart", _("start"))(-1), eve.on("snap.util.getattr.marker-mid", _("mid"))(-1), eve.on("snap.util.getattr.markerMid", _("mid"))(-1), eve.on("snap.util.attr.marker-end", y("end"))(-1), eve.on("snap.util.attr.markerEnd", y("end"))(-1), eve.on("snap.util.attr.marker-start", y("start"))(-1), eve.on("snap.util.attr.markerStart", y("start"))(-1), eve.on("snap.util.attr.marker-mid", y("mid"))(-1), eve.on("snap.util.attr.markerMid", y("mid"))(-1), eve.on("snap.util.getattr.r", function() {
                    if ("rect" == this.type && d(this.node, "rx") == d(this.node, "ry")) return eve.stop(), d(this.node, "rx")
                })(-1), eve.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        eve.stop();
                        var e = function e(t) {
                            for (var n = [], i = t.childNodes, r = 0, s = i.length; r < s; r++) {
                                var a = i[r];
                                3 == a.nodeType && n.push(a.nodeValue), "tspan" == a.tagName && (1 == a.childNodes.length && 3 == a.firstChild.nodeType ? n.push(a.firstChild.nodeValue) : n.push(e(a)))
                            }
                            return n
                        }(this.node);
                        return 1 == e.length ? e[0] : e
                    }
                })(-1), eve.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1), eve.on("snap.util.getattr.fill", function(t) {
                    if (!t) {
                        eve.stop();
                        var n = eve("snap.util.getattr.fill", this, !0).firstDefined();
                        return e(e.deurl(n)) || n
                    }
                })(-1), eve.on("snap.util.getattr.stroke", function(t) {
                    if (!t) {
                        eve.stop();
                        var n = eve("snap.util.getattr.stroke", this, !0).firstDefined();
                        return e(e.deurl(n)) || n
                    }
                })(-1), eve.on("snap.util.getattr.viewBox", function() {
                    eve.stop();
                    var t = d(this.node, "viewBox");
                    return t ? (t = t.split(p), e._.box(+t[0], +t[1], +t[2], +t[3])) : void 0
                })(-1), eve.on("snap.util.getattr.points", function() {
                    var e = d(this.node, "points");
                    return eve.stop(), e ? e.split(p) : void 0
                })(-1), eve.on("snap.util.getattr.path", function() {
                    var e = d(this.node, "d");
                    return eve.stop(), e
                })(-1), eve.on("snap.util.getattr.class", function() {
                    return this.node.className.baseVal
                })(-1), eve.on("snap.util.getattr.fontSize", b)(-1), eve.on("snap.util.getattr.font-size", b)(-1)
            }), S.plugin(function(e, t, n, i, r) {
                var s = /\S+/g,
                    a = String,
                    o = t.prototype;
                o.addClass = function(e) {
                    var t, n, i, r = a(e || "").match(s) || [],
                        o = this.node,
                        l = o.className.baseVal,
                        u = l.match(s) || [];
                    if (r.length) {
                        for (t = 0; n = r[t++];) ~u.indexOf(n) || u.push(n);
                        l != (i = u.join(" ")) && (o.className.baseVal = i)
                    }
                    return this
                }, o.removeClass = function(e) {
                    var t, n, i, r, o = a(e || "").match(s) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(s) || [];
                    if (c.length) {
                        for (t = 0; i = o[t++];) ~(n = c.indexOf(i)) && c.splice(n, 1);
                        u != (r = c.join(" ")) && (l.className.baseVal = r)
                    }
                    return this
                }, o.hasClass = function(e) {
                    return !!~(this.node.className.baseVal.match(s) || []).indexOf(e)
                }, o.toggleClass = function(e, t) {
                    if (null != t) return t ? this.addClass(e) : this.removeClass(e);
                    var n, i, r, a, o = (e || "").match(s) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(s) || [];
                    for (n = 0; r = o[n++];) ~(i = c.indexOf(r)) ? c.splice(i, 1) : c.push(r);
                    return u != (a = c.join(" ")) && (l.className.baseVal = a), this
                }
            }), S.plugin(function(e, t, n, i, r) {
                var s = {
                        "+": function(e, t) {
                            return e + t
                        },
                        "-": function(e, t) {
                            return e - t
                        },
                        "/": function(e, t) {
                            return e / t
                        },
                        "*": function(e, t) {
                            return e * t
                        }
                    },
                    a = String,
                    o = /[a-z]+$/i,
                    l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;

                function u(e) {
                    return e
                }
                eve.on("snap.util.attr", function(e) {
                    var t = a(e).match(l);
                    if (t) {
                        var n = eve.nt(),
                            i = n.substring(n.lastIndexOf(".") + 1),
                            r = this.attr(i),
                            u = {};
                        eve.stop();
                        var c = t[3] || "",
                            d = r.match(o),
                            f = s[t[1]];
                        if (e = d && d == c ? f(parseFloat(r), +t[2]) : (r = this.asPX(i), f(this.asPX(i), this.asPX(i, t[2] + c))), isNaN(r) || isNaN(e)) return;
                        u[i] = e, this.attr(u)
                    }
                })(-10), eve.on("snap.util.equal", function(e, t) {
                    var n = a(this.attr(e) || ""),
                        i = a(t).match(l);
                    if (i) {
                        eve.stop();
                        var r = i[3] || "",
                            c = n.match(o),
                            d = s[i[1]];
                        return c && c == r ? {
                            from: parseFloat(n),
                            to: d(parseFloat(n), +i[2]),
                            f: function(e) {
                                return function(t) {
                                    return +t.toFixed(3) + e
                                }
                            }(c)
                        } : {
                            from: n = this.asPX(e),
                            to: d(n, this.asPX(e, i[2] + r)),
                            f: u
                        }
                    }
                })(-10)
            }), S.plugin(function(e, t, n, i, r) {
                var s = n.prototype,
                    a = e.is;
                s.rect = function(e, t, n, i, r, s) {
                    var o;
                    return null == s && (s = r), a(e, "object") && "[object Object]" == e ? o = e : null != e && (o = {
                        x: e,
                        y: t,
                        width: n,
                        height: i
                    }, null != r && (o.rx = r, o.ry = s)), this.el("rect", o)
                }, s.circle = function(e, t, n) {
                    var i;
                    return a(e, "object") && "[object Object]" == e ? i = e : null != e && (i = {
                        cx: e,
                        cy: t,
                        r: n
                    }), this.el("circle", i)
                };
                var o, l = function(e, t) {
                    var n = i.doc.createElement("img"),
                        r = i.doc.body;
                    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
                        t.call(n), n.onload = n.onerror = null, r.removeChild(n)
                    }, n.onerror = u, r.appendChild(n), n.src = e
                };

                function u() {
                    this.parentNode.removeChild(this)
                }

                function c() {
                    return this.selectAll("stop")
                }

                function d(t, n) {
                    var i = o("stop"),
                        r = {
                            offset: +n + "%"
                        };
                    t = e.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), o(i, r);
                    for (var s, a = this.stops(), l = 0; l < a.length; l++)
                        if (n < parseFloat(a[l].attr("offset"))) {
                            this.node.insertBefore(i, a[l].node), s = !0;
                            break
                        }
                    return s || this.node.appendChild(i), this
                }

                function f() {
                    if ("linearGradient" == this.type) {
                        var t = o(this.node, "x1") || 0,
                            n = o(this.node, "x2") || 1,
                            i = o(this.node, "y1") || 0,
                            r = o(this.node, "y2") || 0;
                        return e._.box(t, i, math.abs(n - t), math.abs(r - i))
                    }
                    var s = this.node.cx || .5,
                        a = this.node.cy || .5,
                        l = this.node.r || 0;
                    return e._.box(s - l, a - l, 2 * l, 2 * l)
                }

                function h(t) {
                    var n = t,
                        i = this.stops();
                    if ("string" == typeof t && (n = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), e.is(n, "array")) {
                        for (var r = 0; r < i.length; r++)
                            if (n[r]) {
                                var s = e.color(n[r].color),
                                    a = {
                                        offset: n[r].offset + "%"
                                    };
                                a["stop-color"] = s.hex, s.opacity < 1 && (a["stop-opacity"] = s.opacity), i[r].attr(a)
                            } else i[r].remove();
                        for (r = i.length; r < n.length; r++) this.addStop(n[r].color, n[r].offset);
                        return this
                    }
                }

                function p(t, n, i, r, s) {
                    var a = e._.make("linearGradient", t);
                    return a.stops = c, a.addStop = d, a.getBBox = f, a.setStops = h, null != n && o(a.node, {
                        x1: n,
                        y1: i,
                        x2: r,
                        y2: s
                    }), a
                }

                function g(t, n, i, r, s, a) {
                    var l = e._.make("radialGradient", t);
                    return l.stops = c, l.addStop = d, l.getBBox = f, null != n && o(l.node, {
                        cx: n,
                        cy: i,
                        r: r
                    }), null != s && null != a && o(l.node, {
                        fx: s,
                        fy: a
                    }), l
                }
                s.image = function(t, n, i, r, s) {
                    var o = this.el("image");
                    if (a(t, "object") && "src" in t) o.attr(t);
                    else if (null != t) {
                        var u = {
                            "xlink:href": t,
                            preserveAspectRatio: "none"
                        };
                        null != n && null != i && (u.x = n, u.y = i), null != r && null != s ? (u.width = r, u.height = s) : l(t, function() {
                            e._.$(o.node, {
                                width: this.offsetWidth,
                                height: this.offsetHeight
                            })
                        }), e._.$(o.node, u)
                    }
                    return o
                }, s.ellipse = function(e, t, n, i) {
                    var r;
                    return a(e, "object") && "[object Object]" == e ? r = e : null != e && (r = {
                        cx: e,
                        cy: t,
                        rx: n,
                        ry: i
                    }), this.el("ellipse", r)
                }, s.path = function(e) {
                    var t;
                    return a(e, "object") && !a(e, "array") ? t = e : e && (t = {
                        d: e
                    }), this.el("path", t)
                }, s.group = s.g = function(e) {
                    var t = this.el("g");
                    return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
                }, s.svg = function(e, t, n, i, r, s, o, l) {
                    var u = {};
                    return a(e, "object") && null == t ? u = e : (null != e && (u.x = e), null != t && (u.y = t), null != n && (u.width = n), null != i && (u.height = i), null != r && null != s && null != o && null != l && (u.viewBox = [r, s, o, l])), this.el("svg", u)
                }, s.mask = function(e) {
                    var t = this.el("mask");
                    return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
                }, s.ptrn = function(e, t, n, i, r, s, o, l) {
                    if (a(e, "object")) var u = e;
                    else u = {
                        patternUnits: "userSpaceOnUse"
                    }, e && (u.x = e), t && (u.y = t), null != n && (u.width = n), null != i && (u.height = i), u.viewBox = null != r && null != s && null != o && null != l ? [r, s, o, l] : [e || 0, t || 0, n || 0, i || 0];
                    return this.el("pattern", u)
                }, s.use = function(n) {
                    return null != n ? (n instanceof t && (n.attr("id") || n.attr({
                        id: e._.id(n)
                    }), n = n.attr("id")), "#" == String(n).charAt() && (n = n.substring(1)), this.el("use", {
                        "xlink:href": "#" + n
                    })) : t.prototype.use.call(this)
                }, s.symbol = function(e, t, n, i) {
                    var r = {};
                    return null != e && null != t && null != n && null != i && (r.viewBox = [e, t, n, i]), this.el("symbol", r)
                }, s.text = function(e, t, n) {
                    var i = {};
                    return a(e, "object") ? i = e : null != e && (i = {
                        x: e,
                        y: t,
                        text: n || ""
                    }), this.el("text", i)
                }, s.line = function(e, t, n, i) {
                    var r = {};
                    return a(e, "object") ? r = e : null != e && (r = {
                        x1: e,
                        x2: n,
                        y1: t,
                        y2: i
                    }), this.el("line", r)
                }, s.polyline = function(e) {
                    1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
                    var t = {};
                    return a(e, "object") && !a(e, "array") ? t = e : null != e && (t = {
                        points: e
                    }), this.el("polyline", t)
                }, s.polygon = function(e) {
                    1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
                    var t = {};
                    return a(e, "object") && !a(e, "array") ? t = e : null != e && (t = {
                        points: e
                    }), this.el("polygon", t)
                }, o = e._.$, s.gradient = function(e) {
                    return function(e, t) {
                        var n, i = eve("snap.util.grad.parse", null, t).firstDefined();
                        if (!i) return null;
                        i.params.unshift(e), n = "l" == i.type.toLowerCase() ? p.apply(0, i.params) : g.apply(0, i.params), i.type != i.type.toLowerCase() && o(n.node, {
                            gradientUnits: "userSpaceOnUse"
                        });
                        for (var r = i.stops, s = r.length, a = 0; a < s; a++) {
                            var l = r[a];
                            n.addStop(l.color, l.offset)
                        }
                        return n
                    }(this.defs, e)
                }, s.gradientLinear = function(e, t, n, i) {
                    return p(this.defs, e, t, n, i)
                }, s.gradientRadial = function(e, t, n, i, r) {
                    return g(this.defs, e, t, n, i, r)
                }, s.toString = function() {
                    var t, n = this.node.ownerDocument,
                        i = n.createDocumentFragment(),
                        r = n.createElement("div"),
                        s = this.node.cloneNode(!0);
                    return i.appendChild(r), r.appendChild(s), e._.$(s, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), t = r.innerHTML, i.removeChild(i.firstChild), t
                }, s.toDataURL = function() {
                    if (window && window.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
                }, s.clear = function() {
                    for (var e, t = this.node.firstChild; t;) e = t.nextSibling, "defs" != t.tagName ? t.parentNode.removeChild(t) : s.clear.call({
                        node: t
                    }), t = e
                }
            }), S.plugin(function(e, t, n, i) {
                var r = t.prototype,
                    s = e.is,
                    a = e._.clone,
                    o = "hasOwnProperty",
                    l = /,?([a-z]),?/gi,
                    u = parseFloat,
                    c = Math,
                    d = c.PI,
                    f = c.min,
                    h = c.max,
                    p = c.pow,
                    g = c.abs;

                function m(e) {
                    var t = m.ps = m.ps || {};
                    return t[e] ? t[e].sleep = 100 : t[e] = {
                        sleep: 100
                    }, setTimeout(function() {
                        for (var n in t) t[o](n) && n != e && (t[n].sleep--, t[n].sleep || delete t[n])
                    }), t[e]
                }

                function v(e, t, n, i) {
                    return null == e && (e = t = n = i = 0), null == t && (t = e.y, n = e.width, i = e.height, e = e.x), {
                        x: e,
                        y: t,
                        width: n,
                        w: n,
                        height: i,
                        h: i,
                        x2: e + n,
                        y2: t + i,
                        cx: e + n / 2,
                        cy: t + i / 2,
                        r1: c.min(n, i) / 2,
                        r2: c.max(n, i) / 2,
                        r0: c.sqrt(n * n + i * i) / 2,
                        path: M(e, t, n, i),
                        vb: [e, t, n, i].join(" ")
                    }
                }

                function _() {
                    return this.join(",").replace(l, "$1")
                }

                function y(e) {
                    var t = a(e);
                    return t.toString = _, t
                }

                function b(e, t, n, i, r, s, a, o, l) {
                    return null == l ? F(e, t, n, i, r, s, a, o) : E(e, t, n, i, r, s, a, o, function(e, t, n, i, r, s, a, o, l) {
                        if (!(l < 0 || F(e, t, n, i, r, s, a, o) < l)) {
                            var u, c = .5,
                                d = 1 - c;
                            for (u = F(e, t, n, i, r, s, a, o, d); .01 < g(u - l);) u = F(e, t, n, i, r, s, a, o, d += (u < l ? 1 : -1) * (c /= 2));
                            return d
                        }
                    }(e, t, n, i, r, s, a, o, l))
                }

                function x(n, i) {
                    function r(e) {
                        return +(+e).toFixed(3)
                    }
                    return e._.cacher(function(e, s, a) {
                        e instanceof t && (e = e.attr("d"));
                        for (var o, l, u, c, d, f = "", h = {}, p = 0, g = 0, m = (e = q(e)).length; g < m; g++) {
                            if ("M" == (u = e[g])[0]) o = +u[1], l = +u[2];
                            else {
                                if (s < p + (c = b(o, l, u[1], u[2], u[3], u[4], u[5], u[6]))) {
                                    if (i && !h.start) {
                                        if (f += ["C" + r((d = b(o, l, u[1], u[2], u[3], u[4], u[5], u[6], s - p)).start.x), r(d.start.y), r(d.m.x), r(d.m.y), r(d.x), r(d.y)], a) return f;
                                        h.start = f, f = ["M" + r(d.x), r(d.y) + "C" + r(d.n.x), r(d.n.y), r(d.end.x), r(d.end.y), r(u[5]), r(u[6])].join(), p += c, o = +u[5], l = +u[6];
                                        continue
                                    }
                                    if (!n && !i) return b(o, l, u[1], u[2], u[3], u[4], u[5], u[6], s - p)
                                }
                                p += c, o = +u[5], l = +u[6]
                            }
                            f += u.shift() + u
                        }
                        return h.end = f, n ? p : i ? h : E(o, l, u[0], u[1], u[2], u[3], u[4], u[5], 1)
                    }, null, e._.clone)
                }
                var S = x(1),
                    T = x(),
                    w = x(0, 1);

                function E(e, t, n, i, r, s, a, o, l) {
                    var u = 1 - l,
                        f = p(u, 3),
                        h = p(u, 2),
                        g = l * l,
                        m = g * l,
                        v = e + 2 * l * (n - e) + g * (r - 2 * n + e),
                        _ = t + 2 * l * (i - t) + g * (s - 2 * i + t),
                        y = n + 2 * l * (r - n) + g * (a - 2 * r + n),
                        b = i + 2 * l * (s - i) + g * (o - 2 * s + i);
                    return {
                        x: f * e + 3 * h * l * n + 3 * u * l * l * r + m * a,
                        y: f * t + 3 * h * l * i + 3 * u * l * l * s + m * o,
                        m: {
                            x: v,
                            y: _
                        },
                        n: {
                            x: y,
                            y: b
                        },
                        start: {
                            x: u * e + l * n,
                            y: u * t + l * i
                        },
                        end: {
                            x: u * r + l * a,
                            y: u * s + l * o
                        },
                        alpha: 90 - 180 * c.atan2(v - y, _ - b) / d
                    }
                }

                function C(t, n, i, r, s, a, o, l) {
                    e.is(t, "array") || (t = [t, n, i, r, s, a, o, l]);
                    var u = U.apply(null, t);
                    return v(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
                }

                function A(e, t, n) {
                    return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
                }

                function k(e, t) {
                    return e = v(e), A(t = v(t), e.x, e.y) || A(t, e.x2, e.y) || A(t, e.x, e.y2) || A(t, e.x2, e.y2) || A(e, t.x, t.y) || A(e, t.x2, t.y) || A(e, t.x, t.y2) || A(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
                }

                function P(e, t, n, i, r) {
                    return e * (e * (-3 * t + 9 * n - 9 * i + 3 * r) + 6 * t - 12 * n + 6 * i) - 3 * t + 3 * n
                }

                function F(e, t, n, i, r, s, a, o, l) {
                    null == l && (l = 1);
                    for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, p = 0; p < 12; p++) {
                        var g = u * d[p] + u,
                            m = P(g, e, n, r, a),
                            v = P(g, t, i, s, o),
                            _ = m * m + v * v;
                        h += f[p] * c.sqrt(_)
                    }
                    return u * h
                }

                function R(e, t, n, i, r, s, a, o) {
                    if (!(h(e, n) < f(r, a) || f(e, n) > h(r, a) || h(t, i) < f(s, o) || f(t, i) > h(s, o))) {
                        var l = (e - n) * (s - o) - (t - i) * (r - a);
                        if (l) {
                            var u = ((e * i - t * n) * (r - a) - (e - n) * (r * o - s * a)) / l,
                                c = ((e * i - t * n) * (s - o) - (t - i) * (r * o - s * a)) / l,
                                d = +u.toFixed(2),
                                p = +c.toFixed(2);
                            if (!(d < +f(e, n).toFixed(2) || d > +h(e, n).toFixed(2) || d < +f(r, a).toFixed(2) || d > +h(r, a).toFixed(2) || p < +f(t, i).toFixed(2) || p > +h(t, i).toFixed(2) || p < +f(s, o).toFixed(2) || p > +h(s, o).toFixed(2))) return {
                                x: u,
                                y: c
                            }
                        }
                    }
                }

                function I(e, t, n) {
                    if (!k(C(e), C(t))) return n ? 0 : [];
                    for (var i = ~~(F.apply(0, e) / 8), r = ~~(F.apply(0, t) / 8), s = [], a = [], o = {}, l = n ? 0 : [], u = 0; u < 1 + i; u++) {
                        var c = E.apply(0, e.concat(u / i));
                        s.push({
                            x: c.x,
                            y: c.y,
                            t: u / i
                        })
                    }
                    for (u = 0; u < 1 + r; u++) c = E.apply(0, t.concat(u / r)), a.push({
                        x: c.x,
                        y: c.y,
                        t: u / r
                    });
                    for (u = 0; u < i; u++)
                        for (var d = 0; d < r; d++) {
                            var f = s[u],
                                h = s[u + 1],
                                p = a[d],
                                m = a[d + 1],
                                v = g(h.x - f.x) < .001 ? "y" : "x",
                                _ = g(m.x - p.x) < .001 ? "y" : "x",
                                y = R(f.x, f.y, h.x, h.y, p.x, p.y, m.x, m.y);
                            if (y) {
                                if (o[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
                                o[y.x.toFixed(4)] = y.y.toFixed(4);
                                var b = f.t + g((y[v] - f[v]) / (h[v] - f[v])) * (h.t - f.t),
                                    x = p.t + g((y[_] - p[_]) / (m[_] - p[_])) * (m.t - p.t);
                                0 <= b && b <= 1 && 0 <= x && x <= 1 && (n ? l++ : l.push({
                                    x: y.x,
                                    y: y.y,
                                    t1: b,
                                    t2: x
                                }))
                            }
                        }
                    return l
                }

                function D(e, t, n) {
                    e = q(e), t = q(t);
                    for (var i, r, s, a, o, l, u, c, d, f, h = n ? 0 : [], p = 0, g = e.length; p < g; p++) {
                        var m = e[p];
                        if ("M" == m[0]) i = o = m[1], r = l = m[2];
                        else {
                            r = "C" == m[0] ? (i = (d = [i, r].concat(m.slice(1)))[6], d[7]) : (d = [i, r, i, r, o, l, o, l], i = o, l);
                            for (var v = 0, _ = t.length; v < _; v++) {
                                var y = t[v];
                                if ("M" == y[0]) s = u = y[1], a = c = y[2];
                                else {
                                    a = "C" == y[0] ? (s = (f = [s, a].concat(y.slice(1)))[6], f[7]) : (f = [s, a, s, a, u, c, u, c], s = u, c);
                                    var b = I(d, f, n);
                                    if (n) h += b;
                                    else {
                                        for (var x = 0, S = b.length; x < S; x++) b[x].segment1 = p, b[x].segment2 = v, b[x].bez1 = d, b[x].bez2 = f;
                                        h = h.concat(b)
                                    }
                                }
                            }
                        }
                    }
                    return h
                }

                function O(e) {
                    var t = m(e);
                    if (t.bbox) return a(t.bbox);
                    if (!e) return v();
                    for (var n, i = 0, r = 0, s = [], o = [], l = 0, u = (e = q(e)).length; l < u; l++)
                        if ("M" == (n = e[l])[0]) i = n[1], r = n[2], s.push(i), o.push(r);
                        else {
                            var c = U(i, r, n[1], n[2], n[3], n[4], n[5], n[6]);
                            s = s.concat(c.min.x, c.max.x), o = o.concat(c.min.y, c.max.y), i = n[5], r = n[6]
                        }
                    var d = f.apply(0, s),
                        p = f.apply(0, o),
                        g = v(d, p, h.apply(0, s) - d, h.apply(0, o) - p);
                    return t.bbox = a(g), g
                }

                function M(e, t, n, i, r) {
                    if (r) return [
                        ["M", +e + +r, t],
                        ["l", n - 2 * r, 0],
                        ["a", r, r, 0, 0, 1, r, r],
                        ["l", 0, i - 2 * r],
                        ["a", r, r, 0, 0, 1, -r, r],
                        ["l", 2 * r - n, 0],
                        ["a", r, r, 0, 0, 1, -r, -r],
                        ["l", 0, 2 * r - i],
                        ["a", r, r, 0, 0, 1, r, -r],
                        ["z"]
                    ];
                    var s = [
                        ["M", e, t],
                        ["l", n, 0],
                        ["l", 0, i],
                        ["l", -n, 0],
                        ["z"]
                    ];
                    return s.toString = _, s
                }

                function B(e, t, n, i, r) {
                    if (null == r && null == i && (i = n), e = +e, t = +t, n = +n, i = +i, null != r) var s = Math.PI / 180,
                        a = e + n * Math.cos(-i * s),
                        o = e + n * Math.cos(-r * s),
                        l = [
                            ["M", a, t + n * Math.sin(-i * s)],
                            ["A", n, n, 0, +(180 < r - i), 0, o, t + n * Math.sin(-r * s)]
                        ];
                    else l = [
                        ["M", e, t],
                        ["m", 0, -i],
                        ["a", n, i, 0, 1, 1, 0, 2 * i],
                        ["a", n, i, 0, 1, 1, 0, -2 * i],
                        ["z"]
                    ];
                    return l.toString = _, l
                }
                var G = e._unit2px,
                    N = {
                        path: function(e) {
                            return e.attr("path")
                        },
                        circle: function(e) {
                            var t = G(e);
                            return B(t.cx, t.cy, t.r)
                        },
                        ellipse: function(e) {
                            var t = G(e);
                            return B(t.cx || 0, t.cy || 0, t.rx, t.ry)
                        },
                        rect: function(e) {
                            var t = G(e);
                            return M(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry)
                        },
                        image: function(e) {
                            var t = G(e);
                            return M(t.x || 0, t.y || 0, t.width, t.height)
                        },
                        line: function(e) {
                            return "M" + [e.attr("x1") || 0, e.attr("y1") || 0, e.attr("x2"), e.attr("y2")]
                        },
                        polyline: function(e) {
                            return "M" + e.attr("points")
                        },
                        polygon: function(e) {
                            return "M" + e.attr("points") + "z"
                        },
                        deflt: function(e) {
                            var t = e.node.getBBox();
                            return M(t.x, t.y, t.width, t.height)
                        }
                    };

                function L(t) {
                    var n = m(t);
                    if (n.abs) return y(n.abs);
                    if (s(t, "array") && s(t && t[0], "array") || (t = e.parsePathString(t)), !t || !t.length) return [
                        ["M", 0, 0]
                    ];
                    var i, r = [],
                        a = 0,
                        o = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                    "M" == t[0][0] && (l = a = +t[0][1], u = o = +t[0][2], c++, r[0] = ["M", a, o]);
                    for (var d, f, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = c, g = t.length; p < g; p++) {
                        if (r.push(d = []), (i = (f = t[p])[0]) != i.toUpperCase()) switch (d[0] = i.toUpperCase(), d[0]) {
                                case "A":
                                    d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = +f[6] + a, d[7] = +f[7] + o;
                                    break;
                                case "V":
                                    d[1] = +f[1] + o;
                                    break;
                                case "H":
                                    d[1] = +f[1] + a;
                                    break;
                                case "R":
                                    for (var v = [a, o].concat(f.slice(1)), b = 2, x = v.length; b < x; b++) v[b] = +v[b] + a, v[++b] = +v[b] + o;
                                    r.pop(), r = r.concat(j(v, h));
                                    break;
                                case "O":
                                    r.pop(), (v = B(a, o, f[1], f[2])).push(v[0]), r = r.concat(v);
                                    break;
                                case "U":
                                    r.pop(), r = r.concat(B(a, o, f[1], f[2], f[3])), d = ["U"].concat(r[r.length - 1].slice(-2));
                                    break;
                                case "M":
                                    l = +f[1] + a, u = +f[2] + o;
                                default:
                                    for (b = 1, x = f.length; b < x; b++) d[b] = +f[b] + (b % 2 ? a : o)
                            } else if ("R" == i) v = [a, o].concat(f.slice(1)), r.pop(), r = r.concat(j(v, h)), d = ["R"].concat(f.slice(-2));
                            else if ("O" == i) r.pop(), (v = B(a, o, f[1], f[2])).push(v[0]), r = r.concat(v);
                        else if ("U" == i) r.pop(), r = r.concat(B(a, o, f[1], f[2], f[3])), d = ["U"].concat(r[r.length - 1].slice(-2));
                        else
                            for (var S = 0, T = f.length; S < T; S++) d[S] = f[S];
                        if ("O" != (i = i.toUpperCase())) switch (d[0]) {
                            case "Z":
                                a = +l, o = +u;
                                break;
                            case "H":
                                a = d[1];
                                break;
                            case "V":
                                o = d[1];
                                break;
                            case "M":
                                l = d[d.length - 2], u = d[d.length - 1];
                            default:
                                a = d[d.length - 2], o = d[d.length - 1]
                        }
                    }
                    return r.toString = _, n.abs = y(r), r
                }

                function V(e, t, n, i) {
                    return [e, t, n, i, n, i]
                }

                function z(e, t, n, i, r, s) {
                    return [1 / 3 * e + 2 / 3 * n, 1 / 3 * t + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * s + 2 / 3 * i, r, s]
                }

                function U(e, t, n, i, r, s, a, o) {
                    for (var l, u, d, p, m, v, _, y, b = [], x = [
                            [],
                            []
                        ], S = 0; S < 2; ++S)
                        if (d = 0 == S ? (u = 6 * e - 12 * n + 6 * r, l = -3 * e + 9 * n - 9 * r + 3 * a, 3 * n - 3 * e) : (u = 6 * t - 12 * i + 6 * s, l = -3 * t + 9 * i - 9 * s + 3 * o, 3 * i - 3 * t), g(l) < 1e-12) {
                            if (g(u) < 1e-12) continue;
                            0 < (p = -d / u) && p < 1 && b.push(p)
                        } else _ = u * u - 4 * d * l, y = c.sqrt(_), _ < 0 || (0 < (m = (-u + y) / (2 * l)) && m < 1 && b.push(m), 0 < (v = (-u - y) / (2 * l)) && v < 1 && b.push(v));
                    for (var T, w = b.length, E = w; w--;) T = 1 - (p = b[w]), x[0][w] = T * T * T * e + 3 * T * T * p * n + 3 * T * p * p * r + p * p * p * a, x[1][w] = T * T * T * t + 3 * T * T * p * i + 3 * T * p * p * s + p * p * p * o;
                    return x[0][E] = e, x[1][E] = t, x[0][E + 1] = a, x[1][E + 1] = o, x[0].length = x[1].length = E + 2, {
                        min: {
                            x: f.apply(0, x[0]),
                            y: f.apply(0, x[1])
                        },
                        max: {
                            x: h.apply(0, x[0]),
                            y: h.apply(0, x[1])
                        }
                    }
                }

                function q(t, n) {
                    var i = !n && m(t);
                    if (!n && i.curve) return y(i.curve);

                    function r(t, n, i) {
                        var r, s;
                        if (!t) return ["C", n.x, n.y, n.x, n.y, n.x, n.y];
                        switch (t[0] in {
                            T: 1,
                            Q: 1
                        } || (n.qx = n.qy = null), t[0]) {
                            case "M":
                                n.X = t[1], n.Y = t[2];
                                break;
                            case "A":
                                t = ["C"].concat(function t(n, i, r, s, a, o, l, u, f, h) {
                                    var p, m = 120 * d / 180,
                                        v = d / 180 * (+a || 0),
                                        _ = [],
                                        y = e._.cacher(function(e, t, n) {
                                            return {
                                                x: e * c.cos(n) - t * c.sin(n),
                                                y: e * c.sin(n) + t * c.cos(n)
                                            }
                                        });
                                    if (!r || !s) return [n, i, u, f, u, f];
                                    if (h) k = h[0], P = h[1], C = h[2], A = h[3];
                                    else {
                                        n = (p = y(n, i, -v)).x, i = p.y, u = (p = y(u, f, -v)).x, f = p.y, c.cos(d / 180 * a), c.sin(d / 180 * a);
                                        var b = (n - u) / 2,
                                            x = (i - f) / 2,
                                            S = b * b / (r * r) + x * x / (s * s);
                                        1 < S && (r *= S = c.sqrt(S), s *= S);
                                        var T = r * r,
                                            w = s * s,
                                            E = (o == l ? -1 : 1) * c.sqrt(g((T * w - T * x * x - w * b * b) / (T * x * x + w * b * b))),
                                            C = E * r * x / s + (n + u) / 2,
                                            A = E * -s * b / r + (i + f) / 2,
                                            k = c.asin(((i - A) / s).toFixed(9)),
                                            P = c.asin(((f - A) / s).toFixed(9));
                                        (k = n < C ? d - k : k) < 0 && (k = 2 * d + k), (P = u < C ? d - P : P) < 0 && (P = 2 * d + P), l && P < k && (k -= 2 * d), !l && k < P && (P -= 2 * d)
                                    }
                                    var F = P - k;
                                    if (g(F) > m) {
                                        var R = P,
                                            I = u,
                                            D = f;
                                        P = k + m * (l && k < P ? 1 : -1), _ = t(u = C + r * c.cos(P), f = A + s * c.sin(P), r, s, a, 0, l, I, D, [P, R, C, A])
                                    }
                                    F = P - k;
                                    var O = c.cos(k),
                                        M = c.sin(k),
                                        B = c.cos(P),
                                        G = c.sin(P),
                                        N = c.tan(F / 4),
                                        L = 4 / 3 * r * N,
                                        V = 4 / 3 * s * N,
                                        z = [n, i],
                                        U = [n + L * M, i - V * O],
                                        q = [u + L * G, f - V * B],
                                        j = [u, f];
                                    if (U[0] = 2 * z[0] - U[0], U[1] = 2 * z[1] - U[1], h) return [U, q, j].concat(_);
                                    for (var K = [], H = 0, X = (_ = [U, q, j].concat(_).join().split(",")).length; H < X; H++) K[H] = H % 2 ? y(_[H - 1], _[H], v).y : y(_[H], _[H + 1], v).x;
                                    return K
                                }.apply(0, [n.x, n.y].concat(t.slice(1))));
                                break;
                            case "S":
                                s = "C" == i || "S" == i ? (r = 2 * n.x - n.bx, 2 * n.y - n.by) : (r = n.x, n.y), t = ["C", r, s].concat(t.slice(1));
                                break;
                            case "T":
                                "Q" == i || "T" == i ? (n.qx = 2 * n.x - n.qx, n.qy = 2 * n.y - n.qy) : (n.qx = n.x, n.qy = n.y), t = ["C"].concat(z(n.x, n.y, n.qx, n.qy, t[1], t[2]));
                                break;
                            case "Q":
                                n.qx = t[1], n.qy = t[2], t = ["C"].concat(z(n.x, n.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"].concat(V(n.x, n.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"].concat(V(n.x, n.y, t[1], n.y));
                                break;
                            case "V":
                                t = ["C"].concat(V(n.x, n.y, n.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"].concat(V(n.x, n.y, n.X, n.Y))
                        }
                        return t
                    }

                    function s(e, t) {
                        if (7 < e[t].length) {
                            e[t].shift();
                            for (var n = e[t]; n.length;) v[t] = "A", l && (_[t] = "A"), e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
                            e.splice(t, 1), T = h(o.length, l && l.length || 0)
                        }
                    }

                    function a(e, t, n, i, r) {
                        e && t && "M" == e[r][0] && "M" != t[r][0] && (t.splice(r, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = e[r][1], n.y = e[r][2], T = h(o.length, l && l.length || 0))
                    }
                    for (var o = L(t), l = n && L(n), f = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, p = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, v = [], _ = [], b = "", x = "", S = 0, T = h(o.length, l && l.length || 0); S < T; S++) {
                        o[S] && (b = o[S][0]), "C" != b && (v[S] = b, S && (x = v[S - 1])), o[S] = r(o[S], f, x), "A" != v[S] && "C" == b && (v[S] = "C"), s(o, S), l && (l[S] && (b = l[S][0]), "C" != b && (_[S] = b, S && (x = _[S - 1])), l[S] = r(l[S], p, x), "A" != _[S] && "C" == b && (_[S] = "C"), s(l, S)), a(o, l, f, p, S), a(l, o, p, f, S);
                        var w = o[S],
                            E = l && l[S],
                            C = w.length,
                            A = l && E.length;
                        f.x = w[C - 2], f.y = w[C - 1], f.bx = u(w[C - 4]) || f.x, f.by = u(w[C - 3]) || f.y, p.bx = l && (u(E[A - 4]) || p.x), p.by = l && (u(E[A - 3]) || p.y), p.x = l && E[A - 2], p.y = l && E[A - 1]
                    }
                    return l || (i.curve = y(o)), l ? [o, l] : o
                }

                function j(e, t) {
                    for (var n = [], i = 0, r = e.length; i < r - 2 * !t; i += 2) {
                        var s = [{
                            x: +e[i - 2],
                            y: +e[i - 1]
                        }, {
                            x: +e[i],
                            y: +e[i + 1]
                        }, {
                            x: +e[i + 2],
                            y: +e[i + 3]
                        }, {
                            x: +e[i + 4],
                            y: +e[i + 5]
                        }];
                        t ? i ? r - 4 == i ? s[3] = {
                            x: +e[0],
                            y: +e[1]
                        } : r - 2 == i && (s[2] = {
                            x: +e[0],
                            y: +e[1]
                        }, s[3] = {
                            x: +e[2],
                            y: +e[3]
                        }) : s[0] = {
                            x: +e[r - 2],
                            y: +e[r - 1]
                        } : r - 4 == i ? s[3] = s[2] : i || (s[0] = {
                            x: +e[i],
                            y: +e[i + 1]
                        }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
                    }
                    return n
                }
                e.path = m, e.path.getTotalLength = S, e.path.getPointAtLength = T, e.path.getSubpath = function(e, t, n) {
                    if (this.getTotalLength(e) - n < 1e-6) return w(e, t).end;
                    var i = w(e, n, 1);
                    return t ? w(i, t).end : i
                }, r.getTotalLength = function() {
                    if (this.node.getTotalLength) return this.node.getTotalLength()
                }, r.getPointAtLength = function(e) {
                    return T(this.attr("d"), e)
                }, r.getSubpath = function(t, n) {
                    return e.path.getSubpath(this.attr("d"), t, n)
                }, e._.box = v, e.path.findDotsAtSegment = E, e.path.bezierBBox = C, e.path.isPointInsideBBox = A, e.closest = function(t, n, i, r) {
                    for (var s = 100, a = v(t - s / 2, n - s / 2, s, s), o = [], l = i[0].hasOwnProperty("x") ? function(e) {
                            return {
                                x: i[e].x,
                                y: i[e].y
                            }
                        } : function(e) {
                            return {
                                x: i[e],
                                y: r[e]
                            }
                        }, u = 0; s <= 1e6 && !u;) {
                        for (var c = 0, d = i.length; c < d; c++) {
                            var f = l(c);
                            if (A(a, f.x, f.y)) {
                                u++, o.push(f);
                                break
                            }
                        }
                        u || (a = v(t - (s *= 2) / 2, n - s / 2, s, s))
                    }
                    if (1e6 != s) {
                        var h, p = 1 / 0;
                        for (c = 0, d = o.length; c < d; c++) {
                            var g = e.len(t, n, o[c].x, o[c].y);
                            g < p && (p = g, o[c].len = g, h = o[c])
                        }
                        return h
                    }
                }, e.path.isBBoxIntersect = k, e.path.intersection = function(e, t) {
                    return D(e, t)
                }, e.path.intersectionNumber = function(e, t) {
                    return D(e, t, 1)
                }, e.path.isPointInside = function(e, t, n) {
                    var i = O(e);
                    return A(i, t, n) && D(e, [
                        ["M", t, n],
                        ["H", i.x2 + 10]
                    ], 1) % 2 == 1
                }, e.path.getBBox = O, e.path.get = N, e.path.toRelative = function(t) {
                    var n = m(t),
                        i = String.prototype.toLowerCase;
                    if (n.rel) return y(n.rel);
                    e.is(t, "array") && e.is(t && t[0], "array") || (t = e.parsePathString(t));
                    var r = [],
                        s = 0,
                        a = 0,
                        o = 0,
                        l = 0,
                        u = 0;
                    "M" == t[0][0] && (o = s = t[0][1], l = a = t[0][2], u++, r.push(["M", s, a]));
                    for (var c = u, d = t.length; c < d; c++) {
                        var f = r[c] = [],
                            h = t[c];
                        if (h[0] != i.call(h[0])) switch (f[0] = i.call(h[0]), f[0]) {
                            case "a":
                                f[1] = h[1], f[2] = h[2], f[3] = h[3], f[4] = h[4], f[5] = h[5], f[6] = +(h[6] - s).toFixed(3), f[7] = +(h[7] - a).toFixed(3);
                                break;
                            case "v":
                                f[1] = +(h[1] - a).toFixed(3);
                                break;
                            case "m":
                                o = h[1], l = h[2];
                            default:
                                for (var p = 1, g = h.length; p < g; p++) f[p] = +(h[p] - (p % 2 ? s : a)).toFixed(3)
                        } else {
                            f = r[c] = [], "m" == h[0] && (o = h[1] + s, l = h[2] + a);
                            for (var v = 0, b = h.length; v < b; v++) r[c][v] = h[v]
                        }
                        var x = r[c].length;
                        switch (r[c][0]) {
                            case "z":
                                s = o, a = l;
                                break;
                            case "h":
                                s += +r[c][x - 1];
                                break;
                            case "v":
                                a += +r[c][x - 1];
                                break;
                            default:
                                s += +r[c][x - 2], a += +r[c][x - 1]
                        }
                    }
                    return r.toString = _, n.rel = y(r), r
                }, e.path.toAbsolute = L, e.path.toCubic = q, e.path.map = function(e, t) {
                    if (!t) return e;
                    var n, i, r, s, a, o, l;
                    for (r = 0, a = (e = q(e)).length; r < a; r++)
                        for (s = 1, o = (l = e[r]).length; s < o; s += 2) n = t.x(l[s], l[s + 1]), i = t.y(l[s], l[s + 1]), l[s] = n, l[s + 1] = i;
                    return e
                }, e.path.toString = _, e.path.clone = y
            }), S.plugin(function(e, t, n, i) {
                function r(e) {
                    if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", e)
                        for (var t = 0, n = e.length; t < n; t++) e[t] && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
                }
                var s = Math.max,
                    a = Math.min,
                    o = r.prototype;
                o.push = function() {
                    for (var e, t, n = 0, i = arguments.length; n < i; n++)(e = arguments[n]) && (this[t = this.items.length] = this.items[t] = e, this.length++);
                    return this
                }, o.pop = function() {
                    return this.length && delete this[this.length--], this.items.pop()
                }, o.forEach = function(e, t) {
                    for (var n = 0, i = this.items.length; n < i; n++)
                        if (!1 === e.call(t, this.items[n], n)) return this;
                    return this
                }, o.animate = function(t, n, i, r) {
                    "function" != typeof i || i.length || (r = i, i = h.linear), t instanceof e._.Animation && (r = t.callback, i = t.easing, n = i.dur, t = t.attr);
                    var s = arguments;
                    if (e.is(t, "array") && e.is(s[s.length - 1], "array")) var a = !0;

                    function o() {
                        l ? this.b = l : l = this.b
                    }
                    var l, u = 0,
                        c = this,
                        d = r && function() {
                            ++u == c.length && r.call(this)
                        };
                    return this.forEach(function(e, r) {
                        eve.once("snap.animcreated." + e.id, o), a ? s[r] && e.animate.apply(e, s[r]) : e.animate(t, n, i, d)
                    })
                }, o.remove = function() {
                    for (; this.length;) this.pop().remove();
                    return this
                }, o.bind = function(e, t, n) {
                    var i = {};
                    if ("function" == typeof t) this.bindings[e] = t;
                    else {
                        var r = n || e;
                        this.bindings[e] = function(e) {
                            i[r] = e, t.attr(i)
                        }
                    }
                    return this
                }, o.attr = function(e) {
                    var t = {};
                    for (var n in e) this.bindings[n] ? this.bindings[n](e[n]) : t[n] = e[n];
                    for (var i = 0, r = this.items.length; i < r; i++) this.items[i].attr(t);
                    return this
                }, o.clear = function() {
                    for (; this.length;) this.pop()
                }, o.splice = function(e, t, n) {
                    e = e < 0 ? s(this.length + e, 0) : e, t = s(0, a(this.length - e, t));
                    var i, o = [],
                        l = [],
                        u = [];
                    for (i = 2; i < arguments.length; i++) u.push(arguments[i]);
                    for (i = 0; i < t; i++) l.push(this[e + i]);
                    for (; i < this.length - e; i++) o.push(this[e + i]);
                    var c = u.length;
                    for (i = 0; i < c + o.length; i++) this.items[e + i] = this[e + i] = i < c ? u[i] : o[i - c];
                    for (i = this.items.length = this.length -= t - c; this[i];) delete this[i++];
                    return new r(l)
                }, o.exclude = function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] == e) return this.splice(t, 1), !0;
                    return !1
                }, o.insertAfter = function(e) {
                    for (var t = this.items.length; t--;) this.items[t].insertAfter(e);
                    return this
                }, o.getBBox = function() {
                    for (var e = [], t = [], n = [], i = [], r = this.items.length; r--;)
                        if (!this.items[r].removed) {
                            var o = this.items[r].getBBox();
                            e.push(o.x), t.push(o.y), n.push(o.x + o.width), i.push(o.y + o.height)
                        }
                    return {
                        x: e = a.apply(0, e),
                        y: t = a.apply(0, t),
                        x2: n = s.apply(0, n),
                        y2: i = s.apply(0, i),
                        width: n - e,
                        height: i - t,
                        cx: e + (n - e) / 2,
                        cy: t + (i - t) / 2
                    }
                }, o.clone = function(e) {
                    e = new r;
                    for (var t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
                    return e
                }, o.toString = function() {
                    return "Snap‘s set"
                }, o.type = "set", e.Set = r, e.set = function() {
                    var e = new r;
                    return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)), e
                }
            }), S.plugin(function(e, t, n, i) {
                var r = {},
                    s = /[%a-z]+$/i,
                    a = String;

                function o(e) {
                    var t = e[0];
                    switch (t.toLowerCase()) {
                        case "t":
                            return [t, 0, 0];
                        case "m":
                            return [t, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
                        case "s":
                            return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
                    }
                }

                function l(e) {
                    return e
                }

                function u(e) {
                    return e.join(" ")
                }

                function c(t) {
                    return e.rgb(t[0], t[1], t[2], t[3])
                }

                function d(e) {
                    var t, n, i, r, s, a, o = 0,
                        l = [];
                    for (t = 0, n = e.length; t < n; t++) {
                        for (s = "[", a = ['"' + e[t][0] + '"'], i = 1, r = e[t].length; i < r; i++) a[i] = "val[" + o++ + "]";
                        s += a + "]", l[t] = s
                    }
                    return Function("val", "return Snap.path.toString.call([" + l + "])")
                }

                function f(e) {
                    for (var t = [], n = 0, i = e.length; n < i; n++)
                        for (var r = 1, s = e[n].length; r < s; r++) t.push(e[n][r]);
                    return t
                }

                function h(e) {
                    return isFinite(e)
                }
                r.stroke = r.fill = "colour", t.prototype.equal = function(e, t) {
                    return eve("snap.util.equal", this, e, t).firstDefined()
                }, eve.on("snap.util.equal", function(t, n) {
                    var i, p, g = a(this.attr(t) || ""),
                        m = this;
                    if ("colour" == r[t]) return i = e.color(g), p = e.color(n), {
                        from: [i.r, i.g, i.b, i.opacity],
                        to: [p.r, p.g, p.b, p.opacity],
                        f: c
                    };
                    if ("viewBox" == t) return {
                        from: i = this.attr(t).vb.split(" ").map(Number),
                        to: p = n.split(" ").map(Number),
                        f: u
                    };
                    if ("transform" == t || "gradientTransform" == t || "patternTransform" == t) return "string" == typeof n && (n = a(n).replace(/\.{3}|\u2026/g, g)),
                        function(t, n, i) {
                            t = t || new e.Matrix, n = n || new e.Matrix, t = e.parseTransformString(t.toTransformString()) || [], n = e.parseTransformString(n.toTransformString()) || [];
                            for (var r, s, a, l, u = Math.max(t.length, n.length), c = [], h = [], p = 0; p < u; p++) {
                                if (a = t[p] || o(n[p]), l = n[p] || o(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                                    t = e._.transform2matrix(t, i()), n = e._.transform2matrix(n, i()), c = [
                                        ["m", t.a, t.b, t.c, t.d, t.e, t.f]
                                    ], h = [
                                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                                    ];
                                    break
                                }
                                for (c[p] = [], h[p] = [], r = 0, s = Math.max(a.length, l.length); r < s; r++) r in a && (c[p][r] = a[r]), r in l && (h[p][r] = l[r])
                            }
                            return {
                                from: f(c),
                                to: f(h),
                                f: d(c)
                            }
                        }(g = this.matrix, n = e._.rgTransform.test(n) ? e._.transform2matrix(n, this.getBBox()) : e._.transform2matrix(e._.svgTransform2string(n), this.getBBox()), function() {
                            return m.getBBox(1)
                        });
                    if ("d" == t || "path" == t) return {
                        from: f((i = e.path.toCubic(g, n))[0]),
                        to: f(i[1]),
                        f: d(i[0])
                    };
                    if ("points" == t) return {
                        from: i = a(g).split(e._.separator),
                        to: p = a(n).split(e._.separator),
                        f: function(e) {
                            return e
                        }
                    };
                    if (h(g) && h(n)) return {
                        from: parseFloat(g),
                        to: parseFloat(n),
                        f: l
                    };
                    var v = g.match(s),
                        _ = a(n).match(s);
                    return v && function(t, n) {
                        return !(!e.is(t, "array") || !e.is(n, "array")) && t.toString() == n.toString()
                    }(v, _) ? {
                        from: parseFloat(g),
                        to: parseFloat(n),
                        f: function(e) {
                            return function(t) {
                                return +t.toFixed(3) + e
                            }
                        }(v)
                    } : {
                        from: this.asPX(t),
                        to: this.asPX(t, n),
                        f: l
                    }
                })
            }), S.plugin(function(e, t, n, i) {
                function r(e, t) {
                    var n = "y" == e ? "scrollTop" : "scrollLeft",
                        r = t && t.node ? t.node.ownerDocument : i.doc;
                    return r[n in r.documentElement ? "documentElement" : "body"][n]
                }

                function s() {
                    return this.originalEvent.preventDefault()
                }

                function a() {
                    return this.originalEvent.stopPropagation()
                }

                function o(e) {
                    for (var t, n = e.clientX, i = e.clientY, s = r("y"), a = r("x"), o = f.length; o--;) {
                        if (t = f[o], u) {
                            for (var l, c = e.touches && e.touches.length; c--;)
                                if ((l = e.touches[c]).identifier == t.el._drag.id || t.el.node.contains(l.target)) {
                                    n = l.clientX, i = l.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                                    break
                                }
                        } else e.preventDefault();
                        var d = t.el.node;
                        d.nextSibling, d.parentNode, d.style.display, n += a, i += s, eve("snap.drag.move." + t.el.id, t.move_scope || t.el, n - t.el._drag.x, i - t.el._drag.y, n, i, e)
                    }
                }
                for (var l = t.prototype, u = ("createTouch" in i.doc), c = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], d = {
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                        mouseup: "touchend"
                    }, f = [], h = function(t) {
                        e.unmousemove(o).unmouseup(h);
                        for (var n, i = f.length; i--;)(n = f[i]).el._drag = {}, eve("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, t), eve.off("snap.drag.*." + n.el.id);
                        f = []
                    }, p = c.length; p--;) ! function(t) {
                    e[t] = l[t] = function(n, i) {
                        if (e.is(n, "function")) this.events = this.events || [], this.events.push({
                            name: t,
                            f: n,
                            unbind: (f = this.node || document, h = t, p = n, g = i || this, m = u && d[h] ? d[h] : h, h !== m && f.addEventListener(h, c, !1), f.addEventListener(m, c, !1), function() {
                                return h !== m && f.removeEventListener(h, c, !1), f.removeEventListener(m, c, !1), !0
                            })
                        });
                        else
                            for (var o = 0, l = this.events.length; o < l; o++)
                                if (this.events[o].name == t) try {
                                    this.events[o].f.call(this)
                                } catch (n) {}

                        function c(e) {
                            var t = r("y", g),
                                n = r("x", g);
                            if (u && d.hasOwnProperty(h))
                                for (var i = 0, o = e.targetTouches && e.targetTouches.length; i < o; i++)
                                    if (e.targetTouches[i].target == f || f.contains(e.targetTouches[i].target)) {
                                        var l = e;
                                        (e = e.targetTouches[i]).originalEvent = l, e.preventDefault = s, e.stopPropagation = a;
                                        break
                                    }
                            var c = e.clientX + n,
                                m = e.clientY + t;
                            return p.call(g, e, c, m)
                        }
                        var f, h, p, g, m;
                        return this
                    }, e["un" + t] = l["un" + t] = function(e) {
                        for (var n = this.events || [], i = n.length; i--;)
                            if (n[i].name == t && (n[i].f == e || !e)) return n[i].unbind(), n.splice(i, 1), n.length || delete this.events, this;
                        return this
                    }
                }(c[p]);
                l.hover = function(e, t, n, i) {
                    return this.mouseover(e, n).mouseout(t, i || n)
                }, l.unhover = function(e, t) {
                    return this.unmouseover(e).unmouseout(t)
                };
                var g = [];
                l.drag = function(t, n, i, r, s, a) {
                    var l, u = this;
                    if (!arguments.length) return u.drag(function(e, t) {
                        this.attr({
                            transform: l + (l ? "T" : "t") + [e, t]
                        })
                    }, function() {
                        l = this.transform().local
                    });

                    function c(l, c, d) {
                        (l.originalEvent || l).preventDefault(), u._drag.x = c, u._drag.y = d, u._drag.id = l.identifier, f.length || e.mousemove(o).mouseup(h), f.push({
                            el: u,
                            move_scope: r,
                            start_scope: s,
                            end_scope: a
                        }), n && eve.on("snap.drag.start." + u.id, n), t && eve.on("snap.drag.move." + u.id, t), i && eve.on("snap.drag.end." + u.id, i), eve("snap.drag.start." + u.id, s || r || u, c, d, l)
                    }

                    function d(e, t, n) {
                        eve("snap.draginit." + u.id, u, e, t, n)
                    }
                    return eve.on("snap.draginit." + u.id, c), u._drag = {}, g.push({
                        el: u,
                        start: c,
                        init: d
                    }), u.mousedown(d), u
                }, l.undrag = function() {
                    for (var t = g.length; t--;) g[t].el == this && (this.unmousedown(g[t].init), g.splice(t, 1), eve.unbind("snap.drag.*." + this.id), eve.unbind("snap.draginit." + this.id));
                    return g.length || e.unmousemove(o).unmouseup(h), this
                }
            }), S.plugin(function(e, t, n, i) {
                t.prototype;
                var r = n.prototype,
                    s = /^\s*url\((.+)\)/,
                    a = String,
                    o = e._.$;
                e.filter = {}, r.filter = function(n) {
                    var i = this;
                    "svg" != i.type && (i = i.paper);
                    var r = e.parse(a(n)),
                        s = e._.id(),
                        l = (i.node.offsetWidth, i.node.offsetHeight, o("filter"));
                    return o(l, {
                        id: s,
                        filterUnits: "userSpaceOnUse"
                    }), l.appendChild(r.node), i.defs.appendChild(l), new t(l)
                }, eve.on("snap.util.getattr.filter", function() {
                    eve.stop();
                    var t = o(this.node, "filter");
                    if (t) {
                        var n = a(t).match(s);
                        return n && e.select(n[1])
                    }
                }), eve.on("snap.util.attr.filter", function(n) {
                    if (n instanceof t && "filter" == n.type) {
                        eve.stop();
                        var i = n.node.id;
                        i || (o(n.node, {
                            id: n.id
                        }), i = n.id), o(this.node, {
                            filter: e.url(i)
                        })
                    }
                    n && "none" != n || (eve.stop(), this.node.removeAttribute("filter"))
                }), e.filter.blur = function(t, n) {
                    null == t && (t = 2);
                    var i = null == n ? t : [t, n];
                    return e.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: i
                    })
                }, e.filter.blur.toString = function() {
                    return this()
                }, e.filter.shadow = function(t, n, i, r, s) {
                    return null == s && (null == r ? (s = i, i = 4, r = "#000") : (s = r, r = i, i = 4)), null == i && (i = 4), null == s && (s = 1), null == t && (t = 0, n = 2), null == n && (n = t), r = e.color(r), e.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: r,
                        dx: t,
                        dy: n,
                        blur: i,
                        opacity: s
                    })
                }, e.filter.shadow.toString = function() {
                    return this()
                }, e.filter.grayscale = function(t) {
                    return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: .2126 + .7874 * (1 - t),
                        b: .7152 - .7152 * (1 - t),
                        c: .0722 - .0722 * (1 - t),
                        d: .2126 - .2126 * (1 - t),
                        e: .7152 + .2848 * (1 - t),
                        f: .0722 - .0722 * (1 - t),
                        g: .2126 - .2126 * (1 - t),
                        h: .0722 + .9278 * (1 - t)
                    })
                }, e.filter.grayscale.toString = function() {
                    return this()
                }, e.filter.sepia = function(t) {
                    return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: .393 + .607 * (1 - t),
                        b: .769 - .769 * (1 - t),
                        c: .189 - .189 * (1 - t),
                        d: .349 - .349 * (1 - t),
                        e: .686 + .314 * (1 - t),
                        f: .168 - .168 * (1 - t),
                        g: .272 - .272 * (1 - t),
                        h: .534 - .534 * (1 - t),
                        i: .131 + .869 * (1 - t)
                    })
                }, e.filter.sepia.toString = function() {
                    return this()
                }, e.filter.saturate = function(t) {
                    return null == t && (t = 1), e.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - t
                    })
                }, e.filter.saturate.toString = function() {
                    return this()
                }, e.filter.hueRotate = function(t) {
                    return t = t || 0, e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: t
                    })
                }, e.filter.hueRotate.toString = function() {
                    return this()
                }, e.filter.invert = function(t) {
                    return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: t,
                        amount2: 1 - t
                    })
                }, e.filter.invert.toString = function() {
                    return this()
                }, e.filter.brightness = function(t) {
                    return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: t
                    })
                }, e.filter.brightness.toString = function() {
                    return this()
                }, e.filter.contrast = function(t) {
                    return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                        amount: t,
                        amount2: .5 - t / 2
                    })
                }, e.filter.contrast.toString = function() {
                    return this()
                }
            }), S.plugin(function(e, t, n, i, r) {
                function s() {
                    return "T" + this.dx + "," + this.dy
                }
                var a = e._.box,
                    o = e.is,
                    l = /^[^a-z]*([tbmlrc])/i;
                t.prototype.getAlign = function(e, t) {
                    null == t && o(e, "string") && (t = e, e = null);
                    var n = (e = e || this.paper).getBBox ? e.getBBox() : a(e),
                        i = this.getBBox(),
                        r = {};
                    switch (t = (t = t && t.match(l)) ? t[1].toLowerCase() : "c") {
                        case "t":
                            r.dx = 0, r.dy = n.y - i.y;
                            break;
                        case "b":
                            r.dx = 0, r.dy = n.y2 - i.y2;
                            break;
                        case "m":
                            r.dx = 0, r.dy = n.cy - i.cy;
                            break;
                        case "l":
                            r.dx = n.x - i.x, r.dy = 0;
                            break;
                        case "r":
                            r.dx = n.x2 - i.x2, r.dy = 0;
                            break;
                        default:
                            r.dx = n.cx - i.cx, r.dy = 0
                    }
                    return r.toString = s, r
                }, t.prototype.align = function(e, t) {
                    return this.transform("..." + this.getAlign(e, t))
                }
            }), S.plugin(function(e, t, n, i, r) {
                var s = t.prototype,
                    a = e.is,
                    o = String,
                    l = "hasOwnProperty";

                function u(e, t, n) {
                    return function(i) {
                        var r = i.slice(e, t);
                        return 1 == r.length && (r = r[0]), n ? n(r) : r
                    }
                }

                function c(e, t, n, i) {
                    "function" != typeof n || n.length || (i = n, n = h.linear), this.attr = e, this.dur = t, n && (this.easing = n), i && (this.callback = i)
                }
                e._.Animation = c, e.animation = function(e, t, n, i) {
                    return new c(e, t, n, i)
                }, s.inAnim = function() {
                    var e = [];
                    for (var t in this.anims) this.anims[l](t) && function(t) {
                        e.push({
                            anim: new c(t._attrs, t.dur, t.easing, t._callback),
                            mina: t,
                            curStatus: t.status(),
                            status: function(e) {
                                return t.status(e)
                            },
                            stop: function() {
                                t.stop()
                            }
                        })
                    }(this.anims[t]);
                    return e
                }, e.animate = function(e, t, n, i, r, s) {
                    "function" != typeof r || r.length || (s = r, r = h.linear);
                    var a = h.time(),
                        o = h(e, t, a, a + i, h.time, n, r);
                    return s && eve.once("mina.finish." + o.id, s), o
                }, s.stop = function() {
                    for (var e = this.inAnim(), t = 0, n = e.length; t < n; t++) e[t].stop();
                    return this
                }, s.animate = function(e, t, n, i) {
                    "function" != typeof n || n.length || (i = n, n = h.linear), e instanceof c && (i = e.callback, n = e.easing, t = e.dur, e = e.attr);
                    var r, s, d, f, p = [],
                        g = [],
                        m = {},
                        v = this;
                    for (var _ in e)
                        if (e[l](_)) {
                            v.equal ? (r = (f = v.equal(_, o(e[_]))).from, s = f.to, d = f.f) : (r = +v.attr(_), s = +e[_]);
                            var y = a(r, "array") ? r.length : 1;
                            m[_] = u(p.length, p.length + y, d), p = p.concat(r), g = g.concat(s)
                        }
                    var b = h.time(),
                        x = h(p, g, b, b + t, h.time, function(e) {
                            var t = {};
                            for (var n in m) m[l](n) && (t[n] = m[n](e));
                            v.attr(t)
                        }, n);
                    return (v.anims[x.id] = x)._attrs = e, x._callback = i, eve("snap.animcreated." + v.id, x), eve.once("mina.finish." + x.id, function() {
                        eve.off("mina.*." + x.id), delete v.anims[x.id], i && i.call(v)
                    }), eve.once("mina.stop." + x.id, function() {
                        eve.off("mina.*." + x.id), delete v.anims[x.id]
                    }), v
                }
            }), S.plugin(function(e, t, n, i) {
                function r(e) {
                    e = e.split(/(?=#)/);
                    var t = new String(e[5]);
                    return t[50] = e[0], t[100] = e[1], t[200] = e[2], t[300] = e[3], t[400] = e[4], t[500] = e[5], t[600] = e[6], t[700] = e[7], t[800] = e[8], t[900] = e[9], e[10] && (t.A100 = e[10], t.A200 = e[11], t.A400 = e[12], t.A700 = e[13]), t
                }
                e.mui = {}, e.flat = {}, e.mui.red = r("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = r("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = r("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = r("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = r("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = r("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = r("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = r("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = r("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = r("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = r("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = r("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = r("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = r("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = r("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = r("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = r("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = r("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = r("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() {
                    for (var t in e.mui) e.mui.hasOwnProperty(t) && (window[t] = e.mui[t])
                }
            }), e.exports = S
        },
        38: function(e, t, n) {
            var i, r, s, a, o, l, u, c, d, f, h, p;

            function g(e, t) {
                return e - t
            }

            function m() {
                for (var e = 0, t = this.length; e < t; e++)
                    if (void 0 !== this[e]) return this[e]
            }

            function v() {
                for (var e = this.length; --e;)
                    if (void 0 !== this[e]) return this[e]
            }
            r = "undefined" != typeof window ? window : this, o = "hasOwnProperty", l = /[\.\/]/, u = /\s*,\s*/, c = {
                n: {}
            }, d = Object.prototype.toString, f = String, h = Array.isArray || function(e) {
                return e instanceof Array || "[object Array]" == d.call(e)
            }, (p = function(e, t) {
                var n, i = a,
                    r = Array.prototype.slice.call(arguments, 2),
                    o = p.listeners(e),
                    l = 0,
                    u = [],
                    c = {},
                    d = [],
                    f = s;
                d.firstDefined = m, d.lastDefined = v, s = e;
                for (var h = a = 0, _ = o.length; h < _; h++) "zIndex" in o[h] && (u.push(o[h].zIndex), o[h].zIndex < 0 && (c[o[h].zIndex] = o[h]));
                for (u.sort(g); u[l] < 0;)
                    if (n = c[u[l++]], d.push(n.apply(t, r)), a) return a = i, d;
                for (h = 0; h < _; h++)
                    if ("zIndex" in (n = o[h]))
                        if (n.zIndex == u[l]) {
                            if (d.push(n.apply(t, r)), a) break;
                            do {
                                if ((n = c[u[++l]]) && d.push(n.apply(t, r)), a) break
                            } while (n)
                        } else c[n.zIndex] = n;
                else if (d.push(n.apply(t, r)), a) break;
                return a = i, s = f, d
            })._events = c, p.listeners = function(e) {
                var t, n, i, r, s, a, o, u, d = h(e) ? e : e.split(l),
                    f = c,
                    p = [f],
                    g = [];
                for (r = 0, s = d.length; r < s; r++) {
                    for (u = [], a = 0, o = p.length; a < o; a++)
                        for (n = [(f = p[a].n)[d[r]], f["*"]], i = 2; i--;)(t = n[i]) && (u.push(t), g = g.concat(t.f || []));
                    p = u
                }
                return g
            }, p.separator = function(e) {
                l = e ? (e = "[" + (e = f(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", new RegExp(e)) : /[\.\/]/
            }, p.on = function(e, t) {
                if ("function" != typeof t) return function() {};
                for (var n = h(e) ? h(e[0]) ? e : [e] : f(e).split(u), i = 0, r = n.length; i < r; i++) ! function(e) {
                    for (var n, i = h(e) ? e : f(e).split(l), r = c, s = 0, a = i.length; s < a; s++) r = (r = r.n).hasOwnProperty(i[s]) && r[i[s]] || (r[i[s]] = {
                        n: {}
                    });
                    for (r.f = r.f || [], s = 0, a = r.f.length; s < a; s++)
                        if (r.f[s] == t) {
                            n = !0;
                            break
                        }
                    n || r.f.push(t)
                }(n[i]);
                return function(e) {
                    +e == +e && (t.zIndex = +e)
                }
            }, p.f = function(e) {
                var t = [].slice.call(arguments, 1);
                return function() {
                    p.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
                }
            }, p.stop = function() {
                a = 1
            }, p.nt = function(e) {
                var t = h(s) ? s.join(".") : s;
                return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t) : t
            }, p.nts = function() {
                return h(s) ? s : s.split(l)
            }, p.off = p.unbind = function(e, t) {
                if (e) {
                    var n = h(e) ? h(e[0]) ? e : [e] : f(e).split(u);
                    if (1 < n.length)
                        for (var i = 0, r = n.length; i < r; i++) p.off(n[i], t);
                    else {
                        n = h(e) ? e : f(e).split(l);
                        var s, a, d, g, m, v = [c],
                            _ = [];
                        for (i = 0, r = n.length; i < r; i++)
                            for (g = 0; g < v.length; g += d.length - 2) {
                                if (d = [g, 1], s = v[g].n, "*" != n[i]) s[n[i]] && (d.push(s[n[i]]), _.unshift({
                                    n: s,
                                    name: n[i]
                                }));
                                else
                                    for (a in s) s[o](a) && (d.push(s[a]), _.unshift({
                                        n: s,
                                        name: a
                                    }));
                                v.splice.apply(v, d)
                            }
                        for (i = 0, r = v.length; i < r; i++)
                            for (s = v[i]; s.n;) {
                                if (t) {
                                    if (s.f) {
                                        for (g = 0, m = s.f.length; g < m; g++)
                                            if (s.f[g] == t) {
                                                s.f.splice(g, 1);
                                                break
                                            }
                                        s.f.length || delete s.f
                                    }
                                    for (a in s.n)
                                        if (s.n[o](a) && s.n[a].f) {
                                            var y = s.n[a].f;
                                            for (g = 0, m = y.length; g < m; g++)
                                                if (y[g] == t) {
                                                    y.splice(g, 1);
                                                    break
                                                }
                                            y.length || delete s.n[a].f
                                        }
                                } else
                                    for (a in delete s.f, s.n) s.n[o](a) && s.n[a].f && delete s.n[a].f;
                                s = s.n
                            }
                        e: for (i = 0, r = _.length; i < r; i++) {
                            for (a in (s = _[i]).n[s.name].f) continue e;
                            for (a in s.n[s.name].n) continue e;
                            delete s.n[s.name]
                        }
                    }
                } else p._events = c = {
                    n: {}
                }
            }, p.once = function(e, t) {
                var n = function() {
                    return p.off(e, n), t.apply(this, arguments)
                };
                return p.on(e, n)
            }, p.version = "0.5.4", p.toString = function() {
                return "You are running Eve 0.5.4"
            }, r.eve = p, e.exports ? e.exports = p : void 0 === (i = function() {
                return p
            }.apply(t, [])) || (e.exports = i)
        },
        4: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(0);
            i.k._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                function e(e) {
                    i.i.call(this, e);
                    var t, n, r = this,
                        s = r.vars;
                    for (n in r._labels = {}, r.autoRemoveChildren = !!s.autoRemoveChildren, r.smoothChildTiming = !!s.smoothChildTiming, r._sortChildren = !0, r._onUpdate = s.onUpdate, s) t = s[n], c(t) && -1 !== t.join("").indexOf("{self}") && (s[n] = r._swapSelfInParams(t));
                    c(s.tweens) && r.add(s.tweens, 0, s.align, s.stagger)
                }

                function t(e) {
                    var t, n = {};
                    for (t in e) n[t] = e[t];
                    return n
                }

                function n(e, t, n) {
                    var i, r, s = e.cycle;
                    for (i in s) r = s[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                    delete e.cycle
                }

                function r(e, t, n, i) {
                    var r = "immediateRender";
                    return r in t || (t[r] = !(n && !1 === n[r] || i)), t
                }

                function s(e) {
                    if ("function" == typeof e) return e;
                    var t = "object" == typeof e ? e : {
                            each: e
                        },
                        n = t.ease,
                        i = t.from || 0,
                        r = t.base || 0,
                        s = {},
                        a = isNaN(i),
                        o = t.axis,
                        l = {
                            center: .5,
                            end: 1
                        }[i] || 0;
                    return function(e, u, c) {
                        var d, f, h, p, g, m, v, _, y, b = (c || t).length,
                            x = s[b];
                        if (!x) {
                            if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                for (v = -1 / 0; v < (v = c[y++].getBoundingClientRect().left) && y < b;);
                                y--
                            }
                            for (x = s[b] = [], d = a ? Math.min(y, b) * l - .5 : i % y, f = a ? b * l / y - .5 : i / y | 0, _ = 1 / (v = 0), m = 0; m < b; m++) h = m % y - d, p = f - (m / y | 0), x[m] = g = o ? Math.abs("y" === o ? p : h) : Math.sqrt(h * h + p * p), v < g && (v = g), g < _ && (_ = g);
                            x.max = v - _, x.min = _, x.v = b = t.amount || t.each * (b < y ? b - 1 : o ? "y" === o ? b / y : y : Math.max(y, b / y)) || 0, x.b = b < 0 ? r - b : r
                        }
                        return b = (x[e] - x.min) / x.max, x.b + (n ? n.getRatio(b) : b) * x.v
                    }
                }
                var a = 1e-8,
                    o = i.l._internals,
                    l = e._internals = {},
                    u = o.isSelector,
                    c = o.isArray,
                    d = o.lazyTweens,
                    f = o.lazyRender,
                    h = i.k._gsDefine.globals,
                    p = l.pauseCallback = function() {},
                    g = e.prototype = new i.i;
                return e.version = "2.1.3", e.distribute = s, g.constructor = e, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(e, t, n, r) {
                    var s = n.repeat && h.TweenMax || i.l;
                    return t ? this.add(new s(e, t, n), r) : this.set(e, n, r)
                }, g.from = function(e, t, n, s) {
                    return this.add((n.repeat && h.TweenMax || i.l).from(e, t, r(0, n)), s)
                }, g.fromTo = function(e, t, n, s, a) {
                    var o = s.repeat && h.TweenMax || i.l;
                    return s = r(0, s, n), t ? this.add(o.fromTo(e, t, n, s), a) : this.set(e, s, a)
                }, g.staggerTo = function(r, a, o, l, c, d, f, h) {
                    var p, g, m = new e({
                            onComplete: d,
                            onCompleteParams: f,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = s(o.stagger || l),
                        _ = o.startAt,
                        y = o.cycle;
                    for ("string" == typeof r && (r = i.l.selector(r) || r), u(r = r || []) && (r = function(e) {
                            var t, n = [],
                                i = e.length;
                            for (t = 0; t !== i; n.push(e[t++]));
                            return n
                        }(r)), g = 0; g < r.length; g++) p = t(o), _ && (p.startAt = t(_), _.cycle && n(p.startAt, r, g)), y && (n(p, r, g), null != p.duration && (a = p.duration, delete p.duration)), m.to(r[g], a, p, v(g, r[g], r));
                    return this.add(m, c)
                }, g.staggerFrom = function(e, t, n, i, s, a, o, l) {
                    return n.runBackwards = !0, this.staggerTo(e, t, r(0, n), i, s, a, o, l)
                }, g.staggerFromTo = function(e, t, n, i, s, a, o, l, u) {
                    return i.startAt = n, this.staggerTo(e, t, r(0, i, n), s, a, o, l, u)
                }, g.call = function(e, t, n, r) {
                    return this.add(i.l.delayedCall(0, e, t, n), r)
                }, g.set = function(e, t, n) {
                    return this.add(new i.l(e, 0, r(0, t, null, !0)), n)
                }, e.exportRoot = function(t, n) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, a, o, l = new e(t),
                        u = l._timeline;
                    for (null == n && (n = !0), u._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = u._time, a = u._first; a;) o = a._next, n && a instanceof i.l && a.target === a.vars.onComplete || ((s = a._startTime - a._delay) < 0 && (r = 1), l.add(a, s)), a = o;
                    return u.add(l, 0), r && l.totalDuration(), l
                }, g.add = function(t, n, r, s) {
                    var a, o, l, u, d, f, h = this;
                    if ("number" != typeof n && (n = h._parseTimeOrLabel(n, 0, !0, t)), !(t instanceof i.a)) {
                        if (t instanceof Array || t && t.push && c(t)) {
                            for (r = r || "normal", s = s || 0, a = n, o = t.length, l = 0; l < o; l++) c(u = t[l]) && (u = new e({
                                tweens: u
                            })), h.add(u, a), "string" != typeof u && "function" != typeof u && ("sequence" === r ? a = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())), a += s;
                            return h._uncache(!0)
                        }
                        if ("string" == typeof t) return h.addLabel(t, n);
                        if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                        t = i.l.delayedCall(0, t)
                    }
                    if (i.i.prototype.add.call(h, t, n), (t._time || !t._duration && t._initted) && (a = (h.rawTime() - t._startTime) * t._timeScale, (!t._duration || 1e-5 < Math.abs(Math.max(0, Math.min(t.totalDuration(), a))) - t._totalTime) && t.render(a, !1, !1)), (h._gc || h._time === h._duration) && !h._paused && h._duration < h.duration())
                        for (f = (d = h).rawTime() > t._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                    return h
                }, g.remove = function(e) {
                    if (e instanceof i.a) {
                        this._remove(e, !1);
                        var t = e._timeline = e.vars.useFrames ? i.a._rootFramesTimeline : i.a._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && c(e)) {
                        for (var n = e.length; - 1 < --n;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(e, t) {
                    return i.i.prototype._remove.call(this, e, t), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, g.insert = g.insertMultiple = function(e, t, n, i) {
                    return this.add(e, t || 0, n, i)
                }, g.appendMultiple = function(e, t, n, i) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
                }, g.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, g.addPause = function(e, t, n, r) {
                    var s = i.l.delayedCall(0, p, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
                }, g.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, g.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, g._parseTimeOrLabel = function(e, t, n, r) {
                    var s, a;
                    if (r instanceof i.a && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && c(r)))
                        for (a = r.length; - 1 < --a;) r[a] instanceof i.a && r[a].timeline === this && this.remove(r[a]);
                    if (s = "number" != typeof e || t ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, n && "number" == typeof e && null == this._labels[t] ? e - s : 0, n);
                    if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                    else {
                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + t : t : this._labels[e] + t;
                        t = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = 1 < a ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : s
                    }
                    return Number(e) + t
                }, g.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, g.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, g.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, r, s, o, l, u, c, h, p = this,
                        g = p._time,
                        m = p._dirty ? p.totalDuration() : p._totalDuration,
                        v = p._startTime,
                        _ = p._timeScale,
                        y = p._paused;
                    if (g !== p._time && (e += p._time - g), p._hasPause && !p._forcingPlayhead && !t) {
                        if (g < e)
                            for (i = p._first; i && i._startTime <= e && !u;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === p._rawPrevTime || (u = i), i = i._next;
                        else
                            for (i = p._last; i && i._startTime >= e && !u;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (u = i), i = i._prev;
                        u && (p._time = p._totalTime = e = u._startTime, h = p._startTime + (p._reversed ? p._duration - e : e) / p._timeScale)
                    }
                    if (m - a <= e && 0 <= e) p._totalTime = p._time = m, p._reversed || p._hasPausedChild() || (r = !0, o = "onComplete", l = !!p._timeline.autoRemoveChildren, 0 === p._duration && (e <= 0 && -a <= e || p._rawPrevTime < 0 || p._rawPrevTime === a) && p._rawPrevTime !== e && p._first && (l = !0, p._rawPrevTime > a && (o = "onReverseComplete"))), p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : a, e = m + 1e-4;
                    else if (e < a)
                        if (p._totalTime = p._time = 0, -a < e && (e = 0), (0 !== g || 0 === p._duration && p._rawPrevTime !== a && (0 < p._rawPrevTime || e < 0 && 0 <= p._rawPrevTime)) && (o = "onReverseComplete", r = p._reversed), e < 0) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (l = r = !0, o = "onReverseComplete") : 0 <= p._rawPrevTime && p._first && (l = !0), p._rawPrevTime = e;
                        else {
                            if (p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : a, 0 === e && r)
                                for (i = p._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                            e = 0, p._initted || (l = !0)
                        }
                    else p._totalTime = p._time = p._rawPrevTime = e;
                    if (p._time !== g && p._first || n || l || u) {
                        if (p._initted || (p._initted = !0), p._active || !p._paused && p._time !== g && 0 < e && (p._active = !0), 0 === g && p.vars.onStart && (0 === p._time && p._duration || t || p._callback("onStart")), g <= (c = p._time))
                            for (i = p._first; i && (s = i._next, c === p._time && (!p._paused || y));)(i._active || i._startTime <= c && !i._paused && !i._gc) && (u === i && (p.pause(), p._pauseTime = h), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = s;
                        else
                            for (i = p._last; i && (s = i._prev, c === p._time && (!p._paused || y));) {
                                if (i._active || i._startTime <= g && !i._paused && !i._gc) {
                                    if (u === i) {
                                        for (u = i._prev; u && u.endTime() > p._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, n), u = u._prev;
                                        u = null, p.pause(), p._pauseTime = h
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                }
                                i = s
                            }
                        p._onUpdate && (t || (d.length && f(), p._callback("onUpdate"))), o && (p._gc || v !== p._startTime && _ === p._timeScale || (0 === p._time || m >= p.totalDuration()) && (r && (d.length && f(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !t && p.vars[o] && p._callback(o)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof e && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(e, t, n, r) {
                    r = r || -9999999999;
                    for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i.l ? !1 !== t && (s[o++] = a) : (!1 !== n && (s[o++] = a), !1 !== e && (o = (s = s.concat(a.getChildren(!0, t, n))).length))), a = a._next;
                    return s
                }, g.getTweensOf = function(e, t) {
                    var n, r, s = this._gc,
                        a = [],
                        o = 0;
                    for (s && this._enabled(!0, !0), r = (n = i.l.getTweensOf(e)).length; - 1 < --r;)(n[r].timeline === this || t && this._contains(n[r])) && (a[o++] = n[r]);
                    return s && this._enabled(!1, !0), a
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, g.shiftChildren = function(e, t, n) {
                    n = n || 0;
                    for (var i, r = this._first, s = this._labels; r;) r._startTime >= n && (r._startTime += e), r = r._next;
                    if (t)
                        for (i in s) s[i] >= n && (s[i] += e);
                    return this._uncache(!0)
                }, g._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; - 1 < --i;) n[i]._kill(e, t) && (r = !0);
                    return r
                }, g.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        n = t.length;
                    for (this._time = this._totalTime = 0; - 1 < --n;) t[n]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return i.a.prototype.invalidate.call(this)
                }, g._enabled = function(e, t) {
                    if (e === this._gc)
                        for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                    return i.i.prototype._enabled.call(this, e, t)
                }, g.totalTime = function(e, t, n) {
                    this._forcingPlayhead = !0;
                    var r = i.a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(e) {
                    if (arguments.length) return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
                    if (this._dirty) {
                        for (var t, n, i = 0, r = this, s = r._last, a = 999999999999; s;) t = s._prev, s._dirty && s.totalDuration(), s._startTime > a && r._sortChildren && !s._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(s, s._startTime - s._delay), r._calculatingDuration = 0) : a = s._startTime, s._startTime < 0 && !s._paused && (i -= s._startTime, r._timeline.smoothChildTiming && (r._startTime += s._startTime / r._timeScale, r._time -= s._startTime, r._totalTime -= s._startTime, r._rawPrevTime -= s._startTime), r.shiftChildren(-s._startTime, !1, -9999999999), a = 0), i < (n = s._startTime + s._totalDuration / s._timeScale) && (i = n), s = t;
                        r._duration = r._totalDuration = i, r._dirty = !1
                    }
                    return this._totalDuration
                }, g.paused = function(e) {
                    if (!1 === e && this._paused)
                        for (var t = this._first; t;) t._startTime === this._time && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                    return i.a.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === i.a._rootFramesTimeline
                }, g.rawTime = function(e) {
                    return e && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                }, e
            }, !0);
            var r = i.m.TimelineLite;
            i.k._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
                function e(e) {
                    r.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                }
                var t = 1e-8,
                    n = i.l._internals,
                    s = n.lazyTweens,
                    a = n.lazyRender,
                    o = i.k._gsDefine.globals,
                    l = new i.b(null, null, 1, 0),
                    u = e.prototype = new r;
                return u.constructor = e, u.kill()._gc = !1, e.version = "2.1.3", u.invalidate = function() {
                    return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), r.prototype.invalidate.call(this)
                }, u.addCallback = function(e, t, n, r) {
                    return this.add(i.l.delayedCall(0, e, n, r), t)
                }, u.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); - 1 < --i;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(r._internals.pauseCallback, e)
                }, u.tweenTo = function(e, t) {
                    t = t || {};
                    var n, r, s, a = {
                            ease: l,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        u = t.repeat && o.TweenMax || i.l;
                    for (r in t) a[r] = t[r];
                    return a.time = this._parseTimeOrLabel(e), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new u(this, n, a), a.onStart = function() {
                        s.target.paused(!0), s.vars.time === s.target.time() || n !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0), t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || s, t.onStartParams || [])
                    }, s
                }, u.tweenFromTo = function(e, t, n) {
                    n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, n.immediateRender = !1 !== n.immediateRender;
                    var i = this.tweenTo(t, n);
                    return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - e) / this._timeScale || .001)
                }, u.render = function(e, n, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, o, l, u, c, d, f, h, p, g = this,
                        m = g._time,
                        v = g._dirty ? g.totalDuration() : g._totalDuration,
                        _ = g._duration,
                        y = g._totalTime,
                        b = g._startTime,
                        x = g._timeScale,
                        S = g._rawPrevTime,
                        T = g._paused,
                        w = g._cycle;
                    if (m !== g._time && (e += g._time - m), v - t <= e && 0 <= e) g._locked || (g._totalTime = v, g._cycle = g._repeat), g._reversed || g._hasPausedChild() || (o = !0, u = "onComplete", c = !!g._timeline.autoRemoveChildren, 0 === g._duration && (e <= 0 && -t <= e || S < 0 || S === t) && S !== e && g._first && (c = !0, t < S && (u = "onReverseComplete"))), g._rawPrevTime = g._duration || !n || e || g._rawPrevTime === e ? e : t, g._yoyo && 1 & g._cycle ? g._time = e = 0 : e = (g._time = _) + 1e-4;
                    else if (e < t)
                        if (g._locked || (g._totalTime = g._cycle = 0), g._time = 0, -t < e && (e = 0), (0 !== m || 0 === _ && S !== t && (0 < S || e < 0 && 0 <= S) && !g._locked) && (u = "onReverseComplete", o = g._reversed), e < 0) g._active = !1, g._timeline.autoRemoveChildren && g._reversed ? (c = o = !0, u = "onReverseComplete") : 0 <= S && g._first && (c = !0), g._rawPrevTime = e;
                        else {
                            if (g._rawPrevTime = _ || !n || e || g._rawPrevTime === e ? e : t, 0 === e && o)
                                for (r = g._first; r && 0 === r._startTime;) r._duration || (o = !1), r = r._next;
                            e = 0, g._initted || (c = !0)
                        }
                    else 0 === _ && S < 0 && (c = !0), g._time = g._rawPrevTime = e, g._locked || (g._totalTime = e, 0 !== g._repeat && (d = _ + g._repeatDelay, g._cycle = g._totalTime / d >> 0, g._cycle && g._cycle === g._totalTime / d && y <= e && g._cycle--, g._time = g._totalTime - g._cycle * d, g._yoyo && 1 & g._cycle && (g._time = _ - g._time), g._time > _ ? e = (g._time = _) + 1e-4 : g._time < 0 ? g._time = e = 0 : e = g._time));
                    if (g._hasPause && !g._forcingPlayhead && !n) {
                        if (m < (e = g._time) || g._repeat && w !== g._cycle)
                            for (r = g._first; r && r._startTime <= e && !f;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === g._rawPrevTime || (f = r), r = r._next;
                        else
                            for (r = g._last; r && r._startTime >= e && !f;) r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (f = r), r = r._prev;
                        f && (p = g._startTime + (g._reversed ? g._duration - f._startTime : f._startTime) / g._timeScale, f._startTime < _ && (g._time = g._rawPrevTime = e = f._startTime, g._totalTime = e + g._cycle * (g._totalDuration + g._repeatDelay)))
                    }
                    if (g._cycle !== w && !g._locked) {
                        var E = g._yoyo && 0 != (1 & w),
                            C = E === (g._yoyo && 0 != (1 & g._cycle)),
                            A = g._totalTime,
                            k = g._cycle,
                            P = g._rawPrevTime,
                            F = g._time;
                        if (g._totalTime = w * _, g._cycle < w ? E = !E : g._totalTime += _, g._time = m, g._rawPrevTime = 0 === _ ? S - 1e-4 : S, g._cycle = w, g._locked = !0, m = E ? 0 : _, g.render(m, n, 0 === _), n || g._gc || g.vars.onRepeat && (g._cycle = k, g._locked = !1, g._callback("onRepeat")), m !== g._time) return;
                        if (C && (g._cycle = w, g._locked = !0, m = E ? _ + 1e-4 : -1e-4, g.render(m, !0, !1)), g._locked = !1, g._paused && !T) return;
                        g._time = F, g._totalTime = A, g._cycle = k, g._rawPrevTime = P
                    }
                    if (g._time !== m && g._first || i || c || f) {
                        if (g._initted || (g._initted = !0), g._active || !g._paused && g._totalTime !== y && 0 < e && (g._active = !0), 0 === y && g.vars.onStart && (0 === g._totalTime && g._totalDuration || n || g._callback("onStart")), m <= (h = g._time))
                            for (r = g._first; r && (l = r._next, h === g._time && (!g._paused || T));)(r._active || r._startTime <= g._time && !r._paused && !r._gc) && (f === r && (g.pause(), g._pauseTime = p), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, n, i) : r.render((e - r._startTime) * r._timeScale, n, i)), r = l;
                        else
                            for (r = g._last; r && (l = r._prev, h === g._time && (!g._paused || T));) {
                                if (r._active || r._startTime <= m && !r._paused && !r._gc) {
                                    if (f === r) {
                                        for (f = r._prev; f && f.endTime() > g._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, n, i), f = f._prev;
                                        f = null, g.pause(), g._pauseTime = p
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, n, i) : r.render((e - r._startTime) * r._timeScale, n, i)
                                }
                                r = l
                            }
                        g._onUpdate && (n || (s.length && a(), g._callback("onUpdate"))), u && (g._locked || g._gc || b !== g._startTime && x === g._timeScale || (0 === g._time || v >= g.totalDuration()) && (o && (s.length && a(), g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !n && g.vars[u] && g._callback(u)))
                    } else y !== g._totalTime && g._onUpdate && (n || g._callback("onUpdate"))
                }, u.getActive = function(e, t, n) {
                    var i, r, s = [],
                        a = this.getChildren(e || null == e, t || null == e, !!n),
                        o = 0,
                        l = a.length;
                    for (i = 0; i < l; i++)(r = a[i]).isActive() && (s[o++] = r);
                    return s
                }, u.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, n = this.getLabelsArray(),
                        i = n.length;
                    for (t = 0; t < i; t++)
                        if (n[t].time > e) return n[t].name;
                    return null
                }, u.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), n = t.length; - 1 < --n;)
                        if (t[n].time < e) return t[n].name;
                    return null
                }, u.getLabelsArray = function() {
                    var e, t = [],
                        n = 0;
                    for (e in this._labels) t[n++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, u.invalidate = function() {
                    return this._locked = !1, r.prototype.invalidate.call(this)
                }, u.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
                }, u.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (r.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(e, t) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var n = this._duration,
                        i = this._cycle,
                        r = i * (n + this._repeatDelay);
                    return n < e && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, u.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + t)
                }, e
            }, !0);
            var s = i.m.TimelineMax;
            i.k._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                function e(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                }

                function t(e, t, n) {
                    var i, r, s = e.cycle;
                    for (i in s) r = s[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                    delete e.cycle
                }

                function n(e) {
                    if ("function" == typeof e) return e;
                    var t = "object" == typeof e ? e : {
                            each: e
                        },
                        n = t.ease,
                        i = t.from || 0,
                        r = t.base || 0,
                        s = {},
                        a = isNaN(i),
                        o = t.axis,
                        l = {
                            center: .5,
                            end: 1
                        }[i] || 0;
                    return function(e, u, c) {
                        var d, f, h, p, g, m, v, _, y, b = (c || t).length,
                            x = s[b];
                        if (!x) {
                            if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                for (v = -1 / 0; v < (v = c[y++].getBoundingClientRect().left) && y < b;);
                                y--
                            }
                            for (x = s[b] = [], d = a ? Math.min(y, b) * l - .5 : i % y, f = a ? b * l / y - .5 : i / y | 0, _ = 1 / (v = 0), m = 0; m < b; m++) h = m % y - d, p = f - (m / y | 0), x[m] = g = o ? Math.abs("y" === o ? p : h) : Math.sqrt(h * h + p * p), v < g && (v = g), g < _ && (_ = g);
                            x.max = v - _, x.min = _, x.v = b = t.amount || t.each * (b < y ? b - 1 : o ? "y" === o ? b / y : y : Math.max(y, b / y)) || 0, x.b = b < 0 ? r - b : r
                        }
                        return b = (x[e] - x.min) / x.max, x.b + (n ? n.getRatio(b) : b) * x.v
                    }
                }
                var r = function(e, t, n) {
                        i.l.call(this, e, t, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                    },
                    s = 1e-8,
                    a = i.l._internals,
                    o = a.isSelector,
                    l = a.isArray,
                    u = r.prototype = i.l.to({}, .1, {}),
                    c = [];
                r.version = "2.1.3", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.l.killTweensOf, r.getTweensOf = i.l.getTweensOf, r.lagSmoothing = i.l.lagSmoothing, r.ticker = i.l.ticker, r.render = i.l.render, r.distribute = n, u.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.l.prototype.invalidate.call(this)
                }, u.updateTo = function(e, t) {
                    var n, r = this,
                        s = r.ratio,
                        a = r.vars.immediateRender || e.immediateRender;
                    for (n in t && r._startTime < r._timeline._time && (r._startTime = r._timeline._time, r._uncache(!1), r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay)), e) r.vars[n] = e[n];
                    if (r._initted || a)
                        if (t) r._initted = !1, a && r.render(0, !0, !0);
                        else if (r._gc && r._enabled(!0, !1), r._notifyPluginsOfEnabled && r._firstPT && i.l._onPluginEvent("_onDisable", r), .998 < r._time / r._duration) {
                        var o = r._totalTime;
                        r.render(0, !0, !1), r._initted = !1, r.render(o, !0, !1)
                    } else if (r._initted = !1, r._init(), 0 < r._time || a)
                        for (var l, u = 1 / (1 - s), c = r._firstPT; c;) l = c.s + c.c, c.c *= u, c.s = l - c.c, c = c._next;
                    return r
                }, u.render = function(e, t, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, o, l, u, c, d, f, h, p, g = this,
                        m = g._dirty ? g.totalDuration() : g._totalDuration,
                        v = g._time,
                        _ = g._totalTime,
                        y = g._cycle,
                        b = g._duration,
                        x = g._rawPrevTime;
                    if (m - s <= e && 0 <= e ? (g._totalTime = m, g._cycle = g._repeat, g._yoyo && 0 != (1 & g._cycle) ? (g._time = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0) : (g._time = b, g.ratio = g._ease._calcEnd ? g._ease.getRatio(1) : 1), g._reversed || (r = !0, o = "onComplete", n = n || g._timeline.autoRemoveChildren), 0 === b && (!g._initted && g.vars.lazy && !n || (g._startTime === g._timeline._duration && (e = 0), (x < 0 || e <= 0 && -s <= e || x === s && "isPause" !== g.data) && x !== e && (n = !0, s < x && (o = "onReverseComplete")), g._rawPrevTime = h = !t || e || x === e ? e : s))) : e < s ? (g._totalTime = g._time = g._cycle = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0, (0 !== _ || 0 === b && 0 < x) && (o = "onReverseComplete", r = g._reversed), -s < e ? e = 0 : e < 0 && (g._active = !1, 0 === b && (!g._initted && g.vars.lazy && !n || (0 <= x && (n = !0), g._rawPrevTime = h = !t || e || x === e ? e : s))), g._initted || (n = !0)) : (g._totalTime = g._time = e, 0 !== g._repeat && (u = b + g._repeatDelay, g._cycle = g._totalTime / u >> 0, 0 !== g._cycle && g._cycle === g._totalTime / u && _ <= e && g._cycle--, g._time = g._totalTime - g._cycle * u, g._yoyo && 0 != (1 & g._cycle) && (g._time = b - g._time, (p = g._yoyoEase || g.vars.yoyoEase) && (g._yoyoEase || (!0 !== p || g._initted ? g._yoyoEase = p = !0 === p ? g._ease : p instanceof i.b ? p : i.b.map[p] : (p = g.vars.ease, g._yoyoEase = p = p ? p instanceof i.b ? p : "function" == typeof p ? new i.b(p, g.vars.easeParams) : i.b.map[p] || i.l.defaultEase : i.l.defaultEase)), g.ratio = p ? 1 - p.getRatio((b - g._time) / b) : 0)), g._time > b ? g._time = b : g._time < 0 && (g._time = 0)), g._easeType && !p ? (c = g._time / b, (1 === (d = g._easeType) || 3 === d && .5 <= c) && (c = 1 - c), 3 === d && (c *= 2), 1 === (f = g._easePower) ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), g.ratio = 1 === d ? 1 - c : 2 === d ? c : g._time / b < .5 ? c / 2 : 1 - c / 2) : p || (g.ratio = g._ease.getRatio(g._time / b))), v !== g._time || n || y !== g._cycle) {
                        if (!g._initted) {
                            if (g._init(), !g._initted || g._gc) return;
                            if (!n && g._firstPT && (!1 !== g.vars.lazy && g._duration || g.vars.lazy && !g._duration)) return g._time = v, g._totalTime = _, g._rawPrevTime = x, g._cycle = y, a.lazyTweens.push(g), void(g._lazy = [e, t]);
                            !g._time || r || p ? r && this._ease._calcEnd && !p && (g.ratio = g._ease.getRatio(0 === g._time ? 0 : 1)) : g.ratio = g._ease.getRatio(g._time / b)
                        }
                        for (!1 !== g._lazy && (g._lazy = !1), g._active || !g._paused && g._time !== v && 0 <= e && (g._active = !0), 0 === _ && (2 === g._initted && 0 < e && g._init(), g._startAt && (0 <= e ? g._startAt.render(e, !0, n) : o = o || "_dummyGS"), g.vars.onStart && (0 === g._totalTime && 0 !== b || t || g._callback("onStart"))), l = g._firstPT; l;) l.f ? l.t[l.p](l.c * g.ratio + l.s) : l.t[l.p] = l.c * g.ratio + l.s, l = l._next;
                        g._onUpdate && (e < 0 && g._startAt && g._startTime && g._startAt.render(e, !0, n), t || g._totalTime === _ && !o || g._callback("onUpdate")), g._cycle !== y && (t || g._gc || g.vars.onRepeat && g._callback("onRepeat")), o && (g._gc && !n || (e < 0 && g._startAt && !g._onUpdate && g._startTime && g._startAt.render(e, !0, n), r && (g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !t && g.vars[o] && g._callback(o), 0 === b && g._rawPrevTime === s && h !== s && (g._rawPrevTime = 0)))
                    } else _ !== g._totalTime && g._onUpdate && (t || g._callback("onUpdate"))
                }, r.to = function(e, t, n) {
                    return new r(e, t, n)
                }, r.from = function(e, t, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new r(e, t, n)
                }, r.fromTo = function(e, t, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new r(e, t, i)
                }, r.staggerTo = r.allTo = function(s, a, u, d, f, h, p) {
                    var g, m, v, _, y = [],
                        b = n(u.stagger || d),
                        x = u.cycle,
                        S = (u.startAt || c).cycle;
                    for (l(s) || ("string" == typeof s && (s = i.l.selector(s) || s), o(s) && (s = e(s))), g = (s = s || []).length - 1, v = 0; v <= g; v++) {
                        for (_ in m = {}, u) m[_] = u[_];
                        if (x && (t(m, s, v), null != m.duration && (a = m.duration, delete m.duration)), S) {
                            for (_ in S = m.startAt = {}, u.startAt) S[_] = u.startAt[_];
                            t(m.startAt, s, v)
                        }
                        m.delay = b(v, s[v], s) + (m.delay || 0), v === g && f && (m.onComplete = function() {
                            u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), f.apply(p || u.callbackScope || this, h || c)
                        }), y[v] = new r(s[v], a, m)
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(e, t, n, i, s, a, o) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, r.staggerTo(e, t, n, i, s, a, o)
                }, r.staggerFromTo = r.allFromTo = function(e, t, n, i, s, a, o, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, r.staggerTo(e, t, i, s, a, o, l)
                }, r.delayedCall = function(e, t, n, i, s) {
                    return new r(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(e, t) {
                    return new r(e, 0, t)
                }, r.isTweening = function(e) {
                    return 0 < i.l.getTweensOf(e, !0).length
                };
                var d = function(e, t) {
                        for (var n = [], r = 0, s = e._first; s;) s instanceof i.l ? n[r++] = s : (t && (n[r++] = s), r = (n = n.concat(d(s, t))).length), s = s._next;
                        return n
                    },
                    f = r.getAllTweens = function(e) {
                        return d(i.a._rootTimeline, e).concat(d(i.a._rootFramesTimeline, e))
                    };

                function h(e, t, n, r) {
                    t = !1 !== t, n = !1 !== n;
                    for (var s, a, o = f(r = !1 !== r), l = t && n && r, u = o.length; - 1 < --u;) a = o[u], (l || a instanceof i.i || (s = a.target === a.vars.onComplete) && n || t && !s) && a.paused(e)
                }
                return r.killAll = function(e, t, n, r) {
                    null == t && (t = !0), null == n && (n = !0);
                    var s, a, o, l = f(0 != r),
                        u = l.length,
                        c = t && n && r;
                    for (o = 0; o < u; o++) a = l[o], (c || a instanceof i.i || (s = a.target === a.vars.onComplete) && n || t && !s) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, n) {
                    if (null != t) {
                        var s, u, c, d, f, h = a.tweenLookup;
                        if ("string" == typeof t && (t = i.l.selector(t) || t), o(t) && (t = e(t)), l(t))
                            for (d = t.length; - 1 < --d;) r.killChildTweensOf(t[d], n);
                        else {
                            for (c in s = [], h)
                                for (u = h[c].target.parentNode; u;) u === t && (s = s.concat(h[c].tweens)), u = u.parentNode;
                            for (f = s.length, d = 0; d < f; d++) n && s[d].totalTime(s[d].totalDuration()), s[d]._enabled(!1, !1)
                        }
                    }
                }, r.pauseAll = function(e, t, n) {
                    h(!0, e, t, n)
                }, r.resumeAll = function(e, t, n) {
                    h(!1, e, t, n)
                }, r.globalTimeScale = function(e) {
                    var t = i.a._rootTimeline,
                        n = i.l.ticker.time;
                    return arguments.length ? (e = e || s, t._startTime = n - (n - t._startTime) * t._timeScale / e, t = i.a._rootFramesTimeline, n = i.l.ticker.frame, t._startTime = n - (n - t._startTime) * t._timeScale / e, t._timeScale = i.a._rootTimeline._timeScale = e, e) : t._timeScale
                }, u.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this.duration() ? this._time / this._duration : this.ratio
                }, u.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, u.time = function(e, t) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var n = this._duration,
                        i = this._cycle,
                        r = i * (n + this._repeatDelay);
                    return n < e && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
                }, u.duration = function(e) {
                    return arguments.length ? i.a.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, r
            }, !0);
            var a = i.m.TweenMax;

            function o(e) {
                var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                return function(n) {
                    return (Math.round(n / e) * e * t | 0) / t
                }
            }

            function l(e, t) {
                for (; e;) e.f || e.blob || (e.m = t || Math.round), e = e._next
            }
            i.k._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
                var e, t, n, r, s = function() {
                        i.j.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = i.k._gsDefine.globals,
                    o = {},
                    l = s.prototype = new i.j("css");

                function u(e, t) {
                    return t.toUpperCase()
                }

                function c(e, t) {
                    var n = te.createElementNS ? te.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : te.createElement(e);
                    return n.style ? n : te.createElement(e)
                }

                function d(e) {
                    return L.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                }

                function f(e) {
                    i.k.console && console.log(e)
                }

                function h(e, t) {
                    var n, i, r = (t = t || ne).style;
                    if (void 0 !== r[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; - 1 < --i && void 0 === r[n[i] + e];);
                    return 0 <= i ? (oe = "-" + (le = 3 === i ? "ms" : n[i]).toLowerCase() + "-", le + e) : null
                }

                function p(e) {
                    return ue.getComputedStyle(e)
                }

                function g(e, t) {
                    var n, i, r, s = {};
                    if (t = t || p(e))
                        if (n = t.length)
                            for (; - 1 < --n;) - 1 !== (r = t[n]).indexOf("-transform") && Le !== r || (s[r.replace(j, u)] = t.getPropertyValue(r));
                        else
                            for (n in t) - 1 !== n.indexOf("Transform") && Ne !== n || (s[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === s[n] && (s[n.replace(j, u)] = t[n]);
                    return ae || (s.opacity = d(e)), i = Je(e, t, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, ze && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
                }

                function m(e, t, n, i, r) {
                    var s, a, o, l = {},
                        u = e.style;
                    for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = n[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[a] || "" === t[a].replace(G, "") ? s : 0 : fe(e, a), void 0 !== u[a] && (o = new Se(u, a, u[a], o))));
                    if (i)
                        for (a in i) "className" !== a && (l[a] = i[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                }

                function v(e, t, n) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (n || p(e))[t] || 0;
                    if (e.getCTM && Xe(e)) return e.getBBox()[t] || 0;
                    var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        r = he[t],
                        s = r.length;
                    for (n = n || p(e); - 1 < --s;) i -= parseFloat(ce(e, "padding" + r[s], n, !0)) || 0, i -= parseFloat(ce(e, "border" + r[s] + "Width", n, !0)) || 0;
                    return i
                }

                function _(e, t) {
                    return "function" == typeof e && (e = e(F, P)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                }

                function y(e, t) {
                    "function" == typeof e && (e = e(F, P));
                    var n = "string" == typeof e && "=" === e.charAt(1);
                    return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (n ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100)), null == e ? t : n ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                }

                function b(e, t, n, i) {
                    var r, s, a, o, l;
                    return "function" == typeof e && (e = e(F, P)), (o = null == e ? t : "number" == typeof e ? e : (r = 360, s = e.split("_"), a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : Q) - (l ? 0 : t), s.length && (i && (i[n] = t + a), -1 !== e.indexOf("short") && (a %= r) != a % 180 && (a = a < 0 ? a + r : a - r), -1 !== e.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % r - (a / r | 0) * r : -1 !== e.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % r - (a / r | 0) * r)), t + a)) < 1e-6 && -1e-6 < o && (o = 0), o
                }

                function x(e, t, n) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                }

                function S(e, t) {
                    var n, i, r, s = e.match(_e) || [],
                        a = 0,
                        o = "";
                    if (!s.length) return e;
                    for (n = 0; n < s.length; n++) i = s[n], a += (r = e.substr(a, e.indexOf(i, a) - a)).length + i.length, 3 === (i = ve(i, t)).length && i.push(1), o += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                    return o + e.substr(a)
                }(l.constructor = s).version = "2.1.3", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, l = "px", s.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var T, w, E, C, A, k, P, F, R, I, D = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    M = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    B = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                    G = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    N = /(?:\d|\-|\+|=|#|\.)*/g,
                    L = /opacity *= *([^)]*)/i,
                    V = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    U = /^(rgb|hsl)/,
                    q = /([A-Z])/g,
                    j = /-([a-z])/gi,
                    K = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    H = /(?:Left|Right|Width)/i,
                    X = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    Y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    W = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    $ = Math.PI / 180,
                    Q = 180 / Math.PI,
                    Z = {},
                    ee = {
                        style: {}
                    },
                    te = i.k.document || {
                        createElement: function() {
                            return ee
                        }
                    },
                    ne = c("div"),
                    ie = c("img"),
                    re = s._internals = {
                        _specialProps: o
                    },
                    se = (i.k.navigator || {}).userAgent || "",
                    ae = (R = se.indexOf("Android"), I = c("a"), E = -1 !== se.indexOf("Safari") && -1 === se.indexOf("Chrome") && (-1 === R || 3 < parseFloat(se.substr(R + 8, 2))), A = E && parseFloat(se.substr(se.indexOf("Version/") + 8, 2)) < 6, C = -1 !== se.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(se) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(se)) && (k = parseFloat(RegExp.$1)), !!I && (I.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(I.style.opacity))),
                    oe = "",
                    le = "",
                    ue = "undefined" != typeof window ? window : te.defaultView || {
                        getComputedStyle: function() {}
                    },
                    ce = s.getStyle = function(e, t, n, i, r) {
                        var s;
                        return ae || "opacity" !== t ? (!i && e.style[t] ? s = e.style[t] : (n = n || p(e)) ? s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(q, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : d(e)
                    },
                    de = re.convertToPixels = function(e, t, n, r, a) {
                        if ("px" === r || !r && "lineHeight" !== t) return n;
                        if ("auto" === r || !n) return 0;
                        var o, l, u, c = H.test(t),
                            d = e,
                            f = ne.style,
                            h = n < 0,
                            g = 1 === n;
                        if (h && (n = -n), g && (n *= 100), "lineHeight" !== t || r)
                            if ("%" === r && -1 !== t.indexOf("border")) o = n / 100 * (c ? e.clientWidth : e.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + ce(e, "position") + ";line-height:0;", "%" !== r && d.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (d = e.parentNode || te.body, -1 !== ce(d, "display").indexOf("flex") && (f.position = "absolute"), l = d._gsCache, u = i.l.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                    f[c ? "width" : "height"] = n + r
                                }
                                d.appendChild(ne), o = parseFloat(ne[c ? "offsetWidth" : "offsetHeight"]), d.removeChild(ne), c && "%" === r && !1 !== s.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = u, l.width = o / n * 100), 0 !== o || a || (o = de(e, t, n, r, !0))
                            }
                        else l = p(e).lineHeight, e.style.lineHeight = n, o = parseFloat(p(e).lineHeight), e.style.lineHeight = l;
                        return g && (o /= 100), h ? -o : o
                    },
                    fe = re.calculateOffset = function(e, t, n) {
                        if ("absolute" !== ce(e, "position", n)) return 0;
                        var i = "left" === t ? "Left" : "Top",
                            r = ce(e, "margin" + i, n);
                        return e["offset" + i] - (de(e, t, parseFloat(r), r.replace(N, "")) || 0)
                    },
                    he = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    pe = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ge = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        null != e && "" !== e || (e = "0 0");
                        var n, i = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        if (3 < i.length && !t) {
                            for (i = e.split(", ").join(",").split(","), e = [], n = 0; n < i.length; n++) e.push(ge(i[n]));
                            return e.join(",")
                        }
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + s + (2 < i.length ? " " + i[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(r.replace(G, "")), t.oy = parseFloat(s.replace(G, "")), t.v = e), t || e
                    },
                    me = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ve = s.parseColor = function(e, t) {
                        var n, i, r, s, a, o, l, u, c, d, f;
                        if (e)
                            if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), me[e]) n = me[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (i = e.charAt(1)) + i + (r = e.charAt(2)) + r + (s = e.charAt(3)) + s), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (n = f = e.match(D), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(O)
                                    } else a = Number(n[0]) % 360 / 360, o = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < n.length && (n[3] = Number(n[3])), n[0] = x(a + 1 / 3, i, r), n[1] = x(a, i, r), n[2] = x(a - 1 / 3, i, r);
                                else n = e.match(D) || me.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                            }
                        else n = me.black;
                        return t && !f && (i = n[0] / 255, r = n[1] / 255, s = n[2] / 255, l = ((u = Math.max(i, r, s)) + (c = Math.min(i, r, s))) / 2, u === c ? a = o = 0 : (d = u - c, o = .5 < l ? d / (2 - u - c) : d / (u + c), a = u === i ? (r - s) / d + (r < s ? 6 : 0) : u === r ? (s - i) / d + 2 : (i - r) / d + 4, a *= 60), n[0] = a + .5 | 0, n[1] = 100 * o + .5 | 0, n[2] = 100 * l + .5 | 0), n
                    },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (l in me) _e += "|" + l + "\\b";

                function ye(e, t, n, i) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var r, s = t ? (e.match(_e) || [""])[0] : "",
                        a = e.split(s).join("").match(M) || [],
                        o = e.substr(0, e.indexOf(a[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        u = -1 !== e.indexOf(" ") ? " " : ",",
                        c = a.length,
                        d = 0 < c ? a[0].replace(D, "") : "";
                    return c ? r = t ? function(e) {
                        var t, f, h, p;
                        if ("number" == typeof e) e += d;
                        else if (i && W.test(e)) {
                            for (p = e.replace(W, "|").split("|"), h = 0; h < p.length; h++) p[h] = r(p[h]);
                            return p.join(",")
                        }
                        if (t = (e.match(_e) || [s])[0], h = (f = e.split(t).join("").match(M) || []).length, c > h--)
                            for (; ++h < c;) f[h] = n ? f[(h - 1) / 2 | 0] : a[h];
                        return o + f.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, s, f;
                        if ("number" == typeof e) e += d;
                        else if (i && W.test(e)) {
                            for (s = e.replace(W, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                            return s.join(",")
                        }
                        if (f = (t = e.match("," == u ? M : B) || []).length, c > f--)
                            for (; ++f < c;) t[f] = n ? t[(f - 1) / 2 | 0] : a[f];
                        return (o && "none" !== e && e.substr(0, e.indexOf(t[0])) || o) + t.join(u) + l
                    } : function(e) {
                        return e
                    }
                }

                function be(e) {
                    return e = e.split(","),
                        function(t, n, i, r, s, a, o) {
                            var l, u = (n + "").split(" ");
                            for (o = {}, l = 0; l < 4; l++) o[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(t, o, s, a)
                        }
                }

                function xe(e, t, n, i, r, s) {
                    var a = new Te(e, t, n, i - n, r, -1, s);
                    return a.b = n, a.e = a.xs0 = i, a
                }
                _e = new RegExp(_e + ")", "gi"), s.colorStringFilter = function(e) {
                    var t, n = e[0] + " " + e[1];
                    _e.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = S(e[0], t), e[1] = S(e[1], t)), _e.lastIndex = 0
                }, i.l.defaultStringFilter || (i.l.defaultStringFilter = s.colorStringFilter), re._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, n, i, r, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) t = o[l.v], l.r ? t = l.r(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === e || 0 === e)
                        for (l = a.firstMPT, s = 1 === e ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n[s] = r
                                }
                            } else n[s] = n.s + n.xs0;
                            l = l._next
                        }
                };
                var Se = function(e, t, n, i, r) {
                        this.t = e, this.p = t, this.v = n, this.r = r, i && ((i._prev = this)._next = i)
                    },
                    Te = (re._parseToProxy = function(e, t, n, i, r, s) {
                        var a, o, l, u, c, d = i,
                            f = {},
                            h = {},
                            p = n._transform,
                            g = Z;
                        for (n._transform = null, Z = t, i = c = n.parse(e, t, i, r), Z = g, s && (n._transform = p, d && (d._prev = null, d._prev && (d._prev._next = null))); i && i !== d;) {
                            if (i.type <= 1 && (h[o = i.p] = i.s + i.c, f[o] = i.s, s || (u = new Se(i, "s", o, u, i.r), i.c = 0), 1 === i.type))
                                for (a = i.l; 0 < --a;) l = "xn" + a, h[o = i.p + "_" + l] = i.data[l], f[o] = i[l], s || (u = new Se(i, l, o, u, i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: f,
                            end: h,
                            firstMPT: u,
                            pt: c
                        }
                    }, re.CSSPropTween = function(t, n, i, s, a, o, l, u, c, d, f) {
                        this.t = t, this.p = n, this.s = i, this.c = s, this.n = l || n, t instanceof Te || r.push(this.n), this.r = u ? "function" == typeof u ? u : Math.round : u, this.type = o || 0, c && (this.pr = c, e = !0), this.b = void 0 === d ? i : d, this.e = void 0 === f ? i + s : f, a && ((this._next = a)._prev = this)
                    }),
                    we = s.parseComplex = function(e, t, n, i, r, a, o, l, u, c) {
                        n = n || a || "", "function" == typeof i && (i = i(F, P)), o = new Te(e, t, 0, 0, o, c ? 2 : 1, null, !1, l, n, i), i += "", r && _e.test(i + n) && (i = [n, i], s.colorStringFilter(i), n = i[0], i = i[1]);
                        var d, f, h, p, g, m, v, y, b, x, S, w, E, C = n.split(", ").join(",").split(" "),
                            A = i.split(", ").join(",").split(" "),
                            k = C.length,
                            R = !1 !== T;
                        for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (A = -1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (C = C.join(" ").replace(W, ", ").split(" "), A.join(" ").replace(W, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), A.join(" ").split(",").join(", ").split(" ")), k = C.length), k !== A.length && (k = (C = (a || "").split(" ")).length), o.plugin = u, o.setRatio = c, d = _e.lastIndex = 0; d < k; d++)
                            if (p = C[d], g = A[d] + "", (y = parseFloat(p)) || 0 === y) o.appendXtra("", y, _(g, y), g.replace(O, ""), R && -1 !== g.indexOf("px") && Math.round, !0);
                            else if (r && _e.test(p)) w = ")" + ((w = g.indexOf(")") + 1) ? g.substr(w) : ""), E = -1 !== g.indexOf("hsl") && ae, x = g, p = ve(p, E), g = ve(g, E), (b = 6 < p.length + g.length) && !ae && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[d]).join("transparent")) : (ae || (b = !1), E ? o.appendXtra(x.substr(0, x.indexOf("hsl")) + (b ? "hsla(" : "hsl("), p[0], _(g[0], p[0]), ",", !1, !0).appendXtra("", p[1], _(g[1], p[1]), "%,", !1).appendXtra("", p[2], _(g[2], p[2]), b ? "%," : "%" + w, !1) : o.appendXtra(x.substr(0, x.indexOf("rgb")) + (b ? "rgba(" : "rgb("), p[0], g[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], g[1] - p[1], ",", Math.round).appendXtra("", p[2], g[2] - p[2], b ? "," : w, Math.round), b && (p = p.length < 4 ? 1 : p[3], o.appendXtra("", p, (g.length < 4 ? 1 : g[3]) - p, w, !1))), _e.lastIndex = 0;
                        else if (m = p.match(D)) {
                            if (!(v = g.match(O)) || v.length !== m.length) return o;
                            for (f = h = 0; f < m.length; f++) S = m[f], x = p.indexOf(S, h), o.appendXtra(p.substr(h, x - h), Number(S), _(v[f], S), "", R && "px" === p.substr(x + S.length, 2) && Math.round, 0 === f), h = x + S.length;
                            o["xs" + o.l] += p.substr(h)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + g : g;
                        if (-1 !== i.indexOf("=") && o.data) {
                            for (w = o.xs0 + o.data.s, d = 1; d < o.l; d++) w += o["xs" + d] + o.data["xn" + d];
                            o.e = w + o["xs" + d]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    Ee = 9;
                for ((l = Te.prototype).l = l.pr = 0; 0 < --Ee;) l["xn" + Ee] = 0, l["xs" + Ee] = "";

                function Ce(e, t) {
                    t = t || {}, this.p = t.prefix && h(e) || e, o[e] = o[this.p] = this, this.format = t.formatter || ye(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.allowFunc = t.allowFunc, this.pr = t.priority || 0
                }
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(e, t, n, i, r, s) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += s && (o || a["xs" + o]) ? " " + e : e || "", n || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", 0 < o ? (a.data["xn" + o] = t + n, a.rxp["xn" + o] = r, a["xn" + o] = t, a.plugin || (a.xfirst = new Te(a, "xn" + o, t, n, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                        s: t + n
                    }, a.rxp = {}, a.s = t, a.c = n, a.r = r), a) : (a["xs" + o] += t + (i || ""), a)
                };
                var Ae = re._registerComplexSpecialProp = function(e, t, n) {
                        "object" != typeof t && (t = {
                            parser: n
                        });
                        var i, r = e.split(","),
                            s = t.defaultValue;
                        for (n = n || [s], i = 0; i < r.length; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || s, new Ce(r[i], t)
                    },
                    ke = re._registerPluginProp = function(e) {
                        if (!o[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            Ae(e, {
                                parser: function(e, n, i, r, s, l, u) {
                                    var c = a.com.greensock.plugins[t];
                                    return c ? (c._cssRegister(), o[i].parse(e, n, i, r, s, l, u)) : (f("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };

                function Pe(e, t, n) {
                    var i, r = te.createElementNS("http://www.w3.org/2000/svg", e),
                        s = /([a-z])([A-Z])/g;
                    for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
                    return t.appendChild(r), r
                }

                function Fe(e, t, n, i, r, a) {
                    var o, l, u, c, d, f, h, p, g, m, v, _, y, b, x = e._gsTransform,
                        S = We(e, !0);
                    x && (y = x.xOrigin, b = x.yOrigin), (!i || (o = i.split(" ")).length < 2) && (0 === (h = e.getBBox()).x && 0 === h.y && h.width + h.height === 0 && (h = {
                        x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                        y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), o = [(-1 !== (t = ge(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), n.xOrigin = c = parseFloat(o[0]), n.yOrigin = d = parseFloat(o[1]), i && S !== Ye && (f = S[0], h = S[1], p = S[2], g = S[3], m = S[4], v = S[5], (_ = f * g - h * p) && (l = c * (g / _) + d * (-p / _) + (p * v - g * m) / _, u = c * (-h / _) + d * (f / _) - (f * v - h * m) / _, c = n.xOrigin = o[0] = l, d = n.yOrigin = o[1] = u)), x && (a && (n.xOffset = x.xOffset, n.yOffset = x.yOffset, x = n), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (l = c - y, u = d - b, x.xOffset += l * S[0] + u * S[2] - l, x.yOffset += l * S[1] + u * S[3] - u) : x.xOffset = x.yOffset = 0), a || e.setAttribute("data-svg-origin", o.join(" "))
                }

                function Re(e) {
                    var t, n, i = this.data,
                        r = -i.rotation * $,
                        s = r + i.skewX * $,
                        a = 1e5,
                        o = (Math.cos(r) * i.scaleX * a | 0) / a,
                        l = (Math.sin(r) * i.scaleX * a | 0) / a,
                        u = (Math.sin(s) * -i.scaleY * a | 0) / a,
                        c = (Math.cos(s) * i.scaleY * a | 0) / a,
                        d = this.t.style,
                        f = this.t.currentStyle;
                    if (f) {
                        n = l, l = -u, u = -n, t = f.filter, d.filter = "";
                        var h, p, g = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            v = "absolute" !== f.position,
                            _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            y = i.x + g * i.xPercent / 100,
                            b = i.y + m * i.yPercent / 100;
                        if (null != i.ox && (y += (h = (i.oxp ? g * i.ox * .01 : i.ox) - g / 2) - (h * o + (p = (i.oyp ? m * i.oy * .01 : i.oy) - m / 2) * l), b += p - (h * u + p * c)), _ += v ? ", Dx=" + ((h = g / 2) - (h * o + (p = m / 2) * l) + y) + ", Dy=" + (p - (h * u + p * c) + b) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = t.replace(Y, _) : d.filter = _ + " " + t, 0 !== e && 1 !== e || 1 == o && 0 === l && 0 === u && 1 == c && (v && -1 === _.indexOf("Dx=0, Dy=0") || L.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && d.removeAttribute("filter")), !v) {
                            var x, S, T, w = k < 8 ? 1 : -1;
                            for (h = i.ieOffsetX || 0, p = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((o < 0 ? -o : o) * g + (l < 0 ? -l : l) * m)) / 2 + y), i.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (u < 0 ? -u : u) * g)) / 2 + b), Ee = 0; Ee < 4; Ee++) T = (n = -1 !== (x = f[S = pe[Ee]]).indexOf("px") ? parseFloat(x) : de(this.t, S, parseFloat(x), x.replace(N, "")) || 0) !== i[S] ? Ee < 2 ? -i.ieOffsetX : -i.ieOffsetY : Ee < 2 ? h - i.ieOffsetX : p - i.ieOffsetY, d[S] = (i[S] = Math.round(n - T * (0 === Ee || 2 === Ee ? 1 : w))) + "px"
                        }
                    }
                }(l = Ce.prototype).parseComplex = function(e, t, n, i, r, s) {
                    var a, o, l, u, c, d, f = this.keyword;
                    if (this.multi && (W.test(n) || W.test(t) ? (o = t.replace(W, "|").split("|"), l = n.replace(W, "|").split("|")) : f && (o = [t], l = [n])), l) {
                        for (u = l.length > o.length ? l.length : o.length, a = 0; a < u; a++) t = o[a] = o[a] || this.dflt, n = l[a] = l[a] || this.dflt, f && (c = t.indexOf(f)) !== (d = n.indexOf(f)) && (-1 === d ? o[a] = o[a].split(f).join("") : -1 === c && (o[a] += " " + f));
                        t = o.join(", "), n = l.join(", ")
                    }
                    return we(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, s)
                }, l.parse = function(e, t, i, r, s, a, o) {
                    return this.parseComplex(e.style, this.format(ce(e, this.p, n, !1, this.dflt)), this.format(t), s, a)
                }, s.registerSpecialProp = function(e, t, n) {
                    Ae(e, {
                        parser: function(e, i, r, s, a, o, l) {
                            var u = new Te(e, r, 0, 0, a, 2, r, !1, n);
                            return u.plugin = o, u.setRatio = t(e, i, s._tween, r), u
                        },
                        priority: n
                    })
                }, s.useSVGTransformAttr = !0;
                var Ie, De, Oe, Me, Be, Ge = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ne = h("transform"),
                    Le = oe + "transform",
                    Ve = h("transformOrigin"),
                    ze = null !== h("perspective"),
                    Ue = re.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !ze) && (s.defaultForce3D || "auto")
                    },
                    qe = i.k.SVGElement,
                    je = te.documentElement || {},
                    Ke = (Be = k || /Android/i.test(se) && !i.k.chrome, te.createElementNS && je.appendChild && !Be && (De = Pe("svg", je), Me = (Oe = Pe("rect", De, {
                        width: 100,
                        height: 50,
                        x: 100
                    })).getBoundingClientRect().width, Oe.style[Ve] = "50% 50%", Oe.style[Ne] = "scaleX(0.5)", Be = Me === Oe.getBoundingClientRect().width && !(C && ze), je.removeChild(De)), Be),
                    He = function(e) {
                        var t, n = c("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            r = this.nextSibling,
                            s = this.style.cssText;
                        if (je.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                            t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = He
                        } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                        return r ? i.insertBefore(this, r) : i.appendChild(this), je.removeChild(n), this.style.cssText = s, t
                    },
                    Xe = function(e) {
                        return !(!qe || !e.getCTM || e.parentNode && !e.ownerSVGElement || ! function(e) {
                            try {
                                return e.getBBox()
                            } catch (t) {
                                return He.call(e, !0)
                            }
                        }(e))
                    },
                    Ye = [1, 0, 0, 1, 0, 0],
                    We = function(e, t) {
                        var n, i, r, s, a, o, l, u = e._gsTransform || new Ue,
                            c = e.style;
                        if (Ne ? i = ce(e, Le, null, !0) : e.currentStyle && (i = (i = e.currentStyle.filter.match(X)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Ne && n && !e.offsetParent && e !== je && (s = c.display, c.display = "block", (l = e.parentNode) && e.offsetParent || (a = 1, o = e.nextSibling, je.appendChild(e)), n = !(i = ce(e, Le, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? c.display = s : et(c, "display"), a && (o ? l.insertBefore(e, o) : l ? l.appendChild(e) : je.removeChild(e))), (u.svg || e.getCTM && Xe(e)) && (n && -1 !== (c[Ne] + "").indexOf("matrix") && (i = c[Ne], n = 0), r = e.getAttribute("transform"), n && r && (i = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return Ye;
                        for (r = (i || "").match(D) || [], Ee = r.length; - 1 < --Ee;) s = Number(r[Ee]), r[Ee] = (a = s - (s |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                        return t && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Je = re.getTransform = function(e, t, n, r) {
                        if (e._gsTransform && n && !r) return e._gsTransform;
                        var a, o, l, u, c, d, f = n && e._gsTransform || new Ue,
                            h = f.scaleX < 0,
                            p = ze && (parseFloat(ce(e, Ve, t, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                            g = parseFloat(s.defaultTransformPerspective) || 0;
                        if (f.svg = !(!e.getCTM || !Xe(e)), f.svg && (Fe(e, ce(e, Ve, t, !1, "50% 50%") + "", f, e.getAttribute("data-svg-origin")), Ie = s.useSVGTransformAttr || Ke), (a = We(e)) !== Ye) {
                            if (16 === a.length) {
                                var m, v, _, y, b, x = a[0],
                                    S = a[1],
                                    T = a[2],
                                    w = a[3],
                                    E = a[4],
                                    C = a[5],
                                    A = a[6],
                                    k = a[7],
                                    P = a[8],
                                    F = a[9],
                                    R = a[10],
                                    I = a[12],
                                    D = a[13],
                                    O = a[14],
                                    M = a[11],
                                    B = Math.atan2(A, R);
                                f.zOrigin && (I = P * (O = -f.zOrigin) - a[12], D = F * O - a[13], O = R * O + f.zOrigin - a[14]), f.rotationX = B * Q, B && (m = E * (y = Math.cos(-B)) + P * (b = Math.sin(-B)), v = C * y + F * b, _ = A * y + R * b, P = E * -b + P * y, F = C * -b + F * y, R = A * -b + R * y, M = k * -b + M * y, E = m, C = v, A = _), B = Math.atan2(-T, R), f.rotationY = B * Q, B && (v = S * (y = Math.cos(-B)) - F * (b = Math.sin(-B)), _ = T * y - R * b, F = S * b + F * y, R = T * b + R * y, M = w * b + M * y, x = m = x * y - P * b, S = v, T = _), B = Math.atan2(S, x), f.rotation = B * Q, B && (m = x * (y = Math.cos(B)) + S * (b = Math.sin(B)), v = E * y + C * b, _ = P * y + F * b, S = S * y - x * b, C = C * y - E * b, F = F * y - P * b, x = m, E = v, P = _), f.rotationX && 359.9 < Math.abs(f.rotationX) + Math.abs(f.rotation) && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), B = Math.atan2(E, C), f.scaleX = (1e5 * Math.sqrt(x * x + S * S + T * T) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(C * C + A * A) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(P * P + F * F + R * R) + .5 | 0) / 1e5, x /= f.scaleX, E /= f.scaleY, S /= f.scaleX, C /= f.scaleY, 2e-5 < Math.abs(B) ? (f.skewX = B * Q, E = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(B))) : f.skewX = 0, f.perspective = M ? 1 / (M < 0 ? -M : M) : 0, f.x = I, f.y = D, f.z = O, f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * E), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * C))
                            } else if (!ze || r || !a.length || f.x !== a[4] || f.y !== a[5] || !f.rotationX && !f.rotationY) {
                                var G = 6 <= a.length,
                                    N = G ? a[0] : 1,
                                    L = a[1] || 0,
                                    V = a[2] || 0,
                                    z = G ? a[3] : 1;
                                f.x = a[4] || 0, f.y = a[5] || 0, l = Math.sqrt(N * N + L * L), u = Math.sqrt(z * z + V * V), c = N || L ? Math.atan2(L, N) * Q : f.rotation || 0, d = V || z ? Math.atan2(V, z) * Q + c : f.skewX || 0, f.scaleX = l, f.scaleY = u, f.rotation = c, f.skewX = d, ze && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * N + f.yOrigin * V), f.y -= f.yOrigin - (f.xOrigin * L + f.yOrigin * z))
                            }
                            for (o in 90 < Math.abs(f.skewX) && Math.abs(f.skewX) < 270 && (h ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = p, f) f[o] < 2e-5 && -2e-5 < f[o] && (f[o] = 0)
                        }
                        return n && (e._gsTransform = f).svg && (Ie && e.style[Ne] ? i.l.delayedCall(.001, function() {
                            et(e.style, Ne)
                        }) : !Ie && e.getAttribute("transform") && i.l.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        })), f
                    },
                    $e = re.set3DTransformRatio = re.setTransformRatio = function(e) {
                        var t, n, i, r, s, a, o, l, u, c, d, f, h, p, g, m, v, _, y, b, x = this.data,
                            S = this.t.style,
                            T = x.rotation,
                            w = x.rotationX,
                            E = x.rotationY,
                            A = x.scaleX,
                            k = x.scaleY,
                            P = x.scaleZ,
                            F = x.x,
                            R = x.y,
                            I = x.z,
                            D = x.svg,
                            O = x.perspective,
                            M = x.force3D,
                            B = x.skewY,
                            G = x.skewX;
                        if (B && (G += B, T += B), !((1 !== e && 0 !== e || "auto" !== M || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && M || I || O || E || w || 1 !== P) || Ie && D || !ze) T || G || D ? (T *= $, b = G * $, n = Math.cos(T) * A, s = Math.sin(T) * A, i = Math.sin(T - b) * -k, a = Math.cos(T - b) * k, b && "simple" === x.skewType && (t = Math.tan(b - B * $), i *= t = Math.sqrt(1 + t * t), a *= t, B && (t = Math.tan(B * $), n *= t = Math.sqrt(1 + t * t), s *= t)), D && (F += x.xOrigin - (x.xOrigin * n + x.yOrigin * i) + x.xOffset, R += x.yOrigin - (x.xOrigin * s + x.yOrigin * a) + x.yOffset, Ie && (x.xPercent || x.yPercent) && (g = this.t.getBBox(), F += .01 * x.xPercent * g.width, R += .01 * x.yPercent * g.height), F < (g = 1e-6) && -g < F && (F = 0), R < g && -g < R && (R = 0)), y = (1e5 * n | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * i | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + F + "," + R + ")", D && Ie ? this.t.setAttribute("transform", "matrix(" + y) : S[Ne] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + y) : S[Ne] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + k + "," + F + "," + R + ")";
                        else {
                            if (C && (A < (g = 1e-4) && -g < A && (A = P = 2e-5), k < g && -g < k && (k = P = 2e-5), !O || x.z || x.rotationX || x.rotationY || (O = 0)), T || G) T *= $, m = n = Math.cos(T), v = s = Math.sin(T), G && (T -= G * $, m = Math.cos(T), v = Math.sin(T), "simple" === x.skewType && (t = Math.tan((G - B) * $), m *= t = Math.sqrt(1 + t * t), v *= t, x.skewY && (t = Math.tan(B * $), n *= t = Math.sqrt(1 + t * t), s *= t))), i = -v, a = m;
                            else {
                                if (!(E || w || 1 !== P || O || D)) return void(S[Ne] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + R + "px," + I + "px)" + (1 !== A || 1 !== k ? " scale(" + A + "," + k + ")" : ""));
                                n = a = 1, i = s = 0
                            }
                            c = 1, r = o = l = u = d = f = 0, h = O ? -1 / O : 0, p = x.zOrigin, g = 1e-6, (T = E * $) && (m = Math.cos(T), d = h * (l = -(v = Math.sin(T))), r = n * v, o = s * v, h *= c = m, n *= m, s *= m), (T = w * $) && (t = i * (m = Math.cos(T)) + r * (v = Math.sin(T)), _ = a * m + o * v, u = c * v, f = h * v, r = i * -v + r * m, o = a * -v + o * m, c *= m, h *= m, i = t, a = _), 1 !== P && (r *= P, o *= P, c *= P, h *= P), 1 !== k && (i *= k, a *= k, u *= k, f *= k), 1 !== A && (n *= A, s *= A, l *= A, d *= A), (p || D) && (p && (F += r * -p, R += o * -p, I += c * -p + p), D && (F += x.xOrigin - (x.xOrigin * n + x.yOrigin * i) + x.xOffset, R += x.yOrigin - (x.xOrigin * s + x.yOrigin * a) + x.yOffset), F < g && -g < F && (F = "0"), R < g && -g < R && (R = "0"), I < g && -g < I && (I = 0)), y = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", y += (n < g && -g < n ? "0" : n) + "," + (s < g && -g < s ? "0" : s) + "," + (l < g && -g < l ? "0" : l), y += "," + (d < g && -g < d ? "0" : d) + "," + (i < g && -g < i ? "0" : i) + "," + (a < g && -g < a ? "0" : a), w || E || 1 !== P ? (y += "," + (u < g && -g < u ? "0" : u) + "," + (f < g && -g < f ? "0" : f) + "," + (r < g && -g < r ? "0" : r), y += "," + (o < g && -g < o ? "0" : o) + "," + (c < g && -g < c ? "0" : c) + "," + (h < g && -g < h ? "0" : h) + ",") : y += ",0,0,0,0,1,0,", y += F + "," + R + "," + I + "," + (O ? 1 + -I / O : 1) + ")", S[Ne] = y
                        }
                    };

                function Qe(e) {
                    var t, n = this.t,
                        i = n.filter || ce(this.data, "filter") || "",
                        r = this.s + this.c * e | 0;
                    100 == r && (t = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), !ce(this.data, "filter")) : (n.filter = i.replace(z, ""), !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 == r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(L, "opacity=" + r))
                }

                function Ze(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : et(n, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                }(l = Ue.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Ae("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, i, r, a, o, l) {
                        if (r._lastParsedTransform === l) return a;
                        var u = (r._lastParsedTransform = l).scale && "function" == typeof l.scale ? l.scale : 0;
                        u && (l.scale = u(F, e));
                        var c, d, f, h, p, g, m, v, _, x = e._gsTransform,
                            S = e.style,
                            T = Ge.length,
                            w = l,
                            E = {},
                            C = "transformOrigin",
                            A = Je(e, n, !0, w.parseTransform),
                            k = w.transform && ("function" == typeof w.transform ? w.transform(F, P) : w.transform);
                        if (A.skewType = w.skewType || A.skewType || s.defaultSkewType, r._transform = A, "rotationZ" in w && (w.rotation = w.rotationZ), k && "string" == typeof k && Ne)(d = ne.style)[Ne] = k, d.display = "block", d.position = "absolute", -1 !== k.indexOf("%") && (d.width = ce(e, "width"), d.height = ce(e, "height")), te.body.appendChild(ne), c = Je(ne, null, !1), "simple" === A.skewType && (c.scaleY *= Math.cos(c.skewX * $)), A.svg && (g = A.xOrigin, m = A.yOrigin, c.x -= A.xOffset, c.y -= A.yOffset, (w.transformOrigin || w.svgOrigin) && (k = {}, Fe(e, ge(w.transformOrigin), k, w.svgOrigin, w.smoothOrigin, !0), g = k.xOrigin, m = k.yOrigin, c.x -= k.xOffset - A.xOffset, c.y -= k.yOffset - A.yOffset), (g || m) && (v = We(ne, !0), c.x -= g - (g * v[0] + m * v[2]), c.y -= m - (g * v[1] + m * v[3]))), te.body.removeChild(ne), c.perspective || (c.perspective = A.perspective), null != w.xPercent && (c.xPercent = y(w.xPercent, A.xPercent)), null != w.yPercent && (c.yPercent = y(w.yPercent, A.yPercent));
                        else if ("object" == typeof w) {
                            if (c = {
                                    scaleX: y(null != w.scaleX ? w.scaleX : w.scale, A.scaleX),
                                    scaleY: y(null != w.scaleY ? w.scaleY : w.scale, A.scaleY),
                                    scaleZ: y(w.scaleZ, A.scaleZ),
                                    x: y(w.x, A.x),
                                    y: y(w.y, A.y),
                                    z: y(w.z, A.z),
                                    xPercent: y(w.xPercent, A.xPercent),
                                    yPercent: y(w.yPercent, A.yPercent),
                                    perspective: y(w.transformPerspective, A.perspective)
                                }, null != (p = w.directionalRotation))
                                if ("object" == typeof p)
                                    for (d in p) w[d] = p[d];
                                else w.rotation = p;
                            "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = y(w.x, A.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = y(w.y, A.yPercent)), c.rotation = b("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : A.rotation, A.rotation, "rotation", E), ze && (c.rotationX = b("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", E), c.rotationY = b("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", E)), c.skewX = b(w.skewX, A.skewX), c.skewY = b(w.skewY, A.skewY)
                        }
                        for (ze && null != w.force3D && (A.force3D = w.force3D, h = !0), (f = A.force3D || A.z || A.rotationX || A.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == w.scale || (c.scaleZ = 1); - 1 < --T;)(1e-6 < (k = c[_ = Ge[T]] - A[_]) || k < -1e-6 || null != w[_] || null != Z[_]) && (h = !0, a = new Te(A, _, A[_], k, a), _ in E && (a.e = E[_]), a.xs0 = 0, a.plugin = o, r._overwriteProps.push(a.n));
                        return k = "function" == typeof w.transformOrigin ? w.transformOrigin(F, P) : w.transformOrigin, A.svg && (k || w.svgOrigin) && (g = A.xOffset, m = A.yOffset, Fe(e, ge(k), c, w.svgOrigin, w.smoothOrigin), a = xe(A, "xOrigin", (x ? A : c).xOrigin, c.xOrigin, a, C), a = xe(A, "yOrigin", (x ? A : c).yOrigin, c.yOrigin, a, C), g === A.xOffset && m === A.yOffset || (a = xe(A, "xOffset", x ? g : A.xOffset, A.xOffset, a, C), a = xe(A, "yOffset", x ? m : A.yOffset, A.yOffset, a, C)), k = "0px 0px"), (k || ze && f && A.zOrigin) && (Ne ? (h = !0, _ = Ve, k = k || (k = (ce(e, _, n, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + A.zOrigin + "px", k += "", (a = new Te(S, _, 0, 0, a, -1, C)).b = S[_], a.plugin = o, ze ? (d = A.zOrigin, k = k.split(" "), A.zOrigin = (2 < k.length ? parseFloat(k[2]) : d) || 0, a.xs0 = a.e = k[0] + " " + (k[1] || "50%") + " 0px", (a = new Te(A, "zOrigin", 0, 0, a, -1, a.n)).b = d, a.xs0 = a.e = A.zOrigin) : a.xs0 = a.e = k) : ge(k + "", A)), h && (r._transformType = A.svg && Ie || !f && 3 !== this._transformType ? 2 : 3), u && (l.scale = u), a
                    },
                    allowFunc: !0,
                    prefix: !0
                }), Ae("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Ae("clipPath", {
                    defaultValue: "inset(0%)",
                    prefix: !0,
                    multi: !0,
                    formatter: ye("inset(0% 0% 0% 0%)", !1, !0)
                }), Ae("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, i, r, s, a, o) {
                        i = this.format(i);
                        var l, u, c, d, f, p, g, m, v, _, y, b, x, S, T, w, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = e.style;
                        for (v = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), l = i.split(" "), u = 0; u < E.length; u++) this.p.indexOf("border") && (E[u] = h(E[u])), -1 !== (f = d = ce(e, E[u], n, !1, "0px")).indexOf(" ") && (f = (d = f.split(" "))[0], d = d[1]), p = c = l[u], g = parseFloat(f), b = f.substr((g + "").length), "" === (y = (x = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), p.substr((m + "").length))) && (y = t[r] || b), y !== b && (S = de(e, "borderLeft", g, b), T = de(e, "borderTop", g, b), d = "%" === y ? (f = S / v * 100 + "%", T / _ * 100 + "%") : "em" === y ? (f = S / (w = de(e, "borderLeft", 1, "em")) + "em", T / w + "em") : (f = S + "px", T + "px"), x && (p = parseFloat(f) + m + y, c = parseFloat(d) + m + y)), a = we(C, E[u], f + " " + d, p + " " + c, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ye("0px 0px 0px 0px", !1, !0)
                }), Ae("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, r, s, a) {
                        return we(e.style, i, this.format(ce(e, i, n, !1, "0px 0px")), this.format(t), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: ye("0px 0px", !1, !0)
                }), Ae("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, r, s, a) {
                        var o, l, u, c, d, f, h = "background-position",
                            g = n || p(e),
                            m = this.format((g ? k ? g.getPropertyValue(h + "-x") + " " + g.getPropertyValue(h + "-y") : g.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(t);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = ce(e, "backgroundImage").replace(K, "")) && "none" !== f) {
                            for (o = m.split(" "), l = v.split(" "), ie.setAttribute("src", f), u = 2; - 1 < --u;)(c = -1 !== (m = o[u]).indexOf("%")) != (-1 !== l[u].indexOf("%")) && (d = 0 === u ? e.offsetWidth - ie.width : e.offsetHeight - ie.height, o[u] = c ? parseFloat(m) / 100 * d + "px" : parseFloat(m) / d * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(e.style, m, v, s, a)
                    },
                    formatter: ge
                }), Ae("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return "co" === (e += "").substr(0, 2) ? e : ge(-1 === e.indexOf(" ") ? e + " " + e : e)
                    }
                }), Ae("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Ae("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Ae("transformStyle", {
                    prefix: !0
                }), Ae("backfaceVisibility", {
                    prefix: !0
                }), Ae("userSelect", {
                    prefix: !0
                }), Ae("margin", {
                    parser: be("marginTop,marginRight,marginBottom,marginLeft")
                }), Ae("padding", {
                    parser: be("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Ae("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, r, s, a) {
                        var o, l, u;
                        return t = k < 9 ? (l = e.currentStyle, u = k < 8 ? " " : ",", o = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", this.format(t).split(",").join(u)) : (o = this.format(ce(e, this.p, n, !1, this.dflt)), this.format(t)), this.parseComplex(e.style, o, t, s, a)
                    }
                }), Ae("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Ae("autoRound,strictUnits", {
                    parser: function(e, t, n, i, r) {
                        return r
                    }
                }), Ae("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, r, s, a) {
                        var o = ce(e, "borderTopWidth", n, !1, "0px"),
                            l = this.format(t).split(" "),
                            u = l[0].replace(N, "");
                        return "px" !== u && (o = parseFloat(o) / de(e, "borderTopWidth", 1, u) + u), this.parseComplex(e.style, this.format(o + " " + ce(e, "borderTopStyle", n, !1, "solid") + " " + ce(e, "borderTopColor", n, !1, "#000")), l.join(" "), s, a)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(_e) || ["#000"])[0]
                    }
                }), Ae("borderWidth", {
                    parser: be("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Ae("float,cssFloat,styleFloat", {
                    parser: function(e, t, n, i, r, s) {
                        var a = e.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new Te(a, o, 0, 0, r, -1, n, !1, 0, a[o], t)
                    }
                }), Ae("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, r, s, a) {
                        var o = parseFloat(ce(e, "opacity", n, !1, "1")),
                            l = e.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), u && 1 === o && "hidden" === ce(e, "visibility", n) && 0 !== t && (o = 0), ae ? s = new Te(l, "opacity", o, t - o, s) : ((s = new Te(l, "opacity", 100 * o, 100 * (t - o), s)).xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = a, s.setRatio = Qe), u && ((s = new Te(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(i)), s
                    }
                });
                var et = function(e, t) {
                    t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(q, "-$1").toLowerCase())) : e.removeAttribute(t))
                };

                function tt(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, n, i, r, s, a = this.t.style,
                            l = o.transform.parse;
                        if ("all" === this.e) r = !(a.cssText = "");
                        else
                            for (i = (t = this.e.split(" ").join("").split(",")).length; - 1 < --i;) n = t[i], o[n] && (o[n].parse === l ? r = !0 : n = "transformOrigin" === n ? Ve : o[n].p), et(a, n);
                        r && (et(a, Ne), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                }
                for (Ae("className", {
                        parser: function(t, i, r, s, a, o, l) {
                            var u, c, d, f, h, p = t.getAttribute("class") || "",
                                v = t.style.cssText;
                            if ((a = s._classNamePT = new Te(t, r, 0, 0, a, 2)).setRatio = Ze, a.pr = -11, e = !0, a.b = p, c = g(t, n), d = t._gsClassPT) {
                                for (f = {}, h = d.data; h;) f[h.p] = 1, h = h._next;
                                d.setRatio(1)
                            }
                            return (t._gsClassPT = a).e = "=" !== i.charAt(1) ? i : p.replace(new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"), "") + ("+" === i.charAt(0) ? " " + i.substr(2) : ""), t.setAttribute("class", a.e), u = m(t, c, g(t), l, f), t.setAttribute("class", p), a.data = u.firstMPT, t.style.cssText !== v && (t.style.cssText = v), a.xfirst = s.parse(t, u.difs, a, o)
                        }
                    }), Ae("clearProps", {
                        parser: function(t, n, i, r, s) {
                            return (s = new Te(t, i, 0, 0, s, 2)).setRatio = tt, s.e = n, s.pr = -10, s.data = r._tween, e = !0, s
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), Ee = l.length; Ee--;) ke(l[Ee]);

                function nt(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                }(l = s.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(i, a, l, u) {
                    if (!i.nodeType) return !1;
                    this._target = P = i, this._tween = l, this._vars = a, F = u, T = a.autoRound, e = !1, t = a.suffixMap || s.suffixMap, n = p(i), r = this._overwriteProps;
                    var c, d, f, h, v, _, y, b, x, S = i.style;
                    if (w && "" === S.zIndex && ("auto" !== (c = ce(i, "zIndex", n)) && "" !== c || this._addLazySet(S, "zIndex", 0)), "string" == typeof a && (h = S.cssText, c = g(i, n), S.cssText = h + ";" + a, c = m(i, c, g(i)).difs, !ae && V.test(a) && (c.opacity = parseFloat(RegExp.$1)), a = c, S.cssText = h), a.className ? this._firstPT = d = o.className.parse(i, a.className, "className", this, null, null, a) : this._firstPT = d = this.parse(i, a, null), this._transformType) {
                        for (x = 3 === this._transformType, Ne ? E && (w = !0, "" === S.zIndex && ("auto" !== (y = ce(i, "zIndex", n)) && "" !== y || this._addLazySet(S, "zIndex", 0)), A && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : S.zoom = 1, f = d; f && f._next;) f = f._next;
                        b = new Te(i, "transform", 0, 0, null, 2), this._linkCSSP(b, null, f), b.setRatio = Ne ? $e : Re, b.data = this._transform || Je(i, n, !0), b.tween = l, b.pr = -1, r.pop()
                    }
                    if (e) {
                        for (; d;) {
                            for (_ = d._next, f = h; f && f.pr > d.pr;) f = f._next;
                            (d._prev = f ? f._prev : v) ? d._prev._next = d: h = d, (d._next = f) ? f._prev = d : v = d, d = _
                        }
                        this._firstPT = h
                    }
                    return !0
                }, l.parse = function(e, i, r, s) {
                    var a, l, u, c, d, h, g, m, _, y, b = e.style;
                    for (a in i) {
                        if (h = i[a], l = o[a], "function" != typeof h || l && l.allowFunc || (h = h(F, P)), l) r = l.parse(e, h, a, this, r, s, i);
                        else {
                            if ("--" === a.substr(0, 2)) {
                                this._tween._propLookup[a] = this._addTween.call(this._tween, e.style, "setProperty", p(e).getPropertyValue(a) + "", h + "", a, !1, a);
                                continue
                            }
                            d = ce(e, a, n) + "", _ = "string" == typeof h, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || _ && U.test(h) ? (_ || (h = (3 < (h = ve(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"), r = we(b, a, d, h, !0, "transparent", r, 0, s)) : _ && J.test(h) ? r = we(b, a, d, h, !0, null, r, 0, s) : (g = (u = parseFloat(d)) || 0 === u ? d.substr((u + "").length) : "", "" !== d && "auto" !== d || (g = "width" === a || "height" === a ? (u = v(e, a, n), "px") : "left" === a || "top" === a ? (u = fe(e, a, n), "px") : (u = "opacity" !== a ? 0 : 1, "")), "" === (m = (y = _ && "=" === h.charAt(1)) ? (c = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), c *= parseFloat(h), h.replace(N, "")) : (c = parseFloat(h), _ ? h.replace(N, "") : "")) && (m = a in t ? t[a] : g), h = c || 0 === c ? (y ? c + u : c) + m : i[a], g !== m && ("" === m && "lineHeight" !== a || (c || 0 === c) && u && (u = de(e, a, u, g), "%" === m ? (u /= de(e, a, 100, "%") / 100, !0 !== i.strictUnits && (d = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= de(e, a, 1, m) : "px" !== m && (c = de(e, a, c, m), m = "px"), y && (!c && 0 !== c || (h = c + u + m)))), y && (c += u), !u && 0 !== u || !c && 0 !== c ? void 0 !== b[a] && (h || h + "" != "NaN" && null != h) ? (r = new Te(b, a, c || u || 0, 0, r, -1, a, !1, 0, d, h)).xs0 = "none" !== h || "display" !== a && -1 === a.indexOf("Style") ? h : d : f("invalid " + a + " tween value: " + i[a]) : (r = new Te(b, a, u, c - u, r, 0, a, !1 !== T && ("px" === m || "zIndex" === a), 0, d, h)).xs0 = m)
                        }
                        s && r && !r.plugin && (r.plugin = s)
                    }
                    return r
                }, l.setRatio = function(e) {
                    var t, n, i, r = this._firstPT;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (t = r.c * e + r.s, r.r ? t = r.r(t) : t < 1e-6 && -1e-6 < t && (t = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (i = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                                else r.t[r.p] = t + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (t = r.r(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        } else r.t[r.p] = t + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(e);
                                r = r._next
                            }
                }, l._enableTransforms = function(e) {
                    this._transform = this._transform || Je(this._target, n, !0), this._transformType = this._transform.svg && Ie || !e && 3 !== this._transformType ? 2 : 3
                }, l._addLazySet = function(e, t, n) {
                    var i = this._firstPT = new Te(e, t, 0, 0, this._firstPT, 2);
                    i.e = n, i.setRatio = nt, i.data = this
                }, l._linkCSSP = function(e, t, n, i) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
                }, l._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
                }, l._kill = function(e) {
                    var t, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        for (n in s = {}, e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    for (e.className && (t = this._classNamePT) && ((r = t.xfirst) && r._prev ? this._linkCSSP(r._prev, t._next, r._prev._prev) : r === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, r._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== n && t.plugin._kill && (t.plugin._kill(e), n = t.plugin), t = t._next;
                    return i.j.prototype._kill.call(this, s)
                };
                var it = function(e, t, n) {
                    var i, r, s, a;
                    if (e.slice)
                        for (r = e.length; - 1 < --r;) it(e[r], t, n);
                    else
                        for (r = (i = e.childNodes).length; - 1 < --r;) a = (s = i[r]).type, s.style && (t.push(g(s)), n && n.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || it(s, t, n)
                };
                return s.cascadeTo = function(e, t, n) {
                    var r, s, a, o, l = i.l.to(e, t, n),
                        u = [l],
                        c = [],
                        d = [],
                        f = [],
                        h = i.l._internals.reservedProps;
                    for (e = l._targets || l.target, it(e, c, f), l.render(t, !0, !0), it(e, d), l.render(0, !0, !0), l._enabled(!0), r = f.length; - 1 < --r;)
                        if ((s = m(f[r], c[r], d[r])).firstMPT) {
                            for (a in s = s.difs, n) h[a] && (s[a] = n[a]);
                            for (a in o = {}, s) o[a] = c[r][a];
                            u.push(i.l.fromTo(f[r], t, o, s))
                        }
                    return u
                }, i.j.activate([s]), s
            }, !0);
            var u = i.m.CSSPlugin,
                c = i.k._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(e, t, n, i) {
                        var r, s;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (r in t) "function" == typeof(s = t[r]) && (s = s(i, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                }),
                d = i.k._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.7.0",
                    priority: -1,
                    API: 2,
                    init: function(e, t, n) {
                        return this._tween = n, !0
                    }
                }),
                f = d.prototype;
            f._onInitAllProps = function() {
                var e, t, n, i, r = this._tween,
                    s = r.vars.roundProps,
                    a = {},
                    u = r._propLookup.roundProps;
                if ("object" != typeof s || s.push)
                    for ("string" == typeof s && (s = s.split(",")), n = s.length; - 1 < --n;) a[s[n]] = Math.round;
                else
                    for (i in s) a[i] = o(s[i]);
                for (i in a)
                    for (e = r._firstPT; e;) t = e._next, e.pg ? e.t._mod(a) : e.n === i && (2 === e.f && e.t ? l(e.t._firstPT, a[i]) : (this._add(e.t, i, e.s, e.c, a[i]), t && (t._prev = e._prev), e._prev ? e._prev._next = t : r._firstPT === e && (r._firstPT = t), e._next = e._prev = null, r._propLookup[i] = u)), e = t;
                return !1
            }, f._add = function(e, t, n, i, r) {
                this._addTween(e, t, n, n + i, t, r || Math.round), this._overwriteProps.push(t)
            };
            var h = i.k._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(e, t, n, i) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, s, a, o, l, u, c = !0 === t.useRadians ? 2 * Math.PI : 360;
                    for (r in t) "useRadians" !== r && ("function" == typeof(o = t[r]) && (o = o(i, e)), s = (u = (o + "").split("_"))[0], a = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - a, u.length && (-1 !== (s = u.join("_")).indexOf("short") && (l %= c) != l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(e, r, a, a + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            });

            function p(e, t, n, i) {
                n === i && (n = i - (i - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = i, this.da = i - e, this.ca = n - e, this.ba = t - e
            }

            function g(e, t, n, i) {
                var r = {
                        a: e
                    },
                    s = {},
                    a = {},
                    o = {
                        c: i
                    },
                    l = (e + t) / 2,
                    u = (t + n) / 2,
                    c = (n + i) / 2,
                    d = (l + u) / 2,
                    f = (u + c) / 2,
                    h = (f - d) / 8;
                return r.b = l + (e - l) / 4, s.b = d + h, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (d + f) / 2, a.b = f - h, o.b = c + (i - c) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
            }

            function m(e, t, n, i, r) {
                var s, a, o, l, u, c, d, f, h, p, m, v, _, y = e.length - 1,
                    b = 0,
                    w = e[0].a;
                for (s = 0; s < y; s++) a = (u = e[b]).a, o = u.d, l = e[b + 1].d, f = r ? (m = x[s], _ = ((v = S[s]) + m) * t * .25 / (i ? .5 : T[s] || .5), o - ((c = o - (o - a) * (i ? .5 * t : 0 !== m ? _ / m : 0)) + (((d = o + (l - o) * (i ? .5 * t : 0 !== v ? _ / v : 0)) - c) * (3 * m / (m + v) + .5) / 4 || 0))) : o - ((c = o - (o - a) * t * .5) + (d = o + (l - o) * t * .5)) / 2, c += f, d += f, u.c = h = c, u.b = 0 !== s ? w : w = u.a + .6 * (u.c - u.a), u.da = o - a, u.ca = h - a, u.ba = w - a, n ? (p = g(a, w, h, o), e.splice(b, 1, p[0], p[1], p[2], p[3]), b += 4) : b++, w = d;
                (u = e[b]).b = w, u.c = w + .4 * (u.d - w), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = w - u.a, n && (p = g(u.a, w, u.c, u.d), e.splice(b, 1, p[0], p[1], p[2], p[3]))
            }

            function v(e, t, n, i) {
                var r, s, a, o, l, u, c = [];
                if (i)
                    for (s = (e = [i].concat(e)).length; - 1 < --s;) "string" == typeof(u = e[s][t]) && "=" === u.charAt(1) && (e[s][t] = i[t] + Number(u.charAt(0) + u.substr(2)));
                if ((r = e.length - 2) < 0) return c[0] = new p(e[0][t], 0, 0, e[0][t]), c;
                for (s = 0; s < r; s++) a = e[s][t], o = e[s + 1][t], c[s] = new p(a, 0, 0, o), n && (l = e[s + 2][t], x[s] = (x[s] || 0) + (o - a) * (o - a), S[s] = (S[s] || 0) + (l - o) * (l - o));
                return c[s] = new p(e[s][t], 0, 0, e[s + 1][t]), c
            }

            function _(e, t, n, i, r, s) {
                var a, o, l, u, c, d, f, h, p = {},
                    g = [],
                    _ = s || e[0];
                for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) g.push(o);
                if (1 < e.length) {
                    for (h = e[e.length - 1], f = !0, a = g.length; - 1 < --a;)
                        if (o = g[a], .05 < Math.abs(_[o] - h[o])) {
                            f = !1;
                            break
                        }
                    f && (e = e.concat(), s && e.unshift(s), e.push(e[1]), s = e[e.length - 3])
                }
                for (x.length = S.length = T.length = 0, a = g.length; - 1 < --a;) o = g[a], w[o] = -1 !== r.indexOf("," + o + ","), p[o] = v(e, o, w[o], s);
                for (a = x.length; - 1 < --a;) x[a] = Math.sqrt(x[a]), S[a] = Math.sqrt(S[a]);
                if (!i) {
                    for (a = g.length; - 1 < --a;)
                        if (w[o])
                            for (d = (l = p[g[a]]).length - 1, u = 0; u < d; u++) c = l[u + 1].da / S[u] + l[u].da / x[u] || 0, T[u] = (T[u] || 0) + c * c;
                    for (a = T.length; - 1 < --a;) T[a] = Math.sqrt(T[a])
                }
                for (a = g.length, u = n ? 4 : 1; - 1 < --a;) m(l = p[o = g[a]], t, n, i, w[o]), f && (l.splice(0, u), l.splice(l.length - u, u));
                return p
            }

            function y(e, t, n) {
                for (var i, r, s, a, o, l, u, c, d, f, h, p = 1 / n, g = e.length; - 1 < --g;)
                    for (s = (f = e[g]).a, a = f.d - s, o = f.c - s, l = f.b - s, i = r = 0, c = 1; c <= n; c++) i = r - (r = ((u = p * c) * u * a + 3 * (d = 1 - u) * (u * o + d * l)) * u), t[h = g * n + c - 1] = (t[h] || 0) + i * i
            }
            h._autoCSS = !0;
            var b = 180 / Math.PI,
                x = [],
                S = [],
                T = [],
                w = {},
                E = i.k._gsDefine.globals,
                C = i.k._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.9",
                    API: 2,
                    global: !0,
                    init: function(e, t, n) {
                        this._target = e, t instanceof Array && (t = {
                            values: t
                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                        var i, r, s, a, o, l = t.values || [],
                            u = {},
                            c = l[0],
                            d = t.autoRotate || n.vars.orientToBezier;
                        for (i in this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                            ] : null, c) this._props.push(i);
                        for (s = this._props.length; - 1 < --s;) i = this._props[s], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof e[i], u[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]), o || u[i] !== l[0][i] && (o = u);
                        if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? _(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : function(e, t, n) {
                                var i, r, s, a, o, l, u, c, d, f, h, g = {},
                                    m = "cubic" === (t = t || "soft") ? 3 : 2,
                                    v = "soft" === t,
                                    _ = [];
                                if (v && n && (e = [n].concat(e)), null == e || e.length < 1 + m) throw "invalid Bezier data";
                                for (d in e[0]) _.push(d);
                                for (l = _.length; - 1 < --l;) {
                                    for (g[d = _[l]] = o = [], f = 0, c = e.length, u = 0; u < c; u++) i = null == n ? e[u][d] : "string" == typeof(h = e[u][d]) && "=" === h.charAt(1) ? n[d] + Number(h.charAt(0) + h.substr(2)) : Number(h), v && 1 < u && u < c - 1 && (o[f++] = (i + o[f - 2]) / 2), o[f++] = i;
                                    for (c = f - m + 1, u = f = 0; u < c; u += m) i = o[u], r = o[u + 1], s = o[u + 2], a = 2 == m ? 0 : o[u + 3], o[f++] = h = 3 == m ? new p(i, r, s, a) : new p(i, (2 * r + i) / 3, (2 * r + s) / 3, s);
                                    o.length = f
                                }
                                return g
                            }(l, t.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                            var f = function(e, t) {
                                var n, i, r, s, a = [],
                                    o = [],
                                    l = 0,
                                    u = 0,
                                    c = (t = t >> 0 || 6) - 1,
                                    d = [],
                                    f = [];
                                for (n in e) y(e[n], a, t);
                                for (r = a.length, i = 0; i < r; i++) l += Math.sqrt(a[i]), f[s = i % t] = l, s === c && (u += l, d[s = i / t >> 0] = f, o[s] = u, l = 0, f = []);
                                return {
                                    length: u,
                                    lengths: o,
                                    segments: d
                                }
                            }(this._beziers, this._timeRes);
                            this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                        }
                        if (d = this._autoRotate)
                            for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; - 1 < --s;) {
                                for (a = 0; a < 3; a++) i = d[s][a], this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                i = d[s][2], this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                            }
                        return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                    },
                    set: function(e) {
                        var t, n, i, r, s, a, o, l, u, c, d, f = this._segCount,
                            h = this._func,
                            p = this._target,
                            g = e !== this._startRatio;
                        if (this._timeRes) {
                            if (u = this._lengths, c = this._curSeg, d = e * this._length, i = this._li, d > this._l2 && i < f - 1) {
                                for (l = f - 1; i < l && (this._l2 = u[++i]) <= d;);
                                this._l1 = u[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                            } else if (d < this._l1 && 0 < i) {
                                for (; 0 < i && (this._l1 = u[--i]) >= d;);
                                0 === i && d < this._l1 ? this._l1 = 0 : i++, this._l2 = u[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                            }
                            if (t = i, d -= this._l1, i = this._si, d > this._s2 && i < c.length - 1) {
                                for (l = c.length - 1; i < l && (this._s2 = c[++i]) <= d;);
                                this._s1 = c[i - 1], this._si = i
                            } else if (d < this._s1 && 0 < i) {
                                for (; 0 < i && (this._s1 = c[--i]) >= d;);
                                0 === i && d < this._s1 ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                            }
                            a = 1 === e ? 1 : (i + (d - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else a = (e - (t = e < 0 ? 0 : 1 <= e ? f - 1 : f * e >> 0) * (1 / f)) * f;
                        for (n = 1 - a, i = this._props.length; - 1 < --i;) r = this._props[i], o = (a * a * (s = this._beziers[r][t]).da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[r] && (o = this._mod[r](o, p)), h[r] ? p[r](o) : p[r] = o;
                        if (this._autoRotate) {
                            var m, v, _, y, x, S, T, w = this._autoRotate;
                            for (i = w.length; - 1 < --i;) r = w[i][2], S = w[i][3] || 0, T = !0 === w[i][4] ? 1 : b, s = this._beziers[w[i][0]], m = this._beziers[w[i][1]], s && m && (s = s[t], m = m[t], v = s.a + (s.b - s.a) * a, v += ((y = s.b + (s.c - s.b) * a) - v) * a, y += (s.c + (s.d - s.c) * a - y) * a, _ = m.a + (m.b - m.a) * a, _ += ((x = m.b + (m.c - m.b) * a) - _) * a, x += (m.c + (m.d - m.c) * a - x) * a, o = g ? Math.atan2(x - _, y - v) * T + S : this._initialRotations[i], this._mod[r] && (o = this._mod[r](o, p)), h[r] ? p[r](o) : p[r] = o)
                        }
                    }
                }),
                A = C.prototype;
            C.bezierThrough = _, C.cubicToQuadratic = g, C._autoCSS = !0, C.quadraticToCubic = function(e, t, n) {
                return new p(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
            }, C._cssRegister = function() {
                var e = E.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        n = t._parseToProxy,
                        i = t._setPluginRatio,
                        r = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function(e, t, s, a, o, l) {
                            t instanceof Array && (t = {
                                values: t
                            }), l = new C;
                            var u, c, d, f = t.values,
                                h = f.length - 1,
                                p = [],
                                g = {};
                            if (h < 0) return o;
                            for (u = 0; u <= h; u++) d = n(e, f[u], a, o, l, h !== u), p[u] = d.end;
                            for (c in t) g[c] = t[c];
                            return g.values = p, (o = new r(e, "bezier", 0, 0, d.pt, 2)).data = d, o.plugin = l, o.setRatio = i, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != d.end.left ? [
                                ["left", "top", "rotation", u, !1]
                            ] : null != d.end.x && [
                                ["x", "y", "rotation", u, !1]
                            ]), g.autoRotate && (a._transform || a._enableTransforms(!1), d.autoRotate = a._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(d.proxy, g, a._tween), o
                        }
                    })
                }
            }, A._mod = function(e) {
                for (var t, n = this._overwriteProps, i = n.length; - 1 < --i;)(t = e[n[i]]) && "function" == typeof t && (this._mod[n[i]] = t)
            }, A._kill = function(e) {
                var t, n, i = this._props;
                for (t in this._beziers)
                    if (t in e)
                        for (delete this._beziers[t], delete this._func[t], n = i.length; - 1 < --n;) i[n] === t && i.splice(n, 1);
                if (i = this._autoRotate)
                    for (n = i.length; - 1 < --n;) e[i[n][2]] && i.splice(n, 1);
                return this._super._kill.call(this, e)
            }, i.k._gsDefine("easing.Back", ["easing.Ease"], function() {
                function e(e, t) {
                    var n = h("easing." + e, function() {}, !0),
                        r = n.prototype = new i.b;
                    return r.constructor = n, r.getRatio = t, n
                }

                function t(e, t, n, i, r) {
                    var s = h("easing." + e, {
                        easeOut: new t,
                        easeIn: new n,
                        easeInOut: new i
                    }, !0);
                    return p(s, e), s
                }

                function n(e, t, n) {
                    this.t = e, this.v = t, n && (((this.next = n).prev = this).c = n.v - t, this.gap = n.t - e)
                }

                function r(e, t) {
                    var n = h("easing." + e, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = n.prototype = new i.b;
                    return r.constructor = n, r.getRatio = t, r.config = function(e) {
                        return new n(e)
                    }, n
                }
                var s, a, o, l, u = i.k.GreenSockGlobals || i.k,
                    c = u.com.greensock,
                    d = 2 * Math.PI,
                    f = Math.PI / 2,
                    h = c._class,
                    p = i.b.register || function() {},
                    g = t("Back", r("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), r("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), r("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                    }, !0),
                    v = m.prototype = new i.b;
                return v.constructor = m, v.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), v.config = m.config = function(e, t, n) {
                    return new m(e, t, n)
                }, (v = (s = h("easing.SteppedEase", function(e, t) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0)).prototype = new i.b).constructor = s, v.getRatio = function(e) {
                    return e < 0 ? e = 0 : 1 <= e && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
                }, v.config = s.config = function(e, t) {
                    return new s(e, t)
                }, (v = (a = h("easing.ExpoScaleEase", function(e, t, n) {
                    this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = n
                }, !0)).prototype = new i.b).constructor = a, v.getRatio = function(e) {
                    return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
                }, v.config = a.config = function(e, t, n) {
                    return new a(e, t, n)
                }, (v = (o = h("easing.RoughEase", function(e) {
                    for (var t, r, s, a, o, l, u = (e = e || {}).taper || "none", c = [], d = 0, f = 0 | (e.points || 20), h = f, p = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof i.b ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --h;) t = p ? Math.random() : 1 / f * h, r = m ? m.getRatio(t) : t, s = "none" === u ? v : "out" === u ? (a = 1 - t) * a * v : "in" === u ? t * t * v : t < .5 ? (a = 2 * t) * a * .5 * v : (a = 2 * (1 - t)) * a * .5 * v, p ? r += Math.random() * s - .5 * s : h % 2 ? r += .5 * s : r -= .5 * s, g && (1 < r ? r = 1 : r < 0 && (r = 0)), c[d++] = {
                        x: t,
                        y: r
                    };
                    for (c.sort(function(e, t) {
                            return e.x - t.x
                        }), l = new n(1, 1, null), h = f; - 1 < --h;) l = new n((o = c[h]).x, o.y, l);
                    this._prev = new n(0, 0, 0 !== l.t ? l : l.next)
                }, !0)).prototype = new i.b).constructor = o, v.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return (this._prev = t).v + (e - t.t) / t.gap * t.c
                }, v.config = function(e) {
                    return new o(e)
                }, o.ease = new o, t("Bounce", e("BounceOut", function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), e("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), e("BounceInOut", function(e) {
                    var t = e < .5;
                    return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), t("Circ", e("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), e("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), e("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), t("Elastic", (l = function(e, t, n) {
                    var r = h("easing." + e, function(e, t) {
                            this._p1 = 1 <= e ? e : 1, this._p2 = (t || n) / (e < 1 ? e : 1), this._p3 = this._p2 / d * (Math.asin(1 / this._p1) || 0), this._p2 = d / this._p2
                        }, !0),
                        s = r.prototype = new i.b;
                    return s.constructor = r, s.getRatio = t, s.config = function(e, t) {
                        return new r(e, t)
                    }, r
                })("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), l("ElasticIn", function(e) {
                    return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
                }, .3), l("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), t("Expo", e("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), e("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), e("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), t("Sine", e("SineOut", function(e) {
                    return Math.sin(e * f)
                }), e("SineIn", function(e) {
                    return 1 - Math.cos(e * f)
                }), e("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return i.b.map[e]
                    }
                }, !0), p(u.SlowMo, "SlowMo", "ease,"), p(o, "RoughEase", "ease,"), p(s, "SteppedEase", "ease,"), g
            }, !0);
            var k = i.m.Back,
                P = i.m.Elastic,
                F = i.m.Bounce,
                R = i.m.RoughEase,
                I = i.m.SlowMo,
                D = i.m.SteppedEase,
                O = i.m.Circ,
                M = i.m.Expo,
                B = i.m.Sine,
                G = i.m.ExpoScaleEase,
                N = a;
            N._autoActivated = [r, s, u, c, C, d, h, k, P, F, R, I, D, O, M, B, G], n.d(t, "default", function() {
                return N
            }), n.d(t, "TweenLite", function() {
                return i.l
            }), n.d(t, "TweenMax", function() {
                return N
            }), n.d(t, "TimelineLite", function() {
                return r
            }), n.d(t, "TimelineMax", function() {
                return s
            }), n.d(t, "CSSPlugin", function() {
                return u
            }), n.d(t, "AttrPlugin", function() {
                return c
            }), n.d(t, "BezierPlugin", function() {
                return C
            }), n.d(t, "RoundPropsPlugin", function() {
                return d
            }), n.d(t, "DirectionalRotationPlugin", function() {
                return h
            }), n.d(t, "TweenPlugin", function() {
                return i.j
            }), n.d(t, "Ease", function() {
                return i.b
            }), n.d(t, "Power0", function() {
                return i.d
            }), n.d(t, "Power1", function() {
                return i.e
            }), n.d(t, "Power2", function() {
                return i.f
            }), n.d(t, "Power3", function() {
                return i.g
            }), n.d(t, "Power4", function() {
                return i.h
            }), n.d(t, "Linear", function() {
                return i.c
            }), n.d(t, "Back", function() {
                return k
            }), n.d(t, "Elastic", function() {
                return P
            }), n.d(t, "Bounce", function() {
                return F
            }), n.d(t, "RoughEase", function() {
                return R
            }), n.d(t, "SlowMo", function() {
                return I
            }), n.d(t, "SteppedEase", function() {
                return D
            }), n.d(t, "Circ", function() {
                return O
            }), n.d(t, "Expo", function() {
                return M
            }), n.d(t, "Sine", function() {
                return B
            }), n.d(t, "ExpoScaleEase", function() {
                return G
            }), n.d(t, "_gsScope", function() {
                return i.k
            })
        },
        8: function(e, t) {
            ! function(e) {
                var t, n, i, r, s, a, o, l, u, c, d, f, h, p, g, m, v, _, y, b, x, S, T, w, E, C, A, k, P, F, R, I, D, O, M, B, G, N, L, V, z, U, q, j, K, H, X, Y, W, J, $, Q, Z, ee, te, ne, ie, re, se, ae, oe, le, ue, ce, de, fe, he, pe, ge, me, ve, _e, ye, be, xe, Se, Te, we, Ee, Ce, Ae, ke, Pe, Fe, Re, Ie = Ie || function(e) {
                    function t() {}
                    var n = {},
                        i = n.lib = {},
                        r = i.Base = {
                            extend: function(e) {
                                t.prototype = this;
                                var n = new t;
                                return e && n.mixIn(e), n.hasOwnProperty("init") || (n.init = function() {
                                    n.$super.init.apply(this, arguments)
                                }), (n.init.prototype = n).$super = this, n
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments), e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        },
                        s = i.WordArray = r.extend({
                            init: function(e, t) {
                                e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                            },
                            toString: function(e) {
                                return (e || o).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    n = e.words,
                                    i = this.sigBytes;
                                if (e = e.sigBytes, this.clamp(), i % 4)
                                    for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
                                else if (65535 < n.length)
                                    for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2];
                                else t.push.apply(t, n);
                                return this.sigBytes += e, this
                            },
                            clamp: function() {
                                var t = this.words,
                                    n = this.sigBytes;
                                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(t) {
                                for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                                return new s.init(n, t)
                            }
                        }),
                        a = n.enc = {},
                        o = a.Hex = {
                            stringify: function(e) {
                                var t = e.words;
                                e = e.sigBytes;
                                for (var n = [], i = 0; i < e; i++) {
                                    var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16))
                                }
                                return n.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new s.init(n, t / 2)
                            }
                        },
                        l = a.Latin1 = {
                            stringify: function(e) {
                                var t = e.words;
                                e = e.sigBytes;
                                for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
                                return n.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new s.init(n, t)
                            }
                        },
                        u = a.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(l.stringify(e)))
                                } catch (e) {
                                    throw Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return l.parse(unescape(encodeURIComponent(e)))
                            }
                        },
                        c = i.BufferedBlockAlgorithm = r.extend({
                            reset: function() {
                                this._data = new s.init, this._nDataBytes = 0
                            },
                            _append: function(e) {
                                "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var n = this._data,
                                    i = n.words,
                                    r = n.sigBytes,
                                    a = this.blockSize,
                                    o = r / (4 * a);
                                if (t = (o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0)) * a, r = e.min(4 * t, r), t) {
                                    for (var l = 0; l < t; l += a) this._doProcessBlock(i, l);
                                    l = i.splice(0, t), n.sigBytes -= r
                                }
                                return new s.init(l, r)
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e._data = this._data.clone(), e
                            },
                            _minBufferSize: 0
                        });
                    i.Hasher = c.extend({
                        cfg: r.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            c.reset.call(this), this._doReset()
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new d.HMAC.init(e, n).finalize(t)
                            }
                        }
                    });
                    var d = n.algo = {};
                    return n
                }(Math);

                function De() {}

                function Oe() {
                    this.blocks = new k.PriorityQueue({
                        compare: function(e, t) {
                            return e - t
                        }
                    }), this.id2TimedBlockMap = {}, Oe.startThread()
                }

                function Me() {}

                function Be() {
                    this.protocol = "https", this.hostName = "api.gameanalytics.com", this.version = "v2", this.remoteConfigsVersion = "v1", this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version, this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion, this.initializeUrlPath = "init", this.eventsUrlPath = "events", this.useGzip = !1
                }

                function Ge() {}

                function Ne() {
                    this.availableCustomDimensions01 = [], this.availableCustomDimensions02 = [], this.availableCustomDimensions03 = [], this.availableResourceCurrencies = [], this.availableResourceItemTypes = [], this.configurations = {}, this.remoteConfigsListeners = [], this.sdkConfigDefault = {}, this.sdkConfig = {}, this.progressionTries = {}, this._isEventSubmissionEnabled = !0
                }

                function Le(e) {
                    this.comparer = e, this._subQueues = {}, this._sortedKeys = []
                }

                function Ve(e) {
                    this.deadline = e, this.ignore = !1, this.async = !1, this.running = !1, this.id = ++Ve.idCounter
                }

                function ze() {}! function(e) {
                    function t(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var n = Ie, i = (s = n.lib).WordArray, r = s.Hasher, s = n.algo, a = [], o = [], l = 2, u = 0; u < 64;) {
                        var c;
                        e: {
                            c = l;
                            for (var d = e.sqrt(c), f = 2; f <= d; f++)
                                if (!(c % f)) {
                                    c = !1;
                                    break e
                                }
                            c = !0
                        }
                        c && (u < 8 && (a[u] = t(e.pow(l, .5))), o[u] = t(e.pow(l, 1 / 3)), u++), l++
                    }
                    var h = [];
                    s = s.SHA256 = r.extend({
                        _doReset: function() {
                            this._hash = new i.init(a.slice(0))
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], a = n[3], l = n[4], u = n[5], c = n[6], d = n[7], f = 0; f < 64; f++) {
                                if (f < 16) h[f] = 0 | e[t + f];
                                else {
                                    var p = h[f - 15],
                                        g = h[f - 2];
                                    h[f] = ((p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + h[f - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + h[f - 16]
                                }
                                p = d + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + (l & u ^ ~l & c) + o[f] + h[f], g = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & r ^ i & s ^ r & s), d = c, c = u, u = l, l = a + p | 0, a = s, s = r, r = i, i = p + g | 0
                            }
                            n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + l | 0, n[5] = n[5] + u | 0, n[6] = n[6] + c | 0, n[7] = n[7] + d | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                n = t.words,
                                i = 8 * this._nDataBytes,
                                r = 8 * t.sigBytes;
                            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (64 + r >>> 9 << 4)] = e.floor(i / 4294967296), n[15 + (64 + r >>> 9 << 4)] = i, t.sigBytes = 4 * n.length, this._process(), this._hash
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    }), n.SHA256 = r._createHelper(s), n.HmacSHA256 = r._createHmacHelper(s)
                }(Math), h = Ie.enc.Utf8, Ie.algo.HMAC = Ie.lib.Base.extend({
                        init: function(e, t) {
                            e = this._hasher = new e.init, "string" == typeof t && (t = h.parse(t));
                            var n = e.blockSize,
                                i = 4 * n;
                            t.sigBytes > i && (t = e.finalize(t)), t.clamp();
                            for (var r = this._oKey = t.clone(), s = this._iKey = t.clone(), a = r.words, o = s.words, l = 0; l < n; l++) a[l] ^= 1549556828, o[l] ^= 909522486;
                            r.sigBytes = s.sigBytes = i, this.reset()
                        },
                        reset: function() {
                            var e = this._hasher;
                            e.reset(), e.update(this._iKey)
                        },
                        update: function(e) {
                            return this._hasher.update(e), this
                        },
                        finalize: function(e) {
                            var t = this._hasher;
                            return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e))
                        }
                    }), f = Ie.lib.WordArray, Ie.enc.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                n = e.sigBytes,
                                i = this._map;
                            e.clamp(), e = [];
                            for (var r = 0; r < n; r += 3)
                                for (var s = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; a < 4 && r + .75 * a < n; a++) e.push(i.charAt(s >>> 6 * (3 - a) & 63));
                            if (t = i.charAt(64))
                                for (; e.length % 4;) e.push(t);
                            return e.join("")
                        },
                        parse: function(e) {
                            var t = e.length,
                                n = this._map;
                            !(i = n.charAt(64)) || -1 != (i = e.indexOf(i)) && (t = i);
                            for (var i = [], r = 0, s = 0; s < t; s++)
                                if (s % 4) {
                                    var a = n.indexOf(e.charAt(s - 1)) << s % 4 * 2,
                                        o = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
                                    i[r >>> 2] |= (a | o) << 24 - r % 4 * 8, r++
                                }
                            return f.create(i, r)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }, (n = (t = p = p || {}).EGAErrorSeverity || (t.EGAErrorSeverity = {}))[n.Undefined = 0] = "Undefined", n[n.Debug = 1] = "Debug", n[n.Info = 2] = "Info", n[n.Warning = 3] = "Warning", n[n.Error = 4] = "Error", n[n.Critical = 5] = "Critical", (i = t.EGAProgressionStatus || (t.EGAProgressionStatus = {}))[i.Undefined = 0] = "Undefined", i[i.Start = 1] = "Start", i[i.Complete = 2] = "Complete", i[i.Fail = 3] = "Fail", (r = t.EGAResourceFlowType || (t.EGAResourceFlowType = {}))[r.Undefined = 0] = "Undefined", r[r.Source = 1] = "Source", r[r.Sink = 2] = "Sink", (a = (s = t.http || (t.http = {})).EGAHTTPApiResponse || (s.EGAHTTPApiResponse = {}))[a.NoResponse = 0] = "NoResponse", a[a.BadResponse = 1] = "BadResponse", a[a.RequestTimeout = 2] = "RequestTimeout", a[a.JsonEncodeFailed = 3] = "JsonEncodeFailed", a[a.JsonDecodeFailed = 4] = "JsonDecodeFailed", a[a.InternalServerError = 5] = "InternalServerError", a[a.BadRequest = 6] = "BadRequest", a[a.Unauthorized = 7] = "Unauthorized", a[a.UnknownResponseCode = 8] = "UnknownResponseCode", a[a.Ok = 9] = "Ok", a[a.Created = 10] = "Created", (l = (o = t.events || (t.events = {})).EGASdkErrorCategory || (o.EGASdkErrorCategory = {}))[l.Undefined = 0] = "Undefined", l[l.EventValidation = 1] = "EventValidation", l[l.Database = 2] = "Database", l[l.Init = 3] = "Init", l[l.Http = 4] = "Http", l[l.Json = 5] = "Json", (u = o.EGASdkErrorArea || (o.EGASdkErrorArea = {}))[u.Undefined = 0] = "Undefined", u[u.BusinessEvent = 1] = "BusinessEvent", u[u.ResourceEvent = 2] = "ResourceEvent", u[u.ProgressionEvent = 3] = "ProgressionEvent", u[u.DesignEvent = 4] = "DesignEvent", u[u.ErrorEvent = 5] = "ErrorEvent", u[u.InitHttp = 9] = "InitHttp", u[u.EventsHttp = 10] = "EventsHttp", u[u.ProcessEvents = 11] = "ProcessEvents", u[u.AddEventsToStore = 12] = "AddEventsToStore", (c = o.EGASdkErrorAction || (o.EGASdkErrorAction = {}))[c.Undefined = 0] = "Undefined", c[c.InvalidCurrency = 1] = "InvalidCurrency", c[c.InvalidShortString = 2] = "InvalidShortString", c[c.InvalidEventPartLength = 3] = "InvalidEventPartLength", c[c.InvalidEventPartCharacters = 4] = "InvalidEventPartCharacters", c[c.InvalidStore = 5] = "InvalidStore", c[c.InvalidFlowType = 6] = "InvalidFlowType", c[c.StringEmptyOrNull = 7] = "StringEmptyOrNull", c[c.NotFoundInAvailableCurrencies = 8] = "NotFoundInAvailableCurrencies", c[c.InvalidAmount = 9] = "InvalidAmount", c[c.NotFoundInAvailableItemTypes = 10] = "NotFoundInAvailableItemTypes", c[c.WrongProgressionOrder = 11] = "WrongProgressionOrder", c[c.InvalidEventIdLength = 12] = "InvalidEventIdLength", c[c.InvalidEventIdCharacters = 13] = "InvalidEventIdCharacters", c[c.InvalidProgressionStatus = 15] = "InvalidProgressionStatus", c[c.InvalidSeverity = 16] = "InvalidSeverity", c[c.InvalidLongString = 17] = "InvalidLongString", c[c.DatabaseTooLarge = 18] = "DatabaseTooLarge", c[c.DatabaseOpenOrCreate = 19] = "DatabaseOpenOrCreate", c[c.JsonError = 25] = "JsonError", c[c.FailHttpJsonDecode = 29] = "FailHttpJsonDecode", c[c.FailHttpJsonEncode = 30] = "FailHttpJsonEncode", (d = o.EGASdkErrorParameter || (o.EGASdkErrorParameter = {}))[d.Undefined = 0] = "Undefined", d[d.Currency = 1] = "Currency", d[d.CartType = 2] = "CartType", d[d.ItemType = 3] = "ItemType", d[d.ItemId = 4] = "ItemId", d[d.Store = 5] = "Store", d[d.FlowType = 6] = "FlowType", d[d.Amount = 7] = "Amount", d[d.Progression01 = 8] = "Progression01", d[d.Progression02 = 9] = "Progression02", d[d.Progression03 = 10] = "Progression03", d[d.EventId = 11] = "EventId", d[d.ProgressionStatus = 12] = "ProgressionStatus", d[d.Severity = 13] = "Severity", d[d.Message = 14] = "Message", p.EGAErrorSeverity, p.EGAProgressionStatus, p.EGAResourceFlowType,
                    function(e) {
                        var t, n;
                        (n = t = t || {})[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Info = 2] = "Info", n[n.Debug = 3] = "Debug";
                        var i = (r.setInfoLog = function(e) {
                            r.instance.infoLogEnabled = e
                        }, r.setVerboseLog = function(e) {
                            r.instance.infoLogVerboseEnabled = e
                        }, r.i = function(e) {
                            if (r.instance.infoLogEnabled) {
                                var n = "Info/" + r.Tag + ": " + e;
                                r.instance.sendNotificationMessage(n, t.Info)
                            }
                        }, r.w = function(e) {
                            var n = "Warning/" + r.Tag + ": " + e;
                            r.instance.sendNotificationMessage(n, t.Warning)
                        }, r.e = function(e) {
                            var n = "Error/" + r.Tag + ": " + e;
                            r.instance.sendNotificationMessage(n, t.Error)
                        }, r.ii = function(e) {
                            if (r.instance.infoLogVerboseEnabled) {
                                var n = "Verbose/" + r.Tag + ": " + e;
                                r.instance.sendNotificationMessage(n, t.Info)
                            }
                        }, r.d = function(e) {
                            if (r.debugEnabled) {
                                var n = "Debug/" + r.Tag + ": " + e;
                                r.instance.sendNotificationMessage(n, t.Debug)
                            }
                        }, r.prototype.sendNotificationMessage = function(e, n) {
                            switch (n) {
                                case t.Error:
                                    console.error(e);
                                    break;
                                case t.Warning:
                                    console.warn(e);
                                    break;
                                case t.Debug:
                                    "function" == typeof console.debug ? console.debug(e) : console.log(e);
                                    break;
                                case t.Info:
                                    console.log(e)
                            }
                        }, r.instance = new r, r.Tag = "GameAnalytics", r);

                        function r() {
                            r.debugEnabled = !1
                        }
                        e.GALogger = i
                    }((Re = p = p || {}).logging || (Re.logging = {})), ke = (Ae = p = p || {}).utilities || (Ae.utilities = {}), Pe = Ae.logging.GALogger, ze.getHmac = function(e, t) {
                        var n = Ie.HmacSHA256(t, e);
                        return Ie.enc.Base64.stringify(n)
                    }, ze.stringMatch = function(e, t) {
                        return !(!e || !t) && t.test(e)
                    }, ze.joinStringArray = function(e, t) {
                        for (var n = "", i = 0, r = e.length; i < r; i++) 0 < i && (n += t), n += e[i];
                        return n
                    }, ze.stringArrayContainsString = function(e, t) {
                        if (0 === e.length) return !1;
                        for (var n in e)
                            if (e[n] === t) return !0;
                        return !1
                    }, ze.encode64 = function(e) {
                        e = encodeURI(e);
                        for (var t, n, i, r, s, a = "", o = 0, l = 0, u = 0; i = (t = e.charCodeAt(u++)) >> 2, r = (3 & t) << 4 | (n = e.charCodeAt(u++)) >> 4, s = (15 & n) << 2 | (o = e.charCodeAt(u++)) >> 6, l = 63 & o, isNaN(n) ? s = l = 64 : isNaN(o) && (l = 64), a = a + ze.keyStr.charAt(i) + ze.keyStr.charAt(r) + ze.keyStr.charAt(s) + ze.keyStr.charAt(l), t = n = o = 0, i = r = s = l = 0, u < e.length;);
                        return a
                    }, ze.decode64 = function(e) {
                        var t, n, i, r, s = "",
                            a = 0,
                            o = 0,
                            l = 0;
                        for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && Pe.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = ze.keyStr.indexOf(e.charAt(l++)) << 2 | (i = ze.keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & i) << 4 | (r = ze.keyStr.indexOf(e.charAt(l++))) >> 2, a = (3 & r) << 6 | (o = ze.keyStr.indexOf(e.charAt(l++))), s += String.fromCharCode(t), 64 != r && (s += String.fromCharCode(n)), 64 != o && (s += String.fromCharCode(a)), t = n = a = 0, i = r = o = 0, l < e.length;);
                        return decodeURI(s)
                    }, ze.timeIntervalSince1970 = function() {
                        var e = new Date;
                        return Math.round(e.getTime() / 1e3)
                    }, ze.createGuid = function() {
                        return (ze.s4() + ze.s4() + "-" + ze.s4() + "-4" + ze.s4().substr(0, 3) + "-" + ze.s4() + "-" + ze.s4() + ze.s4() + ze.s4()).toLowerCase()
                    }, ze.s4 = function() {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                    }, ze.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Fe = ze, ke.GAUtilities = Fe,
                    function(e) {
                        function t(e, t, n, i, r) {
                            this.category = e, this.area = t, this.action = n, this.parameter = i, this.reason = r
                        }
                        var n = Ce.logging.GALogger,
                            i = Ce.utilities.GAUtilities,
                            r = Ce.events.EGASdkErrorCategory,
                            s = Ce.events.EGASdkErrorArea,
                            a = Ce.events.EGASdkErrorAction,
                            o = Ce.events.EGASdkErrorParameter;
                        e.ValidationResult = t;
                        var l = (u.validateBusinessEvent = function(e, i, l, c, d) {
                            return u.validateCurrency(e) ? i < 0 ? (n.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + i), new t(r.EventValidation, s.BusinessEvent, a.InvalidAmount, o.Amount, i + "")) : u.validateShortString(l, !0) ? u.validateEventPartLength(c, !1) ? u.validateEventPartCharacters(c) ? u.validateEventPartLength(d, !1) ? u.validateEventPartCharacters(d) ? null : (n.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + d), new t(r.EventValidation, s.BusinessEvent, a.InvalidEventPartCharacters, o.ItemId, d)) : (n.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + d), new t(r.EventValidation, s.BusinessEvent, a.InvalidEventPartLength, o.ItemId, d)) : (n.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + c), new t(r.EventValidation, s.BusinessEvent, a.InvalidEventPartCharacters, o.ItemType, c)) : (n.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + c), new t(r.EventValidation, s.BusinessEvent, a.InvalidEventPartLength, o.ItemType, c)) : (n.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + l), new t(r.EventValidation, s.BusinessEvent, a.InvalidShortString, o.CartType, l)) : (n.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + e), new t(r.EventValidation, s.BusinessEvent, a.InvalidCurrency, o.Currency, e))
                        }, u.validateResourceEvent = function(e, l, c, d, f, h, p) {
                            return e == Ce.EGAResourceFlowType.Undefined ? (n.w("Validation fail - resource event - flowType: Invalid flow type."), new t(r.EventValidation, s.ResourceEvent, a.InvalidFlowType, o.FlowType, "")) : l ? i.stringArrayContainsString(h, l) ? 0 < c ? d ? u.validateEventPartLength(d, !1) ? u.validateEventPartCharacters(d) ? i.stringArrayContainsString(p, d) ? u.validateEventPartLength(f, !1) ? u.validateEventPartCharacters(f) ? null : (n.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + f), new t(r.EventValidation, s.ResourceEvent, a.InvalidEventPartCharacters, o.ItemId, f)) : (n.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + f), new t(r.EventValidation, s.ResourceEvent, a.InvalidEventPartLength, o.ItemId, f)) : (n.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + d), new t(r.EventValidation, s.ResourceEvent, a.NotFoundInAvailableItemTypes, o.ItemType, d)) : (n.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + d), new t(r.EventValidation, s.ResourceEvent, a.InvalidEventPartCharacters, o.ItemType, d)) : (n.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + d), new t(r.EventValidation, s.ResourceEvent, a.InvalidEventPartLength, o.ItemType, d)) : (n.w("Validation fail - resource event - itemType: Cannot be (null)"), new t(r.EventValidation, s.ResourceEvent, a.StringEmptyOrNull, o.ItemType, "")) : (n.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + c), new t(r.EventValidation, s.ResourceEvent, a.InvalidAmount, o.Amount, c + "")) : (n.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + l), new t(r.EventValidation, s.ResourceEvent, a.NotFoundInAvailableCurrencies, o.Currency, l)) : (n.w("Validation fail - resource event - currency: Cannot be (null)"), new t(r.EventValidation, s.ResourceEvent, a.StringEmptyOrNull, o.Currency, ""))
                        }, u.validateProgressionEvent = function(e, i, l, c) {
                            if (e == Ce.EGAProgressionStatus.Undefined) return n.w("Validation fail - progression event: Invalid progression status."), new t(r.EventValidation, s.ProgressionEvent, a.InvalidProgressionStatus, o.ProgressionStatus, "");
                            if (c && !l && i) return n.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03."), new t(r.EventValidation, s.ProgressionEvent, a.WrongProgressionOrder, o.Undefined, i + ":" + l + ":" + c);
                            if (l && !i) return n.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03"), new t(r.EventValidation, s.ProgressionEvent, a.WrongProgressionOrder, o.Undefined, i + ":" + l + ":" + c);
                            if (!i) return n.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03"), new t(r.EventValidation, s.ProgressionEvent, a.WrongProgressionOrder, o.Undefined, (i || "") + ":" + (l || "") + ":" + (c || ""));
                            if (!u.validateEventPartLength(i, !1)) return n.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + i), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartLength, o.Progression01, i);
                            if (!u.validateEventPartCharacters(i)) return n.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + i), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartCharacters, o.Progression01, i);
                            if (l) {
                                if (!u.validateEventPartLength(l, !0)) return n.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + l), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartLength, o.Progression02, l);
                                if (!u.validateEventPartCharacters(l)) return n.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + l), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartCharacters, o.Progression02, l)
                            }
                            if (c) {
                                if (!u.validateEventPartLength(c, !0)) return n.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + c), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartLength, o.Progression03, c);
                                if (!u.validateEventPartCharacters(c)) return n.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + c), new t(r.EventValidation, s.ProgressionEvent, a.InvalidEventPartCharacters, o.Progression03, c)
                            }
                            return null
                        }, u.validateDesignEvent = function(e) {
                            return u.validateEventIdLength(e) ? u.validateEventIdCharacters(e) ? null : (n.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + e), new t(r.EventValidation, s.DesignEvent, a.InvalidEventIdCharacters, o.EventId, e)) : (n.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 32 characters or less. String: " + e), new t(r.EventValidation, s.DesignEvent, a.InvalidEventIdLength, o.EventId, e))
                        }, u.validateErrorEvent = function(e, i) {
                            return e == Ce.EGAErrorSeverity.Undefined ? (n.w("Validation fail - error event - severity: Severity was unsupported value."), new t(r.EventValidation, s.ErrorEvent, a.InvalidSeverity, o.Severity, "")) : u.validateLongString(i, !0) ? null : (n.w("Validation fail - error event - message: Message cannot be above 8192 characters."), new t(r.EventValidation, s.ErrorEvent, a.InvalidLongString, o.Message, i))
                        }, u.validateSdkErrorEvent = function(e, t, i, o, l) {
                            return !(!u.validateKeys(e, t) || (i === r.Undefined ? (n.w("Validation fail - sdk error event - type: Category was unsupported value."), 1) : o === s.Undefined ? (n.w("Validation fail - sdk error event - type: Area was unsupported value."), 1) : l === a.Undefined && (n.w("Validation fail - sdk error event - type: Action was unsupported value."), 1)))
                        }, u.validateKeys = function(e, t) {
                            return !(!i.stringMatch(e, /^[A-z0-9]{32}$/) || !i.stringMatch(t, /^[A-z0-9]{40}$/))
                        }, u.validateCurrency = function(e) {
                            return !!e && !!i.stringMatch(e, /^[A-Z]{3}$/)
                        }, u.validateEventPartLength = function(e, t) {
                            return !(!t || e) || !!e && !(64 < e.length)
                        }, u.validateEventPartCharacters = function(e) {
                            return !!i.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)
                        }, u.validateEventIdLength = function(e) {
                            return !!e && !!i.stringMatch(e, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)
                        }, u.validateEventIdCharacters = function(e) {
                            return !!e && !!i.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)
                        }, u.validateAndCleanInitRequestResponse = function(e, t) {
                            if (null == e) return n.w("validateInitRequestResponse failed - no response dictionary."), null;
                            var i = {};
                            try {
                                var r = e.server_ts;
                                if (!(0 < r)) return n.w("validateInitRequestResponse failed - invalid value in 'server_ts' field."), null;
                                i.server_ts = r
                            } catch (t) {
                                return n.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof e.server_ts + ", value=" + e.server_ts + ", " + t), null
                            }
                            if (t) {
                                try {
                                    var s = e.configs;
                                    i.configs = s
                                } catch (t) {
                                    return n.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof e.configs + ", value=" + e.configs + ", " + t), null
                                }
                                try {
                                    var a = e.configs_hash;
                                    i.configs_hash = a
                                } catch (t) {
                                    return n.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof e.configs_hash + ", value=" + e.configs_hash + ", " + t), null
                                }
                                try {
                                    var o = e.ab_id;
                                    i.ab_id = o
                                } catch (t) {
                                    return n.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof e.ab_id + ", value=" + e.ab_id + ", " + t), null
                                }
                                try {
                                    var l = e.ab_variant_id;
                                    i.ab_variant_id = l
                                } catch (t) {
                                    return n.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof e.ab_variant_id + ", value=" + e.ab_variant_id + ", " + t), null
                                }
                            }
                            return i
                        }, u.validateBuild = function(e) {
                            return !!u.validateShortString(e, !1)
                        }, u.validateSdkWrapperVersion = function(e) {
                            return !!i.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)
                        }, u.validateEngineVersion = function(e) {
                            return !(!e || !i.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/))
                        }, u.validateUserId = function(e) {
                            return !!u.validateString(e, !1) || (n.w("Validation fail - user id: id cannot be (null), empty or above 64 characters."), !1)
                        }, u.validateShortString = function(e, t) {
                            return !(!t || e) || !(!e || 32 < e.length)
                        }, u.validateString = function(e, t) {
                            return !(!t || e) || !(!e || 64 < e.length)
                        }, u.validateLongString = function(e, t) {
                            return !(!t || e) || !(!e || 8192 < e.length)
                        }, u.validateConnectionType = function(e) {
                            return i.stringMatch(e, /^(wwan|wifi|lan|offline)$/)
                        }, u.validateCustomDimensions = function(e) {
                            return u.validateArrayOfStrings(20, 32, !1, "custom dimensions", e)
                        }, u.validateResourceCurrencies = function(e) {
                            if (!u.validateArrayOfStrings(20, 64, !1, "resource currencies", e)) return !1;
                            for (var t = 0; t < e.length; ++t)
                                if (!i.stringMatch(e[t], /^[A-Za-z]+$/)) return n.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + e[t]), !1;
                            return !0
                        }, u.validateResourceItemTypes = function(e) {
                            if (!u.validateArrayOfStrings(20, 32, !1, "resource item types", e)) return !1;
                            for (var t = 0; t < e.length; ++t)
                                if (!u.validateEventPartCharacters(e[t])) return n.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + e[t]), !1;
                            return !0
                        }, u.validateDimension01 = function(e, t) {
                            return !e || !!i.stringArrayContainsString(t, e)
                        }, u.validateDimension02 = function(e, t) {
                            return !e || !!i.stringArrayContainsString(t, e)
                        }, u.validateDimension03 = function(e, t) {
                            return !e || !!i.stringArrayContainsString(t, e)
                        }, u.validateArrayOfStrings = function(e, t, i, r, s) {
                            var a = r;
                            if (a = a || "Array", !s) return n.w(a + " validation failed: array cannot be null. "), !1;
                            if (0 == i && 0 == s.length) return n.w(a + " validation failed: array cannot be empty. "), !1;
                            if (0 < e && s.length > e) return n.w(a + " validation failed: array cannot exceed " + e + " values. It has " + s.length + " values."), !1;
                            for (var o = 0; o < s.length; ++o) {
                                var l = s[o] ? s[o].length : 0;
                                if (0 === l) return n.w(a + " validation failed: contained an empty string. Array=" + JSON.stringify(s)), !1;
                                if (0 < t && t < l) return n.w(a + " validation failed: a string exceeded max allowed length (which is: " + t + "). String was: " + s[o]), !1
                            }
                            return !0
                        }, u.validateClientTs = function(e) {
                            return !(e < -4294967294 || 4294967294 < e)
                        }, u);

                        function u() {}
                        e.GAValidator = l
                    }((Ce = p = p || {}).validators || (Ce.validators = {})),
                    function(e) {
                        function t(e, t, n) {
                            this.name = e, this.value = t, this.version = n
                        }

                        function n(e, t) {
                            this.name = e, this.version = t
                        }
                        e.NameValueVersion = t, e.NameVersion = n;
                        var i = (r.touch = function() {}, r.getRelevantSdkVersion = function() {
                            return r.sdkGameEngineVersion ? r.sdkGameEngineVersion : r.sdkWrapperVersion
                        }, r.getConnectionType = function() {
                            return r.connectionType
                        }, r.updateConnectionType = function() {
                            r.connectionType = navigator.onLine ? "ios" === r.buildPlatform || "android" === r.buildPlatform ? "wwan" : "lan" : "offline"
                        }, r.getOSVersionString = function() {
                            return r.buildPlatform + " " + r.osVersionPair.version
                        }, r.runtimePlatformToString = function() {
                            return r.osVersionPair.name
                        }, r.getBrowserVersionString = function() {
                            var e, t = navigator.userAgent,
                                n = t.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
                            if (0 == n.length && "ios" === r.buildPlatform) return "webkit_" + r.osVersion;
                            if (/trident/i.test(n[1])) return "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "");
                            if ("Chrome" === n[1] && null != (e = t.match(/\b(OPR|Edge|UBrowser)\/(\d+)/))) return e.slice(1).join(" ").replace("OPR", "Opera").replace("UBrowser", "UC").toLowerCase();
                            if (n[1] && "fbav" === n[1].toLowerCase() && (n[1] = "facebook", n[2])) return "facebook " + n[2];
                            var i = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"];
                            return null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i.join(" ").toLowerCase()
                        }, r.getDeviceModel = function() {
                            return "unknown"
                        }, r.getDeviceManufacturer = function() {
                            return "unknown"
                        }, r.matchItem = function(e, t) {
                            var i, r, s, a, o = new n("unknown", "0.0.0"),
                                l = 0,
                                u = 0;
                            for (l = 0; l < t.length; l += 1)
                                if (new RegExp(t[l].value, "i").test(e)) {
                                    if (i = new RegExp(t[l].version + "[- /:;]([\\d._]+)", "i"), a = "", (r = e.match(i)) && r[1] && (s = r[1]), s) {
                                        var c = s.split(/[._]+/);
                                        for (u = 0; u < Math.min(c.length, 3); u += 1) a += c[u] + (u < Math.min(c.length, 3) - 1 ? "." : "")
                                    } else a = "0.0.0";
                                    return o.name = t[l].name, o.version = a, o
                                }
                            return o
                        }, r.sdkWrapperVersion = "javascript 4.0.10", r.osVersionPair = r.matchItem([navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor].join(" "), [new t("windows_phone", "Windows Phone", "OS"), new t("windows", "Win", "NT"), new t("ios", "iPhone", "OS"), new t("ios", "iPad", "OS"), new t("ios", "iPod", "OS"), new t("android", "Android", "Android"), new t("blackBerry", "BlackBerry", "/"), new t("mac_osx", "Mac", "OS X"), new t("tizen", "Tizen", "Tizen"), new t("linux", "Linux", "rv")]), r.buildPlatform = r.runtimePlatformToString(), r.deviceModel = r.getDeviceModel(), r.deviceManufacturer = r.getDeviceManufacturer(), r.osVersion = r.getOSVersionString(), r.browserVersion = r.getBrowserVersionString(), r);

                        function r() {}
                        e.GADevice = i
                    }((Ee = p = p || {}).device || (Ee.device = {})), Te = (Se = p = p || {}).threading || (Se.threading = {}), Ve.idCounter = 0, we = Ve, Te.TimedBlock = we, be = (ye = p = p || {}).threading || (ye.threading = {}), Le.prototype.enqueue = function(e, t) {
                        -1 === this._sortedKeys.indexOf(e) && this.addQueueOfPriority(e), this._subQueues[e].push(t)
                    }, Le.prototype.addQueueOfPriority = function(e) {
                        var t = this;
                        this._sortedKeys.push(e), this._sortedKeys.sort(function(e, n) {
                            return t.comparer.compare(e, n)
                        }), this._subQueues[e] = []
                    }, Le.prototype.peek = function() {
                        if (this.hasItems()) return this._subQueues[this._sortedKeys[0]][0];
                        throw new Error("The queue is empty")
                    }, Le.prototype.hasItems = function() {
                        return 0 < this._sortedKeys.length
                    }, Le.prototype.dequeue = function() {
                        if (this.hasItems()) return this.dequeueFromHighPriorityQueue();
                        throw new Error("The queue is empty")
                    }, Le.prototype.dequeueFromHighPriorityQueue = function() {
                        var e = this._sortedKeys[0],
                            t = this._subQueues[e].shift();
                        return 0 === this._subQueues[e].length && (this._sortedKeys.shift(), delete this._subQueues[e]), t
                    }, xe = Le, be.PriorityQueue = xe,
                    function(e) {
                        var t, n, i, r, s = _e.logging.GALogger;
                        (n = t = e.EGAStoreArgsOperator || (e.EGAStoreArgsOperator = {}))[n.Equal = 0] = "Equal", n[n.LessOrEqual = 1] = "LessOrEqual", n[n.NotEqual = 2] = "NotEqual", (r = i = e.EGAStore || (e.EGAStore = {}))[r.Events = 0] = "Events", r[r.Sessions = 1] = "Sessions", r[r.Progression = 2] = "Progression";
                        var a = (o.isStorageAvailable = function() {
                            return o.storageAvailable
                        }, o.isStoreTooLargeForEvents = function() {
                            return o.instance.eventsStore.length + o.instance.sessionsStore.length > o.MaxNumberOfEntries
                        }, o.select = function(e, n, i, r) {
                            void 0 === n && (n = []), void 0 === i && (i = !1), void 0 === r && (r = 0);
                            var s = o.getStore(e);
                            if (!s) return null;
                            for (var a = [], l = 0; l < s.length; ++l) {
                                for (var u = s[l], c = !0, d = 0; d < n.length; ++d) {
                                    var f = n[d];
                                    if (u[f[0]]) switch (f[1]) {
                                        case t.Equal:
                                            c = u[f[0]] == f[2];
                                            break;
                                        case t.LessOrEqual:
                                            c = u[f[0]] <= f[2];
                                            break;
                                        case t.NotEqual:
                                            c = u[f[0]] != f[2];
                                            break;
                                        default:
                                            c = !1
                                    } else c = !1;
                                    if (!c) break
                                }
                                c && a.push(u)
                            }
                            return i && a.sort(function(e, t) {
                                return e.client_ts - t.client_ts
                            }), 0 < r && a.length > r && (a = a.slice(0, r + 1)), a
                        }, o.update = function(e, n, i) {
                            void 0 === i && (i = []);
                            var r = o.getStore(e);
                            if (!r) return !1;
                            for (var s = 0; s < r.length; ++s) {
                                for (var a = r[s], l = !0, u = 0; u < i.length; ++u) {
                                    var c = i[u];
                                    if (a[c[0]]) switch (c[1]) {
                                        case t.Equal:
                                            l = a[c[0]] == c[2];
                                            break;
                                        case t.LessOrEqual:
                                            l = a[c[0]] <= c[2];
                                            break;
                                        case t.NotEqual:
                                            l = a[c[0]] != c[2];
                                            break;
                                        default:
                                            l = !1
                                    } else l = !1;
                                    if (!l) break
                                }
                                if (l)
                                    for (u = 0; u < n.length; ++u) {
                                        var d = n[u];
                                        a[d[0]] = d[1]
                                    }
                            }
                            return !0
                        }, o.delete = function(e, n) {
                            var i = o.getStore(e);
                            if (i)
                                for (var r = 0; r < i.length; ++r) {
                                    for (var s = i[r], a = !0, l = 0; l < n.length; ++l) {
                                        var u = n[l];
                                        if (s[u[0]]) switch (u[1]) {
                                            case t.Equal:
                                                a = s[u[0]] == u[2];
                                                break;
                                            case t.LessOrEqual:
                                                a = s[u[0]] <= u[2];
                                                break;
                                            case t.NotEqual:
                                                a = s[u[0]] != u[2];
                                                break;
                                            default:
                                                a = !1
                                        } else a = !1;
                                        if (!a) break
                                    }
                                    a && (i.splice(r, 1), --r)
                                }
                        }, o.insert = function(e, t, n, i) {
                            void 0 === n && (n = !1), void 0 === i && (i = null);
                            var r = o.getStore(e);
                            if (r)
                                if (n) {
                                    if (!i) return;
                                    for (var s = !1, a = 0; a < r.length; ++a) {
                                        var l = r[a];
                                        if (l[i] == t[i]) {
                                            for (var u in t) l[u] = t[u];
                                            s = !0;
                                            break
                                        }
                                    }
                                    s || r.push(t)
                                } else r.push(t)
                        }, o.save = function(e) {
                            o.isStorageAvailable() ? (localStorage.setItem(o.StringFormat(o.KeyFormat, e, o.EventsStoreKey), JSON.stringify(o.instance.eventsStore)), localStorage.setItem(o.StringFormat(o.KeyFormat, e, o.SessionsStoreKey), JSON.stringify(o.instance.sessionsStore)), localStorage.setItem(o.StringFormat(o.KeyFormat, e, o.ProgressionStoreKey), JSON.stringify(o.instance.progressionStore)), localStorage.setItem(o.StringFormat(o.KeyFormat, e, o.ItemsStoreKey), JSON.stringify(o.instance.storeItems))) : s.w("Storage is not available, cannot save.")
                        }, o.load = function(e) {
                            if (o.isStorageAvailable()) {
                                try {
                                    o.instance.eventsStore = JSON.parse(localStorage.getItem(o.StringFormat(o.KeyFormat, e, o.EventsStoreKey))), o.instance.eventsStore || (o.instance.eventsStore = [])
                                } catch (e) {
                                    s.w("Load failed for 'events' store. Using empty store."), o.instance.eventsStore = []
                                }
                                try {
                                    o.instance.sessionsStore = JSON.parse(localStorage.getItem(o.StringFormat(o.KeyFormat, e, o.SessionsStoreKey))), o.instance.sessionsStore || (o.instance.sessionsStore = [])
                                } catch (e) {
                                    s.w("Load failed for 'sessions' store. Using empty store."), o.instance.sessionsStore = []
                                }
                                try {
                                    o.instance.progressionStore = JSON.parse(localStorage.getItem(o.StringFormat(o.KeyFormat, e, o.ProgressionStoreKey))), o.instance.progressionStore || (o.instance.progressionStore = [])
                                } catch (e) {
                                    s.w("Load failed for 'progression' store. Using empty store."), o.instance.progressionStore = []
                                }
                                try {
                                    o.instance.storeItems = JSON.parse(localStorage.getItem(o.StringFormat(o.KeyFormat, e, o.ItemsStoreKey))), o.instance.storeItems || (o.instance.storeItems = {})
                                } catch (e) {
                                    s.w("Load failed for 'items' store. Using empty store."), o.instance.progressionStore = []
                                }
                            } else s.w("Storage is not available, cannot load.")
                        }, o.setItem = function(e, t, n) {
                            var i = o.StringFormat(o.KeyFormat, e, t);
                            n ? o.instance.storeItems[i] = n : i in o.instance.storeItems && delete o.instance.storeItems[i]
                        }, o.getItem = function(e, t) {
                            var n = o.StringFormat(o.KeyFormat, e, t);
                            return n in o.instance.storeItems ? o.instance.storeItems[n] : null
                        }, o.getStore = function(e) {
                            switch (e) {
                                case i.Events:
                                    return o.instance.eventsStore;
                                case i.Sessions:
                                    return o.instance.sessionsStore;
                                case i.Progression:
                                    return o.instance.progressionStore;
                                default:
                                    return s.w("GAStore.getStore(): Cannot find store: " + e), null
                            }
                        }, o.instance = new o, o.MaxNumberOfEntries = 2e3, o.StringFormat = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            return e.replace(/{(\d+)}/g, function(e, n) {
                                return t[n] || ""
                            })
                        }, o.KeyFormat = "GA::{0}::{1}", o.EventsStoreKey = "ga_event", o.SessionsStoreKey = "ga_session", o.ProgressionStoreKey = "ga_progression", o.ItemsStoreKey = "ga_items", o);

                        function o() {
                            this.eventsStore = [], this.sessionsStore = [], this.progressionStore = [], this.storeItems = {};
                            try {
                                o.storageAvailable = "object" == typeof localStorage && (localStorage.setItem("testingLocalStorage", "yes"), localStorage.removeItem("testingLocalStorage"), !0)
                            } catch (e) {}
                        }
                        e.GAStore = a
                    }((_e = p = p || {}).store || (_e.store = {})), ue = (le = p = p || {}).state || (le.state = {}), ce = le.validators.GAValidator, de = le.utilities.GAUtilities, fe = le.logging.GALogger, he = le.store.GAStore, pe = le.device.GADevice, ge = le.store.EGAStore, me = le.store.EGAStoreArgsOperator, Ne.setUserId = function(e) {
                        Ne.instance.userId = e, Ne.cacheIdentifier()
                    }, Ne.getIdentifier = function() {
                        return Ne.instance.identifier
                    }, Ne.isInitialized = function() {
                        return Ne.instance.initialized
                    }, Ne.setInitialized = function(e) {
                        Ne.instance.initialized = e
                    }, Ne.getSessionStart = function() {
                        return Ne.instance.sessionStart
                    }, Ne.getSessionNum = function() {
                        return Ne.instance.sessionNum
                    }, Ne.getTransactionNum = function() {
                        return Ne.instance.transactionNum
                    }, Ne.getSessionId = function() {
                        return Ne.instance.sessionId
                    }, Ne.getCurrentCustomDimension01 = function() {
                        return Ne.instance.currentCustomDimension01
                    }, Ne.getCurrentCustomDimension02 = function() {
                        return Ne.instance.currentCustomDimension02
                    }, Ne.getCurrentCustomDimension03 = function() {
                        return Ne.instance.currentCustomDimension03
                    }, Ne.getGameKey = function() {
                        return Ne.instance.gameKey
                    }, Ne.getGameSecret = function() {
                        return Ne.instance.gameSecret
                    }, Ne.getAvailableCustomDimensions01 = function() {
                        return Ne.instance.availableCustomDimensions01
                    }, Ne.setAvailableCustomDimensions01 = function(e) {
                        ce.validateCustomDimensions(e) && (Ne.instance.availableCustomDimensions01 = e, Ne.validateAndFixCurrentDimensions(), fe.i("Set available custom01 dimension values: (" + de.joinStringArray(e, ", ") + ")"))
                    }, Ne.getAvailableCustomDimensions02 = function() {
                        return Ne.instance.availableCustomDimensions02
                    }, Ne.setAvailableCustomDimensions02 = function(e) {
                        ce.validateCustomDimensions(e) && (Ne.instance.availableCustomDimensions02 = e, Ne.validateAndFixCurrentDimensions(), fe.i("Set available custom02 dimension values: (" + de.joinStringArray(e, ", ") + ")"))
                    }, Ne.getAvailableCustomDimensions03 = function() {
                        return Ne.instance.availableCustomDimensions03
                    }, Ne.setAvailableCustomDimensions03 = function(e) {
                        ce.validateCustomDimensions(e) && (Ne.instance.availableCustomDimensions03 = e, Ne.validateAndFixCurrentDimensions(), fe.i("Set available custom03 dimension values: (" + de.joinStringArray(e, ", ") + ")"))
                    }, Ne.getAvailableResourceCurrencies = function() {
                        return Ne.instance.availableResourceCurrencies
                    }, Ne.setAvailableResourceCurrencies = function(e) {
                        ce.validateResourceCurrencies(e) && (Ne.instance.availableResourceCurrencies = e, fe.i("Set available resource currencies: (" + de.joinStringArray(e, ", ") + ")"))
                    }, Ne.getAvailableResourceItemTypes = function() {
                        return Ne.instance.availableResourceItemTypes
                    }, Ne.setAvailableResourceItemTypes = function(e) {
                        ce.validateResourceItemTypes(e) && (Ne.instance.availableResourceItemTypes = e, fe.i("Set available resource item types: (" + de.joinStringArray(e, ", ") + ")"))
                    }, Ne.getBuild = function() {
                        return Ne.instance.build
                    }, Ne.setBuild = function(e) {
                        Ne.instance.build = e, fe.i("Set build version: " + e)
                    }, Ne.getUseManualSessionHandling = function() {
                        return Ne.instance.useManualSessionHandling
                    }, Ne.isEventSubmissionEnabled = function() {
                        return Ne.instance._isEventSubmissionEnabled
                    }, Ne.getABTestingId = function() {
                        return Ne.instance.abId
                    }, Ne.getABTestingVariantId = function() {
                        return Ne.instance.abVariantId
                    }, Ne.prototype.setDefaultId = function(e) {
                        this.defaultUserId = e || "", Ne.cacheIdentifier()
                    }, Ne.getDefaultId = function() {
                        return Ne.instance.defaultUserId
                    }, Ne.getSdkConfig = function() {
                        var e, t = 0;
                        for (var n in Ne.instance.sdkConfig) 0 === t && (e = n), ++t;
                        if (e && 0 < t) return Ne.instance.sdkConfig;
                        for (var n in t = 0, Ne.instance.sdkConfigCached) 0 === t && (e = n), ++t;
                        return e && 0 < t ? Ne.instance.sdkConfigCached : Ne.instance.sdkConfigDefault
                    }, Ne.isEnabled = function() {
                        return !!Ne.instance.initAuthorized
                    }, Ne.setCustomDimension01 = function(e) {
                        Ne.instance.currentCustomDimension01 = e, he.setItem(Ne.getGameKey(), Ne.Dimension01Key, e), fe.i("Set custom01 dimension value: " + e)
                    }, Ne.setCustomDimension02 = function(e) {
                        Ne.instance.currentCustomDimension02 = e, he.setItem(Ne.getGameKey(), Ne.Dimension02Key, e), fe.i("Set custom02 dimension value: " + e)
                    }, Ne.setCustomDimension03 = function(e) {
                        Ne.instance.currentCustomDimension03 = e, he.setItem(Ne.getGameKey(), Ne.Dimension03Key, e), fe.i("Set custom03 dimension value: " + e)
                    }, Ne.incrementSessionNum = function() {
                        var e = Ne.getSessionNum() + 1;
                        Ne.instance.sessionNum = e
                    }, Ne.incrementTransactionNum = function() {
                        var e = Ne.getTransactionNum() + 1;
                        Ne.instance.transactionNum = e
                    }, Ne.incrementProgressionTries = function(e) {
                        var t = Ne.getProgressionTries(e) + 1;
                        Ne.instance.progressionTries[e] = t;
                        var n = {};
                        n.progression = e, n.tries = t, he.insert(ge.Progression, n, !0, "progression")
                    }, Ne.getProgressionTries = function(e) {
                        return e in Ne.instance.progressionTries ? Ne.instance.progressionTries[e] : 0
                    }, Ne.clearProgressionTries = function(e) {
                        e in Ne.instance.progressionTries && delete Ne.instance.progressionTries[e];
                        var t = [];
                        t.push(["progression", me.Equal, e]), he.delete(ge.Progression, t)
                    }, Ne.setKeys = function(e, t) {
                        Ne.instance.gameKey = e, Ne.instance.gameSecret = t
                    }, Ne.setManualSessionHandling = function(e) {
                        Ne.instance.useManualSessionHandling = e, fe.i("Use manual session handling: " + e)
                    }, Ne.setEnabledEventSubmission = function(e) {
                        Ne.instance._isEventSubmissionEnabled = e
                    }, Ne.getEventAnnotations = function() {
                        var e = {
                            v: 2
                        };
                        e.user_id = Ne.instance.identifier, e.client_ts = Ne.getClientTsAdjusted(), e.sdk_version = pe.getRelevantSdkVersion(), e.os_version = pe.osVersion, e.manufacturer = pe.deviceManufacturer, e.device = pe.deviceModel, e.browser_version = pe.browserVersion, e.platform = pe.buildPlatform, e.session_id = Ne.instance.sessionId, e[Ne.SessionNumKey] = Ne.instance.sessionNum;
                        var t = pe.getConnectionType();
                        if (ce.validateConnectionType(t) && (e.connection_type = t), pe.gameEngineVersion && (e.engine_version = pe.gameEngineVersion), Ne.instance.configurations) {
                            var n = 0;
                            for (var i in Ne.instance.configurations) {
                                n++;
                                break
                            }
                            0 < n && (e.configurations = Ne.instance.configurations)
                        }
                        return Ne.instance.abId && (e.ab_id = Ne.instance.abId), Ne.instance.abVariantId && (e.ab_variant_id = Ne.instance.abVariantId), Ne.instance.build && (e.build = Ne.instance.build), e
                    }, Ne.getSdkErrorEventAnnotations = function() {
                        var e = {
                            v: 2
                        };
                        e.category = Ne.CategorySdkError, e.sdk_version = pe.getRelevantSdkVersion(), e.os_version = pe.osVersion, e.manufacturer = pe.deviceManufacturer, e.device = pe.deviceModel, e.platform = pe.buildPlatform;
                        var t = pe.getConnectionType();
                        return ce.validateConnectionType(t) && (e.connection_type = t), pe.gameEngineVersion && (e.engine_version = pe.gameEngineVersion), e
                    }, Ne.getInitAnnotations = function() {
                        var e = {};
                        return Ne.getIdentifier() || Ne.cacheIdentifier(), e.user_id = Ne.getIdentifier(), e.sdk_version = pe.getRelevantSdkVersion(), e.os_version = pe.osVersion, e.platform = pe.buildPlatform, Ne.getBuild() ? e.build = Ne.getBuild() : e.build = null, e.session_num = Ne.getSessionNum(), e.random_salt = Ne.getSessionNum(), e
                    }, Ne.getClientTsAdjusted = function() {
                        var e = de.timeIntervalSince1970(),
                            t = e + Ne.instance.clientServerTimeOffset;
                        return ce.validateClientTs(t) ? t : e
                    }, Ne.sessionIsStarted = function() {
                        return 0 != Ne.instance.sessionStart
                    }, Ne.cacheIdentifier = function() {
                        Ne.instance.userId ? Ne.instance.identifier = Ne.instance.userId : Ne.instance.defaultUserId && (Ne.instance.identifier = Ne.instance.defaultUserId)
                    }, Ne.ensurePersistedStates = function() {
                        he.isStorageAvailable() && he.load(Ne.getGameKey());
                        var e = Ne.instance;
                        e.setDefaultId(null != he.getItem(Ne.getGameKey(), Ne.DefaultUserIdKey) ? he.getItem(Ne.getGameKey(), Ne.DefaultUserIdKey) : de.createGuid()), e.sessionNum = null != he.getItem(Ne.getGameKey(), Ne.SessionNumKey) ? Number(he.getItem(Ne.getGameKey(), Ne.SessionNumKey)) : 0, e.transactionNum = null != he.getItem(Ne.getGameKey(), Ne.TransactionNumKey) ? Number(he.getItem(Ne.getGameKey(), Ne.TransactionNumKey)) : 0, e.currentCustomDimension01 ? he.setItem(Ne.getGameKey(), Ne.Dimension01Key, e.currentCustomDimension01) : (e.currentCustomDimension01 = null != he.getItem(Ne.getGameKey(), Ne.Dimension01Key) ? he.getItem(Ne.getGameKey(), Ne.Dimension01Key) : "", e.currentCustomDimension01), e.currentCustomDimension02 ? he.setItem(Ne.getGameKey(), Ne.Dimension02Key, e.currentCustomDimension02) : (e.currentCustomDimension02 = null != he.getItem(Ne.getGameKey(), Ne.Dimension02Key) ? he.getItem(Ne.getGameKey(), Ne.Dimension02Key) : "", e.currentCustomDimension02), e.currentCustomDimension03 ? he.setItem(Ne.getGameKey(), Ne.Dimension03Key, e.currentCustomDimension03) : (e.currentCustomDimension03 = null != he.getItem(Ne.getGameKey(), Ne.Dimension03Key) ? he.getItem(Ne.getGameKey(), Ne.Dimension03Key) : "", e.currentCustomDimension03);
                        var t = null != he.getItem(Ne.getGameKey(), Ne.SdkConfigCachedKey) ? he.getItem(Ne.getGameKey(), Ne.SdkConfigCachedKey) : "";
                        if (t) {
                            var n = JSON.parse(de.decode64(t));
                            n && (e.sdkConfigCached = n)
                        }
                        var i = Ne.getSdkConfig();
                        e.configsHash = i.configs_hash ? i.configs_hash : "", e.abId = i.ab_id ? i.ab_id : "", e.abVariantId = i.ab_variant_id ? i.ab_variant_id : "";
                        var r = he.select(ge.Progression);
                        if (r)
                            for (var s = 0; s < r.length; ++s) {
                                var a = r[s];
                                a && (e.progressionTries[a.progression] = a.tries)
                            }
                    }, Ne.calculateServerTimeOffset = function(e) {
                        return e - de.timeIntervalSince1970()
                    }, Ne.validateAndCleanCustomFields = function(e) {
                        var t = {};
                        if (e) {
                            var n = 0;
                            for (var i in e) {
                                var r = e[i];
                                if (i && r)
                                    if (n < Ne.MAX_CUSTOM_FIELDS_COUNT) {
                                        var s = new RegExp("^[a-zA-Z0-9_]{1," + Ne.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
                                        if (de.stringMatch(i, s)) {
                                            var a = typeof r;
                                            if ("string" == a || r instanceof String) r.length <= Ne.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && 0 < r.length ? (t[i] = r, ++n) : fe.w("validateAndCleanCustomFields: entry with key=" + i + ", value=" + r + " has been omitted because its value is an empty string or exceeds the max number of characters (" + Ne.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")");
                                            else if ("number" == a || r instanceof Number) {
                                                var o = r;
                                                t[i] = o, ++n
                                            } else fe.w("validateAndCleanCustomFields: entry with key=" + i + ", value=" + r + " has been omitted because its value is not a string or number")
                                        } else fe.w("validateAndCleanCustomFields: entry with key=" + i + ", value=" + r + " has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + Ne.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")")
                                    } else fe.w("validateAndCleanCustomFields: entry with key=" + i + ", value=" + r + " has been omitted because it exceeds the max number of custom fields (" + Ne.MAX_CUSTOM_FIELDS_COUNT + ")");
                                else fe.w("validateAndCleanCustomFields: entry with key=" + i + ", value=" + r + " has been omitted because its key or value is null")
                            }
                        }
                        return t
                    }, Ne.validateAndFixCurrentDimensions = function() {
                        ce.validateDimension01(Ne.getCurrentCustomDimension01(), Ne.getAvailableCustomDimensions01()) || Ne.setCustomDimension01(""), ce.validateDimension02(Ne.getCurrentCustomDimension02(), Ne.getAvailableCustomDimensions02()) || Ne.setCustomDimension02(""), ce.validateDimension03(Ne.getCurrentCustomDimension03(), Ne.getAvailableCustomDimensions03()) || Ne.setCustomDimension03("")
                    }, Ne.getConfigurationStringValue = function(e, t) {
                        return Ne.instance.configurations[e] ? Ne.instance.configurations[e].toString() : t
                    }, Ne.isRemoteConfigsReady = function() {
                        return Ne.instance.remoteConfigsIsReady
                    }, Ne.addRemoteConfigsListener = function(e) {
                        Ne.instance.remoteConfigsListeners.indexOf(e) < 0 && Ne.instance.remoteConfigsListeners.push(e)
                    }, Ne.removeRemoteConfigsListener = function(e) {
                        var t = Ne.instance.remoteConfigsListeners.indexOf(e); - 1 < t && Ne.instance.remoteConfigsListeners.splice(t, 1)
                    }, Ne.getRemoteConfigsContentAsString = function() {
                        return JSON.stringify(Ne.instance.configurations)
                    }, Ne.populateConfigurations = function(e) {
                        var t = e.configs;
                        if (t) {
                            Ne.instance.configurations = {};
                            for (var n = 0; n < t.length; ++n) {
                                var i = t[n];
                                if (i) {
                                    var r = i.key,
                                        s = i.value,
                                        a = i.start_ts ? i.start_ts : Number.MIN_VALUE,
                                        o = i.end_ts ? i.end_ts : Number.MAX_VALUE,
                                        l = Ne.getClientTsAdjusted();
                                    r && s && a < l && l < o && (Ne.instance.configurations[r] = s)
                                }
                            }
                        }
                        Ne.instance.remoteConfigsIsReady = !0;
                        var u = Ne.instance.remoteConfigsListeners;
                        for (n = 0; n < u.length; ++n) u[n] && u[n].onRemoteConfigsUpdated()
                    }, Ne.CategorySdkError = "sdk_error", Ne.MAX_CUSTOM_FIELDS_COUNT = 50, Ne.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64, Ne.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256, Ne.instance = new Ne, Ne.DefaultUserIdKey = "default_user_id", Ne.SessionNumKey = "session_num", Ne.TransactionNumKey = "transaction_num", Ne.Dimension01Key = "dimension01", Ne.Dimension02Key = "dimension02", Ne.Dimension03Key = "dimension03", Ne.SdkConfigCachedKey = "sdk_config_cached", ve = Ne, ue.GAState = ve, re = (ie = p = p || {}).tasks || (ie.tasks = {}), se = ie.utilities.GAUtilities, ae = ie.logging.GALogger, Ge.execute = function(e, t, n, i) {
                        var r = new Date;
                        if (Ge.timestampMap[t] || (Ge.timestampMap[t] = r), Ge.countMap[t] || (Ge.countMap[t] = 0), 3600 <= (r.getTime() - Ge.timestampMap[t].getTime()) / 1e3 && (Ge.timestampMap[t] = r, Ge.countMap[t] = 0), !(Ge.countMap[t] >= Ge.MaxCount)) {
                            var s = se.getHmac(i, n),
                                a = new XMLHttpRequest;
                            a.onreadystatechange = function() {
                                if (4 === a.readyState) {
                                    if (!a.responseText) return;
                                    if (200 != a.status) return void ae.w("sdk error failed. response code not 200. status code: " + a.status + ", description: " + a.statusText + ", body: " + a.responseText);
                                    Ge.countMap[t] = Ge.countMap[t] + 1
                                }
                            }, a.open("POST", e, !0), a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("Authorization", s);
                            try {
                                a.send(n)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, Ge.MaxCount = 10, Ge.countMap = {}, Ge.timestampMap = {}, oe = Ge, re.SdkErrorTask = oe, K = p = p || {}, H = K.http || (K.http = {}), X = K.state.GAState, Y = K.logging.GALogger, W = K.utilities.GAUtilities, J = K.validators.GAValidator, $ = K.tasks.SdkErrorTask, Q = K.events.EGASdkErrorCategory, Z = K.events.EGASdkErrorArea, ee = K.events.EGASdkErrorAction, te = K.events.EGASdkErrorParameter, Be.prototype.requestInit = function(e, t) {
                        var n = X.getGameKey(),
                            i = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + n + "&interval_seconds=0&configs_hash=" + e,
                            r = X.getInitAnnotations(),
                            s = JSON.stringify(r);
                        if (s) {
                            var a = this.createPayloadData(s, this.useGzip),
                                o = [];
                            o.push(s), Be.sendRequest(i, a, o, this.useGzip, Be.initRequestCallback, t)
                        } else t(H.EGAHTTPApiResponse.JsonEncodeFailed, null)
                    }, Be.prototype.sendEventsInArray = function(e, t, n) {
                        if (0 != e.length) {
                            var i = X.getGameKey(),
                                r = this.baseUrl + "/" + i + "/" + this.eventsUrlPath,
                                s = JSON.stringify(e);
                            if (s) {
                                var a = this.createPayloadData(s, this.useGzip),
                                    o = [];
                                o.push(s), o.push(t), o.push(e.length.toString()), Be.sendRequest(r, a, o, this.useGzip, Be.sendEventInArrayRequestCallback, n)
                            } else n(H.EGAHTTPApiResponse.JsonEncodeFailed, null, t, e.length)
                        }
                    }, Be.prototype.sendSdkErrorEvent = function(e, t, n, i, r, s, a) {
                        if (X.isEventSubmissionEnabled() && J.validateSdkErrorEvent(s, a, e, t, n)) {
                            var o, l = this.baseUrl + "/" + s + "/" + this.eventsUrlPath,
                                u = "",
                                c = X.getSdkErrorEventAnnotations(),
                                d = Be.sdkErrorCategoryString(e);
                            u += c.error_category = d;
                            var f = Be.sdkErrorAreaString(t);
                            u += ":" + (c.error_area = f);
                            var h = Be.sdkErrorActionString(n);
                            c.error_action = h;
                            var p = Be.sdkErrorParameterString(i);
                            if (0 < p.length && (c.error_parameter = p), 0 < r.length) {
                                var g = r;
                                r.length > Be.MAX_ERROR_MESSAGE_LENGTH && (g = r.substring(0, Be.MAX_ERROR_MESSAGE_LENGTH)), c.reason = g
                            }
                            var m = [];
                            m.push(c), (o = JSON.stringify(m)) ? $.execute(l, u, o, a) : Y.w("sendSdkErrorEvent: JSON encoding failed.")
                        }
                    }, Be.sendEventInArrayRequestCallback = function(e, t, n, i) {
                        void 0 === i && (i = null), i[0], i[1];
                        var r, s, a = i[2],
                            o = parseInt(i[3]);
                        r = e.responseText, s = e.status;
                        var l = Be.instance.processRequestResponse(s, e.statusText, r, "Events");
                        if (l == H.EGAHTTPApiResponse.Ok || l == H.EGAHTTPApiResponse.Created || l == H.EGAHTTPApiResponse.BadRequest) {
                            var u = r ? JSON.parse(r) : {};
                            if (null == u) return n(H.EGAHTTPApiResponse.JsonDecodeFailed, null, a, o), void Be.instance.sendSdkErrorEvent(Q.Http, Z.EventsHttp, ee.FailHttpJsonDecode, te.Undefined, r, X.getGameKey(), X.getGameSecret());
                            H.EGAHTTPApiResponse.BadRequest, n(l, u, a, o)
                        } else n(l, null, a, o)
                    }, Be.sendRequest = function(e, t, n, i, r, s) {
                        var a = new XMLHttpRequest,
                            o = X.getGameSecret(),
                            l = W.getHmac(o, t),
                            u = [];
                        for (var c in u.push(l), n) u.push(n[c]);
                        if (a.onreadystatechange = function() {
                                4 === a.readyState && r(a, e, s, u)
                            }, a.open("POST", e, !0), a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("Authorization", l), i) throw new Error("gzip not supported");
                        try {
                            a.send(t)
                        } catch (e) {
                            console.error(e.stack)
                        }
                    }, Be.initRequestCallback = function(e, t, n, i) {
                        var r, s;
                        void 0 === i && (i = null), i[0], i[1], r = e.responseText, s = e.status;
                        var a = r ? JSON.parse(r) : {},
                            o = Be.instance.processRequestResponse(s, e.statusText, r, "Init");
                        if (o == H.EGAHTTPApiResponse.Ok || o == H.EGAHTTPApiResponse.Created || o == H.EGAHTTPApiResponse.BadRequest) {
                            if (null == a) return n(H.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0), void Be.instance.sendSdkErrorEvent(Q.Http, Z.InitHttp, ee.FailHttpJsonDecode, te.Undefined, r, X.getGameKey(), X.getGameSecret());
                            if (o !== H.EGAHTTPApiResponse.BadRequest) {
                                var l = J.validateAndCleanInitRequestResponse(a, o === H.EGAHTTPApiResponse.Created);
                                l ? n(o, l, "", 0) : n(H.EGAHTTPApiResponse.BadResponse, null, "", 0)
                            } else n(o, null, "", 0)
                        } else n(o, null, "", 0)
                    }, Be.prototype.createPayloadData = function(e, t) {
                        if (t) throw new Error("gzip not supported");
                        return e
                    }, Be.prototype.processRequestResponse = function(e, t, n, i) {
                        return n ? 200 === e ? H.EGAHTTPApiResponse.Ok : 201 === e ? H.EGAHTTPApiResponse.Created : 0 === e || 401 === e ? H.EGAHTTPApiResponse.Unauthorized : 400 === e ? H.EGAHTTPApiResponse.BadRequest : 500 === e ? H.EGAHTTPApiResponse.InternalServerError : H.EGAHTTPApiResponse.UnknownResponseCode : H.EGAHTTPApiResponse.NoResponse
                    }, Be.sdkErrorCategoryString = function(e) {
                        switch (e) {
                            case Q.EventValidation:
                                return "event_validation";
                            case Q.Database:
                                return "db";
                            case Q.Init:
                                return "init";
                            case Q.Http:
                                return "http";
                            case Q.Json:
                                return "json"
                        }
                        return ""
                    }, Be.sdkErrorAreaString = function(e) {
                        switch (e) {
                            case Z.BusinessEvent:
                                return "business";
                            case Z.ResourceEvent:
                                return "resource";
                            case Z.ProgressionEvent:
                                return "progression";
                            case Z.DesignEvent:
                                return "design";
                            case Z.ErrorEvent:
                                return "error";
                            case Z.InitHttp:
                                return "init_http";
                            case Z.EventsHttp:
                                return "events_http";
                            case Z.ProcessEvents:
                                return "process_events";
                            case Z.AddEventsToStore:
                                return "add_events_to_store"
                        }
                        return ""
                    }, Be.sdkErrorActionString = function(e) {
                        switch (e) {
                            case ee.InvalidCurrency:
                                return "invalid_currency";
                            case ee.InvalidShortString:
                                return "invalid_short_string";
                            case ee.InvalidEventPartLength:
                                return "invalid_event_part_length";
                            case ee.InvalidEventPartCharacters:
                                return "invalid_event_part_characters";
                            case ee.InvalidStore:
                                return "invalid_store";
                            case ee.InvalidFlowType:
                                return "invalid_flow_type";
                            case ee.StringEmptyOrNull:
                                return "string_empty_or_null";
                            case ee.NotFoundInAvailableCurrencies:
                                return "not_found_in_available_currencies";
                            case ee.InvalidAmount:
                                return "invalid_amount";
                            case ee.NotFoundInAvailableItemTypes:
                                return "not_found_in_available_item_types";
                            case ee.WrongProgressionOrder:
                                return "wrong_progression_order";
                            case ee.InvalidEventIdLength:
                                return "invalid_event_id_length";
                            case ee.InvalidEventIdCharacters:
                                return "invalid_event_id_characters";
                            case ee.InvalidProgressionStatus:
                                return "invalid_progression_status";
                            case ee.InvalidSeverity:
                                return "invalid_severity";
                            case ee.InvalidLongString:
                                return "invalid_long_string";
                            case ee.DatabaseTooLarge:
                                return "db_too_large";
                            case ee.DatabaseOpenOrCreate:
                                return "db_open_or_create";
                            case ee.JsonError:
                                return "json_error";
                            case ee.FailHttpJsonDecode:
                                return "fail_http_json_decode";
                            case ee.FailHttpJsonEncode:
                                return "fail_http_json_encode"
                        }
                        return ""
                    }, Be.sdkErrorParameterString = function(e) {
                        switch (e) {
                            case te.Currency:
                                return "currency";
                            case te.CartType:
                                return "cart_type";
                            case te.ItemType:
                                return "item_type";
                            case te.ItemId:
                                return "item_id";
                            case te.Store:
                                return "store";
                            case te.FlowType:
                                return "flow_type";
                            case te.Amount:
                                return "amount";
                            case te.Progression01:
                                return "progression01";
                            case te.Progression02:
                                return "progression02";
                            case te.Progression03:
                                return "progression03";
                            case te.EventId:
                                return "event_id";
                            case te.ProgressionStatus:
                                return "progression_status";
                            case te.Severity:
                                return "severity";
                            case te.Message:
                                return "message"
                        }
                        return ""
                    }, Be.instance = new Be, Be.MAX_ERROR_MESSAGE_LENGTH = 256, ne = Be, H.GAHTTPApi = ne, D = p = p || {}, O = D.events || (D.events = {}), M = D.store.GAStore, B = D.store.EGAStore, G = D.store.EGAStoreArgsOperator, N = D.state.GAState, L = D.logging.GALogger, V = D.utilities.GAUtilities, z = D.http.EGAHTTPApiResponse, U = D.http.GAHTTPApi, q = D.validators.GAValidator, Me.addSessionStartEvent = function() {
                        if (N.isEventSubmissionEnabled()) {
                            var e = {};
                            e.category = Me.CategorySessionStart, N.incrementSessionNum(), M.setItem(N.getGameKey(), N.SessionNumKey, N.getSessionNum().toString()), Me.addDimensionsToEvent(e), Me.addEventToStore(e), L.i("Add SESSION START event"), Me.processEvents(Me.CategorySessionStart, !1)
                        }
                    }, Me.addSessionEndEvent = function() {
                        if (N.isEventSubmissionEnabled()) {
                            var e = N.getSessionStart(),
                                t = N.getClientTsAdjusted() - e;
                            t < 0 && (L.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0."), t = 0);
                            var n = {};
                            n.category = Me.CategorySessionEnd, n.length = t, Me.addDimensionsToEvent(n), Me.addEventToStore(n), L.i("Add SESSION END event."), Me.processEvents("", !1)
                        }
                    }, Me.addBusinessEvent = function(e, t, n, i, r, s) {
                        if (void 0 === r && (r = null), N.isEventSubmissionEnabled()) {
                            var a = q.validateBusinessEvent(e, t, r, n, i);
                            if (null == a) {
                                var o = {};
                                N.incrementTransactionNum(), M.setItem(N.getGameKey(), N.TransactionNumKey, N.getTransactionNum().toString()), o.event_id = n + ":" + i, o.category = Me.CategoryBusiness, o.currency = e, o.amount = t, o[N.TransactionNumKey] = N.getTransactionNum(), r && (o.cart_type = r), Me.addDimensionsToEvent(o), Me.addFieldsToEvent(o, N.validateAndCleanCustomFields(s)), L.i("Add BUSINESS event: {currency:" + e + ", amount:" + t + ", itemType:" + n + ", itemId:" + i + ", cartType:" + r + "}"), Me.addEventToStore(o)
                            } else U.instance.sendSdkErrorEvent(a.category, a.area, a.action, a.parameter, a.reason, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.addResourceEvent = function(e, t, n, i, r, s) {
                        if (N.isEventSubmissionEnabled()) {
                            var a = q.validateResourceEvent(e, t, n, i, r, N.getAvailableResourceCurrencies(), N.getAvailableResourceItemTypes());
                            if (null == a) {
                                e === D.EGAResourceFlowType.Sink && (n *= -1);
                                var o = {},
                                    l = Me.resourceFlowTypeToString(e);
                                o.event_id = l + ":" + t + ":" + i + ":" + r, o.category = Me.CategoryResource, o.amount = n, Me.addDimensionsToEvent(o), Me.addFieldsToEvent(o, N.validateAndCleanCustomFields(s)), L.i("Add RESOURCE event: {currency:" + t + ", amount:" + n + ", itemType:" + i + ", itemId:" + r + "}"), Me.addEventToStore(o)
                            } else U.instance.sendSdkErrorEvent(a.category, a.area, a.action, a.parameter, a.reason, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.addProgressionEvent = function(e, t, n, i, r, s, a) {
                        if (N.isEventSubmissionEnabled()) {
                            var o = Me.progressionStatusToString(e),
                                l = q.validateProgressionEvent(e, t, n, i);
                            if (null == l) {
                                var u, c = {};
                                u = n ? i ? t + ":" + n + ":" + i : t + ":" + n : t, c.category = Me.CategoryProgression, c.event_id = o + ":" + u;
                                var d = 0;
                                s && e != D.EGAProgressionStatus.Start && (c.score = r), e === D.EGAProgressionStatus.Fail && N.incrementProgressionTries(u), e === D.EGAProgressionStatus.Complete && (N.incrementProgressionTries(u), d = N.getProgressionTries(u), c.attempt_num = d, N.clearProgressionTries(u)), Me.addDimensionsToEvent(c), Me.addFieldsToEvent(c, N.validateAndCleanCustomFields(a)), L.i("Add PROGRESSION event: {status:" + o + ", progression01:" + t + ", progression02:" + n + ", progression03:" + i + ", score:" + r + ", attempt:" + d + "}"), Me.addEventToStore(c)
                            } else U.instance.sendSdkErrorEvent(l.category, l.area, l.action, l.parameter, l.reason, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.addDesignEvent = function(e, t, n, i) {
                        if (N.isEventSubmissionEnabled()) {
                            var r = q.validateDesignEvent(e);
                            if (null == r) {
                                var s = {};
                                s.category = Me.CategoryDesign, s.event_id = e, n && (s.value = t), Me.addDimensionsToEvent(s), Me.addFieldsToEvent(s, N.validateAndCleanCustomFields(i)), L.i("Add DESIGN event: {eventId:" + e + ", value:" + t + "}"), Me.addEventToStore(s)
                            } else U.instance.sendSdkErrorEvent(r.category, r.area, r.action, r.parameter, r.reason, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.addErrorEvent = function(e, t, n) {
                        if (N.isEventSubmissionEnabled()) {
                            var i = Me.errorSeverityToString(e),
                                r = q.validateErrorEvent(e, t);
                            if (null == r) {
                                var s = {};
                                s.category = Me.CategoryError, s.severity = i, s.message = t, Me.addDimensionsToEvent(s), Me.addFieldsToEvent(s, N.validateAndCleanCustomFields(n)), L.i("Add ERROR event: {severity:" + i + ", message:" + t + "}"), Me.addEventToStore(s)
                            } else U.instance.sendSdkErrorEvent(r.category, r.area, r.action, r.parameter, r.reason, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.processEvents = function(e, t) {
                        if (N.isEventSubmissionEnabled()) try {
                            var n = V.createGuid();
                            t && (Me.cleanupEvents(), Me.fixMissingSessionEndEvents());
                            var i = [];
                            i.push(["status", G.Equal, "new"]);
                            var r = [];
                            r.push(["status", G.Equal, "new"]), e && (i.push(["category", G.Equal, e]), r.push(["category", G.Equal, e]));
                            var s = [];
                            s.push(["status", n]);
                            var a = M.select(B.Events, i);
                            if (!a || 0 == a.length) return L.i("Event queue: No events to send"), void Me.updateSessionStore();
                            if (a.length > Me.MaxEventCount) {
                                if (!(a = M.select(B.Events, i, !0, Me.MaxEventCount))) return;
                                var o = a[a.length - 1].client_ts;
                                if (i.push(["client_ts", G.LessOrEqual, o]), !(a = M.select(B.Events, i))) return;
                                r.push(["client_ts", G.LessOrEqual, o])
                            }
                            if (L.i("Event queue: Sending " + a.length + " events."), !M.update(B.Events, s, r)) return;
                            for (var l = [], u = 0; u < a.length; ++u) {
                                var c = a[u],
                                    d = JSON.parse(V.decode64(c.event));
                                0 != d.length && l.push(d)
                            }
                            U.instance.sendEventsInArray(l, n, Me.processEventsCallback)
                        } catch (e) {
                            L.e("Error during ProcessEvents(): " + e.stack), U.instance.sendSdkErrorEvent(O.EGASdkErrorCategory.Json, O.EGASdkErrorArea.ProcessEvents, O.EGASdkErrorAction.JsonError, O.EGASdkErrorParameter.Undefined, e.stack, N.getGameKey(), N.getGameSecret())
                        }
                    }, Me.processEventsCallback = function(e, t, n, i) {
                        var r = [];
                        if (r.push(["status", G.Equal, n]), e === z.Ok) M.delete(B.Events, r), L.i("Event queue: " + i + " events sent.");
                        else if (e === z.NoResponse) {
                            var s = [];
                            s.push(["status", "new"]), L.w("Event queue: Failed to send events to collector - Retrying next time"), M.update(B.Events, s, r)
                        } else {
                            if (t) {
                                var a, o = 0;
                                for (var l in t) 0 == o && (a = t[l]), ++o;
                                e === z.BadRequest && a.constructor === Array ? L.w("Event queue: " + i + " events sent. " + o + " events failed GA server validation.") : L.w("Event queue: Failed to send events.")
                            } else L.w("Event queue: Failed to send events.");
                            M.delete(B.Events, r)
                        }
                    }, Me.cleanupEvents = function() {
                        M.update(B.Events, [
                            ["status", "new"]
                        ])
                    }, Me.fixMissingSessionEndEvents = function() {
                        if (N.isEventSubmissionEnabled()) {
                            var e = [];
                            e.push(["session_id", G.NotEqual, N.getSessionId()]);
                            var t = M.select(B.Sessions, e);
                            if (t && 0 != t.length) {
                                L.i(t.length + " session(s) located with missing session_end event.");
                                for (var n = 0; n < t.length; ++n) {
                                    var i = JSON.parse(V.decode64(t[n].event)),
                                        r = i.client_ts - t[n].timestamp;
                                    r = Math.max(0, r), i.category = Me.CategorySessionEnd, i.length = r, Me.addEventToStore(i)
                                }
                            }
                        }
                    }, Me.addEventToStore = function(e) {
                        if (N.isEventSubmissionEnabled())
                            if (N.isInitialized()) try {
                                if (M.isStoreTooLargeForEvents() && !V.stringMatch(e.category, /^(user|session_end|business)$/)) return L.w("Database too large. Event has been blocked."), void U.instance.sendSdkErrorEvent(O.EGASdkErrorCategory.Database, O.EGASdkErrorArea.AddEventsToStore, O.EGASdkErrorAction.DatabaseTooLarge, O.EGASdkErrorParameter.Undefined, "", N.getGameKey(), N.getGameSecret());
                                var t = N.getEventAnnotations(),
                                    n = V.encode64(JSON.stringify(t));
                                for (var i in e) t[i] = e[i];
                                var r = JSON.stringify(t);
                                L.ii("Event added to queue: " + r);
                                var s = {
                                    status: "new"
                                };
                                s.category = t.category, s.session_id = t.session_id, s.client_ts = t.client_ts, s.event = V.encode64(JSON.stringify(t)), M.insert(B.Events, s), e.category == Me.CategorySessionEnd ? M.delete(B.Sessions, [
                                    ["session_id", G.Equal, t.session_id]
                                ]) : ((s = {}).session_id = t.session_id, s.timestamp = N.getSessionStart(), s.event = n, M.insert(B.Sessions, s, !0, "session_id")), M.isStorageAvailable() && M.save(N.getGameKey())
                            } catch (i) {
                                L.e("addEventToStore: error"), L.e(i.stack), U.instance.sendSdkErrorEvent(O.EGASdkErrorCategory.Database, O.EGASdkErrorArea.AddEventsToStore, O.EGASdkErrorAction.DatabaseTooLarge, O.EGASdkErrorParameter.Undefined, i.stack, N.getGameKey(), N.getGameSecret())
                            } else L.w("Could not add event: SDK is not initialized")
                    }, Me.updateSessionStore = function() {
                        if (N.sessionIsStarted()) {
                            var e = {};
                            e.session_id = N.instance.sessionId, e.timestamp = N.getSessionStart(), e.event = V.encode64(JSON.stringify(N.getEventAnnotations())), M.insert(B.Sessions, e, !0, "session_id"), M.isStorageAvailable() && M.save(N.getGameKey())
                        }
                    }, Me.addDimensionsToEvent = function(e) {
                        e && (N.getCurrentCustomDimension01() && (e.custom_01 = N.getCurrentCustomDimension01()), N.getCurrentCustomDimension02() && (e.custom_02 = N.getCurrentCustomDimension02()), N.getCurrentCustomDimension03() && (e.custom_03 = N.getCurrentCustomDimension03()))
                    }, Me.addFieldsToEvent = function(e, t) {
                        e && t && 0 < Object.keys(t).length && (e.custom_fields = t)
                    }, Me.resourceFlowTypeToString = function(e) {
                        return e == D.EGAResourceFlowType.Source || e == D.EGAResourceFlowType[D.EGAResourceFlowType.Source] ? "Source" : e == D.EGAResourceFlowType.Sink || e == D.EGAResourceFlowType[D.EGAResourceFlowType.Sink] ? "Sink" : ""
                    }, Me.progressionStatusToString = function(e) {
                        return e == D.EGAProgressionStatus.Start || e == D.EGAProgressionStatus[D.EGAProgressionStatus.Start] ? "Start" : e == D.EGAProgressionStatus.Complete || e == D.EGAProgressionStatus[D.EGAProgressionStatus.Complete] ? "Complete" : e == D.EGAProgressionStatus.Fail || e == D.EGAProgressionStatus[D.EGAProgressionStatus.Fail] ? "Fail" : ""
                    }, Me.errorSeverityToString = function(e) {
                        return e == D.EGAErrorSeverity.Debug || e == D.EGAErrorSeverity[D.EGAErrorSeverity.Debug] ? "debug" : e == D.EGAErrorSeverity.Info || e == D.EGAErrorSeverity[D.EGAErrorSeverity.Info] ? "info" : e == D.EGAErrorSeverity.Warning || e == D.EGAErrorSeverity[D.EGAErrorSeverity.Warning] ? "warning" : e == D.EGAErrorSeverity.Error || e == D.EGAErrorSeverity[D.EGAErrorSeverity.Error] ? "error" : e == D.EGAErrorSeverity.Critical || e == D.EGAErrorSeverity[D.EGAErrorSeverity.Critical] ? "critical" : ""
                    }, Me.CategorySessionStart = "user", Me.CategorySessionEnd = "session_end", Me.CategoryDesign = "design", Me.CategoryBusiness = "business", Me.CategoryProgression = "progression", Me.CategoryResource = "resource", Me.CategoryError = "error", Me.MaxEventCount = 500, j = Me, O.GAEvents = j, A = p = p || {}, k = A.threading || (A.threading = {}), P = A.logging.GALogger, F = A.state.GAState, R = A.events.GAEvents, Oe.createTimedBlock = function(e) {
                        void 0 === e && (e = 0);
                        var t = new Date;
                        return t.setSeconds(t.getSeconds() + e), new k.TimedBlock(t)
                    }, Oe.performTaskOnGAThread = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = new Date;
                        n.setSeconds(n.getSeconds() + t);
                        var i = new k.TimedBlock(n);
                        i.block = e, Oe.instance.id2TimedBlockMap[i.id] = i, Oe.instance.addTimedBlock(i)
                    }, Oe.performTimedBlockOnGAThread = function(e) {
                        Oe.instance.id2TimedBlockMap[e.id] = e, Oe.instance.addTimedBlock(e)
                    }, Oe.scheduleTimer = function(e, t) {
                        var n = new Date;
                        n.setSeconds(n.getSeconds() + e);
                        var i = new k.TimedBlock(n);
                        return i.block = t, Oe.instance.id2TimedBlockMap[i.id] = i, Oe.instance.addTimedBlock(i), i.id
                    }, Oe.getTimedBlockById = function(e) {
                        return e in Oe.instance.id2TimedBlockMap ? Oe.instance.id2TimedBlockMap[e] : null
                    }, Oe.ensureEventQueueIsRunning = function() {
                        Oe.instance.keepRunning = !0, Oe.instance.isRunning || (Oe.instance.isRunning = !0, Oe.scheduleTimer(Oe.ProcessEventsIntervalInSeconds, Oe.processEventQueue))
                    }, Oe.endSessionAndStopQueue = function() {
                        F.isInitialized() && (P.i("Ending session."), Oe.stopEventQueue(), F.isEnabled() && F.sessionIsStarted() && (R.addSessionEndEvent(), F.instance.sessionStart = 0))
                    }, Oe.stopEventQueue = function() {
                        Oe.instance.keepRunning = !1
                    }, Oe.ignoreTimer = function(e) {
                        e in Oe.instance.id2TimedBlockMap && (Oe.instance.id2TimedBlockMap[e].ignore = !0)
                    }, Oe.setEventProcessInterval = function(e) {
                        0 < e && (Oe.ProcessEventsIntervalInSeconds = e)
                    }, Oe.prototype.addTimedBlock = function(e) {
                        this.blocks.enqueue(e.deadline.getTime(), e)
                    }, Oe.run = function() {
                        clearTimeout(Oe.runTimeoutId);
                        try {
                            for (var e; e = Oe.getNextBlock();)
                                if (!e.ignore)
                                    if (e.async) {
                                        if (!e.running) {
                                            e.running = !0, e.block();
                                            break
                                        }
                                    } else e.block();
                            return void(Oe.runTimeoutId = setTimeout(Oe.run, Oe.ThreadWaitTimeInMs))
                        } catch (e) {
                            P.e("Error on GA thread"), P.e(e.stack)
                        }
                    }, Oe.startThread = function() {
                        Oe.runTimeoutId = setTimeout(Oe.run, 0)
                    }, Oe.getNextBlock = function() {
                        var e = new Date;
                        return Oe.instance.blocks.hasItems() && Oe.instance.blocks.peek().deadline.getTime() <= e.getTime() ? Oe.instance.blocks.peek().async && Oe.instance.blocks.peek().running ? Oe.instance.blocks.peek() : Oe.instance.blocks.dequeue() : null
                    }, Oe.processEventQueue = function() {
                        R.processEvents("", !0), Oe.instance.keepRunning ? Oe.scheduleTimer(Oe.ProcessEventsIntervalInSeconds, Oe.processEventQueue) : Oe.instance.isRunning = !1
                    }, Oe.instance = new Oe, Oe.ThreadWaitTimeInMs = 1e3, Oe.ProcessEventsIntervalInSeconds = 8, I = Oe, k.GAThreading = I, g = p = p || {}, m = g.threading.GAThreading, v = g.logging.GALogger, _ = g.store.GAStore, y = g.state.GAState, b = g.http.GAHTTPApi, x = g.device.GADevice, S = g.validators.GAValidator, T = g.http.EGAHTTPApiResponse, w = g.utilities.GAUtilities, E = g.events.GAEvents, De.init = function() {
                        if (x.touch(), De.methodMap.configureAvailableCustomDimensions01 = De.configureAvailableCustomDimensions01, De.methodMap.configureAvailableCustomDimensions02 = De.configureAvailableCustomDimensions02, De.methodMap.configureAvailableCustomDimensions03 = De.configureAvailableCustomDimensions03, De.methodMap.configureAvailableResourceCurrencies = De.configureAvailableResourceCurrencies, De.methodMap.configureAvailableResourceItemTypes = De.configureAvailableResourceItemTypes, De.methodMap.configureBuild = De.configureBuild, De.methodMap.configureSdkGameEngineVersion = De.configureSdkGameEngineVersion, De.methodMap.configureGameEngineVersion = De.configureGameEngineVersion, De.methodMap.configureUserId = De.configureUserId, De.methodMap.initialize = De.initialize, De.methodMap.addBusinessEvent = De.addBusinessEvent, De.methodMap.addResourceEvent = De.addResourceEvent, De.methodMap.addProgressionEvent = De.addProgressionEvent, De.methodMap.addDesignEvent = De.addDesignEvent, De.methodMap.addErrorEvent = De.addErrorEvent, De.methodMap.addErrorEvent = De.addErrorEvent, De.methodMap.setEnabledInfoLog = De.setEnabledInfoLog, De.methodMap.setEnabledVerboseLog = De.setEnabledVerboseLog, De.methodMap.setEnabledManualSessionHandling = De.setEnabledManualSessionHandling, De.methodMap.setEnabledEventSubmission = De.setEnabledEventSubmission, De.methodMap.setCustomDimension01 = De.setCustomDimension01, De.methodMap.setCustomDimension02 = De.setCustomDimension02, De.methodMap.setCustomDimension03 = De.setCustomDimension03, De.methodMap.setEventProcessInterval = De.setEventProcessInterval, De.methodMap.startSession = De.startSession, De.methodMap.endSession = De.endSession, De.methodMap.onStop = De.onStop, De.methodMap.onResume = De.onResume, De.methodMap.addRemoteConfigsListener = De.addRemoteConfigsListener, De.methodMap.removeRemoteConfigsListener = De.removeRemoteConfigsListener, De.methodMap.getRemoteConfigsValueAsString = De.getRemoteConfigsValueAsString, De.methodMap.isRemoteConfigsReady = De.isRemoteConfigsReady, De.methodMap.getRemoteConfigsContentAsString = De.getRemoteConfigsContentAsString, "undefined" != typeof window && void 0 !== window.GameAnalytics && void 0 !== window.GameAnalytics.q) {
                            var e = window.GameAnalytics.q;
                            for (var t in e) De.gaCommand.apply(null, e[t])
                        }
                    }, De.gaCommand = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        0 < e.length && e[0] in g.GameAnalytics.methodMap && (1 < e.length ? g.GameAnalytics.methodMap[e[0]].apply(null, Array.prototype.slice.call(e, 1)) : g.GameAnalytics.methodMap[e[0]]())
                    }, De.configureAvailableCustomDimensions01 = function(e) {
                        void 0 === e && (e = []), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Available custom dimensions must be set before SDK is initialized") : y.setAvailableCustomDimensions01(e)
                        })
                    }, De.configureAvailableCustomDimensions02 = function(e) {
                        void 0 === e && (e = []), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Available custom dimensions must be set before SDK is initialized") : y.setAvailableCustomDimensions02(e)
                        })
                    }, De.configureAvailableCustomDimensions03 = function(e) {
                        void 0 === e && (e = []), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Available custom dimensions must be set before SDK is initialized") : y.setAvailableCustomDimensions03(e)
                        })
                    }, De.configureAvailableResourceCurrencies = function(e) {
                        void 0 === e && (e = []), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Available resource currencies must be set before SDK is initialized") : y.setAvailableResourceCurrencies(e)
                        })
                    }, De.configureAvailableResourceItemTypes = function(e) {
                        void 0 === e && (e = []), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Available resource item types must be set before SDK is initialized") : y.setAvailableResourceItemTypes(e)
                        })
                    }, De.configureBuild = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("Build version must be set before SDK is initialized.") : S.validateBuild(e) ? y.setBuild(e) : v.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + e)
                        })
                    }, De.configureSdkGameEngineVersion = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) || (S.validateSdkWrapperVersion(e) ? x.sdkGameEngineVersion = e : v.i("Validation fail - configure sdk version: Sdk version not supported. String: " + e))
                        })
                    }, De.configureGameEngineVersion = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) || (S.validateEngineVersion(e) ? x.gameEngineVersion = e : v.i("Validation fail - configure game engine version: Game engine version not supported. String: " + e))
                        })
                    }, De.configureUserId = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !1) ? v.w("A custom user id must be set before SDK is initialized.") : S.validateUserId(e) ? y.setUserId(e) : v.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + e)
                        })
                    }, De.initialize = function(e, t) {
                        void 0 === e && (e = ""), void 0 === t && (t = ""), x.updateConnectionType();
                        var n = m.createTimedBlock();
                        n.async = !0, De.initTimedBlockId = n.id, n.block = function() {
                            De.isSdkReady(!0, !1) ? v.w("SDK already initialized. Can only be called once.") : S.validateKeys(e, t) ? (y.setKeys(e, t), De.internalInitialize()) : v.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + e + ", secretKey: " + t)
                        }, m.performTimedBlockOnGAThread(n)
                    }, De.addBusinessEvent = function(e, t, n, i, r) {
                        void 0 === e && (e = ""), void 0 === t && (t = 0), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === r && (r = ""), x.updateConnectionType(), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !0, "Could not add business event") && E.addBusinessEvent(e, t, n, i, r, {})
                        })
                    }, De.addResourceEvent = function(e, t, n, i, r) {
                        void 0 === e && (e = g.EGAResourceFlowType.Undefined), void 0 === t && (t = ""), void 0 === n && (n = 0), void 0 === i && (i = ""), void 0 === r && (r = ""), x.updateConnectionType(), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !0, "Could not add resource event") && E.addResourceEvent(e, t, n, i, r, {})
                        })
                    }, De.addProgressionEvent = function(e, t, n, i, r) {
                        void 0 === e && (e = g.EGAProgressionStatus.Undefined), void 0 === t && (t = ""), void 0 === n && (n = ""), void 0 === i && (i = ""), x.updateConnectionType(), m.performTaskOnGAThread(function() {
                            if (De.isSdkReady(!0, !0, "Could not add progression event")) {
                                var s = "number" == typeof r;
                                E.addProgressionEvent(e, t, n, i, s ? r : 0, s, {})
                            }
                        })
                    }, De.addDesignEvent = function(e, t) {
                        x.updateConnectionType(), m.performTaskOnGAThread(function() {
                            if (De.isSdkReady(!0, !0, "Could not add design event")) {
                                var n = "number" == typeof t;
                                E.addDesignEvent(e, n ? t : 0, n, {})
                            }
                        })
                    }, De.addErrorEvent = function(e, t) {
                        void 0 === e && (e = g.EGAErrorSeverity.Undefined), void 0 === t && (t = ""), x.updateConnectionType(), m.performTaskOnGAThread(function() {
                            De.isSdkReady(!0, !0, "Could not add error event") && E.addErrorEvent(e, t, {})
                        })
                    }, De.setEnabledInfoLog = function(e) {
                        void 0 === e && (e = !1), m.performTaskOnGAThread(function() {
                            e ? (v.setInfoLog(e), v.i("Info logging enabled")) : (v.i("Info logging disabled"), v.setInfoLog(e))
                        })
                    }, De.setEnabledVerboseLog = function(e) {
                        void 0 === e && (e = !1), m.performTaskOnGAThread(function() {
                            e ? (v.setVerboseLog(e), v.i("Verbose logging enabled")) : (v.i("Verbose logging disabled"), v.setVerboseLog(e))
                        })
                    }, De.setEnabledManualSessionHandling = function(e) {
                        void 0 === e && (e = !1), m.performTaskOnGAThread(function() {
                            y.setManualSessionHandling(e)
                        })
                    }, De.setEnabledEventSubmission = function(e) {
                        void 0 === e && (e = !1), m.performTaskOnGAThread(function() {
                            e ? (y.setEnabledEventSubmission(e), v.i("Event submission enabled")) : (v.i("Event submission disabled"), y.setEnabledEventSubmission(e))
                        })
                    }, De.setCustomDimension01 = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            S.validateDimension01(e, y.getAvailableCustomDimensions01()) ? y.setCustomDimension01(e) : v.w("Could not set custom01 dimension value to '" + e + "'. Value not found in available custom01 dimension values")
                        })
                    }, De.setCustomDimension02 = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            S.validateDimension02(e, y.getAvailableCustomDimensions02()) ? y.setCustomDimension02(e) : v.w("Could not set custom02 dimension value to '" + e + "'. Value not found in available custom02 dimension values")
                        })
                    }, De.setCustomDimension03 = function(e) {
                        void 0 === e && (e = ""), m.performTaskOnGAThread(function() {
                            S.validateDimension03(e, y.getAvailableCustomDimensions03()) ? y.setCustomDimension03(e) : v.w("Could not set custom03 dimension value to '" + e + "'. Value not found in available custom03 dimension values")
                        })
                    }, De.setEventProcessInterval = function(e) {
                        m.performTaskOnGAThread(function() {
                            m.setEventProcessInterval(e)
                        })
                    }, De.startSession = function() {
                        if (y.isInitialized()) {
                            var e = m.createTimedBlock();
                            e.async = !0, De.initTimedBlockId = e.id, e.block = function() {
                                y.isEnabled() && y.sessionIsStarted() && m.endSessionAndStopQueue(), De.resumeSessionAndStartQueue()
                            }, m.performTimedBlockOnGAThread(e)
                        }
                    }, De.endSession = function() {
                        De.onStop()
                    }, De.onStop = function() {
                        m.performTaskOnGAThread(function() {
                            try {
                                m.endSessionAndStopQueue()
                            } catch (e) {}
                        })
                    }, De.onResume = function() {
                        var e = m.createTimedBlock();
                        e.async = !0, De.initTimedBlockId = e.id, e.block = function() {
                            De.resumeSessionAndStartQueue()
                        }, m.performTimedBlockOnGAThread(e)
                    }, De.getRemoteConfigsValueAsString = function(e, t) {
                        return void 0 === t && (t = null), y.getConfigurationStringValue(e, t)
                    }, De.isRemoteConfigsReady = function() {
                        return y.isRemoteConfigsReady()
                    }, De.addRemoteConfigsListener = function(e) {
                        y.addRemoteConfigsListener(e)
                    }, De.removeRemoteConfigsListener = function(e) {
                        y.removeRemoteConfigsListener(e)
                    }, De.getRemoteConfigsContentAsString = function() {
                        return y.getRemoteConfigsContentAsString()
                    }, De.getABTestingId = function() {
                        return y.getABTestingId()
                    }, De.getABTestingVariantId = function() {
                        return y.getABTestingVariantId()
                    }, De.internalInitialize = function() {
                        y.ensurePersistedStates(), _.setItem(y.getGameKey(), y.DefaultUserIdKey, y.getDefaultId()), y.setInitialized(!0), De.newSession(), y.isEnabled() && m.ensureEventQueueIsRunning()
                    }, De.newSession = function() {
                        v.i("Starting a new session."), y.validateAndFixCurrentDimensions(), b.instance.requestInit(y.instance.configsHash, De.startNewSessionCallback)
                    }, De.startNewSessionCallback = function(e, t) {
                        if (e !== T.Ok && e !== T.Created || !t) e == T.Unauthorized ? (v.w("Initialize SDK failed - Unauthorized"), y.instance.initAuthorized = !1) : (e === T.NoResponse || e === T.RequestTimeout ? v.i("Init call (session start) failed - no response. Could be offline or timeout.") : e === T.BadResponse || e === T.JsonEncodeFailed || e === T.JsonDecodeFailed ? v.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.") : e !== T.BadRequest && e !== T.UnknownResponseCode || v.i("Init call (session start) failed - bad request or unknown response."), null == y.instance.sdkConfig ? null != y.instance.sdkConfigCached ? (v.i("Init call (session start) failed - using cached init values."), y.instance.sdkConfig = y.instance.sdkConfigCached) : (v.i("Init call (session start) failed - using default init values."), y.instance.sdkConfig = y.instance.sdkConfigDefault) : v.i("Init call (session start) failed - using cached init values."), y.instance.initAuthorized = !0);
                        else {
                            var n = 0;
                            if (t.server_ts) {
                                var i = t.server_ts;
                                n = y.calculateServerTimeOffset(i)
                            }
                            if (t.time_offset = n, e != T.Created) {
                                var r = y.getSdkConfig();
                                r.configs && (t.configs = r.configs), r.configs_hash && (t.configs_hash = r.configs_hash), r.ab_id && (t.ab_id = r.ab_id), r.ab_variant_id && (t.ab_variant_id = r.ab_variant_id)
                            }
                            y.instance.configsHash = t.configs_hash ? t.configs_hash : "", y.instance.abId = t.ab_id ? t.ab_id : "", y.instance.abVariantId = t.ab_variant_id ? t.ab_variant_id : "", _.setItem(y.getGameKey(), y.SdkConfigCachedKey, w.encode64(JSON.stringify(t))), y.instance.sdkConfigCached = t, y.instance.sdkConfig = t, y.instance.initAuthorized = !0
                        }
                        if (y.instance.clientServerTimeOffset = y.getSdkConfig().time_offset ? y.getSdkConfig().time_offset : 0, y.populateConfigurations(y.getSdkConfig()), !y.isEnabled()) return v.w("Could not start session: SDK is disabled."), void m.stopEventQueue();
                        m.ensureEventQueueIsRunning();
                        var s = w.createGuid();
                        y.instance.sessionId = s, y.instance.sessionStart = y.getClientTsAdjusted(), E.addSessionStartEvent();
                        var a = m.getTimedBlockById(De.initTimedBlockId);
                        null != a && (a.running = !1), De.initTimedBlockId = -1
                    }, De.resumeSessionAndStartQueue = function() {
                        y.isInitialized() && (v.i("Resuming session."), y.sessionIsStarted() || De.newSession())
                    }, De.isSdkReady = function(e, t, n) {
                        return void 0 === t && (t = !0), void 0 === n && (n = ""), n && (n += ": "), e && !y.isInitialized() ? (t && v.w(n + "SDK is not initialized"), !1) : e && !y.isEnabled() ? (t && v.w(n + "SDK is disabled"), !1) : !(e && !y.sessionIsStarted() && (t && v.w(n + "Session has not started yet"), 1))
                    }, De.initTimedBlockId = -1, De.methodMap = {}, C = De, g.GameAnalytics = C, p.GameAnalytics.init();
                var Ue = p.GameAnalytics.gaCommand;
                e.gameanalytics = p, e.GameAnalytics = Ue
            }(this)
        }
    }
]);