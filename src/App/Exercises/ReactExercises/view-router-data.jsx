import { getParsedRouterDataList } from "../../router-data/parseRouterData";

import { SubRouteExampleMetaData } from "./SubRouteExample/router-data";
import { Blok8eMetaData } from "./Blok8/router-data";
import { Blok9MetaData } from "./Blok9/router-data";
import { FormsMetaData } from "./Forms/router-data";
import { BasicFormsMetaData } from "./BasicForms/router-data";
import { ReduxMetaData } from "./Redux/router-data";

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8eMetaData,
  Blok9MetaData,
  FormsMetaData,
  BasicFormsMetaData,
  ReduxMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
