import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Top 4 Movies';

  movies: Movie[] = [
    {title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016'},
    {title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016'},
    {title: 'X-men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27 2016'},
    {title: 'Warcraft', director: 'Duncan Jones', cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster', releaseDate: 'June 10, 2016'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: any, item: any){
    return item.title
  }
}

class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}