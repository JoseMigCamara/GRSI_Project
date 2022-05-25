function(t) {
    var a = !0,
      e = s.opt.half || s.opt.precision ? s.self.data("score") : this.alt || n(this).data("alt");
    s.opt.click && (a = s.opt.click.call(s, +e, t)), (a || void 0 === a) && (s.opt.half && !s.opt.precision && (e = l._roundHalfScore.call(s, e)), l._apply.call(s, e))
  }