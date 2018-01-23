import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	 showAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  username:string = "";

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  loginUser(){
  	if(/^[a-zA-Z0-9]+$/.test(this.username)) {
  		//Todo bien 
  		this.navCtrl.push(ChatPage, {
  			username:this.username
  		});
  	} else {
  		this.showAlert("error","Invalid Username");
  	}
  }

}
