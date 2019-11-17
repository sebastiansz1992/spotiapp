import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private HTTP: HttpClient) {
    console.log('El servicio Spotify funciona.');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCSdZMH1hwkNtUj_klBtK26Ljj52tvACACI3Os8Kem2pZjtKo8TDByWCZv4L5rGoziHqu07q9sijV0LNis'
    });

    return this.HTTP.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}=&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artists'].items));
  }

}
