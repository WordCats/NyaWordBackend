type CategoryId = number;

export class User {
  readonly id: number | undefined;
  readonly name: string;
  readonly password: string;
  readonly email: string;
  readonly image: string | null | undefined;
  readonly status: number;
  readonly created_at: string | undefined | null;
  readonly update_at: string | null | undefined;
  readonly favorite_categories: CategoryId[];

  constructor(
    name: string,
    email: string,
    password: string,
    status: number,
    favorite_categories: CategoryId[],
    created_at: string | undefined | null = null,
    update_at: string | undefined | null = null,
    image: string | undefined = undefined,
    id: number | undefined = undefined,
  ) {
    this.id = id;
    this.created_at = created_at;
    this.update_at = update_at;
    this.status = status;
    this.image = image;
    this.name = name;
    this.password = password;
    this.email = email;
    this.favorite_categories = favorite_categories;
  }
}
