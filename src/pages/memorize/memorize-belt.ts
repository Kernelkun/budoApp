import { Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-memorize',
  templateUrl: 'memorize-belt.html',
})
export class MemorizeBeltPage {

  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  };

  images = ["https://media.vogue.in/wp-content/uploads/2017/12/2017-01-2-disha-patani-hairstyles-makeup-vogue-india.jpg",
    "http://static.dnaindia.com/sites/default/files/styles/full/public/2018/02/04/648069-rakul-preet-singh.jpg",
    "https://pbs.twimg.com/profile_images/928946397436506113/6QE6iLb7.jpg",
    "https://pbs.twimg.com/media/DUFbk2cV4AAwl2v.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-980a13410f56739c66864b89c4466263-c",
    "http://starsvilla.com/wp-content/uploads/2017/09/19425346_145774522639533_5306252787913326592_n.jpg"
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

    for (let i = 0; i < this.images.length; i++) {
      this.attendants.push({
        id: i + 1,
        likeEvent: new EventEmitter(),
        destroyEvent: new EventEmitter(),
        asBg: this.sanitizer.bypassSecurityTrustStyle('url(' + this.images[i] + ')')
      });
    }

    this.ready = true;
  }

  onCardInteract(event) {
    console.log(event);
  }

}
