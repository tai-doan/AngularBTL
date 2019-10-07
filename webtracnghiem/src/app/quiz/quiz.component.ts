import { Component, OnInit } from '@angular/core';
import { ItemService } from './../services/item.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  subject: any;
  quizs; // gán mảng chứa tất cả câu hỏi thuộc subject
  question: any[]; 	// Gán mảng câu trả lời
  i= 0; // câu hỏi đầu tiên
  Text; // gán cho câu hỏi
  AnswerId; // Gán id câu đúng
  marks= 0; // Gán điểm
  count; // Đếm tất cả câu hỏi trong subject
  hiddenStartquiz= true; // Ẩn hiện nút Start Quiz và Form trả lời


  constructor(private db: AngularFireDatabase, public itemService: ItemService) {
	this.itemsRef = this.db.list('Subjects');
    this.items = this.itemsRef.valueChanges();
    this.itemsRef.valueChanges().subscribe(data => {
      this.subject= data; // Trả về mảng chứa tất cả các subject (Id, Name, Logo)
	});
  }
  getID(Id){
	this.itemService.nameofsubject=Id; // Get lấy ID của subject đã chọn
	this.itemService.GetQuiz(); // Gọi hàm GetQuiz
  }
  startQuiz(){
	this.quizs=this.itemService.quizs; // Trả về mảng chứa tất cả các câu hỏi thuộc ID của Subject
	this.count= this.quizs.length; // Đếm số câu hỏi có trong quiz
	// console.log("quiz count:",this.count);
	this.quizload(); // Gọi hàm quizLoad
	this.hiddenStartquiz= false; // Ẩn button Start Quiz & show form
	
  }
  choose(id){
	if(id!=null){
		if(id== this.AnswerId){
			this.marks= this.marks + this.quizs[this.i].Marks; // Cộng điểm
		}
		this.i++; // Tăng câu hỏi lên
		this.quizload(); // Gọi hàm
		id=null; // Gán id câu trả lời về rỗng
	}
  }
  quizload(){
	this.question= this.quizs[this.i].Answers; // Trả về mảng chứa tất cả các câu trả lời của câu hỏi
	this.Text= this.quizs[this.i].Text; // Get tiêu đề của câu hỏi
	this.AnswerId= this.quizs[this.i].AnswerId; // Get id câu trả lời đúng
  }
  ngOnInit() {
	
    // set time for take quiz
	// this.timefortake();
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