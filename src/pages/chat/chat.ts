import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
 messages: Observable<any[]>;
username:string = '';
message:string = '';
time:string='';
s;
  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
 	this.username = this.navParams.data.username;
 	this.messages = db.list("chats").valueChanges()
  }


  sendMessage(){
  	this.db.list("/chats").push({
  		username: this.username,
  		message: this.message
  	}).then( () => {
  		//EL mensaje fue enviado
  	}).catch( () => {
  		//Algo pasó
  	});
  	this.message = '';
  }

ionViewWillLeave(){
	console.log("the user is about to go");
	this.db.list("chats").push({
		specialMessage: true,
		message: `${this.username} has left the room`
	})
}
  ionViewDidLoad() {
  	this.db.list("chats").push({
  		specialMessage:true,
  		message: `${this.username} has joined the room`
  	})
    console.log('ionViewDidLoad ChatPage');
  }

}
