import { Component } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
      selector: 'app-home',
      templateUrl: 'home.page.html',
      styleUrls: ['home.page.scss'],
})
export class HomePage {

      public options: GyroscopeOptions = {
            frequency: 1000
      }

      constructor(private gyroscope: Gyroscope) { }

      getGyro() {
            this.gyroscope.getCurrent(this.options)
            .then((orientation: GyroscopeOrientation) => {
                  alert('From Current: X: ' + orientation.x + 'Y: ' + orientation.y + 'Z: ' + orientation.z);
                  console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
            })

            .catch()
      }

      watchGyro() {
            this.gyroscope.watch()
            .subscribe((orientation: GyroscopeOrientation) => {
                  alert('From Watch: X: ' + orientation.x + 'Y: ' + orientation.y + 'Z: ' + orientation.z);
                  console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
            });     
      }
}
