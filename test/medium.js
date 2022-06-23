describe('Middle test', function () {
    var date;

    before(  function (done){
        done();
    })

    beforeEach(function () {
        date = new Date();
    });

    after(function () {
        console.log("Middle  tests done!");
    });

    afterEach(function () {
        console.log("The date for that one was", date);
    });

    it('booleans basics', function (done) {
        if (false) {
            throw new Error("Oh no.");
        } else{
            done()
        }
    });

    describe('Test deep calling', function () {
        before(function () {
            console.log("First calling deep!")
        });

        it('should perform basic math', function () {
            if (1 + 1 != 2) {
                throw new Error("Oh no.");
            }
        });

        it('should perform basic counting', function () {
            if ('abc'.length != 3) {
                throw new Error("Oh no.");
            }
        });

    });

});