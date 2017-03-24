var chart = new Chartist.Line(".the-line", {
    labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.'],
    series: [
        [1.5, 4, -3, 4 ],
        [3, 2, -2, -1],
        [0, 1, -3, -1.5]
    ]
}, {
    high: 5,
    low: -5,
    // width: 700,
    height: 300,
    showArea: false,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    axisX: {
        showLabel: true,
        showGrid: false
    },
    plugins: [
        Chartist.plugins.tooltip()
    ]
});


new Chartist.Bar('.the-bar', {
    labels: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.'],
    series: [
        [5, 4, 3, 7, 5]
        
    ]
}, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    height: 300
});





var chart = new Chartist.Pie('.the-pie', {
    series: [25, 20, 55],
    labels: ["SECTION 1", "SECTION 2", "SECTION 3", ]
}, {
    donut: true,
    showLabel: true,
    height: 300,
    showPoint: true
});



chart.on('draw', function(data) {
    if (data.type === 'bar') {
        data.element.animate({
            x1: {
                dur: 1000,
                from: 0,
                to:100,
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            },
            opacity: {
                dur: 1000,
                from: 0,
                to: 1,
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        });
    }
    if (data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 2000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
    }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart.on('created', function() {
    if (window.__anim21278907124) {
        clearTimeout(window.__anim21278907124);
        window.__anim21278907124 = null;
    }
    window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
});
