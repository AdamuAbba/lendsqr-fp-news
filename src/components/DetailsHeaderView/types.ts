import {Articles} from 'configs/types';

export type IDetailsHeaderView = Pick<
  Articles,
  'title' | 'topic' | 'published_date'
>;
