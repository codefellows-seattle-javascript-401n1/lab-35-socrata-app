'use strict';

const url = 'https://mydata.iadb.org/resource/4p9j-uqkg.json';
const headers = {'X-App-Token':'pSNF5WNLv9ypa2jAvhpXaDNWZ','Accept':'application/json, text/plain, */*'};

describe('testing socrata-serice', () => {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject((dataService, $httpBackend) => {
      this.dataService = dataService;
      this.httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.httpBackend.verifyNoOutstandingRequest();
    this.httpBackend.verifyNoOutstandingExpectation();
  });

  it('should return an array of data', () => {
    this.httpBackend.expectGET(`${url}?$limit=1`, headers)
    .respond(200, [{'anio_fecha_y_hora':'2015-01-01T00:00:00.000','anio_texto':'2015','categoria_en':'Documented or Official National Cybersecurity Strategy','categoria_es':'Estrategia nacional de seguridad cibernética oficial o documentada','dimension_en':'Policy and Strategy','dimension_es':'Política y estrategia','indicador_en':'Organization ','indicador_es':'Organización','indicador_nombre_en':'Documented or Official National Cybersecurity Strategy: Organization ','indicador_nombre_es':'Estrategia nacional de seguridad cibernética oficial o documentada: Organización','nivel_de_madurez':'1.4','nivel_de_madurez_texto_en':'Regional Average','nivel_de_madurez_texto_es':'Promedio regional','pais_en':'LAC','pais_es':'ALC'}]);

    this.dataService.getData()
    .then(data => {
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(1);
    });
  });
});
