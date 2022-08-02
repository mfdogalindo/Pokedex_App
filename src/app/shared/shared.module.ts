import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./organisms/footer/footer.component";
import { HeaderComponent } from "./organisms/header/header.component";
import { ListFrameComponent } from "./organisms/list-frame/list-frame.component";
import { ScreenComponent } from './molecules/screen/screen.component';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule],
   declarations: [HeaderComponent, FooterComponent, ListFrameComponent, ScreenComponent],
   exports: [HeaderComponent, FooterComponent, ListFrameComponent]
})
export class SharedModule {}