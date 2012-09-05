requirejs(['lib/bar1', 'lib/bar2'],
    function (a, b) {
        a.doSomething();
        b.doSomething();
    }
);
