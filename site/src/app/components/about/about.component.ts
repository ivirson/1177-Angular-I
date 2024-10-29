import { Component } from '@angular/core';
import { Address, Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  text: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error
    nobis. Ex officia expedita, nostrum eveniet quaerat eius est quasi nobis
    similique, nihil maxime consequuntur? Consequatur dignissimos voluptas illo
    nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi
    enim molestias magni laboriosam voluptates explicabo autem minima
    blanditiis, quod, sed officia in pariatur, tenetur impedit nisi laborum
    dolorem est. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Mollitia minus sed, obcaecati a aut itaque, molestiae, voluptas vel non
    commodi deleniti quam? Ipsum perspiciatis fugiat id, unde reiciendis dolorem
    mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
    possimus accusamus, minima dicta laudantium omnis distinctio, nobis
    voluptatem error mollitia vero. Nulla quisquam corrupti veritatis excepturi
    quaerat expedita? Libero!`;

  company: Company = {
    name: 'XPTO Inc.',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error
    nobis. Ex officia expedita, nostrum eveniet quaerat eius est quasi nobis
    similique, nihil maxime consequuntur? Consequatur dignissimos voluptas illo
    nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi
    enim molestias magni laboriosam voluptates explicabo autem minima
    blanditiis, quod, sed officia in pariatur, tenetur impedit nisi laborum
    dolorem est. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Mollitia minus sed, obcaecati a aut itaque, molestiae, voluptas vel non
    commodi deleniti quam? Ipsum perspiciatis fugiat id, unde reiciendis dolorem
    mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
    possimus accusamus, minima dicta laudantium omnis distinctio, nobis
    voluptatem error mollitia vero. Nulla quisquam corrupti veritatis excepturi
    quaerat expedita? Libero!`,
    adrress: {
      street: 'Rua A',
      number: 25,
      district: 'Bairro B de Bola',
      city: 'Cidade A',
      state: 'ST',
    },
  };

  getCompanyInfo(): string {
    return `
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error
      nobis. Ex officia expedita, nostrum eveniet quaerat eius est quasi nobis
      similique, nihil maxime consequuntur? Consequatur dignissimos voluptas illo
      nisi.</p> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi
      enim molestias magni laboriosam voluptates explicabo autem minima
      blanditiis, quod, sed officia in pariatur, tenetur impedit nisi laborum
      dolorem est.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Mollitia minus sed, obcaecati a aut itaque, molestiae, voluptas vel non
      commodi deleniti quam? Ipsum perspiciatis fugiat id, unde reiciendis dolorem
      mollitia?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
      possimus accusamus, minima dicta laudantium omnis distinctio, nobis
      voluptatem error mollitia vero. Nulla quisquam corrupti veritatis excepturi
      quaerat expedita? Libero!</p>
    `;
  }

  getFormatedAddress(address: Address): string {
    // let formatedAddress = '';
    // for (const key in address) {
    //   formatedAddress += address[key as keyof typeof this.company.adrress];
    // }
    // return formatedAddress;
    const enderecoParts: string[] = [];
    for (const key in address) {
      if (address[key as keyof typeof address]) {
        enderecoParts.push('' + address[key as keyof typeof address]);
      }
    }
    return enderecoParts.join(', ');
  }

  // getNewFormatedAddressWithfor() {
  //   let address = '';
  //   const addressKeys: (keyof typeof this.company.adrress)[] = [
  //     'street',
  //     'number',
  //     'district',
  //     'city',
  //     'state',
  //   ];
  //   for (let key of addressKeys) {
  //     address += `${this.company.adrress[key]} - `;
  //   }
  //   return address;
  // }
}
