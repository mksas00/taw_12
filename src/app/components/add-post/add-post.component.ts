import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public image:string = ""
  public text:string = ""


  constructor(private service: DataService,private router:Router) { }

  ngOnInit(): void {
  }

  sendNewPost(): void{

    this.service.postBlogPost({
      image:this.image,
      text:this.text
    }).subscribe()

    this.router.navigateByUrl('/blog')


  }

}
