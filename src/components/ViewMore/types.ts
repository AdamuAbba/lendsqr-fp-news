import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Articles} from 'configs/types';

export type IViewMoreProps = Pick<
  Articles,
  'author' | 'country' | 'rank' | 'clean_url'
>;

export type IData = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: keyof IViewMoreProps;
  description: string | number;
}[];
