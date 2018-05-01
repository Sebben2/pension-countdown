import { View } from "ui/core/view";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Particle } from './particle';

@Component({
    selector: 'app-comb',
    templateUrl: './comb.component.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CombComponent implements OnInit {
    @Input() particles: Particle[];
    @ViewChild('combImage') canvasRef: ElementRef;
    ngOnInit() {

    }
}