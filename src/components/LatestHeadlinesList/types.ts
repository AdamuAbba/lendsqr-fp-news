import {Articles} from 'configs/types';
import {IMainStackScreenProps} from 'routes/types';

export interface ILatestHeadlinesList {
  navigation: IMainStackScreenProps<'news-listing-screen'>['navigation'];
  data: Articles[];
}

export interface IHeadLinesRenderItem {
  item: Articles;
  index: number;
  navigation: ILatestHeadlinesList['navigation'];
}
