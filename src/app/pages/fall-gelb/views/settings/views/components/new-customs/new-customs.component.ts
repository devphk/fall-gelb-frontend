import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomsService } from '../../customs/customs.service';
import { Transporttype } from '@shared/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { Map, Marker, marker, popup, tileLayer } from 'leaflet';
import { DialogData } from '../../../../../../../core/models/dialog';

@Component({
  selector: 'app-new-customs',
  templateUrl: './new-customs.component.html',
  styleUrls: ['./new-customs.component.scss']
})
export class NewCustomsComponent implements OnInit{


  customsForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '',),
    transport_types: this.fb.control(""),
  })
  transportType: Transporttype[] = [];
  selectedTypes: Transporttype[] = [];
  mapLongitude: number = 0;
  mapLatitude: number = 0;
  mapActualLongitude: number = 0;
  mapActualLatitude: number = 0;

  customForm: FormControl = new FormControl();


  
  constructor( private fb:FormBuilder,
               private customsService:CustomsService,
               private dialogRef:MatDialogRef<NewCustomsComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
    this.getTranspTypes();
    this.getSelectedTransType();
    this.getCurrentLocation();
    console.log('DATA: ', this.data);
  }

  getTranspTypes() {
    this.customsService
      .getCustoms()
        .subscribe((resp) => {
          resp.map((resp) => {
            resp.transport_types.map((transport_type) => {

              const index = this.transportType.findIndex(obj => obj.id === transport_type.id);
              
              if (index === -1) {
                this.transportType.push({
                  id: transport_type.id,
                  name: transport_type.name,
                  code: transport_type.code
              });
            }
          });
      });
    });
  }

  getSelectedTransType() {
    const transportTypeIds = [];
    
    if (this.data && this.data.dialogData && this.data.dialogData[0].transport_types) {
      for (let i = 0; i < this.data.dialogData[0].transport_types.length; i++) {
          transportTypeIds.push(this.data.dialogData[0].transport_types[i].id);
      }
    }
    
    this.selectedTypes = transportTypeIds;

    this.customForm = new FormControl(this.selectedTypes);
  }

    getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.mapActualLatitude = position.coords.latitude;
          this.mapActualLongitude = position.coords.longitude;
          console.log(this.mapActualLatitude)
          console.log(this.mapActualLongitude)
          this.showMapWithMarker();
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  showMapWithMarker(): void {
    if(this.data.dialogData === null) {
      
      console.log('Latitude',this.mapActualLatitude);
      console.log('Longitude', this.mapActualLongitude);
      const map = new Map('map').setView([this.mapActualLatitude, this.mapActualLongitude], 13);
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    
      const marker = new Marker([this.mapActualLatitude, this.mapActualLongitude]).addTo(map);

    }else{

      console.log('Latitude', this.data.dialogData[0].latitude);
      console.log('Longitude', this.data.dialogData[0].longitude);
      const map = new Map('map').setView([this.data.dialogData[0].latitude, this.data.dialogData[0].longitude], 8);
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    
      const marker = new Marker([this.data.dialogData[0].latitude, this.data.dialogData[0].longitude]).addTo(map);

    }
    
  }
  
  //Click on map to change location code
  // ngAfterViewInit(): void {

  //   const map = new Map('map').setView([7.721123907246407, -65.67882751949143], 5);
  //   tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);

  //   let previousMarker: Marker | null = null;

  //   map.on('click', (event) => {
  //     const latLng = event.latlng;
  //     this.mapLatitude = latLng.lat;
  //     this.mapLongitude = latLng.lng;
  //     console.log('Latitud:', this.mapLatitude, 'Longitud:', this.mapLongitude);

  //     if(previousMarker) {
  //       previousMarker.remove();
  //     }

  //     const newMarker = marker([this.mapLatitude, this.mapLongitude]).addTo(map);

  //     previousMarker = newMarker;
      
  //   });
  // }
  
  saveCustoms() {
    if (this.customsForm.valid) {
      if(this.data.title === 'Crear Aduana'){

        const custom = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.mapActualLatitude,
          longitude: this.mapActualLongitude,
          transport_types: this.customForm.value,  
        }
          console.log('Custom: ', custom)
        this.customsService.createCustom(custom)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Creada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => console.error('ERROR! :', error))

      }else{

        const customEdit = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.data.DialogData[0].latitude,
          longitude: this.data.DialogData[0].longitude,
          transport_types: this.customForm.value,
   
        }
  
        this.customsService.editCustom(customEdit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Editada Correctamente!")
            this.dialogRef.close(true);
          },
                     (error) => this.toastService.showToaster(error.error.message, true))

      }

    } else{
      this.customForm.markAllAsTouched();

    }
  }





}




