import { Http } from '@angular/http';
import { ConnectionService } from './../../providers/connection-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneratedTest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html',
  providers: [ConnectionService]
})
export class GeneratedTest {

  public informacoes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectionService: ConnectionService) {
    //this.buscarCep();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTest');
  }

  buscarCep() : void {
   
    this.connectionService.getCep('71909540')
      .then((res) => {
        let json = res.json();
        this.informacoes = json;
        console.log(this.informacoes.cep);
      }).catch((err) => {
        console.log(err);
      });
  }

}
