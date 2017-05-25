export class Team {
  constructor (
    public id?: number,
    public name?: string,
    public active?: boolean,
    public season?: Season,
    public player?: Player,
    public slug?: string
  ){}
}
