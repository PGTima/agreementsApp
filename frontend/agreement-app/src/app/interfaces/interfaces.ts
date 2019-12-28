export interface Client {
  id?: number;
  name: String;
  surname: String;
  patronymic: String;
  dateBorn: String;
  clientPassportSeries: String;
  clientPassportNumber: String;
}
export interface Adress {
  adress_id: number;
  state: {
    state_id: number;
    state_name: String;
  };
  dwelling: {
    id: number;
    apartment: number;
    home: number;
    room: number;
    date_dwelling: String;
    square_dwelling: number;
  };
  indexA: String;
  edge: String;
  district: String;
  punkt: String;
  korpus: String;
  buld: String;
}
export interface Agreements {
  id: number;
  clientId: {
    id?: number;
    name: String;
    surname: String;
    patronymic: String;
    dateBorn: String;
    clientPassportSeries: String;
    clientPassportNumber: String;
  };
  adressId: {
    id: number;
    stateA: {
      id: number;
      stateName: String;
    };
    dwellingA: {
      id: number;
      apartment: String;
      home: number;
      room: String;
      dateDrawelling: String;
      squareDrawelling: String;
    };
    indexA: String;
    edge: String;
    district: String;
    punkt: String;
    korpus: String;
    buld: String;
  };
  agreementNumber: String;
  comment: String;
  seriesNomer: String;
  dateComplet: String;
  prize: String;
  dateFrom: String;
  dateTo: String;
  dateRasheta: String;
  srachSumm: String;
}

