import { Component, createNgModuleRef, Injector, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnDestroy {

  public showForm = false;
  constructor(private injector: Injector){}

  @ViewChild("myComponent", { read: ViewContainerRef })
  myComponent!: ViewContainerRef;
  
  formSubmittedSubscription = new Subscription();


  async loadForm() {
    const {LazyModule, MyComponentComponent} = await import("../lazy/my-component/my-component.component");
    const moduleRef = createNgModuleRef(LazyModule, this.injector);

    this.myComponent.clear();

    const {instance} = this.myComponent.createComponent(MyComponentComponent, {ngModuleRef: moduleRef});
    instance.buttonTitle = "Contact Us";
    
    this.formSubmittedSubscription = instance.formSubmitted.subscribe(() =>
        console.log("The Form Submit Event is captured!")
    );
}

ngOnDestroy(): void {
    this.formSubmittedSubscription.unsubscribe();
}
}
