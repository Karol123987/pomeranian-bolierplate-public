import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsArrayBasic } from './Exercise-js-array-basic/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsArraysMethods } from './Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsFunctionBasics } from './Exercise-js-function-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsFunctions } from './ExerciseJsFunctions/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsNumbersTraining,
  blockRouterMetaDataExerciseJsArrayBasic,
  blockRouterMetaDataExerciseJsArraysMethods,
  blockRouterMetaDataExerciseJsFunctionBasics,
  blockRouterMetaDataExerciseJsFunctions,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
