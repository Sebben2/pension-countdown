import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CombComponent } from './comb.component';

@NgModule({
    imports: [NativeScriptModule],
    declarations: [CombComponent],
    bootstrap: [CombComponent]
})

export class CombModule {}
