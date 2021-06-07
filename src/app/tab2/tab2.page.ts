import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { customer } from './fill';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  btype = ['Friends','Family','Solo','Couple'];
  model = new customer('','','',5,this.btype[2],1);

  constructor(
    private alertctrl: AlertController,
    private router: Router
  ) {}
  onclickof() {
    this.alertctrl.create({
      header: "Congrats "+this.model.name+", Your Registration has Confirmed!",
      message:'You Booked for '+this.model.person+' Persons. So You have to Pay Rs.'+this.model.num*this.model.person*900,
      subHeader: "Happy Journey :)",
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['./']);
          }
        }
      ]
    }).then(alertEL => {
      alertEL.present();
    });
  }

    onclickof12(){
      {
        this.alertctrl.create({
          header: "Total Cost",
          subHeader: "Per Day = 900",
          message: 'Amount per Person for '+this.model.num+'days is '+this.model.num*900,
          buttons: [
            {
              text: 'Okay',
              role: 'cancel',

            }
          ]
        }).then(alertEL => {
          alertEL.present();
        });
      }
    }












}
