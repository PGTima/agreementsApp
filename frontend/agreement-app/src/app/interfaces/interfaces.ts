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
  id?: number;
  stateA?: {
    id?: number;
    state_name?: String;
  };
  dwellingA?: {
    id?: number;
    apartment?: number;
    home?: number;
    room?: number;
    date_dwelling?: String;
    square_dwelling?: number;
  };
  indexA?: String;
  edge?: String;
  district?: String;
  punkt?: String;
  korpus?: String;
  buld?: String;
  street?: String;
}
export interface Dwelling
{
    id?: number;
    apartment?: number;
    home?: number;
    room?: number;
    dateDrawelling?: String;
    squareDrawelling?: number;
}
export interface Agreements {
  id?: number;
  clientId?: {
    id?: number;
    name?: String;
    surname?: String;
    patronymic?: String;
    dateBorn?: String;
    clientPassportSeries?: String;
    clientPassportNumber?: String;
  };
  adressId?: {
    id?: number;
    stateA?: {
      id?: number;
      stateName?: String;
    };
    dwellingA?: {
      id?: number;
      apartment?: String;
      home?: number;
      room?: String;
      dateDrawelling?: String;
      squareDrawelling?: String;
    };
    indexA?: String;
    edge?: String;
    district?: String;
    punkt?: String;
    korpus?: String;
    buld?: String;
    street?: String;
  };
  agreementNumber?: String;
  comment?: String;
  seriesNomer?: String;
  dateComplet?: String;
  prize?: String;
  dateFrom?: String;
  dateTo?: String;
  dateRasheta?: String;
  srachSumm?: String;
}
export interface State {
  id?: number;
  stateName: String;
}
export interface TypeDrawelling {
  id?: number;
  name: String;
}

