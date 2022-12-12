export class Category {
  readonly id: number | null;
  readonly name: string;
  readonly created_at: Date;
  readonly update_at: Date | null;

  constructor(
    name: string,
    created_at: Date,
    id: number | null,
    update_at: Date | null,
  ) {
    this.name = name;
    this.id = id;
    this.created_at = created_at;
    this.update_at = update_at;
  }
}