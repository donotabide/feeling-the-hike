import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "feeling the hike";
  tab1 = "thoughts";
  tab2 = "actions";
  tab3 = "memories";
  tab4 = "beings";
}
