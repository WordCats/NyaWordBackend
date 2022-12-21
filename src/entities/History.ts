interface HistoryProps {
  title: string,
  user_id: number,
  status: number,
  recomended: number,
  likes: number,
  description: string,
  language: string,
  created_at: Date | string,
  update_at?: Date | null,
  id?: number,
}

export class History {  
  constructor(readonly props: HistoryProps) {}
}
