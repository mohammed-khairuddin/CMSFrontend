import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-image',
  templateUrl: './referral-image.component.html',
  styleUrls: ['./referral-image.component.scss']
})
export class ReferralImageComponent implements OnInit {


  public comments: any[] = [{
    id: 1,
    comment: ''
  }];


  constructor() { }

  ngOnInit(): void {

  }

  addComment() {
    this.comments.push({
      id: this.comments.length + 1,
      comment: ''
    });
    
  }

  removeComment(i: number) {
    this.comments.splice(i, 1);
  }  


}
