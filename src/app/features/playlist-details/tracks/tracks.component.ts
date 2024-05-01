import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TracksComponent {
  tracks = [
    { title: 'Sthlm Sunset', artist: 'Ehrling', image: 'album1.webp' },
    {
      title: 'Living For Love',
      artist: 'TWOPILOTS, Natty Rico',
      image: 'album2.webp',
    },
    { title: 'Madan (King)', artist: 'Bakermat', image: 'album3.webp' },
    { title: 'All the Time', artist: 'Max the Sax', image: 'album4.webp' },
    { title: 'Maasai', artist: 'Axero', image: 'album5.webp' },
    { title: 'Love Or Hate Me', artist: 'Charleon', image: 'album6.webp' },
    { title: 'Sthlm Sunset', artist: 'Ehrling', image: 'album1.webp' },
    {
      title: 'Living For Love',
      artist: 'TWOPILOTS, Natty Rico',
      image: 'album2.webp',
    },
    { title: 'Madan (King)', artist: 'Bakermat', image: 'album3.webp' },
    { title: 'All the Time', artist: 'Max the Sax', image: 'album4.webp' },
    { title: 'Maasai', artist: 'Axero', image: 'album5.webp' },
    { title: 'Love Or Hate Me', artist: 'Charleon', image: 'album6.webp' },
  ];
}
