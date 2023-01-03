import { ActionType } from "../constants/action-type.enum";

export interface SavedAlgorithmDataModel {
  action: ActionType;
  indexes: number[];
}
