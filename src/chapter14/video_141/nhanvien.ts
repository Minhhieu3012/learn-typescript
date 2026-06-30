export default class NhanVien {
  public name: string;

  private _id: number;

  protected salary: number;

  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this._id = id;
    this.salary = salary;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
