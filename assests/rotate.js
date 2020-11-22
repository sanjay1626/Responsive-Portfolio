$.fn.animateRotate = function(angle, duration, easing, complete) {
    var endAngle = $.extend({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    }, $.type(angle) === 'object' ? angle : {rotateZ: angle});
    
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        
        var domObj = this;
        
        // set context for all callbacks
        var callbacks = ['progress', 'complete', 'start', 'done', 'fail', 'always'];
        $.each(callbacks, function(index, value) {
            if (args[value]) {
                var callback = args[value];
                args[value] = function() {
                    return callback.apply(domObj, arguments);
                };
            }
        });
            
        // when setting 'transform', all values get replaced
        // save all properties so they don't get overwritten
        var rotateX = 0,
            rotateY = 0,
            rotateZ = 0;
        
        args.step = function(now, fx) {
            switch (fx.prop) {
                case 'rotateX':
                    rotateX = now;
                    break;
                case 'rotateY':
                    rotateY = now;
                    break;
                case 'rotateZ':
                    rotateZ = now;
                    break;
            }
            $.style(e, 'transform', 
                    'rotateX(' + rotateX + 'deg) ' +
                    'rotateY(' + rotateY + 'deg) ' +
                    'rotateZ(' + rotateZ + 'deg)');
            if (step) return step.apply(domObj, arguments);
        };
        
        $({
            rotateZ: 0,
            rotateX: 0,
            rotateY: 0
        }).animate(endAngle, args);
    });
};