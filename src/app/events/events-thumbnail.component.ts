import {Component, Input, } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}} </span>
        </div>
    </div>
    `
})
export class EventsThumbnailComponent {
    @Input() event:any;
    someValue: any = "Some value";

    logFoo(){
        console.log('foo')
    }
}