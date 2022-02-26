import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-load-form",
  templateUrl: "./load-form.component.html",
  styleUrls: ["./load-form.component.scss"],
})
export class LoadFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;
  @Output() loadChangedEvent = new EventEmitter<number>();

  //TODO: <string> => create load request interface
  @Output() acceptLoadEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      loadType: new FormControl("1", Validators.required),
      torque: new FormControl(15, [Validators.required, Validators.min(0.001)]),
    });
  }

  public onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }

  public acceptLoad() {
    console.error("TODO: send load request object");
    this.acceptLoadEvent.emit("TODO: send load request object");
  }

  public torqueChanged($event) {
    const torque = this.form.get("torque").value;
    if (this.form.valid) {
      this.loadChangedEvent.emit(torque);
    }
  }
}
