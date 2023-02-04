interface geo {
  lat: string;
  lon: string;
}

interface adress {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: geo;
}

interface company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface userData {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: adress;
  phone: string;
  website: string;
  company: company;
}

export interface AppState {
  user: userData[];
}


