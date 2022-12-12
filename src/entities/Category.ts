export class Category {
  readonly id: number | null;
  readonly name: string;
  readonly created_at: Date;
  readonly updated_at: Date | null;

  constructor(
    name: string,
    created_at: Date,
    id: number | null,
    updated_at: Date | null,
  ) {
    this.name = name;
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}