export interface IRating {
  user: string;
  value: number;
  comment: string;
}

export interface IEventDetails {
  id: number;
  image: string;
  name: string;
  description: string;
  ratings: IRating[];
}
