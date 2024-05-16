import { Component } from '@angular/core';
import { SendRequestComponent } from "../../components/send-request/send-request.component";
import { MapComponent } from "../../components/map/map.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [SendRequestComponent, MapComponent]
})
export class MainComponent {
  list: {img: string, title: string, desc: string}[] = [
    {img: 'assets/images/packet-tours.png', title: 'Пакетные туры от всех туроператоров', desc: 'Мы бесплатно подберём вам подходящий тур из миллиона возможных вариантов с гарантией минимальной цены.Гарантия минимальной цены достигается за счёт сравнения цен на один и тот же тур у разных туроператоров.'},
    {img: 'assets/images/tour-program.png', title: 'Программа путешествий в формате pdf', desc: 'Вы получаете уникальную программу путешествия, включающего в себя готовые варианты по авиабилетам, отелям, экскурсиям и уникальным впечатлениям. Это лучший способ подготовиться к поездке самостоятельно без лишних вложений.'},
    {img: 'assets/images/key-tours.png', title: 'Путешествия под «ключ» с сопровождением 24/7', desc: 'В услугу входят консультации с нашим travel экспертом, который сделает подбор и расчёт нескольких вариантов путешествия именно под ваши пожелания: авиа + отель + трансфер + уникальные впечатления.'}
  ]
}
