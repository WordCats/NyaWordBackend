export class Category {
  constructor(
    readonly name: string,
    readonly created_at: Date,
    readonly id: number | null,
    readonly update_at: Date | null,
  ) {}
}
