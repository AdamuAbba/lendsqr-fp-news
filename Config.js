import * as Updates from 'expo-updates';

let Config = {
  apiUrl: 'https://newscatcher.p.rapidapi.com',
};

if (Updates.channel === 'production') {
  Config.apiUrl = 'https://newscatcher.p.rapidapi.com';
} else if (Updates.channel === 'development') {
  Config.apiUrl = 'https://newscatcher.p.rapidapi.com';
}

export default Config;
