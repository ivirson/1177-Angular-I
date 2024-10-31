import { Component } from '@angular/core';
import { CompanyService } from 'src/app/models/company-service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services: CompanyService[] = [
    {
      title: 'Serviço 1',
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quam
        doloremque accusamus soluta ipsam, nobis quibusdam? Ipsa quis placeat
        et, facere tenetur porro consequatur culpa, at omnis reprehenderit
        molestiae fuga?`,
    },
    {
      title: 'Serviço 2',
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo debitis
        voluptas laboriosam repudiandae unde blanditiis numquam sunt nihil. Cum,
        suscipit. Illo qui vel maiores similique dolore voluptatum ab omnis
        alias.`,
    },
    {
      title: 'Serviço 3',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, amet
        eius? Dolorem blanditiis aliquam soluta consequuntur dolorum, hic sunt
        vitae corporis quaerat qui libero magni! Architecto sequi quidem quo
        enim?`,
    },
    {
      title: 'Serviço 4',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit
        atque amet numquam, dolor nemo hic repudiandae at iste quod. Harum
        repellat beatae impedit ipsam ratione sit modi ipsum deserunt.`,
    },
  ];
}
