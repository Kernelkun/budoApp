import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  techniques: Array<{ name: string, description: string, kanji: string, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.techniques = [
      { "name": "O Soto Otoshi", "description": "Es una de las proyecciones de habukareta-waza de judo. Pertenece al cuarto grupo (Yonkyo) de los movimientos del kodokan judo en el Gokyo no waza, y es clasificada como técnica de pierna o ashiwaza.", "kanji": "大外落", "icon": "remove", "color": "yellow" },
      { "name": "Uki Goshi", "description": "Es una de las técnicas de Judo cadera(Koshi - Waza) originales desarrolladas por Jigoro Kano.Consiste en atraer a Uke con un brazo hacia un punto de la cadera de Tori para contactar y pivotar sobre ésta, posteriormente Tori tira del brazo de Uke en torsión para proyectarle.", "kanji": "浮腰", "icon": "remove", "color": "yellow" },
      { "name": "Koshi Guruma", "description": "Significa: Rueda por la cadera. Esta técnica de Judo de la categoría Koshi-Waza pertence a las 40 proyecciones originales de Jigoro Kano.", "kanji": "腰車", "icon": "remove", "color": "yellow" },
      { "name": "Kesa", "description": "Es una técnica de inmovilización de Judo suelo (Osae-Komi-Waza). Significa control lateral, donde el control se ejerce sobre el costado de Uke en “bandolera”.", "kanji": "袈裟", "icon": "remove", "color": "yellow" },
      { "name": "Kami", "description": "Significa: Control de la parte superior y por cuatro puntos. Se ejerce desde la cabeza de Uke y agarrando el cinturón de este con las dos manos bajando el centro de gravedad para así tener controlada toda la parte del tren superior.", "kanji": "上四方固", "icon": "remove", "color": "yellow" },
      { "name": "Yoko", "description": "Control sobre cuatro puntos por el costado. Es una de las inmovilizaciones (Osaekomi-waza) fundamentales en Judo suelo.", "kanji": "横四方固め", "icon": "remove", "color": "yellow" },
      { "name": "Tate", "description": "Significa control sobre cuatro puntos a horcajadas. Es una técnica de Judo de osaekomi-waza y es una de las más difíciles para escapar.", "kanji": "縦四方固", "icon": "remove", "color": "yellow" }
    ];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
