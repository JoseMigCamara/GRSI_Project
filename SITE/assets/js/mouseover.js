function(t) {
    var a = l._getScoreByPosition.call(e, t, this);
    l._fill.call(e, a), e.opt.half && (l._roundStars.call(e, a, t), l._setTitle.call(e, a, t), e.self.data("score", a)), l._target.call(e, a, t), e.opt.mouseover && e.opt.mouseover.call(e, a, t)
  }