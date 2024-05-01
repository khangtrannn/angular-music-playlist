export interface User {
  avatar: string;
  name: string;
  date: string;
}

export interface Stats {
  count: string;
  time: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  user: User;
  stats: Stats;
  backgroundColor: string;
  textColor: string;
  secondaryTextColor: string;
  backgroundAnimation?: string;
  backgroundImage?: string;
  media: {
    type: string;
    url: string;
    width: string;
    height: string;
  };
}
