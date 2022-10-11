import {IViewMoreProps, IData} from './types';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Colors, List, Surface, useTheme} from 'react-native-paper';
import {styles} from './ViewMore.styles';

const ViewMore = ({
  author,
  country,
  clean_url,
  rank,
}: IViewMoreProps): JSX.Element => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const lottieRef = React.useRef<LottieView>(null);
  const data: IData = [
    {title: 'author', description: author, icon: 'account-star'},
    {title: 'rank', description: rank, icon: 'progress-star'},
    {
      title: 'clean_url',
      description: clean_url,
      icon: 'microsoft-internet-explorer',
    },
    {title: 'country', description: country, icon: 'flag'},
  ];

  const handlePress = () => {
    setExpanded(!expanded);
    if (!expanded) {
      //@ts-ignore
      lottieRef?.current.play(82, 57);
    } else {
      //@ts-ignore
      lottieRef?.current.play(57, 82);
    }
  };

  return (
    <Surface style={styles.container}>
      <List.Accordion
        theme={{colors: {primary: Colors.white}}}
        style={{backgroundColor: colors.surface}}
        title="Read More"
        description="Tap to expand"
        right={() => (
          <LottieView
            speed={2}
            style={styles.lottie}
            ref={lottieRef}
            loop={false}
            autoPlay={false}
            source={require('assets/images/expand.json')}
          />
        )}
        expanded={expanded}
        onPress={handlePress}>
        {data.map(({description, icon, title}, index) => (
          <List.Item
            key={index}
            title={title}
            description={description}
            left={props => (
              <List.Icon {...props} icon={icon} color={colors.primary} />
            )}
          />
        ))}
      </List.Accordion>
    </Surface>
  );
};

export default ViewMore;
