import { Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TechniqueProvider } from '../../providers/technique/technique';
import { ImageColorProvider } from '../../providers/image-color/image-color';

@IonicPage()
@Component({
  selector: 'page-memorize',
  templateUrl: 'memorize-belt.html',
})
export class MemorizeBeltPage {

  belt: Array<any>;
  nextRound = [];

  imgFront = true;
  hFront = false;

  ready = false;
  cards = [];
  cardDirection = "x";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  };

  successed: number = 0;
  failed: number = 0;
  total: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public _technique: TechniqueProvider,
    public _imageColor: ImageColorProvider) {

    this.belt = this._technique.getTechniquesByBelt( navParams.get('belt') );
  }
  
  ionViewWillEnter() {
    this.belt.forEach((value, key) => {
      let bgColor: string;
      this._imageColor.getMayorColor(value.img).subscribe((data: any) => {
        bgColor = data.colors.dominant.hex;
        console.log(bgColor);
        this.cards.push({
          id: key,
          img: this.sanitizer.bypassSecurityTrustStyle('url(' + value.img + ')'),
          title: value.key,
          bgColor: bgColor,
          description: value.description,
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter()
        });
      });
    });
    this.ready = true;    
  }

  onCardInteract(event, technique) {
    if (event.like == false) { // If the user failed
      this.nextRound.push(this.belt[technique.id]);
      this.failed++;
    } else {
      this.successed++
    }
    this.total++;
  }

  flip() {
    return document.getElementsByClassName("card")[0].classList.toggle("is-flipped");
  }

  backFirst() {
    this.imgFront = !this.imgFront;
    this.hFront = !this.hFront;
  }

}
