import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProperty } from './property';

export class PropertyData implements InMemoryDbService {
    createDb() {
        let properties: IProperty[] = [
          {
              id: 1,
              name: "Defense Plaza",
              surface: 31159,
              accessibility: 4,
              energyClass: "HQE",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mattis dolor, nec mattis tortor cursus non. Aliquam non dolor at risus porttitor varius. Maecenas aliquet condimentum magna, sit amet tempus ante condimentum nec. Sed faucibus, diam eu sollicitudin finibus, ex sem tincidunt sem, sit amet vestibulum mauris quam sit amet nisi. Aliquam iaculis venenatis nulla vel semper. Suspendisse potenti. Phasellus consequat sagittis nulla eleifend aliquet. Aliquam sodales, purus vel maximus hendrerit, nibh arcu dapibus magna, id ullamcorper lorem ligula vel ante. Sed est sem, molestie ac arcu vitae, sollicitudin pulvinar lacus. Duis eget magna a ex semper mollis.",
              imageUrl: "http://defense-92.fr/wp-content/uploads/2013/08/defense1-350x330.jpg"
          },
          {
              id: 2,
              name: "Tour First",
              surface: 79800.3,
              accessibility: 4.8,
              energyClass: "HQE",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mattis dolor, nec mattis tortor cursus non. Aliquam non dolor at risus porttitor varius. Maecenas aliquet condimentum magna, sit amet tempus ante condimentum nec. Sed faucibus, diam eu sollicitudin finibus, ex sem tincidunt sem, sit amet vestibulum mauris quam sit amet nisi. Aliquam iaculis venenatis nulla vel semper. Suspendisse potenti. Phasellus consequat sagittis nulla eleifend aliquet. Aliquam sodales, purus vel maximus hendrerit, nibh arcu dapibus magna, id ullamcorper lorem ligula vel ante. Sed est sem, molestie ac arcu vitae, sollicitudin pulvinar lacus. Duis eget magna a ex semper mollis.",
              imageUrl: "http://blog.bouygues-construction.com/wp-content/uploads/tour-first-1-claurent-blossier.jpg"
          },
          {
              id: 3,
              name: "Coeur Défense",
              surface: 160000,
              accessibility: 5,
              energyClass: "BREEAM",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mattis dolor, nec mattis tortor cursus non. Aliquam non dolor at risus porttitor varius. Maecenas aliquet condimentum magna, sit amet tempus ante condimentum nec. Sed faucibus, diam eu sollicitudin finibus, ex sem tincidunt sem, sit amet vestibulum mauris quam sit amet nisi. Aliquam iaculis venenatis nulla vel semper. Suspendisse potenti. Phasellus consequat sagittis nulla eleifend aliquet. Aliquam sodales, purus vel maximus hendrerit, nibh arcu dapibus magna, id ullamcorper lorem ligula vel ante. Sed est sem, molestie ac arcu vitae, sollicitudin pulvinar lacus. Duis eget magna a ex semper mollis.",
              imageUrl: "https://www.businessimmo.com/system/datas/61822/original/coeur-defense-viguier-325x241.jpg"
          },
          {
              id: 4,
              name: "Europe Avenue",
              surface: 40000,
              accessibility: 2.1,
              energyClass: "HQE",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mattis dolor, nec mattis tortor cursus non. Aliquam non dolor at risus porttitor varius. Maecenas aliquet condimentum magna, sit amet tempus ante condimentum nec. Sed faucibus, diam eu sollicitudin finibus, ex sem tincidunt sem, sit amet vestibulum mauris quam sit amet nisi. Aliquam iaculis venenatis nulla vel semper. Suspendisse potenti. Phasellus consequat sagittis nulla eleifend aliquet. Aliquam sodales, purus vel maximus hendrerit, nibh arcu dapibus magna, id ullamcorper lorem ligula vel ante. Sed est sem, molestie ac arcu vitae, sollicitudin pulvinar lacus. Duis eget magna a ex semper mollis.",
              imageUrl: "https://www.archiliste.fr/sites/default/files/styles/rectangle_500_x_300/public/projets/ateliers-115-architectes/immeuble-nvh/3002202-2674-1.jpg?itok=ydfwrsDO"
          },
          {
              id: 5,
              name: "5 Avenue Kleber",
              surface: 28000,
              accessibility: 5,
              energyClass: null,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mattis dolor, nec mattis tortor cursus non. Aliquam non dolor at risus porttitor varius. Maecenas aliquet condimentum magna, sit amet tempus ante condimentum nec. Sed faucibus, diam eu sollicitudin finibus, ex sem tincidunt sem, sit amet vestibulum mauris quam sit amet nisi. Aliquam iaculis venenatis nulla vel semper. Suspendisse potenti. Phasellus consequat sagittis nulla eleifend aliquet. Aliquam sodales, purus vel maximus hendrerit, nibh arcu dapibus magna, id ullamcorper lorem ligula vel ante. Sed est sem, molestie ac arcu vitae, sollicitudin pulvinar lacus. Duis eget magna a ex semper mollis.",
              imageUrl: "http://referentiel.nouvelobs.com/file/7564363.jpg"
          },
        ];
        return { properties };
    }
}
