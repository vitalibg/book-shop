import { IBook } from "../util/schema/new";

export interface ActionType {
  type: string;
  payload: IBook[];
}
