export class SelectOption {
  //revisar
  id?: number;
  name?: string;

  constructor(data?: any) {
    if (data) {
      data.id = data.id;
      data.name = data.name;

      Object.assign(this, data);
    }
  }

  static optionAll(): SelectOption {
    return new SelectOption({
      id: 0,
      name: 'TODOS',
    });
  }
}
