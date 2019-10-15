import {Component, Input, } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div>Price: \${{event?.price}}</div>
        <div>
            <span class="pad-letf">Location: {{event?.location?.address}}</span>
            <span>{{event.location.city}}, {{event?.location?.country}} </span>
        </div>
    </div>
    `,
    styles: [`
    .thumbnail {min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div {color: #bbb;}
    `]
})
export class EventsThumbnailComponent {
    @Input() event:any;
}