const Property = require('../api/routes/property');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
describe('Property', () => {
  /* Happy path for get properties by type */
  describe('/GET properties by type', () => {
    it('it should GET all the properties by type', (done) => {
      chai.request(server)
        .get('/property/getByType/Flat')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.not.be.eql(0);
          done();
        });
    });
  });

  /* Get properties by type when type is blank */
  describe('/GET properties by type', () => {
    it('it should GET be redirected to homepae due to invalid endpoint', (done) => {
      chai.request(server)
        .get('/property/getByType/ ')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.equal('Home Page');
          done();
        });
    });
  });

  /* Get properties by type when type is invalid */
  describe('/GET properties by type', () => {
    it('it should GET no properties due to invalid input', (done) => {
      chai.request(server)
        .get('/property/getByType/XYZ')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.be.eql(0);
          done();
        });
    });
  });

  /* Happy path for get properties by postcode outward */
  describe('/GET properties by postcode outward', () => {
    it('it should GET all the properties by postcode outward', (done) => {
      chai.request(server)
        .get('/property/getByPostOutward/SH1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.not.be.eql(0);
          done();
        });
    });
  });


  /* Get properties by type when type is blank */
  describe('/GET properties by postcode outward', () => {
    it('it should GET be redirected to homepae due to invalid endpoint', (done) => {
      chai.request(server)
        .get('/property/getByPostOutward/ ')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.equal('Home Page');
          done();
        });
    });
  });

  /* Get properties by type when type is invalid */
  describe('/GET properties by postcode outward', () => {
    it('it should GET no properties due to invalid postcode', (done) => {
      chai.request(server)
        .get('/property/getByType/Testing')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.be.eql(0);
          done();
        });
    });
  });

  /* Happy path for get n number of expensive properties */
  describe('/GET n number of expensive properties', () => {
    it('it should GET n number of expensive properties', (done) => {
      chai.request(server)
        .get('/property/getExpensive/5')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.not.be.eql(0);
          done();
        });
    });
  });

  /* Get properties by type when type is blank */
  describe('/GET n number of expensive properties', () => {
    it('it should GET be redirected to homepae due to invalid endpoint', (done) => {
      chai.request(server)
        .get('/property/getExpensive/ ')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.equal('Home Page');
          done();
        });
    });
  });

  /* Get properties by type when type is invalid */
  describe('/GET n number of expensive properties', () => {
    it('it should GET no properties due to invalid postcode', (done) => {
      chai.request(server)
        .get('/property/getExpensive/Testing')
        .end((err, res) => {
          res.body.statusCode.should.be.equal(500);
          res.body.status.should.be.equal('failure');
          done();
        });
    });
  });

  /* Get properties by type when type is invalid */
  describe('/GET n number of expensive properties', () => {
    it('it should GET maximum properties since input is exceeding the existing properties', (done) => {
      chai.request(server)
        .get('/property/getExpensive/50')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.equal('success');
          res.body.res.length.should.not.be.eql(0);
          done();
        });
    });
  });

});