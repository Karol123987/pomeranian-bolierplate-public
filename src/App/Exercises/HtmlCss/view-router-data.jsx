import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as CssAnimations2 } from './CssAnimations2/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, standardTags, CssAnimations, CssAnimations2];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
