export class User {
  id: number | undefined;
  name: string;
  password: string;
  email: string;
  image: string | null | undefined;
  status: number;
  created_at: string | undefined | null;
  update_at: string | null | undefined;

  constructor(
    name: string,
    email: string,
    password: string,
    status: number,
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
  }
}