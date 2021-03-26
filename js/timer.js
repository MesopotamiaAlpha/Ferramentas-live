var audio = new Audio('/sons/alert-final2.mov');

class Util {
    static convertMS(ms) {
        var d, h, m, s;

        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    }

    static addZ(n) {
        if (!n) return "00";
        return (n < 10 ? '0' : '') + n;
    }

    static formatTime(obj) {
        if (obj.d > 0) {
            return Util.addZ(obj.d) + "D " + Util.addZ(obj.h) + "H";
        }
        if (obj.h > 0) {
            return Util.addZ(obj.h) + "H " + Util.addZ(obj.m) + "M";
        }
        return Util.addZ(obj.m) + ": " + Util.addZ(obj.s) + "";
    }
}

class Countdown {
    constructor(endTime, $element) {
        this.now = moment();
        this.end = moment().add(endTime);
        this.diff = this.end.diff(this.now);
        this.$el = $element;
        this.svg = Snap(this.$el.find("svg")[0]);
        this.progress = this.svg.select("#progress");
        this.$txt = this.$el.find(".c-text");
        this.initCircle();
        this.initTimer();
    }
    
    initCircle() {
        var self = this;
        self.progress.attr({
            strokeDasharray: '0, 301.44'
        });
        Snap.animate(0, 301.44, function(value) {
            self.progress.attr({
                'stroke-dasharray': value + ', 301.44'
            });
        }, self.diff);
    }
    


    initTimer() {
        var self = this;
        self.timer = setInterval(function() {
            self.now = moment();
            self.diff = self.end.diff(self.now);
            if (self.diff > 0) {
                self.$txt.text(Util.formatTime(Util.convertMS(self.diff)));
            }else {
                audio.play();
                piscar();
                self.$txt.text("Acabou o tempo!!!");
                clearInterval(self.timer);
            }
        }, 200);
    }
}

$(function() {
    var yeah = new Countdown({minutes: 20, seconds: 01}, $(".c-container"));
})

function piscar(){
    const classe = document.querySelector('.c-container');
    classe.setAttribute("class","c-container piscar");
}

