import { Component, OnInit } from '@angular/core';
import { ItemService } from './../services/item.service';
import { Items } from '../services/item';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  userlogin: any;
  constructor(private Aut: AuthService) { }

  ngOnInit() {
    // set time for take quiz
	this.timefortake();
	// get information user is login
	this.userlogin=this.Aut.userlogin;
  }
  timefortake(){
	var sec=30;
	var min=0;
	document.getElementById("time-down").innerHTML = min +" : " + sec ;
	setInterval(function(){
	sec-=1;
		if(min==0 && sec==0){
			// next-quiz();
		}else{
			if(sec < 0)
			{
				min-=1;
				sec = 59;
				document.getElementById("time-down").innerHTML = min +" : " + sec ;
			}
			
		}
		document.getElementById("time-down").innerHTML = min +" : " + sec ;
	},1000);
  }
}