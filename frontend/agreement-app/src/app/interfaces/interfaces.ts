export interface Client {
  id?: number;
  name: String;
  surname: String;
  patronymic: String;
  date_born: String;
  passport_series: String;
  passport_number: String;
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
  agreementNumber: String;
  comment: String;
  seriesNomer: String;
  dateComplet: String;
  prize: String;
  srok: String;
  dateRasheta: String;
  srachSumm: String;
  adressA: {
    index: String;
    edge: String;
    district: String;
    punkt: String;
    korpus: String;
    buld: String;
  };
  clientA: {
    id?: number;
    name: String;
    surname: String;
    patronymic: String;
    date_born: String;
    passport_series: String;
    passport_number: String;
  };
}

