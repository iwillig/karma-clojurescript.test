var createClojureScriptTest = function (tc, runnerPassedIn) {
    return function () {

        var results = cemerick.cljs.test.run_all_tests();


        cemerick.cljs.test.set_print_fn_BANG_(function(x) {
            var x = x.replace(/\n$/, "");
            if (x.length > 0) console.log(x);
        });

        cemerick.cljs.test.on_testing_complete(results, function () {


            tc.result(results);
            tc.complete({
                coverage: window.__coverage__
            });
        });

    };
};
