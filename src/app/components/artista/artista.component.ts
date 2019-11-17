import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loadingArtista: boolean;

  constructor(
    private ROUTE: ActivatedRoute,
    private SPOTIFY: SpotifyService) {

    this.loadingArtista = true;
    this.ROUTE.params.subscribe(params => {
      this.getArtista(params.id);
    });

  }

  getArtista(id: string) {

    this.loadingArtista = true;

    this.SPOTIFY.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtista = false;
    });

  }

  ngOnInit() { }
}
