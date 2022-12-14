export class History {  
  constructor(
    readonly title: string,
    readonly user_id: number,
    readonly status: number,
    readonly recomended: number,
    readonly likes: number,
    readonly created_at: Date | string,
    readonly update_at: Date | null | null | undefined,
    readonly id: number | undefined,
  ) {}
}
