const request = require('supertest');
const app = require('../app');

describe('Test Web App', function () {

    before(function () {
        it('Server is running?', function (done) {
            app.listen(function (err) {
                if (err) {
                    return done(err);
                }
                done();
            });
        });
    });

    it('Ping Server', function (done) {
        request(app)
            .get('/ping')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, function (err, res) {
                if (err) {
                    return done(err);
                }
                callStatus = res.body.pong;
                if (callStatus = true) {
                    done();
                }
            });
    });
});
