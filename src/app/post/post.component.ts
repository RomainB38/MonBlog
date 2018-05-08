import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postCreation: Date;

  constructor() {}

  getLiked() {
    return (this.postLikes > 0);
  }

  getUnliked() {
    return (this.postLikes < 0);
  }

  onLike() {
    this.postLikes++; 
  }

  onUnlike() {
    this.postLikes--;
  }
}