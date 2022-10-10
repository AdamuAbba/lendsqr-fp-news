import CustomImageComp from 'components/MediaContentCarousel/CustomImageComp';
import * as React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {IMediaContentCarousel} from './types';
import {styles} from './MediaContentCarousel.style';

const MediaContentCarousel = ({media_content}: IMediaContentCarousel) => {
  const viewCount = media_content.length;
  const data = media_content.filter((_, index) => index < 5);
  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        width={280}
        height={210}
        pagingEnabled={true}
        snapEnabled={true}
        mode="horizontal-stack"
        loop={true}
        autoPlay={true}
        autoPlayReverse={false}
        data={data}
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 18,
        }}
        scrollAnimationDuration={1500}
        customConfig={() => ({type: 'positive', viewCount})}
        renderItem={({item, index}) => (
          <CustomImageComp imgUrl={item} key={index} />
        )}
      />
    </View>
  );
};

export default MediaContentCarousel;
