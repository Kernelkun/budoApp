import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  techniques = {
    "yellow": [
      { "name": "O Soto Otoshi", "description": "Es una de las proyecciones de habukareta-waza de judo. Pertenece al cuarto grupo (Yonkyo) de los movimientos del kodokan judo en el Gokyo no waza, y es clasificada como técnica de pierna o ashiwaza.", "kanji": "大外落", "icon": "remove", "belt": "yellow", "translated": "O = Gran, Soto = Exterior, Otoshi = Caída" },
      { "name": "Uki Goshi", "description": "Es una de las técnicas de Judo cadera(Koshi - Waza) originales desarrolladas por Jigoro Kano.Consiste en atraer a Uke con un brazo hacia un punto de la cadera de Tori para contactar y pivotar sobre ésta, posteriormente Tori tira del brazo de Uke en torsión para proyectarle.", "kanji": "浮腰", "icon": "remove", "belt": "yellow" },
      { "name": "Koshi Guruma", "description": "Significa: Rueda por la cadera. Esta técnica de Judo de la categoría Koshi-Waza pertence a las 40 proyecciones originales de Jigoro Kano.", "kanji": "腰車", "icon": "remove", "belt": "yellow" },
      { "name": "Kesa", "description": "Es una técnica de inmovilización de Judo suelo (Osae-Komi-Waza). Significa control lateral, donde el control se ejerce sobre el costado de Uke en “bandolera”.", "kanji": "袈裟", "icon": "remove", "belt": "yellow" },
      { "name": "Kami", "description": "Significa: Control de la parte superior y por cuatro puntos. Se ejerce desde la cabeza de Uke y agarrando el cinturón de este con las dos manos bajando el centro de gravedad para así tener controlada toda la parte del tren superior.", "kanji": "上四方固", "icon": "remove", "color": "yellow" },
      { "name": "Yoko", "description": "Control sobre cuatro puntos por el costado. Es una de las inmovilizaciones (Osaekomi-waza) fundamentales en Judo suelo.", "kanji": "横四方固め", "icon": "remove", "belt": "yellow" },
      { "name": "Tate", "description": "Significa control sobre cuatro puntos a horcajadas. Es una técnica de Judo de osaekomi-waza y es una de las más difíciles para escapar.", "kanji": "縦四方固", "icon": "remove", "belt": "yellow" }
    ],
    "orange": [
      { "name": "O Uchi Gari", "description": "Es una de las proyecciones de habukareta-waza de judo. Pertenece al cuarto grupo (Yonkyo) de los movimientos del kodokan judo en el Gokyo no waza, y es clasificada como técnica de pierna o ashiwaza.", "kanji": "大外落", "icon": "remove", "belt": "orange", "translated": "O = Gran, Soto = Exterior, Otoshi = Caída" },
      { "name": "Ko Soto Gari", "description": "Es una de las técnicas de Judo cadera(Koshi - Waza) originales desarrolladas por Jigoro Kano.Consiste en atraer a Uke con un brazo hacia un punto de la cadera de Tori para contactar y pivotar sobre ésta, posteriormente Tori tira del brazo de Uke en torsión para proyectarle.", "kanji": "浮腰", "icon": "remove", "belt": "orange" },
      { "name": "Koshi Guruma", "description": "Significa: Rueda por la cadera. Esta técnica de Judo de la categoría Koshi-Waza pertence a las 40 proyecciones originales de Jigoro Kano.", "kanji": "腰車", "icon": "remove", "belt": "orange" },
      { "name": "Kubi Nage", "description": "Es una técnica de inmovilización de Judo suelo (Osae-Komi-Waza). Significa control lateral, donde el control se ejerce sobre el costado de Uke en “bandolera”.", "kanji": "袈裟", "icon": "remove", "belt": "orange" },
      { "name": "O Goshi", "description": "Significa: Control de la parte superior y por cuatro puntos. Se ejerce desde la cabeza de Uke y agarrando el cinturón de este con las dos manos bajando el centro de gravedad para así tener controlada toda la parte del tren superior.", "kanji": "上四方固", "icon": "remove", "color": "orange" },
      { "name": "Seoi Nage", "description": "Control sobre cuatro puntos por el costado. Es una de las inmovilizaciones (Osaekomi-waza) fundamentales en Judo suelo.", "kanji": "横四方固め", "icon": "remove", "belt": "orange" },
      { "name": "Ude Gatame", "description": "Significa control sobre cuatro puntos a horcajadas. Es una técnica de Judo de osaekomi-waza y es una de las más difíciles para escapar.", "kanji": "縦四方固", "icon": "remove", "belt": "orange" }
    ]
  };

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.techniques;
  }

}
