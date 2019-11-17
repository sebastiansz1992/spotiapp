import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private SPOTIFY: SpotifyService ) {

      this.loading = true;

      this.SPOTIFY.getNewReleases()
        .subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        });

  }

  ngOnInit() {
  }

}
