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
  pFront = false;

  ready = false;
  attendants = [];
  cardDirection = "x";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public _technique: TechniqueProvider,
    public _imageColor: ImageColorProvider) {

    this.belt = this._technique.getTechniquesByBelt( navParams.get('belt') );
    this._imageColor.getMayorColor('https://judohd.de/wp-content/themes/JudoHD2.0/webapp/Img/GR/big/Würfe/Koshi-guruma/Koshi-guruma4.jpg').subscribe(data => console.log(data));
  }
  
  ionViewWillEnter() {
    this.belt.forEach((value, key) => {
      let bgColor = "";
      this._imageColor.getMayorColor(value.img).subscribe(data => {
        bgColor = data.colors.dominant.hex;
        console.log(bgColor);
        this.attendants.push({
          id: key,
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
          asBg: this.sanitizer.bypassSecurityTrustStyle('url(' + value.img + ')'),
          key: value.key,
          bgColor: bgColor
        });
      });
    });
    this.ready = true;    
  }

  onCardInteract(event, technique) {
    if (event.like == false) {
      this.nextRound.push(this.belt[technique.id]);
    }
  }

  flip() {
    return document.getElementsByClassName("card")[0].classList.toggle("is-flipped");
  }

  backFirst() {
    this.imgFront = !this.imgFront;
    this.pFront = !this.pFront;
  }

}
