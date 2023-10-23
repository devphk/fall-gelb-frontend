import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-phk-search-result',
  templateUrl: './phk-search-result.component.html',
  styleUrls: ['./phk-search-result.component.scss']
})
export class PhkSearchResultComponent implements OnInit {

  title:string = 'Ladrillo';

  code:string = '02.05.20.20';

  imageUrl:string = '../../../assets/images/ladrillo.png';

  pdfUrl:string = 'https://www.orimi.com/pdf-test.pdf';

  meaning:string = 'Un ladrillo es un material de construcción, normalmente cerámico y con forma ortoédrica, cuyas dimensiones más normales permiten que un operario lo pueda colocar con una sola mano. Los ladrillos se emplean en la construcción en general.'
  
  auxInfo = 
    {
      title: 'Historia',
      info: 'Los ladrillos se utilizan como elemento para la construcción desde hace unos 11 000 años. Se documentan ya en la actividad de los agricultores del neolítico precerámico del Levante mediterráneo hacia 9500 a.C',
    };

  docsResults = [
    {
      title: 'PDF Arancelario',
      url: 'https://www.orimi.com/pdf-test.pdf'
    },
    {
      title: 'PDF Arancelario 2',
      url: 'https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf'
    }
  ];

  otherSearches = [
    {
      title: 'Tipos de ladrillos, usos, ventajas y propiedades.',
      subtitle: 'Un ladrillo puede estar compuesto de tierra con arcilla, arena y cal, o materiales de concreto. Los ladrillos se producen en numerosas clases, tipos, materiales y tamaños que varían según la región y el período, y se producen en grandes cantidades. Dos categorías básicas de ladrillos son los ladrillos encendidos y los no quemados.'
    },
    {
      title: 'Ladrillos Propiedades',
      subtitle: 'Un ladrillo es de forma rectangular y de tamaño tal que se puede manejar convenientemente con una mano.'
    }
  ];



  constructor( private sanitizer:DomSanitizer ) { }

  public getSanitizeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
