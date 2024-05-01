import { Playlist } from "./playlists.model";

export const PLAYLISTS: Playlist[] = [
  {
    id: '1',
    // title: 'Saxophone House',
    title: 'Sơn Tùng MTP Collection',
    description:
      'Most popular R&B playlist on Spotify since 2013 | Updated weekly | Good vibes only | Photo by Atikh Bana',
    user: {
      avatar: '/khangtrann.jpeg',
      name: 'Khang Tran',
      date: 'March 2023',
    },
    stats: {
      count: '9,838',
      time: '5h 22m',
    },
    backgroundColor: 'black',
    textColor: 'white',
    secondaryTextColor: 'rgb(195, 195, 195)',
    // media: {
    //   type: 'image',
    //   url: '/sax-player.webp',
    //   width: '275',
    //   height: '360',
    // },
    media: {
      type: 'image',
      url: '/son-tung.png',
      width: '360',
      height: '360',
    },
  },
  {
    id: '2',
    title: 'Feel-Good Indie Rock',
    description:
      'The best indie rock vibes — classic and current. Headphones on | Video by Anna Shvets on pexels.com',
    user: {
      avatar: '/user-avatar-2.webp',
      name: 'Jessica Houston',
      date: 'February 2023',
    },
    stats: {
      count: '12,502',
      time: '4h 18m',
    },
    backgroundColor: '#ebd9ea',
    backgroundImage: '/pink-card-bg.png',
    textColor: '#8b689c',
    secondaryTextColor: '#ab91b8',
    media: {
      type: 'video',
      url: '/dancing-woman.mp4',
      width: '600',
      height: '427',
    },
  },
  {
    id: '3',
    title: 'Peaceful Guitar',
    description:
      'Unwind to these calm classical guitar pieces. Photo by Te NGuyen on Unsplash',
    user: {
      avatar: '/user-avatar-3.webp',
      name: 'David Hickman',
      date: 'December 2022',
    },
    stats: {
      count: '8,908',
      time: '6h 40m',
    },
    backgroundAnimation: 'none',
    backgroundColor: '#6d75ff',
    textColor: 'white',
    secondaryTextColor: 'rgb(225, 225, 225)',
    media: {
      type: 'image',
      url: '/guitar-player.webp',
      width: '414',
      height: '360',
    },
  },
];
