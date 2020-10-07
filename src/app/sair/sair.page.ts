import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
 selector: 'app-Sair',
 templateUrl: './Sair.page.html',
 styleUrls: ['./Sair.page.scss'],
})
export class SairPage implements OnInit {
 constructor(private navCtrl : NavController,
 private auth: AngularFireAuth,
 private menuCtrl : MenuController) { }
 ngOnInit() {
 this.logout();
 }

 logout(){
 this.auth.signOut().then(data=>{
 this.menuCtrl.enable(false);
 this.navCtrl.navigateRoot(['/login']);
 })
 }
} 
